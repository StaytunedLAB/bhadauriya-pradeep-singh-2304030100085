/**
 * Topic: Closure Practice
 * Summary: Example of a counter object
 */

function createCounter(){
  let count=0;
  return {
    increment(){ count++; return count; },
    decrement(){ count--; return count; },
    get value(){ return count; }
  };
}
const counter = createCounter();
console.log(counter.increment()); //1
console.log(counter.value); //1

// --- Practice ---
// TODO: Create bank account closure with deposit, withdraw, balance
