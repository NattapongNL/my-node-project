const fs = require("fs");

// fs.writeFile("Message.txt","Hello from NodeJS!",(err)=>{
//     if(err) throw err;
//     console.log("The file has been saved");

// });

fs.readFile("./Message.txt","utf-8",(err,data)=>{
   if (err) throw err;
   console.log(data);
});