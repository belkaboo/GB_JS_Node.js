const fs = require('fs');
const path = require('path');

const filePAth = path.join(__dirname, 'person.json');

const data = JSON.parse(fs.readFileSync(filePAth, 'utf-8'));

data.age -= 10;
data.city = 'Ekaterinburg';

fs.writeFileSync(filePAth, JSON.stringify(data, null, 2));