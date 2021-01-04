/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/***/ ((module) => {

eval("class DOMNodeCollection {\n    constructor(NodeList) {\n        this.NodeList = NodeList;\n    }\n\n    html(string){\n        if(string === \"undefined\") {\n            return this.NodeList[0].innerHTML;\n        }\n        else{\n            this.NodeList.forEach(ele => ele.innerHTML = string);\n        }\n    }\n\n    empty(){\n        this.html(\"\");\n    }\n\n    append(arg){\n        let domNode;\n        if( arg instanceof DOMNodeCollection){\n            domNode = arg;\n        }\n        else if (arg instanceof HTMLElement){\n            domNode = new DOMNodeCollection([arg])\n        }\n        else if(typeof arg === 'string'){\n            // let NodeList = document.querySelectorAll(arg);\n            // make a node list with blank HTMLElements\n            let NodeList = document.createElement(arg).innerHTML = \"Hello World\";\n            NodeList = Array.from(NodeList);\n            domNode = new DOMNodeCollection(NodeList);\n        }\n        debugger;\n        this.NodeList.forEach( function(inner){\n                domNode.NodeList.forEach(  function(outer){\n                    inner.innerHTML += outer.outerHTML;\n                });\n        });\n\n    }\n}\n\n\n\n\nmodule.exports = DOMNodeCollection;\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/************************************************************************/
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
eval("// Same as below\n// function $l(arg){\n// }\n// window.$l = $l;\n\nconst DOMNodeCollection = __webpack_require__(/*! ./dom_node_collection */ \"./src/dom_node_collection.js\");\n\nwindow.DOMNodeCollection = DOMNodeCollection;\n\nwindow.$l = function (arg){\n    // move if instance of html inside if arg is string\n\n\n    if(arg instanceof HTMLElement) {\n        let NodeList = [arg]\n        return new DOMNodeCollection(NodeList);\n    }\n    else if( typeof arg === 'string' ){    \n        // $l(\"<div> </div>\") parse for html tags -> create elements -> line 16\n\n         // do something, expect CSS selector\n        let NodeList = document.querySelectorAll(arg);\n        NodeList = Array.from(NodeList);\n        return new DOMNodeCollection(NodeList);\n    }\n}\n\n\n//# sourceURL=webpack:///./src/index.js?");
})();

/******/ })()
;