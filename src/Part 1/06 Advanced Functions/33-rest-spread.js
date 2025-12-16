/****************************************************
 * Chapter 33: Rest & Spread
 * Description: ...rest and ...spread usage
 ****************************************************/

const arr = [1,2,3]
const arr2 = [...arr, 4]
const [first, ...rest] = arr
console.log(arr2, first, rest)
