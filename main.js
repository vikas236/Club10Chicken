/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/body.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/body.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  font-family: sans-serif;
  box-sizing: border-box;
}

/* @font-face {
  font-family: "BunjeeShade-regular";
  src: url("./BungeeShade-Regular.ttf");
} */

body {
  margin: 0;
}

main {
  height: 1000px;
  margin: 0;
  margin-top: 75px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: fit-content;
  overflow: hidden;
}

.section {
  position: relative;
  transition: 0.4s;
}

.section.inactive {
  height: 60px;
  overflow: hidden;
}

.fried_chicken {
  width: 100vw;
  height: 670px;
  overflow: hidden;
  background: #cb7836;
  position: realtive;
}

.section_name {
  cursor: pointer;
}

.brush_stroke {
  display: flex;
  align-items: center;
  height: 50px;
  overflow: hidden;
}

.brush_stroke img {
  width: 150px;
  height: 200px;
  transform: rotate(90deg);
}

.brush_stroke img:nth-of-type(2) {
  position: relative;
  right: 50px;
}

.section_name>.subtext {
  width: 100px;
  position: absolute;
  right: 0px;
  top: 30px;
  color: white;
  font-size: 14px;
}

.section_name h2 {
  height: 30px;
  margin: 0;
  font-size: 22px;
  position: absolute;
  inset: 0px;
  z-index: 1;
  color: white;
  left: 20px;
  top: 17px;
}

.fried_chicken .items {
  position: absolute;
  top: 65px;
  left: 15px;
  font-size: 16px;
  display: flex;
  flex-direction: column;
}

.fried_chicken .item {
  width: fit-content;
  border: 2px solid #231f1e;
  padding: 3px;
  border-radius: 5px;
  font-weight: bold;
  font-size: 18px;
}

.fried_chicken .item:nth-of-type(2) {
  margin-top: 120px;
}

.fried_chicken .content {
  font-size: 16px;
  font-weight: bold;
  padding-top: 10px;
}

.section .dish_content {
  width: 90vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 5px;
  color: #231f1e;
}

.section .dish_content:first-of-type {
  margin-top: 12px;
}

.section .dish {
  padding: 3px;
  margin-top: -5px;
}

.fried_chicken .towards {
  letter-spacing: -1px;
  position: absolute;
  right: 35%;
}

.fried_chicken .add_dish {
  position: absolute;
  right: 17%;
  cursor: pointer;
}

.fried_chicken .price,
.chicken_combo .price {
  background: white;
  border-radius: 5px;
  padding: 2px 5px;
  border: 2px solid #231f1e;
}

.chicken_combo {
  height: 605px;
  position: relative;
  background: #cb7836;
}

h2>span:first-of-type,
h2>span:last-of-type {
  width: 10px;
  font-size: 14px;
  position: relative;
  top: -10px;
}

h2>span:last-of-type {
  position: absolute;
  top: 10px;
  left: 105px;
}

.combos {
  margin-top: 10px;
  margin-left: 20px;
}

.combo {
  position: relative;
}

.combo h2 {
  font-size: 22px;
  width: 60%;
}

.combo p {
  margin-top: -15px;
  font-size: 13px;
  width: 60%;
}

.combo .price {
  width: fit-content;
  position: absolute;
  right: 23px;
  top: 5px;
  font-weight: bold;
}

.combo img {
  position: absolute;
  right: 80px;
  top: 5px;
}

.combo .offer {
  position: absolute;
  top: 35px;
  right: 15px;
  font-weight: bolder;
  font-size: 18px;
}

.normal {
  height: 315px;
  background: #711c17;
}

.normal h2 {
  color: #711c17;
}

.normal .dish_content {
  width: 100vw;
  position: relative;
  top: 10px;
}

.normal .dish {
  color: white;
  margin-left: 20px;
  font-size: 18px;
  margin-top: 0px;
}

.normal .price {
  color: white;
  font-size: 18px;
  position: absolute;
  right: 25px;
}

.normal .dish_content img {
  position: absolute;
  right: 80px;
  top: 1px;
}

.quick_bits {
  height: 485px;
}

.quick_bits .brush_stroke img:nth-of-type(2) {
  position: relative;
  left: -115px;
}

.milk_shakes {
  height: 675px;
}

.milk_shakes .brush_stroke>img:nth-of-type(2) {
  position: relative;
  left: -75px;
}

.large {
  height: 360px;
  background: #1A1F22;
}

.large.inactive {
  height: 95px;
}

.large h2 {
  color: #1A1F22;
  width: 250px;
}

.large .brush_stroke {
  overflow: visible;
}

.large .brush_stroke>img:nth-of-type(2) {
  position: relative;
  left: 15px;
}

.large .brush_stroke>img:nth-of-type(3) {
  position: relative;
  z-index: 1;
  top: 30px;
  left: -160px;
}

.large .brush_stroke>img:nth-of-type(4) {
  position: relative;
  top: 30px;
  left: -150px;
}

.large .dish_content {
  width: 100vw;
  position: relative;
}

.large .dish_content:nth-of-type(2) {
  margin-top: 45px;
  color: black;
}

.large .dish {
  color: white;
  margin-left: 20px;
  font-size: 18px;
  margin-top: 0px;
}

.large .price {
  color: white;
  font-size: 18px;
  position: absolute;
  right: 25px;
}

.large .dish_content img {
  position: absolute;
  right: 80px;
}

.fried_cgsand {
  height: 460px;
}

.fried_cgsand .brush_stroke>img:nth-of-type(4) {
  left: -125px;
}

.fried_cgsand .subtext {
  position: absolute;
  top: 15px;
}

.fried_cgburger {
  height: 355px;
}

.smoothies,
.mocktails,
.thick_shake {
  background: #F09B1E;
  height: 450px;
}


.smoothies img:last-of-type,
.mocktails img:last-of-type,
.thick_shake img:last-of-type {
  position: relative;
  right: 100px;
}


.smoothies .dish_content img,
.mocktails .dish_content img,
.thick_shake .dish_content img {
  position: absolute;
  right: 80px;
}

.smoothies h2,
.mocktails h2,
.thick_shake h2 {
  color: #EC1A23;
}

.mocktails {
  height: 515px;
}

.thick_shake {
  height: 355px;
}

.coffee,
.pizza,
.pasta,
.nachos,
.tacos {
  height: 160px;
  background: #2E2222;
}

.coffee h2,
.pizza h2,
.pasta h2,
.nachos h2,
.tacos h2 {
  color: #111214;
}

.coffee .brush_stroke img:last-of-type {
  position: absolute;
  left: 10px;
}

.pizza {
  height: 355px;
}

.pizza .brush_stroke img:first-of-type {
  position: absolute;
  left: -20px;
}

.pasta {
  height: 130px;
}

.nachos {
  height: 160px;
}

.tacos {
  height: 130px;
}

