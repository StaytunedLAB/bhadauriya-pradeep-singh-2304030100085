//Code Quality Code Examples:

// 3.1 Debugging in the Browser:
function add(a, b) {
  debugger;
  return a + b;
}
console.log(add(5, 3));


// 3.2 Coding Style:
const userName = "Pradeep";
function greet() {
  console.log("Hello, " + userName);
}
greet();


// 3.3 Comments:

// Single-line comment
let count = 0;/*
 Multi-line comment:*/
function increment() {
  count++;
  return count;
}
console.log(increment());


// 3.4 Ninja Code (Avoid):
let x = y => y**y;
function power(num) {
  return num * num;
}


// 3.5 Automated Testing with Mocha:
describe("Addition Test", function () {
  it("should return 8 when 5 + 3", function () {
    const result = 5 + 3;
    if (result !== 8) throw new Error("Test Failed");
  });
});


// 3.6 Polyfills and Transpilers:
if (!Array.prototype.includes) {
  Array.prototype.includes = function (search) {
    return this.indexOf(search) !== -1;
  };
}
console.log([1, 2, 3].includes(2));




// Objects: the basics Code Examples:

// 4.1 Objects
const user = {
  name: "Pradeep",
  age: 20
};


// 4.2 Object References and Copying
const obj1 = { a: 1 };
const obj2 = obj1; // reference copy
obj2.a = 5;
console.log(obj1.a); // 5

// Shallow copy
const obj3 = { ...obj1 };
obj3.a = 10;
console.log(obj1.a); // 5


// 4.3 Garbage Collection:
let data = { msg: "Hello" };
data = null; // eligible for GC


// 4.4 Object Methods & this:
const car = {
  brand: "Honda",
  showBrand() {
    console.log(this.brand);
  }
};
car.showBrand();


// 4.5 Constructor & new:
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const p1 = new Person("Pradeep", 20);
console.log(p1.name);


// 4.6 Optional Chaining ?.
const student = {
  profile: { name: "Pradeep" }
};
console.log(student.profile?.name);
console.log(student.address?.city);


// 4.7 Symbol Type
const id = Symbol("id");
const userA = {
  [id]: 123,
  name: "Pradeep"
};
console.log(userA[id]);


// 4.8 Object to Primitive Conversion
const amount = {
  value: 100,
  toString() {
    return "$" + this.value;
  }
};
console.log(String(amount)); // "$100"