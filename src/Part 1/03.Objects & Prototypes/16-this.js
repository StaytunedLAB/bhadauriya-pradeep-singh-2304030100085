/****************************************************
 * Chapter 16: this
 * Description: this behaviour examples
 ****************************************************/

const o = {
  val: "X",
  show() { console.log(this.val) }
}
o.show()
const f = o.show
// f() // undefined in non-strict; comment left intentionally
