namespace Subjects {
  export interface Teacher {
    experienceTeachingJava?: number;
    firstName: string;
  }

  export class Java extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for Java';
    }
    
    getAvailableTeacher(): string {
      const { teacher } = this;
      return teacher.experienceTeachingJava && teacher.experienceTeachingJava > 0 ? `Available Teacher: ${teacher.firstName}` : 'No available teacher';
    }
  }
}
