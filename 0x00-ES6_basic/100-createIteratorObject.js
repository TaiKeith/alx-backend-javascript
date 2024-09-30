export default function createIteratorObject(report) {
  const allEmployees = Object.values(report.allEmployees);
  let employeeList = [];

  for (const employee of allEmployees) {
    employeeList = employeeList.concat(employee);
  }

  return employeeList;
}
