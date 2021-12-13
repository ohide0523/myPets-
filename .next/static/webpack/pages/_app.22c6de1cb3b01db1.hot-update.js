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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Context\": function() { return /* binding */ Context; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./firebase */ \"./components/firebase.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nvar ContextProvider = function(param) {\n    var children = param.children;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), uid = ref[0], setUid = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), email = ref1[0], setNEmail = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), password = ref2[0], setPassword = ref2[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        _firebase__WEBPACK_IMPORTED_MODULE_3__.auth.onAuthStateChanged(function(user) {\n            if (user) {\n                // 自分のアカウントのuidをstateで管理する\n                setUid(user.uid);\n            } else {\n                router.push(\"/login\");\n            }\n        });\n    }, []);\n    //googleログイン\n    var googleLogin = function() {\n        _firebase__WEBPACK_IMPORTED_MODULE_3__.auth.signInWithPopup(_firebase__WEBPACK_IMPORTED_MODULE_3__.googleProvider).then(function(res) {\n            // 初めてのユーザーなのか確認している。\n            var firstLogin = res.additionalUserInfo.isNewUser;\n            if (firstLogin) {\n                alert(\"初めてのユーザーのログインを確認しました！\");\n            } else {\n                alert(\"既存のユーザーログインを確認しました！\");\n            }\n        });\n        router.push(\"/Top\");\n    };\n    //emailログイン\n    var emailLogin = function() {\n        _firebase__WEBPACK_IMPORTED_MODULE_3__.auth.signInWithEmailAndPassword(email, password).then(function() {\n            alert(\"ログインに成功しました！\");\n            setEmail(\"\");\n            setPassword(\"\");\n        }).catch(function() {\n            alert(\"ログインに失敗しました。。\");\n        });\n    };\n    //   emailアカウントを作成する\n    var createEmailUser = function() {\n        _firebase__WEBPACK_IMPORTED_MODULE_3__.auth.createUserWithEmailAndPassword(newEmail, newPassword).then(function() {\n            alert(\"アカウントを作成しました！\");\n            setNewEmail(\"\");\n            setNewPassword(\"\");\n        });\n    };\n    var logout = function() {\n        _firebase__WEBPACK_IMPORTED_MODULE_3__.auth.signOut().then(function() {\n            alert(\"ログアウトしました\");\n            router.push(\"/Login\");\n        });\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Context.Provider, {\n        value: {\n            googleLogin: googleLogin,\n            emailLogin: emailLogin,\n            createEmailUser: createEmailUser,\n            logout: logout,\n            uid: uid,\n            email: email,\n            setEmail: setEmail,\n            password: password,\n            setPassword: setPassword\n        },\n        __source: {\n            fileName: \"/Users/hideyukiinokuchi/Desktop/mypets/components/Context.js\",\n            lineNumber: 68,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: children\n    }));\n};\n_s(ContextProvider, \"yBz9BBqoX7oh/a1jBjJdIDymfPg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = ContextProvider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContextProvider);\nvar _c;\n$RefreshReg$(_c, \"ContextProvider\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2ZDLEtBQUssRUFBRSxDQUFDO1lBQ05yQixXQUFXLEVBQVhBLFdBQVc7WUFDWFEsVUFBVSxFQUFWQSxVQUFVO1lBQ1ZJLGVBQWUsRUFBZkEsZUFBZTtZQUNmTSxNQUFNLEVBQU5BLE1BQU07WUFDTjVCLEdBQUcsRUFBSEEsR0FBRztZQUNIRSxLQUFLLEVBQUxBLEtBQUs7WUFDTGtCLFFBQVEsRUFBUkEsUUFBUTtZQUNSaEIsUUFBUSxFQUFSQSxRQUFRO1lBQ1JDLFdBQVcsRUFBWEEsV0FBVztRQUNiLENBQUM7Ozs7Ozs7a0JBRUFOLFFBQVE7O0FBR2YsQ0FBQztHQTdFS0QsZUFBZTs7UUFJSkwsa0RBQVM7OztLQUpwQkssZUFBZTtBQStFckIsK0RBQWVBLGVBQWUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NvbnRleHQuanM/ZWQwNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBhdXRoLCBkYiwgZ29vZ2xlUHJvdmlkZXIgfSBmcm9tIFwiLi9maXJlYmFzZVwiO1xuXG5leHBvcnQgY29uc3QgQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcblxuY29uc3QgQ29udGV4dFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbdWlkLCBzZXRVaWRdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtlbWFpbCwgc2V0TkVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGF1dGgub25BdXRoU3RhdGVDaGFuZ2VkKCh1c2VyKSA9PiB7XG4gICAgICBpZiAodXNlcikge1xuICAgICAgICAvLyDoh6rliIbjga7jgqLjgqvjgqbjg7Pjg4jjga51aWTjgpJzdGF0ZeOBp+euoeeQhuOBmeOCi1xuICAgICAgICBzZXRVaWQodXNlci51aWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcm91dGVyLnB1c2goXCIvbG9naW5cIik7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIFtdKTtcblxuICAvL2dvb2dsZeODreOCsOOCpOODs1xuICBjb25zdCBnb29nbGVMb2dpbiA9ICgpID0+IHtcbiAgICBhdXRoLnNpZ25JbldpdGhQb3B1cChnb29nbGVQcm92aWRlcikudGhlbigocmVzKSA9PiB7XG4gICAgICAvLyDliJ3jgoHjgabjga7jg6bjg7zjgrbjg7zjgarjga7jgYvnorroqo3jgZfjgabjgYTjgovjgIJcbiAgICAgIGNvbnN0IGZpcnN0TG9naW4gPSByZXMuYWRkaXRpb25hbFVzZXJJbmZvLmlzTmV3VXNlcjtcbiAgICAgIGlmIChmaXJzdExvZ2luKSB7XG4gICAgICAgIGFsZXJ0KFwi5Yid44KB44Gm44Gu44Om44O844K244O844Gu44Ot44Kw44Kk44Oz44KS56K66KqN44GX44G+44GX44Gf77yBXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWxlcnQoXCLml6LlrZjjga7jg6bjg7zjgrbjg7zjg63jgrDjgqTjg7PjgpLnorroqo3jgZfjgb7jgZfjgZ/vvIFcIik7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcm91dGVyLnB1c2goXCIvVG9wXCIpO1xuICB9O1xuXG4gIC8vZW1haWzjg63jgrDjgqTjg7NcbiAgY29uc3QgZW1haWxMb2dpbiA9ICgpID0+IHtcbiAgICBhdXRoXG4gICAgICAuc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICBhbGVydChcIuODreOCsOOCpOODs+OBq+aIkOWKn+OBl+OBvuOBl+OBn++8gVwiKTtcbiAgICAgICAgc2V0RW1haWwoXCJcIik7XG4gICAgICAgIHNldFBhc3N3b3JkKFwiXCIpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgIGFsZXJ0KFwi44Ot44Kw44Kk44Oz44Gr5aSx5pWX44GX44G+44GX44Gf44CC44CCXCIpO1xuICAgICAgfSk7XG4gIH07XG4vLyAgIGVtYWls44Ki44Kr44Km44Oz44OI44KS5L2c5oiQ44GZ44KLXG5jb25zdCBjcmVhdGVFbWFpbFVzZXIgPSgpPT57XG4gICAgYXV0aC5jcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQobmV3RW1haWwsIG5ld1Bhc3N3b3JkKS50aGVuKCgpID0+IHtcbiAgICAgICAgYWxlcnQoXCLjgqLjgqvjgqbjg7Pjg4jjgpLkvZzmiJDjgZfjgb7jgZfjgZ/vvIFcIik7IFxuICAgICAgICBzZXROZXdFbWFpbChcIlwiKTtcbiAgICAgICAgc2V0TmV3UGFzc3dvcmQoXCJcIik7XG4gICAgICB9KTtcbn1cblxuICBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XG4gICAgYXV0aC5zaWduT3V0KCkudGhlbigoKSA9PiB7XG4gICAgICBhbGVydChcIuODreOCsOOCouOCpuODiOOBl+OBvuOBl+OBn1wiKTtcbiAgICAgIHJvdXRlci5wdXNoKFwiL0xvZ2luXCIpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7XG4gICAgICAgIGdvb2dsZUxvZ2luLFxuICAgICAgICBlbWFpbExvZ2luLFxuICAgICAgICBjcmVhdGVFbWFpbFVzZXIsXG4gICAgICAgIGxvZ291dCxcbiAgICAgICAgdWlkLFxuICAgICAgICBlbWFpbCxcbiAgICAgICAgc2V0RW1haWwsXG4gICAgICAgIHBhc3N3b3JkLFxuICAgICAgICBzZXRQYXNzd29yZCxcbiAgICAgIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRleHRQcm92aWRlcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsImF1dGgiLCJkYiIsImdvb2dsZVByb3ZpZGVyIiwiQ29udGV4dCIsIkNvbnRleHRQcm92aWRlciIsImNoaWxkcmVuIiwidWlkIiwic2V0VWlkIiwiZW1haWwiLCJzZXRORW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwicm91dGVyIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwidXNlciIsInB1c2giLCJnb29nbGVMb2dpbiIsInNpZ25JbldpdGhQb3B1cCIsInRoZW4iLCJyZXMiLCJmaXJzdExvZ2luIiwiYWRkaXRpb25hbFVzZXJJbmZvIiwiaXNOZXdVc2VyIiwiYWxlcnQiLCJlbWFpbExvZ2luIiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJzZXRFbWFpbCIsImNhdGNoIiwiY3JlYXRlRW1haWxVc2VyIiwiY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIiwibmV3RW1haWwiLCJuZXdQYXNzd29yZCIsInNldE5ld0VtYWlsIiwic2V0TmV3UGFzc3dvcmQiLCJsb2dvdXQiLCJzaWduT3V0IiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Context.js\n");

/***/ })

});