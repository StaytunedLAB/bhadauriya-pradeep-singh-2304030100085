/****************************************************
 * Chapter 17: Constructor Functions
 * Description: function constructors + new
 ****************************************************/

function Person(name, age) {
  this.name = name
  this.age = age
}
const p = new Person("Ravi", 20)
console.log(p)
