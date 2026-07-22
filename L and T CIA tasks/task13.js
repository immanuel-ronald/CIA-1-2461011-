// Task 13: Hospital Patient System — Format Output with Template Literals

let patient = {
  id: 101,
  name: "Anita Sharma",
  age: 67,
  ailment: "Diabetes",
  ward: "General Ward - B",
};

let summary = `
--------------------------------------
 Patient Summary
--------------------------------------
 ID       : ${patient.id}
 Name     : ${patient.name}
 Age      : ${patient.age} years
 Ailment  : ${patient.ailment}
 Ward     : ${patient.ward}
--------------------------------------
`;

console.log(summary);
/* OUTPUT:
--------------------------------------
 Patient Summary
--------------------------------------
 ID       : 101
 Name     : Anita Sharma
 Age      : 67 years
 Ailment  : Diabetes
 Ward     : General Ward - B
--------------------------------------
*/