footer {
  width: 100vw;
  height: fit-content;
}`, "",{"version":3,"sources":["webpack://./src/css/body.css"],"names":[],"mappings":"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","sourcesContent":["* {\r\n  font-family: sans-serif;\r\n  box-sizing: border-box;\r\n}\r\n\r\n/* @font-face {\r\n  font-family: \"BunjeeShade-regular\";\r\n  src: url(\"./BungeeShade-Regular.ttf\");\r\n} */\r\n\r\nbody {\r\n  margin: 0;\r\n}\r\n\r\nmain {\r\n  height: 1000px;\r\n  margin: 0;\r\n  margin-top: 75px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  height: fit-content;\r\n  overflow: hidden;\r\n}\r\n\r\n.section {\r\n  position: relative;\r\n  transition: 0.4s;\r\n}\r\n\r\n.section.inactive {\r\n  height: 60px;\r\n  overflow: hidden;\r\n}\r\n\r\n.fried_chicken {\r\n  width: 100vw;\r\n  height: 670px;\r\n  overflow: hidden;\r\n  background: #cb7836;\r\n  position: realtive;\r\n}\r\n\r\n.section_name {\r\n  cursor: pointer;\r\n}\r\n\r\n.brush_stroke {\r\n  display: flex;\r\n  align-items: center;\r\n  height: 50px;\r\n  overflow: hidden;\r\n}\r\n\r\n.brush_stroke img {\r\n  width: 150px;\r\n  height: 200px;\r\n  transform: rotate(90deg);\r\n}\r\n\r\n.brush_stroke img:nth-of-type(2) {\r\n  position: relative;\r\n  right: 50px;\r\n}\r\n\r\n.section_name>.subtext {\r\n  width: 100px;\r\n  position: absolute;\r\n  right: 0px;\r\n  top: 30px;\r\n  color: white;\r\n  font-size: 14px;\r\n}\r\n\r\n.section_name h2 {\r\n  height: 30px;\r\n  margin: 0;\r\n  font-size: 22px;\r\n  position: absolute;\r\n  inset: 0px;\r\n  z-index: 1;\r\n  color: white;\r\n  left: 20px;\r\n  top: 17px;\r\n}\r\n\r\n.fried_chicken .items {\r\n  position: absolute;\r\n  top: 65px;\r\n  left: 15px;\r\n  font-size: 16px;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.fried_chicken .item {\r\n  width: fit-content;\r\n  border: 2px solid #231f1e;\r\n  padding: 3px;\r\n  border-radius: 5px;\r\n  font-weight: bold;\r\n  font-size: 18px;\r\n}\r\n\r\n.fried_chicken .item:nth-of-type(2) {\r\n  margin-top: 120px;\r\n}\r\n\r\n.fried_chicken .content {\r\n  font-size: 16px;\r\n  font-weight: bold;\r\n  padding-top: 10px;\r\n}\r\n\r\n.section .dish_content {\r\n  width: 90vw;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  margin-top: 5px;\r\n  color: #231f1e;\r\n}\r\n\r\n.section .dish_content:first-of-type {\r\n  margin-top: 12px;\r\n}\r\n\r\n.section .dish {\r\n  padding: 3px;\r\n  margin-top: -5px;\r\n}\r\n\r\n.fried_chicken .towards {\r\n  letter-spacing: -1px;\r\n  position: absolute;\r\n  right: 35%;\r\n}\r\n\r\n.fried_chicken .add_dish {\r\n  position: absolute;\r\n  right: 17%;\r\n  cursor: pointer;\r\n}\r\n\r\n.fried_chicken .price,\r\n.chicken_combo .price {\r\n  background: white;\r\n  border-radius: 5px;\r\n  padding: 2px 5px;\r\n  border: 2px solid #231f1e;\r\n}\r\n\r\n.chicken_combo {\r\n  height: 605px;\r\n  position: relative;\r\n  background: #cb7836;\r\n}\r\n\r\nh2>span:first-of-type,\r\nh2>span:last-of-type {\r\n  width: 10px;\r\n  font-size: 14px;\r\n  position: relative;\r\n  top: -10px;\r\n}\r\n\r\nh2>span:last-of-type {\r\n  position: absolute;\r\n  top: 10px;\r\n  left: 105px;\r\n}\r\n\r\n.combos {\r\n  margin-top: 10px;\r\n  margin-left: 20px;\r\n}\r\n\r\n.combo {\r\n  position: relative;\r\n}\r\n\r\n.combo h2 {\r\n  font-size: 22px;\r\n  width: 60%;\r\n}\r\n\r\n.combo p {\r\n  margin-top: -15px;\r\n  font-size: 13px;\r\n  width: 60%;\r\n}\r\n\r\n.combo .price {\r\n  width: fit-content;\r\n  position: absolute;\r\n  right: 23px;\r\n  top: 5px;\r\n  font-weight: bold;\r\n}\r\n\r\n.combo img {\r\n  position: absolute;\r\n  right: 80px;\r\n  top: 5px;\r\n}\r\n\r\n.combo .offer {\r\n  position: absolute;\r\n  top: 35px;\r\n  right: 15px;\r\n  font-weight: bolder;\r\n  font-size: 18px;\r\n}\r\n\r\n.normal {\r\n  height: 315px;\r\n  background: #711c17;\r\n}\r\n\r\n.normal h2 {\r\n  color: #711c17;\r\n}\r\n\r\n.normal .dish_content {\r\n  width: 100vw;\r\n  position: relative;\r\n  top: 10px;\r\n}\r\n\r\n.normal .dish {\r\n  color: white;\r\n  margin-left: 20px;\r\n  font-size: 18px;\r\n  margin-top: 0px;\r\n}\r\n\r\n.normal .price {\r\n  color: white;\r\n  font-size: 18px;\r\n  position: absolute;\r\n  right: 25px;\r\n}\r\n\r\n.normal .dish_content img {\r\n  position: absolute;\r\n  right: 80px;\r\n  top: 1px;\r\n}\r\n\r\n.quick_bits {\r\n  height: 485px;\r\n}\r\n\r\n.quick_bits .brush_stroke img:nth-of-type(2) {\r\n  position: relative;\r\n  left: -115px;\r\n}\r\n\r\n.milk_shakes {\r\n  height: 675px;\r\n}\r\n\r\n.milk_shakes .brush_stroke>img:nth-of-type(2) {\r\n  position: relative;\r\n  left: -75px;\r\n}\r\n\r\n.large {\r\n  height: 360px;\r\n  background: #1A1F22;\r\n}\r\n\r\n.large.inactive {\r\n  height: 95px;\r\n}\r\n\r\n.large h2 {\r\n  color: #1A1F22;\r\n  width: 250px;\r\n}\r\n\r\n.large .brush_stroke {\r\n  overflow: visible;\r\n}\r\n\r\n.large .brush_stroke>img:nth-of-type(2) {\r\n  position: relative;\r\n  left: 15px;\r\n}\r\n\r\n.large .brush_stroke>img:nth-of-type(3) {\r\n  position: relative;\r\n  z-index: 1;\r\n  top: 30px;\r\n  left: -160px;\r\n}\r\n\r\n.large .brush_stroke>img:nth-of-type(4) {\r\n  position: relative;\r\n  top: 30px;\r\n  left: -150px;\r\n}\r\n\r\n.large .dish_content {\r\n  width: 100vw;\r\n  position: relative;\r\n}\r\n\r\n.large .dish_content:nth-of-type(2) {\r\n  margin-top: 45px;\r\n  color: black;\r\n}\r\n\r\n.large .dish {\r\n  color: white;\r\n  margin-left: 20px;\r\n  font-size: 18px;\r\n  margin-top: 0px;\r\n}\r\n\r\n.large .price {\r\n  color: white;\r\n  font-size: 18px;\r\n  position: absolute;\r\n  right: 25px;\r\n}\r\n\r\n.large .dish_content img {\r\n  position: absolute;\r\n  right: 80px;\r\n}\r\n\r\n.fried_cgsand {\r\n  height: 460px;\r\n}\r\n\r\n.fried_cgsand .brush_stroke>img:nth-of-type(4) {\r\n  left: -125px;\r\n}\r\n\r\n.fried_cgsand .subtext {\r\n  position: absolute;\r\n  top: 15px;\r\n}\r\n\r\n.fried_cgburger {\r\n  height: 355px;\r\n}\r\n\r\n.smoothies,\r\n.mocktails,\r\n.thick_shake {\r\n  background: #F09B1E;\r\n  height: 450px;\r\n}\r\n\r\n\r\n.smoothies img:last-of-type,\r\n.mocktails img:last-of-type,\r\n.thick_shake img:last-of-type {\r\n  position: relative;\r\n  right: 100px;\r\n}\r\n\r\n\r\n.smoothies .dish_content img,\r\n.mocktails .dish_content img,\r\n.thick_shake .dish_content img {\r\n  position: absolute;\r\n  right: 80px;\r\n}\r\n\r\n.smoothies h2,\r\n.mocktails h2,\r\n.thick_shake h2 {\r\n  color: #EC1A23;\r\n}\r\n\r\n.mocktails {\r\n  height: 515px;\r\n}\r\n\r\n.thick_shake {\r\n  height: 355px;\r\n}\r\n\r\n.coffee,\r\n.pizza,\r\n.pasta,\r\n.nachos,\r\n.tacos {\r\n  height: 160px;\r\n  background: #2E2222;\r\n}\r\n\r\n.coffee h2,\r\n.pizza h2,\r\n.pasta h2,\r\n.nachos h2,\r\n.tacos h2 {\r\n  color: #111214;\r\n}\r\n\r\n.coffee .brush_stroke img:last-of-type {\r\n  position: absolute;\r\n  left: 10px;\r\n}\r\n\r\n.pizza {\r\n  height: 355px;\r\n}\r\n\r\n.pizza .brush_stroke img:first-of-type {\r\n  position: absolute;\r\n  left: -20px;\r\n}\r\n\r\n.pasta {\r\n  height: 130px;\r\n}\r\n\r\n.nachos {\r\n  height: 160px;\r\n}\r\n\r\n.tacos {\r\n  height: 130px;\r\n}\r\n\r\nfooter {\r\n  width: 100vw;\r\n  height: fit-content;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/footer.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/footer.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/navbar.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/navbar.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Navbar */
nav {
    width: 100vw;
    height: 75px;
    background: #e0b11d;
    position: fixed;
    inset: 0px;
    /* backdrop-filter: blur(3px); */
    /* filter: blur(px); */
    z-index: 2;
}

nav img {
    width: 70px;
    height: 70px;
    box-shadow: 0px 0px 5px 3px #E5B221;
    border-radius: 50%;
    margin-left: 15px;
}

nav h1 {
    font-size: 28px;
    width: 150px;
    color: white;
    position: absolute;
    inset: -20px 115px;
    line-height: 35px;
    letter-spacing: 3px;
}

nav .ten {
    font-size: 42px;
    color: white;
    position: absolute;
    inset: -1px 210px;
    letter-spacing: 3px;
}`, "",{"version":3,"sources":["webpack://./src/css/navbar.css"],"names":[],"mappings":"AAAA,WAAW;AACX;IACI,YAAY;IACZ,YAAY;IACZ,mBAAmB;IACnB,eAAe;IACf,UAAU;IACV,gCAAgC;IAChC,sBAAsB;IACtB,UAAU;AACd;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,mCAAmC;IACnC,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,kBAAkB;IAClB,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,kBAAkB;IAClB,iBAAiB;IACjB,mBAAmB;AACvB","sourcesContent":["/* Navbar */\r\nnav {\r\n    width: 100vw;\r\n    height: 75px;\r\n    background: #e0b11d;\r\n    position: fixed;\r\n    inset: 0px;\r\n    /* backdrop-filter: blur(3px); */\r\n    /* filter: blur(px); */\r\n    z-index: 2;\r\n}\r\n\r\nnav img {\r\n    width: 70px;\r\n    height: 70px;\r\n    box-shadow: 0px 0px 5px 3px #E5B221;\r\n    border-radius: 50%;\r\n    margin-left: 15px;\r\n}\r\n\r\nnav h1 {\r\n    font-size: 28px;\r\n    width: 150px;\r\n    color: white;\r\n    position: absolute;\r\n    inset: -20px 115px;\r\n    line-height: 35px;\r\n    letter-spacing: 3px;\r\n}\r\n\r\nnav .ten {\r\n    font-size: 42px;\r\n    color: white;\r\n    position: absolute;\r\n    inset: -1px 210px;\r\n    letter-spacing: 3px;\r\n}"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/body.css":
/*!**************************!*\
  !*** ./src/css/body.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_body_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./body.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/body.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_body_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_body_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_body_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_body_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/footer.css":
/*!****************************!*\
  !*** ./src/css/footer.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./footer.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/footer.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/navbar.css":
/*!****************************!*\
  !*** ./src/css/navbar.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_navbar_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./navbar.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/navbar.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_navbar_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_navbar_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_navbar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_navbar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/images/black_stroke.svg":
/*!*************************************!*\
  !*** ./src/images/black_stroke.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/black_stroke.svg";

/***/ }),

/***/ "./src/images/description.png":
/*!************************************!*\
  !*** ./src/images/description.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/description.png";

/***/ }),

/***/ "./src/images/greyish_stroke.svg":
/*!***************************************!*\
  !*** ./src/images/greyish_stroke.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/greyish_stroke.svg";

/***/ }),

