/****************************************************
 * Chapter 07: Conditionals
 * Description: if / else / switch
 ****************************************************/

const score = 75
if (score >= 90) console.log("A")
else if (score >= 75) console.log("B")
else console.log("C")

switch (true) {
  case score >= 90: console.log("Switch A"); break
  case score >= 75: console.log("Switch B"); break
  default: console.log("Switch C")
}
