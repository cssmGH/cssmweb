function sumInputs() {
    // Get the values from the input fields
    var input1Value = parseFloat(document.getElementById('input1').value) || 0;
    var input2Value = parseFloat(document.getElementById('input2').value) || 0;

    // Calculate the sum
    var sum = input1Value + input2Value;

    // Display the result
    document.getElementById('result').textContent = sum;
}