const fs = require('fs');
const path = require('path');


const obj = {
    "name": "Ivan",
    "surname": "Ivanov",
    "age": 36,
    "city": "Moscow"
}

const filePAth = path.join(__dirname, 'person.json');
fs.writeFileSync(filePAth, JSON.stringify(obj, null, 2));




