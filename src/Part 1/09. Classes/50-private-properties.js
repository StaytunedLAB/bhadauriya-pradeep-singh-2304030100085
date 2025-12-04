/****************************************************
 * Chapter 50: Private Properties
 * Description: #private fields example
 ****************************************************/

class Secret {
  #data = 123
  get() { return this.#data }
}
const s = new Secret()
console.log(s.get())
