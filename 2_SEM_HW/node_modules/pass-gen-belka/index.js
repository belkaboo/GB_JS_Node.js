/**
 * Generate password with params
 * @param {number} length - pass lenght.
 * @param {boolean} useNumbers - Using numbers.
 * @param {boolean} useSpecialChars - Using special chars.
 * @returns {string} СGenerated password.
 */
function getPassword(length, useNumbers, useSpecialChars) {
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const specialChars = '!@#$%^&*()_+[]{}|<>?';

    let charSet = lowerCaseChars + upperCaseChars;

    if (useNumbers) {
        charSet += numbers;
    }

    if (useSpecialChars) {
        charSet += specialChars;
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charSet.length);
        password += charSet[randomIndex];
    }

    return password;
}



module.exports = {
    getPassword
};