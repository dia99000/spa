//Node.js hello world Sutras

/*
app.js
Connect
*/

const
	bodyText = 'Hello Connect';
let
	http = require('http'),
	connect = require('connect'),
	app = connect(),
	connectHello, server;

connectHello = (req,res,next) =>{
	res.setHeader('content-length', bodyText.length);
	res.end(bodyText);
};

app
	//コンソールにログ情報を出力
	// .use(connect.logger())
	//Hello Connectをクライアントに送信してレスポンスを終了
	.use(connectHello);

server = http.createServer(app);
server.listen(3000);
console.log('Listening on port %d', server.address().port);