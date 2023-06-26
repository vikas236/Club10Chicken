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
  bottom: 20vh;
  left: 45%;
  color: white;
  font-size: 4vh;
}

.table button:last-of-type {
  margin-top: 5vh;
  width: 77vw;
  height: 75px;
  position: absolute;
  bottom: 5vh;
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
}`, "",{"version":3,"sources":["webpack://./src/css/body.css"],"names":[],"mappings":"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","sourcesContent":["* {\r\n  font-family: sans-serif;\r\n  box-sizing: border-box;\r\n}\r\n\r\n/* @font-face {\r\n  font-family: \"BunjeeShade-regular\";\r\n  src: url(\"./BungeeShade-Regular.ttf\");\r\n} */\r\n\r\nbody {\r\n  margin: 0;\r\n}\r\n\r\n.table {\r\n  width: 100vw;\r\n  height: 91vh;\r\n  position: fixed;\r\n  inset: 75px 0px;\r\n  background: #cb7836;\r\n  z-index: 2;\r\n  overflow: scroll;\r\n}\r\n\r\n.table.inactive {\r\n  display: none;\r\n}\r\n\r\n.table h2 {\r\n  font-size: 18px;\r\n  width: 100vw;\r\n  text-align: center;\r\n  color: white;\r\n}\r\n\r\n.table button {\r\n  width: 75px;\r\n  height: 75px;\r\n  margin-left: 9vw;\r\n  margin-top: 3vh;\r\n  font-size: 24px;\r\n  color: #1A1F22;\r\n}\r\n\r\n.table .or {\r\n  position: absolute;\r\n  bottom: 20vh;\r\n  left: 45%;\r\n  color: white;\r\n  font-size: 4vh;\r\n}\r\n\r\n.table button:last-of-type {\r\n  margin-top: 5vh;\r\n  width: 77vw;\r\n  height: 75px;\r\n  position: absolute;\r\n  bottom: 5vh;\r\n  left: 10px;\r\n}\r\n\r\nmain {\r\n  height: 1000px;\r\n  margin: 0;\r\n  margin-top: 75px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  height: fit-content;\r\n  overflow: hidden;\r\n}\r\n\r\nmain.inactive {\r\n  display: none;\r\n}\r\n\r\n.section {\r\n  position: relative;\r\n  transition: 0.4s;\r\n}\r\n\r\n.section.inactive {\r\n  height: 60px;\r\n  overflow: hidden;\r\n}\r\n\r\n.fried_chicken {\r\n  width: 100vw;\r\n  height: 670px;\r\n  overflow: hidden;\r\n  background: #cb7836;\r\n  position: realtive;\r\n}\r\n\r\n.section_name {\r\n  cursor: pointer;\r\n}\r\n\r\n.brush_stroke {\r\n  display: flex;\r\n  align-items: center;\r\n  height: 50px;\r\n  overflow: hidden;\r\n}\r\n\r\n.brush_stroke img {\r\n  width: 150px;\r\n  height: 200px;\r\n  transform: rotate(90deg);\r\n}\r\n\r\n.brush_stroke img:nth-of-type(2) {\r\n  position: relative;\r\n  right: 50px;\r\n}\r\n\r\n.section_name>.subtext {\r\n  width: 100px;\r\n  position: absolute;\r\n  right: 0px;\r\n  top: 30px;\r\n  color: white;\r\n  font-size: .8rem;\r\n}\r\n\r\n.section_name h2 {\r\n  height: 30px;\r\n  margin: 0;\r\n  font-size: 1.3rem;\r\n  position: absolute;\r\n  inset: 0px;\r\n  z-index: 1;\r\n  color: white;\r\n  left: 20px;\r\n  top: 17px;\r\n}\r\n\r\n.fried_chicken .items {\r\n  position: absolute;\r\n  top: 65px;\r\n  left: 15px;\r\n  font-size: 16px;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.fried_chicken .item {\r\n  width: fit-content;\r\n  border: 2px solid #231f1e;\r\n  padding: 3px;\r\n  border-radius: 5px;\r\n  font-weight: bold;\r\n  font-size: 18px;\r\n}\r\n\r\n.fried_chicken .item:nth-of-type(2) {\r\n  margin-top: 120px;\r\n}\r\n\r\n.fried_chicken .content {\r\n  font-size: 16px;\r\n  font-weight: bold;\r\n  padding-top: 10px;\r\n}\r\n\r\n.section .dish_content {\r\n  width: 90vw;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  margin-top: 5px;\r\n  color: #231f1e;\r\n}\r\n\r\n.section .dish_content:first-of-type {\r\n  margin-top: 12px;\r\n}\r\n\r\n.section .dish {\r\n  padding: 3px;\r\n  margin-top: -5px;\r\n}\r\n\r\n.fried_chicken .towards {\r\n  letter-spacing: -1px;\r\n  position: absolute;\r\n  right: 35%;\r\n}\r\n\r\n.fried_chicken .add_dish {\r\n  position: absolute;\r\n  right: 17%;\r\n  cursor: pointer;\r\n}\r\n\r\n.fried_chicken .price,\r\n.chicken_combo .price {\r\n  background: white;\r\n  border-radius: 5px;\r\n  padding: 2px 5px;\r\n  border: 2px solid #231f1e;\r\n}\r\n\r\n.chicken_combo {\r\n  height: 605px;\r\n  position: relative;\r\n  background: #cb7836;\r\n}\r\n\r\nh2>span:first-of-type,\r\nh2>span:last-of-type {\r\n  width: 10px;\r\n  font-size: 14px;\r\n  position: relative;\r\n  top: -10px;\r\n}\r\n\r\nh2>span:last-of-type {\r\n  position: absolute;\r\n  top: 10px;\r\n  left: 105px;\r\n}\r\n\r\n.combos {\r\n  margin-top: 10px;\r\n  margin-left: 20px;\r\n}\r\n\r\n.combo {\r\n  position: relative;\r\n}\r\n\r\n.combo h2 {\r\n  font-size: 22px;\r\n  width: 60%;\r\n}\r\n\r\n.combo p {\r\n  margin-top: -15px;\r\n  font-size: 13px;\r\n  width: 60%;\r\n}\r\n\r\n.combo .price {\r\n  width: fit-content;\r\n  position: absolute;\r\n  right: 23px;\r\n  top: 5px;\r\n  font-weight: bold;\r\n}\r\n\r\n.combo img {\r\n  position: absolute;\r\n  right: 80px;\r\n  top: 5px;\r\n}\r\n\r\n.combo .offer {\r\n  position: absolute;\r\n  top: 35px;\r\n  right: 15px;\r\n  font-weight: bolder;\r\n  font-size: 18px;\r\n}\r\n\r\n.normal {\r\n  height: 315px;\r\n  background: #711c17;\r\n}\r\n\r\n.normal h2 {\r\n  color: #711c17;\r\n}\r\n\r\n.normal .dish_content {\r\n  width: 100vw;\r\n  position: relative;\r\n  top: 10px;\r\n}\r\n\r\n.normal .dish {\r\n  color: white;\r\n  margin-left: 20px;\r\n  font-size: 18px;\r\n  margin-top: 0px;\r\n}\r\n\r\n.normal .price {\r\n  color: white;\r\n  font-size: 18px;\r\n  position: absolute;\r\n  right: 25px;\r\n}\r\n\r\n.normal .dish_content img {\r\n  position: absolute;\r\n  right: 80px;\r\n  top: 1px;\r\n}\r\n\r\n.quick_bits {\r\n  height: 485px;\r\n}\r\n\r\n.quick_bits .brush_stroke img:nth-of-type(2) {\r\n  position: relative;\r\n  left: -115px;\r\n}\r\n\r\n.milk_shakes {\r\n  height: 675px;\r\n}\r\n\r\n.milk_shakes .brush_stroke>img:nth-of-type(2) {\r\n  position: relative;\r\n  left: -75px;\r\n}\r\n\r\n.large {\r\n  height: 360px;\r\n  background: #1A1F22;\r\n}\r\n\r\n.large.inactive {\r\n  height: 95px;\r\n}\r\n\r\n.large h2 {\r\n  color: #1A1F22;\r\n  width: 250px;\r\n}\r\n\r\n.large .brush_stroke {\r\n  overflow: visible;\r\n}\r\n\r\n.large .brush_stroke>img:nth-of-type(2) {\r\n  position: relative;\r\n  left: 15px;\r\n}\r\n\r\n.large .brush_stroke>img:nth-of-type(3) {\r\n  position: relative;\r\n  z-index: 1;\r\n  top: 30px;\r\n  left: -160px;\r\n}\r\n\r\n.large .brush_stroke>img:nth-of-type(4) {\r\n  position: relative;\r\n  top: 30px;\r\n  left: -150px;\r\n}\r\n\r\n.large .dish_content {\r\n  width: 100vw;\r\n  position: relative;\r\n}\r\n\r\n.large .dish_content:nth-of-type(2) {\r\n  margin-top: 45px;\r\n  color: black;\r\n}\r\n\r\n.large .dish {\r\n  color: white;\r\n  margin-left: 20px;\r\n  font-size: 18px;\r\n  margin-top: 0px;\r\n}\r\n\r\n.large .price {\r\n  color: white;\r\n  font-size: 18px;\r\n  position: absolute;\r\n  right: 25px;\r\n}\r\n\r\n.large .dish_content img {\r\n  position: absolute;\r\n  right: 80px;\r\n}\r\n\r\n.fried_cgsand {\r\n  height: 460px;\r\n}\r\n\r\n.fried_cgsand .brush_stroke>img:nth-of-type(4) {\r\n  left: -125px;\r\n}\r\n\r\n.fried_cgsand .subtext {\r\n  position: absolute;\r\n  top: 15px;\r\n}\r\n\r\n.fried_cgburger {\r\n  height: 355px;\r\n}\r\n\r\n.smoothies,\r\n.mocktails,\r\n.thick_shake {\r\n  background: #F09B1E;\r\n  height: 450px;\r\n}\r\n\r\n\r\n.smoothies img:last-of-type,\r\n.mocktails img:last-of-type,\r\n.thick_shake img:last-of-type {\r\n  position: relative;\r\n  right: 100px;\r\n}\r\n\r\n\r\n.smoothies .dish_content img,\r\n.mocktails .dish_content img,\r\n.thick_shake .dish_content img {\r\n  position: absolute;\r\n  right: 80px;\r\n}\r\n\r\n.smoothies h2,\r\n.mocktails h2,\r\n.thick_shake h2 {\r\n  color: #EC1A23;\r\n}\r\n\r\n.mocktails {\r\n  height: 515px;\r\n}\r\n\r\n.thick_shake {\r\n  height: 355px;\r\n}\r\n\r\n.coffee,\r\n.pizza,\r\n.pasta,\r\n.nachos,\r\n.tacos {\r\n  height: 160px;\r\n  background: #2E2222;\r\n}\r\n\r\n.coffee h2,\r\n.pizza h2,\r\n.pasta h2,\r\n.nachos h2,\r\n.tacos h2 {\r\n  color: #111214;\r\n}\r\n\r\n.coffee .brush_stroke img:last-of-type {\r\n  position: absolute;\r\n  left: 10px;\r\n}\r\n\r\n.pizza {\r\n  height: 355px;\r\n}\r\n\r\n.pizza .brush_stroke img:first-of-type {\r\n  position: absolute;\r\n  left: -20px;\r\n}\r\n\r\n.pasta {\r\n  height: 130px;\r\n}\r\n\r\n.nachos {\r\n  height: 160px;\r\n}\r\n\r\n.tacos {\r\n  height: 130px;\r\n}\r\n\r\nfooter {\r\n  width: 100vw;\r\n  height: fit-content;\r\n}"],"sourceRoot":""}]);
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
    transform: translateY(300px);
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

.order > button {
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
    bottom: 10px;
    color: white;
    padding: 5px;
    border-radius: 5px;
}`, "",{"version":3,"sources":["webpack://./src/css/footer.css"],"names":[],"mappings":"AAAA;IACI,eAAe;IACf,WAAW;IACX,YAAY;IACZ,YAAY;IACZ,iGAAiG;IACjG,UAAU;IACV,4BAA4B;IAC5B,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,6BAA6B;IAC7B,eAAe;IACf,gBAAgB;IAChB,4BAA4B;AAChC;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,mBAAmB;IACnB,mBAAmB;IACnB,YAAY;IACZ,aAAa;IACb,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,cAAc;IACd,eAAe;IACf,mBAAmB;IACnB,iBAAiB;IACjB,YAAY;IACZ,kBAAkB;IAClB,UAAU;IACV,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,YAAY;IACZ,uBAAuB;IACvB,kBAAkB;IAClB,cAAc;IACd,kBAAkB;AACtB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,iBAAiB;IACjB,kBAAkB;IAClB,cAAc;IACd,gBAAgB;IAChB,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,SAAS;AACb;;AAEA;IACI,eAAe;IACf,yBAAyB;IACzB,kBAAkB;IAClB,UAAU;IACV,YAAY;IACZ,YAAY;IACZ,YAAY;IACZ,kBAAkB;AACtB","sourcesContent":[".order {\r\n    position: fixed;\r\n    bottom: 0px;\r\n    width: 100vw;\r\n    height: 35vh;\r\n    background: linear-gradient(transparent 0%, transparent 79%, #131719 79%, #131719 80%, white 80%);\r\n    z-index: 2;\r\n    border-radius: 25px 25px 0 0;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: space-around;\r\n    transition: .3s;\r\n    overflow: hidden;\r\n    transform: translateY(300px);\r\n}\r\n\r\n.order.active {\r\n    transform: translateY(0px);\r\n}\r\n\r\n.order .cart {\r\n    width: 95vw;\r\n    height: 26vh;\r\n    background: #131719;\r\n    border-radius: 10px;\r\n    color: white;\r\n    padding: 10px;\r\n    overflow: scroll;\r\n}\r\n\r\n.order > button {\r\n    width: 60vw;\r\n    height: 40px;\r\n    color: #131719;\r\n    font-size: 18px;\r\n    border-radius: 10px;\r\n    font-weight: bold;\r\n    border: none;\r\n    position: relative;\r\n    left: 35px;\r\n    border: 3px solid #131719;\r\n}\r\n\r\n.cart .cart_item {\r\n    display: flex;\r\n    position: relative;\r\n    height: 75px;\r\n    border: 1px solid white;\r\n    border-radius: 5px;\r\n    padding: 0 5px;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.cart span {\r\n    font-size: 18px;\r\n}\r\n\r\n.cart .item {\r\n    margin-top: 5px;\r\n}\r\n\r\n.cart button {\r\n    width: 30px;\r\n    height: 30px;\r\n}\r\n\r\n.cart .decrease {\r\n    position: absolute;\r\n    inset: 35px 105px;\r\n}\r\n\r\n.cart .increase {\r\n    position: absolute;\r\n    inset: 35px 180px;\r\n}\r\n\r\n.cart .quantity {\r\n    width: 35px;\r\n    height: 30px;\r\n    background: white;\r\n    border-radius: 5px;\r\n    color: #131719;\r\n    padding: 5px 7px;\r\n    position: absolute;\r\n    inset: 35px 140px;\r\n}\r\n\r\n.cart .item_price {\r\n    position: absolute;\r\n    right: 10px;\r\n    top: 40px;\r\n}\r\n\r\n.order .total {\r\n    font-size: 24px;\r\n    background-color: #131719;\r\n    position: absolute;\r\n    left: 10px;\r\n    bottom: 10px;\r\n    color: white;\r\n    padding: 5px;\r\n    border-radius: 5px;\r\n}"],"sourceRoot":""}]);
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
      dish_name =
        plus[i].parentElement.previousElementSibling.innerHTML +
        " " +
        dish_name;
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
    if (cart.childNodes.length > 1) {
      for (let i = 1; i < cart.childNodes.length; i++) {
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
      let data = parseInt(price[i].innerHTML.replace(/[^0-9]/g, ""));
      let num = parseInt(quantity[i].value);
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
      let name = cart.childNodes[i].childNodes[1].innerHTML;
      let quantity = cart.childNodes[i].childNodes[5].value;
      let price = cart.childNodes[i].childNodes[9].innerHTML;
      order_data += `${name}\t(${quantity}) ${price}\n`;
    }
    sendMessage(order_data);
    alert(`order submitted for table ${table_num}`);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sbUZBQW1GLFlBQVksYUFBYSxPQUFPLE9BQU8sTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxPQUFPLFlBQVksV0FBVyxPQUFPLE9BQU8sWUFBWSxXQUFXLE9BQU8sT0FBTyxZQUFZLFdBQVcsTUFBTSxPQUFPLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxTQUFTLFVBQVUsWUFBWSxPQUFPLFNBQVMsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSw2QkFBNkIsOEJBQThCLDZCQUE2QixLQUFLLHVCQUF1QiwyQ0FBMkMsOENB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8scUZBQXFGLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGtDQUFrQyx3QkFBd0Isb0JBQW9CLHFCQUFx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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCLHNCQUFzQixxQkFBcUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsWUFBWTtBQUN2QztBQUNBLDZCQUE2QixhQUFhO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixNQUFNO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixVQUFVO0FBQ25DO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixNQUFNO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsNEJBQTRCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IscUJBQXFCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixxQkFBcUI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLE1BQU07QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsVUFBVSxXQUFXLHVCQUF1QjtBQUNuRixvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixLQUFLLEtBQUssU0FBUyxJQUFJLE1BQU07QUFDcEQ7QUFDQTtBQUNBLHVDQUF1QyxVQUFVO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsU0FBUztBQUNsRDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isb0JBQW9CO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsZ0JBQWdCLHlCQUF5QjtBQUN6QztBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxnQkFBZ0IsaUJBQWlCO0FBQ2pDO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsaUJBQWlCO0FBQ2pDO0FBQ0E7QUFDQSxHQUFHO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbHViMTBjaGlja2VuLy4vc3JjL2Nzcy9ib2R5LmNzcyIsIndlYnBhY2s6Ly9jbHViMTBjaGlja2VuLy4vc3JjL2Nzcy9mb290ZXIuY3NzIiwid2VicGFjazovL2NsdWIxMGNoaWNrZW4vLi9zcmMvY3NzL25hdmJhci5jc3MiLCJ3ZWJwYWNrOi8vY2x1YjEwY2hpY2tlbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vY2x1YjEwY2hpY2tlbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2NsdWIxMGNoaWNrZW4vLi9zcmMvY3NzL2JvZHkuY3NzPzI2NTYiLCJ3ZWJwYWNrOi8vY2x1YjEwY2hpY2tlbi8uL3NyYy9jc3MvZm9vdGVyLmNzcz9hYjhjIiwid2VicGFjazovL2NsdWIxMGNoaWNrZW4vLi9zcmMvY3NzL25hdmJhci5jc3M/MjJhNyIsIndlYnBhY2s6Ly9jbHViMTBjaGlja2VuLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2NsdWIxMGNoaWNrZW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2NsdWIxMGNoaWNrZW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vY2x1YjEwY2hpY2tlbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9jbHViMTBjaGlja2VuLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vY2x1YjEwY2hpY2tlbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2NsdWIxMGNoaWNrZW4vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY2x1YjEwY2hpY2tlbi93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9jbHViMTBjaGlja2VuL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jbHViMTBjaGlja2VuL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY2x1YjEwY2hpY2tlbi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2NsdWIxMGNoaWNrZW4vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vY2x1YjEwY2hpY2tlbi93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vY2x1YjEwY2hpY2tlbi8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XHJcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLyogQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiQnVuamVlU2hhZGUtcmVndWxhclwiO1xyXG4gIHNyYzogdXJsKFwiLi9CdW5nZWVTaGFkZS1SZWd1bGFyLnR0ZlwiKTtcclxufSAqL1xyXG5cclxuYm9keSB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4udGFibGUge1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDkxdmg7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGluc2V0OiA3NXB4IDBweDtcclxuICBiYWNrZ3JvdW5kOiAjY2I3ODM2O1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcclxufVxyXG5cclxuLnRhYmxlLmluYWN0aXZlIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4udGFibGUgaDIge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnRhYmxlIGJ1dHRvbiB7XHJcbiAgd2lkdGg6IDc1cHg7XHJcbiAgaGVpZ2h0OiA3NXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA5dnc7XHJcbiAgbWFyZ2luLXRvcDogM3ZoO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBjb2xvcjogIzFBMUYyMjtcclxufVxyXG5cclxuLnRhYmxlIC5vciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMjB2aDtcclxuICBsZWZ0OiA0NSU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogNHZoO1xyXG59XHJcblxyXG4udGFibGUgYnV0dG9uOmxhc3Qtb2YtdHlwZSB7XHJcbiAgbWFyZ2luLXRvcDogNXZoO1xyXG4gIHdpZHRoOiA3N3Z3O1xyXG4gIGhlaWdodDogNzVweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiA1dmg7XHJcbiAgbGVmdDogMTBweDtcclxufVxyXG5cclxubWFpbiB7XHJcbiAgaGVpZ2h0OiAxMDAwcHg7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIG1hcmdpbi10b3A6IDc1cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbm1haW4uaW5hY3RpdmUge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5zZWN0aW9uIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdHJhbnNpdGlvbjogMC40cztcclxufVxyXG5cclxuLnNlY3Rpb24uaW5hY3RpdmUge1xyXG4gIGhlaWdodDogNjBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uZnJpZWRfY2hpY2tlbiB7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogNjcwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kOiAjY2I3ODM2O1xyXG4gIHBvc2l0aW9uOiByZWFsdGl2ZTtcclxufVxyXG5cclxuLnNlY3Rpb25fbmFtZSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYnJ1c2hfc3Ryb2tlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5icnVzaF9zdHJva2UgaW1nIHtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbn1cclxuXHJcbi5icnVzaF9zdHJva2UgaW1nOm50aC1vZi10eXBlKDIpIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcmlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbi5zZWN0aW9uX25hbWU+LnN1YnRleHQge1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDBweDtcclxuICB0b3A6IDMwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogLjhyZW07XHJcbn1cclxuXHJcbi5zZWN0aW9uX25hbWUgaDIge1xyXG4gIGhlaWdodDogMzBweDtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGluc2V0OiAwcHg7XHJcbiAgei1pbmRleDogMTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbGVmdDogMjBweDtcclxuICB0b3A6IDE3cHg7XHJcbn1cclxuXHJcbi5mcmllZF9jaGlja2VuIC5pdGVtcyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNjVweDtcclxuICBsZWZ0OiAxNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5mcmllZF9jaGlja2VuIC5pdGVtIHtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzIzMWYxZTtcclxuICBwYWRkaW5nOiAzcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLmZyaWVkX2NoaWNrZW4gLml0ZW06bnRoLW9mLXR5cGUoMikge1xyXG4gIG1hcmdpbi10b3A6IDEyMHB4O1xyXG59XHJcblxyXG4uZnJpZWRfY2hpY2tlbiAuY29udGVudCB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uc2VjdGlvbiAuZGlzaF9jb250ZW50IHtcclxuICB3aWR0aDogOTB2dztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBjb2xvcjogIzIzMWYxZTtcclxufVxyXG5cclxuLnNlY3Rpb24gLmRpc2hfY29udGVudDpmaXJzdC1vZi10eXBlIHtcclxuICBtYXJnaW4tdG9wOiAxMnB4O1xyXG59XHJcblxyXG4uc2VjdGlvbiAuZGlzaCB7XHJcbiAgcGFkZGluZzogM3B4O1xyXG4gIG1hcmdpbi10b3A6IC01cHg7XHJcbn1cclxuXHJcbi5mcmllZF9jaGlja2VuIC50b3dhcmRzIHtcclxuICBsZXR0ZXItc3BhY2luZzogLTFweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDM1JTtcclxufVxyXG5cclxuLmZyaWVkX2NoaWNrZW4gLmFkZF9kaXNoIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDE3JTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5mcmllZF9jaGlja2VuIC5wcmljZSxcclxuLmNoaWNrZW5fY29tYm8gLnByaWNlIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcGFkZGluZzogMnB4IDVweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjMjMxZjFlO1xyXG59XHJcblxyXG4uY2hpY2tlbl9jb21ibyB7XHJcbiAgaGVpZ2h0OiA2MDVweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZDogI2NiNzgzNjtcclxufVxyXG5cclxuaDI+c3BhbjpmaXJzdC1vZi10eXBlLFxyXG5oMj5zcGFuOmxhc3Qtb2YtdHlwZSB7XHJcbiAgd2lkdGg6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IC0xMHB4O1xyXG59XHJcblxyXG5oMj5zcGFuOmxhc3Qtb2YtdHlwZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTBweDtcclxuICBsZWZ0OiAxMDVweDtcclxufVxyXG5cclxuLmNvbWJvcyB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG5cclxuLmNvbWJvIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5jb21ibyBoMiB7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIHdpZHRoOiA2MCU7XHJcbn1cclxuXHJcbi5jb21ibyBwIHtcclxuICBtYXJnaW4tdG9wOiAtMTVweDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgd2lkdGg6IDYwJTtcclxufVxyXG5cclxuLmNvbWJvIC5wcmljZSB7XHJcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMjNweDtcclxuICB0b3A6IDVweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmNvbWJvIGltZyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiA4MHB4O1xyXG4gIHRvcDogNXB4O1xyXG59XHJcblxyXG4uY29tYm8gLm9mZmVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAzNXB4O1xyXG4gIHJpZ2h0OiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4ubm9ybWFsIHtcclxuICBoZWlnaHQ6IDMxNXB4O1xyXG4gIGJhY2tncm91bmQ6ICM3MTFjMTc7XHJcbn1cclxuXHJcbi5ub3JtYWwgaDIge1xyXG4gIGNvbG9yOiAjNzExYzE3O1xyXG59XHJcblxyXG4ubm9ybWFsIC5kaXNoX2NvbnRlbnQge1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAxMHB4O1xyXG59XHJcblxyXG4ubm9ybWFsIC5kaXNoIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxufVxyXG5cclxuLm5vcm1hbCAucHJpY2Uge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAyNXB4O1xyXG59XHJcblxyXG4ubm9ybWFsIC5kaXNoX2NvbnRlbnQgaW1nIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDgwcHg7XHJcbiAgdG9wOiAxcHg7XHJcbn1cclxuXHJcbi5xdWlja19iaXRzIHtcclxuICBoZWlnaHQ6IDQ4NXB4O1xyXG59XHJcblxyXG4ucXVpY2tfYml0cyAuYnJ1c2hfc3Ryb2tlIGltZzpudGgtb2YtdHlwZSgyKSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGxlZnQ6IC0xMTVweDtcclxufVxyXG5cclxuLm1pbGtfc2hha2VzIHtcclxuICBoZWlnaHQ6IDY3NXB4O1xyXG59XHJcblxyXG4ubWlsa19zaGFrZXMgLmJydXNoX3N0cm9rZT5pbWc6bnRoLW9mLXR5cGUoMikge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsZWZ0OiAtNzVweDtcclxufVxyXG5cclxuLmxhcmdlIHtcclxuICBoZWlnaHQ6IDM2MHB4O1xyXG4gIGJhY2tncm91bmQ6ICMxQTFGMjI7XHJcbn1cclxuXHJcbi5sYXJnZS5pbmFjdGl2ZSB7XHJcbiAgaGVpZ2h0OiA5NXB4O1xyXG59XHJcblxyXG4ubGFyZ2UgaDIge1xyXG4gIGNvbG9yOiAjMUExRjIyO1xyXG4gIHdpZHRoOiAyNTBweDtcclxufVxyXG5cclxuLmxhcmdlIC5icnVzaF9zdHJva2Uge1xyXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xyXG59XHJcblxyXG4ubGFyZ2UgLmJydXNoX3N0cm9rZT5pbWc6bnRoLW9mLXR5cGUoMikge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsZWZ0OiAxNXB4O1xyXG59XHJcblxyXG4ubGFyZ2UgLmJydXNoX3N0cm9rZT5pbWc6bnRoLW9mLXR5cGUoMykge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxO1xyXG4gIHRvcDogMzBweDtcclxuICBsZWZ0OiAtMTYwcHg7XHJcbn1cclxuXHJcbi5sYXJnZSAuYnJ1c2hfc3Ryb2tlPmltZzpudGgtb2YtdHlwZSg0KSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMzBweDtcclxuICBsZWZ0OiAtMTUwcHg7XHJcbn1cclxuXHJcbi5sYXJnZSAuZGlzaF9jb250ZW50IHtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ubGFyZ2UgLmRpc2hfY29udGVudDpudGgtb2YtdHlwZSgyKSB7XHJcbiAgbWFyZ2luLXRvcDogNDVweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5sYXJnZSAuZGlzaCB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbn1cclxuXHJcbi5sYXJnZSAucHJpY2Uge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAyNXB4O1xyXG59XHJcblxyXG4ubGFyZ2UgLmRpc2hfY29udGVudCBpbWcge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogODBweDtcclxufVxyXG5cclxuLmZyaWVkX2Nnc2FuZCB7XHJcbiAgaGVpZ2h0OiA0NjBweDtcclxufVxyXG5cclxuLmZyaWVkX2Nnc2FuZCAuYnJ1c2hfc3Ryb2tlPmltZzpudGgtb2YtdHlwZSg0KSB7XHJcbiAgbGVmdDogLTEyNXB4O1xyXG59XHJcblxyXG4uZnJpZWRfY2dzYW5kIC5zdWJ0ZXh0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxNXB4O1xyXG59XHJcblxyXG4uZnJpZWRfY2didXJnZXIge1xyXG4gIGhlaWdodDogMzU1cHg7XHJcbn1cclxuXHJcbi5zbW9vdGhpZXMsXHJcbi5tb2NrdGFpbHMsXHJcbi50aGlja19zaGFrZSB7XHJcbiAgYmFja2dyb3VuZDogI0YwOUIxRTtcclxuICBoZWlnaHQ6IDQ1MHB4O1xyXG59XHJcblxyXG5cclxuLnNtb290aGllcyBpbWc6bGFzdC1vZi10eXBlLFxyXG4ubW9ja3RhaWxzIGltZzpsYXN0LW9mLXR5cGUsXHJcbi50aGlja19zaGFrZSBpbWc6bGFzdC1vZi10eXBlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcmlnaHQ6IDEwMHB4O1xyXG59XHJcblxyXG5cclxuLnNtb290aGllcyAuZGlzaF9jb250ZW50IGltZyxcclxuLm1vY2t0YWlscyAuZGlzaF9jb250ZW50IGltZyxcclxuLnRoaWNrX3NoYWtlIC5kaXNoX2NvbnRlbnQgaW1nIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDgwcHg7XHJcbn1cclxuXHJcbi5zbW9vdGhpZXMgaDIsXHJcbi5tb2NrdGFpbHMgaDIsXHJcbi50aGlja19zaGFrZSBoMiB7XHJcbiAgY29sb3I6ICNFQzFBMjM7XHJcbn1cclxuXHJcbi5tb2NrdGFpbHMge1xyXG4gIGhlaWdodDogNTE1cHg7XHJcbn1cclxuXHJcbi50aGlja19zaGFrZSB7XHJcbiAgaGVpZ2h0OiAzNTVweDtcclxufVxyXG5cclxuLmNvZmZlZSxcclxuLnBpenphLFxyXG4ucGFzdGEsXHJcbi5uYWNob3MsXHJcbi50YWNvcyB7XHJcbiAgaGVpZ2h0OiAxNjBweDtcclxuICBiYWNrZ3JvdW5kOiAjMkUyMjIyO1xyXG59XHJcblxyXG4uY29mZmVlIGgyLFxyXG4ucGl6emEgaDIsXHJcbi5wYXN0YSBoMixcclxuLm5hY2hvcyBoMixcclxuLnRhY29zIGgyIHtcclxuICBjb2xvcjogIzExMTIxNDtcclxufVxyXG5cclxuLmNvZmZlZSAuYnJ1c2hfc3Ryb2tlIGltZzpsYXN0LW9mLXR5cGUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4ucGl6emEge1xyXG4gIGhlaWdodDogMzU1cHg7XHJcbn1cclxuXHJcbi5waXp6YSAuYnJ1c2hfc3Ryb2tlIGltZzpmaXJzdC1vZi10eXBlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogLTIwcHg7XHJcbn1cclxuXHJcbi5wYXN0YSB7XHJcbiAgaGVpZ2h0OiAxMzBweDtcclxufVxyXG5cclxuLm5hY2hvcyB7XHJcbiAgaGVpZ2h0OiAxNjBweDtcclxufVxyXG5cclxuLnRhY29zIHtcclxuICBoZWlnaHQ6IDEzMHB4O1xyXG59XHJcblxyXG5mb290ZXIge1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2JvZHkuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtBQUN4Qjs7QUFFQTs7O0dBR0c7O0FBRUg7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWU7RUFDZixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFNBQVM7RUFDVCxZQUFZO0VBQ1osY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsVUFBVTtBQUNaOztBQUVBO0VBQ0UsY0FBYztFQUNkLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNw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XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbi8qIEBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJCdW5qZWVTaGFkZS1yZWd1bGFyXFxcIjtcXHJcXG4gIHNyYzogdXJsKFxcXCIuL0J1bmdlZVNoYWRlLVJlZ3VsYXIudHRmXFxcIik7XFxyXFxufSAqL1xcclxcblxcclxcbmJvZHkge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4udGFibGUge1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgaGVpZ2h0OiA5MXZoO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgaW5zZXQ6IDc1cHggMHB4O1xcclxcbiAgYmFja2dyb3VuZDogI2NiNzgzNjtcXHJcXG4gIHotaW5kZXg6IDI7XFxyXFxuICBvdmVyZmxvdzogc2Nyb2xsO1xcclxcbn1cXHJcXG5cXHJcXG4udGFibGUuaW5hY3RpdmUge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhYmxlIGgyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhYmxlIGJ1dHRvbiB7XFxyXFxuICB3aWR0aDogNzVweDtcXHJcXG4gIGhlaWdodDogNzVweDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA5dnc7XFxyXFxuICBtYXJnaW4tdG9wOiAzdmg7XFxyXFxuICBmb250LXNpemU6IDI0cHg7XFxyXFxuICBjb2xvcjogIzFBMUYyMjtcXHJcXG59XFxyXFxuXFxyXFxuLnRhYmxlIC5vciB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBib3R0b206IDIwdmg7XFxyXFxuICBsZWZ0OiA0NSU7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBmb250LXNpemU6IDR2aDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhYmxlIGJ1dHRvbjpsYXN0LW9mLXR5cGUge1xcclxcbiAgbWFyZ2luLXRvcDogNXZoO1xcclxcbiAgd2lkdGg6IDc3dnc7XFxyXFxuICBoZWlnaHQ6IDc1cHg7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBib3R0b206IDV2aDtcXHJcXG4gIGxlZnQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbm1haW4ge1xcclxcbiAgaGVpZ2h0OiAxMDAwcHg7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBtYXJnaW4tdG9wOiA3NXB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxubWFpbi5pbmFjdGl2ZSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvbiB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvbi5pbmFjdGl2ZSB7XFxyXFxuICBoZWlnaHQ6IDYwcHg7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4uZnJpZWRfY2hpY2tlbiB7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBoZWlnaHQ6IDY3MHB4O1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIGJhY2tncm91bmQ6ICNjYjc4MzY7XFxyXFxuICBwb3NpdGlvbjogcmVhbHRpdmU7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uX25hbWUge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYnJ1c2hfc3Ryb2tlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmJydXNoX3N0cm9rZSBpbWcge1xcclxcbiAgd2lkdGg6IDE1MHB4O1xcclxcbiAgaGVpZ2h0OiAyMDBweDtcXHJcXG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJydXNoX3N0cm9rZSBpbWc6bnRoLW9mLXR5cGUoMikge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgcmlnaHQ6IDUwcHg7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uX25hbWU+LnN1YnRleHQge1xcclxcbiAgd2lkdGg6IDEwMHB4O1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgcmlnaHQ6IDBweDtcXHJcXG4gIHRvcDogMzBweDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtc2l6ZTogLjhyZW07XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uX25hbWUgaDIge1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBpbnNldDogMHB4O1xcclxcbiAgei1pbmRleDogMTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGxlZnQ6IDIwcHg7XFxyXFxuICB0b3A6IDE3cHg7XFxyXFxufVxcclxcblxcclxcbi5mcmllZF9jaGlja2VuIC5pdGVtcyB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDY1cHg7XFxyXFxuICBsZWZ0OiAxNXB4O1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5mcmllZF9jaGlja2VuIC5pdGVtIHtcXHJcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMyMzFmMWU7XFxyXFxuICBwYWRkaW5nOiAzcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZyaWVkX2NoaWNrZW4gLml0ZW06bnRoLW9mLXR5cGUoMikge1xcclxcbiAgbWFyZ2luLXRvcDogMTIwcHg7XFxyXFxufVxcclxcblxcclxcbi5mcmllZF9jaGlja2VuIC5jb250ZW50IHtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uIC5kaXNoX2NvbnRlbnQge1xcclxcbiAgd2lkdGg6IDkwdnc7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIG1hcmdpbi10b3A6IDVweDtcXHJcXG4gIGNvbG9yOiAjMjMxZjFlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvbiAuZGlzaF9jb250ZW50OmZpcnN0LW9mLXR5cGUge1xcclxcbiAgbWFyZ2luLXRvcDogMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb24gLmRpc2gge1xcclxcbiAgcGFkZGluZzogM3B4O1xcclxcbiAgbWFyZ2luLXRvcDogLTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZyaWVkX2NoaWNrZW4gLnRvd2FyZHMge1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICByaWdodDogMzUlO1xcclxcbn1cXHJcXG5cXHJcXG4uZnJpZWRfY2hpY2tlbiAuYWRkX2Rpc2gge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgcmlnaHQ6IDE3JTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZyaWVkX2NoaWNrZW4gLnByaWNlLFxcclxcbi5jaGlja2VuX2NvbWJvIC5wcmljZSB7XFxyXFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIHBhZGRpbmc6IDJweCA1cHg7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCAjMjMxZjFlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hpY2tlbl9jb21ibyB7XFxyXFxuICBoZWlnaHQ6IDYwNXB4O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgYmFja2dyb3VuZDogI2NiNzgzNjtcXHJcXG59XFxyXFxuXFxyXFxuaDI+c3BhbjpmaXJzdC1vZi10eXBlLFxcclxcbmgyPnNwYW46bGFzdC1vZi10eXBlIHtcXHJcXG4gIHdpZHRoOiAxMHB4O1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgdG9wOiAtMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuaDI+c3BhbjpsYXN0LW9mLXR5cGUge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAxMHB4O1xcclxcbiAgbGVmdDogMTA1cHg7XFxyXFxufVxcclxcblxcclxcbi5jb21ib3Mge1xcclxcbiAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tYm8ge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tYm8gaDIge1xcclxcbiAgZm9udC1zaXplOiAyMnB4O1xcclxcbiAgd2lkdGg6IDYwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbWJvIHAge1xcclxcbiAgbWFyZ2luLXRvcDogLTE1cHg7XFxyXFxuICBmb250LXNpemU6IDEzcHg7XFxyXFxuICB3aWR0aDogNjAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tYm8gLnByaWNlIHtcXHJcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHJpZ2h0OiAyM3B4O1xcclxcbiAgdG9wOiA1cHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbWJvIGltZyB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICByaWdodDogODBweDtcXHJcXG4gIHRvcDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tYm8gLm9mZmVyIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMzVweDtcXHJcXG4gIHJpZ2h0OiAxNXB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5vcm1hbCB7XFxyXFxuICBoZWlnaHQ6IDMxNXB4O1xcclxcbiAgYmFja2dyb3VuZDogIzcxMWMxNztcXHJcXG59XFxyXFxuXFxyXFxuLm5vcm1hbCBoMiB7XFxyXFxuICBjb2xvcjogIzcxMWMxNztcXHJcXG59XFxyXFxuXFxyXFxuLm5vcm1hbCAuZGlzaF9jb250ZW50IHtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHRvcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5vcm1hbCAuZGlzaCB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBtYXJnaW4tbGVmdDogMjBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIG1hcmdpbi10b3A6IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5vcm1hbCAucHJpY2Uge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgcmlnaHQ6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbi5ub3JtYWwgLmRpc2hfY29udGVudCBpbWcge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgcmlnaHQ6IDgwcHg7XFxyXFxuICB0b3A6IDFweDtcXHJcXG59XFxyXFxuXFxyXFxuLnF1aWNrX2JpdHMge1xcclxcbiAgaGVpZ2h0OiA0ODVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnF1aWNrX2JpdHMgLmJydXNoX3N0cm9rZSBpbWc6bnRoLW9mLXR5cGUoMikge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgbGVmdDogLTExNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWlsa19zaGFrZXMge1xcclxcbiAgaGVpZ2h0OiA2NzVweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1pbGtfc2hha2VzIC5icnVzaF9zdHJva2U+aW1nOm50aC1vZi10eXBlKDIpIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGxlZnQ6IC03NXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubGFyZ2Uge1xcclxcbiAgaGVpZ2h0OiAzNjBweDtcXHJcXG4gIGJhY2tncm91bmQ6ICMxQTFGMjI7XFxyXFxufVxcclxcblxcclxcbi5sYXJnZS5pbmFjdGl2ZSB7XFxyXFxuICBoZWlnaHQ6IDk1cHg7XFxyXFxufVxcclxcblxcclxcbi5sYXJnZSBoMiB7XFxyXFxuICBjb2xvcjogIzFBMUYyMjtcXHJcXG4gIHdpZHRoOiAyNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxhcmdlIC5icnVzaF9zdHJva2Uge1xcclxcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxyXFxufVxcclxcblxcclxcbi5sYXJnZSAuYnJ1c2hfc3Ryb2tlPmltZzpudGgtb2YtdHlwZSgyKSB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBsZWZ0OiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubGFyZ2UgLmJydXNoX3N0cm9rZT5pbWc6bnRoLW9mLXR5cGUoMykge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG4gIHRvcDogMzBweDtcXHJcXG4gIGxlZnQ6IC0xNjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxhcmdlIC5icnVzaF9zdHJva2U+aW1nOm50aC1vZi10eXBlKDQpIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHRvcDogMzBweDtcXHJcXG4gIGxlZnQ6IC0xNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxhcmdlIC5kaXNoX2NvbnRlbnQge1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4ubGFyZ2UgLmRpc2hfY29udGVudDpudGgtb2YtdHlwZSgyKSB7XFxyXFxuICBtYXJnaW4tdG9wOiA0NXB4O1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4ubGFyZ2UgLmRpc2gge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBtYXJnaW4tdG9wOiAwcHg7XFxyXFxufVxcclxcblxcclxcbi5sYXJnZSAucHJpY2Uge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgcmlnaHQ6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbi5sYXJnZSAuZGlzaF9jb250ZW50IGltZyB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICByaWdodDogODBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZyaWVkX2Nnc2FuZCB7XFxyXFxuICBoZWlnaHQ6IDQ2MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZnJpZWRfY2dzYW5kIC5icnVzaF9zdHJva2U+aW1nOm50aC1vZi10eXBlKDQpIHtcXHJcXG4gIGxlZnQ6IC0xMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZyaWVkX2Nnc2FuZCAuc3VidGV4dCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5mcmllZF9jZ2J1cmdlciB7XFxyXFxuICBoZWlnaHQ6IDM1NXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc21vb3RoaWVzLFxcclxcbi5tb2NrdGFpbHMsXFxyXFxuLnRoaWNrX3NoYWtlIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNGMDlCMUU7XFxyXFxuICBoZWlnaHQ6IDQ1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uc21vb3RoaWVzIGltZzpsYXN0LW9mLXR5cGUsXFxyXFxuLm1vY2t0YWlscyBpbWc6bGFzdC1vZi10eXBlLFxcclxcbi50aGlja19zaGFrZSBpbWc6bGFzdC1vZi10eXBlIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHJpZ2h0OiAxMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnNtb290aGllcyAuZGlzaF9jb250ZW50IGltZyxcXHJcXG4ubW9ja3RhaWxzIC5kaXNoX2NvbnRlbnQgaW1nLFxcclxcbi50aGlja19zaGFrZSAuZGlzaF9jb250ZW50IGltZyB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICByaWdodDogODBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNtb290aGllcyBoMixcXHJcXG4ubW9ja3RhaWxzIGgyLFxcclxcbi50aGlja19zaGFrZSBoMiB7XFxyXFxuICBjb2xvcjogI0VDMUEyMztcXHJcXG59XFxyXFxuXFxyXFxuLm1vY2t0YWlscyB7XFxyXFxuICBoZWlnaHQ6IDUxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGhpY2tfc2hha2Uge1xcclxcbiAgaGVpZ2h0OiAzNTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvZmZlZSxcXHJcXG4ucGl6emEsXFxyXFxuLnBhc3RhLFxcclxcbi5uYWNob3MsXFxyXFxuLnRhY29zIHtcXHJcXG4gIGhlaWdodDogMTYwcHg7XFxyXFxuICBiYWNrZ3JvdW5kOiAjMkUyMjIyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29mZmVlIGgyLFxcclxcbi5waXp6YSBoMixcXHJcXG4ucGFzdGEgaDIsXFxyXFxuLm5hY2hvcyBoMixcXHJcXG4udGFjb3MgaDIge1xcclxcbiAgY29sb3I6ICMxMTEyMTQ7XFxyXFxufVxcclxcblxcclxcbi5jb2ZmZWUgLmJydXNoX3N0cm9rZSBpbWc6bGFzdC1vZi10eXBlIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGxlZnQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5waXp6YSB7XFxyXFxuICBoZWlnaHQ6IDM1NXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucGl6emEgLmJydXNoX3N0cm9rZSBpbWc6Zmlyc3Qtb2YtdHlwZSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBsZWZ0OiAtMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBhc3RhIHtcXHJcXG4gIGhlaWdodDogMTMwcHg7XFxyXFxufVxcclxcblxcclxcbi5uYWNob3Mge1xcclxcbiAgaGVpZ2h0OiAxNjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhY29zIHtcXHJcXG4gIGhlaWdodDogMTMwcHg7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5vcmRlciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDBweDtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogMzV2aDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCAwJSwgdHJhbnNwYXJlbnQgNzklLCAjMTMxNzE5IDc5JSwgIzEzMTcxOSA4MCUsIHdoaXRlIDgwJSk7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweCAyNXB4IDAgMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgdHJhbnNpdGlvbjogLjNzO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzMDBweCk7XHJcbn1cclxuXHJcbi5vcmRlci5hY3RpdmUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XHJcbn1cclxuXHJcbi5vcmRlciAuY2FydCB7XHJcbiAgICB3aWR0aDogOTV2dztcclxuICAgIGhlaWdodDogMjZ2aDtcclxuICAgIGJhY2tncm91bmQ6ICMxMzE3MTk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcbn1cclxuXHJcbi5vcmRlciA+IGJ1dHRvbiB7XHJcbiAgICB3aWR0aDogNjB2dztcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGNvbG9yOiAjMTMxNzE5O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogMzVweDtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkICMxMzE3MTk7XHJcbn1cclxuXHJcbi5jYXJ0IC5jYXJ0X2l0ZW0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogNzVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogMCA1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi5jYXJ0IHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4uY2FydCAuaXRlbSB7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuXHJcbi5jYXJ0IGJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxufVxyXG5cclxuLmNhcnQgLmRlY3JlYXNlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGluc2V0OiAzNXB4IDEwNXB4O1xyXG59XHJcblxyXG4uY2FydCAuaW5jcmVhc2Uge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaW5zZXQ6IDM1cHggMTgwcHg7XHJcbn1cclxuXHJcbi5jYXJ0IC5xdWFudGl0eSB7XHJcbiAgICB3aWR0aDogMzVweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgY29sb3I6ICMxMzE3MTk7XHJcbiAgICBwYWRkaW5nOiA1cHggN3B4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaW5zZXQ6IDM1cHggMTQwcHg7XHJcbn1cclxuXHJcbi5jYXJ0IC5pdGVtX3ByaWNlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgdG9wOiA0MHB4O1xyXG59XHJcblxyXG4ub3JkZXIgLnRvdGFsIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMzE3MTk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAxMHB4O1xyXG4gICAgYm90dG9tOiAxMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2Zvb3Rlci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0lBQ1osaUdBQWlHO0lBQ2pHLFVBQVU7SUFDViw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixjQUFjO0lBQ2QsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsU0FBUztBQUNiOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIub3JkZXIge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIGJvdHRvbTogMHB4O1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIGhlaWdodDogMzV2aDtcXHJcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50IDAlLCB0cmFuc3BhcmVudCA3OSUsICMxMzE3MTkgNzklLCAjMTMxNzE5IDgwJSwgd2hpdGUgODAlKTtcXHJcXG4gICAgei1pbmRleDogMjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweCAyNXB4IDAgMDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgIHRyYW5zaXRpb246IC4zcztcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDMwMHB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLm9yZGVyLmFjdGl2ZSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xcclxcbn1cXHJcXG5cXHJcXG4ub3JkZXIgLmNhcnQge1xcclxcbiAgICB3aWR0aDogOTV2dztcXHJcXG4gICAgaGVpZ2h0OiAyNnZoO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjMTMxNzE5O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxyXFxufVxcclxcblxcclxcbi5vcmRlciA+IGJ1dHRvbiB7XFxyXFxuICAgIHdpZHRoOiA2MHZ3O1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIGNvbG9yOiAjMTMxNzE5O1xcclxcbiAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgbGVmdDogMzVweDtcXHJcXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzEzMTcxOTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcnQgLmNhcnRfaXRlbSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgaGVpZ2h0OiA3NXB4O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBwYWRkaW5nOiAwIDVweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FydCBzcGFuIHtcXHJcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FydCAuaXRlbSB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcnQgYnV0dG9uIHtcXHJcXG4gICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcnQgLmRlY3JlYXNlIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBpbnNldDogMzVweCAxMDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcnQgLmluY3JlYXNlIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBpbnNldDogMzVweCAxODBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcnQgLnF1YW50aXR5IHtcXHJcXG4gICAgd2lkdGg6IDM1cHg7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgY29sb3I6ICMxMzE3MTk7XFxyXFxuICAgIHBhZGRpbmc6IDVweCA3cHg7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgaW5zZXQ6IDM1cHggMTQwcHg7XFxyXFxufVxcclxcblxcclxcbi5jYXJ0IC5pdGVtX3ByaWNlIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICByaWdodDogMTBweDtcXHJcXG4gICAgdG9wOiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ub3JkZXIgLnRvdGFsIHtcXHJcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxNzE5O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGxlZnQ6IDEwcHg7XFxyXFxuICAgIGJvdHRvbTogMTBweDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBOYXZiYXIgKi9cclxubmF2IHtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogNzVweDtcclxuICAgIGJhY2tncm91bmQ6ICNlMGIxMWQ7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBpbnNldDogMHB4O1xyXG4gICAgLyogYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7ICovXHJcbiAgICAvKiBmaWx0ZXI6IGJsdXIocHgpOyAqL1xyXG4gICAgei1pbmRleDogMjtcclxufVxyXG5cclxubmF2IGltZyB7XHJcbiAgICB3aWR0aDogNzBweDtcclxuICAgIGhlaWdodDogNzBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDNweCAjRTVCMjIxO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbn1cclxuXHJcbm5hdiBoMSB7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBpbnNldDogLTIwcHggMTE1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzVweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XHJcbn1cclxuXHJcbm5hdiAudGVuIHtcclxuICAgIGZvbnQtc2l6ZTogNDJweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGluc2V0OiAtMXB4IDIxMHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9uYXZiYXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLFdBQVc7QUFDWDtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixVQUFVO0lBQ1YsZ0NBQWdDO0lBQ2hDLHNCQUFzQjtJQUN0QixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1DQUFtQztJQUNuQyxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBOYXZiYXIgKi9cXHJcXG5uYXYge1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIGhlaWdodDogNzVweDtcXHJcXG4gICAgYmFja2dyb3VuZDogI2UwYjExZDtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBpbnNldDogMHB4O1xcclxcbiAgICAvKiBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTsgKi9cXHJcXG4gICAgLyogZmlsdGVyOiBibHVyKHB4KTsgKi9cXHJcXG4gICAgei1pbmRleDogMjtcXHJcXG59XFxyXFxuXFxyXFxubmF2IGltZyB7XFxyXFxuICAgIHdpZHRoOiA3MHB4O1xcclxcbiAgICBoZWlnaHQ6IDcwcHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDNweCAjRTVCMjIxO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgaDEge1xcclxcbiAgICBmb250LXNpemU6IDI4cHg7XFxyXFxuICAgIHdpZHRoOiAxNTBweDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGluc2V0OiAtMjBweCAxMTVweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDM1cHg7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XFxyXFxufVxcclxcblxcclxcbm5hdiAudGVuIHtcXHJcXG4gICAgZm9udC1zaXplOiA0MnB4O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgaW5zZXQ6IC0xcHggMjEwcHg7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2JvZHkuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ib2R5LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9mb290ZXIuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9mb290ZXIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25hdmJhci5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25hdmJhci5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8vIEltcG9ydCBjc3MgZmlsZXNcclxuaW1wb3J0IFwiLi9jc3MvYm9keS5jc3NcIjtcclxuaW1wb3J0IFwiLi9jc3MvbmF2YmFyLmNzc1wiO1xyXG5pbXBvcnQgXCIuL2Nzcy9mb290ZXIuY3NzXCI7XHJcblxyXG4vLyBJbXBvcnQgaW1hZ2VzXHJcbmltcG9ydCBcIi4vaW1hZ2VzL2dyZXlpc2hfc3Ryb2tlLnN2Z1wiO1xyXG5pbXBvcnQgXCIuL2ltYWdlcy9ibGFja19zdHJva2Uuc3ZnXCI7XHJcbmltcG9ydCBcIi4vaW1hZ2VzL3doaXRlX3N0cm9rZS5zdmdcIjtcclxuaW1wb3J0IFwiLi9pbWFnZXMvcGx1cy5zdmdcIjtcclxuaW1wb3J0IFwiLi9pbWFnZXMvbG9nby5wbmdcIjtcclxuaW1wb3J0IFwiLi9pbWFnZXMvZGVzY3JpcHRpb24ucG5nXCI7XHJcblxyXG4vLyBDYWxsaW5nIGh0bWwgZWxlbWVudHNcclxuY29uc3Qgc2VjdGlvbl9uYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zZWN0aW9uX25hbWVcIik7XHJcbmNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNlY3Rpb25cIik7XHJcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcclxubGV0IHBsdXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFkZF9kaXNoXCIpO1xyXG5jb25zdCBjYXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJ0XCIpO1xyXG5sZXQgaW5jcmVhc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmluY3JlYXNlXCIpO1xyXG5sZXQgZGVjcmVhc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRlY3JlYXNlXCIpO1xyXG5sZXQgcXVhbnRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnF1YW50aXR5XCIpO1xyXG5jb25zdCBvcmRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxhY2Vfb3JkZXJcIik7XHJcbmNvbnN0IHRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YWJsZVwiKTtcclxuY29uc3QgdG51bSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudF9udW1cIik7XHJcbmxldCB0YWJsZV9udW0gPSAxO1xyXG5cclxuLy8gZGlzaGVzIGFuZCBkcmlua3NcclxuY29uc3QgaXRlbXMgPSBbXHJcbiAgW1xyXG4gICAgXCJOdXR0byBCcm93bmllXCIsXHJcbiAgICBcIkNoZWVzZSBDYWtlXCIsXHJcbiAgICBcIkJ1dHRlciBTY290Y2hcIixcclxuICAgIFwiQ2hvY28gVHJhYmFsXCIsXHJcbiAgICBcIlB1dHR1IEljZSBDcmVhbVwiLFxyXG4gICAgXCJTaGF3YXJtYSBJY2UgQ3JlYW1cIixcclxuICAgIFwiU2x6emxpbmcgQnJvd25pZVwiLFxyXG4gICAgXCJIYXp6bGUgTnV0IEJyb3duaVwiLFxyXG4gIF0sXHJcbiAgW1xyXG4gICAgXCJTYWx0ZWQgRnJlbmNoIEZyaWVzXCIsXHJcbiAgICBcIk1hc2FsYSBGcmVuY2ggRnJpZXNcIixcclxuICAgIFwiVGFuZG9vcmkgRnJlbmNoIEZyaWVzXCIsXHJcbiAgICBcIkNoZWVzeSBGcmVuY2ggRnJpZXNcIixcclxuICAgIFwiVmVnIE51Z2dldHNcIixcclxuICAgIFwiU3dlZXQgQ29yblwiLFxyXG4gICAgXCJDaGlja2VuIENoZWVzZSBTaG90c1wiLFxyXG4gICAgXCJDaGlja2VuIEZpbmdlcnMgKDhQY3MpXCIsXHJcbiAgICBcIkNoaWNrZW4gTnVnZ2V0cyAoOFBjcylcIixcclxuICAgIFwiVmVnIENoZWV6ZSBTaG90c1wiLFxyXG4gICAgXCJWZWcgRmluZ2Vyc1wiLFxyXG4gICAgXCJQb3RhdG8gV2VkZ2VzXCIsXHJcbiAgICBcIlNhbHRlZCBmcmFuY2ggZmlyZXNcIixcclxuICBdLFxyXG4gIFtcclxuICAgIFwiTnV0dG8gQ29mZmVlIExvYWRlZFwiLFxyXG4gICAgXCJTdHJhd2JlcnJ5IE1vbnN0ZXJcIixcclxuICAgIFwiTWFuZ28gQnVyc3RcIixcclxuICAgIFwiQnViYmxlZ3VtIEJsYXN0XCIsXHJcbiAgICBcIk1peGJlcnJ5IENoZWVzZSBCbGFzdFwiLFxyXG4gICAgXCJNYW5nbyBDaGVlc2UgQmxhc3RcIixcclxuICAgIFwiQnV0dGVyIFNjb3RjaFwiLFxyXG4gICAgXCJDaG9jb2xhdGUgT3JlYVwiLFxyXG4gICAgXCJDaGVlc2UgQ2FrZSBGcnVpdFwiLFxyXG4gICAgXCJDb2xkIENvZmZlZVwiLFxyXG4gICAgXCJIYXplbG51dCBCcm93bmllIFNoYWtlXCIsXHJcbiAgICBcIk51dHRlbGxhIEJyb3duaWVcIixcclxuICAgIFwiSG90IENob2NvbGF0ZVwiLFxyXG4gICAgXCJCbHVlIEJlcnJ5XCIsXHJcbiAgICBcIkNob2NvbGF0ZSBDb2xkIENvZmZlZVwiLFxyXG4gICAgXCJDYXJhbWVsIENvbGQgQ29mZmVlXCIsXHJcbiAgICBcIkhhemVsbnV0IFNoYWtlXCIsXHJcbiAgICBcIkRyeSBGcnVpdCBTaGFrZVwiLFxyXG4gICAgXCJDaG9jbyBBbG1vbmRcIixcclxuICBdLFxyXG4gIFtcclxuICAgIFwiTm9uIFZlZyBDaGVlc2UgTG9hZGVkXCIsXHJcbiAgICBcIlZlZyBDaGVlc2UgTG9hZGVkXCIsXHJcbiAgICBcIlRhbmRvb3JpIE1heW8gVmVnXCIsXHJcbiAgICBcIlBhbmVlciBNYXlvXCIsXHJcbiAgICBcIlRhbmRvb3JpIE1heW8gUGFuZWVyXCIsXHJcbiAgICBcIkNyaXNweSBDaGlja2VuXCIsXHJcbiAgICBcIlRhbmRvb3JpIE1heW8gQ2hpY2tlblwiLFxyXG4gICAgXCJWZWcgQ2hlZXNlIExvYWRlZFwiLFxyXG4gIF0sXHJcbiAgW1xyXG4gICAgXCJWZWcgQ2hlZXNlIFNhbmR3aWNoXCIsXHJcbiAgICBcIkZyaWVkIENoaWNrZW4gU2FuZHdpY2hcIixcclxuICAgIFwiUGFuZWVyIENoZWVzZSBTYW5kd2ljaFwiLFxyXG4gICAgXCJTY2hlendhbiBDaGlja2VuIFNhbmR3aWNoXCIsXHJcbiAgICBcIlRhbmRvb3JpIE1heW8gQ2hpY2tlblwiLFxyXG4gICAgXCJDaG9jb2xhdGUgU2FuZHdpY2hcIixcclxuICAgIFwiVmVnIFRhbmRvb3JpIE1heW8gU2FuZHdpY2hcIixcclxuICAgIFwiRWdnIENoZWVzZSBTYW5kd2ljaFwiLFxyXG4gICAgXCJNZXhpY2FuIFZlZyBDaGVlc2UgU2FuZHdpY2hcIixcclxuICAgIFwiTWV4aWNhbiBDaGlja2VuIENoZWVzZSAqU2FuZFwiLFxyXG4gICAgXCJUb21hdG8gQ2hpbGxpIENoZWVzZSBTYW5kd2ljaFwiLFxyXG4gIF0sXHJcbiAgW1xyXG4gICAgXCJGaXJlZCBDaGlja2VuIEJ1cmdlclwiLFxyXG4gICAgXCJDbHViIDEwIENoZWVzeSBUb3dlciBCdXJnZXJcIixcclxuICAgIFwiQ3Jpc3B5IENoaWNrZW4gQnVyZ2VyXCIsXHJcbiAgICBcIkNyaXNweSBWZWcgQnVyZ2VyXCIsXHJcbiAgICBcIkNyaXNweSBGcmllZCBDaGlja2VuXCIsXHJcbiAgICBcIktpbmcgRWdnIEJ1cmdlclwiLFxyXG4gICAgXCJNZXhpY2FuIFZlZyBDaGVlc2UgQnVyZ2VyXCIsXHJcbiAgICBcIkMxMEMgTWV4aWNhbiBDaGlja2VuIEJ1cmdlclwiLFxyXG4gIF0sXHJcbiAgW1xyXG4gICAgXCJXYXRlciBNZWxvblwiLFxyXG4gICAgXCJBcHBsZVwiLFxyXG4gICAgXCJQaW5lIEFwcGxlXCIsXHJcbiAgICBcIlBhcGF5YVwiLFxyXG4gICAgXCJNdXNrIE1lbG9uXCIsXHJcbiAgICBcIkJhbmFuYVwiLFxyXG4gICAgXCJCbGFjayBHcmFwZVwiLFxyXG4gICAgXCJHcmVlbiBHcmFwZVwiLFxyXG4gICAgXCJDaGlrdSAoU2Fwb3RvKVwiLFxyXG4gICAgXCJQb21vZ3JlbmF0ZVwiLFxyXG4gICAgXCJTdHJhdyBCZXJyeVwiLFxyXG4gICAgXCJOdXQgQ2FzZVwiLFxyXG4gIF0sXHJcbiAgW1xyXG4gICAgXCJNaW50IE1vaml0b1wiLFxyXG4gICAgXCJCbHVlIEN1cmFjYW9cIixcclxuICAgIFwiR3JlZW4gQXBwbGUgQ3J1c2hcIixcclxuICAgIFwiUGFhbiBNb2ppdG9cIixcclxuICAgIFwiTHljaGVlIE1vaml0b1wiLFxyXG4gICAgXCJXYXRlcm1lbG9uXCIsXHJcbiAgICBcIkVuZXJnaXplclwiLFxyXG4gICAgXCJCbHVlIE9jZWFuXCIsXHJcbiAgICBcIk1hc2FsYSBMZW1vbmFkZVwiLFxyXG4gICAgXCJJY2UgVGVhXCIsXHJcbiAgICBcIkJ1YmJsZSBHdW0gTW9qaXRvXCIsXHJcbiAgICBcIkJsYWNrIEN1cnJhbnRcIixcclxuICAgIFwiTWFsdCBNb2ppdG8oTm9uLUFsY29ob2xpYylcIixcclxuICAgIFwiUnVtIE1vaml0byhOb24tQWxjb2hvbGljKVwiLFxyXG4gIF0sXHJcbiAgW1xyXG4gICAgXCJCdXR0ZXIgU2NvdGNoXCIsXHJcbiAgICBcIkJlbGdpdW0gRGFyayBDaG9jb2xhdGVcIixcclxuICAgIFwiTWFuZ28gVGhpY2sgU2hha2VcIixcclxuICAgIFwiT3JlbyBUaGljayBTaGFrZVwiLFxyXG4gICAgXCJTdHJhYmVycnkgVGhpY2sgU2hha2VcIixcclxuICAgIFwiS2l0a2F0XCIsXHJcbiAgICBcIlJlZCBWZWx2ZXQgVGhpY2sgU2hha2VcIixcclxuICAgIFwiQ2hvY28gVGhpY2sgU2hhcmVcIixcclxuICAgIFwiTnV0dGVsbGEgVGhpY2sgU2hha2VcIixcclxuICBdLFxyXG4gIFtcIkJsYWNrIENvZmZlZVwiLCBcIkNhcHVjaW5vIENvZmZlZVwiLCBcIkVzcHJlc3NvXCJdLFxyXG4gIFtcclxuICAgIFwiQ2hlZXNlIEdhcmxpYyBCcmVhZFwiLFxyXG4gICAgXCJHYXJsaWMgQnJlYWRcIixcclxuICAgIFwiQ2hpY2tlbiBQaXp6YVwiLFxyXG4gICAgXCJDb3JuIFBpenphXCIsXHJcbiAgICBcIlBhbm5lciBQaXp6YVwiLFxyXG4gICAgXCJUYW5kb29yaSBDaGlja2VuIFBpenphXCIsXHJcbiAgICBcIkNoZWV6ZSBMb2FkZWQgUGl6emFcIixcclxuICAgIFwiTm9uIFZlZyBMb2FkZWQgUGl6emFcIixcclxuICAgIFwiVmVnIExvYWRlZCBQaXp6YVwiLFxyXG4gIF0sXHJcbiAgW1wiQ2hpY2tlbiBBbGZyZWRvXCIsIFwiVmVnIEFsZnJlZG9cIl0sXHJcbiAgW1wiVGFuZG9vcmkgTmFjaG9zXCIsIFwiQ2hlZXNlIE5hY2hvc1wiLCBcIk5hY2hvc1wiXSxcclxuICBbXCJDaGlja2VuIFRhY29zXCIsIFwiVmVnIENoZWVzZSBUYWNvc1wiXSxcclxuXTtcclxuXHJcbmNvbnN0IHByaWNlcyA9IFtcclxuICBbXCIxMzkvLVwiLCBcIjEzOS8tXCIsIFwiMTM5Ly1cIiwgXCIxMzkvLVwiLCBcIjI5OS8tXCIsIFwiMzk5Ly1cIiwgXCIxOTkvLVwiLCBcIjI5OS8tXCJdLFxyXG4gIFtcclxuICAgIFwiMTI5Ly1cIixcclxuICAgIFwiMTI5Ly1cIixcclxuICAgIFwiMTY5Ly1cIixcclxuICAgIFwiMTk5Ly1cIixcclxuICAgIFwiMTc5Ly1cIixcclxuICAgIFwiOTkvLVwiLFxyXG4gICAgXCIxOTkvLVwiLFxyXG4gICAgXCIxODkvLVwiLFxyXG4gICAgXCIxOTkvLVwiLFxyXG4gICAgXCIxOTkvLVwiLFxyXG4gICAgXCIxOTkvLVwiLFxyXG4gICAgXCIxMjkvLVwiLFxyXG4gICAgXCIxMjkvLVwiLFxyXG4gIF0sXHJcbiAgW1xyXG4gICAgXCIxNjkvLVwiLFxyXG4gICAgXCIxNjkvLVwiLFxyXG4gICAgXCIxNzkvLVwiLFxyXG4gICAgXCIxNzkvLVwiLFxyXG4gICAgXCIxNjkvLVwiLFxyXG4gICAgXCIxNzkvLVwiLFxyXG4gICAgXCIxNjkvLVwiLFxyXG4gICAgXCIxNzkvLVwiLFxyXG4gICAgXCIxNzkvLVwiLFxyXG4gICAgXCIxOTkvLVwiLFxyXG4gICAgXCIxOTkvLVwiLFxyXG4gICAgXCIxOTkvLVwiLFxyXG4gICAgXCIxNDkvLVwiLFxyXG4gICAgXCIxOTkvLVwiLFxyXG4gICAgXCIyMDkvLVwiLFxyXG4gICAgXCIyMTkvLVwiLFxyXG4gICAgXCIxOTkvLVwiLFxyXG4gICAgXCIxOTkvLVwiLFxyXG4gICAgXCIxNjkvLVwiLFxyXG4gIF0sXHJcbiAgW1wiMTc5Ly1cIiwgXCIxNjkvLVwiLCBcIjE3OS8tXCIsIFwiMTg5Ly1cIiwgXCIxODkvLVwiLCBcIjE5OS8tXCIsIFwiMTg5Ly1cIiwgXCIxNzkvLVwiXSxcclxuICBbXHJcbiAgICBcIjEzOS8tXCIsXHJcbiAgICBcIjE0OS8tXCIsXHJcbiAgICBcIjEzOS8tXCIsXHJcbiAgICBcIjE2OS8tXCIsXHJcbiAgICBcIjE1OS8tXCIsXHJcbiAgICBcIjEzOS8tXCIsXHJcbiAgICBcIjE2OS8tXCIsXHJcbiAgICBcIjE0OS8tXCIsXHJcbiAgICBcIjE0OS8tXCIsXHJcbiAgICBcIjE5OS8tXCIsXHJcbiAgICBcIjE1OS8tXCIsXHJcbiAgXSxcclxuICBbXHJcbiAgICBcIjE2OS8tXCIsXHJcbiAgICBcIjE5OS8tXCIsXHJcbiAgICBcIjE0OS8tXCIsXHJcbiAgICBcIjEzOS8tXCIsXHJcbiAgICBcIjE0OS8tXCIsXHJcbiAgICBcIjE0OS8tXCIsXHJcbiAgICBcIjE4OS8tXCIsXHJcbiAgICBcIjE5OS8tXCIsXHJcbiAgICBcIjM0OS8tXCIsXHJcbiAgXSxcclxuICBbXHJcbiAgICBcIjE5OS8tXCIsXHJcbiAgICBcIjIxOS8tXCIsXHJcbiAgICBcIjE5OS8tXCIsXHJcbiAgICBcIjE5OS8tXCIsXHJcbiAgICBcIjIwOS8tXCIsXHJcbiAgICBcIjE5OS8tXCIsXHJcbiAgICBcIjE5OS8tXCIsXHJcbiAgICBcIjE5OS8tXCIsXHJcbiAgICBcIjIxOS8tXCIsXHJcbiAgICBcIjIxOS8tXCIsXHJcbiAgICBcIjI0OS8tXCIsXHJcbiAgICBcIjI0OS8tXCIsXHJcbiAgXSxcclxuICBbXHJcbiAgICBcIjEyOS8tXCIsXHJcbiAgICBcIjEyOS8tXCIsXHJcbiAgICBcIjEyOS8tXCIsXHJcbiAgICBcIjEyOS8tXCIsXHJcbiAgICBcIjEyOS8tXCIsXHJcbiAgICBcIjEyOS8tXCIsXHJcbiAgICBcIjE0OS8tXCIsXHJcbiAgICBcIjE0OS8tXCIsXHJcbiAgICBcIjEyOS8tXCIsXHJcbiAgICBcIjEyOS8tXCIsXHJcbiAgICBcIjEyOS8tXCIsXHJcbiAgICBcIjE0OS8tXCIsXHJcbiAgICBcIjE0OS8tXCIsXHJcbiAgICBcIjE0OS8tXCIsXHJcbiAgXSxcclxuICBbXHJcbiAgICBcIjI5OS8tXCIsXHJcbiAgICBcIjI5OS8tXCIsXHJcbiAgICBcIjI5OS8tXCIsXHJcbiAgICBcIjI5OS8tXCIsXHJcbiAgICBcIjI5OS8tXCIsXHJcbiAgICBcIjI5OS8tXCIsXHJcbiAgICBcIjI5OS8tXCIsXHJcbiAgICBcIjI0OS8tXCIsXHJcbiAgICBcIjI0OS8tXCIsXHJcbiAgXSxcclxuICBbXCI5OS8tXCIsIFwiMTQ5Ly1cIiwgXCIxMjkvLVwiXSxcclxuICBbXHJcbiAgICBcIjE5OS8tXCIsXHJcbiAgICBcIjk5Ly1cIixcclxuICAgIFwiMTk5Ly1cIixcclxuICAgIFwiMjM5Ly1cIixcclxuICAgIFwiMjM5Ly1cIixcclxuICAgIFwiMjY5Ly1cIixcclxuICAgIFwiMTk5Ly1cIixcclxuICAgIFwiMjk5Ly1cIixcclxuICAgIFwiMTg5Ly1cIixcclxuICAgIFwiNTQ5Ly1cIixcclxuICBdLFxyXG4gIFtcIjI5OS8tXCIsIFwiMjY5Ly1cIl0sXHJcbiAgW1wiMjE5Ly1cIiwgXCIxOTkvLVwiLCBcIjI0OSAvLVwiXSxcclxuICBbXCIxNDkvLVwiLCBcIjEzOS8tXCJdLFxyXG5dO1xyXG5cclxuLy8gRnVuY3Rpb25zXHJcbmNvbnN0IGVsID0gKCgpID0+IHtcclxuICBjb25zdCBzZWxlY3RfdGFibGUgPSAoaSkgPT4ge1xyXG4gICAgaWYgKGkgPT0gNikge1xyXG4gICAgICB0YWJsZV9udW0gPSBwcm9tcHQoXCJQbGVhc2UgZW50ZXIgeW91ciBuYW1lXCIpO1xyXG4gICAgICBpZiAodGFibGVfbnVtID09IFwiXCIpIHtcclxuICAgICAgICByZXNldCgpO1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgICB9XHJcbiAgICAgIHRhYmxlX251bSA9IHRhYmxlX251bS50b1N0cmluZygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGFibGVfbnVtID0gaSArIDE7XHJcbiAgICAgIHRhYmxlX251bSA9IHBhcnNlSW50KHRhYmxlX251bSk7XHJcbiAgICB9XHJcbiAgICBtYWluLmNsYXNzTGlzdC5yZW1vdmUoXCJpbmFjdGl2ZVwiKTtcclxuICAgIHRhYmxlLmNsYXNzTGlzdC5hZGQoXCJpbmFjdGl2ZVwiKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjcmVhdGVNZW51ID0gKCkgPT4ge1xyXG4gICAgbGV0IGsgPSA1O1xyXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAxNDsgaisrKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXNbal0ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBkZXNlcnRzID0gbWFpbi5jaGlsZE5vZGVzW2tdO1xyXG4gICAgICAgIGNvbnN0IGRpc2hfY29udGVudCA9IGRlc2VydHMuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSk7XHJcbiAgICAgICAgZGlzaF9jb250ZW50LmNsYXNzTGlzdC5hZGQoXCJkaXNoX2NvbnRlbnRcIik7XHJcbiAgICAgICAgZGlzaF9jb250ZW50LmlubmVySFRNTCA9IGBcclxuICAgICAgPHNwYW4gY2xhc3M9XCJkaXNoXCI+JHtpdGVtc1tqXVtpXX08L3NwYW4+XHJcbiAgICAgIDxpbWcgc3JjPVwiLi9pbWFnZXMvcGx1cy5zdmdcIiBjbGFzcz1cImFkZF9kaXNoXCIgYWx0PVwiYWRkIHRvIGNhcnRcIj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJwcmljZVwiPuKCuSR7cHJpY2VzW2pdW2ldfTwvc3Bhbj5gO1xyXG4gICAgICB9XHJcbiAgICAgIGsgKz0gMjtcclxuICAgICAgcGx1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYWRkX2Rpc2hcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZHJvcERvd24gPSAoaSkgPT4ge1xyXG4gICAgc2VjdGlvbltpXS5jbGFzc0xpc3QudG9nZ2xlKFwiaW5hY3RpdmVcIik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYWRkX3RvX2NhcnQgPSAoaSkgPT4ge1xyXG4gICAgbGV0IGRpc2hfbmFtZSA9IHBsdXNbaV0ucGFyZW50RWxlbWVudC5jaGlsZE5vZGVzWzFdLmlubmVySFRNTDtcclxuICAgIGxldCBwcmljZSA9IHBsdXNbaV0ubmV4dEVsZW1lbnRTaWJsaW5nLmlubmVySFRNTDtcclxuICAgIGlmIChpIDwgMTEpIHtcclxuICAgICAgZGlzaF9uYW1lID1cclxuICAgICAgICBwbHVzW2ldLnBhcmVudEVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZy5pbm5lckhUTUwgK1xyXG4gICAgICAgIFwiIFwiICtcclxuICAgICAgICBkaXNoX25hbWU7XHJcbiAgICB9XHJcbiAgICBpZiAoaSA+PSAxMiAmJiBpIDw9IDE2KSB7XHJcbiAgICAgIHByaWNlID0gcGx1c1tpXS5uZXh0RWxlbWVudFNpYmxpbmcubmV4dEVsZW1lbnRTaWJsaW5nLmlubmVySFRNTC5yZXBsYWNlKFxyXG4gICAgICAgIC9bXjAtOV0vZyxcclxuICAgICAgICBcIlwiXHJcbiAgICAgICk7XHJcbiAgICAgIHByaWNlID0gYCR7cHJpY2V9Ly1gO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZGlzaF9wcmljZSA9IHBsdXNbaV0ubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG4gICAgaWYgKCFjaGVja19kdXBsaWNhdGUoZGlzaF9uYW1lKSkge1xyXG4gICAgICBjb25zdCBkaXNoID0gY2FydC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKTtcclxuICAgICAgZGlzaC5jbGFzc0xpc3QuYWRkKFwiY2FydF9pdGVtXCIpO1xyXG4gICAgICBkaXNoLmlubmVySFRNTCA9IGBcclxuICAgIDxzcGFuIGNsYXNzPVwiaXRlbVwiPiR7ZGlzaF9uYW1lfTwvc3Bhbj5cclxuICAgIDxidXR0b24gY2xhc3M9XCJpbmNyZWFzZVwiPis8L2J1dHRvbj5cclxuICAgIDxpbnB1dCBjbGFzcz1cInF1YW50aXR5XCIgbWluPVwiMFwiPlxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cImRlY3JlYXNlXCI+LTwvYnV0dG9uPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJpdGVtX3ByaWNlXCI+JHtwcmljZX08L3NwYW4+YDtcclxuICAgICAgZGlzaC5jaGlsZE5vZGVzWzVdLnZhbHVlID0gMTtcclxuICAgICAgY2FydF9pdGVtX3F1YW50aXR5KCk7XHJcbiAgICAgIHVwZGF0ZV9hbW91bnQoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBjaGVja19kdXBsaWNhdGUgPSAoc3RyKSA9PiB7XHJcbiAgICBpZiAoY2FydC5jaGlsZE5vZGVzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBjYXJ0LmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoY2FydC5jaGlsZE5vZGVzW2ldLmNoaWxkTm9kZXNbMV0uaW5uZXJIVE1MID09IHN0cikge1xyXG4gICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2FydF9pdGVtX3F1YW50aXR5ID0gKCkgPT4ge1xyXG4gICAgaW5jcmVhc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmluY3JlYXNlXCIpO1xyXG4gICAgZGVjcmVhc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRlY3JlYXNlXCIpO1xyXG4gICAgcXVhbnRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnF1YW50aXR5XCIpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbmNyZWFzZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpbmNyZWFzZVtpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIHF1YW50aXR5W2ldLnZhbHVlID0gcGFyc2VJbnQocXVhbnRpdHlbaV0udmFsdWUpICsgMTtcclxuICAgICAgICB1cGRhdGVfYW1vdW50KCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBkZWNyZWFzZVtpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGlmIChwYXJzZUludChxdWFudGl0eVtpXS52YWx1ZSkgPD0gMSkge1xyXG4gICAgICAgICAgY2FydC5yZW1vdmVDaGlsZChxdWFudGl0eVtpXS5wYXJlbnRFbGVtZW50KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcXVhbnRpdHlbaV0udmFsdWUgPSBwYXJzZUludChxdWFudGl0eVtpXS52YWx1ZSkgLSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICB1cGRhdGVfYW1vdW50KCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHVwZGF0ZV9hbW91bnQgPSAoKSA9PiB7XHJcbiAgICBsZXQgdG90YWwgPSAwO1xyXG4gICAgY29uc3QgcHJpY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLml0ZW1fcHJpY2VcIik7XHJcbiAgICBjb25zdCBxdWFudGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucXVhbnRpdHlcIik7XHJcbiAgICBjb25zdCBmaW5hbF9hbW91bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvdGFsXCIpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcXVhbnRpdHkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgbGV0IGRhdGEgPSBwYXJzZUludChwcmljZVtpXS5pbm5lckhUTUwucmVwbGFjZSgvW14wLTldL2csIFwiXCIpKTtcclxuICAgICAgbGV0IG51bSA9IHBhcnNlSW50KHF1YW50aXR5W2ldLnZhbHVlKTtcclxuICAgICAgdG90YWwgKz0gZGF0YSAqIG51bTtcclxuICAgIH1cclxuXHJcbiAgICBjaGVja19jYXJ0KCk7XHJcbiAgICBmaW5hbF9hbW91bnQuaW5uZXJIVE1MID0gYOKCuSR7dG90YWx9Ly1gO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNoZWNrX2NhcnQgPSAoKSA9PiB7XHJcbiAgICBpZiAoY2FydC5pbm5lckhUTUwubGVuZ3RoIDwgMzUpIHtcclxuICAgICAgY2FydC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjYXJ0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBwbGFjZV9vcmRlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IGZpbmFsX2Ftb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG90YWxcIik7XHJcbiAgICBsZXQgb3JkZXJfZGF0YSA9IGB0YWJsZSBuby9uYW1lOiAke3RhYmxlX251bX1cXG50b3RhbDogJHtmaW5hbF9hbW91bnQuaW5uZXJIVE1MfVxcblxcbmA7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhcnQuY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBsZXQgbmFtZSA9IGNhcnQuY2hpbGROb2Rlc1tpXS5jaGlsZE5vZGVzWzFdLmlubmVySFRNTDtcclxuICAgICAgbGV0IHF1YW50aXR5ID0gY2FydC5jaGlsZE5vZGVzW2ldLmNoaWxkTm9kZXNbNV0udmFsdWU7XHJcbiAgICAgIGxldCBwcmljZSA9IGNhcnQuY2hpbGROb2Rlc1tpXS5jaGlsZE5vZGVzWzldLmlubmVySFRNTDtcclxuICAgICAgb3JkZXJfZGF0YSArPSBgJHtuYW1lfVxcdCgke3F1YW50aXR5fSkgJHtwcmljZX1cXG5gO1xyXG4gICAgfVxyXG4gICAgc2VuZE1lc3NhZ2Uob3JkZXJfZGF0YSk7XHJcbiAgICBhbGVydChgb3JkZXIgc3VibWl0dGVkIGZvciB0YWJsZSAke3RhYmxlX251bX1gKTtcclxuICAgIHJlc2V0KCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2VuZE1lc3NhZ2UgPSAobWVzc2FnZSkgPT4ge1xyXG4gICAgY29uc3QgYm90VG9rZW4gPSBcIjYyMDc0OTU4NzE6QUFIemNPeTlYaFM4VDFHQ29kQ2dUS1NQSTVhUjc1MVVUQkVcIjtcclxuICAgIGNvbnN0IGNoYXRJZCA9IFwiLTEwMDE5NTc5NzcyOTlcIjtcclxuICAgIGNvbnN0IHBhcnNlTW9kZSA9IFwiTWFya2Rvd25cIjtcclxuXHJcbiAgICBmZXRjaChgaHR0cHM6Ly9hcGkudGVsZWdyYW0ub3JnL2JvdCR7Ym90VG9rZW59L3NlbmRNZXNzYWdlYCwge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBjaGF0X2lkOiBjaGF0SWQsXHJcbiAgICAgICAgdGV4dDogbWVzc2FnZSxcclxuICAgICAgICBwYXJzZV9tb2RlOiBwYXJzZU1vZGUsXHJcbiAgICAgIH0pLFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gc2VuZCBtZXNzYWdlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBzZW5kaW5nIG1lc3NhZ2U6XCIsIGVycm9yKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVzZXQgPSAoKSA9PiB7XHJcbiAgICBjbG9zZV9jYXJ0KCk7XHJcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoXCJpbmFjdGl2ZVwiKTtcclxuICAgIHRhYmxlLmNsYXNzTGlzdC5yZW1vdmUoXCJpbmFjdGl2ZVwiKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjbG9zZV9jYXJ0ID0gKCkgPT4ge1xyXG4gICAgY2FydC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgY2hlY2tfY2FydCgpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWN0aW9uLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHNlY3Rpb25baV0uY2xhc3NMaXN0LmFkZChcImluYWN0aXZlXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBzZWxlY3RfdGFibGUsXHJcbiAgICBjcmVhdGVNZW51LFxyXG4gICAgZHJvcERvd24sXHJcbiAgICBhZGRfdG9fY2FydCxcclxuICAgIGNhcnRfaXRlbV9xdWFudGl0eSxcclxuICAgIHBsYWNlX29yZGVyLFxyXG4gIH07XHJcbn0pKCk7XHJcblxyXG4vLyBFdmVudHNcclxuZm9yIChsZXQgaSA9IDA7IGkgPCBzZWN0aW9uX25hbWUubGVuZ3RoOyBpKyspIHtcclxuICBzZWN0aW9uX25hbWVbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGVsLmRyb3BEb3duKGkpO1xyXG4gIH0pO1xyXG59XHJcbmVsLmNyZWF0ZU1lbnUoKTtcclxuZm9yIChsZXQgaSA9IDA7IGkgPCBwbHVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgcGx1c1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgZWwuYWRkX3RvX2NhcnQoaSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmVsLmNhcnRfaXRlbV9xdWFudGl0eSgpO1xyXG5vcmRlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZWwucGxhY2Vfb3JkZXIpO1xyXG5mb3IgKGxldCBpID0gMDsgaSA8IHRudW0ubGVuZ3RoOyBpKyspIHtcclxuICB0bnVtW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBlbC5zZWxlY3RfdGFibGUoaSk7XHJcbiAgfSk7XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9