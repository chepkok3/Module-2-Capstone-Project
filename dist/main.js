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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n}\n\n.navbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  background-color: black;\n  width: 100%;\n  height: 88px;\n}\n\nul {\n  display: flex;\n  list-style: none;\n}\n\n.logo {\n  width: 80px;\n}\n\n.nav-items {\n  color: white;\n  padding-left: 100px;\n  text-decoration: none;\n  font-family: 'Roboto', sans-serif;\n}\n\n.meal-img {\n  width: 20rem;\n  border-radius: 10px;\n}\n\n.meals-section {\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  align-items: center;\n  justify-content: space-evenly;\n  margin-top: 5rem;\n}\n\n.Loaded-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 2em;\n  background-color: white;\n  border: 1px solid rgb(0, 0, 0);\n  margin: 1em 0.5em;\n  box-shadow: 0 15px 15px -15px black;\n  border-radius: 10px;\n}\n\n.meal-details {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 100%;\n  height: 100%;\n  align-items: center;\n}\n\n.meal-desc {\n  align-items: center;\n  display: flex;\n  width: 100%;\n  padding-top: 1.5em;\n  justify-content: space-between;\n}\n\n.title {\n  font-family: 'Roboto', sans-serif;\n  font-weight: 600;\n}\n\n.comment-btn {\n  padding: 10px 100px;\n  background-color: black;\n  color: white;\n  margin-top: 20px;\n  border-radius: 10px;\n  box-shadow: 0 16px 17px -10px black;\n  cursor: pointer;\n}\n\n.footer {\n  width: 100%;\n  background-color: black;\n  height: 6rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.footer-para {\n  color: white;\n  font-size: 22px;\n  cursor: pointer;\n  font-family: 'Roboto', sans-serif;\n  word-spacing: 5px;\n}\n\n.git-link {\n  text-decoration: none;\n  color: white;\n  font-family: 'Roboto', sans-serif;\n}\n\n.items-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 50px;\n}\n\nh1 {\n  font-family: 'Roboto', sans-serif;\n}\n\np {\n  font-family: 'Roboto', sans-serif;\n}\n\n.items-counter {\n  color: red;\n}\n\n/* comments-styling */\n.popup-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  z-index: 10;\n  width: 60%;\n  height: 90vh;\n  padding: 30px 50px;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border-radius: 10px;\n  overflow-y: scroll;\n  background-color: #e5e5e5;\n}\n\n.backdrop {\n  width: 100vw;\n  height: 100vh;\n  top: 0;\n  left: 0;\n  background-color: #afabb3;\n  position: fixed;\n  backdrop-filter: blur(6px);\n  mix-blend-mode: multiply;\n}\n\n.modal-info {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.close {\n  float: right;\n}\n\n.modal-popup-img {\n  width: 65%;\n  height: 80vh;\n  filter: drop-shadow(2px 4px 6px black);\n  border-radius: 10px;\n}\n\n.meal-description {\n  display: flex;\n  flex-direction: column;\n  width: 60%;\n  font-size: 1.1em;\n  padding: 2.5em 0;\n  gap: 12px;\n}\n\nh3 {\n  font-size: 2em;\n  padding: 2em 0 1em 0;\n  font-weight: bold;\n  letter-spacing: 2px;\n}\n\n.meal-description b {\n  color: #000;\n  letter-spacing: 6px;\n  font-size: 1.3em;\n}\n\n.more-info-links button {\n  padding: 6px;\n  background-color: white;\n}\n\n.more-info-links a {\n  text-decoration: none;\n  color: #e1362c;\n  background-color: transparent;\n}\n\n.meal-description ul {\n  list-style-type: circle;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n\n.meal-description li {\n  letter-spacing: 3px;\n  font-style: italic;\n  color: #000;\n}\n\n.tags,\n.tag {\n  display: flex;\n  align-items: baseline;\n}\n\n.tag {\n  align-items: center;\n  letter-spacing: 2px;\n  color: #d2d1d3;\n  margin-left: 6px;\n}\n\n.user-comments {\n  width: 80%;\n  display: flex;\n  flex-direction: column;\n  margin: 0 auto;\n}\n\n.user-info {\n  flex: 1;\n}\n\n.comment b {\n  color: #e1362c;\n  letter-spacing: 3px;\n  font-size: 1.2em;\n  filter: drop-shadow(2px 4px 6px black);\n}\n\n.message {\n  padding: 0 0.5em;\n  font-style: italic;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  gap: 2em;\n  width: 60%;\n  margin: 0 auto;\n}\n\nform > input,\nform > textarea {\n  border: 1px solid #000;\n  border-radius: 6px;\n  padding: 1em;\n}\n\nform > input {\n  height: 45px;\n}\n\nform > textarea {\n  height: 150px;\n}\n\n.submit-btn {\n  height: 3rem;\n  color: #000;\n  font-size: 20px;\n  cursor: pointer;\n}\n\n.hidden {\n  display: none !important;\n}\n\n.comment-holder {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  line-height: 36px;\n}\n\n.commented {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins&family=Roboto:wght@300&display=swap');\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\n.navbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  background-color: black;\n  width: 100%;\n  height: 88px;\n}\n\nul {\n  display: flex;\n  list-style: none;\n}\n\n.logo {\n  width: 80px;\n}\n\n.nav-items {\n  color: white;\n  padding-left: 100px;\n  text-decoration: none;\n  font-family: 'Roboto', sans-serif;\n}\n\n.meal-img {\n  width: 20rem;\n  border-radius: 10px;\n}\n\n.meals-section {\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  align-items: center;\n  justify-content: space-evenly;\n  margin-top: 5rem;\n}\n\n.Loaded-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 2em;\n  background-color: white;\n  border: 1px solid rgb(0, 0, 0);\n  margin: 1em 0.5em;\n  box-shadow: 0 15px 15px -15px black;\n  border-radius: 10px;\n}\n\n.meal-details {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 100%;\n  height: 100%;\n  align-items: center;\n}\n\n.meal-desc {\n  align-items: center;\n  display: flex;\n  width: 100%;\n  padding-top: 1.5em;\n  justify-content: space-between;\n}\n\n.title {\n  font-family: 'Roboto', sans-serif;\n  font-weight: 600;\n}\n\n.comment-btn {\n  padding: 10px 100px;\n  background-color: black;\n  color: white;\n  margin-top: 20px;\n  border-radius: 10px;\n  box-shadow: 0 16px 17px -10px black;\n  cursor: pointer;\n}\n\n.footer {\n  width: 100%;\n  background-color: black;\n  height: 6rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.footer-para {\n  color: white;\n  font-size: 22px;\n  cursor: pointer;\n  font-family: 'Roboto', sans-serif;\n  word-spacing: 5px;\n}\n\n.git-link {\n  text-decoration: none;\n  color: white;\n  font-family: 'Roboto', sans-serif;\n}\n\n.items-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 50px;\n}\n\nh1 {\n  font-family: 'Roboto', sans-serif;\n}\n\np {\n  font-family: 'Roboto', sans-serif;\n}\n\n.items-counter {\n  color: red;\n}\n\n/* comments-styling */\n.popup-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  z-index: 10;\n  width: 60%;\n  height: 90vh;\n  padding: 30px 50px;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border-radius: 10px;\n  overflow-y: scroll;\n  background-color: #e5e5e5;\n}\n\n.backdrop {\n  width: 100vw;\n  height: 100vh;\n  top: 0;\n  left: 0;\n  background-color: #afabb3;\n  position: fixed;\n  backdrop-filter: blur(6px);\n  mix-blend-mode: multiply;\n}\n\n.modal-info {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.close {\n  float: right;\n}\n\n.modal-popup-img {\n  width: 65%;\n  height: 80vh;\n  filter: drop-shadow(2px 4px 6px black);\n  border-radius: 10px;\n}\n\n.meal-description {\n  display: flex;\n  flex-direction: column;\n  width: 60%;\n  font-size: 1.1em;\n  padding: 2.5em 0;\n  gap: 12px;\n}\n\nh3 {\n  font-size: 2em;\n  padding: 2em 0 1em 0;\n  font-weight: bold;\n  letter-spacing: 2px;\n}\n\n.meal-description b {\n  color: #000;\n  letter-spacing: 6px;\n  font-size: 1.3em;\n}\n\n.more-info-links button {\n  padding: 6px;\n  background-color: white;\n}\n\n.more-info-links a {\n  text-decoration: none;\n  color: #e1362c;\n  background-color: transparent;\n}\n\n.meal-description ul {\n  list-style-type: circle;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n\n.meal-description li {\n  letter-spacing: 3px;\n  font-style: italic;\n  color: #000;\n}\n\n.tags,\n.tag {\n  display: flex;\n  align-items: baseline;\n}\n\n.tag {\n  align-items: center;\n  letter-spacing: 2px;\n  color: #d2d1d3;\n  margin-left: 6px;\n}\n\n.user-comments {\n  width: 80%;\n  display: flex;\n  flex-direction: column;\n  margin: 0 auto;\n}\n\n.user-info {\n  flex: 1;\n}\n\n.comment b {\n  color: #e1362c;\n  letter-spacing: 3px;\n  font-size: 1.2em;\n  filter: drop-shadow(2px 4px 6px black);\n}\n\n.message {\n  padding: 0 0.5em;\n  font-style: italic;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  gap: 2em;\n  width: 60%;\n  margin: 0 auto;\n}\n\nform > input,\nform > textarea {\n  border: 1px solid #000;\n  border-radius: 6px;\n  padding: 1em;\n}\n\nform > input {\n  height: 45px;\n}\n\nform > textarea {\n  height: 150px;\n}\n\n.submit-btn {\n  height: 3rem;\n  color: #000;\n  font-size: 20px;\n  cursor: pointer;\n}\n\n.hidden {\n  display: none !important;\n}\n\n.comment-holder {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  line-height: 36px;\n}\n\n.commented {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n"],"sourceRoot":""}]);
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
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/YDk6ZvYJ9bRgBt60cLN9/comments',
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
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/YDk6ZvYJ9bRgBt60cLN9/comments?item_id=${itemId}`,
  );
  if (response.status === 200) {
    const responseJSON = await response.json();
    return responseJSON;
  }
  return [];
};




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


const mealInfo = async (idMeal) => {
  const information = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`,
  );
  const infoJSON = await information.json();
  return infoJSON;
};

const popUpSection = document.querySelector('.popup-section');
const parser = new DOMParser();

const displayModal = async (idMeal) => {
  popUpSection.innerHTML = '<div class="backdrop"></div>';

  const commentsList = await (0,_commentsAPI_js__WEBPACK_IMPORTED_MODULE_0__.getComments)(idMeal);

  mealInfo(idMeal).then((meal) => {
    const string = `
    <div class="popup-container">
      <div class="modal-popup">
        <i class="fa-solid fa-xmark close"></i>
        <div class="modal-info">
          <img src=${meal.meals[0].strMealThumb
} alt="Thumbnail" class="modal-popup-img">  
          <h3 class="meal-title">${meal.meals[0].strMeal}</h3>
          <div class="more-info-links">
            <button> <a href="${meal.meals[0].strSource
}" target="_blank"> Source</a></button>
            
          </div>
          <div class="meal-description">    
            <p><b> Food Ingredients </b></p>
            <ul>
              <li>${meal.meals[0].strIngredient1}: 
              ${meal.meals[0].strMeasure1}</li>
              <li>${meal.meals[0].strIngredient2}: 
              ${meal.meals[0].strMeasure2}</li>
              <li>${meal.meals[0].strIngredient3}: 
              ${meal.meals[0].strMeasure3}</li>
              <li>${meal.meals[0].strIngredient4}: 
              ${meal.meals[0].strMeasure4}</li>
              <li>${meal.meals[0].strIngredient5}: 
              ${meal.meals[0].strMeasure5}</li>
            </ul>
            <p><b>Recipe</b></p>
            <p>${meal.meals[0].strInstructions}</p>  
            <div class="tags"> <b>Tags:</b> 
            ${(meal.meals[0].strTags || '')
    .split(',')
    .map((el) => `<code class='tag'>${el}</code>`)}
              </div>
          </div>
        </div>
  
        <h3 class="counter">Comments(<b class="total-comments">0</b>)</h3> 
        <div class='user-comments'> 
        ${commentsList
    ? commentsList
      .map(
        (comment) => `
          <div class="comment-holder">
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

    const stringItem = parser.parseFromString(string, 'text/html').body
      .firstChild;
    popUpSection.append(stringItem);

    const closeBtn = stringItem.querySelector('.close');
    closeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      popUpSection.classList.add('hidden');
    });

    const form = stringItem.querySelector('form');
    const commentsContainer = document.querySelector('.meal-comments');

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

      const commentsString = `
        <div class="comment-holder">
          <div class="commented">
            <div class="username"><b>${user}:</b></div>
            <div class="message">${message}</div>
          </div>
        <div class="date">${today}</div>
      </div>`;

      const commentItem = parser.parseFromString(commentsString, 'text/html')
        .body.firstChild;
      commentsContainer.append(commentItem);
      form.reset();
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

    const stringItem = parser.parseFromString(string, 'text/html').body
      .firstChild;

    const likeBtn = stringItem.querySelector('.like-btn');
    const likeEl = stringItem.querySelector('.likes');

    likeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      (0,_modules_getLikes_js__WEBPACK_IMPORTED_MODULE_3__.postLike)(mealWithLike.idMeal);
      mealWithLike.likes += 1;
      likeEl.innerHTML = `${mealWithLike.likes}`;
      e.target.classList.remove('far');
      e.target.classList.add('fas');
      likeEl.style.color = '#e1362c';
    });

    mealsSection.append(stringItem);


  });
  const totalItems = (0,_modules_counter_itemsCounter_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const itemsCounterEl = document.querySelector('.items-counter');
  itemsCounterEl.innerHTML = `(${totalItems})`;
};

init();

})();

/******/ })()
;

