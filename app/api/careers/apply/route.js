import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const formData = await request.formData();
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const role = formData.get("role");
    const message = formData.get("message");
    const cv = formData.get("cv");

    if (!name || !email || !cv) {
      return Response.json({ error: "Missing required fields." }, { status: 400 });
    }

    const buffer = Buffer.from(await cv.arrayBuffer());

    await resend.emails.send({
      from: "VEWZA Digital Careers <onboarding@resend.dev>",
      to: "careers@vewza.co.za",
      subject: `New CV submission: ${name}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone || "N/A"}
Area of interest: ${role || "N/A"}

About:
${message || "N/A"}
      `,
      attachments: [{ filename: cv.name, content: buffer }],
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error(err);
    return Response.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
