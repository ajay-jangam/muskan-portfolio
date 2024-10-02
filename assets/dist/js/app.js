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

eval("function _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n$(document).ready(function () {\n  // Hamburger Menu\n  $(\".navbar .navbar-toggler\").click(function () {\n    console.log(\"kjndlkjn\");\n    $(\".navbar\").toggleClass(\"hamburgerMenu\");\n  });\n  // Sliders\n  var clientsSliderOptionsPara = {\n    // Optional parameters\n    loop: true,\n    slidesPerView: \"auto\",\n    parallax: true,\n    grabCursor: false,\n    mousewheelControl: false,\n    keyboardControl: true,\n    speed: 1500,\n    allowTouchMove: false\n  };\n  var clientsSliderTop = new Swiper(\".clients__sliderTop\", _objectSpread(_objectSpread({}, clientsSliderOptionsPara), {}, {\n    autoplay: {\n      delay: 0,\n      disableOnInteraction: false\n    }\n  }));\n  var clientsSliderBottom = new Swiper(\".clients__sliderBottom\", _objectSpread(_objectSpread({}, clientsSliderOptionsPara), {}, {\n    autoplay: {\n      delay: 0,\n      reverseDirection: true,\n      disableOnInteraction: false\n    }\n  }));\n  var clientsSliderLeft = new Swiper(\".projectHero__sliderLeft\", {\n    slidesPerView: 5,\n    speed: 1000,\n    mousewheel: true,\n    grabCursor: true,\n    loop: true,\n    autoplay: {\n      delay: 0,\n      disableOnInteraction: false\n    },\n    breakpoints: {\n      300: {\n        direction: \"horizontal\"\n      },\n      769: {\n        direction: \"vertical\"\n      }\n    }\n  });\n  var clientsSlider = new Swiper(\".projectHero__sliderRight\", {\n    direction: \"vertical\",\n    slidesPerView: 5,\n    speed: 1000,\n    mousewheel: true,\n    grabCursor: true,\n    loop: true,\n    autoplay: {\n      delay: 0,\n      reverseDirection: true,\n      disableOnInteraction: false\n    },\n    breakpoints: {\n      300: {\n        direction: \"horizontal\"\n      },\n      769: {\n        direction: \"vertical\"\n      }\n    }\n  });\n  var feedbackRibbonSlider = new Swiper(\".feedback__ribbon\", _objectSpread(_objectSpread({}, clientsSliderOptionsPara), {}, {\n    speed: 1000,\n    autoplay: {\n      delay: 0,\n      disableOnInteraction: true\n    }\n  }));\n  var aboutSlide = new Swiper(\".about__slider\", _objectSpread(_objectSpread({}, clientsSliderOptionsPara), {}, {\n    speed: 1000,\n    autoplay: {\n      delay: 0,\n      pauseOnMouseEnter: true,\n      disableOnInteraction: false\n    }\n  }));\n  var previousIndex = 0; // To track the direction of slide change\n\n  var feedbackSlider = new Swiper(\".feedback__slider\", {\n    loop: true,\n    on: {\n      slideChangeTransitionStart: function slideChangeTransitionStart() {\n        $(\".swiper-slide\").removeClass(\"swiper-slide-rotate-next swiper-slide-rotate-prev\");\n        if (feedbackSlider.swipeDirection === \"next\") {\n          $(feedbackSlider.slides[feedbackSlider.activeIndex]).addClass(\"swiper-slide-rotate-next\");\n        } else if (feedbackSlider.swipeDirection === \"prev\") {\n          $(feedbackSlider.slides[feedbackSlider.activeIndex]).addClass(\"swiper-slide-rotate-prev\");\n        }\n      }\n    },\n    navigation: {\n      nextEl: \".swiper-button-next\",\n      prevEl: \".swiper-button-prev\"\n    }\n  });\n  console.log(\"working\");\n\n  // Copy email functionality\n  function handleCopy() {\n    var copyText = $(\".footer__email\").val();\n    console.log(\"hdkha\");\n    if (navigator.clipboard && navigator.clipboard.writeText) {\n      navigator.clipboard.writeText(copyText).then(success)[\"catch\"](fail);\n    } else {\n      var $tempInput = $(\"<textarea>\").val(copyText).appendTo(\"body\").select();\n      try {\n        document.execCommand(\"copy\");\n        success();\n      } catch (err) {\n        fail(err);\n      }\n      $tempInput.remove();\n    }\n  }\n  function success() {\n    $(\".footer__copyLink\").hide();\n    $(\".footer__copiedText\").show();\n    setTimeout(function () {\n      $(\".footer__copyLink\").show();\n      $(\".footer__copiedText\").hide();\n    }, 3000);\n  }\n  function fail(err) {\n    alert(\"Failed to copy: \" + err);\n  }\n  $(\".footer__copyLink\").on(\"click\", handleCopy);\n\n  // Active class functionality\n  var currentPage = window.location.pathname;\n  $(\".navbar-nav li a.nav-link\").each(function () {\n    var linkPath = $(this).attr(\"href\");\n    if (linkPath === \"/\" && currentPage === \"/\") $(this).addClass(\"active\");else if (linkPath !== \"/\" && currentPage.indexOf(linkPath) !== -1) $(this).addClass(\"active\");\n  });\n\n  // Projects Singles count\n  if ($(\"body\").hasClass(\"project-listing\")) {\n    var projectsCount = $(\".projects__single\").length;\n    $(\".projects__buttonDesktop\").remove();\n    $(\"<p class=\\\"projects__count\\\"><span>\".concat(projectsCount, \"</span> Projects</p>\")).appendTo(\".projects__header\");\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hc3NldHMvanMvYXBwLmpzIiwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJjbGljayIsImNvbnNvbGUiLCJsb2ciLCJ0b2dnbGVDbGFzcyIsImNsaWVudHNTbGlkZXJPcHRpb25zUGFyYSIsImxvb3AiLCJzbGlkZXNQZXJWaWV3IiwicGFyYWxsYXgiLCJncmFiQ3Vyc29yIiwibW91c2V3aGVlbENvbnRyb2wiLCJrZXlib2FyZENvbnRyb2wiLCJzcGVlZCIsImFsbG93VG91Y2hNb3ZlIiwiY2xpZW50c1NsaWRlclRvcCIsIlN3aXBlciIsImF1dG9wbGF5IiwiZGVsYXkiLCJkaXNhYmxlT25JbnRlcmFjdGlvbiIsImNsaWVudHNTbGlkZXJCb3R0b20iLCJyZXZlcnNlRGlyZWN0aW9uIiwiY2xpZW50c1NsaWRlckxlZnQiLCJtb3VzZXdoZWVsIiwiYnJlYWtwb2ludHMiLCJkaXJlY3Rpb24iLCJjbGllbnRzU2xpZGVyIiwiZmVlZGJhY2tSaWJib25TbGlkZXIiLCJhYm91dFNsaWRlIiwicGF1c2VPbk1vdXNlRW50ZXIiLCJwcmV2aW91c0luZGV4IiwiZmVlZGJhY2tTbGlkZXIiLCJvbiIsInNsaWRlQ2hhbmdlVHJhbnNpdGlvblN0YXJ0IiwicmVtb3ZlQ2xhc3MiLCJzd2lwZURpcmVjdGlvbiIsInNsaWRlcyIsImFjdGl2ZUluZGV4IiwiYWRkQ2xhc3MiLCJuYXZpZ2F0aW9uIiwibmV4dEVsIiwicHJldkVsIiwiaGFuZGxlQ29weSIsImNvcHlUZXh0IiwidmFsIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwidGhlbiIsInN1Y2Nlc3MiLCJmYWlsIiwiJHRlbXBJbnB1dCIsImFwcGVuZFRvIiwic2VsZWN0IiwiZXhlY0NvbW1hbmQiLCJlcnIiLCJyZW1vdmUiLCJoaWRlIiwic2hvdyIsInNldFRpbWVvdXQiLCJhbGVydCIsImN1cnJlbnRQYWdlIiwid2luZG93IiwibG9jYXRpb24iLCJwYXRobmFtZSIsImVhY2giLCJsaW5rUGF0aCIsImF0dHIiLCJpbmRleE9mIiwiaGFzQ2xhc3MiLCJwcm9qZWN0c0NvdW50IiwibGVuZ3RoIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHAvLi9hc3NldHMvanMvYXBwLmpzPzI1ZmMiXSwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoKCkgPT4ge1xuICAgIC8vIEhhbWJ1cmdlciBNZW51XG4gICAgJChcIi5uYXZiYXIgLm5hdmJhci10b2dnbGVyXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJram5kbGtqblwiKTtcblxuICAgICAgICAkKFwiLm5hdmJhclwiKS50b2dnbGVDbGFzcyhcImhhbWJ1cmdlck1lbnVcIik7XG4gICAgfSk7XG4gICAgLy8gU2xpZGVyc1xuICAgIGNvbnN0IGNsaWVudHNTbGlkZXJPcHRpb25zUGFyYSA9IHtcbiAgICAgICAgLy8gT3B0aW9uYWwgcGFyYW1ldGVyc1xuICAgICAgICBsb29wOiB0cnVlLFxuICAgICAgICBzbGlkZXNQZXJWaWV3OiBcImF1dG9cIixcbiAgICAgICAgcGFyYWxsYXg6IHRydWUsXG4gICAgICAgIGdyYWJDdXJzb3I6IGZhbHNlLFxuICAgICAgICBtb3VzZXdoZWVsQ29udHJvbDogZmFsc2UsXG4gICAgICAgIGtleWJvYXJkQ29udHJvbDogdHJ1ZSxcbiAgICAgICAgc3BlZWQ6IDE1MDAsXG4gICAgICAgIGFsbG93VG91Y2hNb3ZlOiBmYWxzZSxcbiAgICB9O1xuICAgIGNvbnN0IGNsaWVudHNTbGlkZXJUb3AgPSBuZXcgU3dpcGVyKFwiLmNsaWVudHNfX3NsaWRlclRvcFwiLCB7XG4gICAgICAgIC4uLmNsaWVudHNTbGlkZXJPcHRpb25zUGFyYSxcbiAgICAgICAgYXV0b3BsYXk6IHtcbiAgICAgICAgICAgIGRlbGF5OiAwLFxuICAgICAgICAgICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlLFxuICAgICAgICB9LFxuICAgIH0pO1xuXG4gICAgY29uc3QgY2xpZW50c1NsaWRlckJvdHRvbSA9IG5ldyBTd2lwZXIoXCIuY2xpZW50c19fc2xpZGVyQm90dG9tXCIsIHtcbiAgICAgICAgLi4uY2xpZW50c1NsaWRlck9wdGlvbnNQYXJhLFxuICAgICAgICBhdXRvcGxheToge1xuICAgICAgICAgICAgZGVsYXk6IDAsXG4gICAgICAgICAgICByZXZlcnNlRGlyZWN0aW9uOiB0cnVlLFxuICAgICAgICAgICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlLFxuICAgICAgICB9LFxuICAgIH0pO1xuXG4gICAgY29uc3QgY2xpZW50c1NsaWRlckxlZnQgPSBuZXcgU3dpcGVyKFwiLnByb2plY3RIZXJvX19zbGlkZXJMZWZ0XCIsIHtcbiAgICAgICAgc2xpZGVzUGVyVmlldzogNSxcbiAgICAgICAgc3BlZWQ6IDEwMDAsXG4gICAgICAgIG1vdXNld2hlZWw6IHRydWUsXG4gICAgICAgIGdyYWJDdXJzb3I6IHRydWUsXG4gICAgICAgIGxvb3A6IHRydWUsXG4gICAgICAgIGF1dG9wbGF5OiB7XG4gICAgICAgICAgICBkZWxheTogMCxcbiAgICAgICAgICAgIGRpc2FibGVPbkludGVyYWN0aW9uOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgYnJlYWtwb2ludHM6IHtcbiAgICAgICAgICAgIDMwMDoge1xuICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogXCJob3Jpem9udGFsXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgNzY5OiB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uOiBcInZlcnRpY2FsXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0pO1xuXG4gICAgY29uc3QgY2xpZW50c1NsaWRlciA9IG5ldyBTd2lwZXIoXCIucHJvamVjdEhlcm9fX3NsaWRlclJpZ2h0XCIsIHtcbiAgICAgICAgZGlyZWN0aW9uOiBcInZlcnRpY2FsXCIsXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDUsXG4gICAgICAgIHNwZWVkOiAxMDAwLFxuICAgICAgICBtb3VzZXdoZWVsOiB0cnVlLFxuICAgICAgICBncmFiQ3Vyc29yOiB0cnVlLFxuICAgICAgICBsb29wOiB0cnVlLFxuICAgICAgICBhdXRvcGxheToge1xuICAgICAgICAgICAgZGVsYXk6IDAsXG4gICAgICAgICAgICByZXZlcnNlRGlyZWN0aW9uOiB0cnVlLFxuICAgICAgICAgICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICBicmVha3BvaW50czoge1xuICAgICAgICAgICAgMzAwOiB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uOiBcImhvcml6b250YWxcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICA3Njk6IHtcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246IFwidmVydGljYWxcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBjb25zdCBmZWVkYmFja1JpYmJvblNsaWRlciA9IG5ldyBTd2lwZXIoXCIuZmVlZGJhY2tfX3JpYmJvblwiLCB7XG4gICAgICAgIC4uLmNsaWVudHNTbGlkZXJPcHRpb25zUGFyYSxcbiAgICAgICAgc3BlZWQ6IDEwMDAsXG4gICAgICAgIGF1dG9wbGF5OiB7XG4gICAgICAgICAgICBkZWxheTogMCxcbiAgICAgICAgICAgIGRpc2FibGVPbkludGVyYWN0aW9uOiB0cnVlLFxuICAgICAgICB9LFxuICAgIH0pO1xuXG4gICAgY29uc3QgYWJvdXRTbGlkZSA9IG5ldyBTd2lwZXIoXCIuYWJvdXRfX3NsaWRlclwiLCB7XG4gICAgICAgIC4uLmNsaWVudHNTbGlkZXJPcHRpb25zUGFyYSxcbiAgICAgICAgc3BlZWQ6IDEwMDAsXG4gICAgICAgIGF1dG9wbGF5OiB7XG4gICAgICAgICAgICBkZWxheTogMCxcbiAgICAgICAgICAgIHBhdXNlT25Nb3VzZUVudGVyOiB0cnVlLFxuICAgICAgICAgICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlLFxuICAgICAgICB9LFxuICAgIH0pO1xuXG4gICAgbGV0IHByZXZpb3VzSW5kZXggPSAwOyAvLyBUbyB0cmFjayB0aGUgZGlyZWN0aW9uIG9mIHNsaWRlIGNoYW5nZVxuXG4gICAgY29uc3QgZmVlZGJhY2tTbGlkZXIgPSBuZXcgU3dpcGVyKFwiLmZlZWRiYWNrX19zbGlkZXJcIiwge1xuICAgICAgICBsb29wOiB0cnVlLFxuICAgICAgICBvbjoge1xuICAgICAgICAgICAgc2xpZGVDaGFuZ2VUcmFuc2l0aW9uU3RhcnQ6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAkKFwiLnN3aXBlci1zbGlkZVwiKS5yZW1vdmVDbGFzcyhcbiAgICAgICAgICAgICAgICAgICAgXCJzd2lwZXItc2xpZGUtcm90YXRlLW5leHQgc3dpcGVyLXNsaWRlLXJvdGF0ZS1wcmV2XCJcbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgaWYgKGZlZWRiYWNrU2xpZGVyLnN3aXBlRGlyZWN0aW9uID09PSBcIm5leHRcIikge1xuICAgICAgICAgICAgICAgICAgICAkKFxuICAgICAgICAgICAgICAgICAgICAgICAgZmVlZGJhY2tTbGlkZXIuc2xpZGVzW2ZlZWRiYWNrU2xpZGVyLmFjdGl2ZUluZGV4XVxuICAgICAgICAgICAgICAgICAgICApLmFkZENsYXNzKFwic3dpcGVyLXNsaWRlLXJvdGF0ZS1uZXh0XCIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZmVlZGJhY2tTbGlkZXIuc3dpcGVEaXJlY3Rpb24gPT09IFwicHJldlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICQoXG4gICAgICAgICAgICAgICAgICAgICAgICBmZWVkYmFja1NsaWRlci5zbGlkZXNbZmVlZGJhY2tTbGlkZXIuYWN0aXZlSW5kZXhdXG4gICAgICAgICAgICAgICAgICAgICkuYWRkQ2xhc3MoXCJzd2lwZXItc2xpZGUtcm90YXRlLXByZXZcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgbmF2aWdhdGlvbjoge1xuICAgICAgICAgICAgbmV4dEVsOiBcIi5zd2lwZXItYnV0dG9uLW5leHRcIixcbiAgICAgICAgICAgIHByZXZFbDogXCIuc3dpcGVyLWJ1dHRvbi1wcmV2XCIsXG4gICAgICAgIH0sXG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coXCJ3b3JraW5nXCIpO1xuXG4gICAgLy8gQ29weSBlbWFpbCBmdW5jdGlvbmFsaXR5XG4gICAgZnVuY3Rpb24gaGFuZGxlQ29weSgpIHtcbiAgICAgICAgbGV0IGNvcHlUZXh0ID0gJChcIi5mb290ZXJfX2VtYWlsXCIpLnZhbCgpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImhka2hhXCIpO1xuXG4gICAgICAgIGlmIChuYXZpZ2F0b3IuY2xpcGJvYXJkICYmIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KSB7XG4gICAgICAgICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChjb3B5VGV4dCkudGhlbihzdWNjZXNzKS5jYXRjaChmYWlsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCAkdGVtcElucHV0ID0gJChcIjx0ZXh0YXJlYT5cIilcbiAgICAgICAgICAgICAgICAudmFsKGNvcHlUZXh0KVxuICAgICAgICAgICAgICAgIC5hcHBlbmRUbyhcImJvZHlcIilcbiAgICAgICAgICAgICAgICAuc2VsZWN0KCk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiY29weVwiKTtcbiAgICAgICAgICAgICAgICBzdWNjZXNzKCk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICBmYWlsKGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAkdGVtcElucHV0LnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3VjY2VzcygpIHtcbiAgICAgICAgJChcIi5mb290ZXJfX2NvcHlMaW5rXCIpLmhpZGUoKTtcbiAgICAgICAgJChcIi5mb290ZXJfX2NvcGllZFRleHRcIikuc2hvdygpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICQoXCIuZm9vdGVyX19jb3B5TGlua1wiKS5zaG93KCk7XG4gICAgICAgICAgICAkKFwiLmZvb3Rlcl9fY29waWVkVGV4dFwiKS5oaWRlKCk7XG4gICAgICAgIH0sIDMwMDApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZhaWwoZXJyKSB7XG4gICAgICAgIGFsZXJ0KFwiRmFpbGVkIHRvIGNvcHk6IFwiICsgZXJyKTtcbiAgICB9XG5cbiAgICAkKFwiLmZvb3Rlcl9fY29weUxpbmtcIikub24oXCJjbGlja1wiLCBoYW5kbGVDb3B5KTtcblxuICAgIC8vIEFjdGl2ZSBjbGFzcyBmdW5jdGlvbmFsaXR5XG4gICAgY29uc3QgY3VycmVudFBhZ2UgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XG5cbiAgICAkKFwiLm5hdmJhci1uYXYgbGkgYS5uYXYtbGlua1wiKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgbGlua1BhdGggPSAkKHRoaXMpLmF0dHIoXCJocmVmXCIpO1xuXG4gICAgICAgIGlmIChsaW5rUGF0aCA9PT0gXCIvXCIgJiYgY3VycmVudFBhZ2UgPT09IFwiL1wiKSAkKHRoaXMpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xuICAgICAgICBlbHNlIGlmIChsaW5rUGF0aCAhPT0gXCIvXCIgJiYgY3VycmVudFBhZ2UuaW5kZXhPZihsaW5rUGF0aCkgIT09IC0xKVxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICB9KTtcblxuICAgIC8vIFByb2plY3RzIFNpbmdsZXMgY291bnRcbiAgICBpZiAoJChcImJvZHlcIikuaGFzQ2xhc3MoXCJwcm9qZWN0LWxpc3RpbmdcIikpIHtcbiAgICAgICAgbGV0IHByb2plY3RzQ291bnQgPSAkKFwiLnByb2plY3RzX19zaW5nbGVcIikubGVuZ3RoO1xuICAgICAgICAkKFwiLnByb2plY3RzX19idXR0b25EZXNrdG9wXCIpLnJlbW92ZSgpO1xuXG4gICAgICAgICQoXG4gICAgICAgICAgICBgPHAgY2xhc3M9XCJwcm9qZWN0c19fY291bnRcIj48c3Bhbj4ke3Byb2plY3RzQ291bnR9PC9zcGFuPiBQcm9qZWN0czwvcD5gXG4gICAgICAgICkuYXBwZW5kVG8oXCIucHJvamVjdHNfX2hlYWRlclwiKTtcbiAgICB9XG59KTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUFBLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLENBQUNDLEtBQUssQ0FBQyxZQUFNO0VBQ3BCO0VBQ0FGLENBQUMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDRyxLQUFLLENBQUMsWUFBWTtJQUMzQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUMsVUFBVSxDQUFDO0lBRXZCTCxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUNNLFdBQVcsQ0FBQyxlQUFlLENBQUM7RUFDN0MsQ0FBQyxDQUFDO0VBQ0Y7RUFDQSxJQUFNQyx3QkFBd0IsR0FBRztJQUM3QjtJQUNBQyxJQUFJLEVBQUUsSUFBSTtJQUNWQyxhQUFhLEVBQUUsTUFBTTtJQUNyQkMsUUFBUSxFQUFFLElBQUk7SUFDZEMsVUFBVSxFQUFFLEtBQUs7SUFDakJDLGlCQUFpQixFQUFFLEtBQUs7SUFDeEJDLGVBQWUsRUFBRSxJQUFJO0lBQ3JCQyxLQUFLLEVBQUUsSUFBSTtJQUNYQyxjQUFjLEVBQUU7RUFDcEIsQ0FBQztFQUNELElBQU1DLGdCQUFnQixHQUFHLElBQUlDLE1BQU0sQ0FBQyxxQkFBcUIsa0NBQ2xEVix3QkFBd0I7SUFDM0JXLFFBQVEsRUFBRTtNQUNOQyxLQUFLLEVBQUUsQ0FBQztNQUNSQyxvQkFBb0IsRUFBRTtJQUMxQjtFQUFDLEdBQ0g7RUFFRixJQUFNQyxtQkFBbUIsR0FBRyxJQUFJSixNQUFNLENBQUMsd0JBQXdCLGtDQUN4RFYsd0JBQXdCO0lBQzNCVyxRQUFRLEVBQUU7TUFDTkMsS0FBSyxFQUFF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\n//# sourceURL=webpack-internal:///./assets/js/app.js\n");

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