/****************************************************
 * Chapter 14: Garbage Collection
 * Description: demo of unreachable object
 ****************************************************/

let obj = { x: 1 }
console.log(obj)
obj = null // eligible for GC (engine decides)
