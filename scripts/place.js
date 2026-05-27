document.addEventListener("DOMContentLoaded", () => {
    // 1. Inject the Current Year and Last Modified Dates seamlessly into footer metadata
    document.getElementById("current-year").textContent = new Date().getFullYear();
    document.getElementById("last-modified-date").textContent = document.lastModified;

    // 2. Setup Static inputs for calculations based on local HTML context parameters
    // Temperature must be <= 10 °C and Wind Speed must be > 4.8 km/h to trigger calculation
    const temperature = parseFloat(document.getElementById("temp-val").textContent);
    const windSpeed = parseFloat(document.getElementById("wind-val").textContent);
    const windChillElement = document.getElementById("windchill-val");

    // 3. Define the concise single line math calculation block function required
    const calculateWindChill = (temp, speed) => (13.12 + (0.6215 * temp) - (11.37 * Math.pow(speed, 0.16)) + (0.3965 * temp * Math.pow(speed, 0.16))).toFixed(1) + " °C";

    // 4. Run conditional validation rules before running output execution loops
    if (temperature <= 10 && windSpeed > 4.8) {
        windChillElement.textContent = calculateWindChill(temperature, windSpeed);
    } else {
        windChillElement.textContent = "N/A";
    }
});