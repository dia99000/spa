//Node.js hello world Sutras

/*
app.js
基本的なロギング
*/

var http,server;

//HTTPモジュールを参照しhttpに格納
http = require('http');
//http.createServerメソッドでHTTPサーバを作成
//requestオブジェクト：クライアントが送信したHTTPリクエスト
server = http.createServer( function(request, response){
	//成功を表すHTTPレスポンスコード200, プロパティContent-Typeと値：どのようなコンテンツが値に含まれるか
	response.writeHead(200, {'Content-Type': 'text/plain'});
	//指定の文字列をクライアントに送り、Node.jsにレスポンスが完了したことを知らせる
	response.end('Hello World');
//listenメソッドで、httpオブジェクトにポート3000を待ちうけするように指示
}).listen(3000);

console.log('Listening on port %d', server.address().port);