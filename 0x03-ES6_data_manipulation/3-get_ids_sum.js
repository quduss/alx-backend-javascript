import getListStudentIds from './1-get_list_student_ids';

export default function getStudentIdsSum(students) {
  const studentIds = getListStudentIds(students);
  return studentIds.reduce((accumulator, currentValue) => accumulator + currentValue);
}
