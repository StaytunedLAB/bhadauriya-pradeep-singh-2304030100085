/****************************************************
 * Chapter 43: Prototype Inheritance
 * Description: inheritance via prototypes
 ****************************************************/

function Animal(name) { this.name = name }
Animal.prototype.speak = function() { console.log(`${this.name} speaks`) }
const dog = new Animal("Dog")
dog.speak()
