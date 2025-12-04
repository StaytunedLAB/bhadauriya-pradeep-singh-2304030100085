/****************************************************
 * Chapter 52: Promises
 * Description: creating & using Promise
 ****************************************************/

const p = new Promise((resolve) => setTimeout(() => resolve(42), 50))
p.then(v => console.log("Promise resolved:", v))
