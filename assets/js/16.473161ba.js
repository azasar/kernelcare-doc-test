(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{217:function(t,e,_){"use strict";_.r(e);var r=_(0),s=Object(r.a)({},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),_("table",[t._m(2),t._v(" "),_("tbody",[t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),_("tr",[t._m(15),t._v(" "),_("td",[t._v("特定の日付でのパッチを充てます。詳細情報は "),_("router-link",{attrs:{to:"/jp/sticky_patches/"}},[t._v("Stickyパッチ")]),t._v(" を参照ください。")],1)]),t._v(" "),t._m(16),t._v(" "),t._m(17)])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"設定オプション"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#設定オプション","aria-hidden":"true"}},[this._v("#")]),this._v(" 設定オプション")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("kcarectlの動作は "),e("code",[this._v("/etc/sysconfig/kcare/kcare.conf")]),this._v(" を使用し、設定できます。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th"),this._v(" "),e("th")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[e("code",[this._v("AUTO_UPDATE=True|False")])]),this._v(" "),e("td",[e("code",[this._v("True")]),this._v(" - 自動更新を有効化; "),e("code",[this._v("False")]),this._v(" - 自動更新を無効化")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[e("code",[this._v("chkconfig kcare off")])]),this._v(" "),e("td",[this._v("restart 後に自動更新を無効化")])])},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("tr",[_("td",[_("code",[t._v("PATCH_METHOD=normal|nofreeze|smart")])]),t._v(" "),_("td",[_("code",[t._v("Normal")]),t._v(" - (デフォルト) freezer を使用;"),_("br"),_("code",[t._v("Nofreeze")]),t._v(" - プロセスをフリーズすることのために freezer を使用しない;"),_("br"),t._v(" "),_("code",[t._v("Smart")]),t._v(" - smart freezerは、パッチ適用のためにフリーズする必要のあるスレッドのみをフリーズ(kernelcare ver2.3以降)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[e("code",[this._v("PATCH_SERVER")])]),this._v(" "),e("td",[this._v("パッチをダウンロードするために使用するサーバ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[e("code",[this._v("REGISTRATION_URL")])]),this._v(" "),e("td",[this._v("ライセンスされるサーバ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[e("code",[this._v("PREFIX=prefix")])]),this._v(" "),e("td",[this._v("パッチソースのプレフィックスで、プレフィックスベースで異なるロケーションからダウンロードすることによって、異なるビルドをテストするために使用（ver2.2以降）")])])},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("tr",[_("td",[_("code",[t._v("UPDATE_POLICY=REMOTE|LOCAL|LOCAL_FIRST [ver1.6以降]")])]),t._v(" "),_("td",[t._v("ポリシーに従い、サーバの起動時に次のコマンドを実行。:"),_("br"),_("code",[t._v("REMOTE")]),t._v(" - (デフォルト) パッチサーバからパッチを取得"),_("br"),_("code",[t._v("LOCAL")]),t._v(" - ローカルにキャッシュされたパッチのみ取得。何もキャッシュされていない場合、何も行いません (キャッシュは自動的に実行)"),_("br"),_("code",[t._v("LOCAL_FIRST")]),t._v(" - ローカルにキャッシュされたパッチが存在するかどうかを確認し、それらを取得。そうでない場合、リモートサーバから取得。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[e("code",[this._v("IGNORE_UNKNOWN_KERNEL=True|False")]),this._v(" "),e("code",[this._v("[ver2.5-4以降]")])]),this._v(" "),e("td",[this._v("自動更新時にカーネルが不明の場合、通知を実行しない")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[e("code",[this._v("LOAD_KCARE_SYSCTL [ver2.7-1以降]")])]),this._v(" "),e("td",[e("code",[this._v("/etc/sysconfig/kcare/sysctl.conf")]),this._v(" はパッチセットロード時に実行するかどうかをコントロールします。デフォルトでは True となっています。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[e("code",[this._v("--set-patch-type extra")])]),this._v(" "),e("td",[this._v("追加のパッチを有効化")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[e("code",[this._v("--set-patch-type free")])]),this._v(" "),e("td",[this._v("無料のパッチを有効化")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[e("code",[this._v("STICKY_PATCH=KEY")])]),this._v(" "),e("td",[e("code",[this._v("KEY")]),this._v(" からスティッキーパッチを取得(CLN、Key 編集を参照); IPベースのサーバまたはePortalではサポートされていません。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[e("code",[this._v("STICKY_PATCH=DDMMYY")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[e("code",[this._v("REPORT_FQDN=True|False")])]),this._v(" "),e("td",[this._v("ホスト名として完全に認定されたドメイン（Fully Qualified Domain）を使用する必要があります。デフォルトでは　False となっています。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[e("code",[this._v("FORCE_GID=N")])]),this._v(" "),e("td",[this._v("シンボリックリンクの保護パッチに、このグループIDを使用。デフォルトでは48（デフォルトのApacheユーザ GID）もしくは99（ "),e("code",[this._v("nobody")]),this._v(" ユーザ）となっています。)")])])}],!1,null,null,null);e.default=s.exports}}]);