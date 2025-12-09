// /app/api/form/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

function generateHtmlEmail(data: {
  role: string;
  roofType: string;
  revenue: string;
  fullName: string;
  phone: string;
  email: string;
  businessName: string;
}) {
  // Inline CSS for better email client compatibility
  return `
  <!doctype html>
  <html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Form Submission</title>
  </head>
  <body style="margin:0;padding:0;background-color:#f4f6f8;font-family:Inter, Helvetica, Arial, sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
      <tr>
        <td align="center" style="padding:24px 12px;">
          <table width="620" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 6px 30px rgba(10,10,10,0.08);">
            <tr>
              <td style="padding:28px 32px;border-bottom:1px solid #eef2f6;">
                <h1 style="margin:0;font-size:20px;color:#0b2545;">🎉New Lead — Rooferstage Form Submission</h1>
                <p style="margin:6px 0 0;color:#5b6b7a;font-size:14px;">
                  A new user submitted the qualification form. Details are below.
                </p>
              </td>
            </tr>

            <tr>
              <td style="padding:22px 32px;">
                <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="font-size:14px;color:#253246;">
                  <!-- Summary row -->
                  <tr>
                    <td style="padding-bottom:12px;">
                      <strong style="display:inline-block;width:140px;color:#0b2545;">Role</strong>
                      <span style="color:#374151;">${escapeHtml(
                        data.role || "—"
                      )}</span>
                    </td>
                  </tr>

                  <tr>
                    <td style="padding-bottom:12px;">
                      <strong style="display:inline-block;width:140px;color:#0b2545;">Roof Type</strong>
                      <span style="color:#374151;">${escapeHtml(
                        data.roofType || "—"
                      )}</span>
                    </td>
                  </tr>

                  <tr>
                    <td style="padding-bottom:12px;">
                      <strong style="display:inline-block;width:140px;color:#0b2545;">Monthly Revenue</strong>
                      <span style="color:#374151;">${escapeHtml(
                        data.revenue || "—"
                      )}</span>
                    </td>
                  </tr>

                  <tr>
                    <td style="padding-top:10px;padding-bottom:6px;border-top:1px dashed #e6eef6;">
                      <h3 style="margin:12px 0 6px;font-size:16px;color:#0b2545;">Contact Details</h3>
                    </td>
                  </tr>

                  <tr>
                    <td style="padding-bottom:8px;">
                      <strong style="display:inline-block;width:140px;color:#0b2545;">Full name</strong>
                      <span style="color:#374151;">${escapeHtml(
                        data.fullName || "—"
                      )}</span>
                    </td>
                  </tr>

                  <tr>
                    <td style="padding-bottom:8px;">
                      <strong style="display:inline-block;width:140px;color:#0b2545;">Phone</strong>
                      <span style="color:#374151;">${escapeHtml(
                        data.phone || "—"
                      )}</span>
                    </td>
                  </tr>

                  <tr>
                    <td style="padding-bottom:8px;">
                      <strong style="display:inline-block;width:140px;color:#0b2545;">Email</strong>
                      <a href="mailto:${encodeURIComponent(
                        data.email || ""
                      )}" style="color:#2563eb;text-decoration:none;">${escapeHtml(
    data.email || "—"
  )}</a>
                    </td>
                  </tr>

                  <tr>
                    <td style="padding-bottom:8px;">
                      <strong style="display:inline-block;width:140px;color:#0b2545;">Business</strong>
                      <span style="color:#374151;">${escapeHtml(
                        data.businessName || "—"
                      )}</span>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>

            <tr>
              <td style="background:#fbfcff;padding:16px 32px;border-top:1px solid #eef2f6;text-align:center;">
                <p style="margin:0;font-size:13px;color:#6b7280;">
                  Received on ${new Date().toLocaleString()}
                </p>
              </td>
            </tr>

          </table>

          <p style="font-size:12px;color:#9aa6b2;margin-top:12px;">
            This email was generated automatically. Do not reply to this message.
          </p>
        </td>
      </tr>
    </table>
  </body>
  </html>
  `;
}

// Basic HTML-escape to avoid breaking the template if input contains special chars
function escapeHtml(unsafe: string) {
  if (!unsafe) return "";
  return unsafe
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // transporter using gmail SMTP (app password)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const htmlBody = generateHtmlEmail({
      role: data.role,
      roofType: data.roofType,
      revenue: data.revenue,
      fullName: data.fullName,
      phone: data.phone,
      email: data.email,
      businessName: data.businessName,
    });

    const mailOptions = {
      from: `"Website Form" <${process.env.GMAIL_USER}>`,
      to: process.env.SEND_TO,
      subject: "📩 New Qualification Form Submission",
      text:
        `New form submission\n\n` +
        `Role: ${data.role || "—"}\n` +
        `Roof Type: ${data.roofType || "—"}\n` +
        `Revenue: ${data.revenue || "—"}\n` +
        `Full Name: ${data.fullName || "—"}\n` +
        `Phone: ${data.phone || "—"}\n` +
        `Email: ${data.email || "—"}\n` +
        `Business Name: ${data.businessName || "—"}\n`,
      html: htmlBody,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("EMAIL SEND ERROR:", error);
    return NextResponse.json(
      { message: "Failed to send email.", error: String(error) },
      { status: 500 }
    );
  }
}
