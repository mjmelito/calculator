// business logic
function add(num1, num2) {
  return num1 + num2;
}
function sub(num1, num2) {
  return num1 - num2;
}
function mult(num1, num2) {
  return num1 * num2;
}
function div(num1, num2) {
  return num1 / num2;
}

// user interface logic 
const num1 = parseInt(prompt("Enter a number:"));
const num2 = parseInt(prompt("Enter another number:"));
window.alert(num1 + " + " + num2 + " = " + add(num1, num2) + ". " +
num1 + " - " + num2 + " = " + sub(num1, num2) + ". " +
num1 + " * " + num2 + " = " + mult(num1, num2) + ". " +
num1 + " / " + num2 + " = " + div(num1, num2) + ". ");