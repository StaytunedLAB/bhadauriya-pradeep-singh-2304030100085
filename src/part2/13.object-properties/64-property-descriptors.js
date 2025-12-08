/**
 * Topic: Property Descriptors
 * Summary: writable, enumerable, configurable
 */

const obj = {};
Object.defineProperty(obj,"name",{ value:"Pradeep", writable:true, enumerable:true, configurable:true });
console.log(obj.name);

// --- Practice ---
// TODO: Add a non-enumerable property
