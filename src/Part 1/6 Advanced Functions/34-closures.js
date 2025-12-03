/****************************************************
 * Chapter 34: Closures
 * Description: function that closes over variables
 ****************************************************/

function counter() {
  let n = 0
  return () => ++n
}
const c = counter()
console.log(c(), c(), c())
