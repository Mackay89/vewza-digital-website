import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, company, email, phone, service, message } = await request.json();

    if (!name || !email || !service || !message) {
      return Response.json({ error: "Missing required fields." }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL || "VEWZA Digital <onboarding@resend.dev>",
      to: process.env.CONTACT_TO_EMAIL || "info@vewza.co.za",
      replyTo: email,
      subject: `New consultation request: ${service}`,
      text: `Name: ${name}
Company: ${company || "N/A"}
Email: ${email}
Phone: ${phone || "N/A"}
Service Required: ${service}

Message:
${message}`,
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json({ error: "We couldn't send your message right now. Please try again shortly." }, { status: 502 });
    }

    return Response.json({ success: true });
  } catch (err) {
    console.error(err);
    return Response.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
