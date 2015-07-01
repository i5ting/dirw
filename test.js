var dirw = require('./index');

dirw.walk('.', 0, handleFile);

function handleFile(path, floor) {
  console.log(path)
  console.log(floor)
}

dirw.dir('node_modules', function(p){
    console.log(p);
});