(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{229:function(n,t,e){var content=e(235);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(64).default)("4e0bef30",content,!0,{sourceMap:!1})},232:function(n,t,e){var map={"./Img.png":233};function r(n){var t=o(n);return e(t)}function o(n){if(!e.o(map,n)){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}return map[n]}r.keys=function(){return Object.keys(map)},r.resolve=o,n.exports=r,r.id=232},233:function(n,t,e){n.exports=e.p+"img/Img.bc44833.png"},234:function(n,t,e){"use strict";e(229)},235:function(n,t,e){var r=e(63)((function(i){return i[1]}));r.push([n.i,".home-page{\n  padding:50px 30px\n}\nh2{\n  margin-bottom:30px;\n  text-align:center\n}\n.articles{\n  margin:0 auto;\n  max-width:800px\n}\n.article{\n  margin-bottom:15px\n}\n.article-inner{\n  padding:15px;\n  background:#fff;\n  box-shadow:0 3px 6px rgba(0,0,0,.1);\n  border-radius:8px;\n  display:flex\n}\n.article-inner img{\n  display:block;\n  width:100%;\n  max-width:300px\n}\n.article-inner .detail{\n  padding-left:15px;\n  padding-right:15px\n}\nh3{\n  color:#212121;\n  font-size:24px\n}\nh3,p{\n  text-decoration:none\n}\np{\n  color:#888;\n  font-size:18px\n}",""]),r.locals={},n.exports=r},252:function(n,t,e){"use strict";e.r(t);var r=e(6),o=(e(37),{asyncData:function(n){return Object(r.a)(regeneratorRuntime.mark((function t(){var e,r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.$content,r=n.params,t.next=3,e("blog",r.slug).only(["title","description","img","slug"]).sortBy("createdAt","asc").fetch();case 3:return o=t.sent,t.abrupt("return",{articles:o});case 5:case"end":return t.stop()}}),t)})))()}}),c=(e(234),e(48)),component=Object(c.a)(o,(function(){var n=this,t=n.$createElement,r=n._self._c||t;return r("div",{staticClass:"home-page"},[r("h2",[n._v("Latest Posts")]),n._v(" "),r("div",{staticClass:"articles"},n._l(n.articles,(function(article){return r("div",{key:article,staticClass:"article"},[r("nuxt-link",{attrs:{to:{name:"slug",params:{slug:article.slug}}}},[r("div",{staticClass:"article-inner"},[r("img",{attrs:{src:e(232)("./"+article.img),alt:""}}),n._v(" "),r("div",{staticClass:"detail"},[r("h3",[n._v(n._s(article.title))]),n._v(" "),r("p",[n._v(n._s(article.description))])])])])],1)})),0)])}),[],!1,null,null,null);t.default=component.exports}}]);