/**
 * Topic: Private Variables
 * Summary: Data encapsulation using closures
 */

function makeUser(name){
  let _name = name;
  return {
    getName(){ return _name; },
    setName(n){ _name=n; }
  };
}
const user = makeUser("Pradeep");
console.log(user.getName()); // Pradeep
user.setName("John");
console.log(user.getName()); // John

// --- Practice ---
// TODO: Add private age property with getter & setter
