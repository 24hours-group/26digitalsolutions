import formidable from 'formidable';
import fs from 'fs';
import { sendFormEmail } from '../../utils/resendClient';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  const form = formidable({});

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error('Formidable parsing error:', err);
      return res.status(500).json({ message: 'Error parsing upload form', error: err.message });
    }

    const firstname = Array.isArray(fields.firstname) ? fields.firstname[0] : fields.firstname;
    const lastname = Array.isArray(fields.lastname) ? fields.lastname[0] : fields.lastname;
    const email = Array.isArray(fields.email) ? fields.email[0] : fields.email;
    const location = Array.isArray(fields.location) ? fields.location[0] : fields.location;
    const role = Array.isArray(fields.role) ? fields.role[0] : fields.role;

    const cvFile = Array.isArray(files.cv) ? files.cv[0] : files.cv;

    if (!firstname || !lastname || !email || !location || !role || !cvFile) {
      return res.status(400).json({ message: 'Missing required fields or file' });
    }

    try {
      // Build HTML body
      const emailHtml = `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <h2 style="color: #1a1a1a; border-bottom: 2px solid #1B49FF; padding-bottom: 10px; margin-top: 0;">New Job Application</h2>
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
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Location:</td>
              <td style="padding: 8px 0; color: #1a1a1a;">${location}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Role Applied:</td>
              <td style="padding: 8px 0; color: #1a1a1a; font-weight: bold; color: #B89860;">${role}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Resume Filename:</td>
              <td style="padding: 8px 0; color: #1a1a1a; font-family: monospace;">${cvFile.originalFilename}</td>
            </tr>
          </table>
          <p style="margin-top: 24px; color: #555; font-size: 13px;">
            Note: The applicant's resume is attached directly to this email.
          </p>
        </div>
      `;

      // Read file content as Buffer
      const fileContent = fs.readFileSync(cvFile.filepath);

      // Send Email
      await sendFormEmail({
        subject: `New Job Application: ${role} - ${firstname} ${lastname}`,
        html: emailHtml,
        attachments: [
          {
            filename: cvFile.originalFilename,
            content: fileContent,
          }
        ]
      });

      return res.status(200).json({ message: 'Application submitted successfully!' });
    } catch (uploadErr) {
      console.error('Application processing error:', uploadErr);
      return res.status(500).json({ message: 'Failed to process application', error: uploadErr.message });
    }
  });
}
