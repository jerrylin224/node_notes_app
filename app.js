console.log("Starting app");

const fs = require('fs');
const os = require('os');
// fs.appendFile('greetings.txt', 'Hello World!');

var user = os.userInfo();

fs.appendFile('greetings.txt', `Test ${user.username}! `, function(err) {
  if (err) {
    console.log('Unable to write to file');
  }
});
// fs.appendFile('greetings.txt', 'Hello World!', function(err) {
//   if (err) {
//     console.log('Unable to write to file');
//   }
// });