import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

export const sendResumeEmail = async ({ toEmail, name, pdfBase64 }) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS, // App password, not Gmail login password
        },
    });

    const pdfBuffer = Buffer.from(pdfBase64, 'base64');

    await transporter.sendMail({
        from: `"Resume AI" <${process.env.EMAIL_USER}>`,
        to: toEmail,
        subject: `Your AI-Generated Resume is Ready, ${name}!`,
        html: `
            <div style="font-family: Inter, sans-serif; max-width: 600px; margin: auto; padding: 32px; color: #1a1a2e;">
                <h2 style="color: #2563eb;">Your resume is ready! 🎉</h2>
                <p>Hi <strong>${name}</strong>,</p>
                <p>Your AI-optimized, ATS-ready resume has been generated and is attached to this email.</p>
                <p style="color: #6b7280; font-size: 14px;">Tip: Review the resume carefully and personalize it with any details the AI may have estimated.</p>
                <br/>
                <p>Good luck with your application! 🚀</p>
                <p style="color: #9ca3af; font-size: 12px;">— Resume AI Team</p>
            </div>
        `,
        attachments: [
            {
                filename: `${name.replace(/\s+/g, '_')}_Resume.pdf`,
                content: pdfBuffer,
                contentType: 'application/pdf',
            },
        ],
    });
};
