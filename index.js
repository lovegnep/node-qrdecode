const Qrdecoder = require('./qrcode-decoder');
const fs = require('fs');

//path要求是文件的绝对路径
function decodepro(path){
    if(!path || path.length < 1 ){
        return null;
    }
    if(path[0] !== '/'){
        return null;
    }
    return new Promise(function(resolve,reject){
        fs.readFile(path, function(err, squid){
            if (err) reject(err);
            Qrdecoder.callback = function(data){
                resolve(data);
            }
            Qrdecoder.decode(squid);

        });
    });


}

let decode = async (path) =>{
    let res = await decodepro(path);
    return res;
}
module.exports = decode;
