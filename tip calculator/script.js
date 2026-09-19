function calculateTip() {
    const bill = parseFloat(document.getElementById("bill").value);
    const tipPercent = parseFloat(document.getElementById("tip").value);

    const tipResult = document.getElementById("tip-result");
    const totalResult = document.getElementById("total-result");

    if (isNaN(bill) || isNaN(tipPercent)) {
        tipResult.textContent = "Tip: Please enter valid numbers.";
        totalResult.textContent = "Total: --";
        return;
    }

    const tipAmount = bill * (tipPercent / 100);
    const total = bill + tipAmount;

    tipResult.textContent = "Tip: $" + tipAmount.toFixed(2);
    totalResult.textContent = "Total: $" + total.toFixed(2);
}