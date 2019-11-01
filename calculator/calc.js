
let a;
let b;
let operator;
const calculator = function() {
  a = prompt("Enter x: ");
  if(!a == ""){
    b = prompt("Enter y: ");
 }
 let x = parseInt(a);
 let y = parseInt(b);
 if(!b == ""){
       operator = prompt("add, subtract, divide, multiply or modulo?");
 }
 if (operator == "add") {
   console.log(x + y);
   promptAgain();
 } else if (operator == "subtract") {
   console.log(x - y);
   promptAgain();
 } else if (operator == "divide") {
   console.log(x / y);
   promptAgain();
 } else if (operator == "multiply") {
   console.log((z = x * y));
   promptAgain();
 } else if (operator == "modulo") {
   console.log(x % y);
   promptAgain();
 } else {
   console.log("Invalid text");
 }
}
const promptAgain = function() {
 calculator();
};