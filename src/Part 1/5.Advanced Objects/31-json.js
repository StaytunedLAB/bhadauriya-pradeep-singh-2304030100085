/****************************************************
 * Chapter 31: JSON
 * Description: JSON.parse and JSON.stringify
 ****************************************************/

const obj = { a: 1, b: "x" }
const json = JSON.stringify(obj)
console.log(json)
console.log(JSON.parse(json))
