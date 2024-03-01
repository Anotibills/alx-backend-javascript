export default function updateStudentGradeByCity(studentList, city, newGradesList) {
  if (!Array.isArray(studentList)) {
    return [];
  }
  if (!Array.isArray(newGradesList)) {
    return [];
  }
  return studentList
    .filter((student) => student.location === city)
    .map((student) => {
      const [newGrade] = newGradesList.filter((grade) => grade.studentId === student.id);
      return {
        ...student,
        grade: newGrade ? newGrade.grade : 'N/A',
      };
    });
}
