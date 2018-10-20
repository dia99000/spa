//Node.js hello world Sutras

/*
app.js
ミドルウェアを備えたExpressサーバExpress
*/

//--------モジュールスコープ変数開始--------
'use strict';
var
	//モジュールのロード
	http = require('http'),
	express = require('express'),
	//appオブジェクト、HTTP serverオブジェクトの作成
	app = express(),
	server = http.createServer(app);
//--------モジュールスコープ変数終了--------

//--------サーバ構成開始--------

//すべての環境
app.configure( ()=>{
	app.use(express.logger());
	app.use(express.bodyParser());
	app.use(express.methodOverride());
});

//開発環境
//errorHandleerメソッドで例外をダンプ、スタックトレースを表示するように構成。
app.configure('development', ()=>{
	app.use(express.logger());
	app.use(express.errorHandler({
		dumpExceptions: true,
		showStack: true,
	}) );
});
//本番環境
//デフォルトオプションでerrorHandlerミドルウェアを追加
app.configure('production', ()=>{
	app.use(express.errorHandler());
});
app.get('/', (req,res)=>{
	res.send('Hello Express');
});
//--------サーバ構成終了--------

//--------サーバ起動開始--------
server.listen(3000);
console.log(
	'Express server listening on port %d in %s mode',
	server.address().port, app.settings.env
);
//--------サーバ起動終了--------