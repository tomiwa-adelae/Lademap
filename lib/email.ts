import Mailjet from "node-mailjet";

const mailjet = new Mailjet({
  apiKey: process.env.MAILJET_API_PUBLIC_KEY!,
  apiSecret: process.env.MAILJET_API_PRIVATE_KEY!,
});

const LADEMAB_BLUE = "#2563eb";
const LADEMAB_DARK = "#0f172a";

const subjectLabels: Record<string, string> = {
  general: "General Inquiry",
  tenders: "Tenders & Bidding",
  logistics: "Mobilization & Logistics",
  rental: "Equipment Rental",
  technical: "Technical Engineering",
};

export async function sendContactConfirmationEmail(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  const subjectLabel = subjectLabels[data.subject] || data.subject;
  const firstName = data.name.split(" ")[0];

  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; font-family: 'Arial', sans-serif; }
        .header { background-color: ${LADEMAB_DARK}; padding: 40px; text-align: center; border-bottom: 4px solid ${LADEMAB_BLUE}; }
        .content { padding: 40px; color: #1a1a1a; line-height: 1.6; }
        .highlight { background-color: #eff6ff; border-left: 4px solid ${LADEMAB_BLUE}; padding: 20px; margin: 20px 0; font-style: italic; color: #1e40af; }
        .footer { background-color: #f4f4f5; padding: 20px; text-align: center; font-size: 12px; color: #71717a; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1 style="color: #ffffff; margin: 0; font-size: 26px; letter-spacing: 4px; font-weight: 900;">LADEMAB</h1>
          <p style="color: ${LADEMAB_BLUE}; margin: 6px 0 0; font-size: 11px; text-transform: uppercase; letter-spacing: 2px;">Nigeria Limited — Logistics & Supply Chain</p>
        </div>
        <div class="content">
          <h2 style="color: ${LADEMAB_DARK};">Inquiry Received</h2>
          <p>Hello ${firstName},</p>
          <p>Thank you for reaching out to LADEMAB Nigeria Limited. We have received your enquiry regarding <strong>${subjectLabel}</strong> and our team is reviewing your requirements.</p>
          <div class="highlight">"${data.message}"</div>
          <p><strong>What happens next?</strong> A LADEMAB logistics consultant will contact you within <strong>2 business hours</strong> to discuss your needs and provide the support you require.</p>
          <p style="margin-top: 32px;">Warm regards,<br/><strong>LADEMAB Nigeria Limited</strong><br/><span style="color: #64748b; font-size: 13px;">Logistics & Supply Chain Division</span></p>
        </div>
        <div class="footer">
          <p style="margin: 0;">&copy; ${new Date().getFullYear()} LADEMAB Nigeria Limited. All rights reserved.</p>
          <p style="margin: 4px 0 0;">Reliability • Integrity • Excellence</p>
        </div>
      </div>
    </body>
    </html>
  `;

  return mailjet.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: {
          Email: process.env.SENDER_EMAIL_ADDRESS!,
          Name: "LADEMAB Nigeria Limited",
        },
        To: [{ Email: data.email, Name: data.name }],
        Subject: `LADEMAB: We've Received Your Enquiry [${subjectLabel}]`,
        HTMLPart: htmlContent,
      },
    ],
  });
}

export async function sendContactAdminNotificationEmail(data: {
  id: string;
  firstName: string;
  lastName: string;
  company?: string | null;
  email: string;
  phone: string;
  subject: string;
  message: string;
  createdAt: Date;
}) {
  const subjectLabel = subjectLabels[data.subject] || data.subject;

  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <body style="font-family: Arial, sans-serif; color: #333; margin: 0; padding: 0;">
      <div style="background-color: ${LADEMAB_BLUE}; color: white; padding: 24px 32px; border-bottom: 4px solid ${LADEMAB_DARK};">
        <h2 style="margin: 0; font-size: 20px; letter-spacing: 1px;">New Enquiry — LADEMAB Portal</h2>
        <p style="margin: 4px 0 0; font-size: 12px; opacity: 0.85;">Ref: ${data.id}</p>
      </div>
      <div style="padding: 32px; border: 1px solid #e2e8f0;">
        <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; width: 130px; color: #64748b;">Category</td>
            <td style="padding: 8px 0;"><span style="background: #eff6ff; color: ${LADEMAB_BLUE}; padding: 4px 10px; border-radius: 4px; font-weight: bold;">${subjectLabel}</span></td>
          </tr>
          <tr><td colspan="2"><hr style="border: none; border-top: 1px solid #e2e8f0; margin: 12px 0;" /></td></tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #64748b;">Full Name</td>
            <td style="padding: 8px 0;">${data.firstName} ${data.lastName}</td>
          </tr>
          ${data.company ? `
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #64748b;">Company</td>
            <td style="padding: 8px 0;">${data.company}</td>
          </tr>` : ""}
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #64748b;">Email</td>
            <td style="padding: 8px 0;"><a href="mailto:${data.email}" style="color: ${LADEMAB_BLUE};">${data.email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #64748b;">Phone</td>
            <td style="padding: 8px 0;"><a href="tel:${data.phone}" style="color: ${LADEMAB_BLUE};">${data.phone}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #64748b;">Submitted</td>
            <td style="padding: 8px 0;">${data.createdAt.toLocaleString("en-NG", { dateStyle: "full", timeStyle: "short" })}</td>
          </tr>
        </table>

        <h3 style="margin-top: 28px; color: ${LADEMAB_DARK}; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px;">Message</h3>
        <div style="background: #f8fafc; padding: 20px; border-radius: 6px; white-space: pre-wrap; font-size: 15px; line-height: 1.6;">${data.message}</div>

        <div style="margin-top: 32px;">
          <a href="mailto:${data.email}?subject=RE: LADEMAB Enquiry — ${subjectLabel}"
             style="background-color: ${LADEMAB_BLUE}; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">
            Reply to Client
          </a>
        </div>
      </div>
      <div style="background: #f8fafc; padding: 16px 32px; text-align: center; font-size: 12px; color: #94a3b8;">
        LADEMAB Nigeria Limited — Internal Notification System
      </div>
    </body>
    </html>
  `;

  try {
    await mailjet.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            Email: process.env.SENDER_EMAIL_ADDRESS!,
            Name: "LADEMAB Web Portal",
          },
          To: [{ Email: process.env.ADMIN_EMAIL_ADDRESS!, Name: "LADEMAB Admin" }],
          Subject: `[NEW ENQUIRY] ${subjectLabel} — ${data.firstName} ${data.lastName}`,
          HTMLPart: htmlContent,
        },
      ],
    });
    return { success: true };
  } catch (error) {
    console.error("LADEMAB_ADMIN_MAIL_FAIL:", error);
    return { success: false };
  }
}
