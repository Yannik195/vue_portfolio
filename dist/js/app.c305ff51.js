(function(t){function e(e){for(var n,i,r=e[0],c=e[1],l=e[2],p=0,d=[];p<r.length;p++)i=r[p],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&d.push(s[i][0]),s[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,r=1;r<a.length;r++){var c=a[r];0!==s[c]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},s={app:0},o=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("85ec"),s=a.n(n);s.a},"0f86":function(t,e,a){},"189c":function(t,e,a){"use strict";var n=a("5b9f"),s=a.n(n);s.a},"25ec":function(t,e,a){"use strict";var n=a("0f86"),s=a.n(n);s.a},3328:function(t,e,a){"use strict";var n=a("b4dc"),s=a.n(n);s.a},"360f":function(t,e,a){"use strict";var n=a("4ec6"),s=a.n(n);s.a},"46e1":function(t,e,a){},"4ec0":function(t,e,a){"use strict";var n=a("46e1"),s=a.n(n);s.a},"4ec6":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("0cdd");var n=a("2b0e"),s=a("5f5b");a("ab8b"),a("2dd8");n["default"].use(s["a"]);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("header",[a("AboutMe")],1),a("main",[a("Projects"),a("Skills"),a("Contact")],1)])},i=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("NavBar",{staticClass:"navbar"}),n("img",{attrs:{src:a("f237"),alt:""}}),t._m(0),n("i",{staticClass:"fas fa-arrow-down fa-sm"})],1)},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("h1",[t._v(" Hallo,"),a("br"),t._v(" ich bin "),a("span",[t._v("Yannik")]),t._v("! ")]),a("h2",[t._v("Ich mag Code.")]),a("div",{staticClass:"socials"},[a("a",{attrs:{href:"https://github.com/Yannik195/",target:"_blank"}},[a("i",{staticClass:"fab fa-github"})]),a("a",{attrs:{href:"https://www.linkedin.com/in/yannik-simon-498b50192/",target:"_blank"}},[a("i",{staticClass:"fab fa-linkedin"})]),a("a",{attrs:{href:"https://www.instagram.com/yaaannik_/",target:"_blank"}},[a("i",{staticClass:"fab fa-instagram"})])])])}],l=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},u=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navbar"},[a("div",{staticClass:"desktop-nav"},[a("ul",[a("li",{staticClass:"active"},[t._v("About me")]),a("li",[t._v("Projects")]),a("li",[t._v("Skills")]),a("li",[t._v("Contact")])])]),a("i",{staticClass:"fas fa-bars fa-xs"}),a("div",{})])}],p={name:"NavBar",data:function(){return{}},methods:{}},d=p,f=(a("189c"),a("2877")),m=Object(f["a"])(d,l,u,!1,null,"1bb6d33d",null),v=m.exports,g={name:"AboutMe",components:{NavBar:v}},_=g,h=(a("360f"),Object(f["a"])(_,r,c,!1,null,"63612f29",null)),b=h.exports,w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper"},t._l(t.projects,(function(t){return a("Project",{key:t.id,attrs:{project:t}})})),1)},j=[],k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"project"},[t.project.id%2==1?a("div",{staticClass:"wrapper-uneven",attrs:{"data-aos":"fade-up"}},[a("img",{attrs:{src:"https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",alt:""}}),a("div",{staticClass:"info"},[a("h1",[t._v(t._s(t.project.name))]),a("h3",[t._v(t._s(t.project.description))]),t._l(t.project.tags,(function(t){return a("Tag",{key:t,staticClass:"tag",attrs:{tag:t}})}))],2)]):a("div",{staticClass:"wrapper-even",attrs:{"data-aos":"fade-up"}},[a("div",{staticClass:"info"},[a("h1",[t._v(t._s(t.project.name))]),a("h3",[t._v(t._s(t.project.description))]),t._l(t.project.tags,(function(t){return a("Tag",{key:t,staticClass:"tag",attrs:{tag:t}})}))],2),a("img",{attrs:{src:"https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",alt:""}})])])},y=[],C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[t._v("#"+t._s(t.tag))])},x=[],O={name:"Tag",props:["tag"]},P=O,E=(a("aa5b"),Object(f["a"])(P,C,x,!1,null,"1f4b515a",null)),$=E.exports,A={name:"Project",props:["project"],components:{Tag:$}},M=A,S=(a("8f9d"),Object(f["a"])(M,k,y,!1,null,"e53f85ea",null)),N=S.exports,B={components:{Project:N},name:"Projects.vue",data:function(){return{projects:[{id:1,name:"Project 1",description:"Android Mobile Application",tags:["android","java"],link:""},{id:2,name:"Project 2",description:"Prototype",tags:["adobexd","figma"],link:""}]}},methods:{}},F=B,T=(a("4ec0"),Object(f["a"])(F,w,j,!1,null,"7fa75970",null)),D=T.exports,J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"skills"},[a("div",{staticClass:"wrapper",attrs:{"data-aos":"fade-up"}},t._l(t.skills,(function(t){return a("img",{key:t.name,class:{wide:t.wide},attrs:{alt:"",src:t.svg}})})),0)])},I=[],L={name:"Skills",data:function(){return{skills:[{name:"Vue.js",svg:"https://cdn.svgporn.com/logos/vue.svg",wide:!1},{name:"JavaScript",svg:"https://cdn.svgporn.com/logos/javascript.svg",wide:!1},{name:"Git",svg:"https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg",wide:!0},{name:"Photoshop",svg:"https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg",wide:!1},{name:"Illustrator",svg:"https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg",wide:!1},{name:"Xd",svg:"https://upload.wikimedia.org/wikipedia/commons/c/c2/Adobe_XD_CC_icon.svg",wide:!1},{name:"Node.js",svg:"https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",wide:!0},{name:"MonogDB",svg:"https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg",wide:!0},{name:"NPM",svg:"https://upload.wikimedia.org/wikipedia/commons/d/db/Npm-logo.svg",wide:!0},{name:"Android",svg:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Android_new_logo_2019.svg/768px-Android_new_logo_2019.svg.png",wide:!0},{name:"Java",svg:"https://www.vectorlogo.zone/logos/java/java-icon.svg",wide:!1},{name:"Bootstrap",svg:"https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg",wide:!1},{name:"Netlify",svg:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Netlify_logo.svg/1280px-Netlify_logo.svg.png",wide:!0}]}}},Y=L,G=(a("3328"),Object(f["a"])(Y,J,I,!1,null,"0383dd93",null)),X=G.exports,z=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},H=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"contact"},[a("h1",[t._v("Leave me a message")]),a("form",{attrs:{name:"contact",netlify:""}},[a("input",{attrs:{type:"text",id:"fname",name:"fname",placeholder:"E-Mail"}}),a("textarea",{attrs:{name:"Text1",cols:"40",rows:"4",placeholder:"Message"}}),a("button",{attrs:{type:"submit"}},[t._v("SEND")])]),a("h4",[t._v("or contact me")]),a("h4",[t._v("hallo@yanniksimon.de")])])}],V={name:"Contact"},q=V,K=(a("25ec"),Object(f["a"])(q,z,H,!1,null,"fe8e5578",null)),Q=K.exports,R={name:"App",data:function(){return{}},components:{AboutMe:b,Projects:D,Skills:X,Contact:Q}},U=R,W=(a("034f"),Object(f["a"])(U,o,i,!1,null,null,null)),Z=W.exports,tt=a("8c4f"),et=a("5c96"),at=a.n(et),nt=a("f5af"),st=a.n(nt),ot=(a("e829"),function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),it=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("Lebenslauf")])])}],rt=(a("c50d"),{}),ct=Object(f["a"])(rt,ot,it,!1,null,"4f688a32",null),lt=ct.exports,ut=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},pt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("Portfolio")])])}],dt=(a("ab6c"),{}),ft=Object(f["a"])(dt,ut,pt,!1,null,"b25cd9f6",null),mt=ft.exports,vt=a("ce5b"),gt=a.n(vt);a("bf40");n["default"].use(gt.a);var _t=new gt.a({theme:{themes:{light:{primary:"#ee44aa",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}}});a("d5e8"),a("5363");n["default"].use(tt["a"]),n["default"].use(at.a);var ht=[{path:"/",component:b},{path:"/skills",component:X},{path:"/portfolio",component:mt},{path:"/resume",component:lt}],bt=new tt["a"]({routes:ht,mode:"history"});n["default"].config.productionTip=!1,new n["default"]({created:function(){st.a.init()},render:function(t){return t(Z)},vuetify:_t,router:bt}).$mount("#app")},"5b9f":function(t,e,a){},"5fe9":function(t,e,a){},"619f":function(t,e,a){},"66c9":function(t,e,a){},"85ec":function(t,e,a){},"8f9d":function(t,e,a){"use strict";var n=a("619f"),s=a.n(n);s.a},aa5b:function(t,e,a){"use strict";var n=a("dcca"),s=a.n(n);s.a},ab6c:function(t,e,a){"use strict";var n=a("5fe9"),s=a.n(n);s.a},b4dc:function(t,e,a){},c50d:function(t,e,a){"use strict";var n=a("66c9"),s=a.n(n);s.a},dcca:function(t,e,a){},f237:function(t,e,a){t.exports=a.p+"img/YannikSimon_compressed.0dbfb9a8.png"}});
//# sourceMappingURL=app.c305ff51.js.map