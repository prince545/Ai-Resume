import fs from 'fs';

async function test() {
    const fileBuffer = fs.readFileSync('dummy.pdf');
    const blob = new Blob([fileBuffer], { type: 'application/pdf' });
    const formData = new FormData();
    formData.append('resume', blob, 'dummy.pdf');

    try {
        const res = await fetch('http://localhost:5000/api/resume/upload', {
            method: 'POST',
            headers: { 'x-user-id': 'test-user' },
            body: formData
        });

        const text = await res.text();
        console.log("Status:", res.status);
        console.log("Body:", text);
    } catch (err) {
        console.error("Fetch failed:", err);
    }
}
test();
