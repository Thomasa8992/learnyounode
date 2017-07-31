var fs = require("fs");
fs.readdir(process.argv[2], "utf-8", function(err, list){
    if(err){
        throw new Error();
    }
for(var i = 0; i < list.length-12; i++){
    console.log(list[i]);
}
})