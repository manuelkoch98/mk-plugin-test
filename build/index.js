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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

wp.blocks.registerBlockType("ourplugin/text-lottie", {
  title: "Text + Lottie",
  icon: "text",
  category: "common",
  attributes: {
    headline: {
      type: "string"
    },
    content: {
      type: "string"
    },
    url: {
      type: "string"
    },
    left: {
      type: "bool"
    },
    right: {
      type: "bool"
    }
  },
  edit: function edit(props) {
    function updateHeadline(event) {
      props.setAttributes({
        headline: event.target.value
      });
    }

    function updateContent(event) {
      props.setAttributes({
        content: event.target.value
      });
    }

    function updateURL(event) {
      props.setAttributes({
        url: event.target.value
      });
    }

    function updateLeft(event) {
      props.setAttributes({
        left: event.target.value
      });
    }

    function updateRight(event) {
      props.setAttributes({
        right: event.target.value
      });
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", null, "Text + Lottie Block"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h6", null, "\xDCberschrift"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
      type: "text",
      placeholder: "Headline",
      value: props.attributes.headline,
      onChange: updateHeadline
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h6", null, "Text"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("textarea", {
      placeholder: "Content",
      rows: "10",
      cols: "100",
      value: props.attributes.content,
      onChange: updateContent
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h6", null, "LottieFile URL"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
      type: "url",
      placeholder: "Hier Lottie URL platzieren",
      size: "50",
      value: props.attributes.url,
      onChange: updateURL
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      href: "https://lottiefiles.com/",
      target: "_blank"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
      class: "components-button editor-post-publish-panel__toggle editor-post-publish-button__button is-primary"
    }, "lottiefiles.com durchsuchen")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h6", null, "Wollen Sie das Lottie links oder rechts haben?"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      class: "radio"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
      id: "radio-1",
      name: "radio",
      type: "radio",
      onChange: updateRight,
      value: props.attributes.right,
      checked: true
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", {
      for: "radio-1",
      class: "radio-label"
    }, "Right")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      class: "radio"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
      id: "radio-2",
      name: "radio",
      type: "radio",
      onChange: updateLeft,
      value: props.attributes.left
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", {
      for: "radio-2",
      class: "radio-label"
    }, "Left")));
  },
  save: function save(props) {
    return null;
  }
});

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map