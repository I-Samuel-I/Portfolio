import { rateLimit } from "@/src/hooks/rateLimit";
import { contactSchema } from "@/src/schemas/contact";
import { Resend } from "resend";
import { z } from "zod";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null; 

export async function POST(request: Request) {
  let body: unknown;
  let rateLimitResult;

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "anonymous";

  try {
    rateLimitResult = await rateLimit.limit(ip);
  } catch {
    return Response.json(
      {
        success: false,
        code: "RATE_LIMIT_UNAVAILABLE",
        error: "Rate limit service temporarily unavailable.",
      },
      { status: 503 },
    );
  }

  try {
    body = await request.json();
  } catch {
    return Response.json(
      {
        success: false,
        code: "INVALID_JSON",
        error: "Request body is invalid.",
      },
      { status: 400 },
    );
  }

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
      {
        success: false,
        code: "VALIDATION_ERROR",
        error: result.error.issues[0]?.message || "Invalid data.",
        fields: z.flattenError(result.error).fieldErrors,
      },
      { status: 400 },
    );
  }
  if (!resend) {
    return Response.json(
      {
        success: false,
        code: "EMAIL_SERVICE_NOT_CONFIGURED",
        error: "Email service is not configured.",
      },
      { status: 500 },
    );
  }
  if (!rateLimitResult.success) {
    return Response.json(
      {
        success: false,
        code: "RATE_LIMITED",
        error: "Too many attempts. Please try again later.",
      },
      {
        status: 429,
        headers: {
          "X-RateLimit-Limit": String(rateLimitResult.limit),
          "X-RateLimit-Remaining": String(rateLimitResult.remaining),
          "X-RateLimit-Reset": String(rateLimitResult.reset),
        },
      },
    );
  }

  const { name, email, subject, message, website } = result.data;

  if (website) {
    return Response.json(
      { message: "Message sent successfully." },
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
      { message: "Message sent successfully." },
      { status: 200 },
    );
  } catch (error) {
    console.log("Error sending message: ", error);

    return Response.json(
      { error: "It was not possible to send the message right now." },
      { status: 502 },
    );
  }
}
