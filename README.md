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
      if(dir_name == 'bin' || dir_name == '.bin'){
        return;
      }
      
      console.log(dir_path);
      console.log(dir_name);
    });


## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## History

- v1.0.2 dir方法增加dir_name参数
- v1.0.0 init


## Welcome fork and feedback

- write by `i5ting` shiren1118@126.com

如有建议或意见，请在issue提问或邮件

## License

this repo is released under the [MIT
License](http://www.opensource.org/licenses/MIT).
