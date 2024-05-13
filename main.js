/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("var __dirname = \"/\";\nvar __filename = \"/index.js\";\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _msg_Log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./msg/Log */ \"./src/msg/Log.js\");\n/* harmony import */ var _timeCode_main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timeCode/main.js */ \"./src/timeCode/main.js\");\n\r\n\r\n\r\n\r\n\r\nconst autor='TiViAl';\r\nlet log = new _msg_Log__WEBPACK_IMPORTED_MODULE_0__[\"default\"](autor, 'Main');\r\nsetAppReadyEvent(onAppReady);\r\nlog.event('loading');\r\n\r\n\r\nfunction onAppReady(){\r\n  log.eventParam('app ready', siteRootUrl);\r\n  \r\n  addPlugins();\r\n  \r\n  _timeCode_main_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].init(autor);\r\n\r\n  log.event('loaded');\r\n}\r\n\r\nfunction addPlugins() {\r\n  Lampa.Plugins.add('https://nb557.github.io/plugins/online_mod.js');\r\n}\r\n\r\nfunction showPathes() {\r\n  log.eventParam('__dirname', __dirname);\r\n  log.eventParam('__filename', __filename);\r\n  log.eventParam('window.location.href', window.location.href);\r\n}\r\n\r\nfunction setAppReadyEvent(appReadyAction) {\r\n  Lampa.Listener.follow('app', (e)=>{\r\n      if (e.type == 'ready') {\r\n        appReadyAction();\r\n      }\r\n    });\r\n}\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/msg/Log.js":
/*!************************!*\
  !*** ./src/msg/Log.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Log)\n/* harmony export */ });\nclass Log{\r\n    constructor(autor, scriptName){\r\n        this.autor = autor;\r\n        this.scriptName = scriptName;\r\n    } \r\n    \r\n    event(name) {\r\n        this.eventParam(name, '');\r\n    }\r\n    \r\n    eventParam(eventName, param) {\r\n        console.log(this.autor, this.scriptName, eventName, param);       \r\n    }\r\n    \r\n    movie(movie) {\r\n        this.eventParam('data', movie.data);\r\n        this.eventParam('KpId', movie.kpid);\r\n        this.eventParam('ImDbId', movie.imid);\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/msg/Log.js?");

/***/ }),

/***/ "./src/msg/messages.js":
/*!*****************************!*\
  !*** ./src/msg/messages.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//import Controller from '../../interaction/controller'\r\n// import Modal from '../../interaction/modal'\r\n// import Activity from '../../interaction/activity'\r\n// import Select from '../../interaction/select'\r\n\r\n\r\n\r\nfunction showHtmlModal(title, modalHtml){\r\n\tvar enabledName = Lampa.Controller.enabled().name;\r\n    Lampa.Modal.open({\r\n                title: title,\r\n                html: modalHtml,\r\n                size: \"large\",\r\n                mask: !0,\r\n                onBack: function() {\r\n                    Lampa.Modal.close(); finall();\r\n                },\r\n                onSelect: finall\r\n            });\t\r\n\r\n    function finall(){\r\n        Lampa.Controller.toggle(enabledName);\r\n    }\r\n}\r\n\r\nfunction showComponent(title, componentName) {\r\n    Lampa.Activity.push({\r\n        url: '',\r\n        title: title,\r\n        component: componentName,\r\n        page: 1\r\n    });\r\n}\r\n\r\nfunction showSelectActionOne(title, items, actionSelect, actionBack) {\r\n    var enabledName = Lampa.Controller.enabled().name;\r\n    Lampa.Select.show({\r\n        title: title,\r\n        items: items,\r\n        onSelect: (e)=>{ finall(); actionSelect(e);},\r\n        onBack: ()=>{ finall(); if(actionBack!=null){ actionBack();}}\r\n    });\r\n\r\n    function finall(){\r\n        Lampa.Controller.toggle(enabledName);\r\n    }\r\n}\r\n\r\nfunction showSelectActionsAny(title, items, actionBack) {\r\n    var enabledName = Lampa.Controller.enabled().name;  \r\n    Lampa.Select.show({\r\n        title: title,\r\n        items: items,\r\n        onSelect: (e)=>{ finall(); e.action(e);},\r\n        onBack: ()=>{ finall(); if(actionBack!=null){ actionBack();}}\r\n    });\r\n\r\n    function finall(){\r\n        Lampa.Controller.toggle(enabledName);\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\r\n    showHtmlModal,\r\n    showSelectActionOne,\r\n    showSelectActionsAny\r\n});\n\n//# sourceURL=webpack:///./src/msg/messages.js?");

/***/ }),

/***/ "./src/repository/core.js":
/*!********************************!*\
  !*** ./src/repository/core.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nasync function loadTextFromUrl(url) {\r\n    const response = await fetch(url);\r\n    return await response.text();\r\n}\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\r\n    loadTextFromUrl\r\n});\n\n//# sourceURL=webpack:///./src/repository/core.js?");

/***/ }),

/***/ "./src/timeCode/buttonsCode.js":
/*!*************************************!*\
  !*** ./src/timeCode/buttonsCode.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\r\n    'backBtnCode':8,\r\n    'zeroBtnCode':48,\r\n    'numLockZeroBtnCodeForDeveloper':96\r\n});\n\n//# sourceURL=webpack:///./src/timeCode/buttonsCode.js?");

/***/ }),

/***/ "./src/timeCode/checkDoublePress.js":
/*!******************************************!*\
  !*** ./src/timeCode/checkDoublePress.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst pauseMs=500;\r\nlet zeroIndex=0;\r\nlet timerId;\r\n\r\n\r\nfunction checkDoubleClick(actionDouble, actionNotDouble) {\r\n    if(zeroIndex==0){\r\n        zeroIndex++;\r\n        timerId=setTimeout(resetOneClickAfterDelay, pauseMs);\r\n    }\r\n    else{\r\n        if(timerId){\r\n            clearTimeout(timerId);\r\n        }\r\n        zeroIndex=0;\r\n        actionDouble();\r\n    }\r\n\r\n\r\n    function resetOneClickAfterDelay() {\r\n        zeroIndex=0;\r\n        actionNotDouble();\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\r\n    checkDoubleClick\r\n});\n\n//# sourceURL=webpack:///./src/timeCode/checkDoublePress.js?");

/***/ }),

/***/ "./src/timeCode/main.js":
/*!******************************!*\
  !*** ./src/timeCode/main.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _msg_Log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../msg/Log */ \"./src/msg/Log.js\");\n/* harmony import */ var _msg_messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../msg/messages */ \"./src/msg/messages.js\");\n/* harmony import */ var _buttonsCode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buttonsCode */ \"./src/timeCode/buttonsCode.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player */ \"./src/timeCode/player.js\");\n/* harmony import */ var _checkDoublePress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./checkDoublePress */ \"./src/timeCode/checkDoublePress.js\");\n/* harmony import */ var _repository__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./repository */ \"./src/timeCode/repository.js\");\n/* harmony import */ var _timeCodeConverter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./timeCodeConverter */ \"./src/timeCode/timeCodeConverter.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nlet timeCodes=[];\r\nlet log;\r\n\r\n\r\nfunction init(autor) {\r\n    log = new _msg_Log__WEBPACK_IMPORTED_MODULE_0__[\"default\"](autor, 'TimeCode');\r\n    initTimeCodes();\r\n    _player__WEBPACK_IMPORTED_MODULE_3__[\"default\"].addEventListenerKeyDown(onPlayerKeyDown);\r\n    _player__WEBPACK_IMPORTED_MODULE_3__[\"default\"].addEventListenerLoaded(setTimeCodesByPercents);\r\n\r\n    log.event('init');\r\n}\r\n\r\n\r\n\r\nfunction initTimeCodes() {\r\n    for (let i = 0; i < 10; i++) {\r\n        timeCodes.push({keyCode:i + _buttonsCode__WEBPACK_IMPORTED_MODULE_2__[\"default\"].zeroBtnCode});\r\n    }\r\n}\r\n\r\nfunction setTimeCodesByPercents() {\r\n    for (let i = 0; i < timeCodes.length; i++) {\r\n      timeCodes[i].timeInSec = _player__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getPositionByPercent(i*10);\r\n    }\r\n}\r\n  \r\nfunction setTimeCodesBy10min() {\r\n    for (let i = 0; i < timeCodes.length; i++) {\r\n        timeCodes[i].timeInSec=i*10*60;\r\n    }\r\n}\r\n\r\nfunction setTimeCodesByRemData(timeCode) {\r\n    for (let i = 0; i < timeCodes.length; i++) {\r\n        timeCodes[i].timeInSec=getSecondsFromValue(timeCode.timeCodes[i]);\r\n    }\r\n}\r\n\r\nfunction getSecondsFromValue(value) {\r\n    if(value==null || typeof value !== 'number' || !isFinite(value) || isNaN(value) || value==0) return 0;\r\n    else return _timeCodeConverter__WEBPACK_IMPORTED_MODULE_6__[\"default\"].getSecondsFromNumberInTimeFormat(value);\r\n}\r\n\r\n\r\n\r\nfunction onPlayerKeyDown(e) {\r\n    //log.eventParam('button pressed', e.keyCode);\r\n\r\n    if (e.keyCode === _buttonsCode__WEBPACK_IMPORTED_MODULE_2__[\"default\"].backBtnCode) {\r\n        _player__WEBPACK_IMPORTED_MODULE_3__[\"default\"].nextVideoInPlaylist()\r\n        e.preventDefault(); \r\n    } \r\n\r\n    if(e.keyCode==_buttonsCode__WEBPACK_IMPORTED_MODULE_2__[\"default\"].zeroBtnCode){\r\n        _checkDoublePress__WEBPACK_IMPORTED_MODULE_4__[\"default\"].checkDoubleClick(showSelectTimeCodesMode, setPosition);\r\n    }\r\n    else setPosition();\r\n\r\n    if (e.keyCode === _buttonsCode__WEBPACK_IMPORTED_MODULE_2__[\"default\"].numLockZeroBtnCodeForDeveloper) {\r\n        showSelectTimeCodesMode();\r\n    } \r\n\r\n\r\n    function setPosition() {\r\n        setVideoPositionByKeyCode(e.keyCode);\r\n    }\r\n}\r\n\r\nfunction setVideoPositionByKeyCode(keyCode) {\r\n  const timeL = timeCodes.find(t=>t.keyCode==keyCode);\r\n  if(timeL){\r\n    _player__WEBPACK_IMPORTED_MODULE_3__[\"default\"].setVideoPositionSec(timeL.timeInSec);\r\n  }\r\n}\r\n\r\nfunction showSelectTimeCodesMode(){\r\n    const itemsAdd=[\r\n      {title:\"В процентах\", subscribe:\"subscribe\", action:setTimeCodesByPercents},\r\n      {title:\"Через 10 мин\", action:setTimeCodesBy10min},\r\n      {title:\"Загрузить...\", action:showSelectTimeCodesRemote}\r\n    ];\r\n  \r\n    _msg_messages__WEBPACK_IMPORTED_MODULE_1__[\"default\"].showSelectActionsAny('Установить метки:', itemsAdd);\r\n  }\r\n\r\n  async function showSelectTimeCodesRemote() {\r\n    const remTimeCodes= await _repository__WEBPACK_IMPORTED_MODULE_5__[\"default\"].loadTimeCodes();\r\n    _msg_messages__WEBPACK_IMPORTED_MODULE_1__[\"default\"].showSelectActionOne('Тайм коды:', remTimeCodes, setTimeCodesByRemData);\r\n  }\r\n\r\n\r\n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\r\n    init\r\n  });\n\n//# sourceURL=webpack:///./src/timeCode/main.js?");

/***/ }),

/***/ "./src/timeCode/player.js":
/*!********************************!*\
  !*** ./src/timeCode/player.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// import Player from '../../interaction/player'\r\n// import PlayerVideo from '../../interaction/player/video'\r\n// import PlayerPlaylist from '../../interaction/player/playlist'\r\n\r\n\r\nfunction addEventListenerKeyDown(keyDownAction) {\r\n    Lampa.Player.listener.follow('ready', onPlayerReady);\r\n    \r\n    function onPlayerReady() {\r\n        document.addEventListener(\"keydown\", keyDownAction);\r\n        Lampa.Player.listener.follow('destroy', listenDestroy);\r\n    }\r\n\r\n    function listenDestroy() {\r\n        document.removeEventListener(\"keydown\", keyDownAction);\r\n        Lampa.Player.listener.remove('destroy', listenDestroy);\t\r\n    }\r\n}\r\n\r\nfunction addEventListenerLoaded(action) {\r\n    Lampa.PlayerVideo.listener.follow('loadeddata', action);\r\n}\r\n\r\n\r\n\r\nfunction getPositionByPercent(percent) {\r\n    return getVideoDuration()*percent/100;\r\n}\r\n\r\nfunction getVideoDuration() {\r\n    return Lampa.PlayerVideo.video().duration;\r\n}\r\n\r\nfunction setVideoPositionSec(seconds) {\r\n    Lampa.PlayerVideo.to(seconds);\r\n}\r\n\r\n\r\n\r\nfunction nextVideoInPlaylist() {\r\n    Lampa.PlayerPlaylist.next();\r\n}\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\r\n    addEventListenerKeyDown,\r\n    addEventListenerLoaded,\r\n\r\n    getPositionByPercent,\r\n    setVideoPositionSec,\r\n\r\n    nextVideoInPlaylist\r\n});\n\n//# sourceURL=webpack:///./src/timeCode/player.js?");

/***/ }),

/***/ "./src/timeCode/repository.js":
/*!************************************!*\
  !*** ./src/timeCode/repository.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _repository_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../repository/core */ \"./src/repository/core.js\");\n\r\n\r\nconst timeCodesUrl= siteRootUrl + 'add/timeCodes.json';\r\n\r\n\r\nasync function loadTimeCodes() {\r\n    const newTimeCodesJson= await _repository_core__WEBPACK_IMPORTED_MODULE_0__[\"default\"].loadTextFromUrl(timeCodesUrl);\r\n    return JSON.parse(newTimeCodesJson);\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\r\n    loadTimeCodes\r\n});\n\n//# sourceURL=webpack:///./src/timeCode/repository.js?");

/***/ }),

/***/ "./src/timeCode/timeCodeConverter.js":
/*!*******************************************!*\
  !*** ./src/timeCode/timeCodeConverter.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction getSecondsFromNumberInTimeFormat(number) {\r\n    const arrayHMS = new Array(3).fill(0);\r\n    let currN=number;\r\n    for (let i = 0; i < 3; i++) {\r\n        let n= Math.trunc(currN/100);\r\n        arrayHMS[i]=currN-n*100;\r\n        currN=n;\r\n    }\r\n    return arrayHMS[0] + arrayHMS[1]*60 + arrayHMS[2]*3600;\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\r\n    getSecondsFromNumberInTimeFormat\r\n});\n\n//# sourceURL=webpack:///./src/timeCode/timeCodeConverter.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;