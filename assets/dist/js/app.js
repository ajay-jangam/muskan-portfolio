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

eval("function _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n$(document).ready(function () {\n  // Sliders\n  var clientsSliderOptionsPara = {\n    // Optional parameters\n    loop: true,\n    slidesPerView: \"auto\",\n    speed: 2000,\n    grabCursor: false,\n    mousewheelControl: false,\n    keyboardControl: true\n  };\n  var clientsSliderTop = new Swiper(\".clients__sliderTop\", _objectSpread(_objectSpread({}, clientsSliderOptionsPara), {}, {\n    autoplay: {\n      delay: 0,\n      disableOnInteraction: true\n    }\n  }));\n  var clientsSliderBottom = new Swiper(\".clients__sliderBottom\", _objectSpread(_objectSpread({}, clientsSliderOptionsPara), {}, {\n    autoplay: {\n      delay: 0,\n      reverseDirection: true,\n      disableOnInteraction: true\n    }\n  }));\n  var feedbackRibbonSlider = new Swiper(\".feedback__ribbon\", _objectSpread(_objectSpread({}, clientsSliderOptionsPara), {}, {\n    // speed: 4000,\n    autoplay: {\n      delay: 0,\n      disableOnInteraction: true\n    }\n  }));\n  var aboutSlide = new Swiper(\".about__slider\", _objectSpread(_objectSpread({}, clientsSliderOptionsPara), {}, {\n    speed: 1000,\n    autoplay: {\n      delay: 0,\n      disableOnInteraction: false\n    }\n  }));\n  var previousIndex = 0; // To track the direction of slide change\n\n  var feedbackSlider = new Swiper(\".feedback__slider\", {\n    loop: true,\n    on: {\n      slideChangeTransitionStart: function slideChangeTransitionStart() {\n        $(\".swiper-slide\").removeClass(\"swiper-slide-rotate-next swiper-slide-rotate-prev\");\n        if (feedbackSlider.swipeDirection === \"next\") {\n          $(feedbackSlider.slides[feedbackSlider.activeIndex]).addClass(\"swiper-slide-rotate-next\");\n        } else if (feedbackSlider.swipeDirection === \"prev\") {\n          $(feedbackSlider.slides[feedbackSlider.activeIndex]).addClass(\"swiper-slide-rotate-prev\");\n        }\n      }\n    },\n    navigation: {\n      nextEl: \".swiper-button-next\",\n      prevEl: \".swiper-button-prev\"\n    }\n  });\n\n  // Copy email functionality\n  $(\".footer__copyLink\").click(function () {\n    var copyText = $(\".footer__email\").val();\n    navigator.clipboard.writeText(copyText).then(function () {\n      $(\".footer__copyLink\").remove();\n      $(\".footer__copiedText\").show();\n    })[\"catch\"](function (err) {\n      alert(\"Failed to copy the link: \", err);\n    });\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsImNsaWVudHNTbGlkZXJPcHRpb25zUGFyYSIsImxvb3AiLCJzbGlkZXNQZXJWaWV3Iiwic3BlZWQiLCJncmFiQ3Vyc29yIiwibW91c2V3aGVlbENvbnRyb2wiLCJrZXlib2FyZENvbnRyb2wiLCJjbGllbnRzU2xpZGVyVG9wIiwiU3dpcGVyIiwiYXV0b3BsYXkiLCJkZWxheSIsImRpc2FibGVPbkludGVyYWN0aW9uIiwiY2xpZW50c1NsaWRlckJvdHRvbSIsInJldmVyc2VEaXJlY3Rpb24iLCJmZWVkYmFja1JpYmJvblNsaWRlciIsImFib3V0U2xpZGUiLCJwcmV2aW91c0luZGV4IiwiZmVlZGJhY2tTbGlkZXIiLCJvbiIsInNsaWRlQ2hhbmdlVHJhbnNpdGlvblN0YXJ0IiwicmVtb3ZlQ2xhc3MiLCJzd2lwZURpcmVjdGlvbiIsInNsaWRlcyIsImFjdGl2ZUluZGV4IiwiYWRkQ2xhc3MiLCJuYXZpZ2F0aW9uIiwibmV4dEVsIiwicHJldkVsIiwiY2xpY2siLCJjb3B5VGV4dCIsInZhbCIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInRoZW4iLCJyZW1vdmUiLCJzaG93IiwiZXJyIiwiYWxlcnQiXSwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXBwLy4vYXNzZXRzL2pzL2FwcC5qcz8yNWZjIl0sInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KCgpID0+IHtcbiAgICAvLyBTbGlkZXJzXG4gICAgY29uc3QgY2xpZW50c1NsaWRlck9wdGlvbnNQYXJhID0ge1xuICAgICAgICAvLyBPcHRpb25hbCBwYXJhbWV0ZXJzXG4gICAgICAgIGxvb3A6IHRydWUsXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IFwiYXV0b1wiLFxuICAgICAgICBzcGVlZDogMjAwMCxcbiAgICAgICAgZ3JhYkN1cnNvcjogZmFsc2UsXG4gICAgICAgIG1vdXNld2hlZWxDb250cm9sOiBmYWxzZSxcbiAgICAgICAga2V5Ym9hcmRDb250cm9sOiB0cnVlLFxuICAgIH07XG4gICAgY29uc3QgY2xpZW50c1NsaWRlclRvcCA9IG5ldyBTd2lwZXIoXCIuY2xpZW50c19fc2xpZGVyVG9wXCIsIHtcbiAgICAgICAgLi4uY2xpZW50c1NsaWRlck9wdGlvbnNQYXJhLFxuICAgICAgICBhdXRvcGxheToge1xuICAgICAgICAgICAgZGVsYXk6IDAsXG4gICAgICAgICAgICBkaXNhYmxlT25JbnRlcmFjdGlvbjogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICB9KTtcblxuICAgIGNvbnN0IGNsaWVudHNTbGlkZXJCb3R0b20gPSBuZXcgU3dpcGVyKFwiLmNsaWVudHNfX3NsaWRlckJvdHRvbVwiLCB7XG4gICAgICAgIC4uLmNsaWVudHNTbGlkZXJPcHRpb25zUGFyYSxcbiAgICAgICAgYXV0b3BsYXk6IHtcbiAgICAgICAgICAgIGRlbGF5OiAwLFxuICAgICAgICAgICAgcmV2ZXJzZURpcmVjdGlvbjogdHJ1ZSxcbiAgICAgICAgICAgIGRpc2FibGVPbkludGVyYWN0aW9uOiB0cnVlLFxuICAgICAgICB9LFxuICAgIH0pO1xuXG4gICAgY29uc3QgZmVlZGJhY2tSaWJib25TbGlkZXIgPSBuZXcgU3dpcGVyKFwiLmZlZWRiYWNrX19yaWJib25cIiwge1xuICAgICAgICAuLi5jbGllbnRzU2xpZGVyT3B0aW9uc1BhcmEsXG4gICAgICAgIC8vIHNwZWVkOiA0MDAwLFxuICAgICAgICBhdXRvcGxheToge1xuICAgICAgICAgICAgZGVsYXk6IDAsXG4gICAgICAgICAgICBkaXNhYmxlT25JbnRlcmFjdGlvbjogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICB9KTtcblxuICAgIGNvbnN0IGFib3V0U2xpZGUgPSBuZXcgU3dpcGVyKFwiLmFib3V0X19zbGlkZXJcIiwge1xuICAgICAgICAuLi5jbGllbnRzU2xpZGVyT3B0aW9uc1BhcmEsXG4gICAgICAgIHNwZWVkOiAxMDAwLFxuICAgICAgICBhdXRvcGxheToge1xuICAgICAgICAgICAgZGVsYXk6IDAsXG4gICAgICAgICAgICBkaXNhYmxlT25JbnRlcmFjdGlvbjogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBsZXQgcHJldmlvdXNJbmRleCA9IDA7IC8vIFRvIHRyYWNrIHRoZSBkaXJlY3Rpb24gb2Ygc2xpZGUgY2hhbmdlXG5cbiAgICBjb25zdCBmZWVkYmFja1NsaWRlciA9IG5ldyBTd2lwZXIoXCIuZmVlZGJhY2tfX3NsaWRlclwiLCB7XG4gICAgICAgIGxvb3A6IHRydWUsXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgICBzbGlkZUNoYW5nZVRyYW5zaXRpb25TdGFydDogKCkgPT4ge1xuICAgICAgICAgICAgICAgICQoXCIuc3dpcGVyLXNsaWRlXCIpLnJlbW92ZUNsYXNzKFxuICAgICAgICAgICAgICAgICAgICBcInN3aXBlci1zbGlkZS1yb3RhdGUtbmV4dCBzd2lwZXItc2xpZGUtcm90YXRlLXByZXZcIlxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICBpZiAoZmVlZGJhY2tTbGlkZXIuc3dpcGVEaXJlY3Rpb24gPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICQoXG4gICAgICAgICAgICAgICAgICAgICAgICBmZWVkYmFja1NsaWRlci5zbGlkZXNbZmVlZGJhY2tTbGlkZXIuYWN0aXZlSW5kZXhdXG4gICAgICAgICAgICAgICAgICAgICkuYWRkQ2xhc3MoXCJzd2lwZXItc2xpZGUtcm90YXRlLW5leHRcIik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChmZWVkYmFja1NsaWRlci5zd2lwZURpcmVjdGlvbiA9PT0gXCJwcmV2XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgJChcbiAgICAgICAgICAgICAgICAgICAgICAgIGZlZWRiYWNrU2xpZGVyLnNsaWRlc1tmZWVkYmFja1NsaWRlci5hY3RpdmVJbmRleF1cbiAgICAgICAgICAgICAgICAgICAgKS5hZGRDbGFzcyhcInN3aXBlci1zbGlkZS1yb3RhdGUtcHJldlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICAgICAgICBuZXh0RWw6IFwiLnN3aXBlci1idXR0b24tbmV4dFwiLFxuICAgICAgICAgICAgcHJldkVsOiBcIi5zd2lwZXItYnV0dG9uLXByZXZcIixcbiAgICAgICAgfSxcbiAgICB9KTtcblxuICAgIC8vIENvcHkgZW1haWwgZnVuY3Rpb25hbGl0eVxuICAgICQoXCIuZm9vdGVyX19jb3B5TGlua1wiKS5jbGljaygoKSA9PiB7XG4gICAgICAgIGxldCBjb3B5VGV4dCA9ICQoXCIuZm9vdGVyX19lbWFpbFwiKS52YWwoKTtcbiAgICAgICAgbmF2aWdhdG9yLmNsaXBib2FyZFxuICAgICAgICAgICAgLndyaXRlVGV4dChjb3B5VGV4dClcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAkKFwiLmZvb3Rlcl9fY29weUxpbmtcIikucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgJChcIi5mb290ZXJfX2NvcGllZFRleHRcIikuc2hvdygpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgYWxlcnQoXCJGYWlsZWQgdG8gY29weSB0aGUgbGluazogXCIsIGVycik7XG4gICAgICAgICAgICB9KTtcbiAgICB9KTtcbn0pO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQUEsQ0FBQyxDQUFDQyxRQUFRLENBQUMsQ0FBQ0MsS0FBSyxDQUFDLFlBQU07RUFDcEI7RUFDQSxJQUFNQyx3QkFBd0IsR0FBRztJQUM3QjtJQUNBQyxJQUFJLEVBQUUsSUFBSTtJQUNWQyxhQUFhLEVBQUUsTUFBTTtJQUNyQkMsS0FBSyxFQUFFLElBQUk7SUFDWEMsVUFBVSxFQUFFLEtBQUs7SUFDakJDLGlCQUFpQixFQUFFLEtBQUs7SUFDeEJDLGVBQWUsRUFBRTtFQUNyQixDQUFDO0VBQ0QsSUFBTUMsZ0JBQWdCLEdBQUcsSUFBSUMsTUFBTSxDQUFDLHFCQUFxQixrQ0FDbERSLHdCQUF3QjtJQUMzQlMsUUFBUSxFQUFFO01BQ05DLEtBQUssRUFBRSxDQUFDO01BQ1JDLG9CQUFvQixFQUFFO0lBQzFCO0VBQUMsR0FDSDtFQUVGLElBQU1DLG1CQUFtQixHQUFHLElBQUlKLE1BQU0sQ0FBQyx3QkFBd0Isa0NBQ3hEUix3QkFBd0I7SUFDM0JTLFFBQVEsRUFBRTtNQUNOQyxLQUFLLEVBQUUsQ0FBQztNQUNSRyxnQkFBZ0IsRUFBRSxJQUFJO01BQ3RCRixvQkFBb0IsRUFBRTtJQUMxQjtFQUFDLEdBQ0g7RUFFRixJQUFNRyxvQkFBb0IsR0FBRyxJQUFJTixNQUFNLENBQUMsbUJBQW1CLGtDQUNwRFIsd0JBQXdCO0lBQzNCO0lBQ0FTLFFBQVEsRUFBRTtNQUNOQyxLQUFLLEVBQUUsQ0FBQztNQUNSQyxvQkFBb0IsRUFBRTtJQUMxQjtFQUFDLEdBQ0g7RUFFRixJQUFNSSxVQUFVLEdBQUcsSUFBSVAsTUFBTSxDQUFDLGdCQUFnQixrQ0FDdkNSLHdCQUF3QjtJQUMzQkcsS0FBSyxFQUFFLElBQUk7SUFDWE0sUUFBUSxFQUFFO01BQ05DLEtBQUssRUFBRSxDQUFDO01BQ1JDLG9CQUFvQixFQUFFO0lBQzFCO0VBQUMsR0FDSDtFQUVGLElBQUlLLGFBQWEsR0FBRyxDQUFDLENBQUMsQ0FBQzs7RUFFdkIsSUFBTUMsY0FBYyxHQUFHLElBQUlULE1BQU0sQ0FBQyxtQkFBbUIsRUFBRTtJQUNuRFAsSUFBSSxFQUFFLElBQUk7SUFDVmlCLEVBQUUsRUFBRTtNQUNBQywwQkFBMEIsRUFBRSxzQ0FBTTtRQUM5QnRCLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQ3VCLFdBQVcsQ0FDMUIsbURBQW1ELENBQ3REO1FBRUQsSUFBSUgsY0FBYyxDQUFDSSxjQUFjLEtBQUssTUFBTSxFQUFFO1VBQzFDeEIsQ0FBQyxDQUNHb0IsY0FBYyxDQUFDSyxNQUFNLENBQUNMLGNBQWMsQ0FBQ00sV0FBVyxDQUFDLENBQ3BELENBQUNDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQztRQUMxQyxDQUFDLE1BQU0sSUFBSVAsY0FBYyxDQUFDSSxjQUFjLEtBQUssTUFBTSxFQUFFO1VBQ2pEeEIsQ0FBQyxDQUNHb0IsY0FBYyxDQUFDSyxNQUFNLENBQUNMLGNBQWMsQ0FBQ00sV0FBVyxDQUFDLENBQ3BELENBQUNDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQztRQUMxQztNQUNKO0lBQ0osQ0FBQztJQUNEQyxVQUFVLEVBQUU7TUFDUkMsTUFBTSxFQUFFLHFCQUFxQjtNQUM3QkMsTUFBTSxFQUFFO0lBQ1o7RUFDSixDQUFDLENBQUM7O0VBRUY7RUFDQTlCLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDK0IsS0FBSyxDQUFDLFlBQU07SUFDL0IsSUFBSUMsUUFBUSxHQUFHaEMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUNpQyxHQUFHLEVBQUU7SUFDeENDLFNBQVMsQ0FBQ0MsU0FBUyxDQUNkQyxTQUFTLENBQUNKLFFBQVEsQ0FBQyxDQUNuQkssSUFBSSxDQUFDLFlBQU07TUFDUnJDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDc0MsTUFBTSxFQUFFO01BQy9CdEMsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUN1QyxJQUFJLEVBQUU7SUFDbkMsQ0FBQyxDQUFDLFNBQ0ksQ0FBQyxVQUFDQyxHQUFHLEVBQUs7TUFDWkMsS0FBSyxDQUFDLDJCQUEyQixFQUFFRCxHQUFHLENBQUM7SUFDM0MsQ0FBQyxDQUFDO0VBQ1YsQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDIiwiZmlsZSI6Ii4vYXNzZXRzL2pzL2FwcC5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./assets/js/app.js\n");

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