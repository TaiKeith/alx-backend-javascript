/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />

export const cpp = new Subjects.Cpp();
export const java = new Subjects.Java();
export const react = new Subjects.React();


const cTeacher:Subjects.Teacher = {
  firstName: 'Keith',
  lastName: 'Steve',
  experienceTeachingC: 10,
}

console.log('C++');
console.log(cpp.setTeacher(cTeacher));
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());
console.log('Java');
console.log(java.setTeacher(cTeacher));
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());
console.log('React');
console.log(react.setTeacher(cTeacher));
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
