(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,t,n){e.exports=n.p+"static/media/3littleones2.61563c91.jpg"},32:function(e,t,n){e.exports=n.p+"static/media/3littlePrincesses.ece95fe3.jpg"},33:function(e,t,n){e.exports=n.p+"static/media/78.1a947471.jpg"},36:function(e,t,n){e.exports=n(95)},41:function(e,t,n){},43:function(e,t,n){},45:function(e,t,n){},49:function(e,t,n){},51:function(e,t,n){},53:function(e,t,n){},55:function(e,t,n){},57:function(e,t,n){},59:function(e,t,n){},81:function(e,t,n){},83:function(e,t,n){},85:function(e,t,n){},89:function(e,t,n){},91:function(e,t,n){},93:function(e,t,n){},95:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(19),r=n.n(i),l=(n(41),n(10)),c=n(11),s=n(15),m=n(12),p=n(16),u=(n(43),n(45),n(98)),f=function(e){var t=e.link,n=e.exact,a=e.children;return o.a.createElement("li",{className:"navigation-item"},o.a.createElement(u.a,{exact:n,to:t,activeClassName:"active"},a))},d=function(){return o.a.createElement("ul",{className:"navigation-items"},o.a.createElement(f,{link:"/",exact:!0},"Welcome"),o.a.createElement(f,{link:"/aboutMe"},"About me"),o.a.createElement(f,{link:"/portfolio"},"Project portfolio"),o.a.createElement(f,{link:"/contact"},"Contact"))},h=(n(49),n(51),function(e){var t=e.clicked,n=["mobile-menu-toggle__menu-icon"];return e.open&&(n=["mobile-menu-toggle__menu-icon","mobile-menu-toggle__menu-icon--close-x"]),o.a.createElement("div",{className:"mobile-menu-toggle"},o.a.createElement("div",{onClick:t,className:n.join(" ")},o.a.createElement("div",{className:"mobile-menu-toggle__menu-icon__middle"})))}),g=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"app-header"},o.a.createElement(h,{open:this.props.open,clicked:this.props.click}),o.a.createElement("nav",{className:"desktop-only"},o.a.createElement(d,null)))}}]),t}(a.Component),E=(n(53),n(55),function(e){return e.show?o.a.createElement("div",{onClick:e.clicked,className:"backdrop"}):null}),v=function(e){var t=e.open,n=e.close,a=["mobile-menu","closed"];return t&&(a=["mobile-menu","open"]),o.a.createElement(o.a.Fragment,null,o.a.createElement(E,{show:t,clicked:n}),o.a.createElement("div",{className:a.join(" ")},o.a.createElement("nav",null,o.a.createElement(d,null))))},b=(n(57),n(99)),w=n(96),y=(n(59),n(30)),k=function(e){var t=e.title,n=e.description,a=e.children;return o.a.createElement("div",{className:"container"},o.a.createElement("h2",{className:"glitch","data-text":t},t),o.a.createElement(y.Animated,{animationIn:"rollIn",isVisible:!0},o.a.createElement("span",{className:"description"}," ",n," ")),a)},N=o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,"Welcome to my world!"),o.a.createElement("hr",null),o.a.createElement("p",null,"Check out my latest creations in portfolio and feel free to contact me however you prefer")),x=function(){return o.a.createElement(k,{title:"Hello there!",description:N})},j=(n(81),n(31)),_=n.n(j),M=n(32),C=n.n(M),R=n(33),S=n.n(R),W=n(17),A=n.n(W),O=function(){return o.a.createElement(k,{title:"About me",description:"Some stuff about myself"},o.a.createElement("p",null,"More detailed info about my experience you can find on:"),o.a.createElement("a",{className:"cv-link",href:"https://interviewme.pl/cv/filiphagno2",target:"_blank",rel:"noopener noreferrer"},"Online CV"),o.a.createElement("p",null,"Privately husband of the most amazing women and father of three little princesses"),o.a.createElement("div",{style:{display:"flex",flexWrap:"wrap",height:"65%"}},o.a.createElement(A.a,{className:"Tilt",options:{max:35},style:{height:310,width:510,margin:"5px auto"}},o.a.createElement("div",{className:"Tilt-inner",style:{padding:"3px"}},o.a.createElement("img",{src:S.a,alt:"tripplets",height:"300",width:"500"}))),o.a.createElement(A.a,{className:"Tilt",options:{max:35},style:{height:310,width:510,margin:"0 auto"}},o.a.createElement("img",{src:_.a,alt:"tripplets",height:"300",width:"500"})),o.a.createElement(A.a,{className:"Tilt",options:{max:35},style:{height:310,width:510,margin:"0 auto"}},o.a.createElement("img",{src:C.a,alt:"wedding",height:"300",width:"500"}))),o.a.createElement("p",null,"If only time allows enjoys one of the beloved hobbies:"),o.a.createElement("ul",null,o.a.createElement("li",null,"Electric Guitar"),o.a.createElement("li",null,"Martial Arts: Taekwondo")))},T=n(35),P=(n(83),n(85),function(e){var t=e.item,n=t.title,a=(t.id,t.type),i=t.tech,r=t.description,l=t.link;return o.a.createElement("div",{className:"portfolio-item"},o.a.createElement("h4",{className:"portfolio-item__title"},n),o.a.createElement("p",{className:"portfolio-item__type"},o.a.createElement("strong",null,"Type"),": ",a),o.a.createElement("p",{className:"portfolio-item__description"},o.a.createElement("strong",null,"Description"),": ",r),o.a.createElement("p",{className:"portfolio-item__tech"},o.a.createElement("strong",null,"Tech"),": ",i),l?o.a.createElement("a",{href:l,className:"portfolio-item__link",rel:"noopener noreferrer",target:"_blank"},"Check it out"):o.a.createElement("a",{className:"portfolio-item__link disabled",rel:"noopener noreferrer",href:"/",target:"_blank"},"No can do"))}),L=function(e){var t=e.projects;return o.a.createElement("div",{className:"project-list"},t.map(function(e){return o.a.createElement(P,{key:e.id,item:e})}))},J=n(5),F=n.n(J),H=[{id:F()(),title:"Royal clothing",type:"Website",tech:"React, Sass, GraphQL, Stripe Payments, Firebase",description:"Pet e-commerce app with integrated payments ",link:"https://royal-clth-live.herokuapp.com"},{id:F()(),title:"TES UI",type:"Website",tech:"React, Emotion, Redux, React Router , Javascript",description:"Sorry NDA, project for UBS ",link:""},{id:F()(),title:"UBS app UI (sorry, NDA)",type:"Website",tech:"React, Emotion, Redux, React Router, Javascript ",description:"POC of new version to replace legacy UI -Sorry NDA, can't say more ",link:""},{id:F()(),title:"NY Economy Refrigeration",type:"Mobile App",tech:"React Native, Javascript",description:"Mobile application supporting refrigeration service in NY area ",link:"https://play.google.com/store/apps/details?id=com.nyrefservapp&hl=en"},{id:F()(),title:"GeekNet",type:"Website",tech:"React (with Hooks), Redux, Router, Node(Express), MongoDB, Heroku, Javascript",description:"Pet project - network to connect with developers",link:"https://morning-sands-92642.herokuapp.com/"},{id:F()(),title:"Smart-face-rec-app",type:"Website",tech:"React, Redux, Node(Express), PostgreSQL, Docker Heroku, AWS, Javascript",description:"Pet project - app for smart face recognition in pictures",link:"https://smart-face-rec.herokuapp.com/"},{id:F()(),title:"Personal Site",type:"Website",tech:"React, Redux, Router, Sass github-pages",description:"This simple personal site",link:"/"},{id:F()(),title:"Economy Refrigeration",type:"Website",tech:"Wordpress",description:"Company site for a refrigeration company from New York",link:"http://nyeconomyrefrigeration.com/"},{id:F()(),title:"Modern GCR",type:"Website",tech:"HTML, JS, CSS, JQuery",description:"Company site for a general contracting company from New York",link:"http://moderngcr.com/"}],U=(n(89),function(){var e=Object(a.useState)(""),t=Object(T.a)(e,2),n=t[0],i=t[1];return o.a.createElement(k,{title:"Project portfolio",description:"Basic info about projects"},o.a.createElement("div",{style:{width:"100%",textAlign:"center",padding:"10px"}},o.a.createElement("input",{type:"text",placeholder:"Search by tech, title or type",value:n,onChange:function(e){i(e.target.value)}})),o.a.createElement(L,{projects:H.filter(function(e){return e.type.toLowerCase().includes(n.toLowerCase())||e.tech.toLowerCase().includes(n.toLowerCase())||e.title.toLowerCase().includes(n.toLowerCase())})}))}),I=(n(91),function(){return o.a.createElement(k,{title:"Get in touch!",description:"Contact me any way you feel comfortable"},o.a.createElement("div",{className:"contact-list"},o.a.createElement("div",null,o.a.createElement("i",{className:"fas fa-envelope fa-2x"})," ","fhagno@yahoo.com"),o.a.createElement("div",null,o.a.createElement("i",{className:"fas fa-mobile-alt fa-2x"})," ","tel. +48 501 065 274"),o.a.createElement("div",{className:"socials"},o.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://www.linkedin.com/in/filip-hagno-00936a48"},o.a.createElement("i",{className:"fab fa-linkedin fa-3x"})),o.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://www.facebook.com/filip.hagno.9"},o.a.createElement("i",{className:"fab fa-facebook fa-3x"})))))}),B=n(34),D=n.n(B),G=(n(93),function(){return o.a.createElement("div",{className:"footer"},"All rights reserved \xa9 Filip Hagno 2019")}),Y={particles:{number:{value:70},density:{enable:!0,value_area:600},color:{value:["#312F2F"]},line_linked:{color:"#312F2F",opacity:1}}},Q=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={showMobileMenu:!1},n.mobileMenuToggle=function(){n.setState(function(e){return{showMobileMenu:!e.showMobileMenu}})},n.closeMobileMenuHandler=function(){n.setState({showMobileMenu:!1})},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"app-container"},o.a.createElement(D.a,{className:"particles",params:Y}),o.a.createElement(g,{click:this.mobileMenuToggle,open:this.state.showMobileMenu}),o.a.createElement(v,{open:this.state.showMobileMenu,close:this.closeMobileMenuHandler}),o.a.createElement("main",{className:"content-container"},o.a.createElement(b.a,null,o.a.createElement(w.a,{path:"/aboutMe",exact:!0,component:O}),o.a.createElement(w.a,{path:"/portfolio",exact:!0,component:U}),o.a.createElement(w.a,{path:"/contact",exact:!0,component:I}),o.a.createElement(w.a,{path:"/",component:x}))),o.a.createElement("footer",null,o.a.createElement(G,null)))}}]),t}(a.Component),V=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function z(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var $=n(97),q=o.a.createElement($.a,{basename:""},o.a.createElement(Q,null));r.a.render(q,document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");V?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):z(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):z(t,e)})}}()}},[[36,2,1]]]);
//# sourceMappingURL=main.33f93d6e.chunk.js.map