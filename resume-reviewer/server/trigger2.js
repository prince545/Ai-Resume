import fs from "fs";

async function run() {
    try {
        console.log("Uploading dummy.pdf...");
        const fileData = fs.readFileSync('dummy.pdf');
        const formData = new FormData();
        formData.append('resume', new Blob([fileData], { type: 'application/pdf' }), 'dummy.pdf');

        const resUpload = await fetch('http://localhost:5000/api/resume/upload', {
            method: 'POST',
            headers: {
                'x-user-id': 'test-user-123'
            },
            body: formData
        });

        const uploadData = await resUpload.json();
        console.log("Upload result:", uploadData);

        if (!uploadData.resumeId) {
            console.error("No resumeId returned");
            return;
        }

        console.log("Analyzing resume ID:", uploadData.resumeId);
        const resAnalyze = await fetch(`http://localhost:5000/api/resume/analyze/${uploadData.resumeId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-user-id': 'test-user-123'
            },
            body: JSON.stringify({ jobDescription: 'Software Engineer' })
        });

        const analyzeData = await resAnalyze.text();
        console.log("Analyze result status:", resAnalyze.status);
        console.log("Analyze result body:", analyzeData);

    } catch (e) {
        console.error(e);
    }
}
run();
