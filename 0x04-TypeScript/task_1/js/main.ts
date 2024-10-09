interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

// Define the interface for the printTeacher function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implement the printTeacher function
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName[0]}. ${lastName}`;
};

function createTeacher(firstName: string, lastName: string, fullTimeEmployee: boolean, location: string, yearsOfExperience?: number): Teacher {
  const teacher: Teacher = {
    firstName,
    lastName,
    fullTimeEmployee,
    location,
    yearsOfExperience,
  };
  return teacher;
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

const director1: Directors = {
  firstName: 'Jane',
  lastName: 'Dawn',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};


console.log(teacher3);
console.log(director1);
console.log(printTeacher("John", "Doe"));
