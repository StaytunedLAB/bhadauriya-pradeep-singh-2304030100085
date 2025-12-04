/****************************************************
 * Chapter 39: Named Function Expressions (NFE)
 * Description: function names in expressions
 ****************************************************/

let fact = function factorial(n) {
  return n <= 1 ? 1 : n * factorial(n - 1)
}
console.log(fact(4))
