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
  height: 100vh;
  position: fixed;
  inset: 75px 0px;
  background: #cb7836;
  z-index: 2;
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
  width: 150px;
  height: 150px;
  margin-left: 25px;
  margin-top: 25px;
  font-size: 24px;
  color: #1A1F22;
}

.table .or {
  color: white;
  font-size: 24px;
  margin-top: 25px;
  display: block;
  width: 100vw;
  text-align: center;
}

.table button:last-of-type {
  margin-top: 10px;
  width: 325px;
  height: 75px;
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
}`, "",{"version":3,"sources":["webpack://./src/css/body.css"],"names":[],"mappings":"AAAA;EACE,uBAAuB;EACvB,sBAAsB;AACxB;;AAEA;;;GAGG;;AAEH;EACE,SAAS;AACX;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,eAAe;EACf,eAAe;EACf,mBAAmB;EACnB,UAAU;AACZ;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,iBAAiB;EACjB,gBAAgB;EAChB,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,gBAAgB;EAChB,cAAc;EACd,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,cAAc;EACd,SAAS;EACT,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,8BAA8B;EAC9B,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,gBAAgB;EAChB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,wBAAwB;AAC1B;;AAEA;EACE,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,UAAU;EACV,SAAS;EACT,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,SAAS;EACT,eAAe;EACf,kBAAkB;EAClB,UAAU;EACV,UAAU;EACV,YAAY;EACZ,UAAU;EACV,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,UAAU;EACV,eAAe;EACf,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;EAClB,yBAAyB;EACzB,YAAY;EACZ,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,oBAAoB;EACpB,kBAAkB;EAClB,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,eAAe;AACjB;;AAEA;;EAEE,iBAAiB;EACjB,kBAAkB;EAClB,gBAAgB;EAChB,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;;EAEE,WAAW;EACX,eAAe;EACf,kBAAkB;EAClB,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,WAAW;AACb;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,UAAU;AACZ;;AAEA;EACE,iBAAiB;EACjB,eAAe;EACf,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,WAAW;EACX,QAAQ;EACR,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,QAAQ;AACV;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,WAAW;EACX,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,SAAS;AACX;;AAEA;EACE,YAAY;EACZ,iBAAiB;EACjB,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,QAAQ;AACV;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,cAAc;EACd,YAAY;AACd;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,SAAS;EACT,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,iBAAiB;EACjB,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,SAAS;AACX;;AAEA;EACE,aAAa;AACf;;AAEA;;;EAGE,mBAAmB;EACnB,aAAa;AACf;;;AAGA;;;EAGE,kBAAkB;EAClB,YAAY;AACd;;;AAGA;;;EAGE,kBAAkB;EAClB,WAAW;AACb;;AAEA;;;EAGE,cAAc;AAChB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;;;;;EAKE,aAAa;EACb,mBAAmB;AACrB;;AAEA;;;;;EAKE,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,UAAU;AACZ;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,mBAAmB;AACrB","sourcesContent":["* {\r\n  font-family: sans-serif;\r\n  box-sizing: border-box;\r\n}\r\n\r\n/* @font-face {\r\n  font-family: \"BunjeeShade-regular\";\r\n  src: url(\"./BungeeShade-Regular.ttf\");\r\n} */\r\n\r\nbody {\r\n  margin: 0;\r\n}\r\n\r\n.table {\r\n  width: 100vw;\r\n  height: 100vh;\r\n  position: fixed;\r\n  inset: 75px 0px;\r\n  background: #cb7836;\r\n  z-index: 2;\r\n}\r\n\r\n.table.inactive {\r\n  display: none;\r\n}\r\n\r\n.table h2 {\r\n  font-size: 18px;\r\n  width: 100vw;\r\n  text-align: center;\r\n  color: white;\r\n}\r\n\r\n.table button {\r\n  width: 150px;\r\n  height: 150px;\r\n  margin-left: 25px;\r\n  margin-top: 25px;\r\n  font-size: 24px;\r\n  color: #1A1F22;\r\n}\r\n\r\n.table .or {\r\n  color: white;\r\n  font-size: 24px;\r\n  margin-top: 25px;\r\n  display: block;\r\n  width: 100vw;\r\n  text-align: center;\r\n}\r\n\r\n.table button:last-of-type {\r\n  margin-top: 10px;\r\n  width: 325px;\r\n  height: 75px;\r\n}\r\n\r\nmain {\r\n  height: 1000px;\r\n  margin: 0;\r\n  margin-top: 75px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  height: fit-content;\r\n  overflow: hidden;\r\n}\r\n\r\nmain.inactive {\r\n  display: none;\r\n}\r\n\r\n.section {\r\n  position: relative;\r\n  transition: 0.4s;\r\n}\r\n\r\n.section.inactive {\r\n  height: 60px;\r\n  overflow: hidden;\r\n}\r\n\r\n.fried_chicken {\r\n  width: 100vw;\r\n  height: 670px;\r\n  overflow: hidden;\r\n  background: #cb7836;\r\n  position: realtive;\r\n}\r\n\r\n.section_name {\r\n  cursor: pointer;\r\n}\r\n\r\n.brush_stroke {\r\n  display: flex;\r\n  align-items: center;\r\n  height: 50px;\r\n  overflow: hidden;\r\n}\r\n\r\n.brush_stroke img {\r\n  width: 150px;\r\n  height: 200px;\r\n  transform: rotate(90deg);\r\n}\r\n\r\n.brush_stroke img:nth-of-type(2) {\r\n  position: relative;\r\n  right: 50px;\r\n}\r\n\r\n.section_name>.subtext {\r\n  width: 100px;\r\n  position: absolute;\r\n  right: 0px;\r\n  top: 30px;\r\n  color: white;\r\n  font-size: 14px;\r\n}\r\n\r\n.section_name h2 {\r\n  height: 30px;\r\n  margin: 0;\r\n  font-size: 22px;\r\n  position: absolute;\r\n  inset: 0px;\r\n  z-index: 1;\r\n  color: white;\r\n  left: 20px;\r\n  top: 17px;\r\n}\r\n\r\n.fried_chicken .items {\r\n  position: absolute;\r\n  top: 65px;\r\n  left: 15px;\r\n  font-size: 16px;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.fried_chicken .item {\r\n  width: fit-content;\r\n  border: 2px solid #231f1e;\r\n  padding: 3px;\r\n  border-radius: 5px;\r\n  font-weight: bold;\r\n  font-size: 18px;\r\n}\r\n\r\n.fried_chicken .item:nth-of-type(2) {\r\n  margin-top: 120px;\r\n}\r\n\r\n.fried_chicken .content {\r\n  font-size: 16px;\r\n  font-weight: bold;\r\n  padding-top: 10px;\r\n}\r\n\r\n.section .dish_content {\r\n  width: 90vw;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  margin-top: 5px;\r\n  color: #231f1e;\r\n}\r\n\r\n.section .dish_content:first-of-type {\r\n  margin-top: 12px;\r\n}\r\n\r\n.section .dish {\r\n  padding: 3px;\r\n  margin-top: -5px;\r\n}\r\n\r\n.fried_chicken .towards {\r\n  letter-spacing: -1px;\r\n  position: absolute;\r\n  right: 35%;\r\n}\r\n\r\n.fried_chicken .add_dish {\r\n  position: absolute;\r\n  right: 17%;\r\n  cursor: pointer;\r\n}\r\n\r\n.fried_chicken .price,\r\n.chicken_combo .price {\r\n  background: white;\r\n  border-radius: 5px;\r\n  padding: 2px 5px;\r\n  border: 2px solid #231f1e;\r\n}\r\n\r\n.chicken_combo {\r\n  height: 605px;\r\n  position: relative;\r\n  background: #cb7836;\r\n}\r\n\r\nh2>span:first-of-type,\r\nh2>span:last-of-type {\r\n  width: 10px;\r\n  font-size: 14px;\r\n  position: relative;\r\n  top: -10px;\r\n}\r\n\r\nh2>span:last-of-type {\r\n  position: absolute;\r\n  top: 10px;\r\n  left: 105px;\r\n}\r\n\r\n.combos {\r\n  margin-top: 10px;\r\n  margin-left: 20px;\r\n}\r\n\r\n.combo {\r\n  position: relative;\r\n}\r\n\r\n.combo h2 {\r\n  font-size: 22px;\r\n  width: 60%;\r\n}\r\n\r\n.combo p {\r\n  margin-top: -15px;\r\n  font-size: 13px;\r\n  width: 60%;\r\n}\r\n\r\n.combo .price {\r\n  width: fit-content;\r\n  position: absolute;\r\n  right: 23px;\r\n  top: 5px;\r\n  font-weight: bold;\r\n}\r\n\r\n.combo img {\r\n  position: absolute;\r\n  right: 80px;\r\n  top: 5px;\r\n}\r\n\r\n.combo .offer {\r\n  position: absolute;\r\n  top: 35px;\r\n  right: 15px;\r\n  font-weight: bolder;\r\n  font-size: 18px;\r\n}\r\n\r\n.normal {\r\n  height: 315px;\r\n  background: #711c17;\r\n}\r\n\r\n.normal h2 {\r\n  color: #711c17;\r\n}\r\n\r\n.normal .dish_content {\r\n  width: 100vw;\r\n  position: relative;\r\n  top: 10px;\r\n}\r\n\r\n.normal .dish {\r\n  color: white;\r\n  margin-left: 20px;\r\n  font-size: 18px;\r\n  margin-top: 0px;\r\n}\r\n\r\n.normal .price {\r\n  color: white;\r\n  font-size: 18px;\r\n  position: absolute;\r\n  right: 25px;\r\n}\r\n\r\n.normal .dish_content img {\r\n  position: absolute;\r\n  right: 80px;\r\n  top: 1px;\r\n}\r\n\r\n.quick_bits {\r\n  height: 485px;\r\n}\r\n\r\n.quick_bits .brush_stroke img:nth-of-type(2) {\r\n  position: relative;\r\n  left: -115px;\r\n}\r\n\r\n.milk_shakes {\r\n  height: 675px;\r\n}\r\n\r\n.milk_shakes .brush_stroke>img:nth-of-type(2) {\r\n  position: relative;\r\n  left: -75px;\r\n}\r\n\r\n.large {\r\n  height: 360px;\r\n  background: #1A1F22;\r\n}\r\n\r\n.large.inactive {\r\n  height: 95px;\r\n}\r\n\r\n.large h2 {\r\n  color: #1A1F22;\r\n  width: 250px;\r\n}\r\n\r\n.large .brush_stroke {\r\n  overflow: visible;\r\n}\r\n\r\n.large .brush_stroke>img:nth-of-type(2) {\r\n  position: relative;\r\n  left: 15px;\r\n}\r\n\r\n.large .brush_stroke>img:nth-of-type(3) {\r\n  position: relative;\r\n  z-index: 1;\r\n  top: 30px;\r\n  left: -160px;\r\n}\r\n\r\n.large .brush_stroke>img:nth-of-type(4) {\r\n  position: relative;\r\n  top: 30px;\r\n  left: -150px;\r\n}\r\n\r\n.large .dish_content {\r\n  width: 100vw;\r\n  position: relative;\r\n}\r\n\r\n.large .dish_content:nth-of-type(2) {\r\n  margin-top: 45px;\r\n  color: black;\r\n}\r\n\r\n.large .dish {\r\n  color: white;\r\n  margin-left: 20px;\r\n  font-size: 18px;\r\n  margin-top: 0px;\r\n}\r\n\r\n.large .price {\r\n  color: white;\r\n  font-size: 18px;\r\n  position: absolute;\r\n  right: 25px;\r\n}\r\n\r\n.large .dish_content img {\r\n  position: absolute;\r\n  right: 80px;\r\n}\r\n\r\n.fried_cgsand {\r\n  height: 460px;\r\n}\r\n\r\n.fried_cgsand .brush_stroke>img:nth-of-type(4) {\r\n  left: -125px;\r\n}\r\n\r\n.fried_cgsand .subtext {\r\n  position: absolute;\r\n  top: 15px;\r\n}\r\n\r\n.fried_cgburger {\r\n  height: 355px;\r\n}\r\n\r\n.smoothies,\r\n.mocktails,\r\n.thick_shake {\r\n  background: #F09B1E;\r\n  height: 450px;\r\n}\r\n\r\n\r\n.smoothies img:last-of-type,\r\n.mocktails img:last-of-type,\r\n.thick_shake img:last-of-type {\r\n  position: relative;\r\n  right: 100px;\r\n}\r\n\r\n\r\n.smoothies .dish_content img,\r\n.mocktails .dish_content img,\r\n.thick_shake .dish_content img {\r\n  position: absolute;\r\n  right: 80px;\r\n}\r\n\r\n.smoothies h2,\r\n.mocktails h2,\r\n.thick_shake h2 {\r\n  color: #EC1A23;\r\n}\r\n\r\n.mocktails {\r\n  height: 515px;\r\n}\r\n\r\n.thick_shake {\r\n  height: 355px;\r\n}\r\n\r\n.coffee,\r\n.pizza,\r\n.pasta,\r\n.nachos,\r\n.tacos {\r\n  height: 160px;\r\n  background: #2E2222;\r\n}\r\n\r\n.coffee h2,\r\n.pizza h2,\r\n.pasta h2,\r\n.nachos h2,\r\n.tacos h2 {\r\n  color: #111214;\r\n}\r\n\r\n.coffee .brush_stroke img:last-of-type {\r\n  position: absolute;\r\n  left: 10px;\r\n}\r\n\r\n.pizza {\r\n  height: 355px;\r\n}\r\n\r\n.pizza .brush_stroke img:first-of-type {\r\n  position: absolute;\r\n  left: -20px;\r\n}\r\n\r\n.pasta {\r\n  height: 130px;\r\n}\r\n\r\n.nachos {\r\n  height: 160px;\r\n}\r\n\r\n.tacos {\r\n  height: 130px;\r\n}\r\n\r\nfooter {\r\n  width: 100vw;\r\n  height: fit-content;\r\n}"],"sourceRoot":""}]);
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
    background: #E0B11C;
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
    width: 90vw;
    height: 25vh;
    background: #131719;
    border-radius: 10px;
    color: white;
    padding: 10px;
    overflow: scroll;
}

.order > button {
    width: 235px;
    height: 40px;
    color: #131719;
    font-size: 18px;
    border-radius: 10px;
    font-weight: bold;
    border: none;
    position: relative;
    left: 35px;
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
    color: #131719;
    position: absolute;
    left: 10px;
    bottom: 10px;
    background: white;
    padding: 5px;
    border-radius: 5px;
}`, "",{"version":3,"sources":["webpack://./src/css/footer.css"],"names":[],"mappings":"AAAA;IACI,eAAe;IACf,WAAW;IACX,YAAY;IACZ,YAAY;IACZ,mBAAmB;IACnB,UAAU;IACV,4BAA4B;IAC5B,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,6BAA6B;IAC7B,eAAe;IACf,gBAAgB;IAChB,4BAA4B;AAChC;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,mBAAmB;IACnB,mBAAmB;IACnB,YAAY;IACZ,aAAa;IACb,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,cAAc;IACd,eAAe;IACf,mBAAmB;IACnB,iBAAiB;IACjB,YAAY;IACZ,kBAAkB;IAClB,UAAU;AACd;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,YAAY;IACZ,uBAAuB;IACvB,kBAAkB;IAClB,cAAc;IACd,kBAAkB;AACtB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,iBAAiB;IACjB,kBAAkB;IAClB,cAAc;IACd,gBAAgB;IAChB,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,SAAS;AACb;;AAEA;IACI,eAAe;IACf,cAAc;IACd,kBAAkB;IAClB,UAAU;IACV,YAAY;IACZ,iBAAiB;IACjB,YAAY;IACZ,kBAAkB;AACtB","sourcesContent":[".order {\r\n    position: fixed;\r\n    bottom: 0px;\r\n    width: 100vw;\r\n    height: 35vh;\r\n    background: #E0B11C;\r\n    z-index: 2;\r\n    border-radius: 25px 25px 0 0;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: space-around;\r\n    transition: .3s;\r\n    overflow: hidden;\r\n    transform: translateY(300px);\r\n}\r\n\r\n.order.active {\r\n    transform: translateY(0px);\r\n}\r\n\r\n.order .cart {\r\n    width: 90vw;\r\n    height: 25vh;\r\n    background: #131719;\r\n    border-radius: 10px;\r\n    color: white;\r\n    padding: 10px;\r\n    overflow: scroll;\r\n}\r\n\r\n.order > button {\r\n    width: 235px;\r\n    height: 40px;\r\n    color: #131719;\r\n    font-size: 18px;\r\n    border-radius: 10px;\r\n    font-weight: bold;\r\n    border: none;\r\n    position: relative;\r\n    left: 35px;\r\n}\r\n\r\n.cart .cart_item {\r\n    display: flex;\r\n    position: relative;\r\n    height: 75px;\r\n    border: 1px solid white;\r\n    border-radius: 5px;\r\n    padding: 0 5px;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.cart span {\r\n    font-size: 18px;\r\n}\r\n\r\n.cart .item {\r\n    margin-top: 5px;\r\n}\r\n\r\n.cart button {\r\n    width: 30px;\r\n    height: 30px;\r\n}\r\n\r\n.cart .decrease {\r\n    position: absolute;\r\n    inset: 35px 105px;\r\n}\r\n\r\n.cart .increase {\r\n    position: absolute;\r\n    inset: 35px 180px;\r\n}\r\n\r\n.cart .quantity {\r\n    width: 35px;\r\n    height: 30px;\r\n    background: white;\r\n    border-radius: 5px;\r\n    color: #131719;\r\n    padding: 5px 7px;\r\n    position: absolute;\r\n    inset: 35px 140px;\r\n}\r\n\r\n.cart .item_price {\r\n    position: absolute;\r\n    right: 10px;\r\n    top: 40px;\r\n}\r\n\r\n.order .total {\r\n    font-size: 24px;\r\n    color: #131719;\r\n    position: absolute;\r\n    left: 10px;\r\n    bottom: 10px;\r\n    background: white;\r\n    padding: 5px;\r\n    border-radius: 5px;\r\n}"],"sourceRoot":""}]);
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
      table_num = 1;
    } else {
      table_num = i + 1;
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
    const dish_price = plus[i].nextElementSibling;
    if (!check_duplicate(dish_name)) {
      const dish = cart.appendChild(document.createElement("div"));
      dish.classList.add("cart_item");
      dish.innerHTML = `
    <span class="item">${dish_name}</span>
    <button class="increase">+</button>
    <span class="quantity">1</span>
    <button class="decrease">-</button>
    <span class="item_price">${price}</span>`;
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
        quantity[i].innerHTML = parseInt(quantity[i].innerHTML) + 1;
        update_amount();
      });
      decrease[i].addEventListener("click", () => {
        if (parseInt(quantity[i].innerHTML) <= 1) {
          cart.removeChild(quantity[i].parentElement);
        } else {
          quantity[i].innerHTML = parseInt(quantity[i].innerHTML) - 1;
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
      let num = parseInt(quantity[i].innerHTML);
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
    let order_data = `table no: ${table_num}\ntotal: ${final_amount.innerHTML}\n\n`;
    for (let i = 0; i < cart.childNodes.length; i++) {
      let name = cart.childNodes[i].childNodes[1].innerHTML;
      let quantity = cart.childNodes[i].childNodes[5].innerHTML;
      let price = cart.childNodes[i].childNodes[9].innerHTML;
      order_data += `${name}\t(${quantity}) ${price}\n`;
    }
    sendMessage(order_data);
    alert(`order submitted for table ${table_num}`);
    alert(`done`);
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
    cart.innerHTML = "";
    check_cart();
    main.classList.add("inactive");
    table.classList.remove("inactive");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sbUZBQW1GLFlBQVksYUFBYSxPQUFPLE9BQU8sTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxPQUFPLFlBQVksV0FBVyxPQUFPLE9BQU8sWUFBWSxXQUFXLE9BQU8sT0FBTyxZQUFZLFdBQVcsTUFBTSxPQUFPLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxTQUFTLFVBQVUsWUFBWSxPQUFPLFNBQVMsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSw2QkFBNkIsOEJBQThCLDZCQUE2QixLQUFLLHVCQUF1QiwyQ0FBMkMsOENBQThDLE1BQU0sZ0JBQWdCLGdCQUFnQixLQUFLLGdC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dURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7OztXQ0FBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ3dCO0FBQ0U7QUFDQTtBQUMxQjtBQUNBO0FBQ3FDO0FBQ0Y7QUFDQTtBQUNSO0FBQ0E7QUFDTztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUIsc0JBQXNCLHFCQUFxQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixZQUFZO0FBQ3ZDO0FBQ0EsNkJBQTZCLGFBQWE7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsVUFBVTtBQUNuQztBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsTUFBTTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw0QkFBNEI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixxQkFBcUI7QUFDekM7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHFCQUFxQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsTUFBTTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxVQUFVLFdBQVcsdUJBQXVCO0FBQzlFLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLEtBQUssS0FBSyxTQUFTLElBQUksTUFBTTtBQUNwRDtBQUNBO0FBQ0EsdUNBQXVDLFVBQVU7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLFNBQVM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxnQkFBZ0IseUJBQXlCO0FBQ3pDO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGdCQUFnQixpQkFBaUI7QUFDakM7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixpQkFBaUI7QUFDakM7QUFDQTtBQUNBLEdBQUc7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL2NsdWIxMGNoaWNrZW4vLi9zcmMvY3NzL2JvZHkuY3NzIiwid2VicGFjazovL2NsdWIxMGNoaWNrZW4vLi9zcmMvY3NzL2Zvb3Rlci5jc3MiLCJ3ZWJwYWNrOi8vY2x1YjEwY2hpY2tlbi8uL3NyYy9jc3MvbmF2YmFyLmNzcyIsIndlYnBhY2s6Ly9jbHViMTBjaGlja2VuLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9jbHViMTBjaGlja2VuLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vY2x1YjEwY2hpY2tlbi8uL3NyYy9jc3MvYm9keS5jc3M/MjY1NiIsIndlYnBhY2s6Ly9jbHViMTBjaGlja2VuLy4vc3JjL2Nzcy9mb290ZXIuY3NzP2FiOGMiLCJ3ZWJwYWNrOi8vY2x1YjEwY2hpY2tlbi8uL3NyYy9jc3MvbmF2YmFyLmNzcz8yMmE3Iiwid2VicGFjazovL2NsdWIxMGNoaWNrZW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vY2x1YjEwY2hpY2tlbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vY2x1YjEwY2hpY2tlbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9jbHViMTBjaGlja2VuLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2NsdWIxMGNoaWNrZW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9jbHViMTBjaGlja2VuLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vY2x1YjEwY2hpY2tlbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jbHViMTBjaGlja2VuL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2NsdWIxMGNoaWNrZW4vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2NsdWIxMGNoaWNrZW4vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jbHViMTBjaGlja2VuL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY2x1YjEwY2hpY2tlbi93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9jbHViMTBjaGlja2VuL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9jbHViMTBjaGlja2VuLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcclxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4vKiBAZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogXCJCdW5qZWVTaGFkZS1yZWd1bGFyXCI7XHJcbiAgc3JjOiB1cmwoXCIuL0J1bmdlZVNoYWRlLVJlZ3VsYXIudHRmXCIpO1xyXG59ICovXHJcblxyXG5ib2R5IHtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi50YWJsZSB7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGluc2V0OiA3NXB4IDBweDtcclxuICBiYWNrZ3JvdW5kOiAjY2I3ODM2O1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi50YWJsZS5pbmFjdGl2ZSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnRhYmxlIGgyIHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi50YWJsZSBidXR0b24ge1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG4gIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGNvbG9yOiAjMUExRjIyO1xyXG59XHJcblxyXG4udGFibGUgLm9yIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnRhYmxlIGJ1dHRvbjpsYXN0LW9mLXR5cGUge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgd2lkdGg6IDMyNXB4O1xyXG4gIGhlaWdodDogNzVweDtcclxufVxyXG5cclxubWFpbiB7XHJcbiAgaGVpZ2h0OiAxMDAwcHg7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIG1hcmdpbi10b3A6IDc1cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbm1haW4uaW5hY3RpdmUge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5zZWN0aW9uIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdHJhbnNpdGlvbjogMC40cztcclxufVxyXG5cclxuLnNlY3Rpb24uaW5hY3RpdmUge1xyXG4gIGhlaWdodDogNjBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uZnJpZWRfY2hpY2tlbiB7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogNjcwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kOiAjY2I3ODM2O1xyXG4gIHBvc2l0aW9uOiByZWFsdGl2ZTtcclxufVxyXG5cclxuLnNlY3Rpb25fbmFtZSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYnJ1c2hfc3Ryb2tlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5icnVzaF9zdHJva2UgaW1nIHtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbn1cclxuXHJcbi5icnVzaF9zdHJva2UgaW1nOm50aC1vZi10eXBlKDIpIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcmlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbi5zZWN0aW9uX25hbWU+LnN1YnRleHQge1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDBweDtcclxuICB0b3A6IDMwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLnNlY3Rpb25fbmFtZSBoMiB7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGluc2V0OiAwcHg7XHJcbiAgei1pbmRleDogMTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbGVmdDogMjBweDtcclxuICB0b3A6IDE3cHg7XHJcbn1cclxuXHJcbi5mcmllZF9jaGlja2VuIC5pdGVtcyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNjVweDtcclxuICBsZWZ0OiAxNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5mcmllZF9jaGlja2VuIC5pdGVtIHtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzIzMWYxZTtcclxuICBwYWRkaW5nOiAzcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLmZyaWVkX2NoaWNrZW4gLml0ZW06bnRoLW9mLXR5cGUoMikge1xyXG4gIG1hcmdpbi10b3A6IDEyMHB4O1xyXG59XHJcblxyXG4uZnJpZWRfY2hpY2tlbiAuY29udGVudCB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uc2VjdGlvbiAuZGlzaF9jb250ZW50IHtcclxuICB3aWR0aDogOTB2dztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBjb2xvcjogIzIzMWYxZTtcclxufVxyXG5cclxuLnNlY3Rpb24gLmRpc2hfY29udGVudDpmaXJzdC1vZi10eXBlIHtcclxuICBtYXJnaW4tdG9wOiAxMnB4O1xyXG59XHJcblxyXG4uc2VjdGlvbiAuZGlzaCB7XHJcbiAgcGFkZGluZzogM3B4O1xyXG4gIG1hcmdpbi10b3A6IC01cHg7XHJcbn1cclxuXHJcbi5mcmllZF9jaGlja2VuIC50b3dhcmRzIHtcclxuICBsZXR0ZXItc3BhY2luZzogLTFweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDM1JTtcclxufVxyXG5cclxuLmZyaWVkX2NoaWNrZW4gLmFkZF9kaXNoIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDE3JTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5mcmllZF9jaGlja2VuIC5wcmljZSxcclxuLmNoaWNrZW5fY29tYm8gLnByaWNlIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcGFkZGluZzogMnB4IDVweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjMjMxZjFlO1xyXG59XHJcblxyXG4uY2hpY2tlbl9jb21ibyB7XHJcbiAgaGVpZ2h0OiA2MDVweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZDogI2NiNzgzNjtcclxufVxyXG5cclxuaDI+c3BhbjpmaXJzdC1vZi10eXBlLFxyXG5oMj5zcGFuOmxhc3Qtb2YtdHlwZSB7XHJcbiAgd2lkdGg6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IC0xMHB4O1xyXG59XHJcblxyXG5oMj5zcGFuOmxhc3Qtb2YtdHlwZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTBweDtcclxuICBsZWZ0OiAxMDVweDtcclxufVxyXG5cclxuLmNvbWJvcyB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG5cclxuLmNvbWJvIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5jb21ibyBoMiB7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIHdpZHRoOiA2MCU7XHJcbn1cclxuXHJcbi5jb21ibyBwIHtcclxuICBtYXJnaW4tdG9wOiAtMTVweDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgd2lkdGg6IDYwJTtcclxufVxyXG5cclxuLmNvbWJvIC5wcmljZSB7XHJcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMjNweDtcclxuICB0b3A6IDVweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmNvbWJvIGltZyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiA4MHB4O1xyXG4gIHRvcDogNXB4O1xyXG59XHJcblxyXG4uY29tYm8gLm9mZmVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAzNXB4O1xyXG4gIHJpZ2h0OiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4ubm9ybWFsIHtcclxuICBoZWlnaHQ6IDMxNXB4O1xyXG4gIGJhY2tncm91bmQ6ICM3MTFjMTc7XHJcbn1cclxuXHJcbi5ub3JtYWwgaDIge1xyXG4gIGNvbG9yOiAjNzExYzE3O1xyXG59XHJcblxyXG4ubm9ybWFsIC5kaXNoX2NvbnRlbnQge1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAxMHB4O1xyXG59XHJcblxyXG4ubm9ybWFsIC5kaXNoIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxufVxyXG5cclxuLm5vcm1hbCAucHJpY2Uge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAyNXB4O1xyXG59XHJcblxyXG4ubm9ybWFsIC5kaXNoX2NvbnRlbnQgaW1nIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDgwcHg7XHJcbiAgdG9wOiAxcHg7XHJcbn1cclxuXHJcbi5xdWlja19iaXRzIHtcclxuICBoZWlnaHQ6IDQ4NXB4O1xyXG59XHJcblxyXG4ucXVpY2tfYml0cyAuYnJ1c2hfc3Ryb2tlIGltZzpudGgtb2YtdHlwZSgyKSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGxlZnQ6IC0xMTVweDtcclxufVxyXG5cclxuLm1pbGtfc2hha2VzIHtcclxuICBoZWlnaHQ6IDY3NXB4O1xyXG59XHJcblxyXG4ubWlsa19zaGFrZXMgLmJydXNoX3N0cm9rZT5pbWc6bnRoLW9mLXR5cGUoMikge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsZWZ0OiAtNzVweDtcclxufVxyXG5cclxuLmxhcmdlIHtcclxuICBoZWlnaHQ6IDM2MHB4O1xyXG4gIGJhY2tncm91bmQ6ICMxQTFGMjI7XHJcbn1cclxuXHJcbi5sYXJnZS5pbmFjdGl2ZSB7XHJcbiAgaGVpZ2h0OiA5NXB4O1xyXG59XHJcblxyXG4ubGFyZ2UgaDIge1xyXG4gIGNvbG9yOiAjMUExRjIyO1xyXG4gIHdpZHRoOiAyNTBweDtcclxufVxyXG5cclxuLmxhcmdlIC5icnVzaF9zdHJva2Uge1xyXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xyXG59XHJcblxyXG4ubGFyZ2UgLmJydXNoX3N0cm9rZT5pbWc6bnRoLW9mLXR5cGUoMikge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsZWZ0OiAxNXB4O1xyXG59XHJcblxyXG4ubGFyZ2UgLmJydXNoX3N0cm9rZT5pbWc6bnRoLW9mLXR5cGUoMykge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxO1xyXG4gIHRvcDogMzBweDtcclxuICBsZWZ0OiAtMTYwcHg7XHJcbn1cclxuXHJcbi5sYXJnZSAuYnJ1c2hfc3Ryb2tlPmltZzpudGgtb2YtdHlwZSg0KSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMzBweDtcclxuICBsZWZ0OiAtMTUwcHg7XHJcbn1cclxuXHJcbi5sYXJnZSAuZGlzaF9jb250ZW50IHtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ubGFyZ2UgLmRpc2hfY29udGVudDpudGgtb2YtdHlwZSgyKSB7XHJcbiAgbWFyZ2luLXRvcDogNDVweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5sYXJnZSAuZGlzaCB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbn1cclxuXHJcbi5sYXJnZSAucHJpY2Uge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAyNXB4O1xyXG59XHJcblxyXG4ubGFyZ2UgLmRpc2hfY29udGVudCBpbWcge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogODBweDtcclxufVxyXG5cclxuLmZyaWVkX2Nnc2FuZCB7XHJcbiAgaGVpZ2h0OiA0NjBweDtcclxufVxyXG5cclxuLmZyaWVkX2Nnc2FuZCAuYnJ1c2hfc3Ryb2tlPmltZzpudGgtb2YtdHlwZSg0KSB7XHJcbiAgbGVmdDogLTEyNXB4O1xyXG59XHJcblxyXG4uZnJpZWRfY2dzYW5kIC5zdWJ0ZXh0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxNXB4O1xyXG59XHJcblxyXG4uZnJpZWRfY2didXJnZXIge1xyXG4gIGhlaWdodDogMzU1cHg7XHJcbn1cclxuXHJcbi5zbW9vdGhpZXMsXHJcbi5tb2NrdGFpbHMsXHJcbi50aGlja19zaGFrZSB7XHJcbiAgYmFja2dyb3VuZDogI0YwOUIxRTtcclxuICBoZWlnaHQ6IDQ1MHB4O1xyXG59XHJcblxyXG5cclxuLnNtb290aGllcyBpbWc6bGFzdC1vZi10eXBlLFxyXG4ubW9ja3RhaWxzIGltZzpsYXN0LW9mLXR5cGUsXHJcbi50aGlja19zaGFrZSBpbWc6bGFzdC1vZi10eXBlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcmlnaHQ6IDEwMHB4O1xyXG59XHJcblxyXG5cclxuLnNtb290aGllcyAuZGlzaF9jb250ZW50IGltZyxcclxuLm1vY2t0YWlscyAuZGlzaF9jb250ZW50IGltZyxcclxuLnRoaWNrX3NoYWtlIC5kaXNoX2NvbnRlbnQgaW1nIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDgwcHg7XHJcbn1cclxuXHJcbi5zbW9vdGhpZXMgaDIsXHJcbi5tb2NrdGFpbHMgaDIsXHJcbi50aGlja19zaGFrZSBoMiB7XHJcbiAgY29sb3I6ICNFQzFBMjM7XHJcbn1cclxuXHJcbi5tb2NrdGFpbHMge1xyXG4gIGhlaWdodDogNTE1cHg7XHJcbn1cclxuXHJcbi50aGlja19zaGFrZSB7XHJcbiAgaGVpZ2h0OiAzNTVweDtcclxufVxyXG5cclxuLmNvZmZlZSxcclxuLnBpenphLFxyXG4ucGFzdGEsXHJcbi5uYWNob3MsXHJcbi50YWNvcyB7XHJcbiAgaGVpZ2h0OiAxNjBweDtcclxuICBiYWNrZ3JvdW5kOiAjMkUyMjIyO1xyXG59XHJcblxyXG4uY29mZmVlIGgyLFxyXG4ucGl6emEgaDIsXHJcbi5wYXN0YSBoMixcclxuLm5hY2hvcyBoMixcclxuLnRhY29zIGgyIHtcclxuICBjb2xvcjogIzExMTIxNDtcclxufVxyXG5cclxuLmNvZmZlZSAuYnJ1c2hfc3Ryb2tlIGltZzpsYXN0LW9mLXR5cGUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4ucGl6emEge1xyXG4gIGhlaWdodDogMzU1cHg7XHJcbn1cclxuXHJcbi5waXp6YSAuYnJ1c2hfc3Ryb2tlIGltZzpmaXJzdC1vZi10eXBlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogLTIwcHg7XHJcbn1cclxuXHJcbi5wYXN0YSB7XHJcbiAgaGVpZ2h0OiAxMzBweDtcclxufVxyXG5cclxuLm5hY2hvcyB7XHJcbiAgaGVpZ2h0OiAxNjBweDtcclxufVxyXG5cclxuLnRhY29zIHtcclxuICBoZWlnaHQ6IDEzMHB4O1xyXG59XHJcblxyXG5mb290ZXIge1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2JvZHkuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtBQUN4Qjs7QUFFQTs7O0dBR0c7O0FBRUg7RUFDRSxTQUFTO0FBQ1g7O0FB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a0I7RUFDbEIsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7OztFQUdFLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7OztBQUdBOzs7RUFHRSxrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOzs7QUFHQTs7O0VBR0Usa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTs7O0VBR0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTs7Ozs7RUFLRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBOzs7OztFQUtFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbi8qIEBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJCdW5qZWVTaGFkZS1yZWd1bGFyXFxcIjtcXHJcXG4gIHNyYzogdXJsKFxcXCIuL0J1bmdlZVNoYWRlLVJlZ3VsYXIudHRmXFxcIik7XFxyXFxufSAqL1xcclxcblxcclxcbmJvZHkge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4udGFibGUge1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGluc2V0OiA3NXB4IDBweDtcXHJcXG4gIGJhY2tncm91bmQ6ICNjYjc4MzY7XFxyXFxuICB6LWluZGV4OiAyO1xcclxcbn1cXHJcXG5cXHJcXG4udGFibGUuaW5hY3RpdmUge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhYmxlIGgyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhYmxlIGJ1dHRvbiB7XFxyXFxuICB3aWR0aDogMTUwcHg7XFxyXFxuICBoZWlnaHQ6IDE1MHB4O1xcclxcbiAgbWFyZ2luLWxlZnQ6IDI1cHg7XFxyXFxuICBtYXJnaW4tdG9wOiAyNXB4O1xcclxcbiAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgY29sb3I6ICMxQTFGMjI7XFxyXFxufVxcclxcblxcclxcbi50YWJsZSAub3Ige1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgbWFyZ2luLXRvcDogMjVweDtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGFibGUgYnV0dG9uOmxhc3Qtb2YtdHlwZSB7XFxyXFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgd2lkdGg6IDMyNXB4O1xcclxcbiAgaGVpZ2h0OiA3NXB4O1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gIGhlaWdodDogMTAwMHB4O1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgbWFyZ2luLXRvcDogNzVweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbm1haW4uaW5hY3RpdmUge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb24ge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgdHJhbnNpdGlvbjogMC40cztcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb24uaW5hY3RpdmUge1xcclxcbiAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmZyaWVkX2NoaWNrZW4ge1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgaGVpZ2h0OiA2NzBweDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBiYWNrZ3JvdW5kOiAjY2I3ODM2O1xcclxcbiAgcG9zaXRpb246IHJlYWx0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvbl9uYW1lIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJydXNoX3N0cm9rZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5icnVzaF9zdHJva2UgaW1nIHtcXHJcXG4gIHdpZHRoOiAxNTBweDtcXHJcXG4gIGhlaWdodDogMjAwcHg7XFxyXFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxyXFxufVxcclxcblxcclxcbi5icnVzaF9zdHJva2UgaW1nOm50aC1vZi10eXBlKDIpIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHJpZ2h0OiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvbl9uYW1lPi5zdWJ0ZXh0IHtcXHJcXG4gIHdpZHRoOiAxMDBweDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHJpZ2h0OiAwcHg7XFxyXFxuICB0b3A6IDMwcHg7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uX25hbWUgaDIge1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgZm9udC1zaXplOiAyMnB4O1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgaW5zZXQ6IDBweDtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBsZWZ0OiAyMHB4O1xcclxcbiAgdG9wOiAxN3B4O1xcclxcbn1cXHJcXG5cXHJcXG4uZnJpZWRfY2hpY2tlbiAuaXRlbXMge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiA2NXB4O1xcclxcbiAgbGVmdDogMTVweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uZnJpZWRfY2hpY2tlbiAuaXRlbSB7XFxyXFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCAjMjMxZjFlO1xcclxcbiAgcGFkZGluZzogM3B4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxufVxcclxcblxcclxcbi5mcmllZF9jaGlja2VuIC5pdGVtOm50aC1vZi10eXBlKDIpIHtcXHJcXG4gIG1hcmdpbi10b3A6IDEyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZnJpZWRfY2hpY2tlbiAuY29udGVudCB7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvbiAuZGlzaF9jb250ZW50IHtcXHJcXG4gIHdpZHRoOiA5MHZ3O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBtYXJnaW4tdG9wOiA1cHg7XFxyXFxuICBjb2xvcjogIzIzMWYxZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb24gLmRpc2hfY29udGVudDpmaXJzdC1vZi10eXBlIHtcXHJcXG4gIG1hcmdpbi10b3A6IDEycHg7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uIC5kaXNoIHtcXHJcXG4gIHBhZGRpbmc6IDNweDtcXHJcXG4gIG1hcmdpbi10b3A6IC01cHg7XFxyXFxufVxcclxcblxcclxcbi5mcmllZF9jaGlja2VuIC50b3dhcmRzIHtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAtMXB4O1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgcmlnaHQ6IDM1JTtcXHJcXG59XFxyXFxuXFxyXFxuLmZyaWVkX2NoaWNrZW4gLmFkZF9kaXNoIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHJpZ2h0OiAxNyU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5mcmllZF9jaGlja2VuIC5wcmljZSxcXHJcXG4uY2hpY2tlbl9jb21ibyAucHJpY2Uge1xcclxcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBwYWRkaW5nOiAycHggNXB4O1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgIzIzMWYxZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNoaWNrZW5fY29tYm8ge1xcclxcbiAgaGVpZ2h0OiA2MDVweDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGJhY2tncm91bmQ6ICNjYjc4MzY7XFxyXFxufVxcclxcblxcclxcbmgyPnNwYW46Zmlyc3Qtb2YtdHlwZSxcXHJcXG5oMj5zcGFuOmxhc3Qtb2YtdHlwZSB7XFxyXFxuICB3aWR0aDogMTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHRvcDogLTEwcHg7XFxyXFxufVxcclxcblxcclxcbmgyPnNwYW46bGFzdC1vZi10eXBlIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMTBweDtcXHJcXG4gIGxlZnQ6IDEwNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tYm9zIHtcXHJcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICBtYXJnaW4tbGVmdDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbWJvIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbWJvIGgyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjJweDtcXHJcXG4gIHdpZHRoOiA2MCU7XFxyXFxufVxcclxcblxcclxcbi5jb21ibyBwIHtcXHJcXG4gIG1hcmdpbi10b3A6IC0xNXB4O1xcclxcbiAgZm9udC1zaXplOiAxM3B4O1xcclxcbiAgd2lkdGg6IDYwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbWJvIC5wcmljZSB7XFxyXFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICByaWdodDogMjNweDtcXHJcXG4gIHRvcDogNXB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5jb21ibyBpbWcge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgcmlnaHQ6IDgwcHg7XFxyXFxuICB0b3A6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbWJvIC5vZmZlciB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDM1cHg7XFxyXFxuICByaWdodDogMTVweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxufVxcclxcblxcclxcbi5ub3JtYWwge1xcclxcbiAgaGVpZ2h0OiAzMTVweDtcXHJcXG4gIGJhY2tncm91bmQ6ICM3MTFjMTc7XFxyXFxufVxcclxcblxcclxcbi5ub3JtYWwgaDIge1xcclxcbiAgY29sb3I6ICM3MTFjMTc7XFxyXFxufVxcclxcblxcclxcbi5ub3JtYWwgLmRpc2hfY29udGVudCB7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB0b3A6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5ub3JtYWwgLmRpc2gge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBtYXJnaW4tdG9wOiAwcHg7XFxyXFxufVxcclxcblxcclxcbi5ub3JtYWwgLnByaWNlIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHJpZ2h0OiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubm9ybWFsIC5kaXNoX2NvbnRlbnQgaW1nIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHJpZ2h0OiA4MHB4O1xcclxcbiAgdG9wOiAxcHg7XFxyXFxufVxcclxcblxcclxcbi5xdWlja19iaXRzIHtcXHJcXG4gIGhlaWdodDogNDg1cHg7XFxyXFxufVxcclxcblxcclxcbi5xdWlja19iaXRzIC5icnVzaF9zdHJva2UgaW1nOm50aC1vZi10eXBlKDIpIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGxlZnQ6IC0xMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1pbGtfc2hha2VzIHtcXHJcXG4gIGhlaWdodDogNjc1cHg7XFxyXFxufVxcclxcblxcclxcbi5taWxrX3NoYWtlcyAuYnJ1c2hfc3Ryb2tlPmltZzpudGgtb2YtdHlwZSgyKSB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBsZWZ0OiAtNzVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxhcmdlIHtcXHJcXG4gIGhlaWdodDogMzYwcHg7XFxyXFxuICBiYWNrZ3JvdW5kOiAjMUExRjIyO1xcclxcbn1cXHJcXG5cXHJcXG4ubGFyZ2UuaW5hY3RpdmUge1xcclxcbiAgaGVpZ2h0OiA5NXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubGFyZ2UgaDIge1xcclxcbiAgY29sb3I6ICMxQTFGMjI7XFxyXFxuICB3aWR0aDogMjUwcHg7XFxyXFxufVxcclxcblxcclxcbi5sYXJnZSAuYnJ1c2hfc3Ryb2tlIHtcXHJcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcclxcbn1cXHJcXG5cXHJcXG4ubGFyZ2UgLmJydXNoX3N0cm9rZT5pbWc6bnRoLW9mLXR5cGUoMikge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgbGVmdDogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxhcmdlIC5icnVzaF9zdHJva2U+aW1nOm50aC1vZi10eXBlKDMpIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxuICB0b3A6IDMwcHg7XFxyXFxuICBsZWZ0OiAtMTYwcHg7XFxyXFxufVxcclxcblxcclxcbi5sYXJnZSAuYnJ1c2hfc3Ryb2tlPmltZzpudGgtb2YtdHlwZSg0KSB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB0b3A6IDMwcHg7XFxyXFxuICBsZWZ0OiAtMTUwcHg7XFxyXFxufVxcclxcblxcclxcbi5sYXJnZSAuZGlzaF9jb250ZW50IHtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmxhcmdlIC5kaXNoX2NvbnRlbnQ6bnRoLW9mLXR5cGUoMikge1xcclxcbiAgbWFyZ2luLXRvcDogNDVweDtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLmxhcmdlIC5kaXNoIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgbWFyZ2luLXRvcDogMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubGFyZ2UgLnByaWNlIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHJpZ2h0OiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubGFyZ2UgLmRpc2hfY29udGVudCBpbWcge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgcmlnaHQ6IDgwcHg7XFxyXFxufVxcclxcblxcclxcbi5mcmllZF9jZ3NhbmQge1xcclxcbiAgaGVpZ2h0OiA0NjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZyaWVkX2Nnc2FuZCAuYnJ1c2hfc3Ryb2tlPmltZzpudGgtb2YtdHlwZSg0KSB7XFxyXFxuICBsZWZ0OiAtMTI1cHg7XFxyXFxufVxcclxcblxcclxcbi5mcmllZF9jZ3NhbmQgLnN1YnRleHQge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZnJpZWRfY2didXJnZXIge1xcclxcbiAgaGVpZ2h0OiAzNTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNtb290aGllcyxcXHJcXG4ubW9ja3RhaWxzLFxcclxcbi50aGlja19zaGFrZSB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjRjA5QjFFO1xcclxcbiAgaGVpZ2h0OiA0NTBweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnNtb290aGllcyBpbWc6bGFzdC1vZi10eXBlLFxcclxcbi5tb2NrdGFpbHMgaW1nOmxhc3Qtb2YtdHlwZSxcXHJcXG4udGhpY2tfc2hha2UgaW1nOmxhc3Qtb2YtdHlwZSB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICByaWdodDogMTAwcHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5zbW9vdGhpZXMgLmRpc2hfY29udGVudCBpbWcsXFxyXFxuLm1vY2t0YWlscyAuZGlzaF9jb250ZW50IGltZyxcXHJcXG4udGhpY2tfc2hha2UgLmRpc2hfY29udGVudCBpbWcge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgcmlnaHQ6IDgwcHg7XFxyXFxufVxcclxcblxcclxcbi5zbW9vdGhpZXMgaDIsXFxyXFxuLm1vY2t0YWlscyBoMixcXHJcXG4udGhpY2tfc2hha2UgaDIge1xcclxcbiAgY29sb3I6ICNFQzFBMjM7XFxyXFxufVxcclxcblxcclxcbi5tb2NrdGFpbHMge1xcclxcbiAgaGVpZ2h0OiA1MTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRoaWNrX3NoYWtlIHtcXHJcXG4gIGhlaWdodDogMzU1cHg7XFxyXFxufVxcclxcblxcclxcbi5jb2ZmZWUsXFxyXFxuLnBpenphLFxcclxcbi5wYXN0YSxcXHJcXG4ubmFjaG9zLFxcclxcbi50YWNvcyB7XFxyXFxuICBoZWlnaHQ6IDE2MHB4O1xcclxcbiAgYmFja2dyb3VuZDogIzJFMjIyMjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvZmZlZSBoMixcXHJcXG4ucGl6emEgaDIsXFxyXFxuLnBhc3RhIGgyLFxcclxcbi5uYWNob3MgaDIsXFxyXFxuLnRhY29zIGgyIHtcXHJcXG4gIGNvbG9yOiAjMTExMjE0O1xcclxcbn1cXHJcXG5cXHJcXG4uY29mZmVlIC5icnVzaF9zdHJva2UgaW1nOmxhc3Qtb2YtdHlwZSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBsZWZ0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucGl6emEge1xcclxcbiAgaGVpZ2h0OiAzNTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBpenphIC5icnVzaF9zdHJva2UgaW1nOmZpcnN0LW9mLXR5cGUge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgbGVmdDogLTIwcHg7XFxyXFxufVxcclxcblxcclxcbi5wYXN0YSB7XFxyXFxuICBoZWlnaHQ6IDEzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmFjaG9zIHtcXHJcXG4gIGhlaWdodDogMTYwcHg7XFxyXFxufVxcclxcblxcclxcbi50YWNvcyB7XFxyXFxuICBoZWlnaHQ6IDEzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAub3JkZXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDM1dmg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRTBCMTFDO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHggMjVweCAwIDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIHRyYW5zaXRpb246IC4zcztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMzAwcHgpO1xyXG59XHJcblxyXG4ub3JkZXIuYWN0aXZlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG59XHJcblxyXG4ub3JkZXIgLmNhcnQge1xyXG4gICAgd2lkdGg6IDkwdnc7XHJcbiAgICBoZWlnaHQ6IDI1dmg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTMxNzE5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG59XHJcblxyXG4ub3JkZXIgPiBidXR0b24ge1xyXG4gICAgd2lkdGg6IDIzNXB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgY29sb3I6ICMxMzE3MTk7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiAzNXB4O1xyXG59XHJcblxyXG4uY2FydCAuY2FydF9pdGVtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDc1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDAgNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4uY2FydCBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLmNhcnQgLml0ZW0ge1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcblxyXG4uY2FydCBidXR0b24ge1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbi5jYXJ0IC5kZWNyZWFzZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBpbnNldDogMzVweCAxMDVweDtcclxufVxyXG5cclxuLmNhcnQgLmluY3JlYXNlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGluc2V0OiAzNXB4IDE4MHB4O1xyXG59XHJcblxyXG4uY2FydCAucXVhbnRpdHkge1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGNvbG9yOiAjMTMxNzE5O1xyXG4gICAgcGFkZGluZzogNXB4IDdweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGluc2V0OiAzNXB4IDE0MHB4O1xyXG59XHJcblxyXG4uY2FydCAuaXRlbV9wcmljZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTBweDtcclxuICAgIHRvcDogNDBweDtcclxufVxyXG5cclxuLm9yZGVyIC50b3RhbCB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBjb2xvcjogIzEzMTcxOTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDEwcHg7XHJcbiAgICBib3R0b206IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9mb290ZXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsNEJBQTRCO0lBQzVCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osY0FBYztJQUNkLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsU0FBUztBQUNiOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIub3JkZXIge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIGJvdHRvbTogMHB4O1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIGhlaWdodDogMzV2aDtcXHJcXG4gICAgYmFja2dyb3VuZDogI0UwQjExQztcXHJcXG4gICAgei1pbmRleDogMjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweCAyNXB4IDAgMDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgIHRyYW5zaXRpb246IC4zcztcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDMwMHB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLm9yZGVyLmFjdGl2ZSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xcclxcbn1cXHJcXG5cXHJcXG4ub3JkZXIgLmNhcnQge1xcclxcbiAgICB3aWR0aDogOTB2dztcXHJcXG4gICAgaGVpZ2h0OiAyNXZoO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjMTMxNzE5O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxyXFxufVxcclxcblxcclxcbi5vcmRlciA+IGJ1dHRvbiB7XFxyXFxuICAgIHdpZHRoOiAyMzVweDtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICBjb2xvcjogIzEzMTcxOTtcXHJcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGxlZnQ6IDM1cHg7XFxyXFxufVxcclxcblxcclxcbi5jYXJ0IC5jYXJ0X2l0ZW0ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGhlaWdodDogNzVweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgcGFkZGluZzogMCA1cHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcnQgc3BhbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcnQgLml0ZW0ge1xcclxcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5jYXJ0IGJ1dHRvbiB7XFxyXFxuICAgIHdpZHRoOiAzMHB4O1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5jYXJ0IC5kZWNyZWFzZSB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgaW5zZXQ6IDM1cHggMTA1cHg7XFxyXFxufVxcclxcblxcclxcbi5jYXJ0IC5pbmNyZWFzZSB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgaW5zZXQ6IDM1cHggMTgwcHg7XFxyXFxufVxcclxcblxcclxcbi5jYXJ0IC5xdWFudGl0eSB7XFxyXFxuICAgIHdpZHRoOiAzNXB4O1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGNvbG9yOiAjMTMxNzE5O1xcclxcbiAgICBwYWRkaW5nOiA1cHggN3B4O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGluc2V0OiAzNXB4IDE0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FydCAuaXRlbV9wcmljZSB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgcmlnaHQ6IDEwcHg7XFxyXFxuICAgIHRvcDogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm9yZGVyIC50b3RhbCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gICAgY29sb3I6ICMxMzE3MTk7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgbGVmdDogMTBweDtcXHJcXG4gICAgYm90dG9tOiAxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogTmF2YmFyICovXHJcbm5hdiB7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDc1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTBiMTFkO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgaW5zZXQ6IDBweDtcclxuICAgIC8qIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpOyAqL1xyXG4gICAgLyogZmlsdGVyOiBibHVyKHB4KTsgKi9cclxuICAgIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbm5hdiBpbWcge1xyXG4gICAgd2lkdGg6IDcwcHg7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAzcHggI0U1QjIyMTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG59XHJcblxyXG5uYXYgaDEge1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaW5zZXQ6IC0yMHB4IDExNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDM1cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG59XHJcblxyXG5uYXYgLnRlbiB7XHJcbiAgICBmb250LXNpemU6IDQycHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBpbnNldDogLTFweCAyMTBweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvbmF2YmFyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxXQUFXO0FBQ1g7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsVUFBVTtJQUNWLGdDQUFnQztJQUNoQyxzQkFBc0I7SUFDdEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixtQ0FBbUM7SUFDbkMsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogTmF2YmFyICovXFxyXFxubmF2IHtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICBoZWlnaHQ6IDc1cHg7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNlMGIxMWQ7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgaW5zZXQ6IDBweDtcXHJcXG4gICAgLyogYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7ICovXFxyXFxuICAgIC8qIGZpbHRlcjogYmx1cihweCk7ICovXFxyXFxuICAgIHotaW5kZXg6IDI7XFxyXFxufVxcclxcblxcclxcbm5hdiBpbWcge1xcclxcbiAgICB3aWR0aDogNzBweDtcXHJcXG4gICAgaGVpZ2h0OiA3MHB4O1xcclxcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAzcHggI0U1QjIyMTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxubmF2IGgxIHtcXHJcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcclxcbiAgICB3aWR0aDogMTUwcHg7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBpbnNldDogLTIwcHggMTE1cHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgLnRlbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNDJweDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGluc2V0OiAtMXB4IDIxMHB4O1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ib2R5LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYm9keS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZm9vdGVyLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZm9vdGVyLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9uYXZiYXIuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9uYXZiYXIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvLyBJbXBvcnQgY3NzIGZpbGVzXHJcbmltcG9ydCBcIi4vY3NzL2JvZHkuY3NzXCI7XHJcbmltcG9ydCBcIi4vY3NzL25hdmJhci5jc3NcIjtcclxuaW1wb3J0IFwiLi9jc3MvZm9vdGVyLmNzc1wiO1xyXG5cclxuLy8gSW1wb3J0IGltYWdlc1xyXG5pbXBvcnQgXCIuL2ltYWdlcy9ncmV5aXNoX3N0cm9rZS5zdmdcIjtcclxuaW1wb3J0IFwiLi9pbWFnZXMvYmxhY2tfc3Ryb2tlLnN2Z1wiO1xyXG5pbXBvcnQgXCIuL2ltYWdlcy93aGl0ZV9zdHJva2Uuc3ZnXCI7XHJcbmltcG9ydCBcIi4vaW1hZ2VzL3BsdXMuc3ZnXCI7XHJcbmltcG9ydCBcIi4vaW1hZ2VzL2xvZ28ucG5nXCI7XHJcbmltcG9ydCBcIi4vaW1hZ2VzL2Rlc2NyaXB0aW9uLnBuZ1wiO1xyXG5cclxuLy8gQ2FsbGluZyBodG1sIGVsZW1lbnRzXHJcbmNvbnN0IHNlY3Rpb25fbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2VjdGlvbl9uYW1lXCIpO1xyXG5jb25zdCBzZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zZWN0aW9uXCIpO1xyXG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XHJcbmxldCBwbHVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5hZGRfZGlzaFwiKTtcclxuY29uc3QgY2FydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FydFwiKTtcclxubGV0IGluY3JlYXNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pbmNyZWFzZVwiKTtcclxubGV0IGRlY3JlYXNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kZWNyZWFzZVwiKTtcclxubGV0IHF1YW50aXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5xdWFudGl0eVwiKTtcclxuY29uc3Qgb3JkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYWNlX29yZGVyXCIpO1xyXG5jb25zdCB0YWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFibGVcIik7XHJcbmNvbnN0IHRudW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRfbnVtXCIpO1xyXG5sZXQgdGFibGVfbnVtID0gMTtcclxuXHJcbi8vIGRpc2hlcyBhbmQgZHJpbmtzXHJcbmNvbnN0IGl0ZW1zID0gW1xyXG4gIFtcclxuICAgIFwiTnV0dG8gQnJvd25pZVwiLFxyXG4gICAgXCJDaGVlc2UgQ2FrZVwiLFxyXG4gICAgXCJCdXR0ZXIgU2NvdGNoXCIsXHJcbiAgICBcIkNob2NvIFRyYWJhbFwiLFxyXG4gICAgXCJQdXR0dSBJY2UgQ3JlYW1cIixcclxuICAgIFwiU2hhd2FybWEgSWNlIENyZWFtXCIsXHJcbiAgICBcIlNsenpsaW5nIEJyb3duaWVcIixcclxuICAgIFwiSGF6emxlIE51dCBCcm93bmlcIixcclxuICBdLFxyXG4gIFtcclxuICAgIFwiU2FsdGVkIEZyZW5jaCBGcmllc1wiLFxyXG4gICAgXCJNYXNhbGEgRnJlbmNoIEZyaWVzXCIsXHJcbiAgICBcIlRhbmRvb3JpIEZyZW5jaCBGcmllc1wiLFxyXG4gICAgXCJDaGVlc3kgRnJlbmNoIEZyaWVzXCIsXHJcbiAgICBcIlZlZyBOdWdnZXRzXCIsXHJcbiAgICBcIlN3ZWV0IENvcm5cIixcclxuICAgIFwiQ2hpY2tlbiBDaGVlc2UgU2hvdHNcIixcclxuICAgIFwiQ2hpY2tlbiBGaW5nZXJzICg4UGNzKVwiLFxyXG4gICAgXCJDaGlja2VuIE51Z2dldHMgKDhQY3MpXCIsXHJcbiAgICBcIlZlZyBDaGVlemUgU2hvdHNcIixcclxuICAgIFwiVmVnIEZpbmdlcnNcIixcclxuICAgIFwiUG90YXRvIFdlZGdlc1wiLFxyXG4gICAgXCJTYWx0ZWQgZnJhbmNoIGZpcmVzXCIsXHJcbiAgXSxcclxuICBbXHJcbiAgICBcIk51dHRvIENvZmZlZSBMb2FkZWRcIixcclxuICAgIFwiU3RyYXdiZXJyeSBNb25zdGVyXCIsXHJcbiAgICBcIk1hbmdvIEJ1cnN0XCIsXHJcbiAgICBcIkJ1YmJsZWd1bSBCbGFzdFwiLFxyXG4gICAgXCJNaXhiZXJyeSBDaGVlc2UgQmxhc3RcIixcclxuICAgIFwiTWFuZ28gQ2hlZXNlIEJsYXN0XCIsXHJcbiAgICBcIkJ1dHRlciBTY290Y2hcIixcclxuICAgIFwiQ2hvY29sYXRlIE9yZWFcIixcclxuICAgIFwiQ2hlZXNlIENha2UgRnJ1aXRcIixcclxuICAgIFwiQ29sZCBDb2ZmZWVcIixcclxuICAgIFwiSGF6ZWxudXQgQnJvd25pZSBTaGFrZVwiLFxyXG4gICAgXCJOdXR0ZWxsYSBCcm93bmllXCIsXHJcbiAgICBcIkhvdCBDaG9jb2xhdGVcIixcclxuICAgIFwiQmx1ZSBCZXJyeVwiLFxyXG4gICAgXCJDaG9jb2xhdGUgQ29sZCBDb2ZmZWVcIixcclxuICAgIFwiQ2FyYW1lbCBDb2xkIENvZmZlZVwiLFxyXG4gICAgXCJIYXplbG51dCBTaGFrZVwiLFxyXG4gICAgXCJEcnkgRnJ1aXQgU2hha2VcIixcclxuICAgIFwiQ2hvY28gQWxtb25kXCIsXHJcbiAgXSxcclxuICBbXHJcbiAgICBcIk5vbiBWZWcgQ2hlZXNlIExvYWRlZFwiLFxyXG4gICAgXCJWZWcgQ2hlZXNlIExvYWRlZFwiLFxyXG4gICAgXCJUYW5kb29yaSBNYXlvIFZlZ1wiLFxyXG4gICAgXCJQYW5lZXIgTWF5b1wiLFxyXG4gICAgXCJUYW5kb29yaSBNYXlvIFBhbmVlclwiLFxyXG4gICAgXCJDcmlzcHkgQ2hpY2tlblwiLFxyXG4gICAgXCJUYW5kb29yaSBNYXlvIENoaWNrZW5cIixcclxuICAgIFwiVmVnIENoZWVzZSBMb2FkZWRcIixcclxuICBdLFxyXG4gIFtcclxuICAgIFwiVmVnIENoZWVzZSBTYW5kd2ljaFwiLFxyXG4gICAgXCJGcmllZCBDaGlja2VuIFNhbmR3aWNoXCIsXHJcbiAgICBcIlBhbmVlciBDaGVlc2UgU2FuZHdpY2hcIixcclxuICAgIFwiU2NoZXp3YW4gQ2hpY2tlbiBTYW5kd2ljaFwiLFxyXG4gICAgXCJUYW5kb29yaSBNYXlvIENoaWNrZW5cIixcclxuICAgIFwiQ2hvY29sYXRlIFNhbmR3aWNoXCIsXHJcbiAgICBcIlZlZyBUYW5kb29yaSBNYXlvIFNhbmR3aWNoXCIsXHJcbiAgICBcIkVnZyBDaGVlc2UgU2FuZHdpY2hcIixcclxuICAgIFwiTWV4aWNhbiBWZWcgQ2hlZXNlIFNhbmR3aWNoXCIsXHJcbiAgICBcIk1leGljYW4gQ2hpY2tlbiBDaGVlc2UgKlNhbmRcIixcclxuICAgIFwiVG9tYXRvIENoaWxsaSBDaGVlc2UgU2FuZHdpY2hcIixcclxuICBdLFxyXG4gIFtcclxuICAgIFwiRmlyZWQgQ2hpY2tlbiBCdXJnZXJcIixcclxuICAgIFwiQ2x1YiAxMCBDaGVlc3kgVG93ZXIgQnVyZ2VyXCIsXHJcbiAgICBcIkNyaXNweSBDaGlja2VuIEJ1cmdlclwiLFxyXG4gICAgXCJDcmlzcHkgVmVnIEJ1cmdlclwiLFxyXG4gICAgXCJDcmlzcHkgRnJpZWQgQ2hpY2tlblwiLFxyXG4gICAgXCJLaW5nIEVnZyBCdXJnZXJcIixcclxuICAgIFwiTWV4aWNhbiBWZWcgQ2hlZXNlIEJ1cmdlclwiLFxyXG4gICAgXCJDMTBDIE1leGljYW4gQ2hpY2tlbiBCdXJnZXJcIixcclxuICBdLFxyXG4gIFtcclxuICAgIFwiV2F0ZXIgTWVsb25cIixcclxuICAgIFwiQXBwbGVcIixcclxuICAgIFwiUGluZSBBcHBsZVwiLFxyXG4gICAgXCJQYXBheWFcIixcclxuICAgIFwiTXVzayBNZWxvblwiLFxyXG4gICAgXCJCYW5hbmFcIixcclxuICAgIFwiQmxhY2sgR3JhcGVcIixcclxuICAgIFwiR3JlZW4gR3JhcGVcIixcclxuICAgIFwiQ2hpa3UgKFNhcG90bylcIixcclxuICAgIFwiUG9tb2dyZW5hdGVcIixcclxuICAgIFwiU3RyYXcgQmVycnlcIixcclxuICAgIFwiTnV0IENhc2VcIixcclxuICBdLFxyXG4gIFtcclxuICAgIFwiTWludCBNb2ppdG9cIixcclxuICAgIFwiQmx1ZSBDdXJhY2FvXCIsXHJcbiAgICBcIkdyZWVuIEFwcGxlIENydXNoXCIsXHJcbiAgICBcIlBhYW4gTW9qaXRvXCIsXHJcbiAgICBcIkx5Y2hlZSBNb2ppdG9cIixcclxuICAgIFwiV2F0ZXJtZWxvblwiLFxyXG4gICAgXCJFbmVyZ2l6ZXJcIixcclxuICAgIFwiQmx1ZSBPY2VhblwiLFxyXG4gICAgXCJNYXNhbGEgTGVtb25hZGVcIixcclxuICAgIFwiSWNlIFRlYVwiLFxyXG4gICAgXCJCdWJibGUgR3VtIE1vaml0b1wiLFxyXG4gICAgXCJCbGFjayBDdXJyYW50XCIsXHJcbiAgICBcIk1hbHQgTW9qaXRvKE5vbi1BbGNvaG9saWMpXCIsXHJcbiAgICBcIlJ1bSBNb2ppdG8oTm9uLUFsY29ob2xpYylcIixcclxuICBdLFxyXG4gIFtcclxuICAgIFwiQnV0dGVyIFNjb3RjaFwiLFxyXG4gICAgXCJCZWxnaXVtIERhcmsgQ2hvY29sYXRlXCIsXHJcbiAgICBcIk1hbmdvIFRoaWNrIFNoYWtlXCIsXHJcbiAgICBcIk9yZW8gVGhpY2sgU2hha2VcIixcclxuICAgIFwiU3RyYWJlcnJ5IFRoaWNrIFNoYWtlXCIsXHJcbiAgICBcIktpdGthdFwiLFxyXG4gICAgXCJSZWQgVmVsdmV0IFRoaWNrIFNoYWtlXCIsXHJcbiAgICBcIkNob2NvIFRoaWNrIFNoYXJlXCIsXHJcbiAgICBcIk51dHRlbGxhIFRoaWNrIFNoYWtlXCIsXHJcbiAgXSxcclxuICBbXCJCbGFjayBDb2ZmZWVcIiwgXCJDYXB1Y2lubyBDb2ZmZWVcIiwgXCJFc3ByZXNzb1wiXSxcclxuICBbXHJcbiAgICBcIkNoZWVzZSBHYXJsaWMgQnJlYWRcIixcclxuICAgIFwiR2FybGljIEJyZWFkXCIsXHJcbiAgICBcIkNoaWNrZW4gUGl6emFcIixcclxuICAgIFwiQ29ybiBQaXp6YVwiLFxyXG4gICAgXCJQYW5uZXIgUGl6emFcIixcclxuICAgIFwiVGFuZG9vcmkgQ2hpY2tlbiBQaXp6YVwiLFxyXG4gICAgXCJDaGVlemUgTG9hZGVkIFBpenphXCIsXHJcbiAgICBcIk5vbiBWZWcgTG9hZGVkIFBpenphXCIsXHJcbiAgICBcIlZlZyBMb2FkZWQgUGl6emFcIixcclxuICBdLFxyXG4gIFtcIkNoaWNrZW4gQWxmcmVkb1wiLCBcIlZlZyBBbGZyZWRvXCJdLFxyXG4gIFtcIlRhbmRvb3JpIE5hY2hvc1wiLCBcIkNoZWVzZSBOYWNob3NcIiwgXCJOYWNob3NcIl0sXHJcbiAgW1wiQ2hpY2tlbiBUYWNvc1wiLCBcIlZlZyBDaGVlc2UgVGFjb3NcIl0sXHJcbl07XHJcblxyXG5jb25zdCBwcmljZXMgPSBbXHJcbiAgW1wiMTM5Ly1cIiwgXCIxMzkvLVwiLCBcIjEzOS8tXCIsIFwiMTM5Ly1cIiwgXCIyOTkvLVwiLCBcIjM5OS8tXCIsIFwiMTk5Ly1cIiwgXCIyOTkvLVwiXSxcclxuICBbXHJcbiAgICBcIjEyOS8tXCIsXHJcbiAgICBcIjEyOS8tXCIsXHJcbiAgICBcIjE2OS8tXCIsXHJcbiAgICBcIjE5OS8tXCIsXHJcbiAgICBcIjE3OS8tXCIsXHJcbiAgICBcIjk5Ly1cIixcclxuICAgIFwiMTk5Ly1cIixcclxuICAgIFwiMTg5Ly1cIixcclxuICAgIFwiMTk5Ly1cIixcclxuICAgIFwiMTk5Ly1cIixcclxuICAgIFwiMTk5Ly1cIixcclxuICAgIFwiMTI5Ly1cIixcclxuICAgIFwiMTI5Ly1cIixcclxuICBdLFxyXG4gIFtcclxuICAgIFwiMTY5Ly1cIixcclxuICAgIFwiMTY5Ly1cIixcclxuICAgIFwiMTc5Ly1cIixcclxuICAgIFwiMTc5Ly1cIixcclxuICAgIFwiMTY5Ly1cIixcclxuICAgIFwiMTc5Ly1cIixcclxuICAgIFwiMTY5Ly1cIixcclxuICAgIFwiMTc5Ly1cIixcclxuICAgIFwiMTc5Ly1cIixcclxuICAgIFwiMTk5Ly1cIixcclxuICAgIFwiMTk5Ly1cIixcclxuICAgIFwiMTk5Ly1cIixcclxuICAgIFwiMTQ5Ly1cIixcclxuICAgIFwiMTk5Ly1cIixcclxuICAgIFwiMjA5Ly1cIixcclxuICAgIFwiMjE5Ly1cIixcclxuICAgIFwiMTk5Ly1cIixcclxuICAgIFwiMTk5Ly1cIixcclxuICAgIFwiMTY5Ly1cIixcclxuICBdLFxyXG4gIFtcIjE3OS8tXCIsIFwiMTY5Ly1cIiwgXCIxNzkvLVwiLCBcIjE4OS8tXCIsIFwiMTg5Ly1cIiwgXCIxOTkvLVwiLCBcIjE4OS8tXCIsIFwiMTc5Ly1cIl0sXHJcbiAgW1xyXG4gICAgXCIxMzkvLVwiLFxyXG4gICAgXCIxNDkvLVwiLFxyXG4gICAgXCIxMzkvLVwiLFxyXG4gICAgXCIxNjkvLVwiLFxyXG4gICAgXCIxNTkvLVwiLFxyXG4gICAgXCIxMzkvLVwiLFxyXG4gICAgXCIxNjkvLVwiLFxyXG4gICAgXCIxNDkvLVwiLFxyXG4gICAgXCIxNDkvLVwiLFxyXG4gICAgXCIxOTkvLVwiLFxyXG4gICAgXCIxNTkvLVwiLFxyXG4gIF0sXHJcbiAgW1xyXG4gICAgXCIxNjkvLVwiLFxyXG4gICAgXCIxOTkvLVwiLFxyXG4gICAgXCIxNDkvLVwiLFxyXG4gICAgXCIxMzkvLVwiLFxyXG4gICAgXCIxNDkvLVwiLFxyXG4gICAgXCIxNDkvLVwiLFxyXG4gICAgXCIxODkvLVwiLFxyXG4gICAgXCIxOTkvLVwiLFxyXG4gICAgXCIzNDkvLVwiLFxyXG4gIF0sXHJcbiAgW1xyXG4gICAgXCIxOTkvLVwiLFxyXG4gICAgXCIyMTkvLVwiLFxyXG4gICAgXCIxOTkvLVwiLFxyXG4gICAgXCIxOTkvLVwiLFxyXG4gICAgXCIyMDkvLVwiLFxyXG4gICAgXCIxOTkvLVwiLFxyXG4gICAgXCIxOTkvLVwiLFxyXG4gICAgXCIxOTkvLVwiLFxyXG4gICAgXCIyMTkvLVwiLFxyXG4gICAgXCIyMTkvLVwiLFxyXG4gICAgXCIyNDkvLVwiLFxyXG4gICAgXCIyNDkvLVwiLFxyXG4gIF0sXHJcbiAgW1xyXG4gICAgXCIxMjkvLVwiLFxyXG4gICAgXCIxMjkvLVwiLFxyXG4gICAgXCIxMjkvLVwiLFxyXG4gICAgXCIxMjkvLVwiLFxyXG4gICAgXCIxMjkvLVwiLFxyXG4gICAgXCIxMjkvLVwiLFxyXG4gICAgXCIxNDkvLVwiLFxyXG4gICAgXCIxNDkvLVwiLFxyXG4gICAgXCIxMjkvLVwiLFxyXG4gICAgXCIxMjkvLVwiLFxyXG4gICAgXCIxMjkvLVwiLFxyXG4gICAgXCIxNDkvLVwiLFxyXG4gICAgXCIxNDkvLVwiLFxyXG4gICAgXCIxNDkvLVwiLFxyXG4gIF0sXHJcbiAgW1xyXG4gICAgXCIyOTkvLVwiLFxyXG4gICAgXCIyOTkvLVwiLFxyXG4gICAgXCIyOTkvLVwiLFxyXG4gICAgXCIyOTkvLVwiLFxyXG4gICAgXCIyOTkvLVwiLFxyXG4gICAgXCIyOTkvLVwiLFxyXG4gICAgXCIyOTkvLVwiLFxyXG4gICAgXCIyNDkvLVwiLFxyXG4gICAgXCIyNDkvLVwiLFxyXG4gIF0sXHJcbiAgW1wiOTkvLVwiLCBcIjE0OS8tXCIsIFwiMTI5Ly1cIl0sXHJcbiAgW1xyXG4gICAgXCIxOTkvLVwiLFxyXG4gICAgXCI5OS8tXCIsXHJcbiAgICBcIjE5OS8tXCIsXHJcbiAgICBcIjIzOS8tXCIsXHJcbiAgICBcIjIzOS8tXCIsXHJcbiAgICBcIjI2OS8tXCIsXHJcbiAgICBcIjE5OS8tXCIsXHJcbiAgICBcIjI5OS8tXCIsXHJcbiAgICBcIjE4OS8tXCIsXHJcbiAgICBcIjU0OS8tXCIsXHJcbiAgXSxcclxuICBbXCIyOTkvLVwiLCBcIjI2OS8tXCJdLFxyXG4gIFtcIjIxOS8tXCIsIFwiMTk5Ly1cIiwgXCIyNDkgLy1cIl0sXHJcbiAgW1wiMTQ5Ly1cIiwgXCIxMzkvLVwiXSxcclxuXTtcclxuXHJcbi8vIEZ1bmN0aW9uc1xyXG5jb25zdCBlbCA9ICgoKSA9PiB7XHJcbiAgY29uc3Qgc2VsZWN0X3RhYmxlID0gKGkpID0+IHtcclxuICAgIGlmIChpID09IDYpIHtcclxuICAgICAgdGFibGVfbnVtID0gMTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRhYmxlX251bSA9IGkgKyAxO1xyXG4gICAgfVxyXG4gICAgbWFpbi5jbGFzc0xpc3QucmVtb3ZlKFwiaW5hY3RpdmVcIik7XHJcbiAgICB0YWJsZS5jbGFzc0xpc3QuYWRkKFwiaW5hY3RpdmVcIik7XHJcbiAgfTtcclxuICBjb25zdCBjcmVhdGVNZW51ID0gKCkgPT4ge1xyXG4gICAgbGV0IGsgPSA1O1xyXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAxNDsgaisrKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXNbal0ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBkZXNlcnRzID0gbWFpbi5jaGlsZE5vZGVzW2tdO1xyXG4gICAgICAgIGNvbnN0IGRpc2hfY29udGVudCA9IGRlc2VydHMuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSk7XHJcbiAgICAgICAgZGlzaF9jb250ZW50LmNsYXNzTGlzdC5hZGQoXCJkaXNoX2NvbnRlbnRcIik7XHJcbiAgICAgICAgZGlzaF9jb250ZW50LmlubmVySFRNTCA9IGBcclxuICAgICAgPHNwYW4gY2xhc3M9XCJkaXNoXCI+JHtpdGVtc1tqXVtpXX08L3NwYW4+XHJcbiAgICAgIDxpbWcgc3JjPVwiLi9pbWFnZXMvcGx1cy5zdmdcIiBjbGFzcz1cImFkZF9kaXNoXCIgYWx0PVwiYWRkIHRvIGNhcnRcIj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJwcmljZVwiPuKCuSR7cHJpY2VzW2pdW2ldfTwvc3Bhbj5gO1xyXG4gICAgICB9XHJcbiAgICAgIGsgKz0gMjtcclxuICAgICAgcGx1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYWRkX2Rpc2hcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBkcm9wRG93biA9IChpKSA9PiB7XHJcbiAgICBzZWN0aW9uW2ldLmNsYXNzTGlzdC50b2dnbGUoXCJpbmFjdGl2ZVwiKTtcclxuICB9O1xyXG4gIGNvbnN0IGFkZF90b19jYXJ0ID0gKGkpID0+IHtcclxuICAgIGxldCBkaXNoX25hbWUgPSBwbHVzW2ldLnBhcmVudEVsZW1lbnQuY2hpbGROb2Rlc1sxXS5pbm5lckhUTUw7XHJcbiAgICBsZXQgcHJpY2UgPSBwbHVzW2ldLm5leHRFbGVtZW50U2libGluZy5pbm5lckhUTUw7XHJcbiAgICBpZiAoaSA8IDExKSB7XHJcbiAgICAgIGRpc2hfbmFtZSA9XHJcbiAgICAgICAgcGx1c1tpXS5wYXJlbnRFbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuaW5uZXJIVE1MICtcclxuICAgICAgICBcIiBcIiArXHJcbiAgICAgICAgZGlzaF9uYW1lO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZGlzaF9wcmljZSA9IHBsdXNbaV0ubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG4gICAgaWYgKCFjaGVja19kdXBsaWNhdGUoZGlzaF9uYW1lKSkge1xyXG4gICAgICBjb25zdCBkaXNoID0gY2FydC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKTtcclxuICAgICAgZGlzaC5jbGFzc0xpc3QuYWRkKFwiY2FydF9pdGVtXCIpO1xyXG4gICAgICBkaXNoLmlubmVySFRNTCA9IGBcclxuICAgIDxzcGFuIGNsYXNzPVwiaXRlbVwiPiR7ZGlzaF9uYW1lfTwvc3Bhbj5cclxuICAgIDxidXR0b24gY2xhc3M9XCJpbmNyZWFzZVwiPis8L2J1dHRvbj5cclxuICAgIDxzcGFuIGNsYXNzPVwicXVhbnRpdHlcIj4xPC9zcGFuPlxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cImRlY3JlYXNlXCI+LTwvYnV0dG9uPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJpdGVtX3ByaWNlXCI+JHtwcmljZX08L3NwYW4+YDtcclxuICAgICAgY2FydF9pdGVtX3F1YW50aXR5KCk7XHJcbiAgICAgIHVwZGF0ZV9hbW91bnQoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBjaGVja19kdXBsaWNhdGUgPSAoc3RyKSA9PiB7XHJcbiAgICBpZiAoY2FydC5jaGlsZE5vZGVzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBjYXJ0LmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoY2FydC5jaGlsZE5vZGVzW2ldLmNoaWxkTm9kZXNbMV0uaW5uZXJIVE1MID09IHN0cikge1xyXG4gICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2FydF9pdGVtX3F1YW50aXR5ID0gKCkgPT4ge1xyXG4gICAgaW5jcmVhc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmluY3JlYXNlXCIpO1xyXG4gICAgZGVjcmVhc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRlY3JlYXNlXCIpO1xyXG4gICAgcXVhbnRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnF1YW50aXR5XCIpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbmNyZWFzZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpbmNyZWFzZVtpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIHF1YW50aXR5W2ldLmlubmVySFRNTCA9IHBhcnNlSW50KHF1YW50aXR5W2ldLmlubmVySFRNTCkgKyAxO1xyXG4gICAgICAgIHVwZGF0ZV9hbW91bnQoKTtcclxuICAgICAgfSk7XHJcbiAgICAgIGRlY3JlYXNlW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHBhcnNlSW50KHF1YW50aXR5W2ldLmlubmVySFRNTCkgPD0gMSkge1xyXG4gICAgICAgICAgY2FydC5yZW1vdmVDaGlsZChxdWFudGl0eVtpXS5wYXJlbnRFbGVtZW50KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcXVhbnRpdHlbaV0uaW5uZXJIVE1MID0gcGFyc2VJbnQocXVhbnRpdHlbaV0uaW5uZXJIVE1MKSAtIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHVwZGF0ZV9hbW91bnQoKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdXBkYXRlX2Ftb3VudCA9ICgpID0+IHtcclxuICAgIGxldCB0b3RhbCA9IDA7XHJcbiAgICBjb25zdCBwcmljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaXRlbV9wcmljZVwiKTtcclxuICAgIGNvbnN0IHF1YW50aXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5xdWFudGl0eVwiKTtcclxuICAgIGNvbnN0IGZpbmFsX2Ftb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG90YWxcIik7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBxdWFudGl0eS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBsZXQgZGF0YSA9IHBhcnNlSW50KHByaWNlW2ldLmlubmVySFRNTC5yZXBsYWNlKC9bXjAtOV0vZywgXCJcIikpO1xyXG4gICAgICBsZXQgbnVtID0gcGFyc2VJbnQocXVhbnRpdHlbaV0uaW5uZXJIVE1MKTtcclxuICAgICAgdG90YWwgKz0gZGF0YSAqIG51bTtcclxuICAgIH1cclxuXHJcbiAgICBjaGVja19jYXJ0KCk7XHJcbiAgICBmaW5hbF9hbW91bnQuaW5uZXJIVE1MID0gYOKCuSR7dG90YWx9Ly1gO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNoZWNrX2NhcnQgPSAoKSA9PiB7XHJcbiAgICBpZiAoY2FydC5pbm5lckhUTUwubGVuZ3RoIDwgMzUpIHtcclxuICAgICAgY2FydC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjYXJ0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBwbGFjZV9vcmRlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IGZpbmFsX2Ftb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG90YWxcIik7XHJcbiAgICBsZXQgb3JkZXJfZGF0YSA9IGB0YWJsZSBubzogJHt0YWJsZV9udW19XFxudG90YWw6ICR7ZmluYWxfYW1vdW50LmlubmVySFRNTH1cXG5cXG5gO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYXJ0LmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgbGV0IG5hbWUgPSBjYXJ0LmNoaWxkTm9kZXNbaV0uY2hpbGROb2Rlc1sxXS5pbm5lckhUTUw7XHJcbiAgICAgIGxldCBxdWFudGl0eSA9IGNhcnQuY2hpbGROb2Rlc1tpXS5jaGlsZE5vZGVzWzVdLmlubmVySFRNTDtcclxuICAgICAgbGV0IHByaWNlID0gY2FydC5jaGlsZE5vZGVzW2ldLmNoaWxkTm9kZXNbOV0uaW5uZXJIVE1MO1xyXG4gICAgICBvcmRlcl9kYXRhICs9IGAke25hbWV9XFx0KCR7cXVhbnRpdHl9KSAke3ByaWNlfVxcbmA7XHJcbiAgICB9XHJcbiAgICBzZW5kTWVzc2FnZShvcmRlcl9kYXRhKTtcclxuICAgIGFsZXJ0KGBvcmRlciBzdWJtaXR0ZWQgZm9yIHRhYmxlICR7dGFibGVfbnVtfWApO1xyXG4gICAgYWxlcnQoYGRvbmVgKTtcclxuICAgIHJlc2V0KCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2VuZE1lc3NhZ2UgPSAobWVzc2FnZSkgPT4ge1xyXG4gICAgY29uc3QgYm90VG9rZW4gPSBcIjYyMDc0OTU4NzE6QUFIemNPeTlYaFM4VDFHQ29kQ2dUS1NQSTVhUjc1MVVUQkVcIjtcclxuICAgIGNvbnN0IGNoYXRJZCA9IFwiLTEwMDE5NTc5NzcyOTlcIjtcclxuICAgIGNvbnN0IHBhcnNlTW9kZSA9IFwiTWFya2Rvd25cIjtcclxuXHJcbiAgICBmZXRjaChgaHR0cHM6Ly9hcGkudGVsZWdyYW0ub3JnL2JvdCR7Ym90VG9rZW59L3NlbmRNZXNzYWdlYCwge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBjaGF0X2lkOiBjaGF0SWQsXHJcbiAgICAgICAgdGV4dDogbWVzc2FnZSxcclxuICAgICAgICBwYXJzZV9tb2RlOiBwYXJzZU1vZGUsXHJcbiAgICAgIH0pLFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gc2VuZCBtZXNzYWdlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBzZW5kaW5nIG1lc3NhZ2U6XCIsIGVycm9yKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVzZXQgPSAoKSA9PiB7XHJcbiAgICBjYXJ0LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBjaGVja19jYXJ0KCk7XHJcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoXCJpbmFjdGl2ZVwiKTtcclxuICAgIHRhYmxlLmNsYXNzTGlzdC5yZW1vdmUoXCJpbmFjdGl2ZVwiKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgc2VsZWN0X3RhYmxlLFxyXG4gICAgY3JlYXRlTWVudSxcclxuICAgIGRyb3BEb3duLFxyXG4gICAgYWRkX3RvX2NhcnQsXHJcbiAgICBjYXJ0X2l0ZW1fcXVhbnRpdHksXHJcbiAgICBwbGFjZV9vcmRlcixcclxuICB9O1xyXG59KSgpO1xyXG5cclxuLy8gRXZlbnRzXHJcbmZvciAobGV0IGkgPSAwOyBpIDwgc2VjdGlvbl9uYW1lLmxlbmd0aDsgaSsrKSB7XHJcbiAgc2VjdGlvbl9uYW1lW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBlbC5kcm9wRG93bihpKTtcclxuICB9KTtcclxufVxyXG5lbC5jcmVhdGVNZW51KCk7XHJcbmZvciAobGV0IGkgPSAwOyBpIDwgcGx1cy5sZW5ndGg7IGkrKykge1xyXG4gIHBsdXNbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGVsLmFkZF90b19jYXJ0KGkpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5lbC5jYXJ0X2l0ZW1fcXVhbnRpdHkoKTtcclxub3JkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGVsLnBsYWNlX29yZGVyKTtcclxuZm9yIChsZXQgaSA9IDA7IGkgPCB0bnVtLmxlbmd0aDsgaSsrKSB7XHJcbiAgdG51bVtpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgZWwuc2VsZWN0X3RhYmxlKGkpO1xyXG4gIH0pO1xyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==