(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{23:function(e,t,n){},25:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(6),o=n.n(c),s=n(7),a=n(8),i=n(12),u=(n(23),n(2)),h=n(3),b=n(5),l=n(4),d="CHANGE_SEARCH_FIELD",j="REQUEST_ROBOTS_PENDING",O="REQUEST_ROBOTS_SUCCESS",p="REQUEST_ROBOTS_FAILED",f=n(1),g=function(e){var t=e.name,n=e.email,r=e.id;return Object(f.jsxs)("div",{className:"tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5",children:[Object(f.jsx)("img",{alt:"robots",src:"https://robohash.org/set_any/bgset_bg1/".concat(r,"?size=200x200")}),Object(f.jsxs)("div",{children:[Object(f.jsx)("h2",{children:t}),Object(f.jsx)("p",{children:n})]})]})},v=function(e){var t=e.robots;return Object(f.jsx)("div",{children:t.map((function(e,n){return Object(f.jsx)(g,{id:t[n].id,name:t[n].name,email:t[n].email},n)}))})},x=function(e){e.searchfield;var t=e.searchChange;return Object(f.jsx)("div",{className:"pa2",children:Object(f.jsx)("input",{"aria-label":"Search Robots",className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t})})},m=function(e){return Object(f.jsx)("div",{style:{overflow:"scroll",border:"5px solid black",height:"800px"},children:e.children})},y=function(e){Object(b.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(u.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(h.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(f.jsx)("h1",{children:"Something went wrong."}):this.props.children}}]),n}(r.Component),C=function(e){Object(b.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(u.a)(this,n),(e=t.call(this)).updateCount=function(){e.setState((function(e){return{count:e.count+1}}))},e.state={count:0},e}return Object(h.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("button",{color:this.props.color,onClick:this.updateCount,children:["Count: ",this.state.count]})}}]),n}(r.PureComponent),R=function(e){Object(b.a)(n,e);var t=Object(l.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(f.jsx)(C,{color:"red"})]})}}]),n}(r.Component),E=(n(25),function(e){Object(b.a)(n,e);var t=Object(l.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.robots,n=e.searchField,r=e.onSearchChange,c=e.isPending,o=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return c?Object(f.jsx)("h1",{children:"Loading"}):Object(f.jsxs)("div",{className:"tc",children:[Object(f.jsx)(R,{}),Object(f.jsx)(x,{searchChange:r}),Object(f.jsx)(m,{children:c?Object(f.jsx)("h1",{children:"Loading"}):Object(f.jsx)(y,{children:Object(f.jsx)(v,{robots:o})})})]})}}]),n}(r.Component)),S=Object(s.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending}}),(function(e){return{onSearchChange:function(t){return e((n=t.target.value,{type:d,payload:n}));var n},onRequestRobots:function(){return e((function(e){e({type:j}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:O,payload:t})})).catch((function(t){return e({type:p,payload:t})}))}))}}}))(E),w=(n(26),{searchField:""}),k={isPending:!1,robots:[],error:""},_=Object(a.b)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case d:return Object.assign({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case j:return Object.assign({},e,{isPending:!0});case O:return Object.assign({},e,{robots:t.payload,isPending:!1});case p:return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),P=Object(a.c)(_,Object(a.a)(i.a));o.a.render(Object(f.jsx)(s.a,{store:P,children:Object(f.jsx)(S,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.4b98672d.chunk.js.map