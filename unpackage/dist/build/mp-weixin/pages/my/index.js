(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/index"],{"23f3":function(e,n,t){"use strict";var u=t("600f"),c=t.n(u);c.a},"3b62":function(e,n,t){"use strict";var u,c=function(){var e=this,n=e.$createElement;e._self._c},a=[];t.d(n,"b",(function(){return c})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){return u}))},4006:function(e,n,t){"use strict";t.r(n);var u=t("7581"),c=t.n(u);for(var a in u)"default"!==a&&function(e){t.d(n,e,(function(){return u[e]}))}(a);n["default"]=c.a},"5cab":function(e,n,t){"use strict";(function(e){t("80f3");u(t("66fd"));var n=u(t("92c8"));function u(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},"600f":function(e,n,t){},7581:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=c(t("9f9c"));function c(e){return e&&e.__esModule?e:{default:e}}var a={data:function(){return{status:[{key:1,name:"待发货",url:"../../static/fumou-center-template/one.png"},{key:2,name:"待收货",url:"../../static/fumou-center-template/2.png"},{key:3,name:"待评价",url:"../../static/fumou-center-template/3.png"},{key:4,name:"全部订单",url:"../../static/fumou-center-template/4.png"}],menus:[{name:"我的收藏",icon:"../../static/fumou-center-template/5.png",key:1},{name:"地址管理",icon:"../../static/fumou-center-template/6.png",key:2},{name:" 我的积分",icon:"../../static/fumou-center-template/7.png",key:3},{name:"帮助中心",icon:"../../static/fumou-center-template/8.png",key:4},{name:"意见反馈",icon:"../../static/fumou-center-template/9.png",key:5},{name:"关于我们",icon:"../../static/fumou-center-template/10.png",key:6}],nickname:"",nicknameurl:"../../static/fumou-center-template/header.jpg",indexBackgroundImage:u.default}},methods:{getUserInfo:function(n){var t=this;console.log(n),e.login({provider:"weixin",success:function(n){console.log(n),e.getUserInfo({provider:"weixin",success:function(e){t.nickname=e.userInfo.nickName,t.nicknameurl=e.userInfo.avatarUrl,console.log("用户昵称为："+e.userInfo.nickName)}})}})}},computed:{},onLoad:function(){}};n.default=a}).call(this,t("543d")["default"])},"92c8":function(e,n,t){"use strict";t.r(n);var u=t("3b62"),c=t("4006");for(var a in c)"default"!==a&&function(e){t.d(n,e,(function(){return c[e]}))}(a);t("23f3");var o,r=t("f0c5"),i=Object(r["a"])(c["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],o);n["default"]=i.exports}},[["5cab","common/runtime","common/vendor"]]]);