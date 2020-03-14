/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/javascript/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/javascript/App.es6.js":
/*!**************************************!*\
  !*** ./assets/javascript/App.es6.js ***!
  \**************************************/
/*! exports provided: App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"App\", function() { return App; });\n/* harmony import */ var _Category_es6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Category.es6 */ \"./assets/javascript/Category.es6.js\");\n/* harmony import */ var _Headings_es6__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Headings.es6 */ \"./assets/javascript/Headings.es6.js\");\n/* harmony import */ var _Images_es6__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Images.es6 */ \"./assets/javascript/Images.es6.js\");\n/* harmony import */ var _PhotoSlider_es6__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PhotoSlider.es6 */ \"./assets/javascript/PhotoSlider.es6.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\n\nvar App =\n/*#__PURE__*/\nfunction () {\n  function App() {\n    _classCallCheck(this, App);\n  }\n\n  _createClass(App, [{\n    key: \"init\",\n    value: function init() {\n      // Remove preload class from body so transitions may work after page loads\n      this.letTransitionsRoll(); // Category popup in menu\n\n      var category = new _Category_es6__WEBPACK_IMPORTED_MODULE_0__[\"Category\"]();\n      category.init(); // Headings in posts/pages\n\n      var headings = new _Headings_es6__WEBPACK_IMPORTED_MODULE_1__[\"Headings\"]();\n      headings.init(); // Images in posts\n\n      var images = new _Images_es6__WEBPACK_IMPORTED_MODULE_2__[\"Images\"]();\n      images.init(); // Image sliders in posts\n\n      var photoSlider = new _PhotoSlider_es6__WEBPACK_IMPORTED_MODULE_3__[\"PhotoSlider\"]();\n      photoSlider.init();\n    }\n  }, {\n    key: \"letTransitionsRoll\",\n    value: function letTransitionsRoll() {\n      var body = document.querySelector(\"body\");\n      body.classList.remove(\"preload\");\n    }\n  }]);\n\n  return App;\n}();\n\n\n\n//# sourceURL=webpack:///./assets/javascript/App.es6.js?");

/***/ }),

/***/ "./assets/javascript/Category.es6.js":
/*!*******************************************!*\
  !*** ./assets/javascript/Category.es6.js ***!
  \*******************************************/
/*! exports provided: Category */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Category\", function() { return Category; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Category =\n/*#__PURE__*/\nfunction () {\n  function Category() {\n    _classCallCheck(this, Category);\n\n    this.toggleClassName = \"js-category-toggle\";\n    this.itemClassName = \"navigation__item\";\n    this.openClassName = \"navigation__item--is-open\";\n    this.isOpen = false;\n  }\n\n  _createClass(Category, [{\n    key: \"init\",\n    value: function init() {\n      this.addEvents();\n    }\n  }, {\n    key: \"addEvents\",\n    value: function addEvents() {\n      var _this = this;\n\n      var toggleEl = document.querySelector(\".\".concat(this.toggleClassName));\n\n      if (toggleEl) {\n        toggleEl.addEventListener(\"click\", function (event) {\n          _this.handleToggles(event);\n        });\n      }\n    }\n  }, {\n    key: \"handleToggles\",\n    value: function handleToggles(event) {\n      var item = event.target.closest(\".\".concat(this.itemClassName));\n\n      if (item) {\n        item.classList.toggle(this.openClassName);\n        this.isOpen = !this.isOpen;\n      }\n    }\n  }]);\n\n  return Category;\n}();\n\n\n\n//# sourceURL=webpack:///./assets/javascript/Category.es6.js?");

/***/ }),

/***/ "./assets/javascript/Headings.es6.js":
/*!*******************************************!*\
  !*** ./assets/javascript/Headings.es6.js ***!
  \*******************************************/
/*! exports provided: Headings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Headings\", function() { return Headings; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Headings =\n/*#__PURE__*/\nfunction () {\n  function Headings() {\n    _classCallCheck(this, Headings);\n\n    this.headings = document.querySelectorAll(\"h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]\");\n  }\n\n  _createClass(Headings, [{\n    key: \"init\",\n    value: function init() {\n      this.addLinks();\n    }\n  }, {\n    key: \"addLinks\",\n    value: function addLinks() {\n      this.headings.forEach(function (heading) {\n        var id = heading.getAttribute(\"id\");\n        var content = heading.innerHTML;\n        heading.innerHTML = \"<a href=\\\"#\".concat(id, \"\\\">\").concat(content, \"</a>\");\n      });\n    }\n  }]);\n\n  return Headings;\n}();\n\n\n\n//# sourceURL=webpack:///./assets/javascript/Headings.es6.js?");

/***/ }),

/***/ "./assets/javascript/Images.es6.js":
/*!*****************************************!*\
  !*** ./assets/javascript/Images.es6.js ***!
  \*****************************************/
/*! exports provided: Images */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Images\", function() { return Images; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Images =\n/*#__PURE__*/\nfunction () {\n  function Images() {\n    _classCallCheck(this, Images);\n\n    this.standaloneImages = document.querySelectorAll(\".post__content p > img\");\n  }\n\n  _createClass(Images, [{\n    key: \"init\",\n    value: function init() {\n      this.wrapImages();\n    }\n  }, {\n    key: \"wrapImages\",\n    value: function wrapImages() {\n      this.standaloneImages.forEach(function (image) {\n        var imageHTML = image.outerHTML;\n        var caption = image.getAttribute(\"alt\");\n        image.outerHTML = \"<figure>\".concat(imageHTML, \"<figcaption>\").concat(caption, \"</figcaption></figure>\");\n      });\n    }\n  }]);\n\n  return Images;\n}();\n\n\n\n//# sourceURL=webpack:///./assets/javascript/Images.es6.js?");

/***/ }),

/***/ "./assets/javascript/PhotoSlider.es6.js":
/*!**********************************************!*\
  !*** ./assets/javascript/PhotoSlider.es6.js ***!
  \**********************************************/
/*! exports provided: PhotoSlider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PhotoSlider\", function() { return PhotoSlider; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar PhotoSlider =\n/*#__PURE__*/\nfunction () {\n  function PhotoSlider() {\n    _classCallCheck(this, PhotoSlider);\n\n    this.urlRegex = /^(https?:\\/\\/)([\\w\\-\\.]+)([\\w\\/?=%\\.\\-&]+)(\\/.+)$/g;\n    this.sliders = document.querySelectorAll(\".post__content p.photo-slider\");\n  }\n\n  _createClass(PhotoSlider, [{\n    key: \"init\",\n    value: function init() {\n      var _this = this;\n\n      this.sliders.forEach(function (slider) {\n        return _this.buildSlider(slider);\n      });\n    }\n  }, {\n    key: \"buildSlider\",\n    value: function buildSlider(slider) {\n      var _this2 = this;\n\n      var photoGroup = slider.innerText.split(/\\s/);\n      var photoUrls = photoGroup.filter(function (url) {\n        return url.match(_this2.urlRegex);\n      });\n      var sliderMarkup = \"\\n            <div class=\\\"photo-slider\\\">\\n                <div class=\\\"photo-slider__slider\\\">\\n                \".concat(photoUrls.map(function (url, index) {\n        return \"\\n                    <img src=\".concat(url, \" alt=\\\"photo-\").concat(index + 1, \"\\\" data-index=\").concat(index + 1, \" class=\\\"photo-slider__photo\\\">\\n                \");\n      }).join(\"\"), \"\\n                </div>\\n                <ol class=\\\"photo-slider__nav\\\">\\n                \").concat(photoUrls.map(function (url, index) {\n        return \"\\n                    <li class=\\\"photo-slider__nav-item\\\">\\n                        <a data-index=\".concat(index + 1, \" class=\\\"photo-slider__link\\\"></a>\\n                    </li>\\n                \");\n      }).join(\"\"), \"\\n                </ol>\\n            </div>\\n        \");\n      slider.insertAdjacentHTML(\"afterend\", sliderMarkup);\n      this.setUpEvents(slider.nextElementSibling);\n      slider.remove();\n    }\n  }, {\n    key: \"setUpEvents\",\n    value: function setUpEvents(slider) {\n      slider.addEventListener(\"click\", function (event) {\n        if (event.target.hasAttribute(\"data-index\")) {\n          event.preventDefault();\n          var targetPhotoIndex = event.target.getAttribute(\"data-index\");\n          var photo = event.target.closest(\".photo-slider\").querySelector(\".photo-slider__photo[data-index=\\\"\".concat(targetPhotoIndex, \"\\\"]\"));\n          photo.parentElement.scrollLeft = photo.offsetLeft;\n        }\n      });\n    }\n  }]);\n\n  return PhotoSlider;\n}();\n\n\n\n//# sourceURL=webpack:///./assets/javascript/PhotoSlider.es6.js?");

/***/ }),

/***/ "./assets/javascript/index.js":
/*!************************************!*\
  !*** ./assets/javascript/index.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.es6.js */ \"./assets/javascript/App.es6.js\");\n\nwindow.addEventListener(\"load\", function () {\n  var app = new _App_es6_js__WEBPACK_IMPORTED_MODULE_0__[\"App\"]();\n  app.init();\n});\n\n//# sourceURL=webpack:///./assets/javascript/index.js?");

/***/ })

/******/ });