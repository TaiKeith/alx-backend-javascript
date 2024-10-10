/// <reference path="Teacher.ts" />
namespace Subjects {
  export class Subject {
    teacher: Subjects.Teacher;

    setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }
  }
}
