import { Resend } from "resend";
import { EmailTemplate } from "./email";

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const request = await req.json();
  const { data, error } = await resend.emails.send({
    from: "Hi <hi@mshub.dev>",
    to: ["misho@mshub.dev"],
    subject: "Resend Events",
    react: EmailTemplate({ data: JSON.stringify(request) }),
  });

  console.log(req);
  console.log(data, error);
}
