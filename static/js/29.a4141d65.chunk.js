"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[29],{548:function(n,e,r){r.d(e,{FE:function(){return s},Hx:function(){return l},Mc:function(){return p},uV:function(){return f},zo:function(){return o}});var t=r(861),a=r(757),c=r.n(a),u=r(294);u.Z.defaults.baseURL="https://api.themoviedb.org/3";var i="fac0051e5028e4e08485614e96cef816",o=function(){var n=(0,t.Z)(c().mark((function n(){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/trending/all/day?api_key=".concat(i));case 2:return e=n.sent,r=e.data.results,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,t.Z)(c().mark((function n(e){var r,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/search/movie?query=".concat(e,"&api_key=").concat(i));case 2:return r=n.sent,t=r.data.results,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(c().mark((function n(e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(e,"?api_key=").concat(i));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(c().mark((function n(e){var r,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(e,"/credits?api_key=").concat(i));case 2:return r=n.sent,t=r.data.cast,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(c().mark((function n(e){var r,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(e,"/reviews?api_key=").concat(i));case 2:return r=n.sent,t=r.data.results,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},321:function(n,e,r){r.d(e,{a:function(){return c}});var t=r(137),a=r(184),c=function(){return(0,a.jsx)(t.Yt,{visible:!0,height:"80",width:"80",ariaLabel:"magnifying-glass-loading",wrapperStyle:{},wrapperClass:"magnifying-glass-wrapper",glassColor:"#c0efff",color:"#e15b64"})}},146:function(n,e,r){r.d(e,{e:function(){return x}});var t,a,c,u=r(689),i=r(87),o=r(168),s=r(924),p=s.ZP.ul(t||(t=(0,o.Z)(["\n    display: flex;\n    flex-wrap: wrap;\n    gap: 20px;\n"]))),f=s.ZP.div(a||(a=(0,o.Z)(["\n    width: 250px;\n    background-color: #ebbafc;\n    box-shadow: 0 0px 8px rgb(127, 10, 133);\n    border-radius: 20px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n"]))),l=s.ZP.p(c||(c=(0,o.Z)(["\n    color: black;\n "]))),d=r(184),x=function(n){var e=n.items,r=(0,u.TH)();return(0,d.jsx)(p,{children:e.map((function(n){var e=n.poster_path,t=n.name,a=n.title,c=n.id;return(0,d.jsx)("li",{children:(0,d.jsx)(i.rU,{to:"/movies/".concat(c),state:{from:r},children:(0,d.jsxs)(f,{children:[(0,d.jsx)("img",{src:e?"https://image.tmdb.org/t/p/w500/".concat(e):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",alt:t||a,width:250,height:375}),(0,d.jsx)(l,{children:t||a})]})})},c)}))})}},29:function(n,e,r){r.r(e),r.d(e,{default:function(){return k}});var t,a,c,u=r(861),i=r(439),o=r(757),s=r.n(o),p=r(218),f=r(791),l=r(548),d=r(87),x=r(168),h=r(924),v=h.ZP.form(t||(t=(0,x.Z)(["\n    display: flex;\n    gap: 16px;\n    margin-bottom: 20px;\n\n"]))),m=h.ZP.input(a||(a=(0,x.Z)(["\n    padding: 8px;\n    border-radius: 12px;\n    border: 1px solid grey;\n    font-size: 20px;\n"]))),g=h.ZP.button(c||(c=(0,x.Z)(["\n    padding: 8px;\n    border-radius: 12px;\n    background-color: #828df2;\n    color: black;\n    border: none;\n    font-size: 20px;\n\n\n"]))),b=r(184),w=function(){var n=(0,d.lr)(),e=(0,i.Z)(n,2)[1];return(0,b.jsxs)(v,{onSubmit:function(n){n.preventDefault();var r=n.currentTarget;e({query:r.elements.name.value}),r.reset()},children:[(0,b.jsx)(m,{type:"text",name:"name",id:"name",placeholder:"Search movies",autoComplete:"off",autoFocus:!0}),(0,b.jsx)(g,{type:"submit",children:"Search"})]})},Z=r(146),y=r(321),k=function(){var n=(0,f.useState)([]),e=(0,i.Z)(n,2),r=e[0],t=e[1],a=(0,f.useState)(!1),c=(0,i.Z)(a,2),o=c[0],x=c[1],h=(0,d.lr)(),v=(0,i.Z)(h,1)[0].get("query");return(0,f.useEffect)((function(){function n(){return(n=(0,u.Z)(s().mark((function n(){var e;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,x(!0),n.next=4,(0,l.FE)(v);case 4:e=n.sent,t(e),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),p.ZP.error("Oops! Something went wrong! Please try reloading this page! \ud83e\udd79");case 11:return n.prev=11,x(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[v]),(0,b.jsxs)("div",{children:[(0,b.jsx)(w,{}),v&&o&&(0,b.jsx)(y.a,{}),v&&(0,b.jsx)(Z.e,{items:r})]})}}}]);
//# sourceMappingURL=29.a4141d65.chunk.js.map