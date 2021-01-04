/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
eval("// Same as below\n// function $l(arg){\n// }\n// window.$l = $l;\n\nwindow.$l = function (arg){\n    if( typeof arg === 'string'){\n        // do something, expect CSS selector\n        let domArr = Document.querySelectorAll(arg);\n        domArr = Array.from(domArr);\n    }\n}\n\n//# sourceURL=webpack:///./src/index.js?");
/******/ })()
;