async function test() {
    try {
        const response = await fetch("http://localhost:5000/api/resume/analyze/69a97f677959740e13e66d88", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'x-user-id': 'user_3ALFDyHyYcNaVZFLLF32BaMasab' },
            body: JSON.stringify({ jobDescription: '' })
        });
        const data = await response.json().catch(() => ({}));
        console.log("Status:", response.status);
        if (response.ok) {
            console.log("Success");
        } else {
            console.log("Error from server:", data.error);
        }
    } catch (e) {
        console.error("Fetch failed", e);
    }
}
test();
