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

// Interface for the constructor parameters
interface StudentConstructor {
  firstName: string;
  lastName: string;
}

// Interface for the StudentClass
interface Student {
  workOnHomework(): string; // Method to indicate work on homework
  displayName(): string;    // Method to return the student's name
}

// Class implementing the Student interface
class StudentClass implements Student {
  // Properties
  private firstName: string;
  private lastName: string;

  // Constructor
  constructor({ firstName, lastName }: StudentConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // Method to indicate working on homework
  workOnHomework(): string {
    return "Currently working";
  }

  // Method to display the student's name
  displayName(): string {
    return this.firstName;
  }
}

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
