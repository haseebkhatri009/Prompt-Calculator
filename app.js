let value1 = parseFloat(prompt("Enter First Value"));
let value2 = parseFloat(prompt("Enter Second Value"));
let operator = prompt("Enter operator (+, -, *, /)");
let result;

if (operator === '+') {
    result = value1 + value2;
} else if (operator === '-') {
    result = value1 - value2;
} else if (operator === '*') {
   result = value1 * value2;
} else if (operator === '/') {
    if (value2 !== 0) {
        result = value1 / value2;
    } else {
    result = "Error: Division by zero";
    }
} else {
    result = "Error: Invalid operator";
}

alert("The result is: " + result);
