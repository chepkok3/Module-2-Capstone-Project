/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins&family=Roboto:wght@300&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.navbar {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n  background-color: black;\r\n  width: 100%;\r\n  height: 88px;\r\n}\r\n\r\nul {\r\n  display: flex;\r\n  list-style: none;\r\n}\r\n\r\n.logo {\r\n  width: 80px;\r\n}\r\n\r\n.nav-items {\r\n  color: white;\r\n  padding-left: 100px;\r\n  text-decoration: none;\r\n  font-family: 'Roboto', sans-serif;\r\n}\r\n\r\n.meal-img {\r\n  width: 20rem;\r\n  border-radius: 10px;\r\n}\r\n\r\n.meals-section {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  width: 100%;\r\n  align-items: center;\r\n  justify-content: space-evenly;\r\n  margin-top: 5rem;\r\n}\r\n\r\n.Loaded-content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 2em;\r\n  background-color: white;\r\n  border: 1px solid rgb(0, 0, 0);\r\n  margin: 1em 0.5em;\r\n  box-shadow: 0 15px 15px -15px black;\r\n  border-radius: 10px;\r\n}\r\n\r\n.meal-details {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  width: 100%;\r\n  height: 100%;\r\n  align-items: center;\r\n}\r\n\r\n.meal-desc {\r\n  align-items: center;\r\n  display: flex;\r\n  width: 100%;\r\n  padding-top: 1.5em;\r\n  justify-content: space-between;\r\n}\r\n\r\n.title {\r\n  font-family: 'Roboto', sans-serif;\r\n  font-weight: 600;\r\n}\r\n\r\n.comment-btn {\r\n  padding: 10px 100px;\r\n  background-color: black;\r\n  color: white;\r\n  margin-top: 20px;\r\n  border-radius: 10px;\r\n  box-shadow: 0 16px 17px -10px black;\r\n  cursor: pointer;\r\n}\r\n\r\n.footer {\r\n  width: 100%;\r\n  background-color: black;\r\n  height: 6rem;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.footer-para {\r\n  color: white;\r\n  font-size: 22px;\r\n  cursor: pointer;\r\n  font-family: 'Roboto', sans-serif;\r\n  word-spacing: 5px;\r\n}\r\n\r\n.git-link {\r\n  text-decoration: none;\r\n  color: white;\r\n  font-family: 'Roboto', sans-serif;\r\n}\r\n\r\n.items-content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  margin-top: 50px;\r\n}\r\n\r\nh1 {\r\n  font-family: 'Roboto', sans-serif;\r\n}\r\n\r\np {\r\n  font-family: 'Roboto', sans-serif;\r\n}\r\n\r\n.items-counter {\r\n  color: red;\r\n}\r\n\r\n/* comments-styling */\r\n.popup-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  z-index: 10;\r\n  width: 60%;\r\n  height: 90vh;\r\n  padding: 30px 50px;\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  border-radius: 10px;\r\n  overflow-y: scroll;\r\n  background-color: #e5e5e5;\r\n}\r\n\r\n.backdrop {\r\n  width: 100vw;\r\n  height: 100vh;\r\n  top: 0;\r\n  left: 0;\r\n  background-color: #afabb3;\r\n  position: fixed;\r\n  backdrop-filter: blur(6px);\r\n  mix-blend-mode: multiply;\r\n}\r\n\r\n.modal-info {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.close {\r\n  float: right;\r\n}\r\n\r\n.modal-popup-img {\r\n  width: 65%;\r\n  height: 80vh;\r\n  filter: drop-shadow(2px 4px 6px black);\r\n  border-radius: 10px;\r\n}\r\n\r\n.meal-description {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 60%;\r\n  font-size: 1.1em;\r\n  padding: 2.5em 0;\r\n  gap: 12px;\r\n}\r\n\r\nh3 {\r\n  font-size: 2em;\r\n  padding: 2em 0 1em 0;\r\n  font-weight: bold;\r\n  letter-spacing: 2px;\r\n}\r\n\r\n.meal-description b {\r\n  color: #000;\r\n  letter-spacing: 6px;\r\n  font-size: 1.3em;\r\n}\r\n\r\n.more-info-links button {\r\n  padding: 6px;\r\n  background-color: white;\r\n}\r\n\r\n.more-info-links a {\r\n  text-decoration: none;\r\n  color: #e1362c;\r\n  background-color: transparent;\r\n}\r\n\r\n.meal-description ul {\r\n  list-style-type: circle;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 6px;\r\n}\r\n\r\n.meal-description li {\r\n  letter-spacing: 3px;\r\n  font-style: italic;\r\n  color: #000;\r\n}\r\n\r\n.tags,\r\n.tag {\r\n  display: flex;\r\n  align-items: baseline;\r\n}\r\n\r\n.tag {\r\n  align-items: center;\r\n  letter-spacing: 2px;\r\n  color: #d2d1d3;\r\n  margin-left: 6px;\r\n}\r\n\r\n.user-comments {\r\n  width: 80%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: 0 auto;\r\n}\r\n\r\n.user-info {\r\n  flex: 1;\r\n}\r\n\r\n.comment b {\r\n  color: #e1362c;\r\n  letter-spacing: 3px;\r\n  font-size: 1.2em;\r\n  filter: drop-shadow(2px 4px 6px black);\r\n}\r\n\r\n.message {\r\n  padding: 0 0.5em;\r\n  font-style: italic;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 2em;\r\n  width: 60%;\r\n  margin: 0 auto;\r\n}\r\n\r\nform > input,\r\nform > textarea {\r\n  border: 1px solid #000;\r\n  border-radius: 6px;\r\n  padding: 1em;\r\n}\r\n\r\nform > input {\r\n  height: 45px;\r\n}\r\n\r\nform > textarea {\r\n  height: 150px;\r\n}\r\n\r\n.submit-btn {\r\n  height: 3rem;\r\n  color: #000;\r\n  font-size: 20px;\r\n  cursor: pointer;\r\n}\r\n\r\n.hidden {\r\n  display: none !important;\r\n}\r\n\r\n.comment-holder {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  line-height: 36px;\r\n}\r\n\r\n.commented {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins&family=Roboto:wght@300&display=swap');\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.navbar {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n  background-color: black;\r\n  width: 100%;\r\n  height: 88px;\r\n}\r\n\r\nul {\r\n  display: flex;\r\n  list-style: none;\r\n}\r\n\r\n.logo {\r\n  width: 80px;\r\n}\r\n\r\n.nav-items {\r\n  color: white;\r\n  padding-left: 100px;\r\n  text-decoration: none;\r\n  font-family: 'Roboto', sans-serif;\r\n}\r\n\r\n.meal-img {\r\n  width: 20rem;\r\n  border-radius: 10px;\r\n}\r\n\r\n.meals-section {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  width: 100%;\r\n  align-items: center;\r\n  justify-content: space-evenly;\r\n  margin-top: 5rem;\r\n}\r\n\r\n.Loaded-content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 2em;\r\n  background-color: white;\r\n  border: 1px solid rgb(0, 0, 0);\r\n  margin: 1em 0.5em;\r\n  box-shadow: 0 15px 15px -15px black;\r\n  border-radius: 10px;\r\n}\r\n\r\n.meal-details {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  width: 100%;\r\n  height: 100%;\r\n  align-items: center;\r\n}\r\n\r\n.meal-desc {\r\n  align-items: center;\r\n  display: flex;\r\n  width: 100%;\r\n  padding-top: 1.5em;\r\n  justify-content: space-between;\r\n}\r\n\r\n.title {\r\n  font-family: 'Roboto', sans-serif;\r\n  font-weight: 600;\r\n}\r\n\r\n.comment-btn {\r\n  padding: 10px 100px;\r\n  background-color: black;\r\n  color: white;\r\n  margin-top: 20px;\r\n  border-radius: 10px;\r\n  box-shadow: 0 16px 17px -10px black;\r\n  cursor: pointer;\r\n}\r\n\r\n.footer {\r\n  width: 100%;\r\n  background-color: black;\r\n  height: 6rem;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.footer-para {\r\n  color: white;\r\n  font-size: 22px;\r\n  cursor: pointer;\r\n  font-family: 'Roboto', sans-serif;\r\n  word-spacing: 5px;\r\n}\r\n\r\n.git-link {\r\n  text-decoration: none;\r\n  color: white;\r\n  font-family: 'Roboto', sans-serif;\r\n}\r\n\r\n.items-content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  margin-top: 50px;\r\n}\r\n\r\nh1 {\r\n  font-family: 'Roboto', sans-serif;\r\n}\r\n\r\np {\r\n  font-family: 'Roboto', sans-serif;\r\n}\r\n\r\n.items-counter {\r\n  color: red;\r\n}\r\n\r\n/* comments-styling */\r\n.popup-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  z-index: 10;\r\n  width: 60%;\r\n  height: 90vh;\r\n  padding: 30px 50px;\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  border-radius: 10px;\r\n  overflow-y: scroll;\r\n  background-color: #e5e5e5;\r\n}\r\n\r\n.backdrop {\r\n  width: 100vw;\r\n  height: 100vh;\r\n  top: 0;\r\n  left: 0;\r\n  background-color: #afabb3;\r\n  position: fixed;\r\n  backdrop-filter: blur(6px);\r\n  mix-blend-mode: multiply;\r\n}\r\n\r\n.modal-info {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.close {\r\n  float: right;\r\n}\r\n\r\n.modal-popup-img {\r\n  width: 65%;\r\n  height: 80vh;\r\n  filter: drop-shadow(2px 4px 6px black);\r\n  border-radius: 10px;\r\n}\r\n\r\n.meal-description {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 60%;\r\n  font-size: 1.1em;\r\n  padding: 2.5em 0;\r\n  gap: 12px;\r\n}\r\n\r\nh3 {\r\n  font-size: 2em;\r\n  padding: 2em 0 1em 0;\r\n  font-weight: bold;\r\n  letter-spacing: 2px;\r\n}\r\n\r\n.meal-description b {\r\n  color: #000;\r\n  letter-spacing: 6px;\r\n  font-size: 1.3em;\r\n}\r\n\r\n.more-info-links button {\r\n  padding: 6px;\r\n  background-color: white;\r\n}\r\n\r\n.more-info-links a {\r\n  text-decoration: none;\r\n  color: #e1362c;\r\n  background-color: transparent;\r\n}\r\n\r\n.meal-description ul {\r\n  list-style-type: circle;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 6px;\r\n}\r\n\r\n.meal-description li {\r\n  letter-spacing: 3px;\r\n  font-style: italic;\r\n  color: #000;\r\n}\r\n\r\n.tags,\r\n.tag {\r\n  display: flex;\r\n  align-items: baseline;\r\n}\r\n\r\n.tag {\r\n  align-items: center;\r\n  letter-spacing: 2px;\r\n  color: #d2d1d3;\r\n  margin-left: 6px;\r\n}\r\n\r\n.user-comments {\r\n  width: 80%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: 0 auto;\r\n}\r\n\r\n.user-info {\r\n  flex: 1;\r\n}\r\n\r\n.comment b {\r\n  color: #e1362c;\r\n  letter-spacing: 3px;\r\n  font-size: 1.2em;\r\n  filter: drop-shadow(2px 4px 6px black);\r\n}\r\n\r\n.message {\r\n  padding: 0 0.5em;\r\n  font-style: italic;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 2em;\r\n  width: 60%;\r\n  margin: 0 auto;\r\n}\r\n\r\nform > input,\r\nform > textarea {\r\n  border: 1px solid #000;\r\n  border-radius: 6px;\r\n  padding: 1em;\r\n}\r\n\r\nform > input {\r\n  height: 45px;\r\n}\r\n\r\nform > textarea {\r\n  height: 150px;\r\n}\r\n\r\n.submit-btn {\r\n  height: 3rem;\r\n  color: #000;\r\n  font-size: 20px;\r\n  cursor: pointer;\r\n}\r\n\r\n.hidden {\r\n  display: none !important;\r\n}\r\n\r\n.comment-holder {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  line-height: 36px;\r\n}\r\n\r\n.commented {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/commentsAPI.js":
/*!************************************!*\
  !*** ./src/modules/commentsAPI.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getComments": () => (/* binding */ getComments),
