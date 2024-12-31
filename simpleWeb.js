const http = require('http'); //웹서버 지원하는 라이브러리 호출


http.createServer((req, res) => { //서버 생성
  res.statusCode = 200; //callback 함수 
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
}).listen(7777); // } 뒤의 listen(7777)은 포트번호
