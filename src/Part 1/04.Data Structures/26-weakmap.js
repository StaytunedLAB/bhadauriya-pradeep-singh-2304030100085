/****************************************************
 * Chapter 26: WeakMap
 * Description: keys are weakly held objects
 ****************************************************/

const wm = new WeakMap()
let key = {}
wm.set(key, "secret")
console.log(wm.get(key))
key = null // key can be GC'd