/* harmony export */   "postComment": () => (/* binding */ postComment)
/* harmony export */ });
const postComment = async (itemId, name, message) => {
  const response = await fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/4gg2lZ1zSqYloD1ZmP4A/comments',
    {
      method: 'POST',
      body: JSON.stringify({
        item_id: itemId,
        username: name,
        comment: message,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  const responseText = await response.text();
  return responseText;
};

const getComments = async (itemId) => {
  const response = await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/4gg2lZ1zSqYloD1ZmP4A/comments?item_id=${itemId}`,
  );
  if (response.status === 200) {
    const responseJSON = await response.json();
    return responseJSON;
  }
  return [];
};




/***/ }),

/***/ "./src/modules/counter/commentCounter.js":
/*!***********************************************!*\
  !*** ./src/modules/counter/commentCounter.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const commentsCounter = () => {
  const commentSection = document.querySelector('.meal-comments');
  if (commentSection) {
    return commentSection.children.length;
  }
  return 0;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentsCounter);


/***/ }),

/***/ "./src/modules/counter/itemsCounter.js":
/*!*********************************************!*\
  !*** ./src/modules/counter/itemsCounter.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const ItemsCounter = () => {
  const mealsEl = document.querySelectorAll('.meals-section > div');
  return mealsEl.length;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ItemsCounter);

/***/ }),

/***/ "./src/modules/getLikes.js":
/*!*********************************!*\
  !*** ./src/modules/getLikes.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLikes": () => (/* binding */ getLikes),
/* harmony export */   "postLike": () => (/* binding */ postLike)
/* harmony export */ });
const postLike = async (itemId) => {
  const response = await fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/YDk6ZvYJ9bRgBt60cLN9/likes',
    {
      method: 'POST',
      body: JSON.stringify({
        item_id: itemId,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  const responseText = await response.text();
  return responseText;
};

const getLikes = async () => {
  const response = await fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/YDk6ZvYJ9bRgBt60cLN9/likes',
  );
  const responseJSON = await response.json();
  return responseJSON;
};




/***/ }),

/***/ "./src/modules/getMeals.js":
/*!*********************************!*\
  !*** ./src/modules/getMeals.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getMeals = async () => {
  const response = await fetch(
    'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood',
    {
      method: 'GET',
    },
  );
  const responseJSON = await response.json();
  return responseJSON;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMeals);


/***/ }),

/***/ "./src/modules/popUp.js":
/*!******************************!*\
  !*** ./src/modules/popUp.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _commentsAPI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commentsAPI.js */ "./src/modules/commentsAPI.js");
/* harmony import */ var _counter_commentCounter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./counter/commentCounter.js */ "./src/modules/counter/commentCounter.js");



const getMealDetail = async (idMeal) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`,
  );
  const responseJSON = await response.json();
  return responseJSON;
};

const popUpSection = document.querySelector('.popup-section');
const parser = new DOMParser();

const displayModal = async (idMeal) => {
  popUpSection.innerHTML = '<div class="backdrop"></div>';

  const commentsList = await (0,_commentsAPI_js__WEBPACK_IMPORTED_MODULE_0__.getComments)(idMeal);

  getMealDetail(idMeal).then((meal) => {
    const string = `
    <div class="popup-container">
      <div class="modal-popup">
        <i class="fa-solid fa-xmark close"></i>
        <div class="modal-info">
          <img src=${
  meal.meals[0].strMealThumb
} alt="Thumbnail" class="modal-popup-img">  
          <h3 class="game-title">${meal.meals[0].strMeal}</h3>
          <div class="more-info-links">
            <button> <a href="${meal.meals[0].strSource}"> Source</a></button>
            <button> <a href="${meal.meals[0].strYoutube}"> Youtube</a></button>
          </div>
          <div class="meal-description">    
            <p><b> Food Ingredients </b></p>
            <ul>
              <li>${meal.meals[0].strIngredient1}: ${
  meal.meals[0].strMeasure1
}</li>
              <li>${meal.meals[0].strIngredient2}: ${
  meal.meals[0].strMeasure2
}</li>
              <li>${meal.meals[0].strIngredient3}: ${
  meal.meals[0].strMeasure3
}</li>
              <li>${meal.meals[0].strIngredient4}: ${
  meal.meals[0].strMeasure4
}</li>
              <li>${meal.meals[0].strIngredient5}: ${
  meal.meals[0].strMeasure5
}</li>
            </ul>
            <p><b>Recipe</b></p>
            <p>${meal.meals[0].strInstructions}</p>  
            <div class="tags"> <b>Tags:</b> ${(meal.meals[0].strTags || '')
    .split(',')
    .map((el) => `<code class='tag'>${el}</code>`)}</div>
          </div>
        </div>

        <h3 class="counter">Comments(<b class="total-comments">0</b>)</h3>  
        <div class='meal-comments'> 
        ${
  commentsList
    ? commentsList
      .map(
        (comment) => `
          <div class="comment">
            <div class="commented">
              <div class="username"><b>${comment.username}:</b></div>
              <div class="message">${comment.comment}</div>
            </div>
          <div class="date">${comment.creation_date}</div>
          </div>
        `,
      )
      .join('')
    : ''
}
        
        </div>
          <h3>Input your Comment</h3>
          <form class="comments-posted">
            <input type="text" name="username" class="user-name" placeholder="Your name" required>
            <textarea class="user-comment" name="comment" placeholder="Your insights" required></textarea>
            <button type="submit" class="submit-btn">Submit</button>
          </form>
        </div>
      </div>`;

    const stringElement = parser.parseFromString(string, 'text/html').body
      .firstChild;
    popUpSection.append(stringElement);

    const closeBtn = stringElement.querySelector('.close');
    closeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      popUpSection.classList.add('hidden');
    });

    const form = stringElement.querySelector('form');
    const commentSection = document.querySelector('.meal-comments');
    const commentsCounterEl = stringElement.querySelector('.total-comments');

    commentsCounterEl.innerHTML = `${(0,_counter_commentCounter_js__WEBPACK_IMPORTED_MODULE_1__["default"])()}`;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const user = formData.get('username');
      const message = formData.get('comment');
      (0,_commentsAPI_js__WEBPACK_IMPORTED_MODULE_0__.postComment)(idMeal, user, message);
      let today = new Date();
      const dd = String(today.getDate()).padStart(2, '0');
      const mm = String(today.getMonth() + 1).padStart(2, '0');
      const yyyy = today.getFullYear();
      today = `${mm}/${dd}/${yyyy}`;

      const commentString = `
        <div class="comment">
          <div class="commented">
            <div class="username"><b>${user}:</b></div>
            <div class="message">${message}</div>
          </div>
        <div class="date">${today}</div>
      </div>`;

      const commentElement = parser.parseFromString(commentString, 'text/html')
        .body.firstChild;
      commentSection.append(commentElement);
      form.reset();
      commentsCounterEl.innerHTML = `${(0,_counter_commentCounter_js__WEBPACK_IMPORTED_MODULE_1__["default"])()}`;
    });
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayModal);


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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_popUp_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/popUp.js */ "./src/modules/popUp.js");
/* harmony import */ var _modules_getMeals_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/getMeals.js */ "./src/modules/getMeals.js");
/* harmony import */ var _modules_getLikes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/getLikes.js */ "./src/modules/getLikes.js");
/* harmony import */ var _modules_counter_itemsCounter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/counter/itemsCounter.js */ "./src/modules/counter/itemsCounter.js");






const mealsSection = document.querySelector('.meals-section');
const popUpSection = document.querySelector('.popup-section');
const parser = new DOMParser();

const init = async () => {
  const likesArray = await (0,_modules_getLikes_js__WEBPACK_IMPORTED_MODULE_3__.getLikes)();
  const mealsArray = await (0,_modules_getMeals_js__WEBPACK_IMPORTED_MODULE_2__["default"])();

  const combinedArray = mealsArray.meals.map((meal) => {
    const likeForThisMeal = likesArray.filter(
      (likeObj) => likeObj.item_id === meal.idMeal,
    );
    return {
      strMealThumb: meal.strMealThumb,
      strMeal: meal.strMeal,
      idMeal: meal.idMeal,
      likes: likeForThisMeal.length === 0 ? 0 : likeForThisMeal[0].likes,
    };
  });

  combinedArray.forEach((mealWithLike) => {
    const string = `
      <div class="Loaded-content">
        <img src="${mealWithLike.strMealThumb}" alt="meal" class="meal-img">
        <div class="meal-details">
          <div class="meal-desc">
            <p class="title">${mealWithLike.strMeal}</p>
            <div class="like m-0" id="${mealWithLike.idMeal}">
              <p class='likes m-0'>${mealWithLike.likes}</p>
              <i class="far fa-heart like-btn"></i>
            </div>
          </div>
          <button type="button" class="comment-btn">Comments</button>
        </div>
      </div>`;

    const stringElement = parser.parseFromString(string, 'text/html').body
      .firstChild;

    const likeBtn = stringElement.querySelector('.like-btn');
    const likeEl = stringElement.querySelector('.likes');

    likeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      (0,_modules_getLikes_js__WEBPACK_IMPORTED_MODULE_3__.postLike)(mealWithLike.idMeal);
      mealWithLike.likes += 1;
      likeEl.innerHTML = `${mealWithLike.likes}`;
      e.target.classList.remove('far');
      e.target.classList.add('fas');
      likeEl.style.color = '#e1362c';
    });

    mealsSection.append(stringElement);

    const commentbtn = stringElement.querySelector('.comment-btn');
    commentbtn.addEventListener('click', (e) => {
      e.preventDefault();
      popUpSection.classList.remove('hidden');
      (0,_modules_popUp_js__WEBPACK_IMPORTED_MODULE_1__["default"])(mealWithLike.idMeal);
    });
  });
  const totalItems = (0,_modules_counter_itemsCounter_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const itemsCounterEl = document.querySelector('.items-counter');
  itemsCounterEl.innerHTML = `(${totalItems})`;
};

init();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QXFDLDBCQUEwQixLQUFLLFdBQVcsZ0ZBQWdGLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtB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VztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ3lCO0FBQ0Q7QUFDYztBQUNFO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiw4REFBUTtBQUNuQywyQkFBMkIsZ0VBQVE7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiwwQkFBMEI7QUFDOUM7QUFDQTtBQUNBLCtCQUErQixxQkFBcUI7QUFDcEQsd0NBQXdDLG9CQUFvQjtBQUM1RCxxQ0FBcUMsbUJBQW1CO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sOERBQVE7QUFDZDtBQUNBLDRCQUE0QixtQkFBbUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSw2REFBWTtBQUNsQixLQUFLO0FBQ0wsR0FBRztBQUNILHFCQUFxQiw0RUFBWTtBQUNqQztBQUNBLGlDQUFpQyxXQUFXO0FBQzVDO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2svLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYnBhY2svLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2svLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay8uL3NyYy9tb2R1bGVzL2NvbW1lbnRzQVBJLmpzIiwid2VicGFjazovL3dlYnBhY2svLi9zcmMvbW9kdWxlcy9jb3VudGVyL2NvbW1lbnRDb3VudGVyLmpzIiwid2VicGFjazovL3dlYnBhY2svLi9zcmMvbW9kdWxlcy9jb3VudGVyL2l0ZW1zQ291bnRlci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL21vZHVsZXMvZ2V0TGlrZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay8uL3NyYy9tb2R1bGVzL2dldE1lYWxzLmpzIiwid2VicGFjazovL3dlYnBhY2svLi9zcmMvbW9kdWxlcy9wb3BVcC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGlucyZmYW1pbHk9Um9ib3RvOndnaHRAMzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogODhweDtcXHJcXG59XFxyXFxuXFxyXFxudWwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5sb2dvIHtcXHJcXG4gIHdpZHRoOiA4MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWl0ZW1zIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHBhZGRpbmctbGVmdDogMTAwcHg7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLWltZyB7XFxyXFxuICB3aWR0aDogMjByZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbHMtc2VjdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICBtYXJnaW4tdG9wOiA1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uTG9hZGVkLWNvbnRlbnQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMCwgMCwgMCk7XFxyXFxuICBtYXJnaW46IDFlbSAwLjVlbTtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMTVweCAxNXB4IC0xNXB4IGJsYWNrO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtZGV0YWlscyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtZGVzYyB7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZy10b3A6IDEuNWVtO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUge1xcclxcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtYnRuIHtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMTAwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgYm94LXNoYWRvdzogMCAxNnB4IDE3cHggLTEwcHggYmxhY2s7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gIGhlaWdodDogNnJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXItcGFyYSB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBmb250LXNpemU6IDIycHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxyXFxuICB3b3JkLXNwYWNpbmc6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmdpdC1saW5rIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW1zLWNvbnRlbnQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luLXRvcDogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5wIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW1zLWNvdW50ZXIge1xcclxcbiAgY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLyogY29tbWVudHMtc3R5bGluZyAqL1xcclxcbi5wb3B1cC1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgei1pbmRleDogMTA7XFxyXFxuICB3aWR0aDogNjAlO1xcclxcbiAgaGVpZ2h0OiA5MHZoO1xcclxcbiAgcGFkZGluZzogMzBweCA1MHB4O1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlNWU1O1xcclxcbn1cXHJcXG5cXHJcXG4uYmFja2Ryb3Age1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWZhYmIzO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDZweCk7XFxyXFxuICBtaXgtYmxlbmQtbW9kZTogbXVsdGlwbHk7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC1pbmZvIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlIHtcXHJcXG4gIGZsb2F0OiByaWdodDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLXBvcHVwLWltZyB7XFxyXFxuICB3aWR0aDogNjUlO1xcclxcbiAgaGVpZ2h0OiA4MHZoO1xcclxcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygycHggNHB4IDZweCBibGFjayk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1kZXNjcmlwdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHdpZHRoOiA2MCU7XFxyXFxuICBmb250LXNpemU6IDEuMWVtO1xcclxcbiAgcGFkZGluZzogMi41ZW0gMDtcXHJcXG4gIGdhcDogMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuaDMge1xcclxcbiAgZm9udC1zaXplOiAyZW07XFxyXFxuICBwYWRkaW5nOiAyZW0gMCAxZW0gMDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtZGVzY3JpcHRpb24gYiB7XFxyXFxuICBjb2xvcjogIzAwMDtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiA2cHg7XFxyXFxuICBmb250LXNpemU6IDEuM2VtO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9yZS1pbmZvLWxpbmtzIGJ1dHRvbiB7XFxyXFxuICBwYWRkaW5nOiA2cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vcmUtaW5mby1saW5rcyBhIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiAjZTEzNjJjO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLWRlc2NyaXB0aW9uIHVsIHtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogY2lyY2xlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDZweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtZGVzY3JpcHRpb24gbGkge1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDNweDtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gIGNvbG9yOiAjMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4udGFncyxcXHJcXG4udGFnIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxyXFxufVxcclxcblxcclxcbi50YWcge1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XFxyXFxuICBjb2xvcjogI2QyZDFkMztcXHJcXG4gIG1hcmdpbi1sZWZ0OiA2cHg7XFxyXFxufVxcclxcblxcclxcbi51c2VyLWNvbW1lbnRzIHtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4udXNlci1pbmZvIHtcXHJcXG4gIGZsZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50IGIge1xcclxcbiAgY29sb3I6ICNlMTM2MmM7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogM3B4O1xcclxcbiAgZm9udC1zaXplOiAxLjJlbTtcXHJcXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMnB4IDRweCA2cHggYmxhY2spO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVzc2FnZSB7XFxyXFxuICBwYWRkaW5nOiAwIDAuNWVtO1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAyZW07XFxyXFxuICB3aWR0aDogNjAlO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbmZvcm0gPiBpbnB1dCxcXHJcXG5mb3JtID4gdGV4dGFyZWEge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gIHBhZGRpbmc6IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSA+IGlucHV0IHtcXHJcXG4gIGhlaWdodDogNDVweDtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSA+IHRleHRhcmVhIHtcXHJcXG4gIGhlaWdodDogMTUwcHg7XFxyXFxufVxcclxcblxcclxcbi5zdWJtaXQtYnRuIHtcXHJcXG4gIGhlaWdodDogM3JlbTtcXHJcXG4gIGNvbG9yOiAjMDAwO1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZGVuIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtaG9sZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50ZWQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsV0FBVztFQUNYLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VB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QUN0QixRQUFRO0VBQ1IsVUFBVTtFQUNWLGNBQWM7QUFDaEI7O0FBRUE7O0VBRUUsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGlucyZmYW1pbHk9Um9ib3RvOndnaHRAMzAwJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogODhweDtcXHJcXG59XFxyXFxuXFxyXFxudWwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5sb2dvIHtcXHJcXG4gIHdpZHRoOiA4MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWl0ZW1zIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHBhZGRpbmctbGVmdDogMTAwcHg7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLWltZyB7XFxyXFxuICB3aWR0aDogMjByZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbHMtc2VjdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICBtYXJnaW4tdG9wOiA1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uTG9hZGVkLWNvbnRlbnQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMCwgMCwgMCk7XFxyXFxuICBtYXJnaW46IDFlbSAwLjVlbTtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMTVweCAxNXB4IC0xNXB4IGJsYWNrO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtZGV0YWlscyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtZGVzYyB7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZy10b3A6IDEuNWVtO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUge1xcclxcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtYnRuIHtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMTAwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgYm94LXNoYWRvdzogMCAxNnB4IDE3cHggLTEwcHggYmxhY2s7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gIGhlaWdodDogNnJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXItcGFyYSB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBmb250LXNpemU6IDIycHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxyXFxuICB3b3JkLXNwYWNpbmc6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmdpdC1saW5rIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW1zLWNvbnRlbnQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luLXRvcDogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5wIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW1zLWNvdW50ZXIge1xcclxcbiAgY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLyogY29tbWVudHMtc3R5bGluZyAqL1xcclxcbi5wb3B1cC1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgei1pbmRleDogMTA7XFxyXFxuICB3aWR0aDogNjAlO1xcclxcbiAgaGVpZ2h0OiA5MHZoO1xcclxcbiAgcGFkZGluZzogMzBweCA1MHB4O1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlNWU1O1xcclxcbn1cXHJcXG5cXHJcXG4uYmFja2Ryb3Age1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWZhYmIzO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDZweCk7XFxyXFxuICBtaXgtYmxlbmQtbW9kZTogbXVsdGlwbHk7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC1pbmZvIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlIHtcXHJcXG4gIGZsb2F0OiByaWdodDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLXBvcHVwLWltZyB7XFxyXFxuICB3aWR0aDogNjUlO1xcclxcbiAgaGVpZ2h0OiA4MHZoO1xcclxcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygycHggNHB4IDZweCBibGFjayk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1kZXNjcmlwdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHdpZHRoOiA2MCU7XFxyXFxuICBmb250LXNpemU6IDEuMWVtO1xcclxcbiAgcGFkZGluZzogMi41ZW0gMDtcXHJcXG4gIGdhcDogMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuaDMge1xcclxcbiAgZm9udC1zaXplOiAyZW07XFxyXFxuICBwYWRkaW5nOiAyZW0gMCAxZW0gMDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtZGVzY3JpcHRpb24gYiB7XFxyXFxuICBjb2xvcjogIzAwMDtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiA2cHg7XFxyXFxuICBmb250LXNpemU6IDEuM2VtO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9yZS1pbmZvLWxpbmtzIGJ1dHRvbiB7XFxyXFxuICBwYWRkaW5nOiA2cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vcmUtaW5mby1saW5rcyBhIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiAjZTEzNjJjO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLWRlc2NyaXB0aW9uIHVsIHtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogY2lyY2xlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDZweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtZGVzY3JpcHRpb24gbGkge1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDNweDtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gIGNvbG9yOiAjMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4udGFncyxcXHJcXG4udGFnIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxyXFxufVxcclxcblxcclxcbi50YWcge1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XFxyXFxuICBjb2xvcjogI2QyZDFkMztcXHJcXG4gIG1hcmdpbi1sZWZ0OiA2cHg7XFxyXFxufVxcclxcblxcclxcbi51c2VyLWNvbW1lbnRzIHtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4udXNlci1pbmZvIHtcXHJcXG4gIGZsZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50IGIge1xcclxcbiAgY29sb3I6ICNlMTM2MmM7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogM3B4O1xcclxcbiAgZm9udC1zaXplOiAxLjJlbTtcXHJcXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMnB4IDRweCA2cHggYmxhY2spO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVzc2FnZSB7XFxyXFxuICBwYWRkaW5nOiAwIDAuNWVtO1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAyZW07XFxyXFxuICB3aWR0aDogNjAlO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbmZvcm0gPiBpbnB1dCxcXHJcXG5mb3JtID4gdGV4dGFyZWEge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gIHBhZGRpbmc6IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSA+IGlucHV0IHtcXHJcXG4gIGhlaWdodDogNDVweDtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSA+IHRleHRhcmVhIHtcXHJcXG4gIGhlaWdodDogMTUwcHg7XFxyXFxufVxcclxcblxcclxcbi5zdWJtaXQtYnRuIHtcXHJcXG4gIGhlaWdodDogM3JlbTtcXHJcXG4gIGNvbG9yOiAjMDAwO1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZGVuIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtaG9sZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50ZWQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgcG9zdENvbW1lbnQgPSBhc3luYyAoaXRlbUlkLCBuYW1lLCBtZXNzYWdlKSA9PiB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy80Z2cybFoxelNxWWxvRDFabVA0QS9jb21tZW50cycsXHJcbiAgICB7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgaXRlbV9pZDogaXRlbUlkLFxyXG4gICAgICAgIHVzZXJuYW1lOiBuYW1lLFxyXG4gICAgICAgIGNvbW1lbnQ6IG1lc3NhZ2UsXHJcbiAgICAgIH0pLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgKTtcclxuICBjb25zdCByZXNwb25zZVRleHQgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XHJcbiAgcmV0dXJuIHJlc3BvbnNlVGV4dDtcclxufTtcclxuXHJcbmNvbnN0IGdldENvbW1lbnRzID0gYXN5bmMgKGl0ZW1JZCkgPT4ge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICBgaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvNGdnMmxaMXpTcVlsb0QxWm1QNEEvY29tbWVudHM/aXRlbV9pZD0ke2l0ZW1JZH1gLFxyXG4gICk7XHJcbiAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICBjb25zdCByZXNwb25zZUpTT04gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICByZXR1cm4gcmVzcG9uc2VKU09OO1xyXG4gIH1cclxuICByZXR1cm4gW107XHJcbn07XHJcblxyXG5leHBvcnQgeyBwb3N0Q29tbWVudCwgZ2V0Q29tbWVudHMgfTtcclxuIiwiY29uc3QgY29tbWVudHNDb3VudGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNvbW1lbnRTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lYWwtY29tbWVudHMnKTtcclxuICBpZiAoY29tbWVudFNlY3Rpb24pIHtcclxuICAgIHJldHVybiBjb21tZW50U2VjdGlvbi5jaGlsZHJlbi5sZW5ndGg7XHJcbiAgfVxyXG4gIHJldHVybiAwO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29tbWVudHNDb3VudGVyO1xyXG4iLCJjb25zdCBJdGVtc0NvdW50ZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgbWVhbHNFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZWFscy1zZWN0aW9uID4gZGl2Jyk7XHJcbiAgcmV0dXJuIG1lYWxzRWwubGVuZ3RoO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSXRlbXNDb3VudGVyOyIsImNvbnN0IHBvc3RMaWtlID0gYXN5bmMgKGl0ZW1JZCkgPT4ge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvWURrNlp2WUo5YlJnQnQ2MGNMTjkvbGlrZXMnLFxyXG4gICAge1xyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIGl0ZW1faWQ6IGl0ZW1JZCxcclxuICAgICAgfSksXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICApO1xyXG4gIGNvbnN0IHJlc3BvbnNlVGV4dCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcclxuICByZXR1cm4gcmVzcG9uc2VUZXh0O1xyXG59O1xyXG5cclxuY29uc3QgZ2V0TGlrZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9ZRGs2WnZZSjliUmdCdDYwY0xOOS9saWtlcycsXHJcbiAgKTtcclxuICBjb25zdCByZXNwb25zZUpTT04gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgcmV0dXJuIHJlc3BvbnNlSlNPTjtcclxufTtcclxuXHJcbmV4cG9ydCB7IGdldExpa2VzLCBwb3N0TGlrZSB9O1xyXG4iLCJjb25zdCBnZXRNZWFscyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAnaHR0cHM6Ly93d3cudGhlbWVhbGRiLmNvbS9hcGkvanNvbi92MS8xL2ZpbHRlci5waHA/Yz1TZWFmb29kJyxcbiAgICB7XG4gICAgICBtZXRob2Q6ICdHRVQnLFxuICAgIH0sXG4gICk7XG4gIGNvbnN0IHJlc3BvbnNlSlNPTiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIHJlc3BvbnNlSlNPTjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldE1lYWxzO1xuIiwiaW1wb3J0IHsgcG9zdENvbW1lbnQsIGdldENvbW1lbnRzIH0gZnJvbSAnLi9jb21tZW50c0FQSS5qcyc7XHJcbmltcG9ydCBjb21tZW50c0NvdW50ZXIgZnJvbSAnLi9jb3VudGVyL2NvbW1lbnRDb3VudGVyLmpzJztcclxuXHJcbmNvbnN0IGdldE1lYWxEZXRhaWwgPSBhc3luYyAoaWRNZWFsKSA9PiB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgIGBodHRwczovL3d3dy50aGVtZWFsZGIuY29tL2FwaS9qc29uL3YxLzEvbG9va3VwLnBocD9pPSR7aWRNZWFsfWAsXHJcbiAgKTtcclxuICBjb25zdCByZXNwb25zZUpTT04gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgcmV0dXJuIHJlc3BvbnNlSlNPTjtcclxufTtcclxuXHJcbmNvbnN0IHBvcFVwU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC1zZWN0aW9uJyk7XHJcbmNvbnN0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcclxuXHJcbmNvbnN0IGRpc3BsYXlNb2RhbCA9IGFzeW5jIChpZE1lYWwpID0+IHtcclxuICBwb3BVcFNlY3Rpb24uaW5uZXJIVE1MID0gJzxkaXYgY2xhc3M9XCJiYWNrZHJvcFwiPjwvZGl2Pic7XHJcblxyXG4gIGNvbnN0IGNvbW1lbnRzTGlzdCA9IGF3YWl0IGdldENvbW1lbnRzKGlkTWVhbCk7XHJcblxyXG4gIGdldE1lYWxEZXRhaWwoaWRNZWFsKS50aGVuKChtZWFsKSA9PiB7XHJcbiAgICBjb25zdCBzdHJpbmcgPSBgXHJcbiAgICA8ZGl2IGNsYXNzPVwicG9wdXAtY29udGFpbmVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1wb3B1cFwiPlxyXG4gICAgICAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEteG1hcmsgY2xvc2VcIj48L2k+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWluZm9cIj5cclxuICAgICAgICAgIDxpbWcgc3JjPSR7XHJcbiAgbWVhbC5tZWFsc1swXS5zdHJNZWFsVGh1bWJcclxufSBhbHQ9XCJUaHVtYm5haWxcIiBjbGFzcz1cIm1vZGFsLXBvcHVwLWltZ1wiPiAgXHJcbiAgICAgICAgICA8aDMgY2xhc3M9XCJnYW1lLXRpdGxlXCI+JHttZWFsLm1lYWxzWzBdLnN0ck1lYWx9PC9oMz5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb3JlLWluZm8tbGlua3NcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbj4gPGEgaHJlZj1cIiR7bWVhbC5tZWFsc1swXS5zdHJTb3VyY2V9XCI+IFNvdXJjZTwvYT48L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbj4gPGEgaHJlZj1cIiR7bWVhbC5tZWFsc1swXS5zdHJZb3V0dWJlfVwiPiBZb3V0dWJlPC9hPjwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC1kZXNjcmlwdGlvblwiPiAgICBcclxuICAgICAgICAgICAgPHA+PGI+IEZvb2QgSW5ncmVkaWVudHMgPC9iPjwvcD5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgIDxsaT4ke21lYWwubWVhbHNbMF0uc3RySW5ncmVkaWVudDF9OiAke1xyXG4gIG1lYWwubWVhbHNbMF0uc3RyTWVhc3VyZTFcclxufTwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPiR7bWVhbC5tZWFsc1swXS5zdHJJbmdyZWRpZW50Mn06ICR7XHJcbiAgbWVhbC5tZWFsc1swXS5zdHJNZWFzdXJlMlxyXG59PC9saT5cclxuICAgICAgICAgICAgICA8bGk+JHttZWFsLm1lYWxzWzBdLnN0ckluZ3JlZGllbnQzfTogJHtcclxuICBtZWFsLm1lYWxzWzBdLnN0ck1lYXN1cmUzXHJcbn08L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT4ke21lYWwubWVhbHNbMF0uc3RySW5ncmVkaWVudDR9OiAke1xyXG4gIG1lYWwubWVhbHNbMF0uc3RyTWVhc3VyZTRcclxufTwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPiR7bWVhbC5tZWFsc1swXS5zdHJJbmdyZWRpZW50NX06ICR7XHJcbiAgbWVhbC5tZWFsc1swXS5zdHJNZWFzdXJlNVxyXG59PC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPHA+PGI+UmVjaXBlPC9iPjwvcD5cclxuICAgICAgICAgICAgPHA+JHttZWFsLm1lYWxzWzBdLnN0ckluc3RydWN0aW9uc308L3A+ICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhZ3NcIj4gPGI+VGFnczo8L2I+ICR7KG1lYWwubWVhbHNbMF0uc3RyVGFncyB8fCAnJylcclxuICAgIC5zcGxpdCgnLCcpXHJcbiAgICAubWFwKChlbCkgPT4gYDxjb2RlIGNsYXNzPSd0YWcnPiR7ZWx9PC9jb2RlPmApfTwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxoMyBjbGFzcz1cImNvdW50ZXJcIj5Db21tZW50cyg8YiBjbGFzcz1cInRvdGFsLWNvbW1lbnRzXCI+MDwvYj4pPC9oMz4gIFxyXG4gICAgICAgIDxkaXYgY2xhc3M9J21lYWwtY29tbWVudHMnPiBcclxuICAgICAgICAke1xyXG4gIGNvbW1lbnRzTGlzdFxyXG4gICAgPyBjb21tZW50c0xpc3RcclxuICAgICAgLm1hcChcclxuICAgICAgICAoY29tbWVudCkgPT4gYFxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbW1lbnRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbW1lbnRlZFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1c2VybmFtZVwiPjxiPiR7Y29tbWVudC51c2VybmFtZX06PC9iPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZXNzYWdlXCI+JHtjb21tZW50LmNvbW1lbnR9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImRhdGVcIj4ke2NvbW1lbnQuY3JlYXRpb25fZGF0ZX08L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGAsXHJcbiAgICAgIClcclxuICAgICAgLmpvaW4oJycpXHJcbiAgICA6ICcnXHJcbn1cclxuICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxoMz5JbnB1dCB5b3VyIENvbW1lbnQ8L2gzPlxyXG4gICAgICAgICAgPGZvcm0gY2xhc3M9XCJjb21tZW50cy1wb3N0ZWRcIj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInVzZXJuYW1lXCIgY2xhc3M9XCJ1c2VyLW5hbWVcIiBwbGFjZWhvbGRlcj1cIllvdXIgbmFtZVwiIHJlcXVpcmVkPlxyXG4gICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3M9XCJ1c2VyLWNvbW1lbnRcIiBuYW1lPVwiY29tbWVudFwiIHBsYWNlaG9sZGVyPVwiWW91ciBpbnNpZ2h0c1wiIHJlcXVpcmVkPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwic3VibWl0LWJ0blwiPlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5gO1xyXG5cclxuICAgIGNvbnN0IHN0cmluZ0VsZW1lbnQgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKHN0cmluZywgJ3RleHQvaHRtbCcpLmJvZHlcclxuICAgICAgLmZpcnN0Q2hpbGQ7XHJcbiAgICBwb3BVcFNlY3Rpb24uYXBwZW5kKHN0cmluZ0VsZW1lbnQpO1xyXG5cclxuICAgIGNvbnN0IGNsb3NlQnRuID0gc3RyaW5nRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UnKTtcclxuICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBwb3BVcFNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBmb3JtID0gc3RyaW5nRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XHJcbiAgICBjb25zdCBjb21tZW50U2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZWFsLWNvbW1lbnRzJyk7XHJcbiAgICBjb25zdCBjb21tZW50c0NvdW50ZXJFbCA9IHN0cmluZ0VsZW1lbnQucXVlcnlTZWxlY3RvcignLnRvdGFsLWNvbW1lbnRzJyk7XHJcblxyXG4gICAgY29tbWVudHNDb3VudGVyRWwuaW5uZXJIVE1MID0gYCR7Y29tbWVudHNDb3VudGVyKCl9YDtcclxuXHJcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSk7XHJcbiAgICAgIGNvbnN0IHVzZXIgPSBmb3JtRGF0YS5nZXQoJ3VzZXJuYW1lJyk7XHJcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBmb3JtRGF0YS5nZXQoJ2NvbW1lbnQnKTtcclxuICAgICAgcG9zdENvbW1lbnQoaWRNZWFsLCB1c2VyLCBtZXNzYWdlKTtcclxuICAgICAgbGV0IHRvZGF5ID0gbmV3IERhdGUoKTtcclxuICAgICAgY29uc3QgZGQgPSBTdHJpbmcodG9kYXkuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCAnMCcpO1xyXG4gICAgICBjb25zdCBtbSA9IFN0cmluZyh0b2RheS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgJzAnKTtcclxuICAgICAgY29uc3QgeXl5eSA9IHRvZGF5LmdldEZ1bGxZZWFyKCk7XHJcbiAgICAgIHRvZGF5ID0gYCR7bW19LyR7ZGR9LyR7eXl5eX1gO1xyXG5cclxuICAgICAgY29uc3QgY29tbWVudFN0cmluZyA9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29tbWVudFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbW1lbnRlZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidXNlcm5hbWVcIj48Yj4ke3VzZXJ9OjwvYj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lc3NhZ2VcIj4ke21lc3NhZ2V9PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0ZVwiPiR7dG9kYXl9PC9kaXY+XHJcbiAgICAgIDwvZGl2PmA7XHJcblxyXG4gICAgICBjb25zdCBjb21tZW50RWxlbWVudCA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoY29tbWVudFN0cmluZywgJ3RleHQvaHRtbCcpXHJcbiAgICAgICAgLmJvZHkuZmlyc3RDaGlsZDtcclxuICAgICAgY29tbWVudFNlY3Rpb24uYXBwZW5kKGNvbW1lbnRFbGVtZW50KTtcclxuICAgICAgZm9ybS5yZXNldCgpO1xyXG4gICAgICBjb21tZW50c0NvdW50ZXJFbC5pbm5lckhUTUwgPSBgJHtjb21tZW50c0NvdW50ZXIoKX1gO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5TW9kYWw7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgZGlzcGxheU1vZGFsIGZyb20gJy4vbW9kdWxlcy9wb3BVcC5qcyc7XHJcbmltcG9ydCBnZXRNZWFscyBmcm9tICcuL21vZHVsZXMvZ2V0TWVhbHMuanMnO1xyXG5pbXBvcnQgeyBnZXRMaWtlcywgcG9zdExpa2UgfSBmcm9tICcuL21vZHVsZXMvZ2V0TGlrZXMuanMnO1xyXG5pbXBvcnQgSXRlbXNDb3VudGVyIGZyb20gJy4vbW9kdWxlcy9jb3VudGVyL2l0ZW1zQ291bnRlci5qcyc7XHJcblxyXG5jb25zdCBtZWFsc1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVhbHMtc2VjdGlvbicpO1xyXG5jb25zdCBwb3BVcFNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAtc2VjdGlvbicpO1xyXG5jb25zdCBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XHJcblxyXG5jb25zdCBpbml0ID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IGxpa2VzQXJyYXkgPSBhd2FpdCBnZXRMaWtlcygpO1xyXG4gIGNvbnN0IG1lYWxzQXJyYXkgPSBhd2FpdCBnZXRNZWFscygpO1xyXG5cclxuICBjb25zdCBjb21iaW5lZEFycmF5ID0gbWVhbHNBcnJheS5tZWFscy5tYXAoKG1lYWwpID0+IHtcclxuICAgIGNvbnN0IGxpa2VGb3JUaGlzTWVhbCA9IGxpa2VzQXJyYXkuZmlsdGVyKFxyXG4gICAgICAobGlrZU9iaikgPT4gbGlrZU9iai5pdGVtX2lkID09PSBtZWFsLmlkTWVhbCxcclxuICAgICk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdHJNZWFsVGh1bWI6IG1lYWwuc3RyTWVhbFRodW1iLFxyXG4gICAgICBzdHJNZWFsOiBtZWFsLnN0ck1lYWwsXHJcbiAgICAgIGlkTWVhbDogbWVhbC5pZE1lYWwsXHJcbiAgICAgIGxpa2VzOiBsaWtlRm9yVGhpc01lYWwubGVuZ3RoID09PSAwID8gMCA6IGxpa2VGb3JUaGlzTWVhbFswXS5saWtlcyxcclxuICAgIH07XHJcbiAgfSk7XHJcblxyXG4gIGNvbWJpbmVkQXJyYXkuZm9yRWFjaCgobWVhbFdpdGhMaWtlKSA9PiB7XHJcbiAgICBjb25zdCBzdHJpbmcgPSBgXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJMb2FkZWQtY29udGVudFwiPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiJHttZWFsV2l0aExpa2Uuc3RyTWVhbFRodW1ifVwiIGFsdD1cIm1lYWxcIiBjbGFzcz1cIm1lYWwtaW1nXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtZGV0YWlsc1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtZGVzY1wiPlxyXG4gICAgICAgICAgICA8cCBjbGFzcz1cInRpdGxlXCI+JHttZWFsV2l0aExpa2Uuc3RyTWVhbH08L3A+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaWtlIG0tMFwiIGlkPVwiJHttZWFsV2l0aExpa2UuaWRNZWFsfVwiPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzPSdsaWtlcyBtLTAnPiR7bWVhbFdpdGhMaWtlLmxpa2VzfTwvcD5cclxuICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhciBmYS1oZWFydCBsaWtlLWJ0blwiPjwvaT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY29tbWVudC1idG5cIj5Db21tZW50czwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5gO1xyXG5cclxuICAgIGNvbnN0IHN0cmluZ0VsZW1lbnQgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKHN0cmluZywgJ3RleHQvaHRtbCcpLmJvZHlcclxuICAgICAgLmZpcnN0Q2hpbGQ7XHJcblxyXG4gICAgY29uc3QgbGlrZUJ0biA9IHN0cmluZ0VsZW1lbnQucXVlcnlTZWxlY3RvcignLmxpa2UtYnRuJyk7XHJcbiAgICBjb25zdCBsaWtlRWwgPSBzdHJpbmdFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saWtlcycpO1xyXG5cclxuICAgIGxpa2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHBvc3RMaWtlKG1lYWxXaXRoTGlrZS5pZE1lYWwpO1xyXG4gICAgICBtZWFsV2l0aExpa2UubGlrZXMgKz0gMTtcclxuICAgICAgbGlrZUVsLmlubmVySFRNTCA9IGAke21lYWxXaXRoTGlrZS5saWtlc31gO1xyXG4gICAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdmYXInKTtcclxuICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnZmFzJyk7XHJcbiAgICAgIGxpa2VFbC5zdHlsZS5jb2xvciA9ICcjZTEzNjJjJztcclxuICAgIH0pO1xyXG5cclxuICAgIG1lYWxzU2VjdGlvbi5hcHBlbmQoc3RyaW5nRWxlbWVudCk7XHJcblxyXG4gICAgY29uc3QgY29tbWVudGJ0biA9IHN0cmluZ0VsZW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnQtYnRuJyk7XHJcbiAgICBjb21tZW50YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBwb3BVcFNlY3Rpb24uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICAgIGRpc3BsYXlNb2RhbChtZWFsV2l0aExpa2UuaWRNZWFsKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG4gIGNvbnN0IHRvdGFsSXRlbXMgPSBJdGVtc0NvdW50ZXIoKTtcclxuICBjb25zdCBpdGVtc0NvdW50ZXJFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtcy1jb3VudGVyJyk7XHJcbiAgaXRlbXNDb3VudGVyRWwuaW5uZXJIVE1MID0gYCgke3RvdGFsSXRlbXN9KWA7XHJcbn07XHJcblxyXG5pbml0KCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==