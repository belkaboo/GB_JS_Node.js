const { getPassword } = require('pass-gen-belka');


const pass = getPassword(10, true, true);
console.log(pass)