/****************************************************
 * Chapter 19: Symbol
 * Description: unique property keys
 ****************************************************/

const id = Symbol("id")
const obj = { [id]: 123, name: "Pradeep" }
console.log(obj[id], Object.getOwnPropertySymbols(obj))
