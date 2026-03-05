import { generateResume, generateCoverLetter } from '../utils/generateResume.js';
import { sendResumeEmail } from '../utils/emailSender.js';

export const handleGenerateResume = async (req, res) => {
    try {
        const { name, email, phone, location, linkedin, jobDescription, experience, education, skills, projects } = req.body;

        if (!name || !email || !jobDescription || !experience) {
            return res.status(400).json({ error: 'name, email, jobDescription, and experience are required.' });
        }

        const resumeData = await generateResume({ name, email, phone, location, linkedin, jobDescription, experience, education, skills, projects });

        res.status(200).json({ resumeData });
    } catch (error) {
        console.error('Generate Resume Error:', error);
        res.status(500).json({ error: 'Failed to generate resume. Please try again.' });
    }
};

export const handleGenerateCoverLetter = async (req, res) => {
    try {
        const { resumeData, jobDescription } = req.body;

        if (!resumeData || !jobDescription) {
            return res.status(400).json({ error: 'resumeData and jobDescription are required.' });
        }

        const coverLetter = await generateCoverLetter(resumeData, jobDescription);

        res.status(200).json({ coverLetter });
    } catch (error) {
        console.error('Cover Letter Error:', error);
        res.status(500).json({ error: 'Failed to generate cover letter. Please try again.' });
    }
};

export const handleEmailResume = async (req, res) => {
    try {
        const { toEmail, name, pdfBase64 } = req.body;

        if (!toEmail || !name || !pdfBase64) {
            return res.status(400).json({ error: 'toEmail, name, and pdfBase64 are required.' });
        }

        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
            return res.status(503).json({ error: 'Email service not configured on the server.' });
        }

        await sendResumeEmail({ toEmail, name, pdfBase64 });

        res.status(200).json({ message: `Resume sent to ${toEmail} successfully.` });
    } catch (error) {
        console.error('Email Error:', error);
        res.status(500).json({ error: 'Failed to send email. Please try again.' });
    }
};
