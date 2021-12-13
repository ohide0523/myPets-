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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Context */ \"./components/Context.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar login = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_components_Context__WEBPACK_IMPORTED_MODULE_4__.Context), uid = ref.uid, email = ref.email, setEmail = ref.setEmail, password = ref.password, setPassword = ref.setPassword, emailLogin = ref.emailLogin, googleLogin = ref.googleLogin;\n    var onClickTop = function() {\n        if (uid) {\n            router.push(\"/Top\");\n        } else {\n            alert(\"ログインしてください。。\");\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"/Users/hideyukiinokuchi/Desktop/mypets/pages/login.js\",\n            lineNumber: 21,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                __source: {\n                    fileName: \"/Users/hideyukiinokuchi/Desktop/mypets/pages/login.js\",\n                    lineNumber: 22,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: \"ログインページ\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                onClick: googleLogin,\n                __source: {\n                    fileName: \"/Users/hideyukiinokuchi/Desktop/mypets/pages/login.js\",\n                    lineNumber: 23,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: \"Googleログイン\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                __source: {\n                    fileName: \"/Users/hideyukiinokuchi/Desktop/mypets/pages/login.js\",\n                    lineNumber: 24,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: \"emailログインはこちら\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                type: \"email\",\n                value: email,\n                onChange: function(e) {\n                    return setEmail(e.target.value);\n                },\n                __source: {\n                    fileName: \"/Users/hideyukiinokuchi/Desktop/mypets/pages/login.js\",\n                    lineNumber: 25,\n                    columnNumber: 7\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                type: \"password\",\n                value: password,\n                onChange: function(e) {\n                    return setPassword(e.target.value);\n                },\n                __source: {\n                    fileName: \"/Users/hideyukiinokuchi/Desktop/mypets/pages/login.js\",\n                    lineNumber: 26,\n                    columnNumber: 7\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                onClick: emailLogin,\n                __source: {\n                    fileName: \"/Users/hideyukiinokuchi/Desktop/mypets/pages/login.js\",\n                    lineNumber: 27,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: \"emailアカウント作成する\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                __source: {\n                    fileName: \"/Users/hideyukiinokuchi/Desktop/mypets/pages/login.js\",\n                    lineNumber: 29,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: \"emailアカウント作成はこちら\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                type: \"email\",\n                value: email,\n                onChange: function(e) {\n                    return setEmail(e.target.value);\n                },\n                __source: {\n                    fileName: \"/Users/hideyukiinokuchi/Desktop/mypets/pages/login.js\",\n                    lineNumber: 30,\n                    columnNumber: 7\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                type: \"password\",\n                value: password,\n                onChange: function(e) {\n                    return setPassword(e.target.value);\n                },\n                __source: {\n                    fileName: \"/Users/hideyukiinokuchi/Desktop/mypets/pages/login.js\",\n                    lineNumber: 31,\n                    columnNumber: 7\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                __source: {\n                    fileName: \"/Users/hideyukiinokuchi/Desktop/mypets/pages/login.js\",\n                    lineNumber: 32,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: \"emailアカウント作成する\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                onClick: onClickTop,\n                __source: {\n                    fileName: \"/Users/hideyukiinokuchi/Desktop/mypets/pages/login.js\",\n                    lineNumber: 34,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: \"トップページへ\"\n            })\n        ]\n    }));\n};\n_s(login, \"nE76HUWLBafQ4OV2v7S3nokzp+M=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (login);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBNEI7QUFDVztBQUNFO0FBQ007OztBQUUvQyxHQUFLLENBQUNLLEtBQUssR0FBRyxRQUNkLEdBRG9CLENBQUM7O0lBQ25CLEdBQUssQ0FBQ0MsTUFBTSxHQUFHTCxzREFBUztJQUN4QixHQUFLLENBQXNFRSxHQUFtQixHQUFuQkEsaURBQVUsQ0FBQ0Msd0RBQU8sR0FBckZHLEdBQUcsR0FBZ0VKLEdBQW1CLENBQXRGSSxHQUFHLEVBQUNDLEtBQUssR0FBMERMLEdBQW1CLENBQWxGSyxLQUFLLEVBQUNDLFFBQVEsR0FBaUROLEdBQW1CLENBQTVFTSxRQUFRLEVBQUNDLFFBQVEsR0FBd0NQLEdBQW1CLENBQW5FTyxRQUFRLEVBQUNDLFdBQVcsR0FBNEJSLEdBQW1CLENBQTFEUSxXQUFXLEVBQUNDLFVBQVUsR0FBaUJULEdBQW1CLENBQTlDUyxVQUFVLEVBQUNDLFdBQVcsR0FBS1YsR0FBbUIsQ0FBbkNVLFdBQVc7SUFFdEUsR0FBSyxDQUFDQyxVQUFVLEdBQUcsUUFDckIsR0FEMkIsQ0FBQztRQUN4QixFQUFFLEVBQUVQLEdBQUcsRUFBRSxDQUFDO1lBQ1JELE1BQU0sQ0FBQ1MsSUFBSSxDQUFDLENBQU07UUFDcEIsQ0FBQyxNQUFNLENBQUM7WUFDTkMsS0FBSyxDQUFDLENBQWM7UUFDRSxDQUF2QjtJQUNILENBQUM7SUFJRCxNQUFNLHVFQUNIQyxDQUFHOzs7Ozs7OztpRkFDREMsQ0FBRTs7Ozs7OzswQkFBQyxDQUFPOztpRkFDSUMsQ0FBUjtnQkFBQ0MsT0FBTyxFQUFFUCxXQUFXOzs7Ozs7OzBCQUFFLENBQVU7O2lGQUMvQkksQ0FBTDs7Ozs7OzswQkFBQyxDQUFhOztpRkFDREksQ0FBWDtnQkFBQ0MsSUFBSSxFQUFDLENBQU87Z0JBQUNDLEtBQUssRUFBRWYsS0FBSztnQkFBRWdCLFFBQVEsRUFBRUMsUUFBUSxDQUFSQSxDQUFDO29CQUFFaEIsTUFBTSxDQUFOQSxRQUFRLENBQUNnQixDQUFDLENBQUNDLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7Ozs7O2lGQUNyRUYsQ0FBSztnQkFBQ0MsSUFBSSxFQUFDLENBQVU7Z0JBQUNDLEtBQUssRUFBRWIsUUFBUTtnQkFBRWMsUUFBUSxFQUFFQyxRQUFRLENBQVJBLENBQUM7b0JBQUVkLE1BQU0sQ0FBTkEsV0FBVyxDQUFDYyxDQUFDLENBQUNDLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7Ozs7O2lGQUM5RUosQ0FBTTtnQkFBQ0MsT0FBTyxFQUFFUixVQUFVOzs7Ozs7OzBCQUFFLENBQWM7O2lGQUV4QkssQ0FBZjs7Ozs7OzswQkFBQyxDQUFnQjs7aUZBQ0VJLENBQWpCO2dCQUFDQyxJQUFJLEVBQUMsQ0FBTztnQkFBQ0MsS0FBSyxFQUFFZixLQUFLO2dCQUFFZ0IsUUFBUSxFQUFFQyxRQUFRLENBQVJBLENBQUM7b0JBQUVoQixNQUFNLENBQU5BLFFBQVEsQ0FBQ2dCLENBQUMsQ0FBQ0MsTUFBTSxDQUFDSCxLQUFLOzs7Ozs7Ozs7aUZBQ3JFRixDQUFLO2dCQUFDQyxJQUFJLEVBQUMsQ0FBVTtnQkFBQ0MsS0FBSyxFQUFFYixRQUFRO2dCQUFFYyxRQUFRLEVBQUVDLFFBQVEsQ0FBUkEsQ0FBQztvQkFBRWQsTUFBTSxDQUFOQSxXQUFXLENBQUNjLENBQUMsQ0FBQ0MsTUFBTSxDQUFDSCxLQUFLOzs7Ozs7Ozs7aUZBQzlFSixDQUFNOzs7Ozs7OzBCQUFDLENBQWM7O2lGQUVIRixDQUFmO2dCQUFDRyxPQUFPLEVBQUVOLFVBQVU7Ozs7Ozs7MEJBQUUsQ0FBTzs7OztBQUd2QyxDQUFDO0dBL0JLVCxLQUFLOztRQUNNSixrREFBUzs7O0FBZ0MxQiwrREFBZUksS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2xvZ2luLmpzPzgxYjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gXCIuLi9jb21wb25lbnRzL0NvbnRleHRcIjtcblxuY29uc3QgbG9naW4gPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IHVpZCxlbWFpbCxzZXRFbWFpbCxwYXNzd29yZCxzZXRQYXNzd29yZCxlbWFpbExvZ2luLGdvb2dsZUxvZ2luIH0gPSB1c2VDb250ZXh0KENvbnRleHQpO1xuXG4gIGNvbnN0IG9uQ2xpY2tUb3AgPSAoKSA9PiB7XG4gICAgaWYgKHVpZCkge1xuICAgICAgcm91dGVyLnB1c2goXCIvVG9wXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhbGVydChcIuODreOCsOOCpOODs+OBl+OBpuOBj+OBoOOBleOBhOOAguOAglwiKTtcbiAgICB9XG4gIH07XG5cblxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT7jg63jgrDjgqTjg7Pjg5rjg7zjgrg8L2gxPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtnb29nbGVMb2dpbn0+R29vZ2xl44Ot44Kw44Kk44OzPC9idXR0b24+XG4gICAgICA8ZGl2PmVtYWls44Ot44Kw44Kk44Oz44Gv44GT44Gh44KJPC9kaXY+XG4gICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgdmFsdWU9e2VtYWlsfSBvbkNoYW5nZT17ZT0+c2V0RW1haWwoZS50YXJnZXQudmFsdWUpfS8+XG4gICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgdmFsdWU9e3Bhc3N3b3JkfSBvbkNoYW5nZT17ZT0+c2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfS8+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2VtYWlsTG9naW59PmVtYWls44Ki44Kr44Km44Oz44OI5L2c5oiQ44GZ44KLPC9idXR0b24+XG5cbiAgICAgIDxkaXY+ZW1haWzjgqLjgqvjgqbjg7Pjg4jkvZzmiJDjga/jgZPjgaHjgok8L2Rpdj5cbiAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiB2YWx1ZT17ZW1haWx9IG9uQ2hhbmdlPXtlPT5zZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9Lz5cbiAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiB2YWx1ZT17cGFzc3dvcmR9IG9uQ2hhbmdlPXtlPT5zZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9Lz5cbiAgICAgIDxidXR0b24+ZW1haWzjgqLjgqvjgqbjg7Pjg4jkvZzmiJDjgZnjgos8L2J1dHRvbj5cblxuICAgICAgPGRpdiBvbkNsaWNrPXtvbkNsaWNrVG9wfT7jg4jjg4Pjg5fjg5rjg7zjgrjjgbg8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvZ2luO1xuIl0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VSb3V0ZXIiLCJSZWFjdCIsInVzZUNvbnRleHQiLCJDb250ZXh0IiwibG9naW4iLCJyb3V0ZXIiLCJ1aWQiLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImVtYWlsTG9naW4iLCJnb29nbGVMb2dpbiIsIm9uQ2xpY2tUb3AiLCJwdXNoIiwiYWxlcnQiLCJkaXYiLCJoMSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/login.js\n");

/***/ })

});