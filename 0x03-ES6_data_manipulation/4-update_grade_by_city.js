export default function updateStudentGradeByCity(students, city, newGrades) {
  const cityStudents = students.filter((x) => x.location === city);
  return cityStudents.map((x) => {
    const grades = newGrades.filter((y) => y.studentId === x.id);
    // eslint-disable-next-line no-param-reassign
    x.grade = grades.length === 0 ? 'N/A' : grades[0].grade;
    return x;
  });
}
