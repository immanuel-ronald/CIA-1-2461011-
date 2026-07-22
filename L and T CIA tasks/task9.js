// Task 9: Hospital Patient System — Remove & Sort

let patients = [
  { id: 1, name: "Rahul Verma", age: 24 },
  { id: 2, name: "Anita Sharma", age: 67 },
  { id: 3, name: "Sameer Khan", age: 15 },
  { id: 4, name: "Priya Nair", age: 45 },
];

// remove the last entry
let removedPatient = patients.pop();
console.log("Removed Patient:", removedPatient.name);

// sort remaining patients by age (ascending)
patients.sort((a, b) => a.age - b.age);

console.log("\nPatients sorted by age:");
patients.forEach((p) => console.log(`${p.name} - Age: ${p.age}`));

/* OUTPUT:
Removed Patient: Priya Nair

Patients sorted by age:
Sameer Khan - Age: 15
Rahul Verma - Age: 24
Anita Sharma - Age: 67
*/
