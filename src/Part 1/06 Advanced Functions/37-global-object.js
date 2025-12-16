/****************************************************
 * Chapter 37: Global Object
 * Description: window / globalThis demo
 ****************************************************/

console.log("globalThis exists:", typeof globalThis !== "undefined")
globalThis.myGlobal = "abc"
console.log(globalThis.myGlobal)
