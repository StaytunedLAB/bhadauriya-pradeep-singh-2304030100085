/****************************************************
 * Chapter 42: Prototype
 * Description: __proto__ and prototype chain
 ****************************************************/

const parent = { greet() { console.log("hi from parent") } }
const child = Object.create(parent)
child.greet()
console.log(Object.getPrototypeOf(child) === parent)
