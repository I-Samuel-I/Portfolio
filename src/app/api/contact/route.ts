import { contactSchema } from "@/src/schemas/contact";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const body = await request.json();
  const result = contactSchema.safeParse(body);

  function escapeHtml(value: string) {
    return value
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }


  if (!result.success) {
    return Response.json(
      { error: "Dados inválidos", fields: result.error.flatten().fieldErrors },
      { status: 400 },
    );
  }

  if (!process.env.RESEND_API_KEY) {
    return Response.json(
      { error: "Serviço de email não configurado." },
      { status: 500 },
    );
  }

  const { name, email, subject, message, website } = result.data;

  if (website) {
    return Response.json(
      { message: "Mensagem enviada com sucesso." },
      { status: 200 },
    );
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeSubject = escapeHtml(subject);
  const safeMessage = escapeHtml(message);

  try {
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "samgomes.dev@gmail.com",
      replyTo: email,
      subject: `Novo contato pelo portfolio feito pelo ${name}`,
      html: `
      <h1>Nova mensagem pelo portfolio</h1>

      <p><strong>Nome:</strong> ${safeName}</p>
      <p><strong>Email:</strong> ${safeEmail}</p>
      <p><strong>Assunto:</strong> ${safeSubject}</p>

      <p><strong>Mensagem:</strong></p>
      <p>${safeMessage}</p>
    `,
    });

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: email,
      subject: "Recebi sua mensagem",
      html: `
      <h1>Obrigado pelo contato, ${name}!</h1>

      <p>Recebi sua mensagem e entrarei em contato em breve.</p>

      <p>Abraços,<br />Samuel Gomes</p>
    `,
    });

    return Response.json(
      { message: "Mensagem enviada com sucesso" },
      { status: 200 },
    );
  } catch (error) {
    console.log("Erro ao envir mensagem: ", error);

    return Response.json(
      { error: "Não foi possível enviar a mensagem agora." },
      { status: 500 },
    );
  }
}
