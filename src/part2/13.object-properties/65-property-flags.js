/**
 * Topic: Property Flags
 * Summary: Checking & modifying flags
 */

const user = {name:"Pradeep"};
const desc = Object.getOwnPropertyDescriptor(user,"name");
console.log(desc);

// --- Practice ---
// TODO: Change writable to false and test behavior
