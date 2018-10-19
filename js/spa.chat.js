/*
 spa.chat.js
 chat function module
*/
/*
jslint				browser: true, 	continue: true,
devel: true, 	indent: 2, 			maxerr: 50,
newcap: true, nomen: true, 		plusplus: true,
regexp: true, sloppy: true, 	vars: false,
white: true
*/

/* global $, spa */

spa.chat = (function (){
	//----------------モジュールスコープ変数開始----------------
	var
		configMap = {
			main_html: String()
				+ '<div style="padding:1em; color: #fff;">'
					+ 'Say hello to chat'
				+ '</div>',
			settable_map : {}
		},
		stateMap = {$container: null},
		jqueryMap = {},
		setJqueryMap, configModule, initModule
		;
	//----------------モジュールスコープ変数終了----------------

	//----------------ユーティリティメソッド開始----------------
	//----------------ユーティリティメソッド終了----------------

	//----------------DOMメソッド開始----------------
	//DOMメソッド/setJqueryMap/開始
	setJqueryMap = function(){
		var $container = stateMap.$container;
		jqueryMap = {$container: $container};
	};
	//----------------DOMメソッド終了----------------

	//----------------イベントハンドラ開始----------------
	//----------------イベントハンドラ終了----------------

	//----------------パブリックメソッド開始----------------
	//パブリックメソッド/configModule/開始
	//目的：許可されたキーの構成を調整する
	// 引数：構成可能なキーバリューマップ
	//  color_name - 使用する色
	// 設定：
	//  configMap.settable_map 許可されたキーを宣言する
	// 戻り値：true
	// 例外発行：なし
	//
	configModule = function(input_map){
		spa.util.setConfigMap({
			input_map: input_map,
			settable_map: configMap.settable_map,
			config_map: configMap
		});
		return true;
	};
	//パブリックメソッド/configModule/終了

	//パブリックメソッド/initModule/開始
	//目的：モジュールを初期化する
	// 引数：
	//  $container この機能が使うjQuery要素
	//  戻り値：true
	//  例外発行：なし
  //
  initModule = ($container) => {
  	//チャットスライダーコンテナにHTMLテンプレートを埋める。
  	$container.html(configMap.main_html);
  	stateMap.$container = $container;
  	setJqueryMap();
  	return true;
  }
  //パブリックメソッド/initModule/終了

  //パブリックメソッドを戻す
  return{
  	configModule: configModule,
  	initModule: initModule
  };
	//----------------パブリックメソッド終了----------------
}());

//configModuleのチャットAPI使用(spa/js/spa.chat.js)
// パブリックメソッド/configModule/開始
// 用例：spa.chat.configModule({slider_open_em: 18});
// 目的：初期化前にモジュールを構成する
// 引数：
//  set_chat_anchor - オープンまたはクローズ状態を示すように
//  URIアンカーを変更するコールバック。この子オールバックは要求された状態を
//  満たせない場合にはfalseを返さなければいけない。
//  chat_model - インスタントメッセージングとやり取りするメソッドを提供するチャットモデルオブジェクト。
//  people_model - モデルが保持する人々のリストを管理する
//  メソッドを提供するピープルモデルオブジェクト。
//  slider_ 構成。すべてオプションのスカラー。
//  完全なリストは、mapConfig.settable_mapを参照。
//  用例：slider_open_emはem単位のオープン時の高さ
// 動作：
//  	指定された引数で内部構成データ構造(configMap)を更新する。
//  	その他の動作は行わない。
// 戻り値：true
// 例外発行：受け入れられない引数や欠如した引数では
// 				 JavaScriptエラーオブジェクトとスタックトレース

