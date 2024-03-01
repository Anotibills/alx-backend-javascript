const readDatabase = require('../utils');

module.exports = class StudentsController {
  static async getAllStudents(request, response) {
    try {
      const data = await readDatabase(process.argv[2]);
      let printData = 'This is the list of our students';
      for (const field in data) {
        if (Object.hasOwnProperty.call(data, field)) {
          const element = data[field];
          printData += `\nNumber of students in ${field}: ${element.number}. ${element.students}`;
        }
      }
      response.send(printData);
    } catch (err) {
      response.send(err.message);
    }
  }

  static async getAllStudentsByMajor(request, response) {
    try {
      const validMajors = ['SWE', 'CS'];
      const { major } = request.params;
      if (!validMajors.includes(major)) {
        response.status(500).send('Major parameter must be CS or SWE');
        return;
      }
      
      const data = await readDatabase(process.argv[2]);
      const printData = data[major].students;
      if (printData) {
        response.send(printData);
      } else {
        response.status(500).send('Major parameter must be CS or SWE');
      }
    } catch (err) {
      response.send(err.message);
    }
  }
};
