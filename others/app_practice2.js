//Node.js hello world Sutras

/*
app.js
基本的なルーティング
*/

let http,server;

http = require('http');
server = http.createServer( (request, response)=>{
	//リクエスト処理
	var response_text = request.url === '/test'
	? 'you have hit the test page'
	: 'Hello World';
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end(response_text);
}).listen(3000);

console.log('Listening on port %d', server.address().port);