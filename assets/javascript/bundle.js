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

/***/ "./assets/javascript/Category.es6.js":
/*!*******************************************!*\
  !*** ./assets/javascript/Category.es6.js ***!
  \*******************************************/
/*! exports provided: Category */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Category\", function() { return Category; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Category =\n/*#__PURE__*/\nfunction () {\n  function Category() {\n    _classCallCheck(this, Category);\n\n    this.toggleClassName = \"js-category-toggle\";\n    this.itemClassName = \"navigation__item\";\n    this.openClassName = \"navigation__item--is-open\";\n    this.isOpen = false;\n    this.addEvents();\n  }\n\n  _createClass(Category, [{\n    key: \"addEvents\",\n    value: function addEvents() {\n      var _this = this;\n\n      var toggleEl = document.querySelector(\".\".concat(this.toggleClassName));\n\n      if (toggleEl) {\n        toggleEl.addEventListener(\"click\", function (event) {\n          _this.handleToggles(event);\n        });\n      }\n    }\n  }, {\n    key: \"handleToggles\",\n    value: function handleToggles(event) {\n      var item = event.target.closest(\".\".concat(this.itemClassName));\n\n      if (item) {\n        item.classList.toggle(this.openClassName);\n        this.isOpen = !this.isOpen;\n      }\n    }\n  }]);\n\n  return Category;\n}();\n\n\n\n//# sourceURL=webpack:///./assets/javascript/Category.es6.js?");

/***/ }),

/***/ "./assets/javascript/Theme.es6.js":
/*!****************************************!*\
  !*** ./assets/javascript/Theme.es6.js ***!
  \****************************************/
/*! exports provided: Theme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Theme\", function() { return Theme; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Theme =\n/*#__PURE__*/\nfunction () {\n  function Theme() {\n    _classCallCheck(this, Theme);\n\n    this.toggleClassName = \"js-theme-toggle\";\n    this.addEvents();\n  }\n\n  _createClass(Theme, [{\n    key: \"addEvents\",\n    value: function addEvents() {\n      var _this = this;\n\n      var toggleEl = document.querySelector(\".\".concat(this.toggleClassName));\n\n      if (toggleEl) {\n        toggleEl.addEventListener(\"click\", function (event) {\n          _this.handleToggles(event);\n        });\n      }\n    }\n  }, {\n    key: \"handleToggles\",\n    value: function handleToggles(event) {\n      console.log(\"yep, works\");\n    }\n  }]);\n\n  return Theme;\n}();\n\n\n\n//# sourceURL=webpack:///./assets/javascript/Theme.es6.js?");

/***/ }),

/***/ "./assets/javascript/index.js":
/*!************************************!*\
  !*** ./assets/javascript/index.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Category_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Category.es6.js */ \"./assets/javascript/Category.es6.js\");\n/* harmony import */ var _Theme_es6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Theme.es6.js */ \"./assets/javascript/Theme.es6.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\n\n\nvar App = function App() {\n  _classCallCheck(this, App);\n\n  new _Category_es6_js__WEBPACK_IMPORTED_MODULE_0__[\"Category\"]();\n  new _Theme_es6_js__WEBPACK_IMPORTED_MODULE_1__[\"Theme\"]();\n};\n\nnew App();\n\n//# sourceURL=webpack:///./assets/javascript/index.js?");

/***/ })

/******/ });