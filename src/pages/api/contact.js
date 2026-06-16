import { sendFormEmail } from '../../utils/resendClient';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  const { firstname, lastname, email, phone, company, message } = req.body;

  // Simple validation
  if (!firstname || !lastname || !email || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    const emailHtml = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
        <h2 style="color: #1a1a1a; border-bottom: 2px solid #1B49FF; padding-bottom: 10px; margin-top: 0;">New Contact Form Submission</h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; width: 120px; color: #555;">Name:</td>
            <td style="padding: 8px 0; color: #1a1a1a;">${firstname} ${lastname}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #555;">Email:</td>
            <td style="padding: 8px 0; color: #1a1a1a;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #555;">Phone:</td>
            <td style="padding: 8px 0; color: #1a1a1a;">${phone || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #555;">Company:</td>
            <td style="padding: 8px 0; color: #1a1a1a;">${company || 'N/A'}</td>
          </tr>
        </table>
        <div style="margin-top: 24px; padding: 15px; background-color: #f9f9f9; border-radius: 6px; border-left: 4px solid #B89860;">
          <h4 style="margin-top: 0; margin-bottom: 8px; color: #555;">Message:</h4>
          <p style="margin: 0; line-height: 1.5; color: #1a1a1a; white-space: pre-wrap;">${message}</p>
        </div>
      </div>
    `;

    await sendFormEmail({
      subject: `New Contact Request: ${firstname} ${lastname}`,
      html: emailHtml,
    });

    return res.status(200).json({ message: 'Success! Contact submission processed.' });
  } catch (err) {
    console.error('Contact submission error:', err);
    return res.status(500).json({ message: 'Failed to process contact submission', error: err.message });
  }
}
