(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{34:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var r=n(0),l=n.n(r),a=n(8),i=(n(34),function(e){var t=e.items,n=e.currentSlide,r=e.setSlide,i=e.sliderLength,c=function(e){return"slider__cell ".concat(n===e?"slider__cell--active":"")},o=n===i-1?i-2:0===n?1:n;return l.a.createElement("div",{className:"slider"},l.a.createElement("div",{className:"slider__area",style:{transform:"translateX(calc(".concat(-100/3*o- -100/3,"%))")}},t.map(function(e,t){var n=e.src;return l.a.createElement("div",{key:t,onClick:function(){return r(t)},className:c(t)},l.a.createElement("div",{className:"slider__cell-inner"},l.a.createElement(a.a,{src:n})))})))}),c=n(2),o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5e3,n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,a=Object(r.useState)(l),i=Object(c.a)(a,2),o=i[0],s=i[1],u=Object(r.useState)(!0),d=Object(c.a)(u,2),m=d[0],f=d[1];Object(r.useEffect)(function(){if(n){var r=setInterval(function(){m?(o<e-1&&s(o+1),o===e-1&&(f(!m),s(e-2))):(o&&s(o-1),0===o&&(f(!m),s(1)))},t);return function(){return clearInterval(r)}}},[o,e,t,n,m]);return{currentSlide:o,nextSlide:function(){return o<e-1&&s(o+1)},prevSlide:function(){return o&&s(o-1)},setSlide:function(e){return s(e)},sliderLength:e}};t.default=function(e){var t=e.portfolio,n=o(t.length),r=n.currentSlide,a=n.nextSlide,c=n.prevSlide,s=n.setSlide,u=n.sliderLength;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"slider__container"},l.a.createElement(i,{currentSlide:r,nextSlide:a,prevSlide:c,setSlide:s,sliderLength:u,items:t})),l.a.createElement("div",{className:"portfolio__button-contaioner"},l.a.createElement("button",{className:"portfolio__button",onClick:c},"prev"),l.a.createElement("button",{className:"portfolio__button",onClick:a},"next")),l.a.createElement("div",{className:"portfolio__description"},l.a.createElement("h3",{className:"title title--small"},t[r].title),l.a.createElement("a",{className:"portfolio__link",rel:"noopener noreferrer",href:t[r].link,target:"_blank"},"Link to gh-pages"),l.a.createElement("div",null,t[r].steck.map(function(e,t){return l.a.createElement("span",{className:"portfolio__skill",key:t},e)}),l.a.createElement("br",null))))}}}]);
//# sourceMappingURL=3.db6aaf6e.chunk.js.map