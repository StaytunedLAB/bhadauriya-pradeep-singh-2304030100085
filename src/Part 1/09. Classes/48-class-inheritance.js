/****************************************************
 * Chapter 48: Class Inheritance
 * Description: extends and super usage
 ****************************************************/

class Animal {
  constructor(name) { this.name = name }
  speak() { console.log(`${this.name} makes sound`) }
}
class Dog extends Animal {
  speak() { console.log(`${this.name} barks`) }
}
new Dog("Buddy").speak()
