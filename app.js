// TASK 1
let userExponent = prompt(
  "TASK 1 : Write in a number to get its EXPONENT:",
  ""
);

document.getElementById("task-1").innerHTML = userExponent ** 2;

// TASK 2
let userName = prompt("Input your name:", "");
let depositAmount = prompt("Input your deposit amount in hryvnia:", "");
let depositDuration = prompt(
  "Input the duration of your deposit in months:",
  ""
);

let interestRate = 20 / 100;
let earnings = depositAmount * interestRate * (depositDuration / 12);

let message =
  "Dear " +
  userName +
  ", You have made " +
  depositAmount +
  ", hryvnias, under 20% per annum, for the term of " +
  depositDuration +
  " month. During this term, you will earn " +
  earnings +
  " hryvnias. ";
document.getElementById("task-2").innerHTML = message;

// TASK 3
let a = prompt("TASK 3 : Write in the first number:", "");
let b = prompt("TASK 3 : Write in the second number:", "");

document.getElementById("addition").innerHTML = +a + +b;
document.getElementById("substraction").innerHTML = a - b;
document.getElementById("multiplication").innerHTML = a * b;
document.getElementById("division").innerHTML = a / b;
