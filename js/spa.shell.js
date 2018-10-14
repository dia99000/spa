/*
*spa.shell.js
*SPAのシェルモジュール
*/

/*
jslint				browser: true, 	continue: true,
devel: true, 	indent: 2, 			maxerr: 50,
newcap: true, nomen: true, 		plusplus: true,
regexp: true, sloppy: true, 	vars: false,
white: true
*/

/*global $, spa */
spa.shell = (function(){
	//----------------モジュールスコープ変数開始----------------
	//spa.shell内で利用できるすべての変数を宣言する。
	var
	configMap = {
		main_html: String()
			+ '<div class="spa-shell-head">'
				+ '<div class="spa-shell-head-logo"></div>'
				+ '<div class="spa-shell-head-acct"></div>'
				+ '<div class="spa-shell-head-search"></div>'
			+ '</div>'
			+ '<div class="spa-shell-main spa-x-closed">'
				+ '<div class="spa-shell-main-nav"></div>'
				+ '<div class="spa-shell-main-content"></div>'
			+ '</div>'
			+ '<div class="spa-shell-foot"></div>'
			+ '<div class="spa-shell-chat"></div>'
			+ '<div class="spa-shell-modal"></div>',
		}
	},
	//モジュール全体で共有する動的情報をstateMapに配置
	stateMap = {$container : null},
	//jqueryMapにjQueryコレクションをキャッシュ
	jqueryMap = {},
	//このセクションですべてのモジュールスコープ変数を宣言。後で割り当てる
	setJqueryMap, initModule;
	//----------------モジュールスコープ変数終了----------------

	//----------------ユーティリティメソッド開始----------------
	//----------------ユーティリティメソッド終了----------------

	//----------------DOMメソッド開始----------------

	setJqueryMap = function(){
		var $container = stateMap.$container;
		jqueryMap = {
			$container: $container,
			$chat: $container.find( '.spa-shell-chat')
		};
	};
	//----------------DOMメソッド終了----------------

	//----------------イベントハンドラ開始----------------
	//----------------イベントハンドラ終了----------------

	//----------------パブリックメソッド開始----------------
	initModule = function($container){
		//HTMLをロードし、jQueryコレクションをマッピングする
		stateMap.$container = $container;
		$container.html(configMap.main_html);
		setJqueryMap();

		//切り替えをテストする
		setTimeout(function(){toggleChat(true);},3000);
		setTimeout(function(){toggleChat(false);},3000);
	};
	return {initModule: initModule};
	//----------------パブリックメソッド終了----------------
}());