import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Resume from './models/Resume.js';
dotenv.config();

async function run() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        const resume = await Resume.findById("69a97f677959740e13e66d88");
        if (!resume) {
            console.log("No resume!");
            return;
        }

        const userId = resume.userId;
        console.log("Found resume with userId:", userId);

        const response = await fetch("http://localhost:5000/api/resume/analyze/69a97f677959740e13e66d88", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'x-user-id': userId },
            body: JSON.stringify({ jobDescription: '' })
        });
        const text = await response.text();
        console.log("Status:", response.status);
        console.log("Response:", text);

        await mongoose.disconnect();
    } catch (e) {
        console.error(e);
    }
}
run();
