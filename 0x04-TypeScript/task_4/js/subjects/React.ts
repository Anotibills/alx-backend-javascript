namespace Subjects {
  export interface Teacher {
    experienceTeachingReact?: number;
    firstName: string;
  }

  export class React extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for React';
    }
    
    getAvailableTeacher(): string {
      const { teacher } = this;
      return teacher.experienceTeachingReact && teacher.experienceTeachingReact > 0 ? `Available Teacher: ${teacher.firstName}` : 'No available teacher';
    }
  }
}
