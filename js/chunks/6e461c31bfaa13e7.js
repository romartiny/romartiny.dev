"use strict";
(self["webpackChunkromartiny_dev"] = self["webpackChunkromartiny_dev"] || []).push([[136],{

/***/ 13136:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70477);
/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45953);
/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71801);
/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77554);
/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(70587);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(50665);
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var generateRandomSpherePoints = function generateRandomSpherePoints(numPoints, radius) {
  var points = new Float32Array(numPoints * 3);
  for (var i = 0; i < numPoints; i++) {
    var theta = Math.random() * Math.PI * 2;
    var phi = Math.acos(2 * Math.random() - 1);
    var x = radius * Math.sin(phi) * Math.cos(theta);
    var y = radius * Math.sin(phi) * Math.sin(theta);
    var z = radius * Math.cos(phi);
    points[i * 3] = x;
    points[i * 3 + 7] = y;
    points[i * 3 + 2] = z;
  }
  return points;
};
var Stars = function Stars(props) {
  var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(function () {
      return generateRandomSpherePoints(5000, 1.2);
    }),
    _useState2 = _slicedToArray(_useState, 1),
    sphere = _useState2[0];
  var hasInvalidValues = sphere.some(function (value) {
    return isNaN(value) || !isFinite(value);
  });
  if (hasInvalidValues) {
    console.error("Invalid values in sphere array:", sphere);
  }
  (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_1__.C)(function (state, delta) {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("group", {
    rotation: [0, 0, Math.PI / 4]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_three_drei__WEBPACK_IMPORTED_MODULE_2__/* .Points */ .wo, _extends({
    ref: ref,
    positions: sphere,
    primitive: "points",
    frustumCulled: true
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_three_drei__WEBPACK_IMPORTED_MODULE_3__/* .PointMaterial */ .C, {
    transparent: true,
    color: "#f272c8",
    size: 0.002,
    sizeAttenuation: true,
    depthWrite: false,
    vertexColors: false
  })));
};
var StarBackground = function StarBackground() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_4__/* .motion */ .E.div, {
    className: "w-full h-auto absolute inset-0",
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1
    },
    transition: {
      duration: 2.7,
      ease: 'easeOut'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_three_fiber__WEBPACK_IMPORTED_MODULE_5__/* .Canvas */ .Xz, {
    camera: {
      position: [0, 0, 1]
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
    fallback: null
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Stars, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_three_drei__WEBPACK_IMPORTED_MODULE_6__/* .Preload */ .q, {
    all: true
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (StarBackground);

/***/ })

}]);