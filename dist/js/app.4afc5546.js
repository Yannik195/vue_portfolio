(function(t){function e(e){for(var n,i,r=e[0],c=e[1],l=e[2],p=0,d=[];p<r.length;p++)i=r[p],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&d.push(s[i][0]),s[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,r=1;r<a.length;r++){var c=a[r];0!==s[c]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},s={app:0},o=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("85ec"),s=a.n(n);s.a},"2b7e":function(t,e,a){"use strict";var n=a("de8c"),s=a.n(n);s.a},"321c":function(t,e,a){"use strict";var n=a("8aef"),s=a.n(n);s.a},3778:function(t,e,a){},"38e9":function(t,e,a){"use strict";var n=a("cf52"),s=a.n(n);s.a},"46e1":function(t,e,a){},"4ec0":function(t,e,a){"use strict";var n=a("46e1"),s=a.n(n);s.a},"4f77":function(t,e,a){"use strict";var n=a("9f2b"),s=a.n(n);s.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("0cdd");var n=a("2b0e"),s=a("5f5b");a("ab8b"),a("2dd8");n["default"].use(s["a"]);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("header",[a("AboutMe")],1),a("main",[a("Projects"),a("Skills")],1)])},i=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("NavBar",{staticClass:"navbar"}),n("img",{attrs:{src:a("f237"),alt:""}}),t._m(0),n("i",{staticClass:"fas fa-arrow-down fa-sm"})],1)},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("h1",[t._v(" Hallo,"),a("br"),t._v(" ich bin "),a("span",[t._v("Yannik")]),t._v("! ")]),a("h2",[t._v("Ich mag Code.")]),a("div",{staticClass:"socials"},[a("i",{staticClass:"fab fa-github"}),a("i",{staticClass:"fab fa-linkedin"}),a("i",{staticClass:"fab fa-instagram"})])])}],l=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},u=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navbar"},[a("div",{staticClass:"desktop-nav"},[a("ul",[a("li",{staticClass:"active"},[t._v("About me")]),a("li",[t._v("Projects")]),a("li",[t._v("Skills")]),a("li",[t._v("Contact")])])]),a("i",{staticClass:"fas fa-bars fa-xs"})])}],p={name:"NavBar",data:function(){return{}},methods:{}},d=p,f=(a("2b7e"),a("2877")),v=Object(f["a"])(d,l,u,!1,null,"2c36308a",null),m=v.exports,g={name:"AboutMe",components:{NavBar:m}},_=g,h=(a("321c"),Object(f["a"])(_,r,c,!1,null,"4711c1d7",null)),b=h.exports,w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper"},t._l(t.projects,(function(t){return a("Project",{key:t.id,attrs:{project:t}})})),1)},j=[],k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"project"},[t.project.id%2==1?a("div",{staticClass:"wrapper-uneven",attrs:{"data-aos":"fade-up"}},[a("img",{attrs:{src:"https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",alt:""}}),a("div",{staticClass:"info"},[a("h1",[t._v(t._s(t.project.name))]),a("h3",[t._v(t._s(t.project.description))]),t._l(t.project.tags,(function(t){return a("Tag",{key:t,staticClass:"tag",attrs:{tag:t}})}))],2)]):a("div",{staticClass:"wrapper-even",attrs:{"data-aos":"fade-up"}},[a("div",{staticClass:"info"},[a("h1",[t._v(t._s(t.project.name))]),a("h3",[t._v(t._s(t.project.description))]),t._l(t.project.tags,(function(t){return a("Tag",{key:t,staticClass:"tag",attrs:{tag:t}})}))],2),a("img",{attrs:{src:"https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",alt:""}})])])},C=[],y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[t._v("#"+t._s(t.tag))])},P=[],x={name:"Tag",props:["tag"]},O=x,$=(a("c571"),Object(f["a"])(O,y,P,!1,null,"c57b0d3e",null)),A=$.exports,E={name:"Project",props:["project"],components:{Tag:A}},M=E,S=(a("4f77"),Object(f["a"])(M,k,C,!1,null,"48e160e9",null)),B=S.exports,F={components:{Project:B},name:"Projects.vue",data:function(){return{projects:[{id:1,name:"Project 1",description:"Android Mobile Application",tags:["android","java"],link:""},{id:2,name:"Project 2",description:"Prototype",tags:["adobexd","figma"],link:""}]}},methods:{}},N=F,T=(a("4ec0"),Object(f["a"])(N,w,j,!1,null,"7fa75970",null)),I=T.exports,J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"skills"},[a("h1",[t._v("I feel comfortable working with")]),a("div",{staticClass:"wrapper"},t._l(t.skills,(function(t){return a("img",{key:t.name,class:{wide:t.wide},attrs:{alt:"",src:t.svg}})})),0)])},D=[],G={name:"Skills",data:function(){return{skills:[{name:"Vue.js",svg:"https://cdn.svgporn.com/logos/vue.svg",wide:!1},{name:"JavaScript",svg:"https://cdn.svgporn.com/logos/javascript.svg",wide:!1},{name:"Git",svg:"https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg",wide:!0},{name:"Photoshop",svg:"https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg",wide:!1},{name:"Illustrator",svg:"https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg",wide:!1},{name:"Xd",svg:"https://upload.wikimedia.org/wikipedia/commons/c/c2/Adobe_XD_CC_icon.svg",wide:!1},{name:"Node.js",svg:"https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",wide:!0},{name:"MonogDB",svg:"https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg",wide:!0},{name:"NPM",svg:"https://upload.wikimedia.org/wikipedia/commons/d/db/Npm-logo.svg",wide:!0},{name:"Android",svg:"https://upload.wikimedia.org/wikipedia/commons/8/82/Android_logo_2019.svg",wide:!1},{name:"Java",svg:"https://www.vectorlogo.zone/logos/java/java-icon.svg",wide:!1},{name:"Bootstrap",svg:"https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg",wide:!1}]}}},L=G,X=(a("38e9"),Object(f["a"])(L,J,D,!1,null,"af2c794c",null)),Y=X.exports,z={name:"App",data:function(){return{}},components:{AboutMe:b,Projects:I,Skills:Y}},H=z,V=(a("034f"),Object(f["a"])(H,o,i,!1,null,null,null)),q=V.exports,K=a("8c4f"),Q=a("5c96"),R=a.n(Q),U=a("f5af"),W=a.n(U),Z=(a("e829"),function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),tt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("Lebenslauf")])])}],et=(a("c50d"),{}),at=Object(f["a"])(et,Z,tt,!1,null,"4f688a32",null),nt=at.exports,st=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},ot=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("Portfolio")])])}],it=(a("ab6c"),{}),rt=Object(f["a"])(it,st,ot,!1,null,"b25cd9f6",null),ct=rt.exports,lt=a("ce5b"),ut=a.n(lt);a("bf40");n["default"].use(ut.a);var pt=new ut.a({theme:{themes:{light:{primary:"#ee44aa",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}}});a("d5e8"),a("5363");n["default"].use(K["a"]),n["default"].use(R.a);var dt=[{path:"/",component:b},{path:"/skills",component:Y},{path:"/portfolio",component:ct},{path:"/resume",component:nt}],ft=new K["a"]({routes:dt,mode:"history"});n["default"].config.productionTip=!1,new n["default"]({created:function(){W.a.init()},render:function(t){return t(q)},vuetify:pt,router:ft}).$mount("#app")},"5fe9":function(t,e,a){},"66c9":function(t,e,a){},"85ec":function(t,e,a){},"8aef":function(t,e,a){},"9f2b":function(t,e,a){},ab6c:function(t,e,a){"use strict";var n=a("5fe9"),s=a.n(n);s.a},c50d:function(t,e,a){"use strict";var n=a("66c9"),s=a.n(n);s.a},c571:function(t,e,a){"use strict";var n=a("3778"),s=a.n(n);s.a},cf52:function(t,e,a){},de8c:function(t,e,a){},f237:function(t,e,a){t.exports=a.p+"img/YannikSimon_compressed.0dbfb9a8.png"}});
//# sourceMappingURL=app.4afc5546.js.map