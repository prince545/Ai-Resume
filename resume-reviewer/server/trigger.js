async function trigger() {
    try {
        const response = await fetch("http://localhost:5000/api/resume/analyze/69a97f677959740e13e66d88", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'x-user-id': 'anonymous' },
            body: JSON.stringify({ jobDescription: '' })
        });
        const text = await response.text();
        console.log("Status:", response.status);
        console.log("Response:", text);
    } catch (e) {
        console.error(e);
    }
}
trigger();
