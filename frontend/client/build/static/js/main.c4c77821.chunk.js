(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{101:function(e,n){},103:function(e,n){},111:function(e,n,t){"use strict";t.r(n);var o=t(0),a=t.n(o),c=t(42),i=t.n(c),r=(t(51),t(45)),s=(t(52),t(53),t(43)),l=t.n(s),m=t(44),u=t.n(m);var d=function(){var e=l()(),n=Object(o.useState)(!0),t=Object(r.a)(n,2),c=(t[0],t[1]),i=Object(o.useRef)(),s=Object(o.useRef)(),m={};return Object(o.useEffect)((function(){navigator.mediaDevices.getUserMedia({video:!0,audio:!0}).then((function(n){function t(t){var o=new u.a({initiator:"init"===t,stream:n,trickle:!1});return o.on("stream",(function(e){!function(e){c(!1),s.current.srcObject=e}(e)})),o.on("close",(function(){s.connect.srcObject=null,e.emit("Disconnect"),o.destroy()})),o}e.emit("NewClient"),i.current.srcObject=n,e.on("BackOffer",(function(n){console.log(n);var o=t("notinit");o.on("signal",(function(n){e.emit("Answer",n)})),o.signal(n)})),e.on("BackAnswer",(function(e){m.gotAnswer=!0,m.peer.signal(e)})),e.on("SessionActive",(function(){console.log("session active. please come back later")})),e.on("CreatePeer",(function(){m.gotAnswer=!1;var n=t("init");n.on("signal",(function(n){m.gotAnswer||e.emit("Offer",n)})),m.peer=n}))})).catch((function(e){console.log("swag",e)}))}),[]),a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"video-container"},a.a.createElement("div",{className:"embed-responsive"},a.a.createElement("video",{width:"400px",ref:i,className:"embed-responsive-item",muted:!0,autoPlay:!0}))),a.a.createElement("div",{className:"video-container"},a.a.createElement("div",{className:"embed-responsive"},a.a.createElement("video",{width:"400px",ref:s,className:"embed-responsive-item",autoPlay:!0}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},46:function(e,n,t){e.exports=t(111)},51:function(e,n,t){},52:function(e,n,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},53:function(e,n,t){},82:function(e,n){}},[[46,1,2]]]);
//# sourceMappingURL=main.c4c77821.chunk.js.map