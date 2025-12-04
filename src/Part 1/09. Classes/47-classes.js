/****************************************************
 * Chapter 47: Classes
 * Description: class syntax basics
 ****************************************************/

class Person {
  constructor(name) { this.name = name }
  greet() { console.log(`Hi ${this.name}`) }
}
const per = new Person("Pradeep")
per.greet()
