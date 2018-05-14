const fs = require('fs');


setInterval(()=>
{
    fs.appendFile("text.txt",Date.now()+"\r\n")

},1000);
