/****************************************************
 * Chapter 41: Getters & Setters
 * Description: accessor properties
 ****************************************************/

const p = {
  _name: "Pradeep",
  get name() { return this._name },
  set name(v) { this._name = v }
}
console.log(p.name)
p.name = "Ravi"
console.log(p.name)
