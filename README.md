
## node-qrdecode is ?
a qrdecode with nodejs

## yuo can do this with the node-qrdecode

* decode the qr image


## how to use
this package have used canvas@2.0, fs, so be sure that you have installed the canvas.

* npm install node-qrdecode

when you have installed the node-qrdecode, you can use it by follow:

```javascript
    let qrdecode = require('node-qrdecode');
    let imgpath = '/home/test.jpg';
    qrdecode(imgpath).then(function(data){
        console.log(data);
    }).catch...
    
```

or you can use it by async/await

```javascript
    ...
    let data = await qrdecode(imgpath);
    console.log(data);
    
```


## bugs please let me know

* email(1256136108@qq.com)
* QQ: 1256136108


## about author

```javascript
  var hehe = {
    nickName  : "gnep",
    site : "www.5min8.com"
  }
```