/***/ "./src/images/logo.png":
/*!*****************************!*\
  !*** ./src/images/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/logo.png";

/***/ }),

/***/ "./src/images/plus.svg":
/*!*****************************!*\
  !*** ./src/images/plus.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/plus.svg";

/***/ }),

/***/ "./src/images/white_stroke.svg":
/*!*************************************!*\
  !*** ./src/images/white_stroke.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/white_stroke.svg";

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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
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
/* harmony import */ var _css_body_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/body.css */ "./src/css/body.css");
/* harmony import */ var _css_navbar_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/navbar.css */ "./src/css/navbar.css");
/* harmony import */ var _css_footer_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/footer.css */ "./src/css/footer.css");
/* harmony import */ var _images_greyish_stroke_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/greyish_stroke.svg */ "./src/images/greyish_stroke.svg");
/* harmony import */ var _images_black_stroke_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/black_stroke.svg */ "./src/images/black_stroke.svg");
/* harmony import */ var _images_white_stroke_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/white_stroke.svg */ "./src/images/white_stroke.svg");
/* harmony import */ var _images_plus_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/plus.svg */ "./src/images/plus.svg");
/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/logo.png */ "./src/images/logo.png");
/* harmony import */ var _images_description_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/description.png */ "./src/images/description.png");
// Import css files




// Import images







// Calling html elements
const section_name = document.querySelectorAll(".section_name");
const section = document.querySelectorAll(".section");
const main = document.querySelector("main");

// dishes and drinks
const items = [
  [
    "desertsNutto Brownie",
    "Cheese Cake",
    "Butter Scotch",
    "Choco Trabal",
    "Puttu Ice Cream",
    "Shawarma Ice Cream",
    "Slzzling Brownie",
    "Hazzle Nut Browni",
  ],
  [
    "Salted French Fries",
    "Masala French Fries",
    "Tandoori French Fries",
    "Cheesy French Fries",
    "Veg Nuggets",
    "Sweet Corn",
    "Chicken Cheese Shots",
    "Chicken Fingers (8Pcs)",
    "Chicken Nuggets (8Pcs)",
    "Veg Cheeze Shots",
    "Veg Fingers",
    "Potato Wedges",
    "Salted franch fires",
  ],
  [
    "Nutto Coffee Loaded",
    "Strawberry Monster",
    "Mango Burst",
    "Bubblegum Blast",
    "Mixberry Cheese Blast",
    "Mango Cheese Blast",
    "Butter Scotch",
    "Chocolate Orea",
    "Cheese Cake Fruit",
    "Cold Coffee",
    "Hazelnut Brownie Shake",
    "Nuttella Brownie",
    "Hot Chocolate",
    "Blue Berry",
    "Chocolate Cold Coffee",
    "Caramel Cold Coffee",
    "Hazelnut Shake",
    "Dry Fruit Shake",
    "Choco Almond",
  ],
  [
    "Non Veg Cheese Loaded",
    "Veg Cheese Loaded",
    "Tandoori Mayo Veg",
    "Paneer Mayo",
    "Tandoori Mayo Paneer",
    "Crispy Chicken",
    "Tandoori Mayo Chicken",
    "Veg Cheese Loaded",
  ],
  [
    "Veg Cheese Sandwich",
    "Fried Chicken Sandwich",
    "Paneer Cheese Sandwich",
    "Schezwan Chicken Sandwich",
    "Tandoori Mayo Chicken",
    "Chocolate Sandwich",
    "Veg Tandoori Mayo Sandwich",
    "Egg Cheese Sandwich",
    "Mexican Veg Cheese Sandwich",
    "Mexican Chicken Cheese *Sand",
    "Tomato Chilli Cheese Sandwich",
  ],
  [
    "Fired Chicken Burger",
    "Club 10 Cheesy Tower Burger",
    "Crispy Chicken Burger",
    "Crispy Veg Burger",
    "Crispy Fried Chicken",
    "King Egg Burger",
    "Mexican Veg Cheese Burger",
    "C10C Mexican Chicken Burger",
  ],
  [
    "Water Melon",
    "Apple",
    "Pine Apple",
    "Papaya",
    "Musk Melon",
    "Banana",
    "Black Grape",
    "Green Grape",
    "Chiku (Sapoto)",
    "Pomogrenate",
    "Straw Berry",
    "Nut Case",
  ],
  [
    "Mint Mojito",
    "Blue Curacao",
    "Green Apple Crush",
    "Paan Mojito",
    "Lychee Mojito",
    "Watermelon",
    "Energizer",
    "Blue Ocean",
    "Masala Lemonade",
    "Ice Tea",
    "Bubble Gum Mojito",
    "Black Currant",
    "Malt Mojito(Non-Alcoholic)",
    "Rum Mojito(Non-Alcoholic)",
  ],
  [
    "Butter Scotch",
    "Belgium Dark Chocolate",
    "Mango Thick Shake",
    "Oreo Thick Shake",
    "Straberry Thick Shake",
    "Kitkat",
    "Red Velvet Thick Shake",
    "Choco Thick Share",
    "Nuttella Thick Shake",
  ],
  ["Black Coffee", "Capucino Coffee", "Espresso"],
  [
    "Cheese Garlic Bread",
    "Garlic Bread",
    "Chicken Pizza",
    "Corn Pizza",
    "Panner Pizza",
    "Tandoori Chicken Pizza",
    "Cheeze Loaded Pizza",
    "Non Veg Loaded Pizza",
    "Veg Loaded Pizza",
  ],
  ["Chicken Alfredo", "Veg Alfredo"],
  ["Tandoori Nachos", "Cheese Nachos", "Nachos"],
  ["Chicken Tacos", "Veg Cheese Tacos"],
];

const prices = [
  ["139/-", "139/-", "139/-", "139/-", "299/-", "399/-", "199/-", "299/-"],
  [
    "129/-",
    "129/-",
    "169/-",
    "199/-",
    "179/-",
    "99/-",
    "199/-",
    "189/-",
    "199/-",
    "199/-",
    "199/-",
    "129/-",
    "129/-",
  ],
  [
    "169/-",
    "169/-",
    "179/-",
    "179/-",
    "169/-",
    "179/-",
    "169/-",
    "179/-",
    "179/-",
    "199/-",
    "199/-",
    "199/-",
    "149/-",
    "199/-",
    "209/-",
    "219/-",
    "199/-",
    "199/-",
    "169/-",
  ],
  ["179/-", "169/-", "179/-", "189/-", "189/-", "199/-", "189/-", "179/-"],
  [
    "139/-",
    "149/-",
    "139/-",
    "169/-",
    "159/-",
    "139/-",
    "169/-",
    "149/-",
    "149/-",
    "199/-",
    "159/-",
  ],
  [
    "169/-",
    "199/-",
    "149/-",
    "139/-",
    "149/-",
    "149/-",
    "189/-",
    "199/-",
    "349/-",
  ],
  [
    "199/-",
    "219/-",
    "199/-",
    "199/-",
    "209/-",
    "199/-",
    "199/-",
    "199/-",
    "219/-",
    "219/-",
    "249/-",
    "249/-",
  ],
  [
    "129/-",
    "129/-",
    "129/-",
    "129/-",
    "129/-",
    "129/-",
    "149/-",
    "149/-",
    "129/-",
    "129/-",
    "129/-",
    "149/-",
    "149/-",
    "149/-",
  ],
  [
    "299/-",
    "299/-",
    "299/-",
    "299/-",
    "299/-",
    "299/-",
    "299/-",
    "249/-",
    "249/-",
  ],
  ["99/-", "149/-", "129/-"],
  [
    "199/-",
    "99/-",
    "199/-",
    "239/-",
    "239/-",
    "269/-",
    "199/-",
    "299/-",
    "189/-",
    "549/-",
  ],
  ["299/-", "269/-"],
  ["219/-", "199/-", "249 /-"],
  ["149/-", "139/-"],
];

// Functions
const el = (() => {
  const createMenu = () => {
    let k = 5;
    for (let j = 0; j < 14; j++) {
      for (let i = 0; i < items[j].length; i++) {
        const deserts = main.childNodes[k];
        const dish_content = deserts.appendChild(document.createElement("div"));
        dish_content.classList.add("dish_content");
        dish_content.innerHTML = `
      <span class="dish">${items[j][i]}</span>
      <img src="./images/plus.svg" alt="add to cart">
      <span class="price">₹${prices[j][i]}</span>`;
      }
      k += 2;
    }
  };
  const dropDown = (i) => {
    section[i].classList.toggle("inactive");
  };

  return { createMenu, dropDown };
})();

// Events
for (let i = 0; i < section_name.length; i++) {
  section_name[i].addEventListener("click", () => {
    el.dropDown(i);
  });
}
el.createMenu();

