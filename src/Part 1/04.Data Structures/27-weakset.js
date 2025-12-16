/****************************************************
 * Chapter 27: WeakSet
 * Description: weakly held object collection
 ****************************************************/

const ws = new WeakSet()
let o = {}
ws.add(o)
console.log(ws.has(o))
o = null
