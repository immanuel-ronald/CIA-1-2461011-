// Task 11: Hospital Patient System — Calculate a Derived Value

function getPatientCategory(name, age) {
  if (age < 18) {
    return `${name} is a minor (Age: ${age}).`;
  } else {
    return `${name} is an adult (Age: ${age}).`;
  }
}

console.log(getPatientCategory("Sameer Khan", 15));
console.log(getPatientCategory("Rahul Verma", 24));
\
