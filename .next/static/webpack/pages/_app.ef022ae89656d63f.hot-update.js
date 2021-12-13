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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Context\": function() { return /* binding */ Context; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./firebase */ \"./components/firebase.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _e = undefined;\n    try {\n        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();\n}\nvar _this = undefined;\nvar _s1 = $RefreshSig$();\nvar Context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nvar ContextProvider = function(param) {\n    var children = param.children;\n    _s1();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), uid = ref[0], setUid = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), email = ref1[0], setEmail = ref1[1];\n    var _useS = _slicedToArray(useS, 2), password = _useS[0], setPassword = _useS[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        _firebase__WEBPACK_IMPORTED_MODULE_3__.auth.onAuthStateChanged(function(user) {\n            if (user) {\n                // 自分のアカウントのuidをstateで管理する\n                setUid(user.uid);\n            } else {\n                router.push(\"/login\");\n            }\n        });\n    }, []);\n    //googleログイン\n    var googleLogin = function() {\n        _firebase__WEBPACK_IMPORTED_MODULE_3__.auth.signInWithPopup(_firebase__WEBPACK_IMPORTED_MODULE_3__.googleProvider).then(function(res) {\n            // 初めてのユーザーなのか確認している。\n            var firstLogin = res.additionalUserInfo.isNewUser;\n            if (firstLogin) {\n                alert(\"初めてのユーザーのログインを確認しました！\");\n            } else {\n                alert(\"既存のユーザーログインを確認しました！\");\n            }\n        });\n        router.push(\"/Top\");\n    };\n    //emailログイン\n    var emailLogin = function() {\n        _firebase__WEBPACK_IMPORTED_MODULE_3__.auth.signInWithEmailAndPassword(email, password).then(function() {\n            alert(\"ログインに成功しました！\");\n            setEmail(\"\");\n            setPassword(\"\");\n        }).catch(function() {\n            alert(\"ログインに失敗しました。。\");\n        });\n    };\n    var logout = function() {\n        _firebase__WEBPACK_IMPORTED_MODULE_3__.auth.signOut().then(function() {\n            alert(\"ログアウトしました\");\n            router.push(\"/Login\");\n        });\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Context.Provider, {\n        value: {\n            googleLogin: googleLogin,\n            logout: logout,\n            uid: uid\n        },\n        __source: {\n            fileName: \"/Users/hideyukiinokuchi/Desktop/mypets/components/Context.js\",\n            lineNumber: 64,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: children\n    }));\n};\n_s1(ContextProvider, \"toynSFjcg6Mx/HO/KK7J7Efqe2s=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = ContextProvider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContextProvider);\nvar _c;\n$RefreshReg$(_c, \"ContextProvider\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ29udGV4dC5qcz9lZDA1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCJcbmltcG9ydCB7IGF1dGgsIGRiLCBnb29nbGVQcm92aWRlciB9IGZyb20gXCIuL2ZpcmViYXNlXCI7XG5cbmV4cG9ydCBjb25zdCBDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuXG5jb25zdCBDb250ZXh0UHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gICAgY29uc3QgW3VpZCxzZXRVaWRdID0gdXNlU3RhdGUobnVsbClcbiAgICBjb25zdCBbZW1haWwsc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIilcbiAgICBjb25zdCBbcGFzc3dvcmQsc2V0UGFzc3dvcmRdID0gdXNlU1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhdXRoLm9uQXV0aFN0YXRlQ2hhbmdlZCgodXNlcikgPT4ge1xuICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgLy8g6Ieq5YiG44Gu44Ki44Kr44Km44Oz44OI44GudWlk44KSc3RhdGXjgafnrqHnkIbjgZnjgotcbiAgICAgICAgc2V0VWlkKHVzZXIudWlkKTtcbiAgICAgIH1lbHNle1xuICAgICAgICAgIHJvdXRlci5wdXNoKFwiL2xvZ2luXCIpXG4gICAgICB9XG4gICAgfSk7XG4gIH0sIFtdKTtcblxuXG4vL2dvb2dsZeODreOCsOOCpOODs1xuICBjb25zdCBnb29nbGVMb2dpbiA9ICgpID0+IHtcbiAgICBhdXRoLnNpZ25JbldpdGhQb3B1cChnb29nbGVQcm92aWRlcikudGhlbigocmVzKSA9PiB7XG4gICAgICAvLyDliJ3jgoHjgabjga7jg6bjg7zjgrbjg7zjgarjga7jgYvnorroqo3jgZfjgabjgYTjgovjgIJcbiAgICAgIGNvbnN0IGZpcnN0TG9naW4gPSByZXMuYWRkaXRpb25hbFVzZXJJbmZvLmlzTmV3VXNlcjtcbiAgICAgIGlmIChmaXJzdExvZ2luKSB7XG4gICAgICAgIGFsZXJ0KFwi5Yid44KB44Gm44Gu44Om44O844K244O844Gu44Ot44Kw44Kk44Oz44KS56K66KqN44GX44G+44GX44Gf77yBXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWxlcnQoXCLml6LlrZjjga7jg6bjg7zjgrbjg7zjg63jgrDjgqTjg7PjgpLnorroqo3jgZfjgb7jgZfjgZ/vvIFcIik7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcm91dGVyLnB1c2goXCIvVG9wXCIpXG4gIH07XG5cbi8vZW1haWzjg63jgrDjgqTjg7NcbmNvbnN0IGVtYWlsTG9naW4gPSgpPT57XG4gICAgYXV0aFxuICAgICAgLnNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZClcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgYWxlcnQoXCLjg63jgrDjgqTjg7PjgavmiJDlip/jgZfjgb7jgZfjgZ/vvIFcIik7XG4gICAgICAgIHNldEVtYWlsKFwiXCIpO1xuICAgICAgICBzZXRQYXNzd29yZChcIlwiKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICBhbGVydChcIuODreOCsOOCpOODs+OBq+WkseaVl+OBl+OBvuOBl+OBn+OAguOAglwiKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGxvZ291dCA9KCk9PntcbiAgICBhdXRoLnNpZ25PdXQoKS50aGVuKCgpID0+IHtcbiAgICAgICAgYWxlcnQoXCLjg63jgrDjgqLjgqbjg4jjgZfjgb7jgZfjgZ9cIik7XG4gICAgICAgIHJvdXRlci5wdXNoKFwiL0xvZ2luXCIpO1xuICAgICAgfSk7XG4gIH1cblxuXG5cblxuICByZXR1cm4gKFxuICAgIDxDb250ZXh0LlByb3ZpZGVyXG4gICAgICB2YWx1ZT17e1xuICAgICAgICBnb29nbGVMb2dpbixcbiAgICAgICAgbG9nb3V0LFxuICAgICAgICB1aWQsXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0NvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250ZXh0UHJvdmlkZXI7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJhdXRoIiwiZGIiLCJnb29nbGVQcm92aWRlciIsIkNvbnRleHQiLCJDb250ZXh0UHJvdmlkZXIiLCJjaGlsZHJlbiIsInVpZCIsInNldFVpZCIsImVtYWlsIiwic2V0RW1haWwiLCJ1c2VTIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsInJvdXRlciIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsInVzZXIiLCJwdXNoIiwiZ29vZ2xlTG9naW4iLCJzaWduSW5XaXRoUG9wdXAiLCJ0aGVuIiwicmVzIiwiZmlyc3RMb2dpbiIsImFkZGl0aW9uYWxVc2VySW5mbyIsImlzTmV3VXNlciIsImFsZXJ0IiwiZW1haWxMb2dpbiIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwiY2F0Y2giLCJsb2dvdXQiLCJzaWduT3V0IiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Context.js\n");

/***/ })

});