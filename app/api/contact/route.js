
import nodemailer from "nodemailer";

export const runtime = "nodejs";

export async function POST(request) {
  try {
    const body = await request.json();

    const {
      name,
      company,
      email,
      phone,
      service,
      message,
      website,
    } = body;

    // Honeypot: silently reject automated spam submissions.
    if (website) {
      return Response.json({ success: true });
    }

    // Validate required fields.
    if (
      !name?.trim() ||
      !email?.trim() ||
      !service?.trim() ||
      !message?.trim()
    ) {
      return Response.json(
        { error: "Please complete all required fields." },
        { status: 400 }
      );
    }

    if (
      name.length > 100 ||
      email.length > 254 ||
      company?.length > 150 ||
      phone?.length > 40 ||
      service.length > 100 ||
      message.length > 5000
    ) {
      return Response.json(
        { error: "One or more fields are too long." },
        { status: 400 }
      );
    }

    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!validEmail.test(email.trim())) {
      return Response.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT || 465);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const recipient = process.env.CONTACT_TO;

    if (!host || !user || !pass || !recipient) {
      console.error("Contact form SMTP configuration is incomplete.");

      return Response.json(
        { error: "Email service is temporarily unavailable." },
        { status: 500 }
      );
    }

    if (![465, 587].includes(port)) {
      return Response.json(
        { error: "Email service configuration is invalid." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: {
        user,
        pass,
      },
      connectionTimeout: 15000,
      greetingTimeout: 15000,
      socketTimeout: 20000,
    });

    await transporter.sendMail({
      from: `"VEWZA Website" <${user}>`,
      to: recipient,
      replyTo: {
        name: name.trim(),
        address: email.trim(),
      },
      subject: `New VEWZA consultation request: ${service.trim()}`,
      text: `
New website enquiry

Name: ${name.trim()}
Company: ${company?.trim() || "N/A"}
Email: ${email.trim()}
Phone: ${phone?.trim() || "N/A"}
Service: ${service.trim()}

Message:
${message.trim()}
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Contact form email failed:", error.message);

    return Response.json(
      { error: "We could not send your message. Please try again later." },
      { status: 500 }
    );
  }
}
