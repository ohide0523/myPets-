"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Context */ \"./components/Context.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar login = function() {\n    _s();\n    var googleLogin = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_components_Context__WEBPACK_IMPORTED_MODULE_4__.Context).googleLogin;\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_components_Context__WEBPACK_IMPORTED_MODULE_4__.Context), uid = ref.uid, email = ref.email, setEmail = ref.setEmail, password = ref.password, setPassword = ref.setPassword;\n    var onClickTop = function() {\n        if (uid) {\n            router.push(\"/Top\");\n        } else {\n            alert(\"ログインしてください。。\");\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"/Users/hideyukiinokuchi/Desktop/mypets/pages/login.js\",\n            lineNumber: 22,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                __source: {\n                    fileName: \"/Users/hideyukiinokuchi/Desktop/mypets/pages/login.js\",\n                    lineNumber: 23,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: \"ログインページ\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                onClick: googleLogin,\n                __source: {\n                    fileName: \"/Users/hideyukiinokuchi/Desktop/mypets/pages/login.js\",\n                    lineNumber: 24,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: \"Googleログイン\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                __source: {\n                    fileName: \"/Users/hideyukiinokuchi/Desktop/mypets/pages/login.js\",\n                    lineNumber: 25,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: \"emailログインはこちら\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                type: \"email\",\n                value: email,\n                onChange: function(e) {\n                    return setEmail(e.target.value);\n                },\n                __source: {\n                    fileName: \"/Users/hideyukiinokuchi/Desktop/mypets/pages/login.js\",\n                    lineNumber: 26,\n                    columnNumber: 7\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                type: \"password\",\n                value: password,\n                onChange: function(e) {\n                    return setPassword(e.target.value);\n                },\n                __source: {\n                    fileName: \"/Users/hideyukiinokuchi/Desktop/mypets/pages/login.js\",\n                    lineNumber: 27,\n                    columnNumber: 7\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                __source: {\n                    fileName: \"/Users/hideyukiinokuchi/Desktop/mypets/pages/login.js\",\n                    lineNumber: 29,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: \"email開くんとさはこちら\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                type: \"email\",\n                value: email,\n                onChange: function(e) {\n                    return setEmail(e.target.value);\n                },\n                __source: {\n                    fileName: \"/Users/hideyukiinokuchi/Desktop/mypets/pages/login.js\",\n                    lineNumber: 30,\n                    columnNumber: 7\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                type: \"password\",\n                value: password,\n                onChange: function(e) {\n                    return setPassword(e.target.value);\n                },\n                __source: {\n                    fileName: \"/Users/hideyukiinokuchi/Desktop/mypets/pages/login.js\",\n                    lineNumber: 31,\n                    columnNumber: 7\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                __source: {\n                    fileName: \"/Users/hideyukiinokuchi/Desktop/mypets/pages/login.js\",\n                    lineNumber: 32,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: \"emailログインする\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                onClick: onClickTop,\n                __source: {\n                    fileName: \"/Users/hideyukiinokuchi/Desktop/mypets/pages/login.js\",\n                    lineNumber: 34,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: \"トップページへ\"\n            })\n        ]\n    }));\n};\n_s(login, \"7zdj83uTEm4umahgKqrXOckQvvg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (login);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBNEI7QUFDVztBQUNFO0FBQ007OztBQUUvQyxHQUFLLENBQUNLLEtBQUssR0FBRyxRQUNkLEdBRG9CLENBQUM7O0lBQ25CLEdBQUssQ0FBR0MsV0FBVyxHQUFJSCxpREFBVSxDQUFDQyx3REFBTyxFQUFqQ0UsV0FBVztJQUNuQixHQUFLLENBQUNDLE1BQU0sR0FBR04sc0RBQVM7SUFDeEIsR0FBSyxDQUErQ0UsR0FBbUIsR0FBbkJBLGlEQUFVLENBQUNDLHdEQUFPLEdBQTlESSxHQUFHLEdBQXlDTCxHQUFtQixDQUEvREssR0FBRyxFQUFDQyxLQUFLLEdBQW1DTixHQUFtQixDQUEzRE0sS0FBSyxFQUFDQyxRQUFRLEdBQTBCUCxHQUFtQixDQUFyRE8sUUFBUSxFQUFDQyxRQUFRLEdBQWlCUixHQUFtQixDQUE1Q1EsUUFBUSxFQUFDQyxXQUFXLEdBQUtULEdBQW1CLENBQW5DUyxXQUFXO0lBRS9DLEdBQUssQ0FBQ0MsVUFBVSxHQUFHLFFBQ3JCLEdBRDJCLENBQUM7UUFDeEIsRUFBRSxFQUFFTCxHQUFHLEVBQUUsQ0FBQztZQUNSRCxNQUFNLENBQUNPLElBQUksQ0FBQyxDQUFNO1FBQ3BCLENBQUMsTUFBTSxDQUFDO1lBQ05DLEtBQUssQ0FBQyxDQUFjO1FBQ0UsQ0FBdkI7SUFDSCxDQUFDO0lBSUQsTUFBTSx1RUFDSEMsQ0FBRzs7Ozs7Ozs7aUZBQ0RDLENBQUU7Ozs7Ozs7MEJBQUMsQ0FBTzs7aUZBQ0lDLENBQVI7Z0JBQUNDLE9BQU8sRUFBRWIsV0FBVzs7Ozs7OzswQkFBRSxDQUFVOztpRkFDL0JVLENBQUw7Ozs7Ozs7MEJBQUMsQ0FBYTs7aUZBQ0RJLENBQVg7Z0JBQUNDLElBQUksRUFBQyxDQUFPO2dCQUFDQyxLQUFLLEVBQUViLEtBQUs7Z0JBQUVjLFFBQVEsRUFBRUMsUUFBUSxDQUFSQSxDQUFDO29CQUFFZCxNQUFNLENBQU5BLFFBQVEsQ0FBQ2MsQ0FBQyxDQUFDQyxNQUFNLENBQUNILEtBQUs7Ozs7Ozs7OztpRkFDckVGLENBQUs7Z0JBQUNDLElBQUksRUFBQyxDQUFVO2dCQUFDQyxLQUFLLEVBQUVYLFFBQVE7Z0JBQUVZLFFBQVEsRUFBRUMsUUFBUSxDQUFSQSxDQUFDO29CQUFFWixNQUFNLENBQU5BLFdBQVcsQ0FBQ1ksQ0FBQyxDQUFDQyxNQUFNLENBQUNILEtBQUs7Ozs7Ozs7OztpRkFFOUVOLENBQUc7Ozs7Ozs7MEJBQUMsQ0FBYzs7aUZBQ0FJLENBQWI7Z0JBQUNDLElBQUksRUFBQyxDQUFPO2dCQUFDQyxLQUFLLEVBQUViLEtBQUs7Z0JBQUVjLFFBQVEsRUFBRUMsUUFBUSxDQUFSQSxDQUFDO29CQUFFZCxNQUFNLENBQU5BLFFBQVEsQ0FBQ2MsQ0FBQyxDQUFDQyxNQUFNLENBQUNILEtBQUs7Ozs7Ozs7OztpRkFDckVGLENBQUs7Z0JBQUNDLElBQUksRUFBQyxDQUFVO2dCQUFDQyxLQUFLLEVBQUVYLFFBQVE7Z0JBQUVZLFFBQVEsRUFBRUMsUUFBUSxDQUFSQSxDQUFDO29CQUFFWixNQUFNLENBQU5BLFdBQVcsQ0FBQ1ksQ0FBQyxDQUFDQyxNQUFNLENBQUNILEtBQUs7Ozs7Ozs7OztpRkFDOUVKLENBQU07Ozs7Ozs7MEJBQUMsQ0FBVzs7aUZBRU5GLENBQVQ7Z0JBQUNHLE9BQU8sRUFBRU4sVUFBVTs7Ozs7OzswQkFBRSxDQUFPOzs7O0FBR3ZDLENBQUM7R0EvQktSLEtBQUs7O1FBRU1KLGtEQUFTOzs7QUErQjFCLCtEQUFlSSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanM/ODFiMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDb250ZXh0IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29udGV4dFwiO1xuXG5jb25zdCBsb2dpbiA9ICgpID0+IHtcbiAgY29uc3QgeyBnb29nbGVMb2dpbn0gPSB1c2VDb250ZXh0KENvbnRleHQpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyB1aWQsZW1haWwsc2V0RW1haWwscGFzc3dvcmQsc2V0UGFzc3dvcmQgfSA9IHVzZUNvbnRleHQoQ29udGV4dCk7XG5cbiAgY29uc3Qgb25DbGlja1RvcCA9ICgpID0+IHtcbiAgICBpZiAodWlkKSB7XG4gICAgICByb3V0ZXIucHVzaChcIi9Ub3BcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFsZXJ0KFwi44Ot44Kw44Kk44Oz44GX44Gm44GP44Gg44GV44GE44CC44CCXCIpO1xuICAgIH1cbiAgfTtcblxuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPuODreOCsOOCpOODs+ODmuODvOOCuDwvaDE+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2dvb2dsZUxvZ2lufT5Hb29nbGXjg63jgrDjgqTjg7M8L2J1dHRvbj5cbiAgICAgIDxkaXY+ZW1haWzjg63jgrDjgqTjg7Pjga/jgZPjgaHjgok8L2Rpdj5cbiAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiB2YWx1ZT17ZW1haWx9IG9uQ2hhbmdlPXtlPT5zZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9Lz5cbiAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiB2YWx1ZT17cGFzc3dvcmR9IG9uQ2hhbmdlPXtlPT5zZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9Lz5cblxuICAgICAgPGRpdj5lbWFpbOmWi+OBj+OCk+OBqOOBleOBr+OBk+OBoeOCiTwvZGl2PlxuICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIHZhbHVlPXtlbWFpbH0gb25DaGFuZ2U9e2U9PnNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX0vPlxuICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHZhbHVlPXtwYXNzd29yZH0gb25DaGFuZ2U9e2U9PnNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX0vPlxuICAgICAgPGJ1dHRvbj5lbWFpbOODreOCsOOCpOODs+OBmeOCizwvYnV0dG9uPlxuXG4gICAgICA8ZGl2IG9uQ2xpY2s9e29uQ2xpY2tUb3B9PuODiOODg+ODl+ODmuODvOOCuOOBuDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbG9naW47XG4iXSwibmFtZXMiOlsiTGluayIsInVzZVJvdXRlciIsIlJlYWN0IiwidXNlQ29udGV4dCIsIkNvbnRleHQiLCJsb2dpbiIsImdvb2dsZUxvZ2luIiwicm91dGVyIiwidWlkIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJvbkNsaWNrVG9wIiwicHVzaCIsImFsZXJ0IiwiZGl2IiwiaDEiLCJidXR0b24iLCJvbkNsaWNrIiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/login.js\n");

/***/ })

});