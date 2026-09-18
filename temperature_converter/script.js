function convertTemperature() {
    const temperature = parseFloat(
        document.getElementById("temperature").value
    );

    const conversion = document.getElementById("conversion").value;
    const result = document.getElementById("result");

    if (isNaN(temperature)) {
        result.textContent = "Result: Please enter a temperature.";
        return;
    }

    let converted;

    if (conversion === "fToC") {
        converted = (temperature - 32) * 5 / 9;
        result.textContent = "Result: " + converted.toFixed(2) + " °C";
    } else {
        converted = (temperature * 9 / 5) + 32;
        result.textContent = "Result: " + converted.toFixed(2) + " °F";
    }
}