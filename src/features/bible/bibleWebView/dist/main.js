!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=function(){},o={},i=[],a=[];function s(e,t){var n,s,c,l,u=a;for(l=arguments.length;l-- >2;)i.push(arguments[l]);for(t&&null!=t.children&&(i.length||i.push(t.children),delete t.children);i.length;)if((s=i.pop())&&void 0!==s.pop)for(l=s.length;l--;)i.push(s[l]);else"boolean"==typeof s&&(s=null),(c="function"!=typeof e)&&(null==s?s="":"number"==typeof s?s=String(s):"string"!=typeof s&&(c=!1)),c&&n?u[u.length-1]+=s:u===a?u=[s]:u.push(s),n=c;var f=new r;return f.nodeName=e,f.children=u,f.attributes=null==t?void 0:t,f.key=null==t?void 0:t.key,void 0!==o.vnode&&o.vnode(f),f}function c(e,t){for(var n in t)e[n]=t[n];return e}function l(e,t){null!=e&&("function"==typeof e?e(t):e.current=t)}var u="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout;var f=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,p=[];function d(e){!e._dirty&&(e._dirty=!0)&&1==p.push(e)&&(o.debounceRendering||u)(v)}function v(){for(var e;e=p.pop();)e._dirty&&B(e)}function h(e,t){return e.normalizedNodeName===t||e.nodeName.toLowerCase()===t.toLowerCase()}function y(e){var t=c({},e.attributes);t.children=e.children;var n=e.nodeName.defaultProps;if(void 0!==n)for(var r in n)void 0===t[r]&&(t[r]=n[r]);return t}function g(e){var t=e.parentNode;t&&t.removeChild(e)}function m(e,t,n,r,o){if("className"===t&&(t="class"),"key"===t);else if("ref"===t)l(n,null),l(r,e);else if("class"!==t||o)if("style"===t){if(r&&"string"!=typeof r&&"string"!=typeof n||(e.style.cssText=r||""),r&&"object"==typeof r){if("string"!=typeof n)for(var i in n)i in r||(e.style[i]="");for(var i in r)e.style[i]="number"==typeof r[i]&&!1===f.test(i)?r[i]+"px":r[i]}}else if("dangerouslySetInnerHTML"===t)r&&(e.innerHTML=r.__html||"");else if("o"==t[0]&&"n"==t[1]){var a=t!==(t=t.replace(/Capture$/,""));t=t.toLowerCase().substring(2),r?n||e.addEventListener(t,b,a):e.removeEventListener(t,b,a),(e._listeners||(e._listeners={}))[t]=r}else if("list"!==t&&"type"!==t&&!o&&t in e){try{e[t]=null==r?"":r}catch(e){}null!=r&&!1!==r||"spellcheck"==t||e.removeAttribute(t)}else{var s=o&&t!==(t=t.replace(/^xlink:?/,""));null==r||!1===r?s?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):"function"!=typeof r&&(s?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),r):e.setAttribute(t,r))}else e.className=r||""}function b(e){return this._listeners[e.type](o.event&&o.event(e)||e)}var _=[],S=0,C=!1,x=!1;function w(){for(var e;e=_.shift();)o.afterMount&&o.afterMount(e),e.componentDidMount&&e.componentDidMount()}function T(e,t,n,r,o,i){S++||(C=null!=o&&void 0!==o.ownerSVGElement,x=null!=e&&!("__preactattr_"in e));var a=N(e,t,n,r,i);return o&&a.parentNode!==o&&o.appendChild(a),--S||(x=!1,i||w()),a}function N(e,t,n,r,o){var i=e,a=C;if(null!=t&&"boolean"!=typeof t||(t=""),"string"==typeof t||"number"==typeof t)return e&&void 0!==e.splitText&&e.parentNode&&(!e._component||o)?e.nodeValue!=t&&(e.nodeValue=t):(i=document.createTextNode(t),e&&(e.parentNode&&e.parentNode.replaceChild(i,e),k(e,!0))),i.__preactattr_=!0,i;var s,c,l=t.nodeName;if("function"==typeof l)return function(e,t,n,r){var o=e&&e._component,i=o,a=e,s=o&&e._componentConstructor===t.nodeName,c=s,l=y(t);for(;o&&!c&&(o=o._parentComponent);)c=o.constructor===t.nodeName;o&&c&&(!r||o._component)?(j(o,l,3,n,r),e=o.base):(i&&!s&&(A(i),e=a=null),o=V(t.nodeName,l,n),e&&!o.nextBase&&(o.nextBase=e,a=null),j(o,l,1,n,r),e=o.base,a&&e!==a&&(a._component=null,k(a,!1)));return e}(e,t,n,r);if(C="svg"===l||"foreignObject"!==l&&C,l=String(l),(!e||!h(e,l))&&(s=l,(c=C?document.createElementNS("http://www.w3.org/2000/svg",s):document.createElement(s)).normalizedNodeName=s,i=c,e)){for(;e.firstChild;)i.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild(i,e),k(e,!0)}var u=i.firstChild,f=i.__preactattr_,p=t.children;if(null==f){f=i.__preactattr_={};for(var d=i.attributes,v=d.length;v--;)f[d[v].name]=d[v].value}return!x&&p&&1===p.length&&"string"==typeof p[0]&&null!=u&&void 0!==u.splitText&&null==u.nextSibling?u.nodeValue!=p[0]&&(u.nodeValue=p[0]):(p&&p.length||null!=u)&&function(e,t,n,r,o){var i,a,s,c,l,u=e.childNodes,f=[],p={},d=0,v=0,y=u.length,m=0,b=t?t.length:0;if(0!==y)for(var _=0;_<y;_++){var S=u[_],C=S.__preactattr_,x=b&&C?S._component?S._component.__key:C.key:null;null!=x?(d++,p[x]=S):(C||(void 0!==S.splitText?!o||S.nodeValue.trim():o))&&(f[m++]=S)}if(0!==b)for(var _=0;_<b;_++){c=t[_],l=null;var x=c.key;if(null!=x)d&&void 0!==p[x]&&(l=p[x],p[x]=void 0,d--);else if(v<m)for(i=v;i<m;i++)if(void 0!==f[i]&&(w=a=f[i],E=o,"string"==typeof(T=c)||"number"==typeof T?void 0!==w.splitText:"string"==typeof T.nodeName?!w._componentConstructor&&h(w,T.nodeName):E||w._componentConstructor===T.nodeName)){l=a,f[i]=void 0,i===m-1&&m--,i===v&&v++;break}l=N(l,c,n,r),s=u[_],l&&l!==e&&l!==s&&(null==s?e.appendChild(l):l===s.nextSibling?g(s):e.insertBefore(l,s))}var w,T,E;if(d)for(var _ in p)void 0!==p[_]&&k(p[_],!1);for(;v<=m;)void 0!==(l=f[m--])&&k(l,!1)}(i,p,n,r,x||null!=f.dangerouslySetInnerHTML),function(e,t,n){var r;for(r in n)t&&null!=t[r]||null==n[r]||m(e,r,n[r],n[r]=void 0,C);for(r in t)"children"===r||"innerHTML"===r||r in n&&t[r]===("value"===r||"checked"===r?e[r]:n[r])||m(e,r,n[r],n[r]=t[r],C)}(i,t.attributes,f),C=a,i}function k(e,t){var n=e._component;n?A(n):(null!=e.__preactattr_&&l(e.__preactattr_.ref,null),!1!==t&&null!=e.__preactattr_||g(e),E(e))}function E(e){for(e=e.lastChild;e;){var t=e.previousSibling;k(e,!0),e=t}}var O=[];function V(e,t,n){var r,o=O.length;for(e.prototype&&e.prototype.render?(r=new e(t,n),L.call(r,t,n)):((r=new L(t,n)).constructor=e,r.render=P);o--;)if(O[o].constructor===e)return r.nextBase=O[o].nextBase,O.splice(o,1),r;return r}function P(e,t,n){return this.constructor(e,n)}function j(e,t,n,r,i){e._disable||(e._disable=!0,e.__ref=t.ref,e.__key=t.key,delete t.ref,delete t.key,void 0===e.constructor.getDerivedStateFromProps&&(!e.base||i?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,r)),r&&r!==e.context&&(e.prevContext||(e.prevContext=e.context),e.context=r),e.prevProps||(e.prevProps=e.props),e.props=t,e._disable=!1,0!==n&&(1!==n&&!1===o.syncComponentUpdates&&e.base?d(e):B(e,1,i)),l(e.__ref,e))}function B(e,t,n,r){if(!e._disable){var i,a,s,l=e.props,u=e.state,f=e.context,p=e.prevProps||l,d=e.prevState||u,v=e.prevContext||f,h=e.base,g=e.nextBase,m=h||g,b=e._component,C=!1,x=v;if(e.constructor.getDerivedStateFromProps&&(u=c(c({},u),e.constructor.getDerivedStateFromProps(l,u)),e.state=u),h&&(e.props=p,e.state=d,e.context=v,2!==t&&e.shouldComponentUpdate&&!1===e.shouldComponentUpdate(l,u,f)?C=!0:e.componentWillUpdate&&e.componentWillUpdate(l,u,f),e.props=l,e.state=u,e.context=f),e.prevProps=e.prevState=e.prevContext=e.nextBase=null,e._dirty=!1,!C){i=e.render(l,u,f),e.getChildContext&&(f=c(c({},f),e.getChildContext())),h&&e.getSnapshotBeforeUpdate&&(x=e.getSnapshotBeforeUpdate(p,d));var N,E,O=i&&i.nodeName;if("function"==typeof O){var P=y(i);(a=b)&&a.constructor===O&&P.key==a.__key?j(a,P,1,f,!1):(N=a,e._component=a=V(O,P,f),a.nextBase=a.nextBase||g,a._parentComponent=e,j(a,P,0,f,!1),B(a,1,n,!0)),E=a.base}else s=m,(N=b)&&(s=e._component=null),(m||1===t)&&(s&&(s._component=null),E=T(s,i,f,n||!h,m&&m.parentNode,!0));if(m&&E!==m&&a!==b){var L=m.parentNode;L&&E!==L&&(L.replaceChild(E,m),N||(m._component=null,k(m,!1)))}if(N&&A(N),e.base=E,E&&!r){for(var D=e,F=e;F=F._parentComponent;)(D=F).base=E;E._component=D,E._componentConstructor=D.constructor}}for(!h||n?_.push(e):C||(e.componentDidUpdate&&e.componentDidUpdate(p,d,x),o.afterUpdate&&o.afterUpdate(e));e._renderCallbacks.length;)e._renderCallbacks.pop().call(e);S||r||w()}}function A(e){o.beforeUnmount&&o.beforeUnmount(e);var t=e.base;e._disable=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var n=e._component;n?A(n):t&&(null!=t.__preactattr_&&l(t.__preactattr_.ref,null),e.nextBase=t,g(t),O.push(e),E(t)),l(e.__ref,null)}function L(e,t){this._dirty=!0,this.context=t,this.props=e,this.state=this.state||{},this._renderCallbacks=[]}function D(e,t,n){return T(n,e,{},!1,t,!1)}c(L.prototype,{setState:function(e,t){this.prevState||(this.prevState=this.state),this.state=c(c({},this.state),"function"==typeof e?e(this.state,this.props):e),t&&this._renderCallbacks.push(t),d(this)},forceUpdate:function(e){e&&this._renderCallbacks.push(e),B(this,2)},render:function(){}});n(0);var F=0,U=document.head.appendChild(document.createElement("style")).sheet;function M(e,t){var n="p"+F++,r=t+n;return e.forEach(function(e){if(/^@/.test(e)){var t=e.indexOf("{")+1;e=e.slice(0,t)+r+e.slice(t)}else e=r+e;U.insertRule(e,U.cssRules.length)}),n}function I(e,t){return t+"{"+e+"}"}function R(e,t){var n=[""];for(var r in t=t||0,e){var o=e[r];r=r.replace(/[A-Z]/g,"-$&").toLowerCase(),o.sub||Array.isArray(o)?(o=Array.isArray(o)?o:[o]).forEach(function(e){return n[0]+=r+":"+e+";"}):(r=r.replace(/&/g,""),n.push(I(R(o,!/^@/.test(r)).join(""),r)))}return t||(n[0]=I(n[0],"")),n}var z=function(e,t){var n={};return(t=t||{}).returnObject?{style:r,css:o}:r;function r(t){return function(n){return function(r,i){i=(r=r||{}).children||i;var a="function"==typeof n?n(r):n;return r.class=[o(a),r.class].filter(Boolean).join(" "),e(t,r,i)}}}function o(e){var t=R(e),r=t.join("");return n[r]||(n[r]=M(t,"."))}};var G={default:"#000",reverse:"#FFF",border:"rgb(230,230,230)",lightGrey:"rgba(0, 0, 0, 0.1)",grey:"#4E4F4F",darkGrey:"rgba(0,0,0,0.5)",primary:"#0ED3B9",lightPrimary:"#d5fcf7",secondary:"#FFBC00",tertiary:"rgb(98,113,122)",quart:"#C22839",color1:"#81ecec",color2:"#ff7675",color3:"#fdcb6e",color4:"#74b9ff"};const W={default:G,dark:{default:"#c8c8c8",reverse:"#122d42",border:"#323232",lightGrey:"#ffffff1a",grey:"#969696",darkGrey:"#ffffff80",primary:"#0ED3B9",lightPrimary:"#0ED3B980",secondary:"#FFBC00",tertiary:"#a6becc",quart:"#C22839",color1:"#81ecec",color2:"#ff7675",color3:"#fdcb6e",color4:"#74b9ff"}};var H=function(e){window.postMessage(JSON.stringify(e))},q="SEND_INITIAL_DATA",$="NAVIGATE_TO_BIBLE_VERSE_DETAIL",J="NAVIGATE_TO_VERSE_NOTES",Z="TOGGLE_SELECTED_VERSE",K="80";function Q(e){return(Q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function X(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Y(e){return(Y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ee(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function te(e,t){return(te=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ne(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var re=z(s),oe=function(e,t){return"".concat(e+.1*t*e,"px")},ie=re("span")(function(e){var t=e.settings.fontSizeScale;return{fontSize:oe(20,t),lineHeight:oe(34,t)}}),ae=re("span")(function(e){var t=e.settings.fontSizeScale;return{fontSize:oe(28,t),padding:"0 10px"}}),se=re("span")(function(e){var t=e.settings.fontSizeScale;return{fontSize:oe(20,t),padding:"0 10px"}}),ce=re("span")(function(e){var t=e.isFocused,n=e.isSelected,r=e.highlightedColor,o="transparent";return r&&!n&&(o="".concat(G[r]).concat(K)),t&&(o="rgba(0,0,0,0.1)"),{fontFamily:"Literata Book",transition:"background 0.3s ease",background:o,"-webkit-touch-callout":"none",padding:"4px",borderBottom:n?"2px dashed #34495e":"none"}}),le=re("span")(function(e){return{display:e.settings.textDisplay}}),ue=function(e){function t(){var e,n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return r=this,o=(e=Y(t)).call.apply(e,[this].concat(a)),n=!o||"object"!==Q(o)&&"function"!=typeof o?ee(r):o,ne(ee(n),"state",{focused:!1}),ne(ee(n),"navigateToBibleVerseDetail",function(){H({type:$,payload:n.props.verse.Verset})}),ne(ee(n),"navigateToVerseNotes",function(){var e=n.props.verse,t=e.Livre,r=e.Chapitre,o=e.Verset;H({type:J,payload:"".concat(t,"-").concat(r,"-").concat(o)})}),ne(ee(n),"toggleSelectVerse",function(){var e=n.props.verse,t=e.Livre,r=e.Chapitre,o=e.Verset;H({type:Z,payload:"".concat(t,"-").concat(r,"-").concat(o)})}),ne(ee(n),"onTouchStart",function(){n.setState({isFocused:!0})}),ne(ee(n),"onTouchEnd",function(){n.setState({isFocused:!1}),clearTimeout(n.buttonPressTimer)}),n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&te(e,t)}(t,L),n=t,(r=[{key:"render",value:function(e,t){var n=e.verse,r=e.isSelected,o=e.highlightedColor,i=e.notesCount,a=e.settings,c=t.isFocused;return s(le,{settings:a,id:"verset-".concat(n.Verset)},s(ce,{isFocused:c,isSelected:r,highlightedColor:o,onClick:this.toggleSelectVerse,onTouchStart:this.onTouchStart,onTouchEnd:this.onTouchEnd},s(ae,{settings:a},n.Verset),s(se,{settings:a,onClick:this.navigateToVerseNotes},i),s(ie,{settings:a},n.Texte)))}}])&&X(n.prototype,r),o&&X(n,o),t}();function fe(e){return(fe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function pe(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function de(e){return(de=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ve(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function he(e,t){return(he=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ye(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ge=z(s)("div")(function(e){var t=e.settings,n=t.alignContent,r=t.theme;return{maxWidth:"320px",width:"100%",margin:"0 auto",textAlign:n,background:W[r].reverse,color:W[r].default}}),me=function(e){function t(){var e,n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return r=this,o=(e=de(t)).call.apply(e,[this].concat(a)),n=!o||"object"!==fe(o)&&"function"!=typeof o?ve(r):o,ye(ve(n),"state",{verses:[],selectedVerses:{},highlightedVerses:{},notedVerses:{},settings:{},verseToScroll:null}),ye(ve(n),"getNotedVerses",function(e,t){var n={};if(e.length){var r=e[0],o=r.Livre,i=r.Chapitre;Object.keys(t).map(function(e){var t=e.split("/")[0],r=parseInt(t.split("-")[0]),a=parseInt(t.split("-")[1]),s=t.split("-")[2];r===o&&a===i&&(n[s]?n[s]=n[s]+1:n[s]=1)})}return n}),ye(ve(n),"receiveDataFromApp",function(){var e=ve(n);document.addEventListener("message",function(t){var r=JSON.parse(t.data);switch(r.type){case q:var o=r.verses,i=r.selectedVerses,a=r.highlightedVerses,s=r.notedVerses,c=r.settings,l=r.verseToScroll;e.setState({verses:o,selectedVerses:i,highlightedVerses:a,notedVerses:n.getNotedVerses(o,s),settings:c,verseToScroll:l})}})}),n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&he(e,t)}(t,L),n=t,(r=[{key:"componentDidMount",value:function(){this.receiveDataFromApp()}},{key:"componentDidUpdate",value:function(e,t){var n=this;t&&t.settings.theme!==this.state.settings.theme&&(document.body.style.backgroundColor=W[this.state.settings.theme].reverse),t&&t.verseToScroll!==this.state.verseToScroll&&setTimeout(function(){document.querySelector("#verset-".concat(n.state.verseToScroll)).scrollIntoView()},200)}},{key:"render",value:function(e,t){return t.verses.length?s(ge,{settings:t.settings},t.verses.map(function(e){var n=e.Livre,r=e.Chapitre,o=e.Verset,i=!!t.selectedVerses["".concat(n,"-").concat(r,"-").concat(o)],a=!!t.highlightedVerses["".concat(n,"-").concat(r,"-").concat(o)]&&t.highlightedVerses["".concat(n,"-").concat(r,"-").concat(o)].color,c=t.notedVerses["".concat(o)];return s(ue,{verse:e,settings:t.settings,isSelected:i,highlightedColor:a,notesCount:c})})):null}}])&&pe(n.prototype,r),o&&pe(n,o),t}();D(s(me,{verses:void 0,settings:void 0,verseToScroll:void 0}),document.getElementById("app"))}]);