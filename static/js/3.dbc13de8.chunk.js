(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{324:function(e,t,a){e.exports={container:"Dialog_container__eGyvk",users:"Dialog_users__3d-65",dialogs:"Dialog_dialogs__1n-nj",textPost:"Dialog_textPost__2reRr"}},325:function(e,t,a){e.exports={user:"User_user__3PqE1"}},326:function(e,t,a){e.exports={textPost:"DialogPosts_textPost__3j3-q"}},330:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(324),o=a.n(r),c=a(30),i=a(325),l=a.n(i),u=function(e){return s.a.createElement("div",{className:l.a.user},s.a.createElement("img",{src:e.ava,className:l.a.miniAva}),s.a.createElement(c.NavLink,{to:"/messages/"+e.id,className:l.a.user},e.name))},m=a(326),d=a.n(m),g=function(e){return s.a.createElement("div",{className:d.a.textPost},e.text)},p=a(139),f=a(140),_=a(54),v=a(41),b=Object(v.a)(10),E=Object(f.a)({form:"dialog"})(function(e){return s.a.createElement("div",null,s.a.createElement("form",{onSubmit:e.handleSubmit},s.a.createElement("div",null,s.a.createElement(p.a,{placeholder:"\u0442\u0435\u043a\u0441\u0442 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f",component:_.a,name:"messageText",validate:[v.b,b]})),s.a.createElement("div",null,s.a.createElement("button",null,"\u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"))))}),h=function(e){return s.a.createElement("main",null,s.a.createElement("div",null,s.a.createElement("h2",null,"\u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435")),s.a.createElement(E,{onSubmit:function(t){e.clickOnDialogButton(t.messageText),console.log(t)}}))},x=function(e){return s.a.createElement("div",{className:o.a.container},s.a.createElement("div",{className:o.a.users},s.a.createElement("b",null,"Users: "),e.usersInfo.usersNameArr.map(function(t,a){return s.a.createElement(u,{name:(n=t,(n=n.split(""))[0]=n[0].toUpperCase(),n.join("")),id:a+1,ava:e.usersInfo.userAva[a]});var n})),s.a.createElement("div",{className:o.a.dialogs},e.usersInfo.textPostsArr.map(function(e){return s.a.createElement(g,{text:e})})),s.a.createElement("div",{className:o.a.textPost},s.a.createElement(h,e)))},j=a(133),w=(a(150),a(32)),P=a(99),N=new j.LoremIpsum,O={_state:{messages:{usersNameArr:[N.generateWords(1),N.generateWords(1),N.generateWords(1)],userAva:["https://mir-s3-cdn-cf.behance.net/project_modules/disp/10f13510774061.560eadfde5b61.png","https://avatarfiles.alphacoders.com/209/thumb-209797.jpg","https://i1.sndcdn.com/avatars-000547985256-ntiz46-t500x500.jpg"],newMessageTexts:"",textPostsArr:[N.generateSentences(3),N.generateSentences(3),N.generateSentences(3),N.generateSentences(3)]},profile:{myAva:"https://s1.narvii.com/image/ryjgek6wsqpdydpjxwl5xm3irpibcxzc_hq.jpg",newPostTexts:"",postsInMainPage:["\u043f\u0440\u0438\u0432","\u043a\u0430\u043a","\u0434\u0435\u043b"]}},getState:function(){return this._state},renderer:function(e){console.log("\u043f\u0443\u0441\u0442\u0430\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0437\u0430\u043c\u0435\u043d\u0438\u0442\u0441\u044f observer'\u043e\u043c")},subscribe:function(e){this.renderer=e},dispatch:function(e){this._state.profile=Object(w.b)(this._state.profile,e),this._state.messages=Object(P.b)(this._state.messages,e),this.renderer(this._state)}};window.store=O;var A=a(10),S=a(132),k=a(9);t.default=Object(k.d)(Object(A.b)(function(e){return{usersInfo:e.messages}},function(e){return{clickOnDialogButton:function(t){return e(Object(P.a)(t))}}}),S.a)(x)}}]);
//# sourceMappingURL=3.dbc13de8.chunk.js.map