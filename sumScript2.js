

        function sumAndDisplay() {
            // Get the input values
            var num1 = parseFloat(document.getElementById("input1").value);
            var num2 = parseFloat(document.getElementById("input2").value);

            // Calculate the sum
            var sum = num1 + num2;

            // Display the result
            var resultElement = document.getElementById("result");
            resultElement.textContent = sum;

            // Set the color based on the sum value
            if (sum > 10) {
                resultElement.style.color = "red";
            } else {
                resultElement.style.color = "blue";
            }
        }
