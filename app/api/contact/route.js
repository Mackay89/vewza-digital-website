// app/api/contact/route.js
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, company, email, phone, service, message } = await request.json();

    if (!name || !email || !service || !message) {
      return Response.json({ error: "Missing required fields." }, { status: 400 });
    }

    await resend.emails.send({
      from: "VEWZA Digital <onboarding@resend.dev>", // swap for a verified domain sender
      to: "info@vewza.co.za",
      subject: `New consultation request: ${service}`,
      text: `
Name: ${name}
Company: ${company || "N/A"}
Email: ${email}
Phone: ${phone || "N/A"}
Service Required: ${service}

Message:
${message}
      `,
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error(err);
    return Response.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
