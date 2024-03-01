const fs = require('fs');

module.exports = function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, { encoding: 'utf-8' }, (err, data) => {
      if (err) return reject(new Error('Cannot load the database'));

      const lines = data.trim().split('\n');
      const header = lines.shift().split(',');

      const idxFn = header.indexOf('firstname');
      const idxFd = header.indexOf('field');

      const fields = {};
      const all = {};

      lines.forEach((line) => {
        const [firstname, field] = line.split(',');
        fields[field] = fields[field] ? fields[field] + 1 : 1;

        if (!all[field]) {
          all[field] = {
            students: [firstname],
            number: 1,
          };
        } else {
          all[field].students.push(firstname);
          all[field].number++;
        }
      });

      resolve(all);
    });
  });
};
