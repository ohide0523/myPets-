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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Context\": function() { return /* binding */ Context; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./firebase */ \"./components/firebase.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nvar ContextProvider = function(param) {\n    var children = param.children;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), uid = ref[0], setUid = ref[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        _firebase__WEBPACK_IMPORTED_MODULE_3__.auth.onAuthStateChanged(function(user) {\n            if (user) {\n                // 自分のアカウントのuidをstateで管理する\n                setUid(user.uid);\n            }\n        });\n    }, []);\n    //   goo\n    var googleLogin = function() {\n        _firebase__WEBPACK_IMPORTED_MODULE_3__.auth.signInWithPopup(_firebase__WEBPACK_IMPORTED_MODULE_3__.googleProvider).then(function(res) {\n            // 初めてのユーザーなのか確認している。\n            var firstLogin = res.additionalUserInfo.isNewUser;\n            if (firstLogin) {\n                alert(\"初めてのユーザーのログインを確認しました！\");\n            } else {\n                alert(\"既存のユーザーログインを確認しました！\");\n            }\n        });\n        router.push(\"/Top\");\n    };\n    // emailログイン\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Context.Provider, {\n        value: {\n            googleLogin: googleLogin,\n            uid: uid\n        },\n        __source: {\n            fileName: \"/Users/hideyukiinokuchi/Desktop/mypets/components/Context.js\",\n            lineNumber: 39,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: children\n    }));\n};\n_s(ContextProvider, \"X0c1zbjw83lPN+7vmSImCDAVoD4=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = ContextProvider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContextProvider);\nvar _c;\n$RefreshReg$(_c, \"ContextProvider\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbnRleHQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFpRTtBQUM1QjtBQUNnQjs7O0FBRTlDLEdBQUssQ0FBQ1EsT0FBTyxpQkFBR1Asb0RBQWE7QUFFcEMsR0FBSyxDQUFDUSxlQUFlLEdBQUcsUUFBUSxRQUFVLENBQUM7UUFBaEJDLFFBQVEsU0FBUkEsUUFBUTs7SUFDL0IsR0FBSyxDQUFnQlIsR0FBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksR0FBM0JTLEdBQUcsR0FBV1QsR0FBYyxLQUF4QlUsTUFBTSxHQUFJVixHQUFjO0lBQ25DLEdBQUssQ0FBQ1csTUFBTSxHQUFHVCxzREFBUztJQUUxQkQsZ0RBQVMsQ0FBQyxRQUNaLEdBRGtCLENBQUM7UUFDZkUsOERBQXVCLENBQUMsUUFBUSxDQUFQVSxJQUFJLEVBQUssQ0FBQztZQUNqQyxFQUFFLEVBQUVBLElBQUksRUFBRSxDQUFDO2dCQUNULEVBQTBCO2dCQUNJSCxNQUF4QixDQUFDRyxJQUFJLENBQUNKLEdBQUc7WUFDakIsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBR1AsRUFBUTtJQUNOLEdBQUssQ0FBQ0ssV0FBVyxHQUFHLFFBQ3RCLEdBRDRCLENBQUM7UUFDekJYLDJEQUFvQixDQUFDRSxxREFBYyxFQUFFVyxJQUFJLENBQUMsUUFBUSxDQUFQQyxHQUFHLEVBQUssQ0FBQztZQUNsRCxFQUFxQjtZQUNlLEdBQS9CLENBQUNDLFVBQVUsR0FBR0QsR0FBRyxDQUFDRSxrQkFBa0IsQ0FBQ0MsU0FBUztZQUNuRCxFQUFFLEVBQUVGLFVBQVUsRUFBRSxDQUFDO2dCQUNmRyxLQUFLLENBQUMsQ0FBdUI7WUFDVyxDQUF6QyxNQUFNLENBQUM7Z0JBQ05BLEtBQUssQ0FBQyxDQUFxQjtZQUNTLENBQXJDO1FBQ0gsQ0FBQztRQUNEVixNQUFNLENBQUNXLElBQUksQ0FBQyxDQUFNO0lBQ3BCLENBQUM7SUFFSCxFQUFZO0lBR1YsTUFBTSxzRUFDSGhCLE9BQU8sQ0FBQ2lCLFFBQVE7UUFDZkMsS0FBSyxFQUFFLENBQUM7WUFDTlYsV0FBVyxFQUFYQSxXQUFXO1lBQ1hMLEdBQUcsRUFBSEEsR0FBRztRQUNMLENBQUM7Ozs7Ozs7a0JBRUFELFFBQVE7O0FBR2YsQ0FBQztHQXpDS0QsZUFBZTs7UUFFRkwsa0RBQVM7OztLQUZ0QkssZUFBZTtBQTJDckIsK0RBQWVBLGVBQWUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NvbnRleHQuanM/ZWQwNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiXG5pbXBvcnQgeyBhdXRoLCBkYiwgZ29vZ2xlUHJvdmlkZXIgfSBmcm9tIFwiLi9maXJlYmFzZVwiO1xuXG5leHBvcnQgY29uc3QgQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcblxuY29uc3QgQ29udGV4dFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICAgIGNvbnN0IFt1aWQsc2V0VWlkXSA9IHVzZVN0YXRlKG51bGwpXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGF1dGgub25BdXRoU3RhdGVDaGFuZ2VkKCh1c2VyKSA9PiB7XG4gICAgICBpZiAodXNlcikge1xuICAgICAgICAvLyDoh6rliIbjga7jgqLjgqvjgqbjg7Pjg4jjga51aWTjgpJzdGF0ZeOBp+euoeeQhuOBmeOCi1xuICAgICAgICBzZXRVaWQodXNlci51aWQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LCBbXSk7XG5cblxuLy8gICBnb29cbiAgY29uc3QgZ29vZ2xlTG9naW4gPSAoKSA9PiB7XG4gICAgYXV0aC5zaWduSW5XaXRoUG9wdXAoZ29vZ2xlUHJvdmlkZXIpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgLy8g5Yid44KB44Gm44Gu44Om44O844K244O844Gq44Gu44GL56K66KqN44GX44Gm44GE44KL44CCXG4gICAgICBjb25zdCBmaXJzdExvZ2luID0gcmVzLmFkZGl0aW9uYWxVc2VySW5mby5pc05ld1VzZXI7XG4gICAgICBpZiAoZmlyc3RMb2dpbikge1xuICAgICAgICBhbGVydChcIuWIneOCgeOBpuOBruODpuODvOOCtuODvOOBruODreOCsOOCpOODs+OCkueiuuiqjeOBl+OBvuOBl+OBn++8gVwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFsZXJ0KFwi5pei5a2Y44Gu44Om44O844K244O844Ot44Kw44Kk44Oz44KS56K66KqN44GX44G+44GX44Gf77yBXCIpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJvdXRlci5wdXNoKFwiL1RvcFwiKVxuICB9O1xuXG4vLyBlbWFpbOODreOCsOOCpOODs1xuXG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgZ29vZ2xlTG9naW4sXG4gICAgICAgIHVpZCxcbiAgICAgIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRleHRQcm92aWRlcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsImF1dGgiLCJkYiIsImdvb2dsZVByb3ZpZGVyIiwiQ29udGV4dCIsIkNvbnRleHRQcm92aWRlciIsImNoaWxkcmVuIiwidWlkIiwic2V0VWlkIiwicm91dGVyIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwidXNlciIsImdvb2dsZUxvZ2luIiwic2lnbkluV2l0aFBvcHVwIiwidGhlbiIsInJlcyIsImZpcnN0TG9naW4iLCJhZGRpdGlvbmFsVXNlckluZm8iLCJpc05ld1VzZXIiLCJhbGVydCIsInB1c2giLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Context.js\n");

/***/ })

});