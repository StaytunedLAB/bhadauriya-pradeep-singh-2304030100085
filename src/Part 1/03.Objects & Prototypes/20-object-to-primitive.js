/****************************************************
 * Chapter 20: Object to Primitive
 * Description: toString/valueOf for conversion
 ****************************************************/

const obj = {
  value: 10,
  valueOf() { return this.value },
  toString() { return `Obj(${this.value})` }
}
console.log(+obj, `${obj}`)
