(()=>{"use strict";var e={170:(e,t,r)=>{r(535).A.getArrayFromObjectArrayProps({Look:{title:"Смотрю",value:"look"},Scheduled:{title:"Запланировано",value:"scheduled"},Wath:{title:"Позже",value:"wath"},Viewed:{title:"Просмотренно",value:"viewed"},Continued:{title:"Продолжение следует",value:"continued"},Thrown:{title:"Брошено",value:"thrown"},Book:{title:"Закладки",value:"book"},Like:{title:"Нравится",value:"like"},History:{title:"История",value:"history"}}).map((e=>e.value))},817:(e,t,r)=>{r(167)},167:(e,t,r)=>{r.d(t,{A:()=>n});let o=null;const n={init:function(e){o=e},saveTextToFile:function(e,t,r="application/json"){var o=document.createElement("a"),n=new Blob([t],{type:r});o.href=URL.createObjectURL(n),o.download=e,o.click()},loadTextFromUrl:function(e){const t=function(e){return null==o?e:o+e}(e);return new Promise((function(e){const r=new XMLHttpRequest;r.onreadystatechange=function(){r.readyState==XMLHttpRequest.DONE&&200==r.status&&e(r.responseText)},r.open("GET",t,!0),r.send(null)}))}}},329:(e,t,r)=>{r(170),r(603),r(535),r(108),r(817);const o=r(481);console.log("module",e.id),console.log("TiViAl","Test","timeCodes.length",o.length),console.log("TiViAl","Test","timeCodes",o[0])},108:(e,t,r)=>{r(167)},603:(e,t,r)=>{r.d(t,{A:()=>o});const o={getVersionWithYear:function(){var e=function(){var e=[];switch(!0){case!Array.isArray:return 3;case!window.Promise:return 5;case!e.includes:return 6;case!"".padStart:return 7;case!Promise.prototype.finally:return 8;case!window.BigInt:return 9;case!Promise.allSettled:return 10;case!"".replaceAll:return 11;case!e.at:return 12;default:return 13}}(),t=function(e){return{3:1999,5:2009}[e]||2009+e}(e);return"Edition: "+e+" | Year: "+t}}},535:(e,t,r)=>{r.d(t,{A:()=>o});const o={getPropsFromObjectArray:n,getArrayFromObjectArrayProps:function(e){return n(e).map((t=>e[t]))},createNewObjectFromObjectWithProps:function(e,t){const r={};for(const o of t)r[o]=e[o];return r}};function n(e){return Object.keys(e)}},481:e=>{e.exports=JSON.parse('[{"id":1,"title":"Маска","timeCodes":[0,1800,3450,3646,5700,5934,10030,12650,12915,12919]},{"id":2,"title":"Фалаут","s":1,"e":2,"timeCodes":[0,1919,120,10134]},{"title":"Точка ноль","s":1,"e":1,"timeCodes":[0,255,2041,2053]}]')}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var i=t[o]={id:o,exports:{}};return e[o](i,i.exports,r),i.exports}r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r(329)})();