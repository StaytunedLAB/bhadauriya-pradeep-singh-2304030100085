/****************************************************
 * Chapter 22: Array Methods
 * Description: map, filter, reduce, find
 ****************************************************/

const nums = [1,2,3,4]
console.log(nums.map(n => n * 2))
console.log(nums.filter(n => n % 2 === 0))
console.log(nums.reduce((s,n) => s + n, 0))
