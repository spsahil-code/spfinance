import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface EmailSubmissionData {
  name: string;
  phone: string;
  email: string;
  panCardUrl: string;
  aadhaarCardUrl: string;
}

export async function sendSubmissionEmail(data: EmailSubmissionData) {
  const { name, phone, email, panCardUrl, aadhaarCardUrl } = data;

  try {
    await resend.emails.send({
      from: 'Petkar Accounting <notifications@petkaraccounting.com>',
      to: 'sahilpets4@gmail.com',
      subject: `New ITR Filing Submission from ${name}`,
      html: `
        <h2>New ITR Filing Submission</h2>
        <p>A new client has submitted their ITR filing details:</p>
        <h3>Client Details:</h3>
        <ul>
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Phone:</strong> ${phone}</li>
          <li><strong>Email:</strong> ${email}</li>
        </ul>
        <h3>Documents:</h3>
        <ul>
          <li><a href="${panCardUrl}">View PAN Card</a></li>
          <li><a href="${aadhaarCardUrl}">View Aadhaar Card</a></li>
        </ul>
        <p>Please review the submission and take necessary action.</p>
      `
    });

    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Failed to send email' };
  }
}