import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Resume from './models/Resume.js';
import { requestResumeAnalysis } from './utils/gemini.js';
dotenv.config();

async function runTest() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        const resume = await Resume.findById('69a97f677959740e13e66d88');
        if (!resume) {
            console.log("Resume not found");
        } else {
            console.log("Extracted text length:", resume.extractedText ? resume.extractedText.length : 0);
            try {
                const analysis = await requestResumeAnalysis(resume.extractedText, "Software Engineer");
                console.log("Analysis success!", analysis);
            } catch (err) {
                console.error("Analysis failed:", err);
            }
        }
        await mongoose.disconnect();
    } catch (e) {
        console.error("Test failed", e);
    }
}
runTest();
