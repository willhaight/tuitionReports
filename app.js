const csv = require('csv-parser')
const fs = require('fs');
let data = [];

fs.createReadStream('students.csv')
.pipe(csv())
.on('data', (row) => {
    console.log(row);
})
