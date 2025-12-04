/****************************************************
 * Chapter 13: Object Copy
 * Description: shallow copy methods
 ****************************************************/

const orig = { a: 1, b: { c: 2 } }
const copy1 = Object.assign({}, orig)
const copy2 = { ...orig }
console.log(copy1, copy2)
