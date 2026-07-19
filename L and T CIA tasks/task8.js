// Task 8: Hospital Patient System — Add & Find

let patients = [
  { id: 1, name: "Rahul Verma", age: 24 },
  { id: 2, name: "Anita Sharma", age: 67 },
  { id: 3, name: "Sameer Khan", age: 15 },
  { id: 4, name: "Priya Nair", age: 45 },
];

// add a new patient
patients.push({ id: 5, name: "Kavya Reddy", age: 52 });

console.log("Updated Patient List:");
patients.forEach((p) => console.log(`${p.id}: ${p.name} (Age: ${p.age})`));

// find the patient with the highest age
let oldestPatient = patients[0];
for (let i = 1; i < patients.length; i++) {
  if (patients[i].age > oldestPatient.age) {
    oldestPatient = patients[i];
  }
}

console.log(`\nOldest Patient: ${oldestPatient.name} (Age: ${oldestPatient.age})`);
