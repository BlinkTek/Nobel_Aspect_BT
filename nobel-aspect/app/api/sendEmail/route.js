import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    // Parse the request body
    const { to, name, subject, body } = await request.json();

    // Access environment variables
    const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;
    console.log(SMTP_EMAIL, SMTP_PASSWORD);

    // Create the transporter object
    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: SMTP_EMAIL,
        pass: SMTP_PASSWORD,
      },
    });

    // Verify the connection configuration
    await transport.verify();

    // Send the email
    await transport.sendMail({
      from: SMTP_EMAIL,
      to,
      subject,
      html: body,
    });

    // Return a success response
    return new Response(JSON.stringify({ message: 'Email sent successfully' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error sending email:', error);
    // Return an error response
    return new Response(JSON.stringify({ message: 'Failed to send email' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