{
  /* <div class="dish_content">
<span class="dish">Nutto Brownie</span>
<img src="./images/plus.svg" alt="add to cart">
<span class="price">10/-</span>
</div> */
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sbUZBQW1GLFlBQVksYUFBYSxPQUFPLE9BQU8sTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUIsc0JBQXNCLHFCQUFxQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixZQUFZO0FBQ3ZDO0FBQ0EsNkJBQTZCLGFBQWE7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxDQUFDO0FBQ0Q7QUFDQTtBQUNBLGdCQUFnQix5QkFBeUI7QUFDekM7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NsdWIxMGNoaWNrZW4vLi9zcmMvY3NzL2JvZHkuY3NzIiwid2VicGFjazovL2NsdWIxMGNoaWNrZW4vLi9zcmMvY3NzL2Zvb3Rlci5jc3MiLCJ3ZWJwYWNrOi8vY2x1YjEwY2hpY2tlbi8uL3NyYy9jc3MvbmF2YmFyLmNzcyIsIndlYnBhY2s6Ly9jbHViMTBjaGlja2VuLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9jbHViMTBjaGlja2VuLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vY2x1YjEwY2hpY2tlbi8uL3NyYy9jc3MvYm9keS5jc3M/MjY1NiIsIndlYnBhY2s6Ly9jbHViMTBjaGlja2VuLy4vc3JjL2Nzcy9mb290ZXIuY3NzP2FiOGMiLCJ3ZWJwYWNrOi8vY2x1YjEwY2hpY2tlbi8uL3NyYy9jc3MvbmF2YmFyLmNzcz8yMmE3Iiwid2VicGFjazovL2NsdWIxMGNoaWNrZW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vY2x1YjEwY2hpY2tlbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vY2x1YjEwY2hpY2tlbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9jbHViMTBjaGlja2VuLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2NsdWIxMGNoaWNrZW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9jbHViMTBjaGlja2VuLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vY2x1YjEwY2hpY2tlbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jbHViMTBjaGlja2VuL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2NsdWIxMGNoaWNrZW4vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2NsdWIxMGNoaWNrZW4vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jbHViMTBjaGlja2VuL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY2x1YjEwY2hpY2tlbi93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9jbHViMTBjaGlja2VuL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9jbHViMTBjaGlja2VuLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcclxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4vKiBAZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogXCJCdW5qZWVTaGFkZS1yZWd1bGFyXCI7XHJcbiAgc3JjOiB1cmwoXCIuL0J1bmdlZVNoYWRlLVJlZ3VsYXIudHRmXCIpO1xyXG59ICovXHJcblxyXG5ib2R5IHtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbm1haW4ge1xyXG4gIGhlaWdodDogMTAwMHB4O1xyXG4gIG1hcmdpbjogMDtcclxuICBtYXJnaW4tdG9wOiA3NXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uc2VjdGlvbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRyYW5zaXRpb246IDAuNHM7XHJcbn1cclxuXHJcbi5zZWN0aW9uLmluYWN0aXZlIHtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmZyaWVkX2NoaWNrZW4ge1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDY3MHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYmFja2dyb3VuZDogI2NiNzgzNjtcclxuICBwb3NpdGlvbjogcmVhbHRpdmU7XHJcbn1cclxuXHJcbi5zZWN0aW9uX25hbWUge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmJydXNoX3N0cm9rZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogNTBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uYnJ1c2hfc3Ryb2tlIGltZyB7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG59XHJcblxyXG4uYnJ1c2hfc3Ryb2tlIGltZzpudGgtb2YtdHlwZSgyKSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHJpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG4uc2VjdGlvbl9uYW1lPi5zdWJ0ZXh0IHtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwcHg7XHJcbiAgdG9wOiAzMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5zZWN0aW9uX25hbWUgaDIge1xyXG4gIGhlaWdodDogMzBweDtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBpbnNldDogMHB4O1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGxlZnQ6IDIwcHg7XHJcbiAgdG9wOiAxN3B4O1xyXG59XHJcblxyXG4uZnJpZWRfY2hpY2tlbiAuaXRlbXMge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDY1cHg7XHJcbiAgbGVmdDogMTVweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uZnJpZWRfY2hpY2tlbiAuaXRlbSB7XHJcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICMyMzFmMWU7XHJcbiAgcGFkZGluZzogM3B4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi5mcmllZF9jaGlja2VuIC5pdGVtOm50aC1vZi10eXBlKDIpIHtcclxuICBtYXJnaW4tdG9wOiAxMjBweDtcclxufVxyXG5cclxuLmZyaWVkX2NoaWNrZW4gLmNvbnRlbnQge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG5cclxuLnNlY3Rpb24gLmRpc2hfY29udGVudCB7XHJcbiAgd2lkdGg6IDkwdnc7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgY29sb3I6ICMyMzFmMWU7XHJcbn1cclxuXHJcbi5zZWN0aW9uIC5kaXNoX2NvbnRlbnQ6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgbWFyZ2luLXRvcDogMTJweDtcclxufVxyXG5cclxuLnNlY3Rpb24gLmRpc2gge1xyXG4gIHBhZGRpbmc6IDNweDtcclxuICBtYXJnaW4tdG9wOiAtNXB4O1xyXG59XHJcblxyXG4uZnJpZWRfY2hpY2tlbiAudG93YXJkcyB7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAzNSU7XHJcbn1cclxuXHJcbi5mcmllZF9jaGlja2VuIC5hZGRfZGlzaCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAxNyU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZnJpZWRfY2hpY2tlbiAucHJpY2UsXHJcbi5jaGlja2VuX2NvbWJvIC5wcmljZSB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBhZGRpbmc6IDJweCA1cHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzIzMWYxZTtcclxufVxyXG5cclxuLmNoaWNrZW5fY29tYm8ge1xyXG4gIGhlaWdodDogNjA1cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQ6ICNjYjc4MzY7XHJcbn1cclxuXHJcbmgyPnNwYW46Zmlyc3Qtb2YtdHlwZSxcclxuaDI+c3BhbjpsYXN0LW9mLXR5cGUge1xyXG4gIHdpZHRoOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAtMTBweDtcclxufVxyXG5cclxuaDI+c3BhbjpsYXN0LW9mLXR5cGUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDEwcHg7XHJcbiAgbGVmdDogMTA1cHg7XHJcbn1cclxuXHJcbi5jb21ib3Mge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbi5jb21ibyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uY29tYm8gaDIge1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICB3aWR0aDogNjAlO1xyXG59XHJcblxyXG4uY29tYm8gcCB7XHJcbiAgbWFyZ2luLXRvcDogLTE1cHg7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIHdpZHRoOiA2MCU7XHJcbn1cclxuXHJcbi5jb21ibyAucHJpY2Uge1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDIzcHg7XHJcbiAgdG9wOiA1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5jb21ibyBpbWcge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogODBweDtcclxuICB0b3A6IDVweDtcclxufVxyXG5cclxuLmNvbWJvIC5vZmZlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMzVweDtcclxuICByaWdodDogMTVweDtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLm5vcm1hbCB7XHJcbiAgaGVpZ2h0OiAzMTVweDtcclxuICBiYWNrZ3JvdW5kOiAjNzExYzE3O1xyXG59XHJcblxyXG4ubm9ybWFsIGgyIHtcclxuICBjb2xvcjogIzcxMWMxNztcclxufVxyXG5cclxuLm5vcm1hbCAuZGlzaF9jb250ZW50IHtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMTBweDtcclxufVxyXG5cclxuLm5vcm1hbCAuZGlzaCB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbn1cclxuXHJcbi5ub3JtYWwgLnByaWNlIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMjVweDtcclxufVxyXG5cclxuLm5vcm1hbCAuZGlzaF9jb250ZW50IGltZyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiA4MHB4O1xyXG4gIHRvcDogMXB4O1xyXG59XHJcblxyXG4ucXVpY2tfYml0cyB7XHJcbiAgaGVpZ2h0OiA0ODVweDtcclxufVxyXG5cclxuLnF1aWNrX2JpdHMgLmJydXNoX3N0cm9rZSBpbWc6bnRoLW9mLXR5cGUoMikge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsZWZ0OiAtMTE1cHg7XHJcbn1cclxuXHJcbi5taWxrX3NoYWtlcyB7XHJcbiAgaGVpZ2h0OiA2NzVweDtcclxufVxyXG5cclxuLm1pbGtfc2hha2VzIC5icnVzaF9zdHJva2U+aW1nOm50aC1vZi10eXBlKDIpIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbGVmdDogLTc1cHg7XHJcbn1cclxuXHJcbi5sYXJnZSB7XHJcbiAgaGVpZ2h0OiAzNjBweDtcclxuICBiYWNrZ3JvdW5kOiAjMUExRjIyO1xyXG59XHJcblxyXG4ubGFyZ2UuaW5hY3RpdmUge1xyXG4gIGhlaWdodDogOTVweDtcclxufVxyXG5cclxuLmxhcmdlIGgyIHtcclxuICBjb2xvcjogIzFBMUYyMjtcclxuICB3aWR0aDogMjUwcHg7XHJcbn1cclxuXHJcbi5sYXJnZSAuYnJ1c2hfc3Ryb2tlIHtcclxuICBvdmVyZmxvdzogdmlzaWJsZTtcclxufVxyXG5cclxuLmxhcmdlIC5icnVzaF9zdHJva2U+aW1nOm50aC1vZi10eXBlKDIpIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbGVmdDogMTVweDtcclxufVxyXG5cclxuLmxhcmdlIC5icnVzaF9zdHJva2U+aW1nOm50aC1vZi10eXBlKDMpIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTtcclxuICB0b3A6IDMwcHg7XHJcbiAgbGVmdDogLTE2MHB4O1xyXG59XHJcblxyXG4ubGFyZ2UgLmJydXNoX3N0cm9rZT5pbWc6bnRoLW9mLXR5cGUoNCkge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDMwcHg7XHJcbiAgbGVmdDogLTE1MHB4O1xyXG59XHJcblxyXG4ubGFyZ2UgLmRpc2hfY29udGVudCB7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmxhcmdlIC5kaXNoX2NvbnRlbnQ6bnRoLW9mLXR5cGUoMikge1xyXG4gIG1hcmdpbi10b3A6IDQ1cHg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4ubGFyZ2UgLmRpc2gge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG59XHJcblxyXG4ubGFyZ2UgLnByaWNlIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMjVweDtcclxufVxyXG5cclxuLmxhcmdlIC5kaXNoX2NvbnRlbnQgaW1nIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDgwcHg7XHJcbn1cclxuXHJcbi5mcmllZF9jZ3NhbmQge1xyXG4gIGhlaWdodDogNDYwcHg7XHJcbn1cclxuXHJcbi5mcmllZF9jZ3NhbmQgLmJydXNoX3N0cm9rZT5pbWc6bnRoLW9mLXR5cGUoNCkge1xyXG4gIGxlZnQ6IC0xMjVweDtcclxufVxyXG5cclxuLmZyaWVkX2Nnc2FuZCAuc3VidGV4dCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTVweDtcclxufVxyXG5cclxuLmZyaWVkX2NnYnVyZ2VyIHtcclxuICBoZWlnaHQ6IDM1NXB4O1xyXG59XHJcblxyXG4uc21vb3RoaWVzLFxyXG4ubW9ja3RhaWxzLFxyXG4udGhpY2tfc2hha2Uge1xyXG4gIGJhY2tncm91bmQ6ICNGMDlCMUU7XHJcbiAgaGVpZ2h0OiA0NTBweDtcclxufVxyXG5cclxuXHJcbi5zbW9vdGhpZXMgaW1nOmxhc3Qtb2YtdHlwZSxcclxuLm1vY2t0YWlscyBpbWc6bGFzdC1vZi10eXBlLFxyXG4udGhpY2tfc2hha2UgaW1nOmxhc3Qtb2YtdHlwZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHJpZ2h0OiAxMDBweDtcclxufVxyXG5cclxuXHJcbi5zbW9vdGhpZXMgLmRpc2hfY29udGVudCBpbWcsXHJcbi5tb2NrdGFpbHMgLmRpc2hfY29udGVudCBpbWcsXHJcbi50aGlja19zaGFrZSAuZGlzaF9jb250ZW50IGltZyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiA4MHB4O1xyXG59XHJcblxyXG4uc21vb3RoaWVzIGgyLFxyXG4ubW9ja3RhaWxzIGgyLFxyXG4udGhpY2tfc2hha2UgaDIge1xyXG4gIGNvbG9yOiAjRUMxQTIzO1xyXG59XHJcblxyXG4ubW9ja3RhaWxzIHtcclxuICBoZWlnaHQ6IDUxNXB4O1xyXG59XHJcblxyXG4udGhpY2tfc2hha2Uge1xyXG4gIGhlaWdodDogMzU1cHg7XHJcbn1cclxuXHJcbi5jb2ZmZWUsXHJcbi5waXp6YSxcclxuLnBhc3RhLFxyXG4ubmFjaG9zLFxyXG4udGFjb3Mge1xyXG4gIGhlaWdodDogMTYwcHg7XHJcbiAgYmFja2dyb3VuZDogIzJFMjIyMjtcclxufVxyXG5cclxuLmNvZmZlZSBoMixcclxuLnBpenphIGgyLFxyXG4ucGFzdGEgaDIsXHJcbi5uYWNob3MgaDIsXHJcbi50YWNvcyBoMiB7XHJcbiAgY29sb3I6ICMxMTEyMTQ7XHJcbn1cclxuXHJcbi5jb2ZmZWUgLmJydXNoX3N0cm9rZSBpbWc6bGFzdC1vZi10eXBlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMTBweDtcclxufVxyXG5cclxuLnBpenphIHtcclxuICBoZWlnaHQ6IDM1NXB4O1xyXG59XHJcblxyXG4ucGl6emEgLmJydXNoX3N0cm9rZSBpbWc6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IC0yMHB4O1xyXG59XHJcblxyXG4ucGFzdGEge1xyXG4gIGhlaWdodDogMTMwcHg7XHJcbn1cclxuXHJcbi5uYWNob3Mge1xyXG4gIGhlaWdodDogMTYwcHg7XHJcbn1cclxuXHJcbi50YWNvcyB7XHJcbiAgaGVpZ2h0OiAxMzBweDtcclxufVxyXG5cclxuZm9vdGVyIHtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9ib2R5LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHVCQUF1QjtFQUN2QixzQkFBc0I7QUFDeEI7O0FBRUE7OztHQUdHOztBQUVIO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsY0FBYztFQUNkLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixTQUFTO0VBQ1QsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osU0FBUztFQUNULGVBQWU7RUFDZixrQkFB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O0VBQ2Ysa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBOzs7RUFHRSxtQkFBbUI7RUFDbkIsYUFBYTtBQUNmOzs7QUFHQTs7O0VBR0Usa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7O0FBR0E7OztFQUdFLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7OztFQUdFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7Ozs7O0VBS0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTs7Ozs7RUFLRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcclxcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBAZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQnVuamVlU2hhZGUtcmVndWxhclxcXCI7XFxyXFxuICBzcmM6IHVybChcXFwiLi9CdW5nZWVTaGFkZS1SZWd1bGFyLnR0ZlxcXCIpO1xcclxcbn0gKi9cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICBoZWlnaHQ6IDEwMDBweDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIG1hcmdpbi10b3A6IDc1cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvbiB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvbi5pbmFjdGl2ZSB7XFxyXFxuICBoZWlnaHQ6IDYwcHg7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4uZnJpZWRfY2hpY2tlbiB7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBoZWlnaHQ6IDY3MHB4O1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIGJhY2tncm91bmQ6ICNjYjc4MzY7XFxyXFxuICBwb3NpdGlvbjogcmVhbHRpdmU7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uX25hbWUge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYnJ1c2hfc3Ryb2tlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmJydXNoX3N0cm9rZSBpbWcge1xcclxcbiAgd2lkdGg6IDE1MHB4O1xcclxcbiAgaGVpZ2h0OiAyMDBweDtcXHJcXG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJydXNoX3N0cm9rZSBpbWc6bnRoLW9mLXR5cGUoMikge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgcmlnaHQ6IDUwcHg7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uX25hbWU+LnN1YnRleHQge1xcclxcbiAgd2lkdGg6IDEwMHB4O1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgcmlnaHQ6IDBweDtcXHJcXG4gIHRvcDogMzBweDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb25fbmFtZSBoMiB7XFxyXFxuICBoZWlnaHQ6IDMwcHg7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBmb250LXNpemU6IDIycHg7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBpbnNldDogMHB4O1xcclxcbiAgei1pbmRleDogMTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGxlZnQ6IDIwcHg7XFxyXFxuICB0b3A6IDE3cHg7XFxyXFxufVxcclxcblxcclxcbi5mcmllZF9jaGlja2VuIC5pdGVtcyB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDY1cHg7XFxyXFxuICBsZWZ0OiAxNXB4O1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5mcmllZF9jaGlja2VuIC5pdGVtIHtcXHJcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMyMzFmMWU7XFxyXFxuICBwYWRkaW5nOiAzcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZyaWVkX2NoaWNrZW4gLml0ZW06bnRoLW9mLXR5cGUoMikge1xcclxcbiAgbWFyZ2luLXRvcDogMTIwcHg7XFxyXFxufVxcclxcblxcclxcbi5mcmllZF9jaGlja2VuIC5jb250ZW50IHtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uIC5kaXNoX2NvbnRlbnQge1xcclxcbiAgd2lkdGg6IDkwdnc7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIG1hcmdpbi10b3A6IDVweDtcXHJcXG4gIGNvbG9yOiAjMjMxZjFlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvbiAuZGlzaF9jb250ZW50OmZpcnN0LW9mLXR5cGUge1xcclxcbiAgbWFyZ2luLXRvcDogMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb24gLmRpc2gge1xcclxcbiAgcGFkZGluZzogM3B4O1xcclxcbiAgbWFyZ2luLXRvcDogLTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZyaWVkX2NoaWNrZW4gLnRvd2FyZHMge1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICByaWdodDogMzUlO1xcclxcbn1cXHJcXG5cXHJcXG4uZnJpZWRfY2hpY2tlbiAuYWRkX2Rpc2gge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgcmlnaHQ6IDE3JTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZyaWVkX2NoaWNrZW4gLnByaWNlLFxcclxcbi5jaGlja2VuX2NvbWJvIC5wcmljZSB7XFxyXFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIHBhZGRpbmc6IDJweCA1cHg7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCAjMjMxZjFlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hpY2tlbl9jb21ibyB7XFxyXFxuICBoZWlnaHQ6IDYwNXB4O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgYmFja2dyb3VuZDogI2NiNzgzNjtcXHJcXG59XFxyXFxuXFxyXFxuaDI+c3BhbjpmaXJzdC1vZi10eXBlLFxcclxcbmgyPnNwYW46bGFzdC1vZi10eXBlIHtcXHJcXG4gIHdpZHRoOiAxMHB4O1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgdG9wOiAtMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuaDI+c3BhbjpsYXN0LW9mLXR5cGUge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAxMHB4O1xcclxcbiAgbGVmdDogMTA1cHg7XFxyXFxufVxcclxcblxcclxcbi5jb21ib3Mge1xcclxcbiAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tYm8ge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tYm8gaDIge1xcclxcbiAgZm9udC1zaXplOiAyMnB4O1xcclxcbiAgd2lkdGg6IDYwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbWJvIHAge1xcclxcbiAgbWFyZ2luLXRvcDogLTE1cHg7XFxyXFxuICBmb250LXNpemU6IDEzcHg7XFxyXFxuICB3aWR0aDogNjAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tYm8gLnByaWNlIHtcXHJcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHJpZ2h0OiAyM3B4O1xcclxcbiAgdG9wOiA1cHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbWJvIGltZyB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICByaWdodDogODBweDtcXHJcXG4gIHRvcDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tYm8gLm9mZmVyIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMzVweDtcXHJcXG4gIHJpZ2h0OiAxNXB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5vcm1hbCB7XFxyXFxuICBoZWlnaHQ6IDMxNXB4O1xcclxcbiAgYmFja2dyb3VuZDogIzcxMWMxNztcXHJcXG59XFxyXFxuXFxyXFxuLm5vcm1hbCBoMiB7XFxyXFxuICBjb2xvcjogIzcxMWMxNztcXHJcXG59XFxyXFxuXFxyXFxuLm5vcm1hbCAuZGlzaF9jb250ZW50IHtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHRvcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5vcm1hbCAuZGlzaCB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBtYXJnaW4tbGVmdDogMjBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIG1hcmdpbi10b3A6IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5vcm1hbCAucHJpY2Uge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgcmlnaHQ6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbi5ub3JtYWwgLmRpc2hfY29udGVudCBpbWcge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgcmlnaHQ6IDgwcHg7XFxyXFxuICB0b3A6IDFweDtcXHJcXG59XFxyXFxuXFxyXFxuLnF1aWNrX2JpdHMge1xcclxcbiAgaGVpZ2h0OiA0ODVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnF1aWNrX2JpdHMgLmJydXNoX3N0cm9rZSBpbWc6bnRoLW9mLXR5cGUoMikge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgbGVmdDogLTExNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWlsa19zaGFrZXMge1xcclxcbiAgaGVpZ2h0OiA2NzVweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1pbGtfc2hha2VzIC5icnVzaF9zdHJva2U+aW1nOm50aC1vZi10eXBlKDIpIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGxlZnQ6IC03NXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubGFyZ2Uge1xcclxcbiAgaGVpZ2h0OiAzNjBweDtcXHJcXG4gIGJhY2tncm91bmQ6ICMxQTFGMjI7XFxyXFxufVxcclxcblxcclxcbi5sYXJnZS5pbmFjdGl2ZSB7XFxyXFxuICBoZWlnaHQ6IDk1cHg7XFxyXFxufVxcclxcblxcclxcbi5sYXJnZSBoMiB7XFxyXFxuICBjb2xvcjogIzFBMUYyMjtcXHJcXG4gIHdpZHRoOiAyNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxhcmdlIC5icnVzaF9zdHJva2Uge1xcclxcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxyXFxufVxcclxcblxcclxcbi5sYXJnZSAuYnJ1c2hfc3Ryb2tlPmltZzpudGgtb2YtdHlwZSgyKSB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBsZWZ0OiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubGFyZ2UgLmJydXNoX3N0cm9rZT5pbWc6bnRoLW9mLXR5cGUoMykge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG4gIHRvcDogMzBweDtcXHJcXG4gIGxlZnQ6IC0xNjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxhcmdlIC5icnVzaF9zdHJva2U+aW1nOm50aC1vZi10eXBlKDQpIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHRvcDogMzBweDtcXHJcXG4gIGxlZnQ6IC0xNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxhcmdlIC5kaXNoX2NvbnRlbnQge1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4ubGFyZ2UgLmRpc2hfY29udGVudDpudGgtb2YtdHlwZSgyKSB7XFxyXFxuICBtYXJnaW4tdG9wOiA0NXB4O1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4ubGFyZ2UgLmRpc2gge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBtYXJnaW4tdG9wOiAwcHg7XFxyXFxufVxcclxcblxcclxcbi5sYXJnZSAucHJpY2Uge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgcmlnaHQ6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbi5sYXJnZSAuZGlzaF9jb250ZW50IGltZyB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICByaWdodDogODBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZyaWVkX2Nnc2FuZCB7XFxyXFxuICBoZWlnaHQ6IDQ2MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZnJpZWRfY2dzYW5kIC5icnVzaF9zdHJva2U+aW1nOm50aC1vZi10eXBlKDQpIHtcXHJcXG4gIGxlZnQ6IC0xMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZyaWVkX2Nnc2FuZCAuc3VidGV4dCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5mcmllZF9jZ2J1cmdlciB7XFxyXFxuICBoZWlnaHQ6IDM1NXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc21vb3RoaWVzLFxcclxcbi5tb2NrdGFpbHMsXFxyXFxuLnRoaWNrX3NoYWtlIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNGMDlCMUU7XFxyXFxuICBoZWlnaHQ6IDQ1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uc21vb3RoaWVzIGltZzpsYXN0LW9mLXR5cGUsXFxyXFxuLm1vY2t0YWlscyBpbWc6bGFzdC1vZi10eXBlLFxcclxcbi50aGlja19zaGFrZSBpbWc6bGFzdC1vZi10eXBlIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHJpZ2h0OiAxMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnNtb290aGllcyAuZGlzaF9jb250ZW50IGltZyxcXHJcXG4ubW9ja3RhaWxzIC5kaXNoX2NvbnRlbnQgaW1nLFxcclxcbi50aGlja19zaGFrZSAuZGlzaF9jb250ZW50IGltZyB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICByaWdodDogODBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNtb290aGllcyBoMixcXHJcXG4ubW9ja3RhaWxzIGgyLFxcclxcbi50aGlja19zaGFrZSBoMiB7XFxyXFxuICBjb2xvcjogI0VDMUEyMztcXHJcXG59XFxyXFxuXFxyXFxuLm1vY2t0YWlscyB7XFxyXFxuICBoZWlnaHQ6IDUxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGhpY2tfc2hha2Uge1xcclxcbiAgaGVpZ2h0OiAzNTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvZmZlZSxcXHJcXG4ucGl6emEsXFxyXFxuLnBhc3RhLFxcclxcbi5uYWNob3MsXFxyXFxuLnRhY29zIHtcXHJcXG4gIGhlaWdodDogMTYwcHg7XFxyXFxuICBiYWNrZ3JvdW5kOiAjMkUyMjIyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29mZmVlIGgyLFxcclxcbi5waXp6YSBoMixcXHJcXG4ucGFzdGEgaDIsXFxyXFxuLm5hY2hvcyBoMixcXHJcXG4udGFjb3MgaDIge1xcclxcbiAgY29sb3I6ICMxMTEyMTQ7XFxyXFxufVxcclxcblxcclxcbi5jb2ZmZWUgLmJydXNoX3N0cm9rZSBpbWc6bGFzdC1vZi10eXBlIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGxlZnQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5waXp6YSB7XFxyXFxuICBoZWlnaHQ6IDM1NXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucGl6emEgLmJydXNoX3N0cm9rZSBpbWc6Zmlyc3Qtb2YtdHlwZSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBsZWZ0OiAtMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBhc3RhIHtcXHJcXG4gIGhlaWdodDogMTMwcHg7XFxyXFxufVxcclxcblxcclxcbi5uYWNob3Mge1xcclxcbiAgaGVpZ2h0OiAxNjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhY29zIHtcXHJcXG4gIGhlaWdodDogMTMwcHg7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W10sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIlwiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBOYXZiYXIgKi9cclxubmF2IHtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogNzVweDtcclxuICAgIGJhY2tncm91bmQ6ICNlMGIxMWQ7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBpbnNldDogMHB4O1xyXG4gICAgLyogYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7ICovXHJcbiAgICAvKiBmaWx0ZXI6IGJsdXIocHgpOyAqL1xyXG4gICAgei1pbmRleDogMjtcclxufVxyXG5cclxubmF2IGltZyB7XHJcbiAgICB3aWR0aDogNzBweDtcclxuICAgIGhlaWdodDogNzBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDNweCAjRTVCMjIxO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbn1cclxuXHJcbm5hdiBoMSB7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBpbnNldDogLTIwcHggMTE1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzVweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XHJcbn1cclxuXHJcbm5hdiAudGVuIHtcclxuICAgIGZvbnQtc2l6ZTogNDJweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGluc2V0OiAtMXB4IDIxMHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9uYXZiYXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLFdBQVc7QUFDWDtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixVQUFVO0lBQ1YsZ0NBQWdDO0lBQ2hDLHNCQUFzQjtJQUN0QixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1DQUFtQztJQUNuQyxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBOYXZiYXIgKi9cXHJcXG5uYXYge1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIGhlaWdodDogNzVweDtcXHJcXG4gICAgYmFja2dyb3VuZDogI2UwYjExZDtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBpbnNldDogMHB4O1xcclxcbiAgICAvKiBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTsgKi9cXHJcXG4gICAgLyogZmlsdGVyOiBibHVyKHB4KTsgKi9cXHJcXG4gICAgei1pbmRleDogMjtcXHJcXG59XFxyXFxuXFxyXFxubmF2IGltZyB7XFxyXFxuICAgIHdpZHRoOiA3MHB4O1xcclxcbiAgICBoZWlnaHQ6IDcwcHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDNweCAjRTVCMjIxO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgaDEge1xcclxcbiAgICBmb250LXNpemU6IDI4cHg7XFxyXFxuICAgIHdpZHRoOiAxNTBweDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGluc2V0OiAtMjBweCAxMTVweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDM1cHg7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XFxyXFxufVxcclxcblxcclxcbm5hdiAudGVuIHtcXHJcXG4gICAgZm9udC1zaXplOiA0MnB4O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgaW5zZXQ6IC0xcHggMjEwcHg7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2JvZHkuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ib2R5LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9mb290ZXIuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9mb290ZXIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25hdmJhci5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25hdmJhci5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8vIEltcG9ydCBjc3MgZmlsZXNcclxuaW1wb3J0IFwiLi9jc3MvYm9keS5jc3NcIjtcclxuaW1wb3J0IFwiLi9jc3MvbmF2YmFyLmNzc1wiO1xyXG5pbXBvcnQgXCIuL2Nzcy9mb290ZXIuY3NzXCI7XHJcblxyXG4vLyBJbXBvcnQgaW1hZ2VzXHJcbmltcG9ydCBcIi4vaW1hZ2VzL2dyZXlpc2hfc3Ryb2tlLnN2Z1wiO1xyXG5pbXBvcnQgXCIuL2ltYWdlcy9ibGFja19zdHJva2Uuc3ZnXCI7XHJcbmltcG9ydCBcIi4vaW1hZ2VzL3doaXRlX3N0cm9rZS5zdmdcIjtcclxuaW1wb3J0IFwiLi9pbWFnZXMvcGx1cy5zdmdcIjtcclxuaW1wb3J0IFwiLi9pbWFnZXMvbG9nby5wbmdcIjtcclxuaW1wb3J0IFwiLi9pbWFnZXMvZGVzY3JpcHRpb24ucG5nXCI7XHJcblxyXG4vLyBDYWxsaW5nIGh0bWwgZWxlbWVudHNcclxuY29uc3Qgc2VjdGlvbl9uYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zZWN0aW9uX25hbWVcIik7XHJcbmNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNlY3Rpb25cIik7XHJcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcclxuXHJcbi8vIGRpc2hlcyBhbmQgZHJpbmtzXHJcbmNvbnN0IGl0ZW1zID0gW1xyXG4gIFtcclxuICAgIFwiZGVzZXJ0c051dHRvIEJyb3duaWVcIixcclxuICAgIFwiQ2hlZXNlIENha2VcIixcclxuICAgIFwiQnV0dGVyIFNjb3RjaFwiLFxyXG4gICAgXCJDaG9jbyBUcmFiYWxcIixcclxuICAgIFwiUHV0dHUgSWNlIENyZWFtXCIsXHJcbiAgICBcIlNoYXdhcm1hIEljZSBDcmVhbVwiLFxyXG4gICAgXCJTbHp6bGluZyBCcm93bmllXCIsXHJcbiAgICBcIkhhenpsZSBOdXQgQnJvd25pXCIsXHJcbiAgXSxcclxuICBbXHJcbiAgICBcIlNhbHRlZCBGcmVuY2ggRnJpZXNcIixcclxuICAgIFwiTWFzYWxhIEZyZW5jaCBGcmllc1wiLFxyXG4gICAgXCJUYW5kb29yaSBGcmVuY2ggRnJpZXNcIixcclxuICAgIFwiQ2hlZXN5IEZyZW5jaCBGcmllc1wiLFxyXG4gICAgXCJWZWcgTnVnZ2V0c1wiLFxyXG4gICAgXCJTd2VldCBDb3JuXCIsXHJcbiAgICBcIkNoaWNrZW4gQ2hlZXNlIFNob3RzXCIsXHJcbiAgICBcIkNoaWNrZW4gRmluZ2VycyAoOFBjcylcIixcclxuICAgIFwiQ2hpY2tlbiBOdWdnZXRzICg4UGNzKVwiLFxyXG4gICAgXCJWZWcgQ2hlZXplIFNob3RzXCIsXHJcbiAgICBcIlZlZyBGaW5nZXJzXCIsXHJcbiAgICBcIlBvdGF0byBXZWRnZXNcIixcclxuICAgIFwiU2FsdGVkIGZyYW5jaCBmaXJlc1wiLFxyXG4gIF0sXHJcbiAgW1xyXG4gICAgXCJOdXR0byBDb2ZmZWUgTG9hZGVkXCIsXHJcbiAgICBcIlN0cmF3YmVycnkgTW9uc3RlclwiLFxyXG4gICAgXCJNYW5nbyBCdXJzdFwiLFxyXG4gICAgXCJCdWJibGVndW0gQmxhc3RcIixcclxuICAgIFwiTWl4YmVycnkgQ2hlZXNlIEJsYXN0XCIsXHJcbiAgICBcIk1hbmdvIENoZWVzZSBCbGFzdFwiLFxyXG4gICAgXCJCdXR0ZXIgU2NvdGNoXCIsXHJcbiAgICBcIkNob2NvbGF0ZSBPcmVhXCIsXHJcbiAgICBcIkNoZWVzZSBDYWtlIEZydWl0XCIsXHJcbiAgICBcIkNvbGQgQ29mZmVlXCIsXHJcbiAgICBcIkhhemVsbnV0IEJyb3duaWUgU2hha2VcIixcclxuICAgIFwiTnV0dGVsbGEgQnJvd25pZVwiLFxyXG4gICAgXCJIb3QgQ2hvY29sYXRlXCIsXHJcbiAgICBcIkJsdWUgQmVycnlcIixcclxuICAgIFwiQ2hvY29sYXRlIENvbGQgQ29mZmVlXCIsXHJcbiAgICBcIkNhcmFtZWwgQ29sZCBDb2ZmZWVcIixcclxuICAgIFwiSGF6ZWxudXQgU2hha2VcIixcclxuICAgIFwiRHJ5IEZydWl0IFNoYWtlXCIsXHJcbiAgICBcIkNob2NvIEFsbW9uZFwiLFxyXG4gIF0sXHJcbiAgW1xyXG4gICAgXCJOb24gVmVnIENoZWVzZSBMb2FkZWRcIixcclxuICAgIFwiVmVnIENoZWVzZSBMb2FkZWRcIixcclxuICAgIFwiVGFuZG9vcmkgTWF5byBWZWdcIixcclxuICAgIFwiUGFuZWVyIE1heW9cIixcclxuICAgIFwiVGFuZG9vcmkgTWF5byBQYW5lZXJcIixcclxuICAgIFwiQ3Jpc3B5IENoaWNrZW5cIixcclxuICAgIFwiVGFuZG9vcmkgTWF5byBDaGlja2VuXCIsXHJcbiAgICBcIlZlZyBDaGVlc2UgTG9hZGVkXCIsXHJcbiAgXSxcclxuICBbXHJcbiAgICBcIlZlZyBDaGVlc2UgU2FuZHdpY2hcIixcclxuICAgIFwiRnJpZWQgQ2hpY2tlbiBTYW5kd2ljaFwiLFxyXG4gICAgXCJQYW5lZXIgQ2hlZXNlIFNhbmR3aWNoXCIsXHJcbiAgICBcIlNjaGV6d2FuIENoaWNrZW4gU2FuZHdpY2hcIixcclxuICAgIFwiVGFuZG9vcmkgTWF5byBDaGlja2VuXCIsXHJcbiAgICBcIkNob2NvbGF0ZSBTYW5kd2ljaFwiLFxyXG4gICAgXCJWZWcgVGFuZG9vcmkgTWF5byBTYW5kd2ljaFwiLFxyXG4gICAgXCJFZ2cgQ2hlZXNlIFNhbmR3aWNoXCIsXHJcbiAgICBcIk1leGljYW4gVmVnIENoZWVzZSBTYW5kd2ljaFwiLFxyXG4gICAgXCJNZXhpY2FuIENoaWNrZW4gQ2hlZXNlICpTYW5kXCIsXHJcbiAgICBcIlRvbWF0byBDaGlsbGkgQ2hlZXNlIFNhbmR3aWNoXCIsXHJcbiAgXSxcclxuICBbXHJcbiAgICBcIkZpcmVkIENoaWNrZW4gQnVyZ2VyXCIsXHJcbiAgICBcIkNsdWIgMTAgQ2hlZXN5IFRvd2VyIEJ1cmdlclwiLFxyXG4gICAgXCJDcmlzcHkgQ2hpY2tlbiBCdXJnZXJcIixcclxuICAgIFwiQ3Jpc3B5IFZlZyBCdXJnZXJcIixcclxuICAgIFwiQ3Jpc3B5IEZyaWVkIENoaWNrZW5cIixcclxuICAgIFwiS2luZyBFZ2cgQnVyZ2VyXCIsXHJcbiAgICBcIk1leGljYW4gVmVnIENoZWVzZSBCdXJnZXJcIixcclxuICAgIFwiQzEwQyBNZXhpY2FuIENoaWNrZW4gQnVyZ2VyXCIsXHJcbiAgXSxcclxuICBbXHJcbiAgICBcIldhdGVyIE1lbG9uXCIsXHJcbiAgICBcIkFwcGxlXCIsXHJcbiAgICBcIlBpbmUgQXBwbGVcIixcclxuICAgIFwiUGFwYXlhXCIsXHJcbiAgICBcIk11c2sgTWVsb25cIixcclxuICAgIFwiQmFuYW5hXCIsXHJcbiAgICBcIkJsYWNrIEdyYXBlXCIsXHJcbiAgICBcIkdyZWVuIEdyYXBlXCIsXHJcbiAgICBcIkNoaWt1IChTYXBvdG8pXCIsXHJcbiAgICBcIlBvbW9ncmVuYXRlXCIsXHJcbiAgICBcIlN0cmF3IEJlcnJ5XCIsXHJcbiAgICBcIk51dCBDYXNlXCIsXHJcbiAgXSxcclxuICBbXHJcbiAgICBcIk1pbnQgTW9qaXRvXCIsXHJcbiAgICBcIkJsdWUgQ3VyYWNhb1wiLFxyXG4gICAgXCJHcmVlbiBBcHBsZSBDcnVzaFwiLFxyXG4gICAgXCJQYWFuIE1vaml0b1wiLFxyXG4gICAgXCJMeWNoZWUgTW9qaXRvXCIsXHJcbiAgICBcIldhdGVybWVsb25cIixcclxuICAgIFwiRW5lcmdpemVyXCIsXHJcbiAgICBcIkJsdWUgT2NlYW5cIixcclxuICAgIFwiTWFzYWxhIExlbW9uYWRlXCIsXHJcbiAgICBcIkljZSBUZWFcIixcclxuICAgIFwiQnViYmxlIEd1bSBNb2ppdG9cIixcclxuICAgIFwiQmxhY2sgQ3VycmFudFwiLFxyXG4gICAgXCJNYWx0IE1vaml0byhOb24tQWxjb2hvbGljKVwiLFxyXG4gICAgXCJSdW0gTW9qaXRvKE5vbi1BbGNvaG9saWMpXCIsXHJcbiAgXSxcclxuICBbXHJcbiAgICBcIkJ1dHRlciBTY290Y2hcIixcclxuICAgIFwiQmVsZ2l1bSBEYXJrIENob2NvbGF0ZVwiLFxyXG4gICAgXCJNYW5nbyBUaGljayBTaGFrZVwiLFxyXG4gICAgXCJPcmVvIFRoaWNrIFNoYWtlXCIsXHJcbiAgICBcIlN0cmFiZXJyeSBUaGljayBTaGFrZVwiLFxyXG4gICAgXCJLaXRrYXRcIixcclxuICAgIFwiUmVkIFZlbHZldCBUaGljayBTaGFrZVwiLFxyXG4gICAgXCJDaG9jbyBUaGljayBTaGFyZVwiLFxyXG4gICAgXCJOdXR0ZWxsYSBUaGljayBTaGFrZVwiLFxyXG4gIF0sXHJcbiAgW1wiQmxhY2sgQ29mZmVlXCIsIFwiQ2FwdWNpbm8gQ29mZmVlXCIsIFwiRXNwcmVzc29cIl0sXHJcbiAgW1xyXG4gICAgXCJDaGVlc2UgR2FybGljIEJyZWFkXCIsXHJcbiAgICBcIkdhcmxpYyBCcmVhZFwiLFxyXG4gICAgXCJDaGlja2VuIFBpenphXCIsXHJcbiAgICBcIkNvcm4gUGl6emFcIixcclxuICAgIFwiUGFubmVyIFBpenphXCIsXHJcbiAgICBcIlRhbmRvb3JpIENoaWNrZW4gUGl6emFcIixcclxuICAgIFwiQ2hlZXplIExvYWRlZCBQaXp6YVwiLFxyXG4gICAgXCJOb24gVmVnIExvYWRlZCBQaXp6YVwiLFxyXG4gICAgXCJWZWcgTG9hZGVkIFBpenphXCIsXHJcbiAgXSxcclxuICBbXCJDaGlja2VuIEFsZnJlZG9cIiwgXCJWZWcgQWxmcmVkb1wiXSxcclxuICBbXCJUYW5kb29yaSBOYWNob3NcIiwgXCJDaGVlc2UgTmFjaG9zXCIsIFwiTmFjaG9zXCJdLFxyXG4gIFtcIkNoaWNrZW4gVGFjb3NcIiwgXCJWZWcgQ2hlZXNlIFRhY29zXCJdLFxyXG5dO1xyXG5cclxuY29uc3QgcHJpY2VzID0gW1xyXG4gIFtcIjEzOS8tXCIsIFwiMTM5Ly1cIiwgXCIxMzkvLVwiLCBcIjEzOS8tXCIsIFwiMjk5Ly1cIiwgXCIzOTkvLVwiLCBcIjE5OS8tXCIsIFwiMjk5Ly1cIl0sXHJcbiAgW1xyXG4gICAgXCIxMjkvLVwiLFxyXG4gICAgXCIxMjkvLVwiLFxyXG4gICAgXCIxNjkvLVwiLFxyXG4gICAgXCIxOTkvLVwiLFxyXG4gICAgXCIxNzkvLVwiLFxyXG4gICAgXCI5OS8tXCIsXHJcbiAgICBcIjE5OS8tXCIsXHJcbiAgICBcIjE4OS8tXCIsXHJcbiAgICBcIjE5OS8tXCIsXHJcbiAgICBcIjE5OS8tXCIsXHJcbiAgICBcIjE5OS8tXCIsXHJcbiAgICBcIjEyOS8tXCIsXHJcbiAgICBcIjEyOS8tXCIsXHJcbiAgXSxcclxuICBbXHJcbiAgICBcIjE2OS8tXCIsXHJcbiAgICBcIjE2OS8tXCIsXHJcbiAgICBcIjE3OS8tXCIsXHJcbiAgICBcIjE3OS8tXCIsXHJcbiAgICBcIjE2OS8tXCIsXHJcbiAgICBcIjE3OS8tXCIsXHJcbiAgICBcIjE2OS8tXCIsXHJcbiAgICBcIjE3OS8tXCIsXHJcbiAgICBcIjE3OS8tXCIsXHJcbiAgICBcIjE5OS8tXCIsXHJcbiAgICBcIjE5OS8tXCIsXHJcbiAgICBcIjE5OS8tXCIsXHJcbiAgICBcIjE0OS8tXCIsXHJcbiAgICBcIjE5OS8tXCIsXHJcbiAgICBcIjIwOS8tXCIsXHJcbiAgICBcIjIxOS8tXCIsXHJcbiAgICBcIjE5OS8tXCIsXHJcbiAgICBcIjE5OS8tXCIsXHJcbiAgICBcIjE2OS8tXCIsXHJcbiAgXSxcclxuICBbXCIxNzkvLVwiLCBcIjE2OS8tXCIsIFwiMTc5Ly1cIiwgXCIxODkvLVwiLCBcIjE4OS8tXCIsIFwiMTk5Ly1cIiwgXCIxODkvLVwiLCBcIjE3OS8tXCJdLFxyXG4gIFtcclxuICAgIFwiMTM5Ly1cIixcclxuICAgIFwiMTQ5Ly1cIixcclxuICAgIFwiMTM5Ly1cIixcclxuICAgIFwiMTY5Ly1cIixcclxuICAgIFwiMTU5Ly1cIixcclxuICAgIFwiMTM5Ly1cIixcclxuICAgIFwiMTY5Ly1cIixcclxuICAgIFwiMTQ5Ly1cIixcclxuICAgIFwiMTQ5Ly1cIixcclxuICAgIFwiMTk5Ly1cIixcclxuICAgIFwiMTU5Ly1cIixcclxuICBdLFxyXG4gIFtcclxuICAgIFwiMTY5Ly1cIixcclxuICAgIFwiMTk5Ly1cIixcclxuICAgIFwiMTQ5Ly1cIixcclxuICAgIFwiMTM5Ly1cIixcclxuICAgIFwiMTQ5Ly1cIixcclxuICAgIFwiMTQ5Ly1cIixcclxuICAgIFwiMTg5Ly1cIixcclxuICAgIFwiMTk5Ly1cIixcclxuICAgIFwiMzQ5Ly1cIixcclxuICBdLFxyXG4gIFtcclxuICAgIFwiMTk5Ly1cIixcclxuICAgIFwiMjE5Ly1cIixcclxuICAgIFwiMTk5Ly1cIixcclxuICAgIFwiMTk5Ly1cIixcclxuICAgIFwiMjA5Ly1cIixcclxuICAgIFwiMTk5Ly1cIixcclxuICAgIFwiMTk5Ly1cIixcclxuICAgIFwiMTk5Ly1cIixcclxuICAgIFwiMjE5Ly1cIixcclxuICAgIFwiMjE5Ly1cIixcclxuICAgIFwiMjQ5Ly1cIixcclxuICAgIFwiMjQ5Ly1cIixcclxuICBdLFxyXG4gIFtcclxuICAgIFwiMTI5Ly1cIixcclxuICAgIFwiMTI5Ly1cIixcclxuICAgIFwiMTI5Ly1cIixcclxuICAgIFwiMTI5Ly1cIixcclxuICAgIFwiMTI5Ly1cIixcclxuICAgIFwiMTI5Ly1cIixcclxuICAgIFwiMTQ5Ly1cIixcclxuICAgIFwiMTQ5Ly1cIixcclxuICAgIFwiMTI5Ly1cIixcclxuICAgIFwiMTI5Ly1cIixcclxuICAgIFwiMTI5Ly1cIixcclxuICAgIFwiMTQ5Ly1cIixcclxuICAgIFwiMTQ5Ly1cIixcclxuICAgIFwiMTQ5Ly1cIixcclxuICBdLFxyXG4gIFtcclxuICAgIFwiMjk5Ly1cIixcclxuICAgIFwiMjk5Ly1cIixcclxuICAgIFwiMjk5Ly1cIixcclxuICAgIFwiMjk5Ly1cIixcclxuICAgIFwiMjk5Ly1cIixcclxuICAgIFwiMjk5Ly1cIixcclxuICAgIFwiMjk5Ly1cIixcclxuICAgIFwiMjQ5Ly1cIixcclxuICAgIFwiMjQ5Ly1cIixcclxuICBdLFxyXG4gIFtcIjk5Ly1cIiwgXCIxNDkvLVwiLCBcIjEyOS8tXCJdLFxyXG4gIFtcclxuICAgIFwiMTk5Ly1cIixcclxuICAgIFwiOTkvLVwiLFxyXG4gICAgXCIxOTkvLVwiLFxyXG4gICAgXCIyMzkvLVwiLFxyXG4gICAgXCIyMzkvLVwiLFxyXG4gICAgXCIyNjkvLVwiLFxyXG4gICAgXCIxOTkvLVwiLFxyXG4gICAgXCIyOTkvLVwiLFxyXG4gICAgXCIxODkvLVwiLFxyXG4gICAgXCI1NDkvLVwiLFxyXG4gIF0sXHJcbiAgW1wiMjk5Ly1cIiwgXCIyNjkvLVwiXSxcclxuICBbXCIyMTkvLVwiLCBcIjE5OS8tXCIsIFwiMjQ5IC8tXCJdLFxyXG4gIFtcIjE0OS8tXCIsIFwiMTM5Ly1cIl0sXHJcbl07XHJcblxyXG4vLyBGdW5jdGlvbnNcclxuY29uc3QgZWwgPSAoKCkgPT4ge1xyXG4gIGNvbnN0IGNyZWF0ZU1lbnUgPSAoKSA9PiB7XHJcbiAgICBsZXQgayA9IDU7XHJcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDE0OyBqKyspIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtc1tqXS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGRlc2VydHMgPSBtYWluLmNoaWxkTm9kZXNba107XHJcbiAgICAgICAgY29uc3QgZGlzaF9jb250ZW50ID0gZGVzZXJ0cy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKTtcclxuICAgICAgICBkaXNoX2NvbnRlbnQuY2xhc3NMaXN0LmFkZChcImRpc2hfY29udGVudFwiKTtcclxuICAgICAgICBkaXNoX2NvbnRlbnQuaW5uZXJIVE1MID0gYFxyXG4gICAgICA8c3BhbiBjbGFzcz1cImRpc2hcIj4ke2l0ZW1zW2pdW2ldfTwvc3Bhbj5cclxuICAgICAgPGltZyBzcmM9XCIuL2ltYWdlcy9wbHVzLnN2Z1wiIGFsdD1cImFkZCB0byBjYXJ0XCI+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwicHJpY2VcIj7igrkke3ByaWNlc1tqXVtpXX08L3NwYW4+YDtcclxuICAgICAgfVxyXG4gICAgICBrICs9IDI7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBkcm9wRG93biA9IChpKSA9PiB7XHJcbiAgICBzZWN0aW9uW2ldLmNsYXNzTGlzdC50b2dnbGUoXCJpbmFjdGl2ZVwiKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4geyBjcmVhdGVNZW51LCBkcm9wRG93biB9O1xyXG59KSgpO1xyXG5cclxuLy8gRXZlbnRzXHJcbmZvciAobGV0IGkgPSAwOyBpIDwgc2VjdGlvbl9uYW1lLmxlbmd0aDsgaSsrKSB7XHJcbiAgc2VjdGlvbl9uYW1lW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBlbC5kcm9wRG93bihpKTtcclxuICB9KTtcclxufVxyXG5lbC5jcmVhdGVNZW51KCk7XHJcblxyXG57XHJcbiAgLyogPGRpdiBjbGFzcz1cImRpc2hfY29udGVudFwiPlxyXG48c3BhbiBjbGFzcz1cImRpc2hcIj5OdXR0byBCcm93bmllPC9zcGFuPlxyXG48aW1nIHNyYz1cIi4vaW1hZ2VzL3BsdXMuc3ZnXCIgYWx0PVwiYWRkIHRvIGNhcnRcIj5cclxuPHNwYW4gY2xhc3M9XCJwcmljZVwiPjEwLy08L3NwYW4+XHJcbjwvZGl2PiAqL1xyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==