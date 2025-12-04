/****************************************************
 * Chapter 55: Microtasks
 * Description: microtask vs macrotask demo
 ****************************************************/

console.log("start")
Promise.resolve().then(() => console.log("microtask"))
setTimeout(() => console.log("macrotask"), 0)
console.log("end")
