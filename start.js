(()=>{"use strict";const t={addPluginOnline:function(){var t;t="https://nb557.github.io/plugins/online_mod.js",Lampa.Plugins.get().find((e=>e.url==t))||Lampa.Plugins.push({url:t,status:1,name:"online",author:"nb557"})}},e=function(t,e){Lampa.Listener.follow("app",(n=>{"start"==n.type?t():"ready"==n.type&&e()}))},n=function(t){Lampa.Keypad.listener.follow("keydown",(e=>{Lampa.Player.opened()||t(e)}))},o=function(t){Lampa.Listener.follow("activity",(e=>{"full"==e.component&&"start"==e.type&&t(e.object.card)}))},i={backBtnCode:8,zeroBtnCode:48,btn1Code:49,btn2Code:50,btn3Code:51,btn4Code:52,btn5Code:53,btn6Code:54,btn7Code:55,btn8Code:56,btn9Code:57,numLockZeroBtnCodeForDeveloper:96};let a=!1;const r=function(){a=!0},l=function(){a?console.log("Stub filterShow"):Filter.show()},s=function(t){return Object.keys(t).map((e=>t[e]))},c={Look:{title:"Смотрю",value:"look"},Scheduled:{title:"Запланировано",value:"scheduled"},Wath:{title:"Позже",value:"wath"},Viewed:{title:"Просмотренно",value:"viewed"},Continued:{title:"Продолжение следует",value:"continued"},Thrown:{title:"Брошено",value:"thrown"},Book:{title:"Закладки",value:"book"},Like:{title:"Нравится",value:"like"},History:{title:"История",value:"history"}},u=s(c),d=u.map((t=>t.value));function f(){return Lampa.Favorite.all()}function m(t){return JSON.parse(t)}function h(){for(let t of d)v(t)}function v(t){Lampa.Favorite.clear(t)}const p={categories:c,categoriesArray:u,clearAll:h,clearFavoriteAndSetFromJson:function(t){const e=m(t);h(),function(t){for(let e of d)for(let n of t[e])Lampa.Favorite.add(e,n,!1)}(e)},getFavoritesAllJson:function(){let t=f();return JSON.stringify(t)},addFavsToCategory:function(t,e){const n=m(t)[e],o=f()[c.Look.value];for(const t of n)null==o.find((e=>e.id==t.id))&&Lampa.Favorite.add(e,t,!1)},clearFavoriteInCategory:v};class w{constructor(t,e){this.title=t,this.component=e,this.type,this.source,this.url=""}setType(t){return this.type=t,this}setSource(t){return this.source=t,this}setUrl(t){return this.url=t,this}}function y(t,e,n){g(function(t,e,n){const o=Lampa.Storage.field("source"),i=new w(`${t} - ${o}`,e).setSource(o);return n&&i.setUrl(n),i}(t,e,n))}function g(t){Lampa.Activity.push({url:t.url,title:t.title,component:t.component,type:t.type,page:1,source:t.source})}const C={showViewByKeyCode:function(t){var e,n,o;t==i.btn1Code?y("Главная","main"):t==i.btn2Code?y("Фильмы","category","movie"):t==i.btn3Code?y("Сериалы","category","tv"):t==i.btn4Code?l():t==i.btn5Code?g(new w("Избранное","bookmarks")):t==i.btn6Code&&(e=p.categories.History,n=e.title,o=e.value,g(new w(n,"favorite").setType(o)))}};let L=null;const b=function(t){L=t},E=async function(t){const e=function(t){return null==L?t:L+t}(t),n=await fetch(e);return await n.text()};class I{constructor(t,e){this.author=t,this.scriptName=e}event(t){this.eventParam(t,"")}eventParam(t,e){console.log(this.author,this.scriptName,t,e)}movie(t){this.eventParam("data",t.data),this.eventParam("KpId",t.kpid),this.eventParam("ImDbId",t.imid)}}function P(){return Lampa.PlayerVideo.video().duration}const S={addEventListenerKeyDown:function(t){function e(){document.removeEventListener("keydown",t),Lampa.Player.listener.remove("destroy",e)}Lampa.Player.listener.follow("ready",(function(){document.addEventListener("keydown",t),Lampa.Player.listener.follow("destroy",e)}))},addEventListenerLoaded:function(t){Lampa.PlayerVideo.listener.follow("loadeddata",t)},getPositionByPercent:function(t){return P()*t/100},setVideoPositionSec:function(t){P()>0&&Lampa.PlayerVideo.to(t)},nextVideoInPlaylist:function(){Lampa.PlayerPlaylist.next()}},T={showHtmlModal:function(t,e){var n=Lampa.Controller.enabled().name;function o(){Lampa.Controller.toggle(n)}Lampa.Modal.open({title:t,html:e,size:"large",mask:!0,onBack:function(){Lampa.Modal.close(),o()},onSelect:o})},showSelectActionOne:function(t,e,n,o){var i=Lampa.Controller.enabled().name;function a(){Lampa.Controller.toggle(i)}Lampa.Select.show({title:t,items:e,onSelect:t=>{a(),n(t)},onBack:()=>{a(),null!=o&&o()}})},showSelectActionInItem:function(t,e,n){var o=Lampa.Controller.enabled().name;function i(){Lampa.Controller.toggle(o)}Lampa.Select.show({title:t,items:e,onSelect:t=>{i(),t.action(t)},onBack:()=>{i(),null!=n&&n()}})}},A={loadTimeCodes:async function(){const t=await E("add/timeCodes.json");return JSON.parse(t)}},V={getSecondsFromNumberInTimeFormat:function(t){const e=new Array(3).fill(0);let n=t;for(let t=0;t<3;t++){let o=Math.trunc(n/100);e[t]=n-100*o,n=o}return e[0]+60*e[1]+3600*e[2]}};let k,F=0;const B=function(t,e){0==F?(F++,k=setTimeout((function(){F=0,e()}),700)):(k&&clearTimeout(k),F=0,t())};let O,D=[];const N={persent:{title:"Проценты",action:j},min10:{title:"10 минут",action:J},byId:{title:"по id",action:function(){}}};let M=N.persent;function x(t){M=t}function H(){M.action()}function j(){for(let t=0;t<D.length;t++)D[t].timeInSec=S.getPositionByPercent(10*t)}function J(){for(let t=0;t<D.length;t++)D[t].timeInSec=10*t*60}function $(t){for(let n=0;n<D.length;n++)D[n].timeInSec=null==(e=t.timeCodes[n])||"number"!=typeof e||!isFinite(e)||isNaN(e)||0==e?0:V.getSecondsFromNumberInTimeFormat(e);var e}function K(t){function e(){!function(t){const e=D.find((e=>e.keyCode==t));e&&S.setVideoPositionSec(e.timeInSec)}(t.keyCode)}t.keyCode===i.backBtnCode&&(S.nextVideoInPlaylist(),t.preventDefault()),t.keyCode==i.zeroBtnCode?B(W,e):e(),t.keyCode===i.numLockZeroBtnCodeForDeveloper&&W()}function W(){const t=[{title:"В процентах",subscribe:"subscribe",action:j},{title:"Через 10 мин",action:J},{title:"Загрузить...",action:z}];T.showSelectActionInItem("Установить метки:",t)}async function z(){const t=((e=await A.loadTimeCodes()).forEach((t=>{t.s&&t.e&&(t.subtitle=`Сезон ${t.s} эпизод ${t.e}`)})),e);var e;T.showSelectActionOne("Тайм коды:",t,$)}const Q={init:function(t){O=new I(t,"TimeCode"),function(){for(let t=0;t<10;t++)D.push({keyCode:t+i.zeroBtnCode})}(),S.addEventListenerKeyDown(K),S.addEventListenerLoaded(H),O.event("init")},selectModeOnPlayerLoad:function(){const t=s(N);t.forEach((function(t){t.title==M.title?t.subtitle="текущий":t.subtitle=""})),T.showSelectActionOne("Режим при загрузке:",t,x)}},U={loadFavoritesQueryDom:async function(){const t=await async function(){return await E("add/favorites.html")}();return jQuery(t)},loadFavoritesAll:async function(){return await E("add/favsAll.json")}};class Z{constructor(t,e){this.viewTarget=t,this.domElement=e,this.eventOn="on"}getView(){this.elements=this.getElementsWithIdInDom(this.domElement);const t=this.getViewTargetProperties(this.eventOn);return this.defineViewTargetPropertiesViews(t.views),this.setEventToElementsByProps(t.events),this.viewTarget}getViewTargetProperties(t){const e=Object.keys(this.viewTarget);return{views:e.filter((t=>!n(t))),events:e.filter((t=>n(t)))};function n(e){return e.startsWith(t)}}defineViewTargetPropertiesViews(t){const e=this;for(const n of t){const t=this.getElementById(n);if(null==t)throw"ViewController setViewElementsByProps: there is no element with id = "+n;Object.defineProperty(this.viewTarget,n,{get:function(){return e.getValueOfElement(t)},set:function(n){e.setValueOfElement(t,n)}})}}setEventToElementsByProps(t){this.setEventToInputsByProps(t)}setEventToInputsByProps(t){const e=this.getInputs();for(const n of e){const e=t.find((t=>t.startsWith(this.eventOn+n.id)));if(null!=e)if("button"==n.type)n.onclick=t=>this.onClickButtonEvent(t.target,e);else{if("text"!=n.type)throw"ViewController setEventElementsByProps: Unkwone type input"+n.type;n.onchange=t=>this.onChangeInputEvent(t.target,e)}}}onClickButtonEvent(t,e){if(null==this.viewTarget[e])throw`ViewController onClickButtonEvent: viewTarget[${e}]==null`;this.viewTarget[e]()}onChangeInputEvent(t,e){if(null==this.viewTarget[e])throw`ViewController onChangeInputEvent: viewTarget[${e}]==null`;this.viewTarget[e](t.value)}getElementsWithIdInDom(t){const e=[];return e[0]=n("input"),e[1]=n("p"),e[2]=n("textarea"),function(t){let e=0;for(;0==t[e];)if(e++,e==t.length)throw"ViewController getElementsWithIdInDom: nothing find!";let n=t[e];for(let o=e+1;o<t.length;o++)t[o].length>0&&(n=n.concat(t[o]));return n}(function(t){const e=[];for(let o=0;o<t.length;o++)e[o]=t[o].filter(n);return e;function n(t){return!!t.id}}(e));function n(e){return Array.from(t.getElementsByTagName(e))}}getElementById(t){return this.elements.find((e=>e.id==t))}getInputs(){return this.getElementsByTagName("input")}getElementsByTagName(t){return this.elements.filter((e=>e.tagName.toLowerCase()==t))}getValueOfElement(t){if(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement)return t.value;if(t instanceof HTMLParagraphElement)return t.textContent;throw"ViewValues getValueOfElement: type is not defined "+t.nodeName}setValueOfElement(t,e){if(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement)t.value=e;else{if(!(t instanceof HTMLParagraphElement))throw"ViewValues setValueOfElement: type is not defined "+t.nodeName;t.textContent=e}}}let R,Y=new class{constructor(){this.Data="",this.onLoad=null,this.onSave=null,this.onClear=null}};Y.onLoad=function(){Y.Data?confirm("Все закладки будут удалены безвозвратно и добавлены новые. Продолжить?")&&p.clearFavoriteAndSetFromJson(Y.Data):alert("Данных для загрузки нет!")},Y.onClear=function(){Y.Data="",confirm("Все закладки будут удалены безвозвратно. Продолжить?")&&p.clearAll()},Y.onSave=function(){Y.Data=p.getFavoritesAllJson()};const _={init:async function(){R=await U.loadFavoritesQueryDom();const t=new Z(Y,R[0]);Y=t.getView()},showFavoriteDev:function(){T.showHtmlModal("Менеджер избранного",R)}};let q;function G(){const t=[{title:"Да",action:X},{title:"Отмена",action:function(){}}];T.showSelectActionInItem("Очистить и загрузить все?",t)}async function X(){const t=await U.loadFavoritesAll();p.clearFavoriteAndSetFromJson(t)}function tt(){const t=[{title:"Да",action:p.clearAll},{title:"Отмена",action:function(){}}];T.showSelectActionInItem("Очистить текущие?",t)}function et(t){T.showSelectActionOne("Категории:",p.categoriesArray,t)}function nt(t){const e=[{title:"Да",action:()=>async function(t){const e=await U.loadFavoritesAll();p.addFavsToCategory(e,t)}(t.value)},{title:"Отмена",action:function(){}}];T.showSelectActionInItem(`Добавить ${t.title}?`,e)}function ot(t){const e=[{title:"Да",action:()=>p.clearFavoriteInCategory(t.value)},{title:"Отмена",action:function(){}}];T.showSelectActionInItem(`Очистить ${t.title}?`,e)}const it={init:async function(t){q=new I(t,"Favorites"),_.init(),q.event("init")},showSelectFavsActions:function(){const t=[{title:"Загрузить категорию",comment:"comment",action:()=>et(nt)},{title:"Очистить категорию",subtext:"comment",action:()=>et(ot)},{title:"Загрузить все",comment:"comment",action:G},{title:"Очистить все",subtext:"comment",action:tt},{title:"Окно разработчика",action:_.showFavoriteDev}];T.showSelectActionInItem("Дополнения",t)}},at=function(){var t=function(){var t=[];switch(!0){case!Array.isArray:return 3;case!window.Promise:return 5;case!t.includes:return 6;case!"".padStart:return 7;case!Promise.prototype.finally:return 8;case!window.BigInt:return 9;case!Promise.allSettled:return 10;case!"".replaceAll:return 11;case!t.at:return 12;default:return 13}}(),e=function(t){return{3:1999,5:2009}[t]||2009+t}(t);return"Edition: "+t+" | Year: "+e},rt="TiViAl";let lt=new I(rt,"Main");function st(){lt.event("onAppStart")}async function ct(){lt.event("onAppReady"),t.addPluginOnline(),Q.init(rt),await it.init(rt)}function ut(t){t.code==i.zeroBtnCode?it.showSelectFavsActions():t.code==i.btn7Code||t.code==i.btn8Code||(t.code==i.btn9Code?Q.selectModeOnPlayerLoad():C.showViewByKeyCode(t.code))}function dt(t){lt.eventParam("onCardSelect",t)}lt.event("loaded"),b("https://tivial19.github.io/lampa/"),r(),lt.event(at()),e(st,ct),n(ut),o(dt),lt.event("init")})();