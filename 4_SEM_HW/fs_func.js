const fs = require('fs');

/**
 * 
 * @param {string} path 
 * @returns 
 */

const readUsersFromFile = (path) => {
    try {
        const data = fs.readFileSync(path, 'utf-8');
        return JSON.parse(data);
    } catch (err) {
        console.log(err);
        return [];
    }
};

/**
 * 
 * @param {string} path
 * @param {*} data 
 */
const writeUsersToFile = (path, data) => {
    fs.writeFileSync(path, JSON.stringify(data, null, 2));
};




module.exports = { readUsersFromFile, writeUsersToFile };