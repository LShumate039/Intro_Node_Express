var fs = require('fs');
var data = fs.readdirSync('../');
console.log('data: ', data);
console.log("This code is last");



 var myModule = require('./my-module.js');

 console.log('Text from the external module: ', myModule.myText);


