!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var i=function(){var e=document.querySelector(".header-contacts__phone-number-accord"),t=e.querySelector(".header-contacts__phone-number"),n=document.querySelector(".header-contacts__arrow"),i=document.querySelector(".menu__icon"),o=document.querySelector(".popup-dialog-menu"),r=document.querySelectorAll(".block-sections"),s=document.querySelector(".popup-repair-types");document.body.addEventListener("click",(function(l){var a=l.target;a.closest(".header-contacts__arrow")&&(n.classList.toggle("active"),n.classList.contains("active")?(t.style.opacity="1",e.style.top="24px",n.style.transform="rotateX(180deg)"):(t.style.opacity="0",e.style.top="0px",n.style.transform="rotateX(0deg)")),a===i&&(o.style.transform="translate3d(0,0,0)"),(a.closest(".popup-menu-nav__item")||a.closest(".link-list-menu")||a.closest(".button-footer"))&&(l.preventDefault(),o.style.transform="translate3d(645px,0,0)"),r.forEach((function(e){var t;"#".concat(e.id)===a.hash&&(t=e,window.scroll({left:0,top:t.offsetTop,behavior:"smooth"}))})),a.closest(".link-list")&&(l.preventDefault(),s.style.visibility="visible")}))};var o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"+7 (___) ___-__-__";function n(e){var n=e.keyCode,i=t,o=i.replace(/\D/g,""),r=this.value.replace(/\D/g,""),s=0,l=i.replace(/[_\d]/g,(function(e){return s<r.length?r.charAt(s++)||o.charAt(s):e}));-1!=(s=l.indexOf("_"))&&(l=l.slice(0,s));var a=i.substr(0,this.value.length).replace(/_+/g,(function(e){return"\\d{1,"+e.length+"}"})).replace(/[+()]/g,"\\$&");(!(a=new RegExp("^"+a+"$")).test(this.value)||this.value.length<5||n>47&&n<58)&&(this.value=l),"blur"==e.type&&this.value.length<5&&(this.value="")}e.addEventListener("input",n),e.addEventListener("focus",n),e.addEventListener("blur",n)},r=function(){var e=document.querySelectorAll("[name='phone']"),t=document.querySelectorAll("form"),n=document.querySelectorAll(".link-privacy"),i=document.querySelector(".popup-privacy"),r=i.querySelector(".close");e.forEach((function(e){o(e)}));n.forEach((function(e){e.addEventListener("click",(function(){i.style.visibility="visible"}))})),r.addEventListener("click",(function(){i.style.visibility="hidden"})),t.forEach((function(e){e.addEventListener("submit",(function(t){if(t.preventDefault(),t.target.querySelector("[type='checkbox']").checked){var n=new FormData(e),i={};n.forEach((function(e,t){i[t]=e})),function(e){return fetch("server.php",{method:"POST",headers:{"Content-Type":"aplication/json"},body:JSON.stringify(e)})}(i).then((function(e){if(200!==e.status)throw new Error("status network not 200")})).catch((function(e){console.log(e)}))}}))}))};function s(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||a(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=a(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,o=function(){};return{s:o,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,s=!0,l=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return s=e.done,e},e:function(e){l=!0,r=e},f:function(){try{s||null==n.return||n.return()}finally{if(l)throw r}}}}function a(e,t){if(e){if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function d(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var p=function(){function e(t){var n=t.main,i=t.wrap,o=t.next,r=t.prev,s=t.idStyle,l=t.deletes,a=t.removes,c=void 0!==a&&a,d=t.infinity,p=void 0!==d&&d,u=t.position,v=void 0===u?0:u,h=t.slidesToShow,f=void 0===h?3:h,m=t.indexx,y=void 0===m?1:m,g=t.responsive,_=void 0===g?[]:g;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n&&i||console.warn('slider-carusel: Необходимо 2 свойства, "main" и "wrap"'),this.main=document.querySelector(n),this.wrap=document.querySelector(i),this.slides=document.querySelector(i).children,this.next=document.querySelector(o),this.prev=document.querySelector(r),this.slidesToShow=f,this.options={idStyle:s,position:v,deletes:l,infinity:p,removes:c,indexx:y,maxPosition:this.slides.length-this.slidesToShow,widthSlide:Math.floor(100/this.slidesToShow)},this.responsive=_}var t,n,i;return t=e,(n=[{key:"init",value:function(){this.addGloClass(),this.addStyle(),this.prev&&this.next||this.addArrow(),this.constolSlider(),this.responsive&&this.responseInit()}},{key:"addGloClass",value:function(){this.main.classList.add("glo-slider-".concat(this.options.indexx)),this.wrap.classList.add("glo-slider__wrap-".concat(this.options.indexx));var e,t=l(this.slides);try{for(t.s();!(e=t.n()).done;)e.value.classList.add("glo-slider__item-".concat(this.options.indexx))}catch(e){t.e(e)}finally{t.f()}}},{key:"removeClasses",value:function(){if(this.options.removes){console.log(222),this.main.classList.remove("glo-slider-".concat(this.options.indexx)),this.wrap.classList.remove("glo-slider__wrap-".concat(this.options.indexx));var e,t=l(this.slides);try{for(t.s();!(e=t.n()).done;)e.value.classList.remove("glo-slider__item-".concat(this.options.indexx))}catch(e){t.e(e)}finally{t.f()}}}},{key:"addStyle",value:function(){var e=document.getElementById(this.options.idStyle);e||((e=document.createElement("style")).id=this.options.idStyle),e.textContent="\n    .glo-slider-".concat(this.options.indexx,"{\n      overflow: hidden !important;\n    }\n    .glo-slider__wrap-").concat(this.options.indexx,"{\n      display: flex !important;\n      transition: transform 0.5s !important;\n      align-items: flex-start !important;\n      will-change: transform !important;\n      flex-wrap: nowrap !important;\n    }\n    .glo-slider__item-").concat(this.options.indexx,"{\n      display: flex !important;\n      align-items: center !important;\n      justify-content: center;\n      flex: 0 0 ").concat(this.options.widthSlide,"% !important;\n\n    }\n    "),document.head.appendChild(e)}},{key:"constolSlider",value:function(){this.prev.addEventListener("click",this.prevSlider.bind(this)),this.next.addEventListener("click",this.nextSlider.bind(this))}},{key:"prevSlider",value:function(){(this.options.infinity||this.options.position>0)&&(--this.options.position,this.options.position<0&&(this.options.position=this.options.maxPosition),this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.widthSlide,"%)"))}},{key:"nextSlider",value:function(){(this.options.infinity||this.options.position<this.options.maxPosition)&&(++this.options.position,this.options.position>this.options.maxPosition&&(this.options.position=0),this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.widthSlide,"%)"))}},{key:"addArrow",value:function(){this.prev=document.createElement("button"),this.next=document.createElement("button"),this.prev.className="glo-slider__prev",this.next.className="glo-slider__next",this.main.appendChild(this.prev),this.main.appendChild(this.next);var e=document.createElement("style");e.textContent="\n      .glo-slider__prev,\n      .glo-slider__next{\n        margin: 0 10px;\n        border: 20px solid transparent;\n        background: transparent;\n      }\n      .glo-slider__next {\n        border-left-color: #19b5fe\n      }\n      .glo-slider__prev {\n        border-right-color: #19b5fe\n      }\n      .glo-slider__prev:hover,\n      .glo-slider__next:hover,\n      .glo-slider__prev:focus,\n      .glo-slider__next:focus{\n        background: transparent;\n        outline: transparent;\n      }\n    ",document.head.appendChild(e)}},{key:"responseInit",value:function(){var e=this,t=this.slidesToShow,n=this.responsive.map((function(e){return e.breakpoint})),i=Math.max.apply(Math,s(n)),o=function(){var o=document.documentElement.clientWidth;if(o<i)for(var r=0;r<n.length;r++)o<n[r]&&(e.slidesToShow=e.responsive[r].slideToShow,e.options.widthSlide=Math.floor(100/e.slidesToShow),e.options.maxPosition=e.slides.length-e.slidesToShow,e.addStyle());else e.slidesToShow=t,e.options.widthSlide=Math.floor(100/e.slidesToShow),e.addStyle()};o(),window.addEventListener("resize",(function(){o(),innerWidth>=e.options.deletes&&e.removeClasses()}))}}])&&d(t.prototype,n),i&&d(t,i),e}(),u=function(){document.querySelectorAll(".formula-item__icon").forEach((function(e){e.addEventListener("mouseover",(function(){var t=e.querySelector(".formula-item-popup"),n=e.nextElementSibling.clientHeight;t.getBoundingClientRect().top<0?(e.parentElement.style.zIndex="2",e.style.zIndex="2",t.style.visibility="visible",t.style.opacity="1",t.style.top="calc(110% + ".concat(n,"px)"),t.classList.add("rotate-popup")):(e.parentElement.style.opacity="1",t.style.visibility="visible",t.style.opacity="1",e.parentElement.style.zIndex="1")})),e.addEventListener("mouseout",(function(){var t=e.querySelector(".formula-item-popup");t.style.visibility="hidden",t.style.opacity="0",t.style.top="",t.classList.remove("rotate-popup"),e.parentElement.style.zIndex="1",e.parentElement.classList.contains("formula-slider__slide")&&(e.parentElement.style.opacity="0.4")}))}));var e=new p({main:".formula-slider-wrap",wrap:".formula-slider",slidesToShow:4,next:".slider-arrow_right-formula.slider-arrow_right",prev:".slider-arrow_left-formula.slider-arrow_left",infinity:!0,idStyle:"sliderCarousel-style",deletes:1024,indexx:1,responsive:[{breakpoint:1024,slideToShow:3},{breakpoint:768,slideToShow:2},{breakpoint:576,slideToShow:1}]});innerWidth>=1025?window.addEventListener("resize",(function(){innerWidth<1025&&e.init()})):e.init()};function v(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var h=function(){function e(t){var n=t.main,i=t.wrap,o=t.next,r=t.prev,s=t.removes,l=void 0!==s&&s,a=t.position,c=void 0===a?0:a,d=t.width,p=void 0===d?0:d,u=t.padding,v=void 0===u?0:u,h=t.addap,f=void 0===h?0:h;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n&&i||console.warn('slider-carusel: Необходимо 2 свойства, "main" и "wrap"'),this.main=document.querySelector(n),this.wrap=document.querySelector(i),this.slides=document.querySelector(i).children,this.next=document.querySelector(o),this.prev=document.querySelector(r),this.options={position:c,width:p,padding:v,removes:l,addap:f}}var t,n,i;return t=e,(n=[{key:"init",value:function(){this.addGloClass(),this.render(),console.dir(this.wrap),this.prev&&this.next,this.constolSlider(),this.responsive&&this.responseInit()}},{key:"render",value:function(){var e=this;window.addEventListener("resize",(function(){e.options.width=0,e.options.position=0,e.wrap.style.transform="translateX(".concat(e.options.width,"px)"),e.options.removes&&(e.prev.style.display="none",e.next.style.display="flex")}))}},{key:"addGloClass",value:function(){this.main.classList.add("glo-slider-tab"),this.wrap.classList.add("glo-slider__wrap-tab")}},{key:"constolSlider",value:function(){console.log(this.prev),console.log(this.next),this.prev.addEventListener("click",this.prevSlider.bind(this)),this.next.addEventListener("click",this.nextSlider.bind(this))}},{key:"prevSlider",value:function(){this.options.position--,this.options.position<0?this.options.position=0:(this.options.width+=this.slides[this.options.position].offsetWidth+this.options.padding,this.wrap.style.transform="translateX(".concat(this.options.width,"px)"),this.options.position<1&&this.options.removes&&(this.prev.style.display="none",this.next.style.display="flex"))}},{key:"nextSlider",value:function(){var e=(this.wrap.scrollWidth-this.main.offsetWidth)/this.slides[this.slides.length-1].offsetWidth;this.options.position<Math.round(e)-this.options.addap&&(this.options.width-=this.slides[this.options.position].offsetWidth+this.options.padding,console.log(this.options.width),this.wrap.style.transform="translateX(".concat(this.options.width,"px)"),this.options.position++),console.log(this.options.position+Math.round(e)),console.log(this.slides.length),this.options.removes&&this.options.position===Math.round(e)-this.options.addap&&(this.prev.style.display="flex",this.next.style.display="none")}}])&&v(t.prototype,n),i&&v(t,i),e}(),f=function(){var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=document.querySelectorAll(".types-repair".concat(e," > .repair-types-slider__slide")),n=document.getElementById("repair-types-arrow_right"),i=document.getElementById("repair-types-arrow_left"),o=document.querySelector(".slider-counter-content__current"),r=document.querySelector(".slider-counter-content__total");t[0].classList.contains("item-active-slider")||t[0].classList.add("item-active-slider");for(var s=1;s<t.length;s++)t[s].classList.remove("item-active-slider");var l=0;r.textContent=t.length;var a=function(){o.textContent=l+1};a();var c=function(e,t,n){e[t].classList.remove(n)},d=function(e,t,n){e[t].classList.add(n)};n.addEventListener("click",(function(){l<t.length-1&&(l++,d(t,l,"item-active-slider")),a()})),i.addEventListener("click",(function(){l>0&&(c(t,l,"item-active-slider"),l--),a()}))};e();!function(){document.querySelector(".wrapper_middle");var t=document.querySelectorAll(".repair-types-nav__item"),n=document.querySelectorAll(".types-repairAll");console.log(t);document.body.addEventListener("click",(function(i){var o=i.target;(o=o.closest(".repair-types-nav__item"))&&t.forEach((function(i,r){if(i===o){!function(e){for(var i=0;i<n.length;i++)e===i?(t[i].classList.add("active"),n[i].classList.remove("d-none")):(n[i].classList.add("d-none"),t[i].classList.remove("active"))}(r),e(r+1)}}))}))}();var t=new h({main:".nav-designs",wrap:".nav-list-repair",next:"#nav-arrow-repair-right_base",prev:"#nav-arrow-repair-left_base",removes:!1,width:0,padding:20,position:0,addap:0});innerWidth>=1024?window.addEventListener("resize",(function(){innerWidth<=1025&&t.init()})):t.init()},m=function(){var e=function(){var e=document.querySelectorAll(".portfolio-slider-mobile > .portfolio-slider__slide-frame"),t=document.getElementById("portfolio-arrow-mobile_right"),n=document.getElementById("portfolio-arrow-mobile_left"),i=document.querySelector("#portfolio-counter > .slider-counter-content > .slider-counter-content__current"),o=document.querySelector("#portfolio-counter > .slider-counter-content > .slider-counter-content__total");console.log(o),e[0].classList.contains("item-active-slider")||e[0].classList.add("item-active-slider");for(var r=1;r<e.length;r++)e[r].classList.remove("item-active-slider");var s=0;o.textContent=e.length;var l=function(){i.textContent=s+1};l();t.addEventListener("click",(function(){var t;s<e.length-1&&(s++,t="item-active-slider",e[s].classList.add(t)),l()})),n.addEventListener("click",(function(){var t;s>0&&(t="item-active-slider",e[s].classList.remove(t),s--),l()}))};e();var t=new h({main:".portfolio-slider__wrapper",wrap:".portfolio-slider",next:"#portfolio-arrow_right",prev:"#portfolio-arrow_left",removes:!0,width:0,position:0,padding:0,addap:0});innerWidth>575?(t.init(),window.addEventListener("resize",(function(){innerWidth<=575&&e()}))):e();document.getElementById("portfolio");var n=document.querySelector(".popup-portfolio");document.body.addEventListener("click",(function(e){var t=e.target;t.closest(".portfolio-slider__slide-frame")&&(n.style.visibility="visible"),(t.closest(".popup-portfolio-slider-wrap > .close")||t.closest(".popup-portfolio > .close"))&&(n.style.visibility="hidden")}));!function(){var e=document.querySelectorAll(".popup-portfolio-slider > .popup-portfolio-slider__slide"),t=document.getElementById("popup_portfolio_right"),n=document.getElementById("popup_portfolio_left"),i=document.querySelector("#popup-portfolio-counter> .slider-counter-content > .slider-counter-content__current"),o=document.querySelector("#popup-portfolio-counter> .slider-counter-content > .slider-counter-content__total"),r=document.querySelectorAll(".popup-portfolio-text");console.log(o),e[0].classList.contains("item-active-slider")||(e[0].classList.add("item-active-slider"),r[0].style.display="block");for(var s=1;s<e.length;s++)e[s].classList.remove("item-active-slider"),r[s].style.display="none";var l=0,a=0;o.textContent=e.length;var c=function(){i.textContent=l+1};c();t.addEventListener("click",(function(){var t,n;l<e.length-1&&(l++,t="item-active-slider",n=r,e[l].classList.add(t),n[a].style.display="none",++a<r.length?n[a].style.display="block":a=r.length-1),c()})),n.addEventListener("click",(function(){var t,n;l>0&&(t="item-active-slider",n=r,e[l].classList.remove(t),n[a].style.display="none",--a>=0?n[a].style.display="block":a=0,l--),c()}))}(),console.log()},y=function(){var e=document.querySelector(".popup-design");new h({main:".nav-designs.nav-popup",wrap:"#nav-list-popup-designs",next:"#nav-arrow-popup-designs_right",prev:"#nav-arrow-popup-designs_left",removes:!1,width:0,position:0,padding:17,addap:0}).init();!function(){document.querySelector(".wrapper_middle");var n=document.querySelectorAll("#designs-list > button"),i=document.querySelectorAll(".design-tab-all");document.body.addEventListener("click",(function(o){var r=o.target;r.closest(".link-list-designs")&&(e.style.visibility="visible"),r.closest(".popup-design .close")&&(e.style.visibility="hidden");var s=r.closest("#designs-list > button");s&&n.forEach((function(e,o){if(e===s){!function(e){for(var t=0;t<i.length;t++)e===t?(n[t].classList.add("active"),i[t].classList.remove("d-none")):(i[t].classList.add("d-none"),n[t].classList.remove("active"))}(o),t(o+1)}}))}))}();var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=document.querySelectorAll(".designs-slider__style".concat(e," > .designs-slider__style-slide")),n=document.getElementById("design_right"),i=document.getElementById("design_left"),o=document.querySelector("#designs-counter > .slider-counter-content > .slider-counter-content__current"),r=document.querySelector("#designs-counter> .slider-counter-content > .slider-counter-content__total"),s=document.querySelectorAll("#designs .preview-block");s.forEach((function(e){e.classList.remove("visible")}));var l=s[e-1],a=l.querySelectorAll(".preview-block__item");l.classList.add("visible"),t[0].classList.contains("item-active-slider")||t[0].classList.add("item-active-slider");for(var c=1;c<t.length;c++)t[c].classList.remove("item-active-slider");var d=0;r.textContent=t.length;var p=function(){o.textContent=d+1};p();var u=function(e,t,n){e[t].classList.remove(n)},v=function(e,t,n){e[t].classList.add(n)};a.forEach((function(e,n,i){e.addEventListener("click",(function(){i.forEach((function(e){e.querySelector("div").classList.remove("preview_active")})),e.querySelector("div").classList.add("preview_active"),t.forEach((function(e){e.classList.remove("item-active-slider")})),t[n].classList.add("item-active-slider")}))})),n.addEventListener("click",(function(){d<t.length-1&&(d++,v(t,d,"item-active-slider")),p()})),i.addEventListener("click",(function(){d>0&&(u(t,d,"item-active-slider"),d--),p()})),window.addEventListener("resize",(function(){d=0,t.forEach((function(e){e.classList.remove("item-active-slider")})),t[0].classList.add("item-active-slider"),p()}))};t();!function(){document.querySelector(".wrapper_middle");var e=document.querySelectorAll("#nav-list-popup-designs > button"),t=document.querySelectorAll(".popup-design-all"),i=document.querySelectorAll(".popup-design-text"),o=document.querySelector("#popup-designs-counter> .slider-counter-content > .slider-counter-content__current"),r=document.querySelector("#popup-designs-counter> .slider-counter-content > .slider-counter-content__total");document.body.addEventListener("click",(function(s){var l=s.target.closest("#nav-list-popup-designs > button");l&&e.forEach((function(s,a){if(s===l){!function(n){for(var s=0;s<t.length;s++)n===s?(e[s].classList.add("active"),t[s].classList.remove("d-none"),i[s].classList.add("visible-content-block"),r.textContent=t[s].children.length,o.textContent=1):(t[s].classList.add("d-none"),e[s].classList.remove("active"),i[s].classList.remove("visible-content-block"))}(a),n(a+1)}}))}))}();new h({main:".nav-designs",wrap:"#designs-list",next:"#nav-arrow-designs_right",prev:"#nav-arrow-designs_left",removes:!1,width:0,position:0,padding:17,addap:0});var n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=document.querySelectorAll(".popup-designs-slider__style".concat(e," > .popup-design-slider__style-slide")),n=document.getElementById("popup_design_right"),i=document.getElementById("popup_design_left"),o=document.querySelector("#popup-designs-counter> .slider-counter-content > .slider-counter-content__current"),r=document.querySelector("#popup-designs-counter> .slider-counter-content > .slider-counter-content__total");document.querySelectorAll("#nav-list-popup-designs > button");t[0].classList.contains("item-active-slider")||t[0].classList.add("item-active-slider");for(var s=1;s<t.length;s++)t[s].classList.remove("item-active-slider");var l=0;r.textContent=t.length;var a=function(){o.textContent=l+1};a();var c=function(e,t,n){e[t].classList.remove(n)},d=function(e,t,n){e[t].classList.add(n)};n.addEventListener("click",(function(){l<t.length-1&&(l++,d(t,l,"item-active-slider")),a()})),i.addEventListener("click",(function(){l>0&&(c(t,l,"item-active-slider"),l--),a()}))};n()},g=function(){var e=document.querySelector(".popup-transparency"),t=new p({main:".transparency-slider-wrap",wrap:".transparency-slider",slidesToShow:1,next:"#transparency-arrow_right",prev:"#transparency-arrow_left",infinity:!1,removes:!0,idStyle:"sliderCarousel-styles",deletes:1091,indexx:2,responsive:[{breakpoint:1091,slideToShow:1}]});innerWidth<1091&&t.init(),document.body.addEventListener("click",(function(t){var n=t.target;n.closest(".transparency-item__img")&&(e.style.visibility="visible"),n.closest(".popup-transparency .close")&&(e.style.visibility="hidden")})),window.addEventListener("resize",(function(e){innerWidth<1091&&t.init()}));!function(){var e=document.querySelectorAll(".popup-transparency-slider__slide"),t=document.getElementById("transparency_right"),n=document.getElementById("transparency_left"),i=document.querySelector("#transparency-popup-counter> .slider-counter-content > .slider-counter-content__current"),o=document.querySelector("#transparency-popup-counter> .slider-counter-content > .slider-counter-content__total");e[0].classList.contains("item-active-slider")||e[0].classList.add("item-active-slider");for(var r=1;r<e.length;r++)e[r].classList.remove("item-active-slider");var s=0;o.textContent=e.length;var l=function(){i.textContent=s+1};l();var a=function(e,t,n){e[t].classList.remove(n)},c=function(e,t,n){e[t].classList.add(n)};t.addEventListener("click",(function(){s<e.length-1&&(s++,c(e,s,"item-active-slider")),l()})),n.addEventListener("click",(function(){s>0&&(a(e,s,"item-active-slider"),s--),l()}))}()},_=function(){new p({main:".reviews-slider-wrap-wrap",wrap:".reviews-slider",slidesToShow:1,next:"#reviews-arrow_right",prev:"#reviews-arrow_left",infinity:!0,idStyle:"sliderCarousel-styless",indexx:3}).init()},w=function(){new p({main:".partners > .wrapper",wrap:".partners-slider",slidesToShow:3,next:"#partners-arrow_right",prev:"#partners-arrow_left",infinity:!0,idStyle:"sliderCarousel-partner",indexx:4,responsive:[{breakpoint:1024,slideToShow:3},{breakpoint:768,slideToShow:2},{breakpoint:576,slideToShow:1}]}).init()};i(),r(),u(),f(),m(),g(),y(),_(),w()}]);