/****************************************************
 * Chapter 44: F.prototype
 * Description: function prototype property
 ****************************************************/

function F() {}
F.prototype.x = 1
const o = new F()
console.log(o.x, F.prototype)
