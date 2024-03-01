export default function createReportObject(employeesList) {
  return {
    allEmployees: employeesList,
    getNumberOfDepartments() {
      const departments = new Set();
      Object.values(employeesList).forEach(employee => {
        departments.add(employee.department);
      });
      return departments.size;
    },
  };
}
