(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{101:function(e,n){},103:function(e,n){},111:function(e,n,t){"use strict";t.r(n);var o=t(0),a=t.n(o),i=t(42),c=t.n(i),r=(t(51),t(45)),s=(t(52),t(53),t(43)),l=t.n(s),m=t(44),u=t.n(m),d=l()("http://localhost:4000");var f=function(){var e=Object(o.useState)(!0),n=Object(r.a)(e,2),t=(n[0],n[1]),i=Object(o.useRef)(),c=Object(o.useRef)(),s={};return Object(o.useEffect)((function(){navigator.mediaDevices.getUserMedia({video:!0,audio:!0}).then((function(e){function n(n){var o=new u.a({initiator:"init"===n,stream:e,trickle:!1});return o.on("stream",(function(e){!function(e){t(!1),c.current.srcObject=e,console.log(70,e,c)}(e)})),o.on("close",(function(){o.destroy()})),o}d.emit("NewClient"),i.current.srcObject=e,d.on("BackOffer",(function(e){var t=n("not init");t.on("signal",(function(e){d.emit("Answer",e)})),t.signal(e)})),d.on("BackAnswer",(function(e){s.gotAnswer=!0,s.peer.signal(e)})),d.on("SessionActive",(function(){console.log("session active. please come back later")})),d.on("CreatePeer",(function(){s.gotAnswer=!1;var e=n("init");e.on("signal",(function(e){s.gotAnswer||d.emit("offer",e)})),s.peer=e}))})).catch((function(e){console.log("swag",e)}))}),[]),a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"video-container"},a.a.createElement("div",{className:"embed-responsive"},"fd",a.a.createElement("video",{width:"400px",ref:i,className:"embed-responsive-item",muted:!0,autoPlay:!0}),"h")),a.a.createElement("div",{className:"video-container"},a.a.createElement("div",{className:"embed-responsive"},"gh",a.a.createElement("video",{width:"400px",ref:c,className:"embed-responsive-item",autoPlay:!0}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},46:function(e,n,t){e.exports=t(111)},51:function(e,n,t){},52:function(e,n,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},53:function(e,n,t){},82:function(e,n){}},[[46,1,2]]]);
//# sourceMappingURL=main.df6a9aa5.chunk.js.map