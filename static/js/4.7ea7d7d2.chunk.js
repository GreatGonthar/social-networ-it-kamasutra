(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{327:function(e,n,a){e.exports={"main-color":"Users_main-color__UuQ0V",ava_picture:"Users_ava_picture__1mAd6",pageSelected:"Users_pageSelected__3yJs9",pointer:"Users_pointer__3msEL",users_info:"Users_users_info__1Nd7T",users_info_text:"Users_users_info_text__WVjsF",button_follow:"Users_button_follow__3NQVp"}},328:function(e,n,a){e.exports={pagination:"UsersPagination_pagination__2kVJw",numb:"UsersPagination_numb__1KxBH",dots:"UsersPagination_dots__2UJSL",btn:"UsersPagination_btn__3iHcT",blure:"UsersPagination_blure__1bKbf",prev:"UsersPagination_prev__3D_7j",next:"UsersPagination_next__3M0hF",active:"UsersPagination_active__7E8AJ"}},331:function(e,n,a){"use strict";a.r(n);var t=a(10),r=a(25),s=a(26),l=a(28),u=a(27),i=a(29),o=(a(50),a(11),a(0)),c=a.n(o),m=a(14),g=a(327),f=a.n(g),P=a(73),_=a.n(P),b=a(328),p=a.n(b),h=function(e){for(var n=[],a=e.firstNumberPanel;a<=e.firstNumberPanel+7;a++)n.push(a);return c.a.createElement("div",null,c.a.createElement("div",{className:p.a.pagination},c.a.createElement("ul",null,c.a.createElement("li",{className:n[0]>1?p.a.btn+" "+p.a.prev:p.a.btn+" "+p.a.blure,onClick:function(){e.setFirstNumberPanel(e.firstNumberPanel-8),e.setCurrentPage(e.firstNumberPanel-8),e.changePage(e.firstNumberPanel-8)}},c.a.createElement("span",null,c.a.createElement("i",{className:p.a.fas+" "+p.a.faAngleLeft}),"prev")),n.map(function(n){return c.a.createElement("li",{className:p.a.numb+" "+(n==e.currentPage&&p.a.active),onClick:function(){e.setCurrentPage(n),e.changePage(n)}},c.a.createElement("span",null,n))}),e.currentPage<e.numbersPage-8?c.a.createElement("li",{className:p.a.dots},c.a.createElement("span",null,"...")):null,c.a.createElement("li",{className:p.a.numb,onClick:function(){e.setCurrentPage(e.numbersPage),e.changePage(e.numbersPage),e.setFirstNumberPanel(e.numbersPage-8)}},c.a.createElement("span",null,e.numbersPage)),c.a.createElement("li",{className:p.a.btn+" "+p.a.next,onClick:function(){e.setFirstNumberPanel(e.firstNumberPanel+8),e.setCurrentPage(e.firstNumberPanel+8),e.changePage(e.firstNumberPanel+8)}},c.a.createElement("span",null,c.a.createElement("i",{className:p.a.fas+" "+p.a.faAngleLeft}),"next")))))},d=function(e){for(var n=[],a=Math.ceil(e.usersSum/e.pageSize),t=1;t<=a;t++)n.push(t);return c.a.createElement("div",null,c.a.createElement(h,{currentPage:e.currentPage,numbersPage:a,setCurrentPage:e.setCurrentPage,changePage:e.changePage,firstNumberPanel:e.firstNumberPanel,setFirstNumberPanel:e.setFirstNumberPanel}),console.log(e.users),e.users.map(function(n){return c.a.createElement("div",{className:f.a.users_info},c.a.createElement("div",null,c.a.createElement(m.c,{to:"/Profile/"+n.id},c.a.createElement("img",{src:null!=n.photos.small?n.photos.small:_.a,className:f.a.ava_picture}))),c.a.createElement("div",{className:f.a.users_info_text},c.a.createElement("div",null,"\u0418\u043c\u044f: ",n.name,","),c.a.createElement("div",null,"ID: ",n.id,","),c.a.createElement("div",null,'\u0421\u0442\u0430\u0442\u0443\u0441: "',n.status||"\u043d\u0435\u0442 \u0441\u0442\u0430\u0442\u0443\u0441\u0430",'",'),n.followed?c.a.createElement("button",{disabled:e.followingInProgress==n.id,onClick:function(){e.unfollowThunkCreator(n.id)}},"\u0443\u0431\u0440\u0430\u0442\u044c \u0438\u0437 \u0434\u0440\u0443\u0437\u0435\u0439"):c.a.createElement("button",{disabled:e.followingInProgress==n.id,className:f.a.button_follow,onClick:function(){e.followThunkCreator(n.id)}},"\u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0434\u0440\u0443\u0437\u044c\u044f")))}))},E=a(151),N=function(e){function n(e){var a;return Object(r.a)(this,n),(a=Object(l.a)(this,Object(u.a)(n).call(this,e))).changePage=function(e){a.props.getUsersThunkCreator(e,a.props.pageSize)},a}return Object(i.a)(n,e),Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsersThunkCreator(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,this.props.isFetching?c.a.createElement(E.a,null):null,c.a.createElement(d,Object.assign({},this.props,{changePage:this.changePage})))}}]),n}(c.a.Component),v=a(138),w=function(e){return e.usersPage.users},C=function(e){return e.usersPage.pageSize},U=function(e){return e.usersPage.usersSum},k=function(e){return e.usersPage.currentPage},F=function(e){return e.usersPage.firstNumberPanel},S=function(e){return e.usersPage.isFetching},x=function(e){return e.usersPage.followingInProgress};n.default=Object(t.b)(function(e){return{users:w(e),pageSize:C(e),usersSum:U(e),currentPage:k(e),firstNumberPanel:F(e),isFetching:S(e),followingInProgress:x(e)}},{follow:v.b,unfollow:v.g,setCurrentPage:v.e,setFirstNumberPanel:v.f,getUsersThunkCreator:v.d,unfollowThunkCreator:v.h,followThunkCreator:v.c})(N)}}]);
//# sourceMappingURL=4.7ea7d7d2.chunk.js.map