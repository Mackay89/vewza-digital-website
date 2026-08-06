import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, service, budget, message } = await request.json();

    if (!name || !email) {
      return Response.json({ error: "Missing required fields." }, { status: 400 });
    }

    await resend.emails.send({
      from: "VEWZA Digital Chat <onboarding@resend.dev>",
      to: "info@vewza.co.za",
      subject: `New chat lead: ${name}`,
      text: `
Name: ${name}
Email: ${email}
Interested in: ${service || "N/A"}
Budget: ${budget || "N/A"}

Message:
${message || "N/A"}
      `,
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error(err);
    return Response.json({ error: "Something went wrong." }, { status: 500 });
  }
}
