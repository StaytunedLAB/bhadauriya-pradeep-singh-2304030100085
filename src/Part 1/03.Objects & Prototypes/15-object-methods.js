/****************************************************
 * Chapter 15: Object Methods
 * Description: methods inside objects, this
 ****************************************************/

const person = {
  name: "Pradeep",
  say() { console.log(`Hello ${this.name}`) }
}
person.say()
