"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Context.js":
/*!*******************************!*\
  !*** ./components/Context.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Context\": function() { return /* binding */ Context; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./firebase */ \"./components/firebase.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nvar ContextProvider = function(param) {\n    var children = param.children;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), uid = ref[0], setUid = ref[1];\n    var rout;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        _firebase__WEBPACK_IMPORTED_MODULE_3__.auth.onAuthStateChanged(function(user) {\n            if (user) {\n                // 自分のアカウントのuidをstateで管理する\n                setUid(user.uid);\n            }\n        });\n    }, []);\n    var googleLogin = function() {\n        _firebase__WEBPACK_IMPORTED_MODULE_3__.auth.signInWithPopup(_firebase__WEBPACK_IMPORTED_MODULE_3__.googleProvider).then(function(res) {\n            // 初めてのユーザーなのか確認している。\n            var firstLogin = res.additionalUserInfo.isNewUser;\n            if (firstLogin) {\n                alert(\"初めてのユーザーのログインを確認しました！\");\n            } else {\n                alert(\"既存のユーザーログインを確認しました！\");\n            }\n        });\n        router.push(\"/Top\");\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Context.Provider, {\n        value: {\n            googleLogin: googleLogin,\n            uid: uid\n        },\n        __source: {\n            fileName: \"/Users/hideyukiinokuchi/Desktop/mypets/components/Context.js\",\n            lineNumber: 34,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: children\n    }));\n};\n_s(ContextProvider, \"guVkFVVSew6hH2g/XBdZM40Ur3I=\");\n_c = ContextProvider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContextProvider);\nvar _c;\n$RefreshReg$(_c, \"ContextProvider\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbnRleHQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFpRTtBQUM1QjtBQUNnQjs7O0FBRTlDLEdBQUssQ0FBQ1EsT0FBTyxpQkFBR1Asb0RBQWE7QUFFcEMsR0FBSyxDQUFDUSxlQUFlLEdBQUcsUUFBUSxRQUFVLENBQUM7UUFBaEJDLFFBQVEsU0FBUkEsUUFBUTs7SUFDL0IsR0FBSyxDQUFnQlIsR0FBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksR0FBM0JTLEdBQUcsR0FBV1QsR0FBYyxLQUF4QlUsTUFBTSxHQUFJVixHQUFjO0lBQ25DLEdBQUssQ0FBQ1csSUFBSTtJQUVaVixnREFBUyxDQUFDLFFBQ1osR0FEa0IsQ0FBQztRQUNmRSw4REFBdUIsQ0FBQyxRQUFRLENBQVBVLElBQUksRUFBSyxDQUFDO1lBQ2pDLEVBQUUsRUFBRUEsSUFBSSxFQUFFLENBQUM7Z0JBQ1QsRUFBMEI7Z0JBQ0lILE1BQXhCLENBQUNHLElBQUksQ0FBQ0osR0FBRztZQUNqQixDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUMsRUFBRSxDQUFDLENBQUM7SUFFTCxHQUFLLENBQUNLLFdBQVcsR0FBRyxRQUN0QixHQUQ0QixDQUFDO1FBQ3pCWCwyREFBb0IsQ0FBQ0UscURBQWMsRUFBRVcsSUFBSSxDQUFDLFFBQVEsQ0FBUEMsR0FBRyxFQUFLLENBQUM7WUFDbEQsRUFBcUI7WUFDZSxHQUEvQixDQUFDQyxVQUFVLEdBQUdELEdBQUcsQ0FBQ0Usa0JBQWtCLENBQUNDLFNBQVM7WUFDbkQsRUFBRSxFQUFFRixVQUFVLEVBQUUsQ0FBQztnQkFDZkcsS0FBSyxDQUFDLENBQXVCO1lBQ1csQ0FBekMsTUFBTSxDQUFDO2dCQUNOQSxLQUFLLENBQUMsQ0FBcUI7WUFDN0IsQ0FBQztRQUNILENBQUM7UUFDREMsTUFBTSxDQUFDQyxJQUFJLENBQUMsQ0FBTTtJQUNwQixDQUFDO0lBRUQsTUFBTSxzRUFDSGpCLE9BQU8sQ0FBQ2tCLFFBQVE7UUFDZkMsS0FBSyxFQUFFLENBQUM7WUFDTlgsV0FBVyxFQUFYQSxXQUFXO1lBQ1hMLEdBQUcsRUFBSEEsR0FBRztRQUNMLENBQUM7Ozs7Ozs7a0JBRUFELFFBQVE7O0FBR2YsQ0FBQztHQXBDS0QsZUFBZTtLQUFmQSxlQUFlO0FBc0NyQiwrREFBZUEsZUFBZSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ29udGV4dC5qcz9lZDA1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCJcbmltcG9ydCB7IGF1dGgsIGRiLCBnb29nbGVQcm92aWRlciB9IGZyb20gXCIuL2ZpcmViYXNlXCI7XG5cbmV4cG9ydCBjb25zdCBDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuXG5jb25zdCBDb250ZXh0UHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gICAgY29uc3QgW3VpZCxzZXRVaWRdID0gdXNlU3RhdGUobnVsbClcbiAgICBjb25zdCByb3V0XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhdXRoLm9uQXV0aFN0YXRlQ2hhbmdlZCgodXNlcikgPT4ge1xuICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgLy8g6Ieq5YiG44Gu44Ki44Kr44Km44Oz44OI44GudWlk44KSc3RhdGXjgafnrqHnkIbjgZnjgotcbiAgICAgICAgc2V0VWlkKHVzZXIudWlkKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGdvb2dsZUxvZ2luID0gKCkgPT4ge1xuICAgIGF1dGguc2lnbkluV2l0aFBvcHVwKGdvb2dsZVByb3ZpZGVyKS50aGVuKChyZXMpID0+IHtcbiAgICAgIC8vIOWIneOCgeOBpuOBruODpuODvOOCtuODvOOBquOBruOBi+eiuuiqjeOBl+OBpuOBhOOCi+OAglxuICAgICAgY29uc3QgZmlyc3RMb2dpbiA9IHJlcy5hZGRpdGlvbmFsVXNlckluZm8uaXNOZXdVc2VyO1xuICAgICAgaWYgKGZpcnN0TG9naW4pIHtcbiAgICAgICAgYWxlcnQoXCLliJ3jgoHjgabjga7jg6bjg7zjgrbjg7zjga7jg63jgrDjgqTjg7PjgpLnorroqo3jgZfjgb7jgZfjgZ/vvIFcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbGVydChcIuaXouWtmOOBruODpuODvOOCtuODvOODreOCsOOCpOODs+OCkueiuuiqjeOBl+OBvuOBl+OBn++8gVwiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByb3V0ZXIucHVzaChcIi9Ub3BcIilcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxDb250ZXh0LlByb3ZpZGVyXG4gICAgICB2YWx1ZT17e1xuICAgICAgICBnb29nbGVMb2dpbixcbiAgICAgICAgdWlkLFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9Db250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGV4dFByb3ZpZGVyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiYXV0aCIsImRiIiwiZ29vZ2xlUHJvdmlkZXIiLCJDb250ZXh0IiwiQ29udGV4dFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1aWQiLCJzZXRVaWQiLCJyb3V0Iiwib25BdXRoU3RhdGVDaGFuZ2VkIiwidXNlciIsImdvb2dsZUxvZ2luIiwic2lnbkluV2l0aFBvcHVwIiwidGhlbiIsInJlcyIsImZpcnN0TG9naW4iLCJhZGRpdGlvbmFsVXNlckluZm8iLCJpc05ld1VzZXIiLCJhbGVydCIsInJvdXRlciIsInB1c2giLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Context.js\n");

/***/ })

});