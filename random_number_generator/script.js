function generateNumber() {
    const minimum = parseInt(document.getElementById("minimum").value);
    const maximum = parseInt(document.getElementById("maximum").value);

    const result = document.getElementById("result");

    if (isNaN(minimum) || isNaN(maximum)) {
        result.textContent = "Result: Please enter valid numbers.";
        return;
    }

    if (minimum > maximum) {
        result.textContent = "Result: Minimum cannot be greater than maximum.";
        return;
    }

    const randomNumber =
        Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

    result.textContent = "Result: " + randomNumber;
}