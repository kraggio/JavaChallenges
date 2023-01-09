//define the add function//
function add(num1, num2) {
    return num1 + num2;
}

//define the subtract function//
function subtract(num1, num2)
{
    return num1 - num2;
}

//define the multiply function//
function multiply(num1, num2)
{
    return num1 * num2;
}

//define the divide function//
function divide(num1, num2) {
    return num1 / num2;
}

//promt the user for a number//
let num1 = prompt("Enter a number:");

//promt the user for an operator//
let operator = prompt("Enter an operator (+, -, *, /):");

//prompt the user for another number//
let num2 = prompt("Enter another number:");

//convert the numbers to numbers//
num1 = parseInt(num1);
num2 = parseInt(num2);

//initialize the result variable//
let result;

//Use a switch statement to determine which function to call 
//based on the operator//
switch (operator) {
    case "+":
}