console.log("Starting app.js");

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js')
// fs.appendFile('greetings.txt', 'Hello World!');

console.log(`Result ${notes.add(9, -2)}`);
// var user = os.userInfo();

// fs.appendFile('greetings.txt', `Hello ${user.username}! You are followed ${notes.age}.`, function(err) {
//   if (err) {
//     console.log('Unable to write to file');
//   }
// });