(this.webpackJsonpbinge=this.webpackJsonpbinge||[]).push([[0],[,function(e,t,a){e.exports={display_box:"display_display_box__32Q9g",title:"display_title__qlsGS",display_img:"display_display_img__2QX7i",display_info:"display_display_info__2dQMx",image:"display_image__96p5D",final:"display_final__VD2Na"}},function(e,t,a){e.exports={display_box:"search_display_box__PXnR0",button_set:"search_button_set__1Q3Rk",button:"search_button__9Zq5e",content:"search_content__2YM_o",top_text:"search_top_text__tDHiE",reccomendation:"search_reccomendation__2aH13",movie:"search_movie__24HMQ"}},,,function(e,t,a){e.exports={container_pop:"popup_container_pop__2rhuz",button:"popup_button__3CgzF"}},,,,,,,function(e,t,a){e.exports=a(21)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/bg.fb93d9a9.jpg"},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(9),s=a.n(c),i=(a(17),a(7)),l=a.n(i),r=a(11),m=a(10),u=a(3),p=(a(19),a(1)),_=a.n(p),d=function(e){return o.a.createElement("div",{className:_.a.display_box},o.a.createElement("div",{className:_.a.display_img},o.a.createElement("img",{className:_.a.image,src:e.movies&&e.movies.image&&e.movies.image.medium,alt:"film poster"})),o.a.createElement("div",{className:_.a.display_info},o.a.createElement("p",{className:_.a.title},o.a.createElement("p",{className:_.a.final},e.text),e.movies.name),o.a.createElement("p",null,o.a.createElement("span",{className:_.a.span},"Language "),": ",e.movies.language),o.a.createElement("p",null,o.a.createElement("span",{className:_.a.span},"Genere "),":"," ",e.movies&&e.movies.genres&&e.movies.genres.join(", ")),o.a.createElement("p",null,o.a.createElement("span",{className:_.a.span},"Status "),": ",e.movies.status),o.a.createElement("p",null,o.a.createElement("span",{className:_.a.span},"Runtime "),": ",e.movies.runtime),o.a.createElement("p",null,o.a.createElement("span",{className:_.a.span},"Rating "),":"," ",e.movies&&e.movies.rating&&e.movies.rating.average),o.a.createElement("p",null,o.a.createElement("span",{className:_.a.span},"Official Site "),":"," ",o.a.createElement("a",{href:e.movies.officialSite},null===e.movies.officialSite?o.a.createElement("em",null,"Not Available"):e.movies.officialSite))))},b=a(2),f=a.n(b),E=function(e){return o.a.createElement("div",{className:f.a.display_box},o.a.createElement("div",{className:f.a.content},o.a.createElement("div",{className:f.a.top_text},"Tell Me what to watch"),e.selectMovie.map((function(e,t){return o.a.createElement("div",{className:f.a.reccomendation,key:t},"Here is your option:",o.a.createElement("span",{className:f.a.movie},e.name))}))),o.a.createElement("div",{className:f.a.button_set},o.a.createElement("button",{className:f.a.button,onClick:e.final},"YES \ud83d\udc4d"),o.a.createElement("button",{className:f.a.button,onClick:e.onclick},"NO \ud83d\udc4e")))},v=a(5),h=a.n(v),g=function(e){return o.a.createElement("div",{className:h.a.container_pop},o.a.createElement("p",null,o.a.createElement("strong",null,"Binge")," is a TV-series reccomendation application that gives you options that you can watch along with details related to those series.",o.a.createElement("br",null)," ",o.a.createElement("br",null),"The chatbox gives you the options of movies that you can select from.",o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("button",{className:h.a.button},"NO\ud83d\udc4e")," buttons are placed to make selections. Upon selection of this button, the options will keep coming on the chat box while the details are displayed on information box on the right.",o.a.createElement("br",null),o.a.createElement("br",null),"Select the button ",o.a.createElement("button",{className:h.a.button},"YES\ud83d\udc4d")," when you make up your mind regarding the series."),o.a.createElement("button",{className:h.a.button,value:e.popup,onClick:e.onclick},"Got It!"))},y=(a(20),function(){var e=Object(n.useState)({}),t=Object(u.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(!0),i=Object(u.a)(s,2),p=i[0],_=i[1],b=Object(n.useState)(" "),f=Object(u.a)(b,2),v=f[0],h=f[1],y=Object(n.useState)([]),N=Object(u.a)(y,2),x=N[0],w=N[1],k=Object(n.useState)(!0),O=Object(u.a)(k,2),j=O[0],S=O[1],M=(x.lastIndexOf(),function(){var e=Object(m.a)(l.a.mark((function e(){var t,a,n,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.tvmaze.com/shows");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,n=Math.floor(Math.random()*a.length),c(a[n]),o=[].concat(Object(r.a)(x),[a[n]]),w(o);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}());Object(n.useEffect)((function(){p&&M()}),[p]);var H=function(){p&&_(a)},Q=function(){p&&(_(!1),h("Great! You Have decided to watch : "))},C=function(){S(!1)},G=function(e){return e.popup?o.a.createElement(g,{onclick:C,popups:j}):o.a.createElement(o.a.Fragment,null,o.a.createElement(d,{movies:a,text:v}),o.a.createElement(E,{movies:a,onclick:H,final:Q,selectMovie:x,disagree:p}))};return o.a.createElement("div",{className:"container"},o.a.createElement(G,{popup:j}))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[12,1,2]]]);
//# sourceMappingURL=main.83175d5c.chunk.js.map