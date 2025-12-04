/****************************************************
 * Chapter 35: Scope
 * Description: block vs function scope
 ****************************************************/

function test() {
  if (true) {
    let x = "block"
    var y = "func"
    console.log(x)
  }
  // console.log(x) // ReferenceError
  console.log(y)
}
test()
