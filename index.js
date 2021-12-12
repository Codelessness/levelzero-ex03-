// ex03: Welcome your user
var readlineSync = require('readline-sync');

var userName = readlineSync.question("what is your name? ");
var welcomeMessage = "Welcome " + userName;
console.log(welcomeMessage);