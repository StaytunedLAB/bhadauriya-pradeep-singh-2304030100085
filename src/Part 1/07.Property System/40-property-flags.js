/****************************************************
 * Chapter 40: Property Flags
 * Description: writable, enumerable, configurable
 ****************************************************/

const o = {}
Object.defineProperty(o, "x", { value: 1, writable: false, enumerable: true })
console.log(o.x)
o.x = 2
console.log("after attempt change:", o.x)
