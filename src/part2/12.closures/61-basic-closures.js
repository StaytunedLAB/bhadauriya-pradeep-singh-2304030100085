/**
 * Topic: Closures
 * Summary: Function scope and private variables
 */

function counter(start=0){
  let count = start;
  return function(){ return ++count; }
}
const c = counter(10);
console.log(c()); //11
console.log(c()); //12

// --- Practice ---
// TODO: Make a closure 'greetUser' that keeps track of how many times user greeted
