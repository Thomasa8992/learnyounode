var fs = require("fs");
fs.readFile(process.argv[2], "utf-8", function(err, success){
    if(err){
        throw new Error();
    }
    console.log(success.split("\n").length -1);
})