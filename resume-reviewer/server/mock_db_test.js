import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Resume from './models/Resume.js';
dotenv.config();

async function runTest() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        const newResume = new Resume({
            userId: 'test-user-123',
            originalFileName: 'fake_resume.pdf',
            extractedText: 'Software Engineer with 10 years experience in Node.js, React, and MongoDB. Proven track record of scaling high-traffic applications.',
            fileType: 'pdf'
        });
        const saved = await newResume.save();
        console.log("Mock resume inserted:", saved._id);

        const resAnalyze = await fetch(`http://localhost:5000/api/resume/analyze/${saved._id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-user-id': 'test-user-123'
            },
            body: JSON.stringify({ jobDescription: 'Looking for a Senior Software Engineer with Node.js experience' })
        });

        const analyzeData = await resAnalyze.text();
        console.log("Analyze result status:", resAnalyze.status);
        console.log("Analyze result body:", analyzeData);

        await mongoose.disconnect();
    } catch (e) {
        console.error("Test failed", e);
    }
}
runTest();
