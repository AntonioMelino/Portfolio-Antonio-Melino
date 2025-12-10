// /app/api/contact/route.ts
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body ?? {};

    // Validación
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Faltan campos requeridos" }),
        { status: 400 }
      );
    }

    // Enviar email
    await resend.emails.send({
      from: "Portfolio <antoniomelino1997@gmail.com>", // <= CAMBIADO
      to: process.env.EMAIL_TO!, // <= limpio y seguro
      subject: `Nuevo mensaje desde tu portfolio: ${name}`,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <hr />
        <p><strong>Mensaje:</strong></p>
        <p>${message.replace(/\n/g, "<br/>")}</p>
      `,
    });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (error) {
    console.error("Error al enviar email:", error);
    return new Response(
      JSON.stringify({ error: "Error al enviar el mensaje" }),
      { status: 500 }
    );
  }
}
