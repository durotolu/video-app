(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{108:function(e,n){},110:function(e,n){},119:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),c=t(47),r=t.n(c),i=(t(58),t(14)),s=(t(59),t(60),t(48)),l=t.n(s),m=t(49),u=t.n(m),d=t(15);function f(){var e=Object(i.a)(["\n  width: 70%;\n  border: 2px solid black;\n  transform: rotateY(180deg);\n  /* safari an chrome */\n  -webkit-transform: rotateY(180deg);\n  /* Firefox */\n  -moz-transform: rotateY(180deg)\n"]);return f=function(){return e},e}function v(){var e=Object(i.a)(["\n\n"]);return v=function(){return e},e}function p(){var e=Object(i.a)(["\n display: flex\n"]);return p=function(){return e},e}var b=d.a.div(p()),g=d.a.div(v()),E=d.a.video(f()),w=function(){var e=l()(),n=Object(a.useRef)(),t=Object(a.useRef)(),c={};return Object(a.useEffect)((function(){navigator.mediaDevices.getUserMedia({video:!0,audio:!0}).then((function(a){function o(e){var n=new u.a({initiator:"init"===e,stream:a});return n.on("error",(function(e){console.log(e)})),n.on("stream",(function(e){!function(e){t.current.srcObject=e}(e)})),n.on("close",(function(){t.connect.srcObject=null,n.destroy()})),n}e.emit("NewClient"),n.current.srcObject=a,e.on("BackOffer",(function(n){var t=o("notinit");t.on("signal",(function(n){e.emit("Answer",n)})),t.signal(n)})),e.on("BackAnswer",(function(e){c.gotAnswer=!0,c.peer.signal(e)})),e.on("SessionActive",(function(){console.log("session active. please come back later")})),e.on("CreatePeer",(function(){c.gotAnswer=!1;var n=o("init");n.on("signal",(function(n){c.gotAnswer||e.emit("Offer",n)})),c.peer=n})),e.on("RemoveVideo",(function(){t.connect.srcObject=null,e.emit("Disconnect")}))})).catch((function(e){console.log("swag",e)}))}),[]),o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"App-header"},o.a.createElement(b,{className:"row"},o.a.createElement(g,null,o.a.createElement("div",{className:"video-container"},o.a.createElement("div",{className:"embed-responsive"},o.a.createElement(E,{ref:n,className:"embed-responsive-item",muted:!0,autoPlay:!0}))),o.a.createElement("div",{className:"video-container"},o.a.createElement("div",{className:"embed-responsive"},o.a.createElement(E,{ref:t,className:"embed-responsive-item",autoPlay:!0})))),o.a.createElement(g,null,o.a.createElement("div",{className:"video-container"},o.a.createElement("div",{className:"embed-responsive"},o.a.createElement(E,{className:"embed-responsive-item",autoPlay:!0}))),o.a.createElement("div",{className:"video-container"},o.a.createElement("div",{className:"embed-responsive"},o.a.createElement(E,{className:"embed-responsive-item",autoPlay:!0})))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},53:function(e,n,t){e.exports=t(119)},58:function(e,n,t){},59:function(e,n,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},60:function(e,n,t){},89:function(e,n){}},[[53,1,2]]]);
//# sourceMappingURL=main.fc313d9b.chunk.js.map