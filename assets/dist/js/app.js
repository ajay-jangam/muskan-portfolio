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

eval("function _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n$(document).ready(function () {\n  // Hamburger Menu\n  $(\".navbar .navbar-toggler\").click(function () {\n    console.log(\"kjndlkjn\");\n    $(\".navbar\").toggleClass(\"hamburgerMenu\");\n  });\n  // Sliders\n  var clientsSliderOptionsPara = {\n    // Optional parameters\n    loop: true,\n    slidesPerView: \"auto\",\n    speed: 1500,\n    parallax: true,\n    grabCursor: false,\n    mousewheelControl: false,\n    keyboardControl: true\n  };\n  var clientsSliderTop = new Swiper(\".clients__sliderTop\", _objectSpread(_objectSpread({}, clientsSliderOptionsPara), {}, {\n    autoplay: {\n      delay: 0,\n      disableOnInteraction: true\n    }\n  }));\n  var clientsSliderBottom = new Swiper(\".clients__sliderBottom\", _objectSpread(_objectSpread({}, clientsSliderOptionsPara), {}, {\n    autoplay: {\n      delay: 0,\n      reverseDirection: true,\n      disableOnInteraction: false\n    }\n  }));\n  var clientsSliderLeft = new Swiper(\".projectHero__sliderLeft\", {\n    slidesPerView: 5,\n    speed: 1000,\n    mousewheel: true,\n    grabCursor: true,\n    loop: true,\n    autoplay: {\n      delay: 0,\n      disableOnInteraction: false\n    },\n    breakpoints: {\n      300: {\n        direction: \"horizontal\"\n      },\n      769: {\n        direction: \"vertical\"\n      }\n    }\n  });\n  var clientsSlider = new Swiper(\".projectHero__sliderRight\", {\n    direction: \"vertical\",\n    slidesPerView: 5,\n    speed: 1000,\n    mousewheel: true,\n    grabCursor: true,\n    loop: true,\n    autoplay: {\n      delay: 0,\n      reverseDirection: true,\n      disableOnInteraction: false\n    },\n    breakpoints: {\n      300: {\n        direction: \"horizontal\"\n      },\n      769: {\n        direction: \"vertical\"\n      }\n    }\n  });\n  var feedbackRibbonSlider = new Swiper(\".feedback__ribbon\", _objectSpread(_objectSpread({}, clientsSliderOptionsPara), {}, {\n    speed: 1000,\n    autoplay: {\n      delay: 0,\n      disableOnInteraction: true\n    }\n  }));\n  var aboutSlide = new Swiper(\".about__slider\", _objectSpread(_objectSpread({}, clientsSliderOptionsPara), {}, {\n    speed: 1000,\n    autoplay: {\n      delay: 0,\n      pauseOnMouseEnter: true,\n      disableOnInteraction: false\n    }\n  }));\n  var previousIndex = 0; // To track the direction of slide change\n\n  var feedbackSlider = new Swiper(\".feedback__slider\", {\n    loop: true,\n    on: {\n      slideChangeTransitionStart: function slideChangeTransitionStart() {\n        $(\".swiper-slide\").removeClass(\"swiper-slide-rotate-next swiper-slide-rotate-prev\");\n        if (feedbackSlider.swipeDirection === \"next\") {\n          $(feedbackSlider.slides[feedbackSlider.activeIndex]).addClass(\"swiper-slide-rotate-next\");\n        } else if (feedbackSlider.swipeDirection === \"prev\") {\n          $(feedbackSlider.slides[feedbackSlider.activeIndex]).addClass(\"swiper-slide-rotate-prev\");\n        }\n      }\n    },\n    navigation: {\n      nextEl: \".swiper-button-next\",\n      prevEl: \".swiper-button-prev\"\n    }\n  });\n  console.log(\"working\");\n\n  // Copy email functionality\n  function handleCopy() {\n    var copyText = $(\".footer__email\").val();\n    console.log(\"hdkha\");\n    if (navigator.clipboard && navigator.clipboard.writeText) {\n      navigator.clipboard.writeText(copyText).then(success)[\"catch\"](fail);\n    } else {\n      var $tempInput = $(\"<textarea>\").val(copyText).appendTo(\"body\").select();\n      try {\n        document.execCommand(\"copy\");\n        success();\n      } catch (err) {\n        fail(err);\n      }\n      $tempInput.remove();\n    }\n  }\n  function success() {\n    $(\".footer__copyLink\").hide();\n    $(\".footer__copiedText\").show();\n    setTimeout(function () {\n      $(\".footer__copyLink\").show();\n      $(\".footer__copiedText\").hide();\n    }, 3000);\n  }\n  function fail(err) {\n    alert(\"Failed to copy: \" + err);\n  }\n  $(\".footer__copyLink\").on(\"click\", handleCopy);\n\n  // Get current URL\n  var currentUrl = window.location.href;\n\n  // Loop through each menu item\n  $(\".navbar-nav li a.nav-link\").each(function () {\n    var menuItemUrl = $(this).attr(\"href\");\n\n    // Check if the current URL matches the menu item URL\n    if (currentUrl === menuItemUrl) {\n      $(this).parent().addClass(\"active\"); // Add the active class\n    }\n  });\n\n  // Projects Singles count\n\n  if ($(\"body\").hasClass(\"project-listing\")) {\n    console.log(\"aflknaskj\");\n\n    // Count the number of elements with the class '.projects__single'\n    var projectsCount = $(\".projects__single\").length;\n\n    // Remove the existing '.projects__buttonDesktop' element\n    $(\".projects__buttonDesktop\").remove();\n\n    // Create a new <p> tag with the count and add it to the DOM\n    $(\"<p class=\\\"projects__count\\\"><span>\".concat(projectsCount, \"</span> Projects</p>\")).appendTo(\".projects__header\");\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hc3NldHMvanMvYXBwLmpzIiwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJjbGljayIsImNvbnNvbGUiLCJsb2ciLCJ0b2dnbGVDbGFzcyIsImNsaWVudHNTbGlkZXJPcHRpb25zUGFyYSIsImxvb3AiLCJzbGlkZXNQZXJWaWV3Iiwic3BlZWQiLCJwYXJhbGxheCIsImdyYWJDdXJzb3IiLCJtb3VzZXdoZWVsQ29udHJvbCIsImtleWJvYXJkQ29udHJvbCIsImNsaWVudHNTbGlkZXJUb3AiLCJTd2lwZXIiLCJhdXRvcGxheSIsImRlbGF5IiwiZGlzYWJsZU9uSW50ZXJhY3Rpb24iLCJjbGllbnRzU2xpZGVyQm90dG9tIiwicmV2ZXJzZURpcmVjdGlvbiIsImNsaWVudHNTbGlkZXJMZWZ0IiwibW91c2V3aGVlbCIsImJyZWFrcG9pbnRzIiwiZGlyZWN0aW9uIiwiY2xpZW50c1NsaWRlciIsImZlZWRiYWNrUmliYm9uU2xpZGVyIiwiYWJvdXRTbGlkZSIsInBhdXNlT25Nb3VzZUVudGVyIiwicHJldmlvdXNJbmRleCIsImZlZWRiYWNrU2xpZGVyIiwib24iLCJzbGlkZUNoYW5nZVRyYW5zaXRpb25TdGFydCIsInJlbW92ZUNsYXNzIiwic3dpcGVEaXJlY3Rpb24iLCJzbGlkZXMiLCJhY3RpdmVJbmRleCIsImFkZENsYXNzIiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCIsImhhbmRsZUNvcHkiLCJjb3B5VGV4dCIsInZhbCIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInRoZW4iLCJzdWNjZXNzIiwiZmFpbCIsIiR0ZW1wSW5wdXQiLCJhcHBlbmRUbyIsInNlbGVjdCIsImV4ZWNDb21tYW5kIiwiZXJyIiwicmVtb3ZlIiwiaGlkZSIsInNob3ciLCJzZXRUaW1lb3V0IiwiYWxlcnQiLCJjdXJyZW50VXJsIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiZWFjaCIsIm1lbnVJdGVtVXJsIiwiYXR0ciIsInBhcmVudCIsImhhc0NsYXNzIiwicHJvamVjdHNDb3VudCIsImxlbmd0aCJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXBwLy4vYXNzZXRzL2pzL2FwcC5qcz8yNWZjIl0sInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KCgpID0+IHtcbiAgICAvLyBIYW1idXJnZXIgTWVudVxuICAgICQoXCIubmF2YmFyIC5uYXZiYXItdG9nZ2xlclwiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwia2puZGxram5cIik7XG5cbiAgICAgICAgJChcIi5uYXZiYXJcIikudG9nZ2xlQ2xhc3MoXCJoYW1idXJnZXJNZW51XCIpO1xuICAgIH0pO1xuICAgIC8vIFNsaWRlcnNcbiAgICBjb25zdCBjbGllbnRzU2xpZGVyT3B0aW9uc1BhcmEgPSB7XG4gICAgICAgIC8vIE9wdGlvbmFsIHBhcmFtZXRlcnNcbiAgICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgICAgc2xpZGVzUGVyVmlldzogXCJhdXRvXCIsXG4gICAgICAgIHNwZWVkOiAxNTAwLFxuICAgICAgICBwYXJhbGxheDogdHJ1ZSxcbiAgICAgICAgZ3JhYkN1cnNvcjogZmFsc2UsXG4gICAgICAgIG1vdXNld2hlZWxDb250cm9sOiBmYWxzZSxcbiAgICAgICAga2V5Ym9hcmRDb250cm9sOiB0cnVlLFxuICAgIH07XG4gICAgY29uc3QgY2xpZW50c1NsaWRlclRvcCA9IG5ldyBTd2lwZXIoXCIuY2xpZW50c19fc2xpZGVyVG9wXCIsIHtcbiAgICAgICAgLi4uY2xpZW50c1NsaWRlck9wdGlvbnNQYXJhLFxuICAgICAgICBhdXRvcGxheToge1xuICAgICAgICAgICAgZGVsYXk6IDAsXG4gICAgICAgICAgICBkaXNhYmxlT25JbnRlcmFjdGlvbjogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICB9KTtcblxuICAgIGNvbnN0IGNsaWVudHNTbGlkZXJCb3R0b20gPSBuZXcgU3dpcGVyKFwiLmNsaWVudHNfX3NsaWRlckJvdHRvbVwiLCB7XG4gICAgICAgIC4uLmNsaWVudHNTbGlkZXJPcHRpb25zUGFyYSxcbiAgICAgICAgYXV0b3BsYXk6IHtcbiAgICAgICAgICAgIGRlbGF5OiAwLFxuICAgICAgICAgICAgcmV2ZXJzZURpcmVjdGlvbjogdHJ1ZSxcbiAgICAgICAgICAgIGRpc2FibGVPbkludGVyYWN0aW9uOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICB9KTtcblxuICAgIGNvbnN0IGNsaWVudHNTbGlkZXJMZWZ0ID0gbmV3IFN3aXBlcihcIi5wcm9qZWN0SGVyb19fc2xpZGVyTGVmdFwiLCB7XG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDUsXG4gICAgICAgIHNwZWVkOiAxMDAwLFxuICAgICAgICBtb3VzZXdoZWVsOiB0cnVlLFxuICAgICAgICBncmFiQ3Vyc29yOiB0cnVlLFxuICAgICAgICBsb29wOiB0cnVlLFxuICAgICAgICBhdXRvcGxheToge1xuICAgICAgICAgICAgZGVsYXk6IDAsXG4gICAgICAgICAgICBkaXNhYmxlT25JbnRlcmFjdGlvbjogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIGJyZWFrcG9pbnRzOiB7XG4gICAgICAgICAgICAzMDA6IHtcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246IFwiaG9yaXpvbnRhbFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDc2OToge1xuICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogXCJ2ZXJ0aWNhbFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9KTtcblxuICAgIGNvbnN0IGNsaWVudHNTbGlkZXIgPSBuZXcgU3dpcGVyKFwiLnByb2plY3RIZXJvX19zbGlkZXJSaWdodFwiLCB7XG4gICAgICAgIGRpcmVjdGlvbjogXCJ2ZXJ0aWNhbFwiLFxuICAgICAgICBzbGlkZXNQZXJWaWV3OiA1LFxuICAgICAgICBzcGVlZDogMTAwMCxcbiAgICAgICAgbW91c2V3aGVlbDogdHJ1ZSxcbiAgICAgICAgZ3JhYkN1cnNvcjogdHJ1ZSxcbiAgICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgICAgYXV0b3BsYXk6IHtcbiAgICAgICAgICAgIGRlbGF5OiAwLFxuICAgICAgICAgICAgcmV2ZXJzZURpcmVjdGlvbjogdHJ1ZSxcbiAgICAgICAgICAgIGRpc2FibGVPbkludGVyYWN0aW9uOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgYnJlYWtwb2ludHM6IHtcbiAgICAgICAgICAgIDMwMDoge1xuICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogXCJob3Jpem9udGFsXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgNzY5OiB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uOiBcInZlcnRpY2FsXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0pO1xuXG4gICAgY29uc3QgZmVlZGJhY2tSaWJib25TbGlkZXIgPSBuZXcgU3dpcGVyKFwiLmZlZWRiYWNrX19yaWJib25cIiwge1xuICAgICAgICAuLi5jbGllbnRzU2xpZGVyT3B0aW9uc1BhcmEsXG4gICAgICAgIHNwZWVkOiAxMDAwLFxuICAgICAgICBhdXRvcGxheToge1xuICAgICAgICAgICAgZGVsYXk6IDAsXG4gICAgICAgICAgICBkaXNhYmxlT25JbnRlcmFjdGlvbjogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICB9KTtcblxuICAgIGNvbnN0IGFib3V0U2xpZGUgPSBuZXcgU3dpcGVyKFwiLmFib3V0X19zbGlkZXJcIiwge1xuICAgICAgICAuLi5jbGllbnRzU2xpZGVyT3B0aW9uc1BhcmEsXG4gICAgICAgIHNwZWVkOiAxMDAwLFxuICAgICAgICBhdXRvcGxheToge1xuICAgICAgICAgICAgZGVsYXk6IDAsXG4gICAgICAgICAgICBwYXVzZU9uTW91c2VFbnRlcjogdHJ1ZSxcbiAgICAgICAgICAgIGRpc2FibGVPbkludGVyYWN0aW9uOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICB9KTtcblxuICAgIGxldCBwcmV2aW91c0luZGV4ID0gMDsgLy8gVG8gdHJhY2sgdGhlIGRpcmVjdGlvbiBvZiBzbGlkZSBjaGFuZ2VcblxuICAgIGNvbnN0IGZlZWRiYWNrU2xpZGVyID0gbmV3IFN3aXBlcihcIi5mZWVkYmFja19fc2xpZGVyXCIsIHtcbiAgICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICAgIHNsaWRlQ2hhbmdlVHJhbnNpdGlvblN0YXJ0OiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgJChcIi5zd2lwZXItc2xpZGVcIikucmVtb3ZlQ2xhc3MoXG4gICAgICAgICAgICAgICAgICAgIFwic3dpcGVyLXNsaWRlLXJvdGF0ZS1uZXh0IHN3aXBlci1zbGlkZS1yb3RhdGUtcHJldlwiXG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIGlmIChmZWVkYmFja1NsaWRlci5zd2lwZURpcmVjdGlvbiA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgJChcbiAgICAgICAgICAgICAgICAgICAgICAgIGZlZWRiYWNrU2xpZGVyLnNsaWRlc1tmZWVkYmFja1NsaWRlci5hY3RpdmVJbmRleF1cbiAgICAgICAgICAgICAgICAgICAgKS5hZGRDbGFzcyhcInN3aXBlci1zbGlkZS1yb3RhdGUtbmV4dFwiKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGZlZWRiYWNrU2xpZGVyLnN3aXBlRGlyZWN0aW9uID09PSBcInByZXZcIikge1xuICAgICAgICAgICAgICAgICAgICAkKFxuICAgICAgICAgICAgICAgICAgICAgICAgZmVlZGJhY2tTbGlkZXIuc2xpZGVzW2ZlZWRiYWNrU2xpZGVyLmFjdGl2ZUluZGV4XVxuICAgICAgICAgICAgICAgICAgICApLmFkZENsYXNzKFwic3dpcGVyLXNsaWRlLXJvdGF0ZS1wcmV2XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIG5hdmlnYXRpb246IHtcbiAgICAgICAgICAgIG5leHRFbDogXCIuc3dpcGVyLWJ1dHRvbi1uZXh0XCIsXG4gICAgICAgICAgICBwcmV2RWw6IFwiLnN3aXBlci1idXR0b24tcHJldlwiLFxuICAgICAgICB9LFxuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKFwid29ya2luZ1wiKTtcblxuICAgIC8vIENvcHkgZW1haWwgZnVuY3Rpb25hbGl0eVxuICAgIGZ1bmN0aW9uIGhhbmRsZUNvcHkoKSB7XG4gICAgICAgIGxldCBjb3B5VGV4dCA9ICQoXCIuZm9vdGVyX19lbWFpbFwiKS52YWwoKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJoZGtoYVwiKTtcblxuICAgICAgICBpZiAobmF2aWdhdG9yLmNsaXBib2FyZCAmJiBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dCkge1xuICAgICAgICAgICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoY29weVRleHQpLnRoZW4oc3VjY2VzcykuY2F0Y2goZmFpbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgJHRlbXBJbnB1dCA9ICQoXCI8dGV4dGFyZWE+XCIpXG4gICAgICAgICAgICAgICAgLnZhbChjb3B5VGV4dClcbiAgICAgICAgICAgICAgICAuYXBwZW5kVG8oXCJib2R5XCIpXG4gICAgICAgICAgICAgICAgLnNlbGVjdCgpO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcImNvcHlcIik7XG4gICAgICAgICAgICAgICAgc3VjY2VzcygpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgZmFpbChlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJHRlbXBJbnB1dC5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN1Y2Nlc3MoKSB7XG4gICAgICAgICQoXCIuZm9vdGVyX19jb3B5TGlua1wiKS5oaWRlKCk7XG4gICAgICAgICQoXCIuZm9vdGVyX19jb3BpZWRUZXh0XCIpLnNob3coKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAkKFwiLmZvb3Rlcl9fY29weUxpbmtcIikuc2hvdygpO1xuICAgICAgICAgICAgJChcIi5mb290ZXJfX2NvcGllZFRleHRcIikuaGlkZSgpO1xuICAgICAgICB9LCAzMDAwKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmYWlsKGVycikge1xuICAgICAgICBhbGVydChcIkZhaWxlZCB0byBjb3B5OiBcIiArIGVycik7XG4gICAgfVxuXG4gICAgJChcIi5mb290ZXJfX2NvcHlMaW5rXCIpLm9uKFwiY2xpY2tcIiwgaGFuZGxlQ29weSk7XG5cbiAgICAvLyBHZXQgY3VycmVudCBVUkxcbiAgICB2YXIgY3VycmVudFVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuXG4gICAgLy8gTG9vcCB0aHJvdWdoIGVhY2ggbWVudSBpdGVtXG4gICAgJChcIi5uYXZiYXItbmF2IGxpIGEubmF2LWxpbmtcIikuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBtZW51SXRlbVVybCA9ICQodGhpcykuYXR0cihcImhyZWZcIik7XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIGN1cnJlbnQgVVJMIG1hdGNoZXMgdGhlIG1lbnUgaXRlbSBVUkxcbiAgICAgICAgaWYgKGN1cnJlbnRVcmwgPT09IG1lbnVJdGVtVXJsKSB7XG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmFkZENsYXNzKFwiYWN0aXZlXCIpOyAvLyBBZGQgdGhlIGFjdGl2ZSBjbGFzc1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBQcm9qZWN0cyBTaW5nbGVzIGNvdW50XG5cbiAgICBpZiAoJChcImJvZHlcIikuaGFzQ2xhc3MoXCJwcm9qZWN0LWxpc3RpbmdcIikpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJhZmxrbmFza2pcIik7XG5cbiAgICAgICAgLy8gQ291bnQgdGhlIG51bWJlciBvZiBlbGVtZW50cyB3aXRoIHRoZSBjbGFzcyAnLnByb2plY3RzX19zaW5nbGUnXG4gICAgICAgIGxldCBwcm9qZWN0c0NvdW50ID0gJChcIi5wcm9qZWN0c19fc2luZ2xlXCIpLmxlbmd0aDtcblxuICAgICAgICAvLyBSZW1vdmUgdGhlIGV4aXN0aW5nICcucHJvamVjdHNfX2J1dHRvbkRlc2t0b3AnIGVsZW1lbnRcbiAgICAgICAgJChcIi5wcm9qZWN0c19fYnV0dG9uRGVza3RvcFwiKS5yZW1vdmUoKTtcblxuICAgICAgICAvLyBDcmVhdGUgYSBuZXcgPHA+IHRhZyB3aXRoIHRoZSBjb3VudCBhbmQgYWRkIGl0IHRvIHRoZSBET01cbiAgICAgICAgJChcbiAgICAgICAgICAgIGA8cCBjbGFzcz1cInByb2plY3RzX19jb3VudFwiPjxzcGFuPiR7cHJvamVjdHNDb3VudH08L3NwYW4+IFByb2plY3RzPC9wPmBcbiAgICAgICAgKS5hcHBlbmRUbyhcIi5wcm9qZWN0c19faGVhZGVyXCIpO1xuICAgIH1cbn0pO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQUEsQ0FBQyxDQUFDQyxRQUFRLENBQUMsQ0FBQ0MsS0FBSyxDQUFDLFlBQU07RUFDcEI7RUFDQUYsQ0FBQyxDQUFDLHlCQUF5QixDQUFDLENBQUNHLEtBQUssQ0FBQyxZQUFZO0lBQzNDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxVQUFVLENBQUM7SUFFdkJMLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQ00sV0FBVyxDQUFDLGVBQWUsQ0FBQztFQUM3QyxDQUFDLENBQUM7RUFDRjtFQUNBLElBQU1DLHdCQUF3QixHQUFHO0lBQzdCO0lBQ0FDLElBQUksRUFBRSxJQUFJO0lBQ1ZDLGFBQWEsRUFBRSxNQUFNO0lBQ3JCQyxLQUFLLEVBQUUsSUFBSTtJQUNYQyxRQUFRLEVBQUUsSUFBSTtJQUNkQyxVQUFVLEVBQUUsS0FBSztJQUNqQkMsaUJBQWlCLEVBQUUsS0FBSztJQUN4QkMsZUFBZSxFQUFFO0VBQ3JCLENBQUM7RUFDRCxJQUFNQyxnQkFBZ0IsR0FBRyxJQUFJQyxNQUFNLENBQUMscUJB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\n//# sourceURL=webpack-internal:///./assets/js/app.js\n");

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