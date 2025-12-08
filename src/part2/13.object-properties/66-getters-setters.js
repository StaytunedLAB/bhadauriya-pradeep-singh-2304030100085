/**
 * Topic: Getters & Setters
 * Summary: Accessor properties
 */

const obj = {
  firstName:"Pradeep",
  lastName:"Bhadauriya",
  get fullName(){ return this.firstName + " " + this.lastName; },
  set fullName(value){ [this.firstName,this.lastName]=value.split(" "); }
};
console.log(obj.fullName);
obj.fullName = "John Doe";
console.log(obj.firstName); // John

// --- Practice ---
// TODO: Create object with computed fullName property
