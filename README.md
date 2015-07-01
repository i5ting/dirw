# dirw

a nodejs directory utils 

## Install 

    npm install --save dirw
    
## Usages

遍历所有文件和目录

    var dirw = require('dirw');
    
    dirw.walk('.', 0, handleFile);
    
    function handleFile(path, floor) {
      
    }

遍历目录

    var dirw = require('dirw');
    dirw.dir(path, function(dir_path, dir_name){
      console.log(p);
    });

