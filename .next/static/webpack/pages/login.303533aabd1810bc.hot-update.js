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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Context */ \"./components/Context.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar login = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_components_Context__WEBPACK_IMPORTED_MODULE_4__.Context), uid = ref.uid, emainewEmail = ref.emainewEmail, setNewEmail = ref.setNewEmail, newPassword = ref.newPassword, setNewPassword = ref.setNewPassword, emailLogin = ref.emailLogin, googleLogin = ref.googleLogin;\n    var onClickTop = function() {\n        if (uid) {\n            router.push(\"/Top\");\n        } else {\n            alert(\"ログインしてください。。\");\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"/Users/hideyukiinokuchi/Desktop/mypets/pages/login.js\",\n            lineNumber: 21,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                __source: {\n                    fileName: \"/Users/hideyukiinokuchi/Desktop/mypets/pages/login.js\",\n                    lineNumber: 22,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: \"ログインページ\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                onClick: googleLogin,\n                __source: {\n                    fileName: \"/Users/hideyukiinokuchi/Desktop/mypets/pages/login.js\",\n                    lineNumber: 23,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: \"Googleログイン\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                __source: {\n                    fileName: \"/Users/hideyukiinokuchi/Desktop/mypets/pages/login.js\",\n                    lineNumber: 24,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: \"emailログインはこちら\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                type: \"email\",\n                value: email,\n                onChange: function(e) {\n                    return setEmail(e.target.value);\n                },\n                __source: {\n                    fileName: \"/Users/hideyukiinokuchi/Desktop/mypets/pages/login.js\",\n                    lineNumber: 25,\n                    columnNumber: 7\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                type: \"password\",\n                value: password,\n                onChange: function(e) {\n                    return setPassword(e.target.value);\n                },\n                __source: {\n                    fileName: \"/Users/hideyukiinokuchi/Desktop/mypets/pages/login.js\",\n                    lineNumber: 26,\n                    columnNumber: 7\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                onClick: emailLogin,\n                __source: {\n                    fileName: \"/Users/hideyukiinokuchi/Desktop/mypets/pages/login.js\",\n                    lineNumber: 27,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: \"emailログインする\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                __source: {\n                    fileName: \"/Users/hideyukiinokuchi/Desktop/mypets/pages/login.js\",\n                    lineNumber: 29,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: \"emailアカウント作成はこちら\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                type: \"newEmail\",\n                value: newEmail,\n                onChange: function(e) {\n                    return setNewEmail(e.target.value);\n                },\n                __source: {\n                    fileName: \"/Users/hideyukiinokuchi/Desktop/mypets/pages/login.js\",\n                    lineNumber: 30,\n                    columnNumber: 7\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                type: \"newPassword\",\n                value: newPassword,\n                onChange: function(e) {\n                    return setNewPassword(e.target.value);\n                },\n                __source: {\n                    fileName: \"/Users/hideyukiinokuchi/Desktop/mypets/pages/login.js\",\n                    lineNumber: 31,\n                    columnNumber: 7\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                __source: {\n                    fileName: \"/Users/hideyukiinokuchi/Desktop/mypets/pages/login.js\",\n                    lineNumber: 32,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: \"emailアカウント作成する\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                onClick: onClickTop,\n                __source: {\n                    fileName: \"/Users/hideyukiinokuchi/Desktop/mypets/pages/login.js\",\n                    lineNumber: 34,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: \"トップページへ\"\n            })\n        ]\n    }));\n};\n_s(login, \"cw0f4oPCUiQYrbQZDiIPZXS4Zww=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (login);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBNEI7QUFDVztBQUNFO0FBQ007OztBQUUvQyxHQUFLLENBQUNLLEtBQUssR0FBRyxRQUNkLEdBRG9CLENBQUM7O0lBQ25CLEdBQUssQ0FBQ0MsTUFBTSxHQUFHTCxzREFBUztJQUN4QixHQUFLLENBQXNGRSxHQUFtQixHQUFuQkEsaURBQVUsQ0FBQ0Msd0RBQU8sR0FBckdHLEdBQUcsR0FBZ0ZKLEdBQW1CLENBQXRHSSxHQUFHLEVBQUNDLFlBQVksR0FBbUVMLEdBQW1CLENBQWxHSyxZQUFZLEVBQUNDLFdBQVcsR0FBdUROLEdBQW1CLENBQXJGTSxXQUFXLEVBQUNDLFdBQVcsR0FBMkNQLEdBQW1CLENBQXpFTyxXQUFXLEVBQUNDLGNBQWMsR0FBNEJSLEdBQW1CLENBQTdEUSxjQUFjLEVBQUNDLFVBQVUsR0FBaUJULEdBQW1CLENBQTlDUyxVQUFVLEVBQUNDLFdBQVcsR0FBS1YsR0FBbUIsQ0FBbkNVLFdBQVc7SUFFdEYsR0FBSyxDQUFDQyxVQUFVLEdBQUcsUUFDckIsR0FEMkIsQ0FBQztRQUN4QixFQUFFLEVBQUVQLEdBQUcsRUFBRSxDQUFDO1lBQ1JELE1BQU0sQ0FBQ1MsSUFBSSxDQUFDLENBQU07UUFDcEIsQ0FBQyxNQUFNLENBQUM7WUFDTkMsS0FBSyxDQUFDLENBQWM7UUFDRSxDQUF2QjtJQUNILENBQUM7SUFJRCxNQUFNLHVFQUNIQyxDQUFHOzs7Ozs7OztpRkFDREMsQ0FBRTs7Ozs7OzswQkFBQyxDQUFPOztpRkFDSUMsQ0FBUjtnQkFBQ0MsT0FBTyxFQUFFUCxXQUFXOzs7Ozs7OzBCQUFFLENBQVU7O2lGQUMvQkksQ0FBTDs7Ozs7OzswQkFBQyxDQUFhOztpRkFDREksQ0FBWDtnQkFBQ0MsSUFBSSxFQUFDLENBQU87Z0JBQUNDLEtBQUssRUFBRUMsS0FBSztnQkFBRUMsUUFBUSxFQUFFQyxRQUFRLENBQVJBLENBQUM7b0JBQUVDLE1BQU0sQ0FBTkEsUUFBUSxDQUFDRCxDQUFDLENBQUNFLE1BQU0sQ0FBQ0wsS0FBSzs7Ozs7Ozs7O2lGQUNyRUYsQ0FBSztnQkFBQ0MsSUFBSSxFQUFDLENBQVU7Z0JBQUNDLEtBQUssRUFBRU0sUUFBUTtnQkFBRUosUUFBUSxFQUFFQyxRQUFRLENBQVJBLENBQUM7b0JBQUVJLE1BQU0sQ0FBTkEsV0FBVyxDQUFDSixDQUFDLENBQUNFLE1BQU0sQ0FBQ0wsS0FBSzs7Ozs7Ozs7O2lGQUM5RUosQ0FBTTtnQkFBQ0MsT0FBTyxFQUFFUixVQUFVOzs7Ozs7OzBCQUFFLENBQVc7O2lGQUUzQkssQ0FBVDs7Ozs7OzswQkFBQyxDQUFnQjs7aUZBQ0VJLENBQWpCO2dCQUFDQyxJQUFJLEVBQUMsQ0FBVTtnQkFBQ0MsS0FBSyxFQUFFUSxRQUFRO2dCQUFFTixRQUFRLEVBQUVDLFFBQVEsQ0FBUkEsQ0FBQztvQkFBRWpCLE1BQU0sQ0FBTkEsV0FBVyxDQUFDaUIsQ0FBQyxDQUFDRSxNQUFNLENBQUNMLEtBQUs7Ozs7Ozs7OztpRkFDOUVGLENBQUs7Z0JBQUNDLElBQUksRUFBQyxDQUFhO2dCQUFDQyxLQUFLLEVBQUViLFdBQVc7Z0JBQUVlLFFBQVEsRUFBRUMsUUFBUSxDQUFSQSxDQUFDO29CQUFFZixNQUFNLENBQU5BLGNBQWMsQ0FBQ2UsQ0FBQyxDQUFDRSxNQUFNLENBQUNMLEtBQUs7Ozs7Ozs7OztpRkFDdkZKLENBQU07Ozs7Ozs7MEJBQUMsQ0FBYzs7aUZBRUhGLENBQWY7Z0JBQUNHLE9BQU8sRUFBRU4sVUFBVTs7Ozs7OzswQkFBRSxDQUFPOzs7O0FBR3ZDLENBQUM7R0EvQktULEtBQUs7O1FBQ01KLGtEQUFTOzs7QUFnQzFCLCtEQUFlSSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanM/ODFiMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDb250ZXh0IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29udGV4dFwiO1xuXG5jb25zdCBsb2dpbiA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgdWlkLGVtYWluZXdFbWFpbCxzZXROZXdFbWFpbCxuZXdQYXNzd29yZCxzZXROZXdQYXNzd29yZCxlbWFpbExvZ2luLGdvb2dsZUxvZ2luIH0gPSB1c2VDb250ZXh0KENvbnRleHQpO1xuXG4gIGNvbnN0IG9uQ2xpY2tUb3AgPSAoKSA9PiB7XG4gICAgaWYgKHVpZCkge1xuICAgICAgcm91dGVyLnB1c2goXCIvVG9wXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhbGVydChcIuODreOCsOOCpOODs+OBl+OBpuOBj+OBoOOBleOBhOOAguOAglwiKTtcbiAgICB9XG4gIH07XG5cblxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT7jg63jgrDjgqTjg7Pjg5rjg7zjgrg8L2gxPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtnb29nbGVMb2dpbn0+R29vZ2xl44Ot44Kw44Kk44OzPC9idXR0b24+XG4gICAgICA8ZGl2PmVtYWls44Ot44Kw44Kk44Oz44Gv44GT44Gh44KJPC9kaXY+XG4gICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgdmFsdWU9e2VtYWlsfSBvbkNoYW5nZT17ZT0+c2V0RW1haWwoZS50YXJnZXQudmFsdWUpfS8+XG4gICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgdmFsdWU9e3Bhc3N3b3JkfSBvbkNoYW5nZT17ZT0+c2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfS8+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2VtYWlsTG9naW59PmVtYWls44Ot44Kw44Kk44Oz44GZ44KLPC9idXR0b24+XG5cbiAgICAgIDxkaXY+ZW1haWzjgqLjgqvjgqbjg7Pjg4jkvZzmiJDjga/jgZPjgaHjgok8L2Rpdj5cbiAgICAgIDxpbnB1dCB0eXBlPVwibmV3RW1haWxcIiB2YWx1ZT17bmV3RW1haWx9IG9uQ2hhbmdlPXtlPT5zZXROZXdFbWFpbChlLnRhcmdldC52YWx1ZSl9Lz5cbiAgICAgIDxpbnB1dCB0eXBlPVwibmV3UGFzc3dvcmRcIiB2YWx1ZT17bmV3UGFzc3dvcmR9IG9uQ2hhbmdlPXtlPT5zZXROZXdQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9Lz5cbiAgICAgIDxidXR0b24+ZW1haWzjgqLjgqvjgqbjg7Pjg4jkvZzmiJDjgZnjgos8L2J1dHRvbj5cblxuICAgICAgPGRpdiBvbkNsaWNrPXtvbkNsaWNrVG9wfT7jg4jjg4Pjg5fjg5rjg7zjgrjjgbg8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvZ2luO1xuIl0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VSb3V0ZXIiLCJSZWFjdCIsInVzZUNvbnRleHQiLCJDb250ZXh0IiwibG9naW4iLCJyb3V0ZXIiLCJ1aWQiLCJlbWFpbmV3RW1haWwiLCJzZXROZXdFbWFpbCIsIm5ld1Bhc3N3b3JkIiwic2V0TmV3UGFzc3dvcmQiLCJlbWFpbExvZ2luIiwiZ29vZ2xlTG9naW4iLCJvbkNsaWNrVG9wIiwicHVzaCIsImFsZXJ0IiwiZGl2IiwiaDEiLCJidXR0b24iLCJvbkNsaWNrIiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJlbWFpbCIsIm9uQ2hhbmdlIiwiZSIsInNldEVtYWlsIiwidGFyZ2V0IiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsIm5ld0VtYWlsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/login.js\n");

/***/ })

});