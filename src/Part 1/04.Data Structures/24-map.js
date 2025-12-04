/****************************************************
 * Chapter 24: Map
 * Description: Map key-value usage
 ****************************************************/

const map = new Map()
map.set("a", 1)
map.set({k:1}, "obj")
console.log(map.get("a"), map.size)
