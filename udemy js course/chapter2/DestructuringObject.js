// Destructuring Object extracting multiple properties from an Object by taking the structure and deconstructing

const students = {
  name: "chandra",
  school: "B.R.Birla",
  rollno: 12345,
};

const { name, school, rollno } = students;
console.log(name, school, rollno);
