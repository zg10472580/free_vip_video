(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-play"],{"002f":function(n,a,t){var e=t("24fb");a=e(!1),a.push([n.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.p_n-group[data-v-8085a296]{display:flex;justify-content:center}.p_n-group uni-view[data-v-8085a296]{box-shadow:none}.iframeStyle[data-v-8085a296]{width:100%;height:350px;background:#000;border:0}uni-radio-group[data-v-8085a296]{margin-top:%?20?%;display:flex;flex-wrap:wrap;justify-content:center}uni-radio-group .radio[data-v-8085a296]{margin:%?7?%}.item[data-v-8085a296]{padding:10px 2%;transition:all .5s;color:#fff;border-radius:5px;background:#000;box-shadow:0 0 10px #03e9f4,0 0 20px #03e9f4,0 0 20px #03e9f4,0 0 10px #03e9f4;margin:15px}.catalogue[data-v-8085a296]{display:flex;flex-wrap:wrap;justify-content:center}.active[data-v-8085a296]{background:red}',""]),n.exports=a},"1da7":function(n,a,t){"use strict";var e=t("c731"),i=t.n(e);i.a},"390c":function(n,a,t){"use strict";var e;t.d(a,"b",(function(){return i})),t.d(a,"c",(function(){return r})),t.d(a,"a",(function(){return e}));var i=function(){var n=this,a=n.$createElement,t=n._self._c||a;return t("v-uni-view",[t("iframe",{staticClass:"iframeStyle",attrs:{allowfullscreen:!0,src:n.playConf.playUrl}}),t("v-uni-input",{staticStyle:{"text-align":"center"},attrs:{type:"text",value:"当前解析地址："+(n.playConf.playUrl?n.playConf.playUrl:"正在等待操作...")}}),t("v-uni-radio-group",{on:{change:function(a){arguments[0]=a=n.$handleEvent(a),n.radioChange.apply(void 0,arguments)}}},n._l(n.interface.length,(function(a){return t("v-uni-label",{key:a,staticClass:"radio"},[t("v-uni-radio",{attrs:{value:a.toString(),checked:a==n.playConf.interfaceIndex}}),n._v("接口"+n._s(a))],1)})),1),t("v-uni-view",{staticClass:"p_n-group"},[t("v-uni-view",{staticClass:"item",on:{click:function(a){arguments[0]=a=n.$handleEvent(a),n.clickNav(n.playConf.videoIndex-1)}}},[n._v("上一集")]),t("v-uni-view",{staticClass:"item",on:{click:function(a){arguments[0]=a=n.$handleEvent(a),n.clickNav(n.playConf.videoIndex)}}},[n._v("播放")]),t("v-uni-view",{staticClass:"item",on:{click:function(a){arguments[0]=a=n.$handleEvent(a),n.clickNav(n.playConf.videoIndex+1)}}},[n._v("下一集")])],1),t("v-uni-view",{staticClass:"catalogue"},n._l(n.videoList,(function(a,e){return t("v-uni-view",{class:n.playConf.videoIndex==e?"item active":"item",on:{click:function(a){arguments[0]=a=n.$handleEvent(a),n.clickNav(e)}}},[n._v(n._s(a.title))])})),1)],1)},r=[]},"3f79":function(n,a,t){"use strict";t.r(a);var e=t("8e47"),i=t.n(e);for(var r in e)"default"!==r&&function(n){t.d(a,n,(function(){return e[n]}))}(r);a["default"]=i.a},"8e47":function(n,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e={data:function(){return{interface:getApp().globalData.interface,playConf:{interfaceIndex:1,videoIndex:0,playUrl:""},videoList:[]}},onLoad:function(n){var a=this;uni.getStorage({key:"videoList",success:function(n){a.videoList=n.data}}),uni.getStorage({key:"playConf",success:function(n){a.playConf=n.data}})},methods:{radioChange:function(n){this.playConf.interfaceIndex=n.detail.value,this.clickNav(this.playConf.videoIndex)},clickNav:function(n){if(n<0||n>=this.videoList.length)uni.showToast({title:"不能继续了",icon:"error",duration:2e3});else{this.playConf.videoIndex=n;var a=this.interface[this.playConf.interfaceIndex-1]+this.videoList[this.playConf.videoIndex].url;this.playConf.playUrl="",uni.setStorage({key:"playConf",data:this.playConf}),this.playConf.playUrl=a}}}};a.default=e},c731:function(n,a,t){var e=t("002f");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);var i=t("4f06").default;i("4f5b6b1d",e,!0,{sourceMap:!1,shadowMode:!1})},d11f:function(n,a,t){"use strict";t.r(a);var e=t("390c"),i=t("3f79");for(var r in i)"default"!==r&&function(n){t.d(a,n,(function(){return i[n]}))}(r);t("1da7");var o,c=t("f0c5"),l=Object(c["a"])(i["default"],e["b"],e["c"],!1,null,"8085a296",null,!1,e["a"],o);a["default"]=l.exports}}]);