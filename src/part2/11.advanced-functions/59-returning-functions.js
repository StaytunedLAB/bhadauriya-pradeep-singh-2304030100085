/**
 * Topic: Function Returning Function
 * Summary: Closures and nested functions
 */

function multiplier(n){
  return function(x){ return x*n; };
}
const double = multiplier(2);
console.log(double(5)); // 10

// --- Practice ---
// TODO: Create 'makeAdder' function that adds a fixed number to argument
