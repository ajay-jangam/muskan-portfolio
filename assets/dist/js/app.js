/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/***/ (() => {

eval("function _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n$(document).ready(function () {\n  // Sliders\n  var clientsSliderOptionsPara = {\n    // Optional parameters\n    loop: true,\n    slidesPerView: \"auto\",\n    speed: 2000,\n    grabCursor: false,\n    mousewheelControl: false,\n    keyboardControl: true\n  };\n  var clientsSliderTop = new Swiper(\".clients__sliderTop\", _objectSpread(_objectSpread({}, clientsSliderOptionsPara), {}, {\n    autoplay: {\n      delay: 0,\n      disableOnInteraction: true\n    }\n  }));\n  var clientsSliderBottom = new Swiper(\".clients__sliderBottom\", _objectSpread(_objectSpread({}, clientsSliderOptionsPara), {}, {\n    autoplay: {\n      delay: 0,\n      reverseDirection: true,\n      disableOnInteraction: true\n    }\n  }));\n  var feedbackRibbonSlider = new Swiper(\".feedback__ribbon\", _objectSpread(_objectSpread({}, clientsSliderOptionsPara), {}, {\n    speed: 4000,\n    autoplay: {\n      delay: 0,\n      disableOnInteraction: true\n    }\n  }));\n  var previousIndex = 0; // To track the direction of slide change\n\n  var feedbackSlider = new Swiper(\".feedback__slider\", {\n    loop: true,\n    on: {\n      slideChangeTransitionStart: function slideChangeTransitionStart() {\n        $(\".swiper-slide\").removeClass(\"swiper-slide-rotate-next swiper-slide-rotate-prev\");\n        if (feedbackSlider.swipeDirection === \"next\") {\n          $(feedbackSlider.slides[feedbackSlider.activeIndex]).addClass(\"swiper-slide-rotate-next\");\n        } else if (feedbackSlider.swipeDirection === \"prev\") {\n          $(feedbackSlider.slides[feedbackSlider.activeIndex]).addClass(\"swiper-slide-rotate-prev\");\n        }\n      }\n    },\n    navigation: {\n      nextEl: \".swiper-button-next\",\n      prevEl: \".swiper-button-prev\"\n    }\n  });\n\n  // Copy email functionality\n  $(\".footer__copyLink\").click(function () {\n    var copyText = $(\".footer__email\").val();\n    navigator.clipboard.writeText(copyText).then(function () {\n      $(\".footer__copyLink\").remove();\n      $(\".footer__copiedText\").show();\n    })[\"catch\"](function (err) {\n      alert(\"Failed to copy the link: \", err);\n    });\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsImNsaWVudHNTbGlkZXJPcHRpb25zUGFyYSIsImxvb3AiLCJzbGlkZXNQZXJWaWV3Iiwic3BlZWQiLCJncmFiQ3Vyc29yIiwibW91c2V3aGVlbENvbnRyb2wiLCJrZXlib2FyZENvbnRyb2wiLCJjbGllbnRzU2xpZGVyVG9wIiwiU3dpcGVyIiwiYXV0b3BsYXkiLCJkZWxheSIsImRpc2FibGVPbkludGVyYWN0aW9uIiwiY2xpZW50c1NsaWRlckJvdHRvbSIsInJldmVyc2VEaXJlY3Rpb24iLCJmZWVkYmFja1JpYmJvblNsaWRlciIsInByZXZpb3VzSW5kZXgiLCJmZWVkYmFja1NsaWRlciIsIm9uIiwic2xpZGVDaGFuZ2VUcmFuc2l0aW9uU3RhcnQiLCJyZW1vdmVDbGFzcyIsInN3aXBlRGlyZWN0aW9uIiwic2xpZGVzIiwiYWN0aXZlSW5kZXgiLCJhZGRDbGFzcyIsIm5hdmlnYXRpb24iLCJuZXh0RWwiLCJwcmV2RWwiLCJjbGljayIsImNvcHlUZXh0IiwidmFsIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwidGhlbiIsInJlbW92ZSIsInNob3ciLCJlcnIiLCJhbGVydCJdLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHAvLi9hc3NldHMvanMvYXBwLmpzPzI1ZmMiXSwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoKCkgPT4ge1xuXHQvLyBTbGlkZXJzXG5cdGNvbnN0IGNsaWVudHNTbGlkZXJPcHRpb25zUGFyYSA9IHtcblx0XHQvLyBPcHRpb25hbCBwYXJhbWV0ZXJzXG5cdFx0bG9vcDogdHJ1ZSxcblx0XHRzbGlkZXNQZXJWaWV3OiBcImF1dG9cIixcblx0XHRzcGVlZDogMjAwMCxcblx0XHRncmFiQ3Vyc29yOiBmYWxzZSxcblx0XHRtb3VzZXdoZWVsQ29udHJvbDogZmFsc2UsXG5cdFx0a2V5Ym9hcmRDb250cm9sOiB0cnVlLFxuXHR9XG5cdGNvbnN0IGNsaWVudHNTbGlkZXJUb3AgPSBuZXcgU3dpcGVyKFwiLmNsaWVudHNfX3NsaWRlclRvcFwiLCB7XG5cdFx0Li4uY2xpZW50c1NsaWRlck9wdGlvbnNQYXJhLFxuXHRcdGF1dG9wbGF5OiB7XG5cdFx0XHRkZWxheTogMCxcblx0XHRcdGRpc2FibGVPbkludGVyYWN0aW9uOiB0cnVlLFxuXHRcdH0sXG5cdH0pXG5cblx0Y29uc3QgY2xpZW50c1NsaWRlckJvdHRvbSA9IG5ldyBTd2lwZXIoXCIuY2xpZW50c19fc2xpZGVyQm90dG9tXCIsIHtcblx0XHQuLi5jbGllbnRzU2xpZGVyT3B0aW9uc1BhcmEsXG5cdFx0YXV0b3BsYXk6IHtcblx0XHRcdGRlbGF5OiAwLFxuXHRcdFx0cmV2ZXJzZURpcmVjdGlvbjogdHJ1ZSxcblx0XHRcdGRpc2FibGVPbkludGVyYWN0aW9uOiB0cnVlLFxuXHRcdH0sXG5cdH0pXG5cblx0Y29uc3QgZmVlZGJhY2tSaWJib25TbGlkZXIgPSBuZXcgU3dpcGVyKFwiLmZlZWRiYWNrX19yaWJib25cIiwge1xuXHRcdC4uLmNsaWVudHNTbGlkZXJPcHRpb25zUGFyYSxcblx0XHRzcGVlZDogNDAwMCxcblx0XHRhdXRvcGxheToge1xuXHRcdFx0ZGVsYXk6IDAsXG5cdFx0XHRkaXNhYmxlT25JbnRlcmFjdGlvbjogdHJ1ZSxcblx0XHR9LFxuXHR9KVxuXG5cdGxldCBwcmV2aW91c0luZGV4ID0gMCAvLyBUbyB0cmFjayB0aGUgZGlyZWN0aW9uIG9mIHNsaWRlIGNoYW5nZVxuXG5cdGNvbnN0IGZlZWRiYWNrU2xpZGVyID0gbmV3IFN3aXBlcihcIi5mZWVkYmFja19fc2xpZGVyXCIsIHtcblx0XHRsb29wOiB0cnVlLFxuXHRcdG9uOiB7XG5cdFx0XHRzbGlkZUNoYW5nZVRyYW5zaXRpb25TdGFydDogKCkgPT4ge1xuXHRcdFx0XHQkKFwiLnN3aXBlci1zbGlkZVwiKS5yZW1vdmVDbGFzcyhcblx0XHRcdFx0XHRcInN3aXBlci1zbGlkZS1yb3RhdGUtbmV4dCBzd2lwZXItc2xpZGUtcm90YXRlLXByZXZcIlxuXHRcdFx0XHQpXG5cblx0XHRcdFx0aWYgKGZlZWRiYWNrU2xpZGVyLnN3aXBlRGlyZWN0aW9uID09PSBcIm5leHRcIikge1xuXHRcdFx0XHRcdCQoXG5cdFx0XHRcdFx0XHRmZWVkYmFja1NsaWRlci5zbGlkZXNbZmVlZGJhY2tTbGlkZXIuYWN0aXZlSW5kZXhdXG5cdFx0XHRcdFx0KS5hZGRDbGFzcyhcInN3aXBlci1zbGlkZS1yb3RhdGUtbmV4dFwiKVxuXHRcdFx0XHR9IGVsc2UgaWYgKGZlZWRiYWNrU2xpZGVyLnN3aXBlRGlyZWN0aW9uID09PSBcInByZXZcIikge1xuXHRcdFx0XHRcdCQoXG5cdFx0XHRcdFx0XHRmZWVkYmFja1NsaWRlci5zbGlkZXNbZmVlZGJhY2tTbGlkZXIuYWN0aXZlSW5kZXhdXG5cdFx0XHRcdFx0KS5hZGRDbGFzcyhcInN3aXBlci1zbGlkZS1yb3RhdGUtcHJldlwiKVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0bmF2aWdhdGlvbjoge1xuXHRcdFx0bmV4dEVsOiBcIi5zd2lwZXItYnV0dG9uLW5leHRcIixcblx0XHRcdHByZXZFbDogXCIuc3dpcGVyLWJ1dHRvbi1wcmV2XCIsXG5cdFx0fSxcblx0fSlcblxuXHQvLyBDb3B5IGVtYWlsIGZ1bmN0aW9uYWxpdHlcblx0JChcIi5mb290ZXJfX2NvcHlMaW5rXCIpLmNsaWNrKCgpID0+IHtcblx0XHRsZXQgY29weVRleHQgPSAkKFwiLmZvb3Rlcl9fZW1haWxcIikudmFsKClcblx0XHRuYXZpZ2F0b3IuY2xpcGJvYXJkXG5cdFx0XHQud3JpdGVUZXh0KGNvcHlUZXh0KVxuXHRcdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0XHQkKFwiLmZvb3Rlcl9fY29weUxpbmtcIikucmVtb3ZlKClcblx0XHRcdFx0JChcIi5mb290ZXJfX2NvcGllZFRleHRcIikuc2hvdygpXG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKChlcnIpID0+IHtcblx0XHRcdFx0YWxlcnQoXCJGYWlsZWQgdG8gY29weSB0aGUgbGluazog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\n//# sourceURL=webpack-internal:///./assets/js/app.js\n");

/***/ }),

/***/ "./assets/sass/app.scss":
/*!******************************!*\
  !*** ./assets/sass/app.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hc3NldHMvc2Fzcy9hcHAuc2NzcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHAvLi9hc3NldHMvc2Fzcy9hcHAuc2Nzcz9jMGUzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./assets/sass/app.scss\n");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/assets/dist/js/app": 0,
/******/ 			"assets/dist/css/app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkapp"] = self["webpackChunkapp"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["assets/dist/css/app"], () => (__webpack_require__("./assets/js/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["assets/dist/css/app"], () => (__webpack_require__("./assets/sass/app.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;