
const fs = require('fs');

const filePath = './BoardingPass.pkpass'
// Read the file into a buffer
const fileBuffer = fs.readFileSync(filePath);

// Convert the buffer to a Base64 encoded string
const base64String = fileBuffer.toString('base64');

// Write the Base64 encoded string to a new file
// fs.writeFileSync('./BoardingPass.js', base64String);

// Write the Base64 encoded string to a new JavaScript file
const fileContent = `const myFileBase64 = '${base64String}';\nmodule.exports = myFileBase64;`;
fs.writeFileSync('./BoardingPass.js', fileContent);

console.log('File saved.');
