// app/api/voluntario/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (ch) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[ch] as string));
}

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    // Honeypot anti-spam
    if (String(form.get("website") || "").trim() !== "") {
      return NextResponse.redirect(new URL("/obrigado", req.url), 303);
    }

    const nome = String(form.get("nome") || "").trim();
    const email = String(form.get("email") || "").trim();
    const telefone = String(form.get("telefone") || "").trim();
    const mensagem = String(form.get("mensagem") || "").trim();

    if (!nome || !email) {
      return NextResponse.json({ ok: false, error: "Nome e e-mail são obrigatórios." }, { status: 400 });
    }

    const FROM = process.env.EMAIL_FROM!;
    const TO = process.env.EMAIL_TO!;

    const adminSubject = `Novo voluntário: ${nome}`;
    const adminText =
`Nome: ${nome}
Email: ${email}
WhatsApp: ${telefone || "-"}
Mensagem: ${mensagem || "-"}`;

    const adminHtml = `
      <h2>Novo voluntário</h2>
      <p><strong>Nome:</strong> ${escapeHtml(nome)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>WhatsApp:</strong> ${escapeHtml(telefone || "-")}</p>
      <p><strong>Mensagem:</strong><br/>${escapeHtml(mensagem || "-").replace(/\n/g, "<br/>")}</p>
      <hr/>
      <p>Recebido em: ${new Date().toLocaleString()}</p>
    `;

    const userSubject = "Recebemos sua inscrição de voluntariado";
    const userText =
`Olá, ${nome}!

Obrigado por se voluntariar no Estação Sorriso.
Em breve entraremos em contato.

Resumo:
- Email: ${email}
- WhatsApp: ${telefone || "-"}

Abraços,
Equipe Estação Sorriso`;

    const userHtml = `
      <p>Olá, <strong>${escapeHtml(nome)}</strong>!</p>
      <p>Obrigado por se voluntariar no <strong>Estação Sorriso</strong>. Em breve entraremos em contato.</p>
      <p><strong>Resumo</strong><br/>
      Email: ${escapeHtml(email)}<br/>
      WhatsApp: ${escapeHtml(telefone || "-")}</p>
      <p>Abraços,<br/>Equipe Estação Sorriso</p>
    `;

    // Envia os dois e-mails em paralelo
    const [adminRes, userRes] = await Promise.all([
      resend.emails.send({
        from: FROM,
        to: TO,
        subject: adminSubject,
        text: adminText,
        html: adminHtml,
        replyTo: email, // facilita responder direto ao voluntário
      }),
      resend.emails.send({
        from: FROM,
        to: email, // e-mail do voluntário
        subject: userSubject,
        text: userText,
        html: userHtml,
      }),
    ]);

    if (adminRes.error || userRes.error) {
      console.error("Erro ao enviar e-mails:", adminRes.error || userRes.error);
      return NextResponse.json({ ok: false, error: "Falha ao enviar e-mail." }, { status: 500 });
    }

    return NextResponse.redirect(new URL("/obrigado", req.url), 303);
  } catch (err: any) {
    console.error("Erro no endpoint voluntario:", err?.message || err);
    return NextResponse.json({ ok: false, error: "Erro interno." }, { status: 500 });
  }
}
