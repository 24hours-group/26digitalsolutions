import { Resend } from 'resend';

const apiKey = process.env.RESEND_API_KEY;
const fromEmail = process.env.RESEND_FROM_EMAIL || 'noreply@26digitalsolutions.com';
const toEmail = process.env.RESEND_TO_EMAIL || 'office@26digitalsolutions.com';

export const resend = apiKey ? new Resend(apiKey) : null;

if (!resend) {
  console.warn('Resend API key is missing. Running in mock/development mode.');
}

/**
 * Sends an email using the Resend client or prints it to the console in mock mode.
 * @param {Object} params
 * @param {string} params.subject - The subject line of the email.
 * @param {string} params.html - The HTML content.
 * @param {Array<Object>} [params.attachments] - Array of attachments.
 */
export async function sendFormEmail({ subject, html, attachments }) {
  if (resend) {
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject,
      html,
      attachments,
    });
    if (error) {
      throw error;
    }
    return data;
  } else {
    console.log('--- Mock Resend Email Notification ---');
    console.log(`From: ${fromEmail}`);
    console.log(`To: ${toEmail}`);
    console.log(`Subject: ${subject}`);
    console.log('Body HTML:\n', html);
    if (attachments && attachments.length > 0) {
      console.log('Attachments:', attachments.map(a => `${a.filename} (${a.content ? a.content.length : 0} bytes)`).join(', '));
    }
    console.log('--------------------------------------');
    // Simulate brief network delay
    await new Promise((resolve) => setTimeout(resolve, 600));
    return { id: 'mock-email-id-' + Date.now() };
  }
}
