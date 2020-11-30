(this.webpackJsonprobotfriends=this.webpackJsonprobotfriends||[]).push([[0],{26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(7),c=n.n(a),i=n(8),s=n(6),l=n(15),u=n(16),h=n(1),d="CHANGE_SEARCH_FIELD",b="REQUEST_ROBOTS_PENDING",f="REQUEST_ROBOTS_SUCCESS",p="REQUEST_ROBOTS_FAILED",v={searchField:""},m={isPending:!1,robots:[],error:""},g=(n(26),n(2)),E=n(3),w=n(5),O=n(4),y=(n(27),n(28),function(e){var t=e.id,n=e.name,r=e.email;return o.a.createElement("div",{className:"tc card dib br3 pa3 ma2 grow bw2 shadow-5"},o.a.createElement("img",{src:"https://robohash.org/".concat(t,"?size=250x250"),alt:""}),o.a.createElement("div",null,o.a.createElement("h2",null,n),o.a.createElement("p",null,r)))}),j=function(e){var t=e.robots;return o.a.createElement("div",null,t.map((function(e){return o.a.createElement(y,{key:e.id,id:e.id,name:e.name,email:e.email})})))},R=function(e){var t=e.children;return o.a.createElement("div",{style:{overflowY:"scroll",border:"5px solid black",height:"600px"}},t)},S=function(e){var t=e.onSearchChange;return o.a.createElement("div",{className:"pa3"},o.a.createElement("input",{"aria-label":"Search",onChange:t,className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",name:"searchField"}))},k=function(e){Object(w.a)(n,e);var t=Object(O.a)(n);function n(e){var r;return Object(g.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(E.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?o.a.createElement("h1",null," Oooops. That is not good"):this.props.children}}]),n}(r.Component),C=function(e){Object(w.a)(n,e);var t=Object(O.a)(n);function n(){var e;Object(g.a)(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).filterRobots=function(){return e.props.robots.filter((function(t){return t.name.toLowerCase().includes(e.props.searchField.toLowerCase())}))},e}return Object(E.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.onSearchChange,n=e.isPending;return o.a.createElement("div",{className:"tc"},o.a.createElement("h1",{className:"f1"},"RobotFriends"),o.a.createElement(S,{onSearchChange:t}),o.a.createElement(R,null,n?o.a.createElement("h1",null,"Loading..."):o.a.createElement(k,null,o.a.createElement(j,{robots:this.filterRobots()}))))}}]),n}(o.a.Component),F=function(e){Object(w.a)(n,e);var t=Object(O.a)(n);function n(){return Object(g.a)(this,n),t.apply(this,arguments)}return Object(E.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){return o.a.createElement(C,this.props)}}]),n}(o.a.Component),N=Object(i.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(t){return e((n=t.target.value,{type:d,payload:n}));var n},onRequestRobots:function(){return e((function(e){e({type:b}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:f,payload:t})})).catch((function(t){return e({type:p,payload:t})}))}))}}}))(F),P=(n(29),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function A(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var T=Object(l.createLogger)(),L=Object(s.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case d:return Object(h.a)(Object(h.a)({},e),{},{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case b:return Object(h.a)(Object(h.a)({},e),{},{isPending:!0});case f:return Object(h.a)(Object(h.a)({},e),{},{robots:t.payload,isPending:!1});case p:return Object(h.a)(Object(h.a)({},e),{},{error:t.payload,isPending:!1});default:return e}}}),W=Object(s.d)(L,Object(s.a)(u.a,T));c.a.render(o.a.createElement(i.a,{store:W},o.a.createElement(N,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/RobotFriends",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/RobotFriends","/service-worker.js");P?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):A(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):A(t,e)}))}}()}},[[30,1,2]]]);
//# sourceMappingURL=main.a881eaea.chunk.js.map