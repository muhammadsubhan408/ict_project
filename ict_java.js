document.getElementById('convert-btn').addEventListener('click', () => {
    const number = document.getElementById('number').value;
    const fromBase = parseInt(document.getElementById('from-base').value);
    const toBase = parseInt(document.getElementById('to-base').value);

    // Validate input
    if (!number || isNaN(fromBase) || isNaN(toBase)) {
        alert('Please enter a valid number and select both bases.');
        return;
    }

    try {
        // Convert the number
        const decimalValue = parseInt(number, fromBase); // Convert to decimal first
        if (isNaN(decimalValue)) {
            throw new Error('Invalid input for the selected base.');
        }
        const result = decimalValue.toString(toBase); // Convert to the target base

        // Display the result
        document.getElementById('result').textContent = result.toUpperCase();
    } catch (error) {
        alert(error.message);
        document.getElementById('result').textContent = '--';
    }
});
