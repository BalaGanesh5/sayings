(this.webpackJsonpquotes=this.webpackJsonpquotes||[]).push([[0],{25:function(e,t,n){e.exports=n(50)},30:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),o=n(22),i=n.n(o),r=(n(30),n(4)),s=n(7),u=n(6),l=n(5),v=n(23),f=n.n(v),d=n(12),m=n(11),p=n(24),b=(n(48),function(e,t){return[-(t-window.innerHeight/2)/20,(e-window.innerWidth/2)/20,1.1]}),h=function(e,t,n){return"perspective(900px) rotateX(".concat(e,"deg) rotateY(").concat(t,"deg) scale(").concat(n,")")},y=function(e){var t=e.advice,n=e.onClick,a=Object(m.b)((function(){return{xys:[0,0,1],config:{mass:5,tension:350,friction:40}}})),o=Object(d.a)(a,2),i=o[0],r=o[1],s=Object(m.b)((function(){return{xys:[0,0,1],config:{mass:1,tension:350,friction:4}}})),u=Object(d.a)(s,2),l=u[0],v=u[1];return c.a.createElement("div",{className:"container"},c.a.createElement(m.a.div,{className:"card",onMouseMove:function(e){var t=e.clientX,n=e.clientY;return r({xys:b(t,n)})},onMouseLeave:function(){return r({xys:[0,0,1]})},style:{transform:i.xys.interpolate(h)}},c.a.createElement("h3",{className:"advice"},t),c.a.createElement(p.a,{num:20,type:"cobweb",radius:1,bg:!0})),c.a.createElement(m.a.div,{onMouseMove:function(e){var t=e.clientX,n=e.clientY;return v({xys:b(t,n)})},onMouseLeave:function(){return v({xys:[0,0,1]})},style:{transform:l.xys.interpolate(h)}},c.a.createElement("button",{className:"button",onClick:n},"Moon",c.a.createElement("br",null),"Sayings")))},g=(n(49),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={advice:" What ever the work may me, We have to give our best . . . "},e.fetchAdvice=function(){f.a.get("https://api.adviceslip.com/advice").then((function(t){var n=t.data.slip.advice;e.setState({advice:n})})).catch((function(e){console.log(e)}))},e}return Object(s.a)(n,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(y,{advice:this.state.advice,onClick:this.fetchAdvice}))}}]),n}(c.a.Component));i.a.render(c.a.createElement(g,null),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.e28b7d24.chunk.js.map