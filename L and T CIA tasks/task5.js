// Task 5: Hospital Patient System — Classify a Record

let patientAge = 67;

if (patientAge >= 60) {
  console.log(`Patient is a senior citizen (Age: ${patientAge}). Priority care applies.`);
} else if (patientAge >= 18) {
  console.log(`Patient is an adult (Age: ${patientAge}).`);
} else {
  console.log(`Patient is a minor (Age: ${patientAge}). Guardian consent required.`);
}

/* OUTPUT:
Patient is a senior citizen (Age: 67). Priority care applies.
*/
