/**
 * Topic: Callbacks
 * Summary: Functions passed as arguments
 */

// Example: Basic callback
function calculate(a, b, operation){
  return operation(a,b);
}
console.log(calculate(5,3,(x,y)=>x+y)); // 8

// Example: Array callback
const numbers = [1,2,3];
numbers.forEach(n => console.log(n*2)); // 2,4,6

// --- Practice ---
// TODO: Write a function 'filterNumbers' that takes an array and callback to filter elements
