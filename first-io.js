var fs = require('fs');
var g = fs.readFileSync(process.argv[2]);
var s = g.toString();
var newSentence = s.split("\n").length -1;
console.log(newSentence);
// var newSentence = str.split(" ");

// var total = 0;

//   for (var i = 2; i < g.length; i++) {
//     total += Number(g[i]);
//   }