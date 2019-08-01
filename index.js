var http = require( 'http' ); // HTTPモジュール読み込み
var socketio = require( 'socket.io' ); // Socket.IOモジュール読み込み
var fs = require( 'fs' ); // ファイル入出力モジュール読み込み

// 3000番ポートでHTTPサーバーを立てる
var server = http.createServer( function( req, res ) {
    res.writeHead(200, { 'Content-Type' : 'text/html' }); // ヘッダ出力
    res.end( fs.readFileSync('./index.html', 'utf-8') );  // index.htmlの内容を出力
}).llisten(process.env.PORT || 3000);

// サーバーをソケットに紐付ける
var io = socketio.listen( server );

// 接続確立後の通信処理部分を定義
io.sockets.on( 'connection', function( socket ) {

    // ボタン1に関するクライアントからサーバーへデータ送信ハンドラ
    socket.on( 'btn1_message', function( data ) {
    // テキストボックス1に関してサーバーからクライアントへデータを送り返し
    io.sockets.emit( 'rtn1_message', { value : data.value } );
    });

    // ボタン2に関するクライアントからサーバーへデータ送信ハンドラ
    socket.on( 'btn2_message', function( data ) {
    // テキストボックス2に関してサーバーからクライアントへデータを送り返し
    io.sockets.emit( 'rtn2_message', { value : data.value } );
    });

    // ボタン3に関するクライアントからサーバーへデータ送信ハンドラ
    socket.on( 'btn3_message', function( data ) {
    // テキストボックス3に関してサーバーからクライアントへデータを送り返し
    io.sockets.emit( 'rtn3_message', { value : data.value } );
    });

    // ボタン4に関するクライアントからサーバーへデータ送信ハンドラ
    socket.on( 'btn4_message', function( data ) {
    // テキストボックス4に関してサーバーからクライアントへデータを送り返し
    io.sockets.emit( 'rtn4_message', { value : data.value } );
    });

});
