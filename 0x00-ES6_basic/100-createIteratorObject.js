export default function createIteratorObject(report) {
  return Object.values(report.allEmployees).flatMap(item => item);
}

