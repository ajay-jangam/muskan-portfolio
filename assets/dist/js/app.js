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

eval("function _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n$(document).ready(function () {\n  // Load more Functionality\n  $(\".projects__single\").slice(0, 2).css(\"display\", \"flex\").show();\n  var isExpanded = false;\n  $(\".projects__button\").click(function (e) {\n    e.preventDefault();\n    isExpanded ? $(\".projects__single:visible\").slice(-3).slideUp(\"slow\", function () {\n      $(this).css(\"display\", \"none\");\n    }) : $(\".projects__single:hidden\").slice(0, 3).css(\"display\", \"flex\").slideDown(\"slow\");\n    $(\".projects__buttonArrow\").css(\"rotate\", isExpanded ? \"0deg\" : \"180deg\");\n    isExpanded = !isExpanded;\n  });\n\n  // Sliders\n  var clientsSliderOptionsPara = {\n    // Optional parameters\n    loop: true,\n    spaceBetween: false,\n    autoplay: {\n      delay: 0,\n      disableOnInteraction: true\n    },\n    slidesPerView: \"auto\",\n    speed: 5000,\n    grabCursor: false,\n    mousewheelControl: false,\n    keyboardControl: true\n  };\n  var clientsSliderTop = new Swiper(\".clients__sliderTop\", _objectSpread({}, clientsSliderOptionsPara));\n  var clientsSliderBottom = new Swiper(\".clients__sliderBottom\", _objectSpread(_objectSpread({}, clientsSliderOptionsPara), {}, {\n    autoplay: {\n      reverseDirection: true\n    }\n  }));\n  var feedbackRibbonSlider = new Swiper(\".feedback__ribbon\", _objectSpread({}, clientsSliderOptionsPara));\n  var previousIndex = 0; // To track the direction of slide change\n\n  var feedbackSlider = new Swiper(\".feedback__slider\", {\n    loop: true,\n    effect: \"slide\",\n    // Set initial effect\n    // on: {\n    // \tslideChangeTransitionStart: function () {\n    // \t\tconst activeSlide = this.slides[this.activeIndex]\n    // \t\tactiveSlide.classList.add(\"rotating-slide\")\n    // \t},\n    // \tslideChangeTransitionEnd: function () {\n    // \t\tconst activeSlide = this.slides[this.activeIndex]\n    // \t\tactiveSlide.classList.remove(\"rotating-slide\")\n    // \t},\n    // },\n    slidesPerView: \"auto\",\n    navigation: {\n      nextEl: \".swiper-button-next\",\n      prevEl: \".swiper-button-prev\"\n    }\n  });\n\n  // Copy email functionality\n  $(\".footer__copyLink\").click(function () {\n    var copyText = $(\".footer__email\").val();\n    navigator.clipboard.writeText(copyText).then(function () {\n      $(\".footer__copyLink\").remove();\n      $(\".footer__copiedText\").show();\n    })[\"catch\"](function (err) {\n      alert(\"Failed to copy the link: \", err);\n    });\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hc3NldHMvanMvYXBwLmpzIiwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJzbGljZSIsImNzcyIsInNob3ciLCJpc0V4cGFuZGVkIiwiY2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJzbGlkZVVwIiwic2xpZGVEb3duIiwiY2xpZW50c1NsaWRlck9wdGlvbnNQYXJhIiwibG9vcCIsInNwYWNlQmV0d2VlbiIsImF1dG9wbGF5IiwiZGVsYXkiLCJkaXNhYmxlT25JbnRlcmFjdGlvbiIsInNsaWRlc1BlclZpZXciLCJzcGVlZCIsImdyYWJDdXJzb3IiLCJtb3VzZXdoZWVsQ29udHJvbCIsImtleWJvYXJkQ29udHJvbCIsImNsaWVudHNTbGlkZXJUb3AiLCJTd2lwZXIiLCJjbGllbnRzU2xpZGVyQm90dG9tIiwicmV2ZXJzZURpcmVjdGlvbiIsImZlZWRiYWNrUmliYm9uU2xpZGVyIiwicHJldmlvdXNJbmRleCIsImZlZWRiYWNrU2xpZGVyIiwiZWZmZWN0IiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCIsImNvcHlUZXh0IiwidmFsIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwidGhlbiIsInJlbW92ZSIsImVyciIsImFsZXJ0Il0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHAvLi9hc3NldHMvanMvYXBwLmpzPzI1ZmMiXSwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuXHQvLyBMb2FkIG1vcmUgRnVuY3Rpb25hbGl0eVxuXHQkKFwiLnByb2plY3RzX19zaW5nbGVcIikuc2xpY2UoMCwgMikuY3NzKFwiZGlzcGxheVwiLCBcImZsZXhcIikuc2hvdygpXG5cdGxldCBpc0V4cGFuZGVkID0gZmFsc2VcblxuXHQkKFwiLnByb2plY3RzX19idXR0b25cIikuY2xpY2soZnVuY3Rpb24gKGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KClcblxuXHRcdGlzRXhwYW5kZWRcblx0XHRcdD8gJChcIi5wcm9qZWN0c19fc2luZ2xlOnZpc2libGVcIilcblx0XHRcdFx0XHQuc2xpY2UoLTMpXG5cdFx0XHRcdFx0LnNsaWRlVXAoXCJzbG93XCIsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdCQodGhpcykuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIilcblx0XHRcdFx0XHR9KVxuXHRcdFx0OiAkKFwiLnByb2plY3RzX19zaW5nbGU6aGlkZGVuXCIpXG5cdFx0XHRcdFx0LnNsaWNlKDAsIDMpXG5cdFx0XHRcdFx0LmNzcyhcImRpc3BsYXlcIiwgXCJmbGV4XCIpXG5cdFx0XHRcdFx0LnNsaWRlRG93bihcInNsb3dcIilcblxuXHRcdCQoXCIucHJvamVjdHNfX2J1dHRvbkFycm93XCIpLmNzcyhcblx0XHRcdFwicm90YXRlXCIsXG5cdFx0XHRpc0V4cGFuZGVkID8gXCIwZGVnXCIgOiBcIjE4MGRlZ1wiXG5cdFx0KVxuXHRcdGlzRXhwYW5kZWQgPSAhaXNFeHBhbmRlZFxuXHR9KVxuXG5cdC8vIFNsaWRlcnNcblx0Y29uc3QgY2xpZW50c1NsaWRlck9wdGlvbnNQYXJhID0ge1xuXHRcdC8vIE9wdGlvbmFsIHBhcmFtZXRlcnNcblx0XHRsb29wOiB0cnVlLFxuXHRcdHNwYWNlQmV0d2VlbjogZmFsc2UsXG5cdFx0YXV0b3BsYXk6IHtcblx0XHRcdGRlbGF5OiAwLFxuXHRcdFx0ZGlzYWJsZU9uSW50ZXJhY3Rpb246IHRydWUsXG5cdFx0fSxcblx0XHRzbGlkZXNQZXJWaWV3OiBcImF1dG9cIixcblx0XHRzcGVlZDogNTAwMCxcblx0XHRncmFiQ3Vyc29yOiBmYWxzZSxcblx0XHRtb3VzZXdoZWVsQ29udHJvbDogZmFsc2UsXG5cdFx0a2V5Ym9hcmRDb250cm9sOiB0cnVlLFxuXHR9XG5cdGNvbnN0IGNsaWVudHNTbGlkZXJUb3AgPSBuZXcgU3dpcGVyKFwiLmNsaWVudHNfX3NsaWRlclRvcFwiLCB7XG5cdFx0Li4uY2xpZW50c1NsaWRlck9wdGlvbnNQYXJhLFxuXHR9KVxuXG5cdGNvbnN0IGNsaWVudHNTbGlkZXJCb3R0b20gPSBuZXcgU3dpcGVyKFwiLmNsaWVudHNfX3NsaWRlckJvdHRvbVwiLCB7XG5cdFx0Li4uY2xpZW50c1NsaWRlck9wdGlvbnNQYXJhLFxuXHRcdGF1dG9wbGF5OiB7XG5cdFx0XHRyZXZlcnNlRGlyZWN0aW9uOiB0cnVlLFxuXHRcdH0sXG5cdH0pXG5cblx0Y29uc3QgZmVlZGJhY2tSaWJib25TbGlkZXIgPSBuZXcgU3dpcGVyKFwiLmZlZWRiYWNrX19yaWJib25cIiwge1xuXHRcdC4uLmNsaWVudHNTbGlkZXJPcHRpb25zUGFyYSxcblx0fSlcblxuXHRsZXQgcHJldmlvdXNJbmRleCA9IDAgLy8gVG8gdHJhY2sgdGhlIGRpcmVjdGlvbiBvZiBzbGlkZSBjaGFuZ2VcblxuXHRjb25zdCBmZWVkYmFja1NsaWRlciA9IG5ldyBTd2lwZXIoXCIuZmVlZGJhY2tfX3NsaWRlclwiLCB7XG5cdFx0bG9vcDogdHJ1ZSxcblx0XHRlZmZlY3Q6IFwic2xpZGVcIiwgLy8gU2V0IGluaXRpYWwgZWZmZWN0XG5cdFx0Ly8gb246IHtcblx0XHQvLyBcdHNsaWRlQ2hhbmdlVHJhbnNpdGlvblN0YXJ0OiBmdW5jdGlvbiAoKSB7XG5cdFx0Ly8gXHRcdGNvbnN0IGFjdGl2ZVNsaWRlID0gdGhpcy5zbGlkZXNbdGhpcy5hY3RpdmVJbmRleF1cblx0XHQvLyBcdFx0YWN0aXZlU2xpZGUuY2xhc3NMaXN0LmFkZChcInJvdGF0aW5nLXNsaWRlXCIpXG5cdFx0Ly8gXHR9LFxuXHRcdC8vIFx0c2xpZGVDaGFuZ2VUcmFuc2l0aW9uRW5kOiBmdW5jdGlvbiAoKSB7XG5cdFx0Ly8gXHRcdGNvbnN0IGFjdGl2ZVNsaWRlID0gdGhpcy5zbGlkZXNbdGhpcy5hY3RpdmVJbmRleF1cblx0XHQvLyBcdFx0YWN0aXZlU2xpZGUuY2xhc3NMaXN0LnJlbW92ZShcInJvdGF0aW5nLXNsaWRlXCIpXG5cdFx0Ly8gXHR9LFxuXHRcdC8vIH0sXG5cdFx0c2xpZGVzUGVyVmlldzogXCJhdXRvXCIsXG5cdFx0bmF2aWdhdGlvbjoge1xuXHRcdFx0bmV4dEVsOiBcIi5zd2lwZXItYnV0dG9uLW5leHRcIixcblx0XHRcdHByZXZFbDogXCIuc3dpcGVyLWJ1dHRvbi1wcmV2XCIsXG5cdFx0fSxcblx0fSlcblxuXHQvLyBDb3B5IGVtYWlsIGZ1bmN0aW9uYWxpdHlcblx0JChcIi5mb290ZXJfX2NvcHlMaW5rXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcblx0XHRsZXQgY29weVRleHQgPSAkKFwiLmZvb3Rlcl9fZW1haWxcIikudmFsKClcblx0XHRuYXZpZ2F0b3IuY2xpcGJvYXJkXG5cdFx0XHQud3JpdGVUZXh0KGNvcHlUZXh0KVxuXHRcdFx0LnRoZW4oKCkgPT4ge1xuXHRcdFx0XHQkKFwiLmZvb3Rlcl9fY29weUxpbmtcIikucmVtb3ZlKClcblx0XHRcdFx0JChcIi5mb290ZXJfX2NvcGllZFRleHRcIikuc2hvdygpXG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKChlcnIpID0+IHtcblx0XHRcdFx0YWxlcnQoXCJGYWlsZWQgdG8gY29weSB0aGUgbGluazogXCIsIGVycilcblx0XHRcdH0pXG5cdH0pXG59KVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQUEsQ0FBQyxDQUFDQyxRQUFRLENBQUMsQ0FBQ0MsS0FBSyxDQUFDLFlBQVk7RUFDN0I7RUFDQUYsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUNHLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUNDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUNDLElBQUksRUFBRTtFQUNoRSxJQUFJQyxVQUFVLEdBQUcsS0FBSztFQUV0Qk4sQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUNPLEtBQUssQ0FBQyxVQUFVQyxDQUFDLEVBQUU7SUFDekNBLENBQUMsQ0FBQ0MsY0FBYyxFQUFFO0lBRWxCSCxVQUFVLEdBQ1BOLENBQUMsQ0FBQywyQkFBMkIsQ0FBQyxDQUM3QkcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFD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\n//# sourceURL=webpack-internal:///./assets/js/app.js\n");

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