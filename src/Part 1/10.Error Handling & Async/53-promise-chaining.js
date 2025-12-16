/****************************************************
 * Chapter 53: Promise Chaining
 * Description: then chaining example
 ****************************************************/

Promise.resolve(5)
  .then(v => v * 2)
  .then(v => `Result: ${v}`)
  .then(console.log)
