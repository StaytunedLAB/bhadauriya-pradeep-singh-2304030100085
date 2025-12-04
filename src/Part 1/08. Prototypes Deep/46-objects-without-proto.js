/****************************************************
 * Chapter 46: Objects without __proto__
 * Description: Object.create(null)
 ****************************************************/

const dict = Object.create(null)
dict.key = "value"
console.log(dict, Object.getPrototypeOf(dict))
