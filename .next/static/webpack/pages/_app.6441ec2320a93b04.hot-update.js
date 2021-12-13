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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Context\": function() { return /* binding */ Context; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./firebase */ \"./components/firebase.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _e = undefined;\n    try {\n        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();\n}\nvar _this = undefined;\nvar _s1 = $RefreshSig$();\nvar Context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nvar ContextProvider = function(param) {\n    var children = param.children;\n    _s1();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), uid = ref[0], setUid = ref[1];\n    var _use = _slicedToArray(use, 2), email = _use[0], setEmail = _use[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), newEmail = ref1[0], setNewEmail = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), newPassword = ref2[0], setNewPassword = ref2[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        _firebase__WEBPACK_IMPORTED_MODULE_3__.auth.onAuthStateChanged(function(user) {\n            if (user) {\n                // 自分のアカウントのuidをstateで管理する\n                setUid(user.uid);\n            } else {\n                router.push(\"/login\");\n            }\n        });\n    }, []);\n    //googleログイン\n    var googleLogin = function() {\n        _firebase__WEBPACK_IMPORTED_MODULE_3__.auth.signInWithPopup(_firebase__WEBPACK_IMPORTED_MODULE_3__.googleProvider).then(function(res) {\n            // 初めてのユーザーなのか確認している。\n            var firstLogin = res.additionalUserInfo.isNewUser;\n            if (firstLogin) {\n                alert(\"初めてのユーザーのログインを確認しました！\");\n            } else {\n                alert(\"既存のユーザーログインを確認しました！\");\n            }\n        });\n        router.push(\"/Top\");\n    };\n    //emailログイン\n    var emailLogin = function() {\n        _firebase__WEBPACK_IMPORTED_MODULE_3__.auth.signInWithEmailAndPassword(email, password).then(function() {\n            alert(\"ログインに成功しました！\");\n            setEmail(\"\");\n            setPassword(\"\");\n        }).catch(function() {\n            alert(\"ログインに失敗しました。。\");\n        });\n    };\n    //   emailアカウントを作成する\n    var createEmailUser = function() {\n        _firebase__WEBPACK_IMPORTED_MODULE_3__.auth.createUserWithEmailAndPassword(newEmail, newPassword).then(function() {\n            alert(\"アカウントを作成しました！\");\n            setNewEmail(\"\");\n            setNewPassword(\"\");\n        });\n    };\n    var logout = function() {\n        _firebase__WEBPACK_IMPORTED_MODULE_3__.auth.signOut().then(function() {\n            alert(\"ログアウトしました\");\n            router.push(\"/Login\");\n        });\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Context.Provider, {\n        value: {\n            googleLogin: googleLogin,\n            emailLogin: emailLogin,\n            createEmailUser: createEmailUser,\n            logout: logout,\n            uid: uid,\n            email: email,\n            setEmail: setEmail,\n            password: password,\n            setPassword: setPassword,\n            newEmail: newEmail,\n            setNewEmail: setNewEmail,\n            newPassword: newPassword,\n            setNewPassword: setNewPassword\n        },\n        __source: {\n            fileName: \"/Users/hideyukiinokuchi/Desktop/mypets/components/Context.js\",\n            lineNumber: 69,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: children\n    }));\n};\n_s1(ContextProvider, \"yBz9BBqoX7oh/a1jBjJdIDymfPg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = ContextProvider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContextProvider);\nvar _c;\n$RefreshReg$(_c, \"ContextProvider\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RDhCLENBQUM7WUFDekJLLEtBQUssQ0FBQyxDQUFXO1lBQ2pCWCxNQUFNLENBQUNHLElBQUksQ0FBQyxDQUFRO1FBQ3RCLENBQUM7SUFDSCxDQUFDO0lBRUQsTUFBTSxzRUFDSGYsT0FBTyxDQUFDaUMsUUFBUTtRQUNmQyxLQUFLLEVBQUUsQ0FBQztZQUNObEIsV0FBVyxFQUFYQSxXQUFXO1lBQ1hRLFVBQVUsRUFBVkEsVUFBVTtZQUNWSyxlQUFlLEVBQWZBLGVBQWU7WUFDZkUsTUFBTSxFQUFOQSxNQUFNO1lBQ041QixHQUFHLEVBQUhBLEdBQUc7WUFDSEcsS0FBSyxFQUFMQSxLQUFLO1lBQ0xDLFFBQVEsRUFBUkEsUUFBUTtZQUNSbUIsUUFBUSxFQUFSQSxRQUFRO1lBQ1JDLFdBQVcsRUFBWEEsV0FBVztZQUNYbkIsUUFBUSxFQUFSQSxRQUFRO1lBQ1JDLFdBQVcsRUFBWEEsV0FBVztZQUNYQyxXQUFXLEVBQVhBLFdBQVc7WUFDWEMsY0FBYyxFQUFkQSxjQUFjO1FBQ2hCLENBQUM7Ozs7Ozs7a0JBRUFULFFBQVE7O0FBR2YsQ0FBQztJQWxGS0QsZUFBZTs7UUFLSkwsa0RBQVM7OztLQUxwQkssZUFBZTtBQW9GckIsK0RBQWVBLGVBQWUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NvbnRleHQuanM/ZWQwNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBhdXRoLCBkYiwgZ29vZ2xlUHJvdmlkZXIgfSBmcm9tIFwiLi9maXJlYmFzZVwiO1xuXG5leHBvcnQgY29uc3QgQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcblxuY29uc3QgQ29udGV4dFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbdWlkLCBzZXRVaWRdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtlbWFpbCxzZXRFbWFpbF0gPSB1c2VcbiAgY29uc3QgW25ld0VtYWlsLCBzZXROZXdFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW25ld1Bhc3N3b3JkLCBzZXROZXdQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhdXRoLm9uQXV0aFN0YXRlQ2hhbmdlZCgodXNlcikgPT4ge1xuICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgLy8g6Ieq5YiG44Gu44Ki44Kr44Km44Oz44OI44GudWlk44KSc3RhdGXjgafnrqHnkIbjgZnjgotcbiAgICAgICAgc2V0VWlkKHVzZXIudWlkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgLy9nb29nbGXjg63jgrDjgqTjg7NcbiAgY29uc3QgZ29vZ2xlTG9naW4gPSAoKSA9PiB7XG4gICAgYXV0aC5zaWduSW5XaXRoUG9wdXAoZ29vZ2xlUHJvdmlkZXIpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgLy8g5Yid44KB44Gm44Gu44Om44O844K244O844Gq44Gu44GL56K66KqN44GX44Gm44GE44KL44CCXG4gICAgICBjb25zdCBmaXJzdExvZ2luID0gcmVzLmFkZGl0aW9uYWxVc2VySW5mby5pc05ld1VzZXI7XG4gICAgICBpZiAoZmlyc3RMb2dpbikge1xuICAgICAgICBhbGVydChcIuWIneOCgeOBpuOBruODpuODvOOCtuODvOOBruODreOCsOOCpOODs+OCkueiuuiqjeOBl+OBvuOBl+OBn++8gVwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFsZXJ0KFwi5pei5a2Y44Gu44Om44O844K244O844Ot44Kw44Kk44Oz44KS56K66KqN44GX44G+44GX44Gf77yBXCIpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJvdXRlci5wdXNoKFwiL1RvcFwiKTtcbiAgfTtcblxuICAvL2VtYWls44Ot44Kw44Kk44OzXG4gIGNvbnN0IGVtYWlsTG9naW4gPSAoKSA9PiB7XG4gICAgYXV0aFxuICAgICAgLnNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZClcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgYWxlcnQoXCLjg63jgrDjgqTjg7PjgavmiJDlip/jgZfjgb7jgZfjgZ/vvIFcIik7XG4gICAgICAgIHNldEVtYWlsKFwiXCIpO1xuICAgICAgICBzZXRQYXNzd29yZChcIlwiKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICBhbGVydChcIuODreOCsOOCpOODs+OBq+WkseaVl+OBl+OBvuOBl+OBn+OAguOAglwiKTtcbiAgICAgIH0pO1xuICB9O1xuICAvLyAgIGVtYWls44Ki44Kr44Km44Oz44OI44KS5L2c5oiQ44GZ44KLXG4gIGNvbnN0IGNyZWF0ZUVtYWlsVXNlciA9ICgpID0+IHtcbiAgICBhdXRoLmNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChuZXdFbWFpbCwgbmV3UGFzc3dvcmQpLnRoZW4oKCkgPT4ge1xuICAgICAgYWxlcnQoXCLjgqLjgqvjgqbjg7Pjg4jjgpLkvZzmiJDjgZfjgb7jgZfjgZ/vvIFcIik7XG4gICAgICBzZXROZXdFbWFpbChcIlwiKTtcbiAgICAgIHNldE5ld1Bhc3N3b3JkKFwiXCIpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGxvZ291dCA9ICgpID0+IHtcbiAgICBhdXRoLnNpZ25PdXQoKS50aGVuKCgpID0+IHtcbiAgICAgIGFsZXJ0KFwi44Ot44Kw44Ki44Km44OI44GX44G+44GX44GfXCIpO1xuICAgICAgcm91dGVyLnB1c2goXCIvTG9naW5cIik7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgZ29vZ2xlTG9naW4sXG4gICAgICAgIGVtYWlsTG9naW4sXG4gICAgICAgIGNyZWF0ZUVtYWlsVXNlcixcbiAgICAgICAgbG9nb3V0LFxuICAgICAgICB1aWQsXG4gICAgICAgIGVtYWlsLFxuICAgICAgICBzZXRFbWFpbCxcbiAgICAgICAgcGFzc3dvcmQsXG4gICAgICAgIHNldFBhc3N3b3JkLFxuICAgICAgICBuZXdFbWFpbCxcbiAgICAgICAgc2V0TmV3RW1haWwsXG4gICAgICAgIG5ld1Bhc3N3b3JkLFxuICAgICAgICBzZXROZXdQYXNzd29yZCxcbiAgICAgIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRleHRQcm92aWRlcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsImF1dGgiLCJkYiIsImdvb2dsZVByb3ZpZGVyIiwiQ29udGV4dCIsIkNvbnRleHRQcm92aWRlciIsImNoaWxkcmVuIiwidWlkIiwic2V0VWlkIiwidXNlIiwiZW1haWwiLCJzZXRFbWFpbCIsIm5ld0VtYWlsIiwic2V0TmV3RW1haWwiLCJuZXdQYXNzd29yZCIsInNldE5ld1Bhc3N3b3JkIiwicm91dGVyIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwidXNlciIsInB1c2giLCJnb29nbGVMb2dpbiIsInNpZ25JbldpdGhQb3B1cCIsInRoZW4iLCJyZXMiLCJmaXJzdExvZ2luIiwiYWRkaXRpb25hbFVzZXJJbmZvIiwiaXNOZXdVc2VyIiwiYWxlcnQiLCJlbWFpbExvZ2luIiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiY2F0Y2giLCJjcmVhdGVFbWFpbFVzZXIiLCJjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJsb2dvdXQiLCJzaWduT3V0IiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Context.js\n");

/***/ })

});