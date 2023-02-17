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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n}\n\n.navbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  background-color: black;\n  width: 100%;\n  height: 88px;\n}\n\nul {\n  display: flex;\n  list-style: none;\n}\n\n.logo {\n  width: 80px;\n}\n\n.nav-items {\n  color: white;\n  padding-left: 100px;\n  text-decoration: none;\n  font-family: 'Roboto', sans-serif;\n}\n\n.meal-img {\n  width: 20rem;\n  border-radius: 10px;\n}\n\n.meals-container {\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  align-items: center;\n  justify-content: space-evenly;\n  margin-top: 5rem;\n}\n\n.Loaded-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 2em;\n  background-color: white;\n  border: 1px solid rgb(0, 0, 0);\n  margin: 1em 0.5em;\n  box-shadow: 0 15px 15px -15px black;\n  border-radius: 10px;\n}\n\n.meal-details {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 100%;\n  height: 100%;\n  align-items: center;\n}\n\n.meal-desc {\n  align-items: center;\n  display: flex;\n  width: 100%;\n  padding-top: 1.5em;\n  justify-content: space-between;\n}\n\n.title {\n  font-family: 'Roboto', sans-serif;\n  font-weight: 600;\n}\n\n.comment-btn {\n  padding: 10px 100px;\n  background-color: black;\n  color: white;\n  margin-top: 20px;\n  border-radius: 10px;\n  box-shadow: 0 16px 17px -10px black;\n  cursor: pointer;\n}\n\n.footer {\n  width: 100%;\n  background-color: black;\n  height: 6rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.footer-para {\n  color: white;\n  font-size: 22px;\n  cursor: pointer;\n  font-family: 'Roboto', sans-serif;\n  word-spacing: 5px;\n}\n\n.git-link {\n  text-decoration: none;\n  color: white;\n  font-family: 'Roboto', sans-serif;\n}\n\n.items-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 50px;\n}\n\nh1 {\n  font-family: 'Roboto', sans-serif;\n}\n\np {\n  font-family: 'Roboto', sans-serif;\n}\n\n.items-counter {\n  color: red;\n}\n\n/* comments-styling */\n.popup-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  z-index: 10;\n  width: 60%;\n  height: 90vh;\n  padding: 30px 50px;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border-radius: 10px;\n  overflow-y: scroll;\n  background-color: #e5e5e5;\n}\n\n.backdrop {\n  width: 100vw;\n  height: 100vh;\n  top: 0;\n  left: 0;\n  background-color: #afabb3;\n  position: fixed;\n  backdrop-filter: blur(6px);\n  mix-blend-mode: multiply;\n}\n\n.modal-info {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.close {\n  float: right;\n}\n\n.modal-popup-img {\n  width: 65%;\n  height: 80vh;\n  filter: drop-shadow(2px 4px 6px black);\n  border-radius: 10px;\n}\n\n.meal-description {\n  display: flex;\n  flex-direction: column;\n  width: 60%;\n  font-size: 1.1em;\n  padding: 2.5em 0;\n  gap: 12px;\n}\n\nh3 {\n  font-size: 2em;\n  padding: 2em 0 1em 0;\n  font-weight: bold;\n  letter-spacing: 2px;\n}\n\n.meal-description b {\n  color: #000;\n  letter-spacing: 6px;\n  font-size: 1.3em;\n}\n\n.more-info-links button {\n  padding: 6px;\n  background-color: white;\n}\n\n.more-info-links a {\n  text-decoration: none;\n  color: #e1362c;\n  background-color: transparent;\n}\n\n.meal-description ul {\n  list-style-type: circle;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n\n.meal-description li {\n  letter-spacing: 3px;\n  font-style: italic;\n  color: #000;\n}\n\n.tags,\n.tag {\n  display: flex;\n  align-items: baseline;\n}\n\n.tag {\n  align-items: center;\n  letter-spacing: 2px;\n  color: black;\n  margin-left: 6px;\n}\n\n.user-comments {\n  width: 80%;\n  display: flex;\n  flex-direction: column;\n  margin: 0 auto;\n}\n\n.user-info {\n  flex: 1;\n}\n\n.comment b {\n  color: black;\n  letter-spacing: 3px;\n  font-size: 1.2em;\n  filter: drop-shadow(2px 4px 6px black);\n}\n\n.message {\n  padding: 0 0.5em;\n  font-style: italic;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  gap: 2em;\n  width: 60%;\n  margin: 0 auto;\n}\n\nform > input,\nform > textarea {\n  border: 1px solid #000;\n  border-radius: 6px;\n  padding: 1em;\n}\n\nform > input {\n  height: 45px;\n}\n\nform > textarea {\n  height: 150px;\n}\n\n.submit-btn {\n  height: 3rem;\n  color: #000;\n  font-size: 20px;\n  cursor: pointer;\n}\n\n.hidden {\n  display: none !important;\n}\n\n.comment-holder {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  line-height: 36px;\n}\n\n.commented {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins&family=Roboto:wght@300&display=swap');\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\n.navbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  background-color: black;\n  width: 100%;\n  height: 88px;\n}\n\nul {\n  display: flex;\n  list-style: none;\n}\n\n.logo {\n  width: 80px;\n}\n\n.nav-items {\n  color: white;\n  padding-left: 100px;\n  text-decoration: none;\n  font-family: 'Roboto', sans-serif;\n}\n\n.meal-img {\n  width: 20rem;\n  border-radius: 10px;\n}\n\n.meals-container {\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  align-items: center;\n  justify-content: space-evenly;\n  margin-top: 5rem;\n}\n\n.Loaded-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 2em;\n  background-color: white;\n  border: 1px solid rgb(0, 0, 0);\n  margin: 1em 0.5em;\n  box-shadow: 0 15px 15px -15px black;\n  border-radius: 10px;\n}\n\n.meal-details {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 100%;\n  height: 100%;\n  align-items: center;\n}\n\n.meal-desc {\n  align-items: center;\n  display: flex;\n  width: 100%;\n  padding-top: 1.5em;\n  justify-content: space-between;\n}\n\n.title {\n  font-family: 'Roboto', sans-serif;\n  font-weight: 600;\n}\n\n.comment-btn {\n  padding: 10px 100px;\n  background-color: black;\n  color: white;\n  margin-top: 20px;\n  border-radius: 10px;\n  box-shadow: 0 16px 17px -10px black;\n  cursor: pointer;\n}\n\n.footer {\n  width: 100%;\n  background-color: black;\n  height: 6rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.footer-para {\n  color: white;\n  font-size: 22px;\n  cursor: pointer;\n  font-family: 'Roboto', sans-serif;\n  word-spacing: 5px;\n}\n\n.git-link {\n  text-decoration: none;\n  color: white;\n  font-family: 'Roboto', sans-serif;\n}\n\n.items-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 50px;\n}\n\nh1 {\n  font-family: 'Roboto', sans-serif;\n}\n\np {\n  font-family: 'Roboto', sans-serif;\n}\n\n.items-counter {\n  color: red;\n}\n\n/* comments-styling */\n.popup-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  z-index: 10;\n  width: 60%;\n  height: 90vh;\n  padding: 30px 50px;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border-radius: 10px;\n  overflow-y: scroll;\n  background-color: #e5e5e5;\n}\n\n.backdrop {\n  width: 100vw;\n  height: 100vh;\n  top: 0;\n  left: 0;\n  background-color: #afabb3;\n  position: fixed;\n  backdrop-filter: blur(6px);\n  mix-blend-mode: multiply;\n}\n\n.modal-info {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.close {\n  float: right;\n}\n\n.modal-popup-img {\n  width: 65%;\n  height: 80vh;\n  filter: drop-shadow(2px 4px 6px black);\n  border-radius: 10px;\n}\n\n.meal-description {\n  display: flex;\n  flex-direction: column;\n  width: 60%;\n  font-size: 1.1em;\n  padding: 2.5em 0;\n  gap: 12px;\n}\n\nh3 {\n  font-size: 2em;\n  padding: 2em 0 1em 0;\n  font-weight: bold;\n  letter-spacing: 2px;\n}\n\n.meal-description b {\n  color: #000;\n  letter-spacing: 6px;\n  font-size: 1.3em;\n}\n\n.more-info-links button {\n  padding: 6px;\n  background-color: white;\n}\n\n.more-info-links a {\n  text-decoration: none;\n  color: #e1362c;\n  background-color: transparent;\n}\n\n.meal-description ul {\n  list-style-type: circle;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n\n.meal-description li {\n  letter-spacing: 3px;\n  font-style: italic;\n  color: #000;\n}\n\n.tags,\n.tag {\n  display: flex;\n  align-items: baseline;\n}\n\n.tag {\n  align-items: center;\n  letter-spacing: 2px;\n  color: black;\n  margin-left: 6px;\n}\n\n.user-comments {\n  width: 80%;\n  display: flex;\n  flex-direction: column;\n  margin: 0 auto;\n}\n\n.user-info {\n  flex: 1;\n}\n\n.comment b {\n  color: black;\n  letter-spacing: 3px;\n  font-size: 1.2em;\n  filter: drop-shadow(2px 4px 6px black);\n}\n\n.message {\n  padding: 0 0.5em;\n  font-style: italic;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  gap: 2em;\n  width: 60%;\n  margin: 0 auto;\n}\n\nform > input,\nform > textarea {\n  border: 1px solid #000;\n  border-radius: 6px;\n  padding: 1em;\n}\n\nform > input {\n  height: 45px;\n}\n\nform > textarea {\n  height: 150px;\n}\n\n.submit-btn {\n  height: 3rem;\n  color: #000;\n  font-size: 20px;\n  cursor: pointer;\n}\n\n.hidden {\n  display: none !important;\n}\n\n.comment-holder {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  line-height: 36px;\n}\n\n.commented {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n"],"sourceRoot":""}]);
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
const API_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';
const APP_ID = '4gg2lZ1zSqYloD1ZmP4A';

const postComment = async (itemId, name, message) => {
  const response = await fetch(`${API_URL}/apps/${APP_ID}/comments`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: itemId,
      username: name,
      comment: message,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const responseText = await response.text();
  return responseText;
};

const getComments = async (itemId) => {
  const response = await fetch(`${API_URL}/apps/${APP_ID}/comments?item_id=${itemId}`);
  if (response.ok) {
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
  const mealsEl = document.querySelectorAll('.meals-container > div');
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
const API_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';
const APP_ID = '7P9rWHY7WsKk1rSNM8nF';

const postLike = async (itemId) => {
  const response = await fetch(`${API_URL}/apps/${APP_ID}/likes`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: itemId,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const responseText = await response.text();
  return responseText;
};

const getLikes = async () => {
  const response = await fetch(`${API_URL}/apps/${APP_ID}/likes`);
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
    'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood'
  );
  const responseGot = await response.json();
  return responseGot;
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



const mealInfo = async (idMeal) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
  );
  const responseJSON = await response.json();
  return responseJSON;
};

const popUpWindow = document.querySelector('.popup-window');
const parser = new DOMParser();

const displayModal = async (idMeal) => {
  popUpWindow.innerHTML = '<div class="backdrop"></div>';

  const commentsList = await (0,_commentsAPI_js__WEBPACK_IMPORTED_MODULE_0__.getComments)(idMeal);

  mealInfo(idMeal).then((meal) => {
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

        <h3 class="counter">Comments(<b class="all-comments">0</b>)</h3>  
        <div class='user-comments'> 
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
        `
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
    popUpWindow.append(stringItem);

    const closeBtn = stringItem.querySelector('.close');
    closeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      popUpWindow.classList.add('hidden');
    });

    const form = stringItem.querySelector('form');
    const commentsContainer = document.querySelector('.user-comments');
    const counterElement = stringItem.querySelector('.all-comments');

    counterElement.innerHTML = `${(0,_counter_commentCounter_js__WEBPACK_IMPORTED_MODULE_1__["default"])()}`;

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
      today = `${dd}/${mm}/${yyyy}`;

      const commentString = `
        <div class="comment">
          <div class="commented">
            <div class="username"><b>${user}:</b></div>
            <div class="message">${message}</div>
          </div>
        <div class="date">${today}</div>
      </div>`;

      const userComment = parser.parseFromString(commentString, 'text/html')
        .body.firstChild;
      commentsContainer.append(userComment);
      form.reset();
      counterElement.innerHTML = `${(0,_counter_commentCounter_js__WEBPACK_IMPORTED_MODULE_1__["default"])()}`;
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






const mealsContainer = document.querySelector('.meals-container');
const popUpWindow = document.querySelector('.popup-window');
const parser = new DOMParser();

const init = async () => {
  const likesArray = await (0,_modules_getLikes_js__WEBPACK_IMPORTED_MODULE_3__.getLikes)();
  const mealsArray = await (0,_modules_getMeals_js__WEBPACK_IMPORTED_MODULE_2__["default"])();

  const combinedArray = mealsArray.meals.map((meal) => {
    const likeForThisMeal = likesArray.filter(
      (likeObj) => likeObj.item_id === meal.idMeal
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

    mealsContainer.append(stringItem);

    const commentbtn = stringItem.querySelector('.comment-btn');
    commentbtn.addEventListener('click', (e) => {
      e.preventDefault();
      popUpWindow.classList.remove('hidden');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcs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QUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUN5QjtBQUNEO0FBQ2M7QUFDRTs7QUFFN0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCLDhEQUFRO0FBQ25DLDJCQUEyQixnRUFBUTs7QUFFbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiwwQkFBMEI7QUFDOUM7QUFDQTtBQUNBLCtCQUErQixxQkFBcUI7QUFDcEQsd0NBQXdDLG9CQUFvQjtBQUM1RCxxQ0FBcUMsbUJBQW1CO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU0sOERBQVE7QUFDZDtBQUNBLDRCQUE0QixtQkFBbUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sNkRBQVk7QUFDbEIsS0FBSztBQUNMLEdBQUc7QUFDSCxxQkFBcUIsNEVBQVk7QUFDakM7QUFDQSxpQ0FBaUMsV0FBVztBQUM1Qzs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2svLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYnBhY2svLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2svLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay8uL3NyYy9tb2R1bGVzL2NvbW1lbnRzQVBJLmpzIiwid2VicGFjazovL3dlYnBhY2svLi9zcmMvbW9kdWxlcy9jb3VudGVyL2NvbW1lbnRDb3VudGVyLmpzIiwid2VicGFjazovL3dlYnBhY2svLi9zcmMvbW9kdWxlcy9jb3VudGVyL2l0ZW1zQ291bnRlci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL21vZHVsZXMvZ2V0TGlrZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay8uL3NyYy9tb2R1bGVzL2dldE1lYWxzLmpzIiwid2VicGFjazovL3dlYnBhY2svLi9zcmMvbW9kdWxlcy9wb3BVcC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGlucyZmYW1pbHk9Um9ib3RvOndnaHRAMzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLm5hdmJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogODhweDtcXG59XFxuXFxudWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi5sb2dvIHtcXG4gIHdpZHRoOiA4MHB4O1xcbn1cXG5cXG4ubmF2LWl0ZW1zIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmctbGVmdDogMTAwcHg7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5tZWFsLWltZyB7XFxuICB3aWR0aDogMjByZW07XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4ubWVhbHMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIG1hcmdpbi10b3A6IDVyZW07XFxufVxcblxcbi5Mb2FkZWQtY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigwLCAwLCAwKTtcXG4gIG1hcmdpbjogMWVtIDAuNWVtO1xcbiAgYm94LXNoYWRvdzogMCAxNXB4IDE1cHggLTE1cHggYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4ubWVhbC1kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWVhbC1kZXNjIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nLXRvcDogMS41ZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi50aXRsZSB7XFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uY29tbWVudC1idG4ge1xcbiAgcGFkZGluZzogMTBweCAxMDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3gtc2hhZG93OiAwIDE2cHggMTdweCAtMTBweCBibGFjaztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmZvb3RlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgaGVpZ2h0OiA2cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmZvb3Rlci1wYXJhIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gIHdvcmQtc3BhY2luZzogNXB4O1xcbn1cXG5cXG4uZ2l0LWxpbmsge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uaXRlbXMtY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcbn1cXG5cXG5oMSB7XFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxufVxcblxcbnAge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uaXRlbXMtY291bnRlciB7XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cXG4vKiBjb21tZW50cy1zdHlsaW5nICovXFxuLnBvcHVwLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB6LWluZGV4OiAxMDtcXG4gIHdpZHRoOiA2MCU7XFxuICBoZWlnaHQ6IDkwdmg7XFxuICBwYWRkaW5nOiAzMHB4IDUwcHg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNWU1ZTU7XFxufVxcblxcbi5iYWNrZHJvcCB7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhZmFiYjM7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNnB4KTtcXG4gIG1peC1ibGVuZC1tb2RlOiBtdWx0aXBseTtcXG59XFxuXFxuLm1vZGFsLWluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2xvc2Uge1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbn1cXG5cXG4ubW9kYWwtcG9wdXAtaW1nIHtcXG4gIHdpZHRoOiA2NSU7XFxuICBoZWlnaHQ6IDgwdmg7XFxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDJweCA0cHggNnB4IGJsYWNrKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5tZWFsLWRlc2NyaXB0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDYwJTtcXG4gIGZvbnQtc2l6ZTogMS4xZW07XFxuICBwYWRkaW5nOiAyLjVlbSAwO1xcbiAgZ2FwOiAxMnB4O1xcbn1cXG5cXG5oMyB7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIHBhZGRpbmc6IDJlbSAwIDFlbSAwO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbn1cXG5cXG4ubWVhbC1kZXNjcmlwdGlvbiBiIHtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDZweDtcXG4gIGZvbnQtc2l6ZTogMS4zZW07XFxufVxcblxcbi5tb3JlLWluZm8tbGlua3MgYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubW9yZS1pbmZvLWxpbmtzIGEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6ICNlMTM2MmM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLm1lYWwtZGVzY3JpcHRpb24gdWwge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBjaXJjbGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNnB4O1xcbn1cXG5cXG4ubWVhbC1kZXNjcmlwdGlvbiBsaSB7XFxuICBsZXR0ZXItc3BhY2luZzogM3B4O1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgY29sb3I6ICMwMDA7XFxufVxcblxcbi50YWdzLFxcbi50YWcge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXG59XFxuXFxuLnRhZyB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG4gIGNvbG9yOiBibGFjaztcXG4gIG1hcmdpbi1sZWZ0OiA2cHg7XFxufVxcblxcbi51c2VyLWNvbW1lbnRzIHtcXG4gIHdpZHRoOiA4MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4udXNlci1pbmZvIHtcXG4gIGZsZXg6IDE7XFxufVxcblxcbi5jb21tZW50IGIge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDNweDtcXG4gIGZvbnQtc2l6ZTogMS4yZW07XFxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDJweCA0cHggNnB4IGJsYWNrKTtcXG59XFxuXFxuLm1lc3NhZ2Uge1xcbiAgcGFkZGluZzogMCAwLjVlbTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMmVtO1xcbiAgd2lkdGg6IDYwJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG5mb3JtID4gaW5wdXQsXFxuZm9ybSA+IHRleHRhcmVhIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBwYWRkaW5nOiAxZW07XFxufVxcblxcbmZvcm0gPiBpbnB1dCB7XFxuICBoZWlnaHQ6IDQ1cHg7XFxufVxcblxcbmZvcm0gPiB0ZXh0YXJlYSB7XFxuICBoZWlnaHQ6IDE1MHB4O1xcbn1cXG5cXG4uc3VibWl0LWJ0biB7XFxuICBoZWlnaHQ6IDNyZW07XFxuICBjb2xvcjogIzAwMDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbi5jb21tZW50LWhvbGRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGxpbmUtaGVpZ2h0OiAzNnB4O1xcbn1cXG5cXG4uY29tbWVudGVkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsOEJBQThCO0VBQzlCLGlCQUFpQjtFQUNqQixtQ0FBbUM7RUFDbkMsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUIsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsbUNBQW1DO0VBQ25DLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsZUFBZTtFQUNmLGlDQUFpQztFQUNqQyxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQSxxQkFBcUI7QUFDckI7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsVUFBVTtFQUNWLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixNQUFNO0VBQ04sT0FBTztFQUNQLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsMEJBQTBCO0VBQzFCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixzQ0FBc0M7RUFDdEMsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztFQUNkLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBOztFQUVFLGFBQWE7RUFDYixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsT0FBTztBQUNUOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsUUFBUTtFQUNSLFVBQVU7RUFDVixjQUFjO0FBQ2hCOztBQUVBOztFQUVFLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnMmZmFtaWx5PVJvYm90bzp3Z2h0QDMwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi5uYXZiYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDg4cHg7XFxufVxcblxcbnVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4ubG9nbyB7XFxuICB3aWR0aDogODBweDtcXG59XFxuXFxuLm5hdi1pdGVtcyB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4ubWVhbC1pbWcge1xcbiAgd2lkdGg6IDIwcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLm1lYWxzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBtYXJnaW4tdG9wOiA1cmVtO1xcbn1cXG5cXG4uTG9hZGVkLWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMCwgMCwgMCk7XFxuICBtYXJnaW46IDFlbSAwLjVlbTtcXG4gIGJveC1zaGFkb3c6IDAgMTVweCAxNXB4IC0xNXB4IGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLm1lYWwtZGV0YWlscyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1lYWwtZGVzYyB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZy10b3A6IDEuNWVtO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLmNvbW1lbnQtYnRuIHtcXG4gIHBhZGRpbmc6IDEwcHggMTAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm94LXNoYWRvdzogMCAxNnB4IDE3cHggLTEwcHggYmxhY2s7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5mb290ZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGhlaWdodDogNnJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5mb290ZXItcGFyYSB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDIycHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICB3b3JkLXNwYWNpbmc6IDVweDtcXG59XFxuXFxuLmdpdC1saW5rIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLml0ZW1zLWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogNTBweDtcXG59XFxuXFxuaDEge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5wIHtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLml0ZW1zLWNvdW50ZXIge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuLyogY29tbWVudHMtc3R5bGluZyAqL1xcbi5wb3B1cC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgei1pbmRleDogMTA7XFxuICB3aWR0aDogNjAlO1xcbiAgaGVpZ2h0OiA5MHZoO1xcbiAgcGFkZGluZzogMzBweCA1MHB4O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlNWU1O1xcbn1cXG5cXG4uYmFja2Ryb3Age1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWZhYmIzO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDZweCk7XFxuICBtaXgtYmxlbmQtbW9kZTogbXVsdGlwbHk7XFxufVxcblxcbi5tb2RhbC1pbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNsb3NlIHtcXG4gIGZsb2F0OiByaWdodDtcXG59XFxuXFxuLm1vZGFsLXBvcHVwLWltZyB7XFxuICB3aWR0aDogNjUlO1xcbiAgaGVpZ2h0OiA4MHZoO1xcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygycHggNHB4IDZweCBibGFjayk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4ubWVhbC1kZXNjcmlwdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiA2MCU7XFxuICBmb250LXNpemU6IDEuMWVtO1xcbiAgcGFkZGluZzogMi41ZW0gMDtcXG4gIGdhcDogMTJweDtcXG59XFxuXFxuaDMge1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBwYWRkaW5nOiAyZW0gMCAxZW0gMDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG59XFxuXFxuLm1lYWwtZGVzY3JpcHRpb24gYiB7XFxuICBjb2xvcjogIzAwMDtcXG4gIGxldHRlci1zcGFjaW5nOiA2cHg7XFxuICBmb250LXNpemU6IDEuM2VtO1xcbn1cXG5cXG4ubW9yZS1pbmZvLWxpbmtzIGJ1dHRvbiB7XFxuICBwYWRkaW5nOiA2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm1vcmUtaW5mby1saW5rcyBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiAjZTEzNjJjO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5tZWFsLWRlc2NyaXB0aW9uIHVsIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogY2lyY2xlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDZweDtcXG59XFxuXFxuLm1lYWwtZGVzY3JpcHRpb24gbGkge1xcbiAgbGV0dGVyLXNwYWNpbmc6IDNweDtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGNvbG9yOiAjMDAwO1xcbn1cXG5cXG4udGFncyxcXG4udGFnIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxufVxcblxcbi50YWcge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XFxuICBjb2xvcjogYmxhY2s7XFxuICBtYXJnaW4tbGVmdDogNnB4O1xcbn1cXG5cXG4udXNlci1jb21tZW50cyB7XFxuICB3aWR0aDogODAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLnVzZXItaW5mbyB7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4uY29tbWVudCBiIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGxldHRlci1zcGFjaW5nOiAzcHg7XFxuICBmb250LXNpemU6IDEuMmVtO1xcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygycHggNHB4IDZweCBibGFjayk7XFxufVxcblxcbi5tZXNzYWdlIHtcXG4gIHBhZGRpbmc6IDAgMC41ZW07XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbmZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDJlbTtcXG4gIHdpZHRoOiA2MCU7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuZm9ybSA+IGlucHV0LFxcbmZvcm0gPiB0ZXh0YXJlYSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgcGFkZGluZzogMWVtO1xcbn1cXG5cXG5mb3JtID4gaW5wdXQge1xcbiAgaGVpZ2h0OiA0NXB4O1xcbn1cXG5cXG5mb3JtID4gdGV4dGFyZWEge1xcbiAgaGVpZ2h0OiAxNTBweDtcXG59XFxuXFxuLnN1Ym1pdC1idG4ge1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgY29sb3I6ICMwMDA7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uY29tbWVudC1ob2xkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBsaW5lLWhlaWdodDogMzZweDtcXG59XFxuXFxuLmNvbW1lbnRlZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBBUElfVVJMID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaSc7XG5jb25zdCBBUFBfSUQgPSAnNGdnMmxaMXpTcVlsb0QxWm1QNEEnO1xuXG5jb25zdCBwb3N0Q29tbWVudCA9IGFzeW5jIChpdGVtSWQsIG5hbWUsIG1lc3NhZ2UpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtBUElfVVJMfS9hcHBzLyR7QVBQX0lEfS9jb21tZW50c2AsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBpdGVtX2lkOiBpdGVtSWQsXG4gICAgICB1c2VybmFtZTogbmFtZSxcbiAgICAgIGNvbW1lbnQ6IG1lc3NhZ2UsXG4gICAgfSksXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICB9KTtcbiAgY29uc3QgcmVzcG9uc2VUZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICByZXR1cm4gcmVzcG9uc2VUZXh0O1xufTtcblxuY29uc3QgZ2V0Q29tbWVudHMgPSBhc3luYyAoaXRlbUlkKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7QVBJX1VSTH0vYXBwcy8ke0FQUF9JRH0vY29tbWVudHM/aXRlbV9pZD0ke2l0ZW1JZH1gKTtcbiAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgY29uc3QgcmVzcG9uc2VKU09OID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiByZXNwb25zZUpTT047XG4gIH1cbiAgcmV0dXJuIFtdO1xufTtcblxuZXhwb3J0IHsgcG9zdENvbW1lbnQsIGdldENvbW1lbnRzIH07XG4iLCJjb25zdCBjb21tZW50c0NvdW50ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbW1lbnRTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lYWwtY29tbWVudHMnKTtcbiAgaWYgKGNvbW1lbnRTZWN0aW9uKSB7XG4gICAgcmV0dXJuIGNvbW1lbnRTZWN0aW9uLmNoaWxkcmVuLmxlbmd0aDtcbiAgfVxuICByZXR1cm4gMDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbW1lbnRzQ291bnRlcjtcbiIsImNvbnN0IEl0ZW1zQ291bnRlciA9ICgpID0+IHtcbiAgY29uc3QgbWVhbHNFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZWFscy1jb250YWluZXIgPiBkaXYnKTtcbiAgcmV0dXJuIG1lYWxzRWwubGVuZ3RoO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSXRlbXNDb3VudGVyO1xuIiwiY29uc3QgQVBJX1VSTCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGknO1xuY29uc3QgQVBQX0lEID0gJzdQOXJXSFk3V3NLazFyU05NOG5GJztcblxuY29uc3QgcG9zdExpa2UgPSBhc3luYyAoaXRlbUlkKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7QVBJX1VSTH0vYXBwcy8ke0FQUF9JRH0vbGlrZXNgLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgaXRlbV9pZDogaXRlbUlkLFxuICAgIH0pLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgfSk7XG4gIGNvbnN0IHJlc3BvbnNlVGV4dCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgcmV0dXJuIHJlc3BvbnNlVGV4dDtcbn07XG5cbmNvbnN0IGdldExpa2VzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0FQSV9VUkx9L2FwcHMvJHtBUFBfSUR9L2xpa2VzYCk7XG4gIGNvbnN0IHJlc3BvbnNlSlNPTiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIHJlc3BvbnNlSlNPTjtcbn07XG5cbmV4cG9ydCB7IHBvc3RMaWtlLCBnZXRMaWtlcyB9O1xuIiwiY29uc3QgZ2V0TWVhbHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgJ2h0dHBzOi8vd3d3LnRoZW1lYWxkYi5jb20vYXBpL2pzb24vdjEvMS9maWx0ZXIucGhwP2M9U2VhZm9vZCdcbiAgKTtcbiAgY29uc3QgcmVzcG9uc2VHb3QgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiByZXNwb25zZUdvdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldE1lYWxzO1xuIiwiaW1wb3J0IHsgcG9zdENvbW1lbnQsIGdldENvbW1lbnRzIH0gZnJvbSAnLi9jb21tZW50c0FQSS5qcyc7XG5pbXBvcnQgY29tbWVudHNDb3VudGVyIGZyb20gJy4vY291bnRlci9jb21tZW50Q291bnRlci5qcyc7XG5cbmNvbnN0IG1lYWxJbmZvID0gYXN5bmMgKGlkTWVhbCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgIGBodHRwczovL3d3dy50aGVtZWFsZGIuY29tL2FwaS9qc29uL3YxLzEvbG9va3VwLnBocD9pPSR7aWRNZWFsfWBcbiAgKTtcbiAgY29uc3QgcmVzcG9uc2VKU09OID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gcmVzcG9uc2VKU09OO1xufTtcblxuY29uc3QgcG9wVXBXaW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAtd2luZG93Jyk7XG5jb25zdCBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XG5cbmNvbnN0IGRpc3BsYXlNb2RhbCA9IGFzeW5jIChpZE1lYWwpID0+IHtcbiAgcG9wVXBXaW5kb3cuaW5uZXJIVE1MID0gJzxkaXYgY2xhc3M9XCJiYWNrZHJvcFwiPjwvZGl2Pic7XG5cbiAgY29uc3QgY29tbWVudHNMaXN0ID0gYXdhaXQgZ2V0Q29tbWVudHMoaWRNZWFsKTtcblxuICBtZWFsSW5mbyhpZE1lYWwpLnRoZW4oKG1lYWwpID0+IHtcbiAgICBjb25zdCBzdHJpbmcgPSBgXG4gICAgPGRpdiBjbGFzcz1cInBvcHVwLWNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLXBvcHVwXCI+XG4gICAgICAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEteG1hcmsgY2xvc2VcIj48L2k+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1pbmZvXCI+XG4gICAgICAgICAgPGltZyBzcmM9JHtcbiAgICAgICAgICAgIG1lYWwubWVhbHNbMF0uc3RyTWVhbFRodW1iXG4gICAgICAgICAgfSBhbHQ9XCJUaHVtYm5haWxcIiBjbGFzcz1cIm1vZGFsLXBvcHVwLWltZ1wiPiAgXG4gICAgICAgICAgPGgzIGNsYXNzPVwiZ2FtZS10aXRsZVwiPiR7bWVhbC5tZWFsc1swXS5zdHJNZWFsfTwvaDM+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1vcmUtaW5mby1saW5rc1wiPlxuICAgICAgICAgICAgPGJ1dHRvbj4gPGEgaHJlZj1cIiR7bWVhbC5tZWFsc1swXS5zdHJTb3VyY2V9XCI+IFNvdXJjZTwvYT48L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24+IDxhIGhyZWY9XCIke21lYWwubWVhbHNbMF0uc3RyWW91dHViZX1cIj4gWW91dHViZTwvYT48L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC1kZXNjcmlwdGlvblwiPiAgICBcbiAgICAgICAgICAgIDxwPjxiPiBGb29kIEluZ3JlZGllbnRzIDwvYj48L3A+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIDxsaT4ke21lYWwubWVhbHNbMF0uc3RySW5ncmVkaWVudDF9OiAke1xuICAgICAgbWVhbC5tZWFsc1swXS5zdHJNZWFzdXJlMVxuICAgIH08L2xpPlxuICAgICAgICAgICAgICA8bGk+JHttZWFsLm1lYWxzWzBdLnN0ckluZ3JlZGllbnQyfTogJHtcbiAgICAgIG1lYWwubWVhbHNbMF0uc3RyTWVhc3VyZTJcbiAgICB9PC9saT5cbiAgICAgICAgICAgICAgPGxpPiR7bWVhbC5tZWFsc1swXS5zdHJJbmdyZWRpZW50M306ICR7XG4gICAgICBtZWFsLm1lYWxzWzBdLnN0ck1lYXN1cmUzXG4gICAgfTwvbGk+XG4gICAgICAgICAgICAgIDxsaT4ke21lYWwubWVhbHNbMF0uc3RySW5ncmVkaWVudDR9OiAke1xuICAgICAgbWVhbC5tZWFsc1swXS5zdHJNZWFzdXJlNFxuICAgIH08L2xpPlxuICAgICAgICAgICAgICA8bGk+JHttZWFsLm1lYWxzWzBdLnN0ckluZ3JlZGllbnQ1fTogJHtcbiAgICAgIG1lYWwubWVhbHNbMF0uc3RyTWVhc3VyZTVcbiAgICB9PC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8cD48Yj5SZWNpcGU8L2I+PC9wPlxuICAgICAgICAgICAgPHA+JHttZWFsLm1lYWxzWzBdLnN0ckluc3RydWN0aW9uc308L3A+ICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWdzXCI+IDxiPlRhZ3M6PC9iPiAkeyhtZWFsLm1lYWxzWzBdLnN0clRhZ3MgfHwgJycpXG4gICAgICAgICAgICAgIC5zcGxpdCgnLCcpXG4gICAgICAgICAgICAgIC5tYXAoKGVsKSA9PiBgPGNvZGUgY2xhc3M9J3RhZyc+JHtlbH08L2NvZGU+YCl9PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxoMyBjbGFzcz1cImNvdW50ZXJcIj5Db21tZW50cyg8YiBjbGFzcz1cImFsbC1jb21tZW50c1wiPjA8L2I+KTwvaDM+ICBcbiAgICAgICAgPGRpdiBjbGFzcz0ndXNlci1jb21tZW50cyc+IFxuICAgICAgICAke1xuICAgICAgICAgIGNvbW1lbnRzTGlzdFxuICAgICAgICAgICAgPyBjb21tZW50c0xpc3RcbiAgICAgICAgICAgICAgICAubWFwKFxuICAgICAgICAgICAgICAgICAgKGNvbW1lbnQpID0+IGBcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tbWVudFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbW1lbnRlZFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidXNlcm5hbWVcIj48Yj4ke2NvbW1lbnQudXNlcm5hbWV9OjwvYj48L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lc3NhZ2VcIj4ke2NvbW1lbnQuY29tbWVudH08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRlXCI+JHtjb21tZW50LmNyZWF0aW9uX2RhdGV9PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIGBcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLmpvaW4oJycpXG4gICAgICAgICAgICA6ICcnXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxoMz5JbnB1dCB5b3VyIENvbW1lbnQ8L2gzPlxuICAgICAgICAgIDxmb3JtIGNsYXNzPVwiY29tbWVudHMtcG9zdGVkXCI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidXNlcm5hbWVcIiBjbGFzcz1cInVzZXItbmFtZVwiIHBsYWNlaG9sZGVyPVwiWW91ciBuYW1lXCIgcmVxdWlyZWQ+XG4gICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3M9XCJ1c2VyLWNvbW1lbnRcIiBuYW1lPVwiY29tbWVudFwiIHBsYWNlaG9sZGVyPVwiWW91ciBpbnNpZ2h0c1wiIHJlcXVpcmVkPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cInN1Ym1pdC1idG5cIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+YDtcblxuICAgIGNvbnN0IHN0cmluZ0l0ZW0gPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKHN0cmluZywgJ3RleHQvaHRtbCcpLmJvZHlcbiAgICAgIC5maXJzdENoaWxkO1xuICAgIHBvcFVwV2luZG93LmFwcGVuZChzdHJpbmdJdGVtKTtcblxuICAgIGNvbnN0IGNsb3NlQnRuID0gc3RyaW5nSXRlbS5xdWVyeVNlbGVjdG9yKCcuY2xvc2UnKTtcbiAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBwb3BVcFdpbmRvdy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGZvcm0gPSBzdHJpbmdJdGVtLnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcbiAgICBjb25zdCBjb21tZW50c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51c2VyLWNvbW1lbnRzJyk7XG4gICAgY29uc3QgY291bnRlckVsZW1lbnQgPSBzdHJpbmdJdGVtLnF1ZXJ5U2VsZWN0b3IoJy5hbGwtY29tbWVudHMnKTtcblxuICAgIGNvdW50ZXJFbGVtZW50LmlubmVySFRNTCA9IGAke2NvbW1lbnRzQ291bnRlcigpfWA7XG5cbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKTtcbiAgICAgIGNvbnN0IHVzZXIgPSBmb3JtRGF0YS5nZXQoJ3VzZXJuYW1lJyk7XG4gICAgICBjb25zdCBtZXNzYWdlID0gZm9ybURhdGEuZ2V0KCdjb21tZW50Jyk7XG4gICAgICBwb3N0Q29tbWVudChpZE1lYWwsIHVzZXIsIG1lc3NhZ2UpO1xuICAgICAgbGV0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICAgIGNvbnN0IGRkID0gU3RyaW5nKHRvZGF5LmdldERhdGUoKSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICAgIGNvbnN0IG1tID0gU3RyaW5nKHRvZGF5LmdldE1vbnRoKCkgKyAxKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgICAgY29uc3QgeXl5eSA9IHRvZGF5LmdldEZ1bGxZZWFyKCk7XG4gICAgICB0b2RheSA9IGAke2RkfS8ke21tfS8ke3l5eXl9YDtcblxuICAgICAgY29uc3QgY29tbWVudFN0cmluZyA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbW1lbnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tbWVudGVkXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidXNlcm5hbWVcIj48Yj4ke3VzZXJ9OjwvYj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZXNzYWdlXCI+JHttZXNzYWdlfTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0ZVwiPiR7dG9kYXl9PC9kaXY+XG4gICAgICA8L2Rpdj5gO1xuXG4gICAgICBjb25zdCB1c2VyQ29tbWVudCA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoY29tbWVudFN0cmluZywgJ3RleHQvaHRtbCcpXG4gICAgICAgIC5ib2R5LmZpcnN0Q2hpbGQ7XG4gICAgICBjb21tZW50c0NvbnRhaW5lci5hcHBlbmQodXNlckNvbW1lbnQpO1xuICAgICAgZm9ybS5yZXNldCgpO1xuICAgICAgY291bnRlckVsZW1lbnQuaW5uZXJIVE1MID0gYCR7Y29tbWVudHNDb3VudGVyKCl9YDtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5TW9kYWw7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBkaXNwbGF5TW9kYWwgZnJvbSAnLi9tb2R1bGVzL3BvcFVwLmpzJztcbmltcG9ydCBnZXRNZWFscyBmcm9tICcuL21vZHVsZXMvZ2V0TWVhbHMuanMnO1xuaW1wb3J0IHsgZ2V0TGlrZXMsIHBvc3RMaWtlIH0gZnJvbSAnLi9tb2R1bGVzL2dldExpa2VzLmpzJztcbmltcG9ydCBJdGVtc0NvdW50ZXIgZnJvbSAnLi9tb2R1bGVzL2NvdW50ZXIvaXRlbXNDb3VudGVyLmpzJztcblxuY29uc3QgbWVhbHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVhbHMtY29udGFpbmVyJyk7XG5jb25zdCBwb3BVcFdpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC13aW5kb3cnKTtcbmNvbnN0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcblxuY29uc3QgaW5pdCA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgbGlrZXNBcnJheSA9IGF3YWl0IGdldExpa2VzKCk7XG4gIGNvbnN0IG1lYWxzQXJyYXkgPSBhd2FpdCBnZXRNZWFscygpO1xuXG4gIGNvbnN0IGNvbWJpbmVkQXJyYXkgPSBtZWFsc0FycmF5Lm1lYWxzLm1hcCgobWVhbCkgPT4ge1xuICAgIGNvbnN0IGxpa2VGb3JUaGlzTWVhbCA9IGxpa2VzQXJyYXkuZmlsdGVyKFxuICAgICAgKGxpa2VPYmopID0+IGxpa2VPYmouaXRlbV9pZCA9PT0gbWVhbC5pZE1lYWxcbiAgICApO1xuICAgIHJldHVybiB7XG4gICAgICBzdHJNZWFsVGh1bWI6IG1lYWwuc3RyTWVhbFRodW1iLFxuICAgICAgc3RyTWVhbDogbWVhbC5zdHJNZWFsLFxuICAgICAgaWRNZWFsOiBtZWFsLmlkTWVhbCxcbiAgICAgIGxpa2VzOiBsaWtlRm9yVGhpc01lYWwubGVuZ3RoID09PSAwID8gMCA6IGxpa2VGb3JUaGlzTWVhbFswXS5saWtlcyxcbiAgICB9O1xuICB9KTtcblxuICBjb21iaW5lZEFycmF5LmZvckVhY2goKG1lYWxXaXRoTGlrZSkgPT4ge1xuICAgIGNvbnN0IHN0cmluZyA9IGBcbiAgICAgIDxkaXYgY2xhc3M9XCJMb2FkZWQtY29udGVudFwiPlxuICAgICAgICA8aW1nIHNyYz1cIiR7bWVhbFdpdGhMaWtlLnN0ck1lYWxUaHVtYn1cIiBhbHQ9XCJtZWFsXCIgY2xhc3M9XCJtZWFsLWltZ1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWVhbC1kZXRhaWxzXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtZGVzY1wiPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJ0aXRsZVwiPiR7bWVhbFdpdGhMaWtlLnN0ck1lYWx9PC9wPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpa2UgbS0wXCIgaWQ9XCIke21lYWxXaXRoTGlrZS5pZE1lYWx9XCI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzPSdsaWtlcyBtLTAnPiR7bWVhbFdpdGhMaWtlLmxpa2VzfTwvcD5cbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXIgZmEtaGVhcnQgbGlrZS1idG5cIj48L2k+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNvbW1lbnQtYnRuXCI+Q29tbWVudHM8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5gO1xuXG4gICAgY29uc3Qgc3RyaW5nSXRlbSA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoc3RyaW5nLCAndGV4dC9odG1sJykuYm9keVxuICAgICAgLmZpcnN0Q2hpbGQ7XG5cbiAgICBjb25zdCBsaWtlQnRuID0gc3RyaW5nSXRlbS5xdWVyeVNlbGVjdG9yKCcubGlrZS1idG4nKTtcbiAgICBjb25zdCBsaWtlRWwgPSBzdHJpbmdJdGVtLnF1ZXJ5U2VsZWN0b3IoJy5saWtlcycpO1xuXG4gICAgbGlrZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBwb3N0TGlrZShtZWFsV2l0aExpa2UuaWRNZWFsKTtcbiAgICAgIG1lYWxXaXRoTGlrZS5saWtlcyArPSAxO1xuICAgICAgbGlrZUVsLmlubmVySFRNTCA9IGAke21lYWxXaXRoTGlrZS5saWtlc31gO1xuICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnZmFyJyk7XG4gICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdmYXMnKTtcbiAgICAgIGxpa2VFbC5zdHlsZS5jb2xvciA9ICcjZTEzNjJjJztcbiAgICB9KTtcblxuICAgIG1lYWxzQ29udGFpbmVyLmFwcGVuZChzdHJpbmdJdGVtKTtcblxuICAgIGNvbnN0IGNvbW1lbnRidG4gPSBzdHJpbmdJdGVtLnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50LWJ0bicpO1xuICAgIGNvbW1lbnRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgcG9wVXBXaW5kb3cuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICBkaXNwbGF5TW9kYWwobWVhbFdpdGhMaWtlLmlkTWVhbCk7XG4gICAgfSk7XG4gIH0pO1xuICBjb25zdCB0b3RhbEl0ZW1zID0gSXRlbXNDb3VudGVyKCk7XG4gIGNvbnN0IGl0ZW1zQ291bnRlckVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLml0ZW1zLWNvdW50ZXInKTtcbiAgaXRlbXNDb3VudGVyRWwuaW5uZXJIVE1MID0gYCgke3RvdGFsSXRlbXN9KWA7XG59O1xuXG5pbml0KCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=