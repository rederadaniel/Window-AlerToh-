
function showTyphoonWarning() {
    setTimeout(() => {
        alert("⚠️ URGENT ALERT: SUPER TYPHOON ENTENG is approaching CALABARZON!\n\nPrepare immediately! Expect extreme winds, severe flooding, and power outages. Stay indoors and listen to official updates.");
    }, 500);

    setTimeout(() => {
        confirm("🌧️ Current Weather Update: Heavy rain, 180+ km/h winds, and storm surges expected. Secure your home and emergency supplies.");
        
        // Show the content with a fade-in effect
        document.getElementById("content").style.visibility = "visible";
        document.getElementById("content").style.opacity = "1";
    }, 1500);
}

function showEmergencyAlert() {
    alert("🚨 EMERGENCY GUIDELINES 🚨\n\n1️⃣ Store enough food, water, and medicines for at least 3 days.\n2️⃣ Charge all communication devices.\n3️⃣ Follow local evacuation procedures if necessary.\n4️⃣ Avoid going outdoors unless absolutely necessary.");
}
