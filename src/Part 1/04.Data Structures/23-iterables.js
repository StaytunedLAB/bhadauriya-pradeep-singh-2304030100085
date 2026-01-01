/****************************************************
 * Chapter 23: Iterables
 * Description: for..of, iterators
 ****************************************************/

const s = new Set([10,20,30])
for (const v of s) console.log("set:", v)

const str = "abc"
for (const ch of str) console.log("ch:", ch)
