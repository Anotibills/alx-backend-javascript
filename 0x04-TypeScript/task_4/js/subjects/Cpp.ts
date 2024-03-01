namespace Subjects {
  export interface Teacher {
    experienceTeachingC?: number;
    firstName: string;
  }

  export class Cpp extends Subject {
    getRequirements(): string {
      return `Here is the list of requirements for Cpp`;
    }
    
    getAvailableTeacher(): string {
      const { teacher } = this;
      return teacher.experienceTeachingC && teacher.experienceTeachingC > 0 ? `Available Teacher: ${teacher.firstName}` : 'No available teacher';
    }
  }
}
