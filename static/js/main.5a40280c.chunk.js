(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{24:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(6),o=n.n(c),s=n(7),a=n(8),i=n(12),u=(n(24),n(13)),b=n(2),h=n(3),l=n(5),j=n(4),d="CHANGE_SEARCH_FIELD",p="REQUEST_ROBOTS_PENDING",O="REQUEST_ROBOTS_SUCCESS",f="REQUEST_ROBOTS_FAILED",g=n(1),v=function(e){var t=e.name,n=e.email,r=e.id;return Object(g.jsxs)("div",{className:"tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5",children:[Object(g.jsx)("img",{width:"200",height:"200",alt:"robots",src:"https://robohash.org/set_any/bgset_bg1/".concat(r,"?size=200x200")}),Object(g.jsxs)("div",{children:[Object(g.jsx)("h2",{children:t}),Object(g.jsx)("p",{children:n})]})]})},x=function(e){var t=e.robots;return Object(g.jsx)("div",{children:t.map((function(e,n){return Object(g.jsx)(v,{id:t[n].id,name:t[n].name,email:t[n].email},n)}))})},y=function(e){e.searchfield;var t=e.searchChange;return Object(g.jsx)("div",{className:"pa2",children:Object(g.jsx)("input",{"aria-label":"Search Robots",className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t})})},m=function(e){return Object(g.jsx)("div",{style:{overflow:"scroll",border:"5px solid black",height:"800px"},children:e.children})},C=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var r;return Object(b.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(h.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(g.jsx)("h1",{children:"Something went wrong."}):this.props.children}}]),n}(r.Component),R=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(b.a)(this,n),(e=t.call(this)).updateCount=function(){e.setState((function(e){return{count:e.count+1}}))},e.state={count:0},e}return Object(h.a)(n,[{key:"render",value:function(){return Object(g.jsxs)("button",{id:"counter",color:this.props.color,onClick:this.updateCount,children:["Count: ",this.state.count]})}}]),n}(r.PureComponent),E=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{className:"f2;",children:"RoboFriends"}),Object(g.jsx)(R,{color:"red"})]})}}]),n}(r.Component),S=(n(26),function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(b.a)(this,n);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).filterRobots=function(){return e.props.robots.filter((function(t){return t.name.toLowerCase().includes(e.props.searchField.toLowerCase())}))},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.onSearchChange,n=e.isPending;return Object(g.jsxs)("div",{className:"tc",children:[Object(g.jsx)(E,{}),Object(g.jsx)(y,{searchChange:t}),Object(g.jsx)(m,{children:n?Object(g.jsx)("h1",{children:"Loading"}):Object(g.jsx)(C,{children:Object(g.jsx)(x,{robots:this.filterRobots()})})})]})}}]),n}(r.Component)),w=(n(27),function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(g.jsx)(S,Object(u.a)({},this.props))}}]),n}(r.Component)),k=Object(s.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending}}),(function(e){return{onSearchChange:function(t){return e((n=t.target.value,{type:d,payload:n}));var n},onRequestRobots:function(){return e((function(e){e({type:p}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:O,payload:t})})).catch((function(t){return e({type:f,payload:t})}))}))}}}))(w),_=(n(28),{searchField:""}),P={isPending:!1,robots:[]},F=Object(a.b)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case d:return Object.assign({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case p:return Object.assign({},e,{isPending:!0});case O:return Object.assign({},e,{robots:t.payload,isPending:!1});case f:return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),N=Object(a.c)(F,Object(a.a)(i.a));o.a.render(Object(g.jsx)(s.a,{store:N,children:Object(g.jsx)(k,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.5a40280c.chunk.js.map