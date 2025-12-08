/**
 * Topic: bind / partial / currying
 * Summary: Fix arguments, create new functions
 */

const user = {name:"Pradeep", show(){ console.log(this.name); }};
const bound = user.show.bind(user);
bound(); // Pradeep

// Partial
function multiply(a,b,c){ return a*b*c; }
const mulBy2 = multiply.bind(null,2);
console.log(mulBy2(3,4)); // 24

// Currying
const curry = a => b => c => a*b*c;
console.log(curry(2)(3)(4)); // 24

// --- Practice ---
// TODO: Curry a function to sum 3 numbers
