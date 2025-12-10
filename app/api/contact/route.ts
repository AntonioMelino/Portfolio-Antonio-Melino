export async function POST(req: Request) {
  console.log("=== INICIANDO API CONTACT ===");

  try {
    // 1. Parsear el body
    const body = await req.json();
    console.log("Body recibido:", body);

    const { name, email, message } = body ?? {};

    // 2. Validación
    if (!name || !email || !message) {
      console.log("Error: Faltan campos");
      return new Response(
        JSON.stringify({
          error: "Faltan campos requeridos",
          details: { name, email, message },
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    console.log("✅ Campos validados correctamente");

    // 3. Verificar variables de entorno
    console.log("Verificando variables de entorno...");
    const requiredEnvVars = [
      "EMAILJS_SERVICE_ID",
      "EMAILJS_TEMPLATE_ID",
      "EMAILJS_PUBLIC_KEY",
      "EMAIL_TO",
    ];

    const missingVars = requiredEnvVars.filter(
      (varName) => !process.env[varName]
    );

    if (missingVars.length > 0) {
      console.log("❌ Variables faltantes:", missingVars);
      return new Response(
        JSON.stringify({
          error: "Configuración incompleta",
          missingVariables: missingVars,
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    console.log("✅ Todas las variables de entorno existen");

    // 4. Preparar datos para EmailJS
    const templateParams = {
      name,
      email,
      message,
      to_email: process.env.EMAIL_TO,
      date: new Date().toLocaleString("es-ES"),
      reply_to: email, // Para que puedas responder directamente
    };

    // 5. Preparar cuerpo de la petición
    const requestBody: any = {
      service_id: process.env.EMAILJS_SERVICE_ID,
      template_id: process.env.EMAILJS_TEMPLATE_ID,
      user_id: process.env.EMAILJS_PUBLIC_KEY,
      template_params: templateParams,
    };

    // 6. Agregar Private Key si está disponible (recomendado)
    if (process.env.EMAILJS_PRIVATE_KEY) {
      requestBody.accessToken = process.env.EMAILJS_PRIVATE_KEY;
      console.log("✅ Usando Private Key para autenticación");
    }

    console.log("Enviando a EmailJS...");

    // 7. Hacer la petición a EmailJS
    const emailjsResponse = await fetch(
      "https://api.emailjs.com/api/v1.0/email/send",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(requestBody),
      }
    );

    const responseText = await emailjsResponse.text();
    console.log("📧 Respuesta de EmailJS:", {
      status: emailjsResponse.status,
      statusText: emailjsResponse.statusText,
      body: responseText,
    });

    if (!emailjsResponse.ok) {
      // Si es error 403, dar instrucciones específicas
      if (emailjsResponse.status === 403) {
        throw new Error(
          `Error 403: EmailJS bloquea llamadas desde servidor. ` +
            `Ve a dashboard.emailjs.com/admin → Account → Security → ` +
            `"Allow requests from non-browser applications" y actívalo.`
        );
      }
      throw new Error(
        `EmailJS error ${emailjsResponse.status}: ${responseText}`
      );
    }

    console.log("✅ Email enviado exitosamente!");

    return new Response(
      JSON.stringify({
        ok: true,
        message: "Email enviado correctamente",
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error: any) {
    console.error("❌ ERROR en API contact:", error.message);

    return new Response(
      JSON.stringify({
        error: "Error al enviar el mensaje",
        details: error.message,
        solution:
          "Por favor, habilita 'Allow requests from non-browser applications' en EmailJS",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
