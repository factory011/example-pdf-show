// var http = require('http');

// http.createServer(function (request, response) {

//   // 发送 HTTP 头部 
//   // HTTP 状态值: 200 : OK
//   // 内容类型: text/plain
//   response.writeHead(200, { 'Content-Type': 'text/plain' });

//   // 发送响应数据 "Hello World"
//   response.end('Hello World\n');
// }).listen(8888);

// // 终端打印如下信息
// console.log('Server running at http://127.0.0.1:8888/');


var express = require('express'); //引入express模块
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//定义方法
app.get('/', function (req, res) {
  res.send('HellowWorld')
});

//响应接口
app.get('/list/product', function (req, res) {
  //数据
  let result = {
    err: 0,
    msg: 'ok',
    data: {
      "name": "huawei",
      "price": "1999",
      "title": "huawei huawei huawei",
      "id": "1"
    }
  }
  res.send(result)
})

app.post('/login', function (req, res) {
  var user_name = req.body.user;
  var password = req.body.password;
  console.log("User name = " + user_name + ", password is " + password);
  let result = {
    resultcode: 0,
    resultmessage: 'ok',
    resultdata: {
      "name": "huawei",
      "price": "1999",
      "title": "huawei huawei huawei",
      "id": "1"
    }
  }
  if (user_name === 'admin' && password === 123456) {
    res.end(JSON.stringify(result));
  } else {
    res.end("no");
  }
});


//定义端口，此处所用为3000端口，可自行更改
var server = app.listen(3000, function () {
  console.log('runing 3000...');
})
