// Data Types
let num = 10;          // Number
let str = "Hello";     // String
let isOk = true;       // Boolean
let x = null;          // Null
let y;                 // Undefined
let big = 123n;        // BigInt
let sym = Symbol("id");// Symbol
let obj = {a: 1};      // Object


// Methods of primitives
"hello".toUpperCase();   // "HELLO"
(12.345).toFixed(2);     // "12.35"

// Numbers
let n = 5.789;
console.log(Math.round(n));  // 6
console.log(Math.random());  // 0–1 random

// Strings
let name = "Pradeep";
console.log(name.slice(0, 3));  // "Pra"
console.log(`Hello ${name}`);   // Template literal

// Arrays
let arr = [1, 2, "JS", true];
console.log(arr[2]); // "JS"

// Array Methods
let nums = [1, 2, 3];
nums.push(4);       // [1,2,3,4]
nums.shift();       // [2,3,4]
nums = nums.map(x => x * 2);  // [4,6,8]

// Iterables
for (let char of "Hi") {
  console.log(char);
}

// Map
let map = new Map();
map.set("name", "Pradeep");
console.log(map.get("name"));

// Set
let set = new Set([1, 1, 2]);
console.log(set); // {1, 2}

// WeakMap
let obj = {};
let wm = new WeakMap();
wm.set(obj, "secret");

// Object.keys / values / entries
let user = {name: "A", age: 20};
console.log(Object.keys(user));    // ["name","age"]
console.log(Object.values(user));  // ["A",20]
console.log(Object.entries(user)); // [["name","A"],["age",20]]

// Destructuring
let [a, b] = [10, 20];
let {name, age} = {name:"Ram", age:25};

// Date
let d = new Date();
console.log(d.getFullYear());
console.log(d.getHours());

// JSON
let obj = {name: "P"};
let json = JSON.stringify(obj);
console.log(JSON.parse(json)); // {name:"P"}

// Recursion
function count(n) {
  if (n == 0) return;
  console.log(n);
  count(n - 1);
}
count(3);

// Rest & Spread
function sum(...nums) {
  return nums.reduce((a, b) => a + b);
}
console.log(sum(1, 2, 3)); // 6

let arr1 = [1, 2];
let arr2 = [...arr1, 3, 4];

// Scope & Closure
function outer() {
  let x = 10;
  return function inner() {
    console.log(x);
  }
}
outer()(); // 10

// var (old)
if (true) {
  var a = 10;
}
console.log(a); // Works (var = function scoped)

// Global object
console.log(globalThis); // universal global object

// Function object
function hi(a, b) {}
console.log(hi.length); // 2 parameters

// Named Function Expression (NFE)
let fun = function hello() {
  console.log("Hi");
};
fun();     // works
// hello(); // NOT accessible

// new Function
let sum = new Function("a", "b", "return a+b");
console.log(sum(5, 6));

// setTimeout / setInterval
setTimeout(() => console.log("After 1 sec"), 1000);

let id = setInterval(() => console.log("Repeat"), 500);
clearInterval(id);

// call/apply
function show(a, b) {
  console.log(this.name, a, b);
}
show.call({name:"Pradeep"}, 1, 2);
show.apply({name:"Pradeep"}, [1, 2]);

// bind
let user = {
  name: "A",
  hi() { console.log(this.name); }
};

let f = user.hi.bind(user);
f();

// Arrow Functions
let add = (a, b) => a + b;
console.log(add(5, 10));