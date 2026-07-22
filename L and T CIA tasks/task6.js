// Task 6: Hospital Patient System — Iterate Over Records

let patients = [
  { id: 1, name: "Rahul Verma", age: 24, ailment: "Fever" },
  { id: 2, name: "Anita Sharma", age: 67, ailment: "Diabetes" },
  { id: 3, name: "Sameer Khan", age: 15, ailment: "Fracture" },
  { id: 4, name: "Priya Nair", age: 45, ailment: "Migraine" },
];

for (let i = 0; i < patients.length; i++) {
  console.log(
    `Patient ${patients[i].id}: ${patients[i].name}, Age: ${patients[i].age}, Ailment: ${patients[i].ailment}`
  );
}
/* OUTPUT:
Patient 1: Rahul Verma, Age: 24, Ailment: Fever
Patient 2: Anita Sharma, Age: 67, Ailment: Diabetes
Patient 3: Sameer Khan, Age: 15, Ailment: Fracture
Patient 4: Priya Nair, Age: 45, Ailment: Migraine
*/
