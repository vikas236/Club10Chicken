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
  scroll-behavior: smooth;
}

/* @font-face {
  font-family: "BunjeeShade-regular";
  src: url("./BungeeShade-Regular.ttf");
} */

body {
  margin: 0;
}

.table {
  width: 100vw;
  height: 91vh;
  position: fixed;
  inset: 75px 0px;
  background: #cb7836;
  z-index: 2;
  overflow: scroll;
}

.table.inactive {
  display: none;
}

.table h2 {
  font-size: 18px;
  width: 100vw;
  text-align: center;
  color: white;
}

.table button {
  width: 75px;
  height: 75px;
  margin-left: 9vw;
  margin-top: 3vh;
  font-size: 24px;
  color: #1A1F22;
}

.table .or {
  position: absolute;
  bottom: 30vh;
  left: 45%;
  color: white;
  font-size: 4vh;
}

.table button:last-of-type {
  margin-top: 5vh;
  width: 77vw;
  height: 75px;
  position: absolute;
  bottom: 15vh;
  left: 10px;
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

main.inactive {
  display: none;
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
  font-size: .8rem;
}

.section_name h2 {
  height: 30px;
  margin: 0;
  font-size: 1.3rem;
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
}`, "",{"version":3,"sources":["webpack://./src/css/body.css"],"names":[],"mappings":"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","sourcesContent":["* {\r\n  font-family: sans-serif;\r\n  box-sizing: border-box;\r\n  scroll-behavior: smooth;\r\n}\r\n\r\n/* @font-face {\r\n  font-family: \"BunjeeShade-regular\";\r\n  src: url(\"./BungeeShade-Regular.ttf\");\r\n} */\r\n\r\nbody {\r\n  margin: 0;\r\n}\r\n\r\n.table {\r\n  width: 100vw;\r\n  height: 91vh;\r\n  position: fixed;\r\n  inset: 75px 0px;\r\n  background: #cb7836;\r\n  z-index: 2;\r\n  overflow: scroll;\r\n}\r\n\r\n.table.inactive {\r\n  display: none;\r\n}\r\n\r\n.table h2 {\r\n  font-size: 18px;\r\n  width: 100vw;\r\n  text-align: center;\r\n  color: white;\r\n}\r\n\r\n.table button {\r\n  width: 75px;\r\n  height: 75px;\r\n  margin-left: 9vw;\r\n  margin-top: 3vh;\r\n  font-size: 24px;\r\n  color: #1A1F22;\r\n}\r\n\r\n.table .or {\r\n  position: absolute;\r\n  bottom: 30vh;\r\n  left: 45%;\r\n  color: white;\r\n  font-size: 4vh;\r\n}\r\n\r\n.table button:last-of-type {\r\n  margin-top: 5vh;\r\n  width: 77vw;\r\n  height: 75px;\r\n  position: absolute;\r\n  bottom: 15vh;\r\n  left: 10px;\r\n}\r\n\r\nmain {\r\n  height: 1000px;\r\n  margin: 0;\r\n  margin-top: 75px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  height: fit-content;\r\n  overflow: hidden;\r\n}\r\n\r\nmain.inactive {\r\n  display: none;\r\n}\r\n\r\n.section {\r\n  position: relative;\r\n  transition: 0.4s;\r\n}\r\n\r\n.section.inactive {\r\n  height: 60px;\r\n  overflow: hidden;\r\n}\r\n\r\n.fried_chicken {\r\n  width: 100vw;\r\n  height: 670px;\r\n  overflow: hidden;\r\n  background: #cb7836;\r\n  position: realtive;\r\n}\r\n\r\n.section_name {\r\n  cursor: pointer;\r\n}\r\n\r\n.brush_stroke {\r\n  display: flex;\r\n  align-items: center;\r\n  height: 50px;\r\n  overflow: hidden;\r\n}\r\n\r\n.brush_stroke img {\r\n  width: 150px;\r\n  height: 200px;\r\n  transform: rotate(90deg);\r\n}\r\n\r\n.brush_stroke img:nth-of-type(2) {\r\n  position: relative;\r\n  right: 50px;\r\n}\r\n\r\n.section_name>.subtext {\r\n  width: 100px;\r\n  position: absolute;\r\n  right: 0px;\r\n  top: 30px;\r\n  color: white;\r\n  font-size: .8rem;\r\n}\r\n\r\n.section_name h2 {\r\n  height: 30px;\r\n  margin: 0;\r\n  font-size: 1.3rem;\r\n  position: absolute;\r\n  inset: 0px;\r\n  z-index: 1;\r\n  color: white;\r\n  left: 20px;\r\n  top: 17px;\r\n}\r\n\r\n.fried_chicken .items {\r\n  position: absolute;\r\n  top: 65px;\r\n  left: 15px;\r\n  font-size: 16px;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.fried_chicken .item {\r\n  width: fit-content;\r\n  border: 2px solid #231f1e;\r\n  padding: 3px;\r\n  border-radius: 5px;\r\n  font-weight: bold;\r\n  font-size: 18px;\r\n}\r\n\r\n.fried_chicken .item:nth-of-type(2) {\r\n  margin-top: 120px;\r\n}\r\n\r\n.fried_chicken .content {\r\n  font-size: 16px;\r\n  font-weight: bold;\r\n  padding-top: 10px;\r\n}\r\n\r\n.section .dish_content {\r\n  width: 90vw;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  margin-top: 5px;\r\n  color: #231f1e;\r\n}\r\n\r\n.section .dish_content:first-of-type {\r\n  margin-top: 12px;\r\n}\r\n\r\n.section .dish {\r\n  padding: 3px;\r\n  margin-top: -5px;\r\n}\r\n\r\n.fried_chicken .towards {\r\n  letter-spacing: -1px;\r\n  position: absolute;\r\n  right: 35%;\r\n}\r\n\r\n.fried_chicken .add_dish {\r\n  position: absolute;\r\n  right: 17%;\r\n  cursor: pointer;\r\n}\r\n\r\n.fried_chicken .price,\r\n.chicken_combo .price {\r\n  background: white;\r\n  border-radius: 5px;\r\n  padding: 2px 5px;\r\n  border: 2px solid #231f1e;\r\n}\r\n\r\n.chicken_combo {\r\n  height: 605px;\r\n  position: relative;\r\n  background: #cb7836;\r\n}\r\n\r\nh2>span:first-of-type,\r\nh2>span:last-of-type {\r\n  width: 10px;\r\n  font-size: 14px;\r\n  position: relative;\r\n  top: -10px;\r\n}\r\n\r\nh2>span:last-of-type {\r\n  position: absolute;\r\n  top: 10px;\r\n  left: 105px;\r\n}\r\n\r\n.combos {\r\n  margin-top: 10px;\r\n  margin-left: 20px;\r\n}\r\n\r\n.combo {\r\n  position: relative;\r\n}\r\n\r\n.combo h2 {\r\n  font-size: 22px;\r\n  width: 60%;\r\n}\r\n\r\n.combo p {\r\n  margin-top: -15px;\r\n  font-size: 13px;\r\n  width: 60%;\r\n}\r\n\r\n.combo .price {\r\n  width: fit-content;\r\n  position: absolute;\r\n  right: 23px;\r\n  top: 5px;\r\n  font-weight: bold;\r\n}\r\n\r\n.combo img {\r\n  position: absolute;\r\n  right: 80px;\r\n  top: 5px;\r\n}\r\n\r\n.combo .offer {\r\n  position: absolute;\r\n  top: 35px;\r\n  right: 15px;\r\n  font-weight: bolder;\r\n  font-size: 18px;\r\n}\r\n\r\n.normal {\r\n  height: 315px;\r\n  background: #711c17;\r\n}\r\n\r\n.normal h2 {\r\n  color: #711c17;\r\n}\r\n\r\n.normal .dish_content {\r\n  width: 100vw;\r\n  position: relative;\r\n  top: 10px;\r\n}\r\n\r\n.normal .dish {\r\n  color: white;\r\n  margin-left: 20px;\r\n  font-size: 18px;\r\n  margin-top: 0px;\r\n}\r\n\r\n.normal .price {\r\n  color: white;\r\n  font-size: 18px;\r\n  position: absolute;\r\n  right: 25px;\r\n}\r\n\r\n.normal .dish_content img {\r\n  position: absolute;\r\n  right: 80px;\r\n  top: 1px;\r\n}\r\n\r\n.quick_bits {\r\n  height: 485px;\r\n}\r\n\r\n.quick_bits .brush_stroke img:nth-of-type(2) {\r\n  position: relative;\r\n  left: -115px;\r\n}\r\n\r\n.milk_shakes {\r\n  height: 675px;\r\n}\r\n\r\n.milk_shakes .brush_stroke>img:nth-of-type(2) {\r\n  position: relative;\r\n  left: -75px;\r\n}\r\n\r\n.large {\r\n  height: 360px;\r\n  background: #1A1F22;\r\n}\r\n\r\n.large.inactive {\r\n  height: 95px;\r\n}\r\n\r\n.large h2 {\r\n  color: #1A1F22;\r\n  width: 250px;\r\n}\r\n\r\n.large .brush_stroke {\r\n  overflow: visible;\r\n}\r\n\r\n.large .brush_stroke>img:nth-of-type(2) {\r\n  position: relative;\r\n  left: 15px;\r\n}\r\n\r\n.large .brush_stroke>img:nth-of-type(3) {\r\n  position: relative;\r\n  z-index: 1;\r\n  top: 30px;\r\n  left: -160px;\r\n}\r\n\r\n.large .brush_stroke>img:nth-of-type(4) {\r\n  position: relative;\r\n  top: 30px;\r\n  left: -150px;\r\n}\r\n\r\n.large .dish_content {\r\n  width: 100vw;\r\n  position: relative;\r\n}\r\n\r\n.large .dish_content:nth-of-type(2) {\r\n  margin-top: 45px;\r\n  color: black;\r\n}\r\n\r\n.large .dish {\r\n  color: white;\r\n  margin-left: 20px;\r\n  font-size: 18px;\r\n  margin-top: 0px;\r\n}\r\n\r\n.large .price {\r\n  color: white;\r\n  font-size: 18px;\r\n  position: absolute;\r\n  right: 25px;\r\n}\r\n\r\n.large .dish_content img {\r\n  position: absolute;\r\n  right: 80px;\r\n}\r\n\r\n.fried_cgsand {\r\n  height: 460px;\r\n}\r\n\r\n.fried_cgsand .brush_stroke>img:nth-of-type(4) {\r\n  left: -125px;\r\n}\r\n\r\n.fried_cgsand .subtext {\r\n  position: absolute;\r\n  top: 15px;\r\n}\r\n\r\n.fried_cgburger {\r\n  height: 355px;\r\n}\r\n\r\n.smoothies,\r\n.mocktails,\r\n.thick_shake {\r\n  background: #F09B1E;\r\n  height: 450px;\r\n}\r\n\r\n\r\n.smoothies img:last-of-type,\r\n.mocktails img:last-of-type,\r\n.thick_shake img:last-of-type {\r\n  position: relative;\r\n  right: 100px;\r\n}\r\n\r\n\r\n.smoothies .dish_content img,\r\n.mocktails .dish_content img,\r\n.thick_shake .dish_content img {\r\n  position: absolute;\r\n  right: 80px;\r\n}\r\n\r\n.smoothies h2,\r\n.mocktails h2,\r\n.thick_shake h2 {\r\n  color: #EC1A23;\r\n}\r\n\r\n.mocktails {\r\n  height: 515px;\r\n}\r\n\r\n.thick_shake {\r\n  height: 355px;\r\n}\r\n\r\n.coffee,\r\n.pizza,\r\n.pasta,\r\n.nachos,\r\n.tacos {\r\n  height: 160px;\r\n  background: #2E2222;\r\n}\r\n\r\n.coffee h2,\r\n.pizza h2,\r\n.pasta h2,\r\n.nachos h2,\r\n.tacos h2 {\r\n  color: #111214;\r\n}\r\n\r\n.coffee .brush_stroke img:last-of-type {\r\n  position: absolute;\r\n  left: 10px;\r\n}\r\n\r\n.pizza {\r\n  height: 355px;\r\n}\r\n\r\n.pizza .brush_stroke img:first-of-type {\r\n  position: absolute;\r\n  left: -20px;\r\n}\r\n\r\n.pasta {\r\n  height: 130px;\r\n}\r\n\r\n.nachos {\r\n  height: 160px;\r\n}\r\n\r\n.tacos {\r\n  height: 130px;\r\n}\r\n\r\nfooter {\r\n  width: 100vw;\r\n  height: fit-content;\r\n}"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, `.order {
    position: fixed;
    bottom: 0px;
    width: 100vw;
    height: 35vh;
    background: linear-gradient(transparent 0%, transparent 79%, #131719 79%, #131719 80%, white 80%);
    z-index: 2;
    border-radius: 25px 25px 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    transition: .3s;
    overflow: hidden;
    transform: translateY(350px);
}

.order.active {
    transform: translateY(0px);
}

.order .cart {
    width: 95vw;
    height: 26vh;
    background: #131719;
    border-radius: 10px;
    color: white;
    padding: 10px;
    overflow: scroll;
}

.order>button {
    width: 60vw;
    height: 40px;
    color: #131719;
    font-size: 18px;
    border-radius: 10px;
    font-weight: bold;
    border: none;
    position: relative;
    left: 35px;
    border: 3px solid #131719;
}

.cart .cart_item {
    display: flex;
    position: relative;
    height: 75px;
    border: 1px solid white;
    border-radius: 5px;
    padding: 0 5px;
    margin-bottom: 5px;
}

.cart span {
    font-size: 18px;
}

.cart .item {
    margin-top: 5px;
}

.cart button {
    width: 30px;
    height: 30px;
}

.cart .decrease {
    position: absolute;
    inset: 35px 105px;
}

.cart .increase {
    position: absolute;
    inset: 35px 180px;
}

.cart .quantity {
    width: 35px;
    height: 30px;
    background: white;
    border-radius: 5px;
    color: #131719;
    padding: 5px 7px;
    position: absolute;
    inset: 35px 140px;
}

.cart .item_price {
    position: absolute;
    right: 10px;
    top: 40px;
}

.order .total {
    font-size: 24px;
    background-color: #131719;
    position: absolute;
    left: 10px;
    bottom: 5px;
    color: white;
    padding: 5px;
    border-radius: 5px;
}

.footer {
    width: 100vw;
    height: 250px;
    background: #131719;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.footer ul {
    transform: translate(-15%, -15%);
    margin-top: 30px;
}

.footer li {
    list-style: none;
    margin-top: 25px;
    text-align: center;
}

.footer a {
    text-decoration: none;
    color: white;
    font-weight: bold;
    font-size: 28px;
}

.footer hr {
    width: 75vw;
    height: 2px;
    color: white;
}

.footer hr:first-of-type {
    position: relative;
    top: 25px;
}

.footer hr:last-of-type {
    position: relative;
    bottom: 25px;
}`, "",{"version":3,"sources":["webpack://./src/css/footer.css"],"names":[],"mappings":"AAAA;IACI,eAAe;IACf,WAAW;IACX,YAAY;IACZ,YAAY;IACZ,iGAAiG;IACjG,UAAU;IACV,4BAA4B;IAC5B,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,6BAA6B;IAC7B,eAAe;IACf,gBAAgB;IAChB,4BAA4B;AAChC;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,mBAAmB;IACnB,mBAAmB;IACnB,YAAY;IACZ,aAAa;IACb,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,cAAc;IACd,eAAe;IACf,mBAAmB;IACnB,iBAAiB;IACjB,YAAY;IACZ,kBAAkB;IAClB,UAAU;IACV,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,YAAY;IACZ,uBAAuB;IACvB,kBAAkB;IAClB,cAAc;IACd,kBAAkB;AACtB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,iBAAiB;IACjB,kBAAkB;IAClB,cAAc;IACd,gBAAgB;IAChB,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,SAAS;AACb;;AAEA;IACI,eAAe;IACf,yBAAyB;IACzB,kBAAkB;IAClB,UAAU;IACV,WAAW;IACX,YAAY;IACZ,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,gCAAgC;IAChC,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,qBAAqB;IACrB,YAAY;IACZ,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,SAAS;AACb;;AAEA;IACI,kBAAkB;IAClB,YAAY;AAChB","sourcesContent":[".order {\r\n    position: fixed;\r\n    bottom: 0px;\r\n    width: 100vw;\r\n    height: 35vh;\r\n    background: linear-gradient(transparent 0%, transparent 79%, #131719 79%, #131719 80%, white 80%);\r\n    z-index: 2;\r\n    border-radius: 25px 25px 0 0;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: space-around;\r\n    transition: .3s;\r\n    overflow: hidden;\r\n    transform: translateY(350px);\r\n}\r\n\r\n.order.active {\r\n    transform: translateY(0px);\r\n}\r\n\r\n.order .cart {\r\n    width: 95vw;\r\n    height: 26vh;\r\n    background: #131719;\r\n    border-radius: 10px;\r\n    color: white;\r\n    padding: 10px;\r\n    overflow: scroll;\r\n}\r\n\r\n.order>button {\r\n    width: 60vw;\r\n    height: 40px;\r\n    color: #131719;\r\n    font-size: 18px;\r\n    border-radius: 10px;\r\n    font-weight: bold;\r\n    border: none;\r\n    position: relative;\r\n    left: 35px;\r\n    border: 3px solid #131719;\r\n}\r\n\r\n.cart .cart_item {\r\n    display: flex;\r\n    position: relative;\r\n    height: 75px;\r\n    border: 1px solid white;\r\n    border-radius: 5px;\r\n    padding: 0 5px;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.cart span {\r\n    font-size: 18px;\r\n}\r\n\r\n.cart .item {\r\n    margin-top: 5px;\r\n}\r\n\r\n.cart button {\r\n    width: 30px;\r\n    height: 30px;\r\n}\r\n\r\n.cart .decrease {\r\n    position: absolute;\r\n    inset: 35px 105px;\r\n}\r\n\r\n.cart .increase {\r\n    position: absolute;\r\n    inset: 35px 180px;\r\n}\r\n\r\n.cart .quantity {\r\n    width: 35px;\r\n    height: 30px;\r\n    background: white;\r\n    border-radius: 5px;\r\n    color: #131719;\r\n    padding: 5px 7px;\r\n    position: absolute;\r\n    inset: 35px 140px;\r\n}\r\n\r\n.cart .item_price {\r\n    position: absolute;\r\n    right: 10px;\r\n    top: 40px;\r\n}\r\n\r\n.order .total {\r\n    font-size: 24px;\r\n    background-color: #131719;\r\n    position: absolute;\r\n    left: 10px;\r\n    bottom: 5px;\r\n    color: white;\r\n    padding: 5px;\r\n    border-radius: 5px;\r\n}\r\n\r\n.footer {\r\n    width: 100vw;\r\n    height: 250px;\r\n    background: #131719;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.footer ul {\r\n    transform: translate(-15%, -15%);\r\n    margin-top: 30px;\r\n}\r\n\r\n.footer li {\r\n    list-style: none;\r\n    margin-top: 25px;\r\n    text-align: center;\r\n}\r\n\r\n.footer a {\r\n    text-decoration: none;\r\n    color: white;\r\n    font-weight: bold;\r\n    font-size: 28px;\r\n}\r\n\r\n.footer hr {\r\n    width: 75vw;\r\n    height: 2px;\r\n    color: white;\r\n}\r\n\r\n.footer hr:first-of-type {\r\n    position: relative;\r\n    top: 25px;\r\n}\r\n\r\n.footer hr:last-of-type {\r\n    position: relative;\r\n    bottom: 25px;\r\n}"],"sourceRoot":""}]);
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
let plus = document.querySelectorAll(".add_dish");
const cart = document.querySelector(".cart");
let increase = document.querySelectorAll(".increase");
let decrease = document.querySelectorAll(".decrease");
let quantity = document.querySelectorAll(".quantity");
const order = document.querySelector(".place_order");
const table = document.querySelector(".table");
const tnum = document.querySelectorAll(".t_num");
let table_num = 1;

// dishes and drinks
const items = [
  [
    "Nutto Brownie",
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
  const select_table = (i) => {
    if (i == 6) {
      table_num = prompt("Please enter your name");
      if (table_num == "") {
        reset();
        return 0;
      }
      table_num = table_num.toString();
    } else {
      table_num = i + 1;
      table_num = parseInt(table_num);
    }
    main.classList.remove("inactive");
    table.classList.add("inactive");
  };

  const createMenu = () => {
    let k = 5;
    for (let j = 0; j < 14; j++) {
      for (let i = 0; i < items[j].length; i++) {
        const deserts = main.childNodes[k];
        const dish_content = deserts.appendChild(document.createElement("div"));
        dish_content.classList.add("dish_content");
        dish_content.innerHTML = `
      <span class="dish">${items[j][i]}</span>
      <img src="./images/plus.svg" class="add_dish" alt="add to cart">
      <span class="price">₹${prices[j][i]}</span>`;
      }
      k += 2;
      plus = document.querySelectorAll(".add_dish");
    }
  };

  const dropDown = (i) => {
    section[i].classList.toggle("inactive");
  };

  const add_to_cart = (i) => {
    let dish_name = plus[i].parentElement.childNodes[1].innerHTML;
    let price = plus[i].nextElementSibling.innerHTML;
    if (i < 11) {
      dish_name = `${plus[i].parentElement.parentElement.childNodes[1].innerHTML} ${dish_name}`;
      console.log(plus[i].parentElement.parentElement.childNodes[1].innerHTML, dish_name);
    }
    if (i >= 12 && i <= 16) {
      price = plus[i].nextElementSibling.nextElementSibling.innerHTML.replace(
        /[^0-9]/g,
        ""
      );
      price = `${price}/-`;
    }
    const dish_price = plus[i].nextElementSibling;
    if (!check_duplicate(dish_name)) {
      const dish = cart.appendChild(document.createElement("div"));
      dish.classList.add("cart_item");
      dish.innerHTML = `
    <span class="item">${dish_name}</span>
    <button class="increase">+</button>
    <input class="quantity" min="0">
    <button class="decrease">-</button>
    <span class="item_price">${price}</span>`;
      dish.childNodes[5].value = 1;
      cart_item_quantity();
      update_amount();
    }
  };

  const check_duplicate = (str) => {
    if (cart.childNodes.length > 0) {
      for (let i = 0; i < cart.childNodes.length; i++) {
        if (cart.childNodes[i].childNodes[1].innerHTML == str) {
          return true;
        }
      }
    }
  };

  const cart_item_quantity = () => {
    increase = document.querySelectorAll(".increase");
    decrease = document.querySelectorAll(".decrease");
    quantity = document.querySelectorAll(".quantity");
    for (let i = 0; i < increase.length; i++) {
      increase[i].addEventListener("click", () => {
        quantity[i].value = parseInt(quantity[i].value) + 1;
        update_amount();
      });
      decrease[i].addEventListener("click", () => {
        if (parseInt(quantity[i].value) <= 1) {
          cart.removeChild(quantity[i].parentElement);
        } else {
          quantity[i].value = parseInt(quantity[i].value) - 1;
        }
        update_amount();
      });
    }
  };

  const update_amount = () => {
    let total = 0;
    const price = document.querySelectorAll(".item_price");
    const quantity = document.querySelectorAll(".quantity");
    const final_amount = document.querySelector(".total");

    for (let i = 0; i < quantity.length; i++) {
      const data = parseInt(price[i].innerHTML.replace(/[^0-9]/g, ""));
      const num = parseInt(quantity[i].value);
      total += data * num;
    }

    check_cart();
    final_amount.innerHTML = `₹${total}/-`;
  };

  const check_cart = () => {
    if (cart.innerHTML.length < 35) {
      cart.parentElement.classList.remove("active");
    } else {
      cart.parentElement.classList.add("active");
    }
  };

  const place_order = () => {
    const final_amount = document.querySelector(".total");
    let order_data = `table no/name: ${table_num}\ntotal: ${final_amount.innerHTML}\n\n`;
    for (let i = 0; i < cart.childNodes.length; i++) {
      const name = cart.childNodes[i].childNodes[1].innerHTML;
      const quantity = cart.childNodes[i].childNodes[5].value;
      const price = cart.childNodes[i].childNodes[9].innerHTML;
      order_data += `${name}\t(${quantity}) ${price}\n`;
    }
    // sendMessage(order_data);
    alert(`order submitted for table/name: ${table_num}`);
    reset();
  };

  const sendMessage = (message) => {
    const botToken = "6207495871:AAHzcOy9XhS8T1GCodCgTKSPI5aR751UTBE";
    const chatId = "-1001957977299";
    const parseMode = "Markdown";

    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: parseMode,
      }),
    })
      .then((response) => {
        if (response.ok) {
        } else {
          console.error("Failed to send message");
        }
      })
      .catch((error) => {
        console.error("Error sending message:", error);
      });
  };

  const reset = () => {
    close_cart();
    main.classList.add("inactive");
    table.classList.remove("inactive");
  };

  const close_cart = () => {
    cart.innerHTML = "";
    check_cart();
    for (let i = 0; i < section.length; i++) {
      section[i].classList.add("inactive");
    }
  };

  return {
    select_table,
    createMenu,
    dropDown,
    add_to_cart,
    cart_item_quantity,
    place_order,
  };
})();

// Events
for (let i = 0; i < section_name.length; i++) {
  section_name[i].addEventListener("click", () => {
    el.dropDown(i);
  });
}
el.createMenu();
for (let i = 0; i < plus.length; i++) {
  plus[i].addEventListener("click", () => {
    el.add_to_cart(i);
  });
}

el.cart_item_quantity();
order.addEventListener("click", el.place_order);
for (let i = 0; i < tnum.length; i++) {
  tnum[i].addEventListener("click", () => {
    el.select_table(i);
  });
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxtRkFBbUYsWUFBWSxhQUFhLGFBQWEsT0FBTyxPQUFPLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sT0FBTyxZQUFZLFdBQVcsT0FBTyxPQUFPLFlBQVksV0FBVyxPQUFPLE9BQU8sWUFBWSxXQUFXLE1BQU0sT0FBTyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sU0FBUyxVQUFVLFlBQVksT0FBTyxTQUFTLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksNkJBQTZCLDhCQUE4Qiw2QkFBNkIsOEJBQThCLEtBQUss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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8scUZBQXFGLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFP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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QixzQkFBc0IscUJBQXFCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLFlBQVk7QUFDdkM7QUFDQSw2QkFBNkIsYUFBYTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZEQUE2RCxFQUFFLFVBQVU7QUFDOUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsTUFBTTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsVUFBVTtBQUNuQztBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsTUFBTTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDRCQUE0QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHFCQUFxQjtBQUN6QztBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IscUJBQXFCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxNQUFNO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLFVBQVUsV0FBVyx1QkFBdUI7QUFDbkYsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsS0FBSyxLQUFLLFNBQVMsSUFBSSxNQUFNO0FBQ3BEO0FBQ0E7QUFDQSw2Q0FBNkMsVUFBVTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLFNBQVM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG9CQUFvQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLGdCQUFnQix5QkFBeUI7QUFDekM7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsZ0JBQWdCLGlCQUFpQjtBQUNqQztBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGlCQUFpQjtBQUNqQztBQUNBO0FBQ0EsR0FBRztBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2x1YjEwY2hpY2tlbi8uL3NyYy9jc3MvYm9keS5jc3MiLCJ3ZWJwYWNrOi8vY2x1YjEwY2hpY2tlbi8uL3NyYy9jc3MvZm9vdGVyLmNzcyIsIndlYnBhY2s6Ly9jbHViMTBjaGlja2VuLy4vc3JjL2Nzcy9uYXZiYXIuY3NzIiwid2VicGFjazovL2NsdWIxMGNoaWNrZW4vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2NsdWIxMGNoaWNrZW4vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9jbHViMTBjaGlja2VuLy4vc3JjL2Nzcy9ib2R5LmNzcz8yNjU2Iiwid2VicGFjazovL2NsdWIxMGNoaWNrZW4vLi9zcmMvY3NzL2Zvb3Rlci5jc3M/YWI4YyIsIndlYnBhY2s6Ly9jbHViMTBjaGlja2VuLy4vc3JjL2Nzcy9uYXZiYXIuY3NzPzIyYTciLCJ3ZWJwYWNrOi8vY2x1YjEwY2hpY2tlbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9jbHViMTBjaGlja2VuLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9jbHViMTBjaGlja2VuLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2NsdWIxMGNoaWNrZW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vY2x1YjEwY2hpY2tlbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2NsdWIxMGNoaWNrZW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9jbHViMTBjaGlja2VuL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NsdWIxMGNoaWNrZW4vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vY2x1YjEwY2hpY2tlbi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY2x1YjEwY2hpY2tlbi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NsdWIxMGNoaWNrZW4vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jbHViMTBjaGlja2VuL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2NsdWIxMGNoaWNrZW4vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2NsdWIxMGNoaWNrZW4vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xyXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XHJcbn1cclxuXHJcbi8qIEBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkJ1bmplZVNoYWRlLXJlZ3VsYXJcIjtcclxuICBzcmM6IHVybChcIi4vQnVuZ2VlU2hhZGUtUmVndWxhci50dGZcIik7XHJcbn0gKi9cclxuXHJcbmJvZHkge1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLnRhYmxlIHtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiA5MXZoO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBpbnNldDogNzVweCAwcHg7XHJcbiAgYmFja2dyb3VuZDogI2NiNzgzNjtcclxuICB6LWluZGV4OiAyO1xyXG4gIG92ZXJmbG93OiBzY3JvbGw7XHJcbn1cclxuXHJcbi50YWJsZS5pbmFjdGl2ZSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnRhYmxlIGgyIHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi50YWJsZSBidXR0b24ge1xyXG4gIHdpZHRoOiA3NXB4O1xyXG4gIGhlaWdodDogNzVweDtcclxuICBtYXJnaW4tbGVmdDogOXZ3O1xyXG4gIG1hcmdpbi10b3A6IDN2aDtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgY29sb3I6ICMxQTFGMjI7XHJcbn1cclxuXHJcbi50YWJsZSAub3Ige1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDMwdmg7XHJcbiAgbGVmdDogNDUlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDR2aDtcclxufVxyXG5cclxuLnRhYmxlIGJ1dHRvbjpsYXN0LW9mLXR5cGUge1xyXG4gIG1hcmdpbi10b3A6IDV2aDtcclxuICB3aWR0aDogNzd2dztcclxuICBoZWlnaHQ6IDc1cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMTV2aDtcclxuICBsZWZ0OiAxMHB4O1xyXG59XHJcblxyXG5tYWluIHtcclxuICBoZWlnaHQ6IDEwMDBweDtcclxuICBtYXJnaW46IDA7XHJcbiAgbWFyZ2luLXRvcDogNzVweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxubWFpbi5pbmFjdGl2ZSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnNlY3Rpb24ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0cmFuc2l0aW9uOiAwLjRzO1xyXG59XHJcblxyXG4uc2VjdGlvbi5pbmFjdGl2ZSB7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5mcmllZF9jaGlja2VuIHtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiA2NzBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJhY2tncm91bmQ6ICNjYjc4MzY7XHJcbiAgcG9zaXRpb246IHJlYWx0aXZlO1xyXG59XHJcblxyXG4uc2VjdGlvbl9uYW1lIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5icnVzaF9zdHJva2Uge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmJydXNoX3N0cm9rZSBpbWcge1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxufVxyXG5cclxuLmJydXNoX3N0cm9rZSBpbWc6bnRoLW9mLXR5cGUoMikge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICByaWdodDogNTBweDtcclxufVxyXG5cclxuLnNlY3Rpb25fbmFtZT4uc3VidGV4dCB7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMHB4O1xyXG4gIHRvcDogMzBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAuOHJlbTtcclxufVxyXG5cclxuLnNlY3Rpb25fbmFtZSBoMiB7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LXNpemU6IDEuM3JlbTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaW5zZXQ6IDBweDtcclxuICB6LWluZGV4OiAxO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBsZWZ0OiAyMHB4O1xyXG4gIHRvcDogMTdweDtcclxufVxyXG5cclxuLmZyaWVkX2NoaWNrZW4gLml0ZW1zIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA2NXB4O1xyXG4gIGxlZnQ6IDE1cHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmZyaWVkX2NoaWNrZW4gLml0ZW0ge1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjMjMxZjFlO1xyXG4gIHBhZGRpbmc6IDNweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4uZnJpZWRfY2hpY2tlbiAuaXRlbTpudGgtb2YtdHlwZSgyKSB7XHJcbiAgbWFyZ2luLXRvcDogMTIwcHg7XHJcbn1cclxuXHJcbi5mcmllZF9jaGlja2VuIC5jb250ZW50IHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5zZWN0aW9uIC5kaXNoX2NvbnRlbnQge1xyXG4gIHdpZHRoOiA5MHZ3O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIGNvbG9yOiAjMjMxZjFlO1xyXG59XHJcblxyXG4uc2VjdGlvbiAuZGlzaF9jb250ZW50OmZpcnN0LW9mLXR5cGUge1xyXG4gIG1hcmdpbi10b3A6IDEycHg7XHJcbn1cclxuXHJcbi5zZWN0aW9uIC5kaXNoIHtcclxuICBwYWRkaW5nOiAzcHg7XHJcbiAgbWFyZ2luLXRvcDogLTVweDtcclxufVxyXG5cclxuLmZyaWVkX2NoaWNrZW4gLnRvd2FyZHMge1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMXB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMzUlO1xyXG59XHJcblxyXG4uZnJpZWRfY2hpY2tlbiAuYWRkX2Rpc2gge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMTclO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmZyaWVkX2NoaWNrZW4gLnByaWNlLFxyXG4uY2hpY2tlbl9jb21ibyAucHJpY2Uge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwYWRkaW5nOiAycHggNXB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICMyMzFmMWU7XHJcbn1cclxuXHJcbi5jaGlja2VuX2NvbWJvIHtcclxuICBoZWlnaHQ6IDYwNXB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kOiAjY2I3ODM2O1xyXG59XHJcblxyXG5oMj5zcGFuOmZpcnN0LW9mLXR5cGUsXHJcbmgyPnNwYW46bGFzdC1vZi10eXBlIHtcclxuICB3aWR0aDogMTBweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogLTEwcHg7XHJcbn1cclxuXHJcbmgyPnNwYW46bGFzdC1vZi10eXBlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxMHB4O1xyXG4gIGxlZnQ6IDEwNXB4O1xyXG59XHJcblxyXG4uY29tYm9zIHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcblxyXG4uY29tYm8ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmNvbWJvIGgyIHtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgd2lkdGg6IDYwJTtcclxufVxyXG5cclxuLmNvbWJvIHAge1xyXG4gIG1hcmdpbi10b3A6IC0xNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICB3aWR0aDogNjAlO1xyXG59XHJcblxyXG4uY29tYm8gLnByaWNlIHtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAyM3B4O1xyXG4gIHRvcDogNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uY29tYm8gaW1nIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDgwcHg7XHJcbiAgdG9wOiA1cHg7XHJcbn1cclxuXHJcbi5jb21ibyAub2ZmZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDM1cHg7XHJcbiAgcmlnaHQ6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi5ub3JtYWwge1xyXG4gIGhlaWdodDogMzE1cHg7XHJcbiAgYmFja2dyb3VuZDogIzcxMWMxNztcclxufVxyXG5cclxuLm5vcm1hbCBoMiB7XHJcbiAgY29sb3I6ICM3MTFjMTc7XHJcbn1cclxuXHJcbi5ub3JtYWwgLmRpc2hfY29udGVudCB7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5ub3JtYWwgLmRpc2gge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG59XHJcblxyXG4ubm9ybWFsIC5wcmljZSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDI1cHg7XHJcbn1cclxuXHJcbi5ub3JtYWwgLmRpc2hfY29udGVudCBpbWcge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogODBweDtcclxuICB0b3A6IDFweDtcclxufVxyXG5cclxuLnF1aWNrX2JpdHMge1xyXG4gIGhlaWdodDogNDg1cHg7XHJcbn1cclxuXHJcbi5xdWlja19iaXRzIC5icnVzaF9zdHJva2UgaW1nOm50aC1vZi10eXBlKDIpIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbGVmdDogLTExNXB4O1xyXG59XHJcblxyXG4ubWlsa19zaGFrZXMge1xyXG4gIGhlaWdodDogNjc1cHg7XHJcbn1cclxuXHJcbi5taWxrX3NoYWtlcyAuYnJ1c2hfc3Ryb2tlPmltZzpudGgtb2YtdHlwZSgyKSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGxlZnQ6IC03NXB4O1xyXG59XHJcblxyXG4ubGFyZ2Uge1xyXG4gIGhlaWdodDogMzYwcHg7XHJcbiAgYmFja2dyb3VuZDogIzFBMUYyMjtcclxufVxyXG5cclxuLmxhcmdlLmluYWN0aXZlIHtcclxuICBoZWlnaHQ6IDk1cHg7XHJcbn1cclxuXHJcbi5sYXJnZSBoMiB7XHJcbiAgY29sb3I6ICMxQTFGMjI7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG59XHJcblxyXG4ubGFyZ2UgLmJydXNoX3N0cm9rZSB7XHJcbiAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbn1cclxuXHJcbi5sYXJnZSAuYnJ1c2hfc3Ryb2tlPmltZzpudGgtb2YtdHlwZSgyKSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGxlZnQ6IDE1cHg7XHJcbn1cclxuXHJcbi5sYXJnZSAuYnJ1c2hfc3Ryb2tlPmltZzpudGgtb2YtdHlwZSgzKSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgdG9wOiAzMHB4O1xyXG4gIGxlZnQ6IC0xNjBweDtcclxufVxyXG5cclxuLmxhcmdlIC5icnVzaF9zdHJva2U+aW1nOm50aC1vZi10eXBlKDQpIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAzMHB4O1xyXG4gIGxlZnQ6IC0xNTBweDtcclxufVxyXG5cclxuLmxhcmdlIC5kaXNoX2NvbnRlbnQge1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5sYXJnZSAuZGlzaF9jb250ZW50Om50aC1vZi10eXBlKDIpIHtcclxuICBtYXJnaW4tdG9wOiA0NXB4O1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmxhcmdlIC5kaXNoIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxufVxyXG5cclxuLmxhcmdlIC5wcmljZSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDI1cHg7XHJcbn1cclxuXHJcbi5sYXJnZSAuZGlzaF9jb250ZW50IGltZyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiA4MHB4O1xyXG59XHJcblxyXG4uZnJpZWRfY2dzYW5kIHtcclxuICBoZWlnaHQ6IDQ2MHB4O1xyXG59XHJcblxyXG4uZnJpZWRfY2dzYW5kIC5icnVzaF9zdHJva2U+aW1nOm50aC1vZi10eXBlKDQpIHtcclxuICBsZWZ0OiAtMTI1cHg7XHJcbn1cclxuXHJcbi5mcmllZF9jZ3NhbmQgLnN1YnRleHQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDE1cHg7XHJcbn1cclxuXHJcbi5mcmllZF9jZ2J1cmdlciB7XHJcbiAgaGVpZ2h0OiAzNTVweDtcclxufVxyXG5cclxuLnNtb290aGllcyxcclxuLm1vY2t0YWlscyxcclxuLnRoaWNrX3NoYWtlIHtcclxuICBiYWNrZ3JvdW5kOiAjRjA5QjFFO1xyXG4gIGhlaWdodDogNDUwcHg7XHJcbn1cclxuXHJcblxyXG4uc21vb3RoaWVzIGltZzpsYXN0LW9mLXR5cGUsXHJcbi5tb2NrdGFpbHMgaW1nOmxhc3Qtb2YtdHlwZSxcclxuLnRoaWNrX3NoYWtlIGltZzpsYXN0LW9mLXR5cGUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICByaWdodDogMTAwcHg7XHJcbn1cclxuXHJcblxyXG4uc21vb3RoaWVzIC5kaXNoX2NvbnRlbnQgaW1nLFxyXG4ubW9ja3RhaWxzIC5kaXNoX2NvbnRlbnQgaW1nLFxyXG4udGhpY2tfc2hha2UgLmRpc2hfY29udGVudCBpbWcge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogODBweDtcclxufVxyXG5cclxuLnNtb290aGllcyBoMixcclxuLm1vY2t0YWlscyBoMixcclxuLnRoaWNrX3NoYWtlIGgyIHtcclxuICBjb2xvcjogI0VDMUEyMztcclxufVxyXG5cclxuLm1vY2t0YWlscyB7XHJcbiAgaGVpZ2h0OiA1MTVweDtcclxufVxyXG5cclxuLnRoaWNrX3NoYWtlIHtcclxuICBoZWlnaHQ6IDM1NXB4O1xyXG59XHJcblxyXG4uY29mZmVlLFxyXG4ucGl6emEsXHJcbi5wYXN0YSxcclxuLm5hY2hvcyxcclxuLnRhY29zIHtcclxuICBoZWlnaHQ6IDE2MHB4O1xyXG4gIGJhY2tncm91bmQ6ICMyRTIyMjI7XHJcbn1cclxuXHJcbi5jb2ZmZWUgaDIsXHJcbi5waXp6YSBoMixcclxuLnBhc3RhIGgyLFxyXG4ubmFjaG9zIGgyLFxyXG4udGFjb3MgaDIge1xyXG4gIGNvbG9yOiAjMTExMjE0O1xyXG59XHJcblxyXG4uY29mZmVlIC5icnVzaF9zdHJva2UgaW1nOmxhc3Qtb2YtdHlwZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5waXp6YSB7XHJcbiAgaGVpZ2h0OiAzNTVweDtcclxufVxyXG5cclxuLnBpenphIC5icnVzaF9zdHJva2UgaW1nOmZpcnN0LW9mLXR5cGUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAtMjBweDtcclxufVxyXG5cclxuLnBhc3RhIHtcclxuICBoZWlnaHQ6IDEzMHB4O1xyXG59XHJcblxyXG4ubmFjaG9zIHtcclxuICBoZWlnaHQ6IDE2MHB4O1xyXG59XHJcblxyXG4udGFjb3Mge1xyXG4gIGhlaWdodDogMTMwcHg7XHJcbn1cclxuXHJcbmZvb3RlciB7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvYm9keS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpc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QTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7OztFQUdFLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7OztBQUdBOzs7RUFHRSxrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOzs7QUFHQTs7O0VBR0Usa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTs7O0VBR0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTs7Ozs7RUFLRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBOzs7OztFQUtFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXHJcXG59XFxyXFxuXFxyXFxuLyogQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIkJ1bmplZVNoYWRlLXJlZ3VsYXJcXFwiO1xcclxcbiAgc3JjOiB1cmwoXFxcIi4vQnVuZ2VlU2hhZGUtUmVndWxhci50dGZcXFwiKTtcXHJcXG59ICovXFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi50YWJsZSB7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBoZWlnaHQ6IDkxdmg7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBpbnNldDogNzVweCAwcHg7XFxyXFxuICBiYWNrZ3JvdW5kOiAjY2I3ODM2O1xcclxcbiAgei1pbmRleDogMjtcXHJcXG4gIG92ZXJmbG93OiBzY3JvbGw7XFxyXFxufVxcclxcblxcclxcbi50YWJsZS5pbmFjdGl2ZSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4udGFibGUgaDIge1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4udGFibGUgYnV0dG9uIHtcXHJcXG4gIHdpZHRoOiA3NXB4O1xcclxcbiAgaGVpZ2h0OiA3NXB4O1xcclxcbiAgbWFyZ2luLWxlZnQ6IDl2dztcXHJcXG4gIG1hcmdpbi10b3A6IDN2aDtcXHJcXG4gIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gIGNvbG9yOiAjMUExRjIyO1xcclxcbn1cXHJcXG5cXHJcXG4udGFibGUgLm9yIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJvdHRvbTogMzB2aDtcXHJcXG4gIGxlZnQ6IDQ1JTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtc2l6ZTogNHZoO1xcclxcbn1cXHJcXG5cXHJcXG4udGFibGUgYnV0dG9uOmxhc3Qtb2YtdHlwZSB7XFxyXFxuICBtYXJnaW4tdG9wOiA1dmg7XFxyXFxuICB3aWR0aDogNzd2dztcXHJcXG4gIGhlaWdodDogNzVweDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJvdHRvbTogMTV2aDtcXHJcXG4gIGxlZnQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbm1haW4ge1xcclxcbiAgaGVpZ2h0OiAxMDAwcHg7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBtYXJnaW4tdG9wOiA3NXB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxubWFpbi5pbmFjdGl2ZSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvbiB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvbi5pbmFjdGl2ZSB7XFxyXFxuICBoZWlnaHQ6IDYwcHg7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4uZnJpZWRfY2hpY2tlbiB7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBoZWlnaHQ6IDY3MHB4O1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIGJhY2tncm91bmQ6ICNjYjc4MzY7XFxyXFxuICBwb3NpdGlvbjogcmVhbHRpdmU7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uX25hbWUge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYnJ1c2hfc3Ryb2tlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmJydXNoX3N0cm9rZSBpbWcge1xcclxcbiAgd2lkdGg6IDE1MHB4O1xcclxcbiAgaGVpZ2h0OiAyMDBweDtcXHJcXG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJydXNoX3N0cm9rZSBpbWc6bnRoLW9mLXR5cGUoMikge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgcmlnaHQ6IDUwcHg7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uX25hbWU+LnN1YnRleHQge1xcclxcbiAgd2lkdGg6IDEwMHB4O1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgcmlnaHQ6IDBweDtcXHJcXG4gIHRvcDogMzBweDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtc2l6ZTogLjhyZW07XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uX25hbWUgaDIge1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBpbnNldDogMHB4O1xcclxcbiAgei1pbmRleDogMTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGxlZnQ6IDIwcHg7XFxyXFxuICB0b3A6IDE3cHg7XFxyXFxufVxcclxcblxcclxcbi5mcmllZF9jaGlja2VuIC5pdGVtcyB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDY1cHg7XFxyXFxuICBsZWZ0OiAxNXB4O1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5mcmllZF9jaGlja2VuIC5pdGVtIHtcXHJcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMyMzFmMWU7XFxyXFxuICBwYWRkaW5nOiAzcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZyaWVkX2NoaWNrZW4gLml0ZW06bnRoLW9mLXR5cGUoMikge1xcclxcbiAgbWFyZ2luLXRvcDogMTIwcHg7XFxyXFxufVxcclxcblxcclxcbi5mcmllZF9jaGlja2VuIC5jb250ZW50IHtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uIC5kaXNoX2NvbnRlbnQge1xcclxcbiAgd2lkdGg6IDkwdnc7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIG1hcmdpbi10b3A6IDVweDtcXHJcXG4gIGNvbG9yOiAjMjMxZjFlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvbiAuZGlzaF9jb250ZW50OmZpcnN0LW9mLXR5cGUge1xcclxcbiAgbWFyZ2luLXRvcDogMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb24gLmRpc2gge1xcclxcbiAgcGFkZGluZzogM3B4O1xcclxcbiAgbWFyZ2luLXRvcDogLTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZyaWVkX2NoaWNrZW4gLnRvd2FyZHMge1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICByaWdodDogMzUlO1xcclxcbn1cXHJcXG5cXHJcXG4uZnJpZWRfY2hpY2tlbiAuYWRkX2Rpc2gge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgcmlnaHQ6IDE3JTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZyaWVkX2NoaWNrZW4gLnByaWNlLFxcclxcbi5jaGlja2VuX2NvbWJvIC5wcmljZSB7XFxyXFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIHBhZGRpbmc6IDJweCA1cHg7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCAjMjMxZjFlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hpY2tlbl9jb21ibyB7XFxyXFxuICBoZWlnaHQ6IDYwNXB4O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgYmFja2dyb3VuZDogI2NiNzgzNjtcXHJcXG59XFxyXFxuXFxyXFxuaDI+c3BhbjpmaXJzdC1vZi10eXBlLFxcclxcbmgyPnNwYW46bGFzdC1vZi10eXBlIHtcXHJcXG4gIHdpZHRoOiAxMHB4O1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgdG9wOiAtMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuaDI+c3BhbjpsYXN0LW9mLXR5cGUge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAxMHB4O1xcclxcbiAgbGVmdDogMTA1cHg7XFxyXFxufVxcclxcblxcclxcbi5jb21ib3Mge1xcclxcbiAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tYm8ge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tYm8gaDIge1xcclxcbiAgZm9udC1zaXplOiAyMnB4O1xcclxcbiAgd2lkdGg6IDYwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbWJvIHAge1xcclxcbiAgbWFyZ2luLXRvcDogLTE1cHg7XFxyXFxuICBmb250LXNpemU6IDEzcHg7XFxyXFxuICB3aWR0aDogNjAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tYm8gLnByaWNlIHtcXHJcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHJpZ2h0OiAyM3B4O1xcclxcbiAgdG9wOiA1cHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbWJvIGltZyB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICByaWdodDogODBweDtcXHJcXG4gIHRvcDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tYm8gLm9mZmVyIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMzVweDtcXHJcXG4gIHJpZ2h0OiAxNXB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5vcm1hbCB7XFxyXFxuICBoZWlnaHQ6IDMxNXB4O1xcclxcbiAgYmFja2dyb3VuZDogIzcxMWMxNztcXHJcXG59XFxyXFxuXFxyXFxuLm5vcm1hbCBoMiB7XFxyXFxuICBjb2xvcjogIzcxMWMxNztcXHJcXG59XFxyXFxuXFxyXFxuLm5vcm1hbCAuZGlzaF9jb250ZW50IHtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHRvcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5vcm1hbCAuZGlzaCB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBtYXJnaW4tbGVmdDogMjBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIG1hcmdpbi10b3A6IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5vcm1hbCAucHJpY2Uge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgcmlnaHQ6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbi5ub3JtYWwgLmRpc2hfY29udGVudCBpbWcge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgcmlnaHQ6IDgwcHg7XFxyXFxuICB0b3A6IDFweDtcXHJcXG59XFxyXFxuXFxyXFxuLnF1aWNrX2JpdHMge1xcclxcbiAgaGVpZ2h0OiA0ODVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnF1aWNrX2JpdHMgLmJydXNoX3N0cm9rZSBpbWc6bnRoLW9mLXR5cGUoMikge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgbGVmdDogLTExNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWlsa19zaGFrZXMge1xcclxcbiAgaGVpZ2h0OiA2NzVweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1pbGtfc2hha2VzIC5icnVzaF9zdHJva2U+aW1nOm50aC1vZi10eXBlKDIpIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGxlZnQ6IC03NXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubGFyZ2Uge1xcclxcbiAgaGVpZ2h0OiAzNjBweDtcXHJcXG4gIGJhY2tncm91bmQ6ICMxQTFGMjI7XFxyXFxufVxcclxcblxcclxcbi5sYXJnZS5pbmFjdGl2ZSB7XFxyXFxuICBoZWlnaHQ6IDk1cHg7XFxyXFxufVxcclxcblxcclxcbi5sYXJnZSBoMiB7XFxyXFxuICBjb2xvcjogIzFBMUYyMjtcXHJcXG4gIHdpZHRoOiAyNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxhcmdlIC5icnVzaF9zdHJva2Uge1xcclxcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxyXFxufVxcclxcblxcclxcbi5sYXJnZSAuYnJ1c2hfc3Ryb2tlPmltZzpudGgtb2YtdHlwZSgyKSB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBsZWZ0OiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubGFyZ2UgLmJydXNoX3N0cm9rZT5pbWc6bnRoLW9mLXR5cGUoMykge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG4gIHRvcDogMzBweDtcXHJcXG4gIGxlZnQ6IC0xNjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxhcmdlIC5icnVzaF9zdHJva2U+aW1nOm50aC1vZi10eXBlKDQpIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHRvcDogMzBweDtcXHJcXG4gIGxlZnQ6IC0xNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxhcmdlIC5kaXNoX2NvbnRlbnQge1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4ubGFyZ2UgLmRpc2hfY29udGVudDpudGgtb2YtdHlwZSgyKSB7XFxyXFxuICBtYXJnaW4tdG9wOiA0NXB4O1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4ubGFyZ2UgLmRpc2gge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBtYXJnaW4tdG9wOiAwcHg7XFxyXFxufVxcclxcblxcclxcbi5sYXJnZSAucHJpY2Uge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgcmlnaHQ6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbi5sYXJnZSAuZGlzaF9jb250ZW50IGltZyB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICByaWdodDogODBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZyaWVkX2Nnc2FuZCB7XFxyXFxuICBoZWlnaHQ6IDQ2MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZnJpZWRfY2dzYW5kIC5icnVzaF9zdHJva2U+aW1nOm50aC1vZi10eXBlKDQpIHtcXHJcXG4gIGxlZnQ6IC0xMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZyaWVkX2Nnc2FuZCAuc3VidGV4dCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5mcmllZF9jZ2J1cmdlciB7XFxyXFxuICBoZWlnaHQ6IDM1NXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc21vb3RoaWVzLFxcclxcbi5tb2NrdGFpbHMsXFxyXFxuLnRoaWNrX3NoYWtlIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNGMDlCMUU7XFxyXFxuICBoZWlnaHQ6IDQ1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uc21vb3RoaWVzIGltZzpsYXN0LW9mLXR5cGUsXFxyXFxuLm1vY2t0YWlscyBpbWc6bGFzdC1vZi10eXBlLFxcclxcbi50aGlja19zaGFrZSBpbWc6bGFzdC1vZi10eXBlIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHJpZ2h0OiAxMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnNtb290aGllcyAuZGlzaF9jb250ZW50IGltZyxcXHJcXG4ubW9ja3RhaWxzIC5kaXNoX2NvbnRlbnQgaW1nLFxcclxcbi50aGlja19zaGFrZSAuZGlzaF9jb250ZW50IGltZyB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICByaWdodDogODBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNtb290aGllcyBoMixcXHJcXG4ubW9ja3RhaWxzIGgyLFxcclxcbi50aGlja19zaGFrZSBoMiB7XFxyXFxuICBjb2xvcjogI0VDMUEyMztcXHJcXG59XFxyXFxuXFxyXFxuLm1vY2t0YWlscyB7XFxyXFxuICBoZWlnaHQ6IDUxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGhpY2tfc2hha2Uge1xcclxcbiAgaGVpZ2h0OiAzNTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvZmZlZSxcXHJcXG4ucGl6emEsXFxyXFxuLnBhc3RhLFxcclxcbi5uYWNob3MsXFxyXFxuLnRhY29zIHtcXHJcXG4gIGhlaWdodDogMTYwcHg7XFxyXFxuICBiYWNrZ3JvdW5kOiAjMkUyMjIyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29mZmVlIGgyLFxcclxcbi5waXp6YSBoMixcXHJcXG4ucGFzdGEgaDIsXFxyXFxuLm5hY2hvcyBoMixcXHJcXG4udGFjb3MgaDIge1xcclxcbiAgY29sb3I6ICMxMTEyMTQ7XFxyXFxufVxcclxcblxcclxcbi5jb2ZmZWUgLmJydXNoX3N0cm9rZSBpbWc6bGFzdC1vZi10eXBlIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGxlZnQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5waXp6YSB7XFxyXFxuICBoZWlnaHQ6IDM1NXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucGl6emEgLmJydXNoX3N0cm9rZSBpbWc6Zmlyc3Qtb2YtdHlwZSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBsZWZ0OiAtMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBhc3RhIHtcXHJcXG4gIGhlaWdodDogMTMwcHg7XFxyXFxufVxcclxcblxcclxcbi5uYWNob3Mge1xcclxcbiAgaGVpZ2h0OiAxNjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhY29zIHtcXHJcXG4gIGhlaWdodDogMTMwcHg7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5vcmRlciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDBweDtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogMzV2aDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCAwJSwgdHJhbnNwYXJlbnQgNzklLCAjMTMxNzE5IDc5JSwgIzEzMTcxOSA4MCUsIHdoaXRlIDgwJSk7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweCAyNXB4IDAgMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgdHJhbnNpdGlvbjogLjNzO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzNTBweCk7XHJcbn1cclxuXHJcbi5vcmRlci5hY3RpdmUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XHJcbn1cclxuXHJcbi5vcmRlciAuY2FydCB7XHJcbiAgICB3aWR0aDogOTV2dztcclxuICAgIGhlaWdodDogMjZ2aDtcclxuICAgIGJhY2tncm91bmQ6ICMxMzE3MTk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcbn1cclxuXHJcbi5vcmRlcj5idXR0b24ge1xyXG4gICAgd2lkdGg6IDYwdnc7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBjb2xvcjogIzEzMTcxOTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDM1cHg7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjMTMxNzE5O1xyXG59XHJcblxyXG4uY2FydCAuY2FydF9pdGVtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDc1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDAgNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4uY2FydCBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLmNhcnQgLml0ZW0ge1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcblxyXG4uY2FydCBidXR0b24ge1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbi5jYXJ0IC5kZWNyZWFzZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBpbnNldDogMzVweCAxMDVweDtcclxufVxyXG5cclxuLmNhcnQgLmluY3JlYXNlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGluc2V0OiAzNXB4IDE4MHB4O1xyXG59XHJcblxyXG4uY2FydCAucXVhbnRpdHkge1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGNvbG9yOiAjMTMxNzE5O1xyXG4gICAgcGFkZGluZzogNXB4IDdweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGluc2V0OiAzNXB4IDE0MHB4O1xyXG59XHJcblxyXG4uY2FydCAuaXRlbV9wcmljZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTBweDtcclxuICAgIHRvcDogNDBweDtcclxufVxyXG5cclxuLm9yZGVyIC50b3RhbCB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxNzE5O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMTBweDtcclxuICAgIGJvdHRvbTogNXB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4uZm9vdGVyIHtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTMxNzE5O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mb290ZXIgdWwge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTE1JSwgLTE1JSk7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcblxyXG4uZm9vdGVyIGxpIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZm9vdGVyIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbn1cclxuXHJcbi5mb290ZXIgaHIge1xyXG4gICAgd2lkdGg6IDc1dnc7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmZvb3RlciBocjpmaXJzdC1vZi10eXBlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMjVweDtcclxufVxyXG5cclxuLmZvb3RlciBocjpsYXN0LW9mLXR5cGUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm90dG9tOiAyNXB4O1xyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2Zvb3Rlci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0lBQ1osaUdBQWlHO0lBQ2pHLFVBQVU7SUFDViw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixjQUFjO0lBQ2QsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsU0FBUztBQUNiOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm9yZGVyIHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBib3R0b206IDBweDtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICBoZWlnaHQ6IDM1dmg7XFxyXFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCAwJSwgdHJhbnNwYXJlbnQgNzklLCAjMTMxNzE5IDc5JSwgIzEzMTcxOSA4MCUsIHdoaXRlIDgwJSk7XFxyXFxuICAgIHotaW5kZXg6IDI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHggMjVweCAwIDA7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICB0cmFuc2l0aW9uOiAuM3M7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzNTBweCk7XFxyXFxufVxcclxcblxcclxcbi5vcmRlci5hY3RpdmUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLm9yZGVyIC5jYXJ0IHtcXHJcXG4gICAgd2lkdGg6IDk1dnc7XFxyXFxuICAgIGhlaWdodDogMjZ2aDtcXHJcXG4gICAgYmFja2dyb3VuZDogIzEzMTcxOTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcclxcbn1cXHJcXG5cXHJcXG4ub3JkZXI+YnV0dG9uIHtcXHJcXG4gICAgd2lkdGg6IDYwdnc7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgY29sb3I6ICMxMzE3MTk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBsZWZ0OiAzNXB4O1xcclxcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjMTMxNzE5O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FydCAuY2FydF9pdGVtIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBoZWlnaHQ6IDc1cHg7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIHBhZGRpbmc6IDAgNXB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5jYXJ0IHNwYW4ge1xcclxcbiAgICBmb250LXNpemU6IDE4cHg7XFxyXFxufVxcclxcblxcclxcbi5jYXJ0IC5pdGVtIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FydCBidXR0b24ge1xcclxcbiAgICB3aWR0aDogMzBweDtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FydCAuZGVjcmVhc2Uge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGluc2V0OiAzNXB4IDEwNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FydCAuaW5jcmVhc2Uge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGluc2V0OiAzNXB4IDE4MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FydCAucXVhbnRpdHkge1xcclxcbiAgICB3aWR0aDogMzVweDtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBjb2xvcjogIzEzMTcxOTtcXHJcXG4gICAgcGFkZGluZzogNXB4IDdweDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBpbnNldDogMzVweCAxNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcnQgLml0ZW1fcHJpY2Uge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHJpZ2h0OiAxMHB4O1xcclxcbiAgICB0b3A6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi5vcmRlciAudG90YWwge1xcclxcbiAgICBmb250LXNpemU6IDI0cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMzE3MTk7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgbGVmdDogMTBweDtcXHJcXG4gICAgYm90dG9tOiA1cHg7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIge1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIGhlaWdodDogMjUwcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6ICMxMzE3MTk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyIHVsIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTE1JSwgLTE1JSk7XFxyXFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIgbGkge1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIgYSB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyIGhyIHtcXHJcXG4gICAgd2lkdGg6IDc1dnc7XFxyXFxuICAgIGhlaWdodDogMnB4O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIgaHI6Zmlyc3Qtb2YtdHlwZSB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgdG9wOiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyIGhyOmxhc3Qtb2YtdHlwZSB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgYm90dG9tOiAyNXB4O1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIE5hdmJhciAqL1xyXG5uYXYge1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiA3NXB4O1xyXG4gICAgYmFja2dyb3VuZDogI2UwYjExZDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGluc2V0OiAwcHg7XHJcbiAgICAvKiBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTsgKi9cclxuICAgIC8qIGZpbHRlcjogYmx1cihweCk7ICovXHJcbiAgICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG5uYXYgaW1nIHtcclxuICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggM3B4ICNFNUIyMjE7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxufVxyXG5cclxubmF2IGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGluc2V0OiAtMjBweCAxMTVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcclxufVxyXG5cclxubmF2IC50ZW4ge1xyXG4gICAgZm9udC1zaXplOiA0MnB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaW5zZXQ6IC0xcHggMjEwcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL25hdmJhci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsV0FBVztBQUNYO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLFVBQVU7SUFDVixnQ0FBZ0M7SUFDaEMsc0JBQXNCO0lBQ3RCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUNBQW1DO0lBQ25DLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIE5hdmJhciAqL1xcclxcbm5hdiB7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgaGVpZ2h0OiA3NXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZTBiMTFkO1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIGluc2V0OiAwcHg7XFxyXFxuICAgIC8qIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpOyAqL1xcclxcbiAgICAvKiBmaWx0ZXI6IGJsdXIocHgpOyAqL1xcclxcbiAgICB6LWluZGV4OiAyO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgaW1nIHtcXHJcXG4gICAgd2lkdGg6IDcwcHg7XFxyXFxuICAgIGhlaWdodDogNzBweDtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggM3B4ICNFNUIyMjE7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbm5hdiBoMSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXHJcXG4gICAgd2lkdGg6IDE1MHB4O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgaW5zZXQ6IC0yMHB4IDExNXB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogMzVweDtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcXHJcXG59XFxyXFxuXFxyXFxubmF2IC50ZW4ge1xcclxcbiAgICBmb250LXNpemU6IDQycHg7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBpbnNldDogLTFweCAyMTBweDtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYm9keS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2JvZHkuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Zvb3Rlci5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Zvb3Rlci5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbmF2YmFyLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbmF2YmFyLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLy8gSW1wb3J0IGNzcyBmaWxlc1xyXG5pbXBvcnQgXCIuL2Nzcy9ib2R5LmNzc1wiO1xyXG5pbXBvcnQgXCIuL2Nzcy9uYXZiYXIuY3NzXCI7XHJcbmltcG9ydCBcIi4vY3NzL2Zvb3Rlci5jc3NcIjtcclxuXHJcbi8vIEltcG9ydCBpbWFnZXNcclxuaW1wb3J0IFwiLi9pbWFnZXMvZ3JleWlzaF9zdHJva2Uuc3ZnXCI7XHJcbmltcG9ydCBcIi4vaW1hZ2VzL2JsYWNrX3N0cm9rZS5zdmdcIjtcclxuaW1wb3J0IFwiLi9pbWFnZXMvd2hpdGVfc3Ryb2tlLnN2Z1wiO1xyXG5pbXBvcnQgXCIuL2ltYWdlcy9wbHVzLnN2Z1wiO1xyXG5pbXBvcnQgXCIuL2ltYWdlcy9sb2dvLnBuZ1wiO1xyXG5pbXBvcnQgXCIuL2ltYWdlcy9kZXNjcmlwdGlvbi5wbmdcIjtcclxuXHJcbi8vIENhbGxpbmcgaHRtbCBlbGVtZW50c1xyXG5jb25zdCBzZWN0aW9uX25hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNlY3Rpb25fbmFtZVwiKTtcclxuY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2VjdGlvblwiKTtcclxuY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xyXG5sZXQgcGx1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYWRkX2Rpc2hcIik7XHJcbmNvbnN0IGNhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcnRcIik7XHJcbmxldCBpbmNyZWFzZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaW5jcmVhc2VcIik7XHJcbmxldCBkZWNyZWFzZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGVjcmVhc2VcIik7XHJcbmxldCBxdWFudGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucXVhbnRpdHlcIik7XHJcbmNvbnN0IG9yZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGFjZV9vcmRlclwiKTtcclxuY29uc3QgdGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhYmxlXCIpO1xyXG5jb25zdCB0bnVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50X251bVwiKTtcclxubGV0IHRhYmxlX251bSA9IDE7XHJcblxyXG4vLyBkaXNoZXMgYW5kIGRyaW5rc1xyXG5jb25zdCBpdGVtcyA9IFtcclxuICBbXHJcbiAgICBcIk51dHRvIEJyb3duaWVcIixcclxuICAgIFwiQ2hlZXNlIENha2VcIixcclxuICAgIFwiQnV0dGVyIFNjb3RjaFwiLFxyXG4gICAgXCJDaG9jbyBUcmFiYWxcIixcclxuICAgIFwiUHV0dHUgSWNlIENyZWFtXCIsXHJcbiAgICBcIlNoYXdhcm1hIEljZSBDcmVhbVwiLFxyXG4gICAgXCJTbHp6bGluZyBCcm93bmllXCIsXHJcbiAgICBcIkhhenpsZSBOdXQgQnJvd25pXCIsXHJcbiAgXSxcclxuICBbXHJcbiAgICBcIlNhbHRlZCBGcmVuY2ggRnJpZXNcIixcclxuICAgIFwiTWFzYWxhIEZyZW5jaCBGcmllc1wiLFxyXG4gICAgXCJUYW5kb29yaSBGcmVuY2ggRnJpZXNcIixcclxuICAgIFwiQ2hlZXN5IEZyZW5jaCBGcmllc1wiLFxyXG4gICAgXCJWZWcgTnVnZ2V0c1wiLFxyXG4gICAgXCJTd2VldCBDb3JuXCIsXHJcbiAgICBcIkNoaWNrZW4gQ2hlZXNlIFNob3RzXCIsXHJcbiAgICBcIkNoaWNrZW4gRmluZ2VycyAoOFBjcylcIixcclxuICAgIFwiQ2hpY2tlbiBOdWdnZXRzICg4UGNzKVwiLFxyXG4gICAgXCJWZWcgQ2hlZXplIFNob3RzXCIsXHJcbiAgICBcIlZlZyBGaW5nZXJzXCIsXHJcbiAgICBcIlBvdGF0byBXZWRnZXNcIixcclxuICAgIFwiU2FsdGVkIGZyYW5jaCBmaXJlc1wiLFxyXG4gIF0sXHJcbiAgW1xyXG4gICAgXCJOdXR0byBDb2ZmZWUgTG9hZGVkXCIsXHJcbiAgICBcIlN0cmF3YmVycnkgTW9uc3RlclwiLFxyXG4gICAgXCJNYW5nbyBCdXJzdFwiLFxyXG4gICAgXCJCdWJibGVndW0gQmxhc3RcIixcclxuICAgIFwiTWl4YmVycnkgQ2hlZXNlIEJsYXN0XCIsXHJcbiAgICBcIk1hbmdvIENoZWVzZSBCbGFzdFwiLFxyXG4gICAgXCJCdXR0ZXIgU2NvdGNoXCIsXHJcbiAgICBcIkNob2NvbGF0ZSBPcmVhXCIsXHJcbiAgICBcIkNoZWVzZSBDYWtlIEZydWl0XCIsXHJcbiAgICBcIkNvbGQgQ29mZmVlXCIsXHJcbiAgICBcIkhhemVsbnV0IEJyb3duaWUgU2hha2VcIixcclxuICAgIFwiTnV0dGVsbGEgQnJvd25pZVwiLFxyXG4gICAgXCJIb3QgQ2hvY29sYXRlXCIsXHJcbiAgICBcIkJsdWUgQmVycnlcIixcclxuICAgIFwiQ2hvY29sYXRlIENvbGQgQ29mZmVlXCIsXHJcbiAgICBcIkNhcmFtZWwgQ29sZCBDb2ZmZWVcIixcclxuICAgIFwiSGF6ZWxudXQgU2hha2VcIixcclxuICAgIFwiRHJ5IEZydWl0IFNoYWtlXCIsXHJcbiAgICBcIkNob2NvIEFsbW9uZFwiLFxyXG4gIF0sXHJcbiAgW1xyXG4gICAgXCJOb24gVmVnIENoZWVzZSBMb2FkZWRcIixcclxuICAgIFwiVmVnIENoZWVzZSBMb2FkZWRcIixcclxuICAgIFwiVGFuZG9vcmkgTWF5byBWZWdcIixcclxuICAgIFwiUGFuZWVyIE1heW9cIixcclxuICAgIFwiVGFuZG9vcmkgTWF5byBQYW5lZXJcIixcclxuICAgIFwiQ3Jpc3B5IENoaWNrZW5cIixcclxuICAgIFwiVGFuZG9vcmkgTWF5byBDaGlja2VuXCIsXHJcbiAgICBcIlZlZyBDaGVlc2UgTG9hZGVkXCIsXHJcbiAgXSxcclxuICBbXHJcbiAgICBcIlZlZyBDaGVlc2UgU2FuZHdpY2hcIixcclxuICAgIFwiRnJpZWQgQ2hpY2tlbiBTYW5kd2ljaFwiLFxyXG4gICAgXCJQYW5lZXIgQ2hlZXNlIFNhbmR3aWNoXCIsXHJcbiAgICBcIlNjaGV6d2FuIENoaWNrZW4gU2FuZHdpY2hcIixcclxuICAgIFwiVGFuZG9vcmkgTWF5byBDaGlja2VuXCIsXHJcbiAgICBcIkNob2NvbGF0ZSBTYW5kd2ljaFwiLFxyXG4gICAgXCJWZWcgVGFuZG9vcmkgTWF5byBTYW5kd2ljaFwiLFxyXG4gICAgXCJFZ2cgQ2hlZXNlIFNhbmR3aWNoXCIsXHJcbiAgICBcIk1leGljYW4gVmVnIENoZWVzZSBTYW5kd2ljaFwiLFxyXG4gICAgXCJNZXhpY2FuIENoaWNrZW4gQ2hlZXNlICpTYW5kXCIsXHJcbiAgICBcIlRvbWF0byBDaGlsbGkgQ2hlZXNlIFNhbmR3aWNoXCIsXHJcbiAgXSxcclxuICBbXHJcbiAgICBcIkZpcmVkIENoaWNrZW4gQnVyZ2VyXCIsXHJcbiAgICBcIkNsdWIgMTAgQ2hlZXN5IFRvd2VyIEJ1cmdlclwiLFxyXG4gICAgXCJDcmlzcHkgQ2hpY2tlbiBCdXJnZXJcIixcclxuICAgIFwiQ3Jpc3B5IFZlZyBCdXJnZXJcIixcclxuICAgIFwiQ3Jpc3B5IEZyaWVkIENoaWNrZW5cIixcclxuICAgIFwiS2luZyBFZ2cgQnVyZ2VyXCIsXHJcbiAgICBcIk1leGljYW4gVmVnIENoZWVzZSBCdXJnZXJcIixcclxuICAgIFwiQzEwQyBNZXhpY2FuIENoaWNrZW4gQnVyZ2VyXCIsXHJcbiAgXSxcclxuICBbXHJcbiAgICBcIldhdGVyIE1lbG9uXCIsXHJcbiAgICBcIkFwcGxlXCIsXHJcbiAgICBcIlBpbmUgQXBwbGVcIixcclxuICAgIFwiUGFwYXlhXCIsXHJcbiAgICBcIk11c2sgTWVsb25cIixcclxuICAgIFwiQmFuYW5hXCIsXHJcbiAgICBcIkJsYWNrIEdyYXBlXCIsXHJcbiAgICBcIkdyZWVuIEdyYXBlXCIsXHJcbiAgICBcIkNoaWt1IChTYXBvdG8pXCIsXHJcbiAgICBcIlBvbW9ncmVuYXRlXCIsXHJcbiAgICBcIlN0cmF3IEJlcnJ5XCIsXHJcbiAgICBcIk51dCBDYXNlXCIsXHJcbiAgXSxcclxuICBbXHJcbiAgICBcIk1pbnQgTW9qaXRvXCIsXHJcbiAgICBcIkJsdWUgQ3VyYWNhb1wiLFxyXG4gICAgXCJHcmVlbiBBcHBsZSBDcnVzaFwiLFxyXG4gICAgXCJQYWFuIE1vaml0b1wiLFxyXG4gICAgXCJMeWNoZWUgTW9qaXRvXCIsXHJcbiAgICBcIldhdGVybWVsb25cIixcclxuICAgIFwiRW5lcmdpemVyXCIsXHJcbiAgICBcIkJsdWUgT2NlYW5cIixcclxuICAgIFwiTWFzYWxhIExlbW9uYWRlXCIsXHJcbiAgICBcIkljZSBUZWFcIixcclxuICAgIFwiQnViYmxlIEd1bSBNb2ppdG9cIixcclxuICAgIFwiQmxhY2sgQ3VycmFudFwiLFxyXG4gICAgXCJNYWx0IE1vaml0byhOb24tQWxjb2hvbGljKVwiLFxyXG4gICAgXCJSdW0gTW9qaXRvKE5vbi1BbGNvaG9saWMpXCIsXHJcbiAgXSxcclxuICBbXHJcbiAgICBcIkJ1dHRlciBTY290Y2hcIixcclxuICAgIFwiQmVsZ2l1bSBEYXJrIENob2NvbGF0ZVwiLFxyXG4gICAgXCJNYW5nbyBUaGljayBTaGFrZVwiLFxyXG4gICAgXCJPcmVvIFRoaWNrIFNoYWtlXCIsXHJcbiAgICBcIlN0cmFiZXJyeSBUaGljayBTaGFrZVwiLFxyXG4gICAgXCJLaXRrYXRcIixcclxuICAgIFwiUmVkIFZlbHZldCBUaGljayBTaGFrZVwiLFxyXG4gICAgXCJDaG9jbyBUaGljayBTaGFyZVwiLFxyXG4gICAgXCJOdXR0ZWxsYSBUaGljayBTaGFrZVwiLFxyXG4gIF0sXHJcbiAgW1wiQmxhY2sgQ29mZmVlXCIsIFwiQ2FwdWNpbm8gQ29mZmVlXCIsIFwiRXNwcmVzc29cIl0sXHJcbiAgW1xyXG4gICAgXCJDaGVlc2UgR2FybGljIEJyZWFkXCIsXHJcbiAgICBcIkdhcmxpYyBCcmVhZFwiLFxyXG4gICAgXCJDaGlja2VuIFBpenphXCIsXHJcbiAgICBcIkNvcm4gUGl6emFcIixcclxuICAgIFwiUGFubmVyIFBpenphXCIsXHJcbiAgICBcIlRhbmRvb3JpIENoaWNrZW4gUGl6emFcIixcclxuICAgIFwiQ2hlZXplIExvYWRlZCBQaXp6YVwiLFxyXG4gICAgXCJOb24gVmVnIExvYWRlZCBQaXp6YVwiLFxyXG4gICAgXCJWZWcgTG9hZGVkIFBpenphXCIsXHJcbiAgXSxcclxuICBbXCJDaGlja2VuIEFsZnJlZG9cIiwgXCJWZWcgQWxmcmVkb1wiXSxcclxuICBbXCJUYW5kb29yaSBOYWNob3NcIiwgXCJDaGVlc2UgTmFjaG9zXCIsIFwiTmFjaG9zXCJdLFxyXG4gIFtcIkNoaWNrZW4gVGFjb3NcIiwgXCJWZWcgQ2hlZXNlIFRhY29zXCJdLFxyXG5dO1xyXG5cclxuY29uc3QgcHJpY2VzID0gW1xyXG4gIFtcIjEzOS8tXCIsIFwiMTM5Ly1cIiwgXCIxMzkvLVwiLCBcIjEzOS8tXCIsIFwiMjk5Ly1cIiwgXCIzOTkvLVwiLCBcIjE5OS8tXCIsIFwiMjk5Ly1cIl0sXHJcbiAgW1xyXG4gICAgXCIxMjkvLVwiLFxyXG4gICAgXCIxMjkvLVwiLFxyXG4gICAgXCIxNjkvLVwiLFxyXG4gICAgXCIxOTkvLVwiLFxyXG4gICAgXCIxNzkvLVwiLFxyXG4gICAgXCI5OS8tXCIsXHJcbiAgICBcIjE5OS8tXCIsXHJcbiAgICBcIjE4OS8tXCIsXHJcbiAgICBcIjE5OS8tXCIsXHJcbiAgICBcIjE5OS8tXCIsXHJcbiAgICBcIjE5OS8tXCIsXHJcbiAgICBcIjEyOS8tXCIsXHJcbiAgICBcIjEyOS8tXCIsXHJcbiAgXSxcclxuICBbXHJcbiAgICBcIjE2OS8tXCIsXHJcbiAgICBcIjE2OS8tXCIsXHJcbiAgICBcIjE3OS8tXCIsXHJcbiAgICBcIjE3OS8tXCIsXHJcbiAgICBcIjE2OS8tXCIsXHJcbiAgICBcIjE3OS8tXCIsXHJcbiAgICBcIjE2OS8tXCIsXHJcbiAgICBcIjE3OS8tXCIsXHJcbiAgICBcIjE3OS8tXCIsXHJcbiAgICBcIjE5OS8tXCIsXHJcbiAgICBcIjE5OS8tXCIsXHJcbiAgICBcIjE5OS8tXCIsXHJcbiAgICBcIjE0OS8tXCIsXHJcbiAgICBcIjE5OS8tXCIsXHJcbiAgICBcIjIwOS8tXCIsXHJcbiAgICBcIjIxOS8tXCIsXHJcbiAgICBcIjE5OS8tXCIsXHJcbiAgICBcIjE5OS8tXCIsXHJcbiAgICBcIjE2OS8tXCIsXHJcbiAgXSxcclxuICBbXCIxNzkvLVwiLCBcIjE2OS8tXCIsIFwiMTc5Ly1cIiwgXCIxODkvLVwiLCBcIjE4OS8tXCIsIFwiMTk5Ly1cIiwgXCIxODkvLVwiLCBcIjE3OS8tXCJdLFxyXG4gIFtcclxuICAgIFwiMTM5Ly1cIixcclxuICAgIFwiMTQ5Ly1cIixcclxuICAgIFwiMTM5Ly1cIixcclxuICAgIFwiMTY5Ly1cIixcclxuICAgIFwiMTU5Ly1cIixcclxuICAgIFwiMTM5Ly1cIixcclxuICAgIFwiMTY5Ly1cIixcclxuICAgIFwiMTQ5Ly1cIixcclxuICAgIFwiMTQ5Ly1cIixcclxuICAgIFwiMTk5Ly1cIixcclxuICAgIFwiMTU5Ly1cIixcclxuICBdLFxyXG4gIFtcclxuICAgIFwiMTY5Ly1cIixcclxuICAgIFwiMTk5Ly1cIixcclxuICAgIFwiMTQ5Ly1cIixcclxuICAgIFwiMTM5Ly1cIixcclxuICAgIFwiMTQ5Ly1cIixcclxuICAgIFwiMTQ5Ly1cIixcclxuICAgIFwiMTg5Ly1cIixcclxuICAgIFwiMTk5Ly1cIixcclxuICAgIFwiMzQ5Ly1cIixcclxuICBdLFxyXG4gIFtcclxuICAgIFwiMTk5Ly1cIixcclxuICAgIFwiMjE5Ly1cIixcclxuICAgIFwiMTk5Ly1cIixcclxuICAgIFwiMTk5Ly1cIixcclxuICAgIFwiMjA5Ly1cIixcclxuICAgIFwiMTk5Ly1cIixcclxuICAgIFwiMTk5Ly1cIixcclxuICAgIFwiMTk5Ly1cIixcclxuICAgIFwiMjE5Ly1cIixcclxuICAgIFwiMjE5Ly1cIixcclxuICAgIFwiMjQ5Ly1cIixcclxuICAgIFwiMjQ5Ly1cIixcclxuICBdLFxyXG4gIFtcclxuICAgIFwiMTI5Ly1cIixcclxuICAgIFwiMTI5Ly1cIixcclxuICAgIFwiMTI5Ly1cIixcclxuICAgIFwiMTI5Ly1cIixcclxuICAgIFwiMTI5Ly1cIixcclxuICAgIFwiMTI5Ly1cIixcclxuICAgIFwiMTQ5Ly1cIixcclxuICAgIFwiMTQ5Ly1cIixcclxuICAgIFwiMTI5Ly1cIixcclxuICAgIFwiMTI5Ly1cIixcclxuICAgIFwiMTI5Ly1cIixcclxuICAgIFwiMTQ5Ly1cIixcclxuICAgIFwiMTQ5Ly1cIixcclxuICAgIFwiMTQ5Ly1cIixcclxuICBdLFxyXG4gIFtcclxuICAgIFwiMjk5Ly1cIixcclxuICAgIFwiMjk5Ly1cIixcclxuICAgIFwiMjk5Ly1cIixcclxuICAgIFwiMjk5Ly1cIixcclxuICAgIFwiMjk5Ly1cIixcclxuICAgIFwiMjk5Ly1cIixcclxuICAgIFwiMjk5Ly1cIixcclxuICAgIFwiMjQ5Ly1cIixcclxuICAgIFwiMjQ5Ly1cIixcclxuICBdLFxyXG4gIFtcIjk5Ly1cIiwgXCIxNDkvLVwiLCBcIjEyOS8tXCJdLFxyXG4gIFtcclxuICAgIFwiMTk5Ly1cIixcclxuICAgIFwiOTkvLVwiLFxyXG4gICAgXCIxOTkvLVwiLFxyXG4gICAgXCIyMzkvLVwiLFxyXG4gICAgXCIyMzkvLVwiLFxyXG4gICAgXCIyNjkvLVwiLFxyXG4gICAgXCIxOTkvLVwiLFxyXG4gICAgXCIyOTkvLVwiLFxyXG4gICAgXCIxODkvLVwiLFxyXG4gICAgXCI1NDkvLVwiLFxyXG4gIF0sXHJcbiAgW1wiMjk5Ly1cIiwgXCIyNjkvLVwiXSxcclxuICBbXCIyMTkvLVwiLCBcIjE5OS8tXCIsIFwiMjQ5IC8tXCJdLFxyXG4gIFtcIjE0OS8tXCIsIFwiMTM5Ly1cIl0sXHJcbl07XHJcblxyXG4vLyBGdW5jdGlvbnNcclxuY29uc3QgZWwgPSAoKCkgPT4ge1xyXG4gIGNvbnN0IHNlbGVjdF90YWJsZSA9IChpKSA9PiB7XHJcbiAgICBpZiAoaSA9PSA2KSB7XHJcbiAgICAgIHRhYmxlX251bSA9IHByb21wdChcIlBsZWFzZSBlbnRlciB5b3VyIG5hbWVcIik7XHJcbiAgICAgIGlmICh0YWJsZV9udW0gPT0gXCJcIikge1xyXG4gICAgICAgIHJlc2V0KCk7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgIH1cclxuICAgICAgdGFibGVfbnVtID0gdGFibGVfbnVtLnRvU3RyaW5nKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0YWJsZV9udW0gPSBpICsgMTtcclxuICAgICAgdGFibGVfbnVtID0gcGFyc2VJbnQodGFibGVfbnVtKTtcclxuICAgIH1cclxuICAgIG1haW4uY2xhc3NMaXN0LnJlbW92ZShcImluYWN0aXZlXCIpO1xyXG4gICAgdGFibGUuY2xhc3NMaXN0LmFkZChcImluYWN0aXZlXCIpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNyZWF0ZU1lbnUgPSAoKSA9PiB7XHJcbiAgICBsZXQgayA9IDU7XHJcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDE0OyBqKyspIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtc1tqXS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGRlc2VydHMgPSBtYWluLmNoaWxkTm9kZXNba107XHJcbiAgICAgICAgY29uc3QgZGlzaF9jb250ZW50ID0gZGVzZXJ0cy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKTtcclxuICAgICAgICBkaXNoX2NvbnRlbnQuY2xhc3NMaXN0LmFkZChcImRpc2hfY29udGVudFwiKTtcclxuICAgICAgICBkaXNoX2NvbnRlbnQuaW5uZXJIVE1MID0gYFxyXG4gICAgICA8c3BhbiBjbGFzcz1cImRpc2hcIj4ke2l0ZW1zW2pdW2ldfTwvc3Bhbj5cclxuICAgICAgPGltZyBzcmM9XCIuL2ltYWdlcy9wbHVzLnN2Z1wiIGNsYXNzPVwiYWRkX2Rpc2hcIiBhbHQ9XCJhZGQgdG8gY2FydFwiPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cInByaWNlXCI+4oK5JHtwcmljZXNbal1baV19PC9zcGFuPmA7XHJcbiAgICAgIH1cclxuICAgICAgayArPSAyO1xyXG4gICAgICBwbHVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5hZGRfZGlzaFwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBkcm9wRG93biA9IChpKSA9PiB7XHJcbiAgICBzZWN0aW9uW2ldLmNsYXNzTGlzdC50b2dnbGUoXCJpbmFjdGl2ZVwiKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBhZGRfdG9fY2FydCA9IChpKSA9PiB7XHJcbiAgICBsZXQgZGlzaF9uYW1lID0gcGx1c1tpXS5wYXJlbnRFbGVtZW50LmNoaWxkTm9kZXNbMV0uaW5uZXJIVE1MO1xyXG4gICAgbGV0IHByaWNlID0gcGx1c1tpXS5uZXh0RWxlbWVudFNpYmxpbmcuaW5uZXJIVE1MO1xyXG4gICAgaWYgKGkgPCAxMSkge1xyXG4gICAgICBkaXNoX25hbWUgPSBgJHtwbHVzW2ldLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jaGlsZE5vZGVzWzFdLmlubmVySFRNTH0gJHtkaXNoX25hbWV9YDtcclxuICAgICAgY29uc29sZS5sb2cocGx1c1tpXS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2hpbGROb2Rlc1sxXS5pbm5lckhUTUwsIGRpc2hfbmFtZSk7XHJcbiAgICB9XHJcbiAgICBpZiAoaSA+PSAxMiAmJiBpIDw9IDE2KSB7XHJcbiAgICAgIHByaWNlID0gcGx1c1tpXS5uZXh0RWxlbWVudFNpYmxpbmcubmV4dEVsZW1lbnRTaWJsaW5nLmlubmVySFRNTC5yZXBsYWNlKFxyXG4gICAgICAgIC9bXjAtOV0vZyxcclxuICAgICAgICBcIlwiXHJcbiAgICAgICk7XHJcbiAgICAgIHByaWNlID0gYCR7cHJpY2V9Ly1gO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZGlzaF9wcmljZSA9IHBsdXNbaV0ubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG4gICAgaWYgKCFjaGVja19kdXBsaWNhdGUoZGlzaF9uYW1lKSkge1xyXG4gICAgICBjb25zdCBkaXNoID0gY2FydC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKTtcclxuICAgICAgZGlzaC5jbGFzc0xpc3QuYWRkKFwiY2FydF9pdGVtXCIpO1xyXG4gICAgICBkaXNoLmlubmVySFRNTCA9IGBcclxuICAgIDxzcGFuIGNsYXNzPVwiaXRlbVwiPiR7ZGlzaF9uYW1lfTwvc3Bhbj5cclxuICAgIDxidXR0b24gY2xhc3M9XCJpbmNyZWFzZVwiPis8L2J1dHRvbj5cclxuICAgIDxpbnB1dCBjbGFzcz1cInF1YW50aXR5XCIgbWluPVwiMFwiPlxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cImRlY3JlYXNlXCI+LTwvYnV0dG9uPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJpdGVtX3ByaWNlXCI+JHtwcmljZX08L3NwYW4+YDtcclxuICAgICAgZGlzaC5jaGlsZE5vZGVzWzVdLnZhbHVlID0gMTtcclxuICAgICAgY2FydF9pdGVtX3F1YW50aXR5KCk7XHJcbiAgICAgIHVwZGF0ZV9hbW91bnQoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBjaGVja19kdXBsaWNhdGUgPSAoc3RyKSA9PiB7XHJcbiAgICBpZiAoY2FydC5jaGlsZE5vZGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYXJ0LmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoY2FydC5jaGlsZE5vZGVzW2ldLmNoaWxkTm9kZXNbMV0uaW5uZXJIVE1MID09IHN0cikge1xyXG4gICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2FydF9pdGVtX3F1YW50aXR5ID0gKCkgPT4ge1xyXG4gICAgaW5jcmVhc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmluY3JlYXNlXCIpO1xyXG4gICAgZGVjcmVhc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRlY3JlYXNlXCIpO1xyXG4gICAgcXVhbnRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnF1YW50aXR5XCIpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbmNyZWFzZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpbmNyZWFzZVtpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIHF1YW50aXR5W2ldLnZhbHVlID0gcGFyc2VJbnQocXVhbnRpdHlbaV0udmFsdWUpICsgMTtcclxuICAgICAgICB1cGRhdGVfYW1vdW50KCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBkZWNyZWFzZVtpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGlmIChwYXJzZUludChxdWFudGl0eVtpXS52YWx1ZSkgPD0gMSkge1xyXG4gICAgICAgICAgY2FydC5yZW1vdmVDaGlsZChxdWFudGl0eVtpXS5wYXJlbnRFbGVtZW50KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcXVhbnRpdHlbaV0udmFsdWUgPSBwYXJzZUludChxdWFudGl0eVtpXS52YWx1ZSkgLSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICB1cGRhdGVfYW1vdW50KCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHVwZGF0ZV9hbW91bnQgPSAoKSA9PiB7XHJcbiAgICBsZXQgdG90YWwgPSAwO1xyXG4gICAgY29uc3QgcHJpY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLml0ZW1fcHJpY2VcIik7XHJcbiAgICBjb25zdCBxdWFudGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucXVhbnRpdHlcIik7XHJcbiAgICBjb25zdCBmaW5hbF9hbW91bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvdGFsXCIpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcXVhbnRpdHkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgZGF0YSA9IHBhcnNlSW50KHByaWNlW2ldLmlubmVySFRNTC5yZXBsYWNlKC9bXjAtOV0vZywgXCJcIikpO1xyXG4gICAgICBjb25zdCBudW0gPSBwYXJzZUludChxdWFudGl0eVtpXS52YWx1ZSk7XHJcbiAgICAgIHRvdGFsICs9IGRhdGEgKiBudW07XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tfY2FydCgpO1xyXG4gICAgZmluYWxfYW1vdW50LmlubmVySFRNTCA9IGDigrkke3RvdGFsfS8tYDtcclxuICB9O1xyXG5cclxuICBjb25zdCBjaGVja19jYXJ0ID0gKCkgPT4ge1xyXG4gICAgaWYgKGNhcnQuaW5uZXJIVE1MLmxlbmd0aCA8IDM1KSB7XHJcbiAgICAgIGNhcnQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY2FydC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcGxhY2Vfb3JkZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBmaW5hbF9hbW91bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvdGFsXCIpO1xyXG4gICAgbGV0IG9yZGVyX2RhdGEgPSBgdGFibGUgbm8vbmFtZTogJHt0YWJsZV9udW19XFxudG90YWw6ICR7ZmluYWxfYW1vdW50LmlubmVySFRNTH1cXG5cXG5gO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYXJ0LmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgbmFtZSA9IGNhcnQuY2hpbGROb2Rlc1tpXS5jaGlsZE5vZGVzWzFdLmlubmVySFRNTDtcclxuICAgICAgY29uc3QgcXVhbnRpdHkgPSBjYXJ0LmNoaWxkTm9kZXNbaV0uY2hpbGROb2Rlc1s1XS52YWx1ZTtcclxuICAgICAgY29uc3QgcHJpY2UgPSBjYXJ0LmNoaWxkTm9kZXNbaV0uY2hpbGROb2Rlc1s5XS5pbm5lckhUTUw7XHJcbiAgICAgIG9yZGVyX2RhdGEgKz0gYCR7bmFtZX1cXHQoJHtxdWFudGl0eX0pICR7cHJpY2V9XFxuYDtcclxuICAgIH1cclxuICAgIC8vIHNlbmRNZXNzYWdlKG9yZGVyX2RhdGEpO1xyXG4gICAgYWxlcnQoYG9yZGVyIHN1Ym1pdHRlZCBmb3IgdGFibGUvbmFtZTogJHt0YWJsZV9udW19YCk7XHJcbiAgICByZXNldCgpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNlbmRNZXNzYWdlID0gKG1lc3NhZ2UpID0+IHtcclxuICAgIGNvbnN0IGJvdFRva2VuID0gXCI2MjA3NDk1ODcxOkFBSHpjT3k5WGhTOFQxR0NvZENnVEtTUEk1YVI3NTFVVEJFXCI7XHJcbiAgICBjb25zdCBjaGF0SWQgPSBcIi0xMDAxOTU3OTc3Mjk5XCI7XHJcbiAgICBjb25zdCBwYXJzZU1vZGUgPSBcIk1hcmtkb3duXCI7XHJcblxyXG4gICAgZmV0Y2goYGh0dHBzOi8vYXBpLnRlbGVncmFtLm9yZy9ib3Qke2JvdFRva2VufS9zZW5kTWVzc2FnZWAsIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgY2hhdF9pZDogY2hhdElkLFxyXG4gICAgICAgIHRleHQ6IG1lc3NhZ2UsXHJcbiAgICAgICAgcGFyc2VfbW9kZTogcGFyc2VNb2RlLFxyXG4gICAgICB9KSxcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIHNlbmQgbWVzc2FnZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3Igc2VuZGluZyBtZXNzYWdlOlwiLCBlcnJvcik7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlc2V0ID0gKCkgPT4ge1xyXG4gICAgY2xvc2VfY2FydCgpO1xyXG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKFwiaW5hY3RpdmVcIik7XHJcbiAgICB0YWJsZS5jbGFzc0xpc3QucmVtb3ZlKFwiaW5hY3RpdmVcIik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2xvc2VfY2FydCA9ICgpID0+IHtcclxuICAgIGNhcnQuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGNoZWNrX2NhcnQoKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VjdGlvbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICBzZWN0aW9uW2ldLmNsYXNzTGlzdC5hZGQoXCJpbmFjdGl2ZVwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgc2VsZWN0X3RhYmxlLFxyXG4gICAgY3JlYXRlTWVudSxcclxuICAgIGRyb3BEb3duLFxyXG4gICAgYWRkX3RvX2NhcnQsXHJcbiAgICBjYXJ0X2l0ZW1fcXVhbnRpdHksXHJcbiAgICBwbGFjZV9vcmRlcixcclxuICB9O1xyXG59KSgpO1xyXG5cclxuLy8gRXZlbnRzXHJcbmZvciAobGV0IGkgPSAwOyBpIDwgc2VjdGlvbl9uYW1lLmxlbmd0aDsgaSsrKSB7XHJcbiAgc2VjdGlvbl9uYW1lW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBlbC5kcm9wRG93bihpKTtcclxuICB9KTtcclxufVxyXG5lbC5jcmVhdGVNZW51KCk7XHJcbmZvciAobGV0IGkgPSAwOyBpIDwgcGx1cy5sZW5ndGg7IGkrKykge1xyXG4gIHBsdXNbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGVsLmFkZF90b19jYXJ0KGkpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5lbC5jYXJ0X2l0ZW1fcXVhbnRpdHkoKTtcclxub3JkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGVsLnBsYWNlX29yZGVyKTtcclxuZm9yIChsZXQgaSA9IDA7IGkgPCB0bnVtLmxlbmd0aDsgaSsrKSB7XHJcbiAgdG51bVtpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgZWwuc2VsZWN0X3RhYmxlKGkpO1xyXG4gIH0pO1xyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==