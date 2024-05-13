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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _msg_Log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./msg/Log */ \"./src/msg/Log.js\");\n\r\n\r\n//import TimeCode from './timeCode/main.js';\r\n\r\n\r\nconst autor='TiViAl';\r\nlet log = new _msg_Log__WEBPACK_IMPORTED_MODULE_0__[\"default\"](autor, 'Main');\r\n//setAppReadyEvent(onAppReady);\r\nlog.eventParam('loading',siteRootUrl);\r\n\r\n\r\n// function onAppReady(){\r\n//   log.eventParam('app ready', siteRootUrl);\r\n  \r\n//   addPlugins();\r\n  \r\n//   TimeCode.init(autor);\r\n\r\n//   log.event('loaded');\r\n// }\r\n\r\n// function addPlugins() {\r\n//   const plug={status:1, url:'https://nb557.github.io/plugins/online_mod.js'}\r\n//   Lampa.Plugins.add(plug);\r\n// }\r\n\r\n// function showPathes() {\r\n//   log.eventParam('__dirname', __dirname);\r\n//   log.eventParam('__filename', __filename);\r\n//   log.eventParam('window.location.href', window.location.href);\r\n// }\r\n\r\n// function setAppReadyEvent(appReadyAction) {\r\n//   Lampa.Listener.follow('app', (e)=>{\r\n//       if (e.type == 'ready') {\r\n//         appReadyAction();\r\n//       }\r\n//     });\r\n// }\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/msg/Log.js":
/*!************************!*\
  !*** ./src/msg/Log.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Log)\n/* harmony export */ });\nclass Log{\r\n    constructor(autor, scriptName){\r\n        this.autor = autor;\r\n        this.scriptName = scriptName;\r\n    } \r\n    \r\n    event(name) {\r\n        this.eventParam(name, '');\r\n    }\r\n    \r\n    eventParam(eventName, param) {\r\n        console.log(this.autor, this.scriptName, eventName, param);       \r\n    }\r\n    \r\n    movie(movie) {\r\n        this.eventParam('data', movie.data);\r\n        this.eventParam('KpId', movie.kpid);\r\n        this.eventParam('ImDbId', movie.imid);\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/msg/Log.js?");

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