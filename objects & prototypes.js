// =========================
// 1. Object Property Flags
// =========================
let user = {
  name: "Pradeep",
  age: 20
};

console.log("Descriptor:", Object.getOwnPropertyDescriptor(user, "name"));


// ===============================
// 2. defineProperty Examples
// ===============================

// Read-only
Object.defineProperty(user, "id", {
  value: 101,
  writable: false
});

// Non-enumerable
Object.defineProperty(user, "secret", {
  value: "hidden info",
  enumerable: false
});


// ==================================
// 3. Getters & Setters
// ==================================
let person = {
  firstName: "Pradeep",
  lastName: "Bhadauriya",

  get fullName() {
    return this.firstName + " " + this.lastName;
  },

  set fullName(value) {
    [this.firstName, this.lastName] = value.split(" ");
  }
};

console.log("Getter:", person.fullName);


// ==================================
// 4. Prototypes & Inheritance
// ==================================
let animal = {
  eats: true
};

let dog = {
  barks: true,
  __proto__: animal
};

console.log("Dog eats:", dog.eats);


// ==================================
// 5. Prototypal Inheritance
// ==================================
let parent = { canSpeak: true };
let child = { __proto__: parent };

console.log("Child speaks:", child.canSpeak);


// ==================================
// 6. F.prototype Example
// ==================================
function User(name) {
  this.name = name;
}

User.prototype.sayHi = function () {
  console.log("Hi, " + this.name);
};

let u = new User("Pradeep");
u.sayHi();


// ==================================
// 7. Native Prototype Examples
// ==================================
let arr = [1, 2, 3];

console.log(arr.__proto__ === Array.prototype);
console.log(Array.prototype.__proto__ === Object.prototype);


// ==================================
// 8. Object Without __proto__
// ==================================
let dictionary = Object.create(null);
dictionary.apple = "fruit";

console.log(dictionary.apple);
