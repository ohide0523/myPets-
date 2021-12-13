/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/Context.js":
/*!*******************************!*\
  !*** ./components/Context.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Context\": () => (/* binding */ Context),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./firebase */ \"./components/firebase.js\");\n\n\n\n\nconst Context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst ContextProvider = ({ children  })=>{\n    const { 0: uid , 1: setUid  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const { 0: email , 1: setEmail  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: password , 1: setPassword  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: newPassword , 1: setNewPassword  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: newEmail , 1: setNewEmail  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        _firebase__WEBPACK_IMPORTED_MODULE_3__.auth.onAuthStateChanged((user)=>{\n            if (user) {\n                // 自分のアカウントのuidをstateで管理する\n                setUid(user.uid);\n            } else {\n                router.push(\"/login\");\n            }\n        });\n    }, []);\n    //googleログイン\n    const googleLogin = ()=>{\n        _firebase__WEBPACK_IMPORTED_MODULE_3__.auth.signInWithPopup(_firebase__WEBPACK_IMPORTED_MODULE_3__.googleProvider).then((res)=>{\n            // 初めてのユーザーなのか確認している。\n            const firstLogin = res.additionalUserInfo.isNewUser;\n            if (firstLogin) {\n                alert(\"初めてのユーザーのログインを確認しました！\");\n            } else {\n                alert(\"既存のユーザーログインを確認しました！\");\n            }\n        });\n        router.push(\"/Top\");\n    };\n    //emailログイン\n    const emailLogin = ()=>{\n        _firebase__WEBPACK_IMPORTED_MODULE_3__.auth.signInWithEmailAndPassword(email, password).then(()=>{\n            alert(\"ログインに成功しました！\");\n            setEmail(\"\");\n            setPassword(\"\");\n        }).catch(()=>{\n            alert(\"ログインに失敗しました。。\");\n        });\n    };\n    //   emailアカウントを作成する\n    const createEmailUser = ()=>{\n        _firebase__WEBPACK_IMPORTED_MODULE_3__.auth.createUserWithEmailAndPassword(newEmail, newPassword).then(()=>{\n            alert(\"アカウントを作成しました！\");\n            setNewEmail(\"\");\n            setNewPassword(\"\");\n        }).catch(()=>{\n            alert(\"失敗しました。。。\");\n        });\n    };\n    const logout = ()=>{\n        _firebase__WEBPACK_IMPORTED_MODULE_3__.auth.signOut().then(()=>{\n            alert(\"ログアウトしました\");\n            router.push(\"/Login\");\n        });\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Context.Provider, {\n        value: {\n            googleLogin,\n            emailLogin,\n            createEmailUser,\n            logout,\n            uid,\n            email,\n            setEmail,\n            password,\n            setPassword,\n            newEmail,\n            setNewEmail,\n            newPassword,\n            setNewPassword\n        },\n        __source: {\n            fileName: \"/Users/hideyukiinokuchi/Desktop/mypets/components/Context.js\",\n            lineNumber: 72,\n            columnNumber: 5\n        },\n        __self: undefined,\n        children: children\n    }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContextProvider);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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M0IsR0FBRztZQUNIRSxLQUFLO1lBQ0xDLFFBQVE7WUFDUkMsUUFBUTtZQUNSQyxXQUFXO1lBQ1hHLFFBQVE7WUFDUkMsV0FBVztZQUNYSCxXQUFXO1lBQ1hDLGNBQWM7UUFDaEIsQ0FBQzs7Ozs7OztrQkFFQVIsUUFBUTs7QUFHZixDQUFDO0FBRUQsaUVBQWVELGVBQWUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215cGV0cy8uL2NvbXBvbmVudHMvQ29udGV4dC5qcz9lZDA1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IGF1dGgsIGRiLCBnb29nbGVQcm92aWRlciB9IGZyb20gXCIuL2ZpcmViYXNlXCI7XG5cbmV4cG9ydCBjb25zdCBDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuXG5jb25zdCBDb250ZXh0UHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IFt1aWQsIHNldFVpZF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2VtYWlsLHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpXG4gIGNvbnN0IFtwYXNzd29yZCxzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKVxuICBjb25zdCBbbmV3UGFzc3dvcmQsc2V0TmV3UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIilcbiAgY29uc3QgW25ld0VtYWlsLCBzZXROZXdFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhdXRoLm9uQXV0aFN0YXRlQ2hhbmdlZCgodXNlcikgPT4ge1xuICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgLy8g6Ieq5YiG44Gu44Ki44Kr44Km44Oz44OI44GudWlk44KSc3RhdGXjgafnrqHnkIbjgZnjgotcbiAgICAgICAgc2V0VWlkKHVzZXIudWlkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgLy9nb29nbGXjg63jgrDjgqTjg7NcbiAgY29uc3QgZ29vZ2xlTG9naW4gPSAoKSA9PiB7XG4gICAgYXV0aC5zaWduSW5XaXRoUG9wdXAoZ29vZ2xlUHJvdmlkZXIpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgLy8g5Yid44KB44Gm44Gu44Om44O844K244O844Gq44Gu44GL56K66KqN44GX44Gm44GE44KL44CCXG4gICAgICBjb25zdCBmaXJzdExvZ2luID0gcmVzLmFkZGl0aW9uYWxVc2VySW5mby5pc05ld1VzZXI7XG4gICAgICBpZiAoZmlyc3RMb2dpbikge1xuICAgICAgICBhbGVydChcIuWIneOCgeOBpuOBruODpuODvOOCtuODvOOBruODreOCsOOCpOODs+OCkueiuuiqjeOBl+OBvuOBl+OBn++8gVwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFsZXJ0KFwi5pei5a2Y44Gu44Om44O844K244O844Ot44Kw44Kk44Oz44KS56K66KqN44GX44G+44GX44Gf77yBXCIpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJvdXRlci5wdXNoKFwiL1RvcFwiKTtcbiAgfTtcblxuICAvL2VtYWls44Ot44Kw44Kk44OzXG4gIGNvbnN0IGVtYWlsTG9naW4gPSAoKSA9PiB7XG4gICAgYXV0aFxuICAgICAgLnNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZClcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgYWxlcnQoXCLjg63jgrDjgqTjg7PjgavmiJDlip/jgZfjgb7jgZfjgZ/vvIFcIik7XG4gICAgICAgIHNldEVtYWlsKFwiXCIpO1xuICAgICAgICBzZXRQYXNzd29yZChcIlwiKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICBhbGVydChcIuODreOCsOOCpOODs+OBq+WkseaVl+OBl+OBvuOBl+OBn+OAguOAglwiKTtcbiAgICAgIH0pO1xuICB9O1xuICAvLyAgIGVtYWls44Ki44Kr44Km44Oz44OI44KS5L2c5oiQ44GZ44KLXG4gIGNvbnN0IGNyZWF0ZUVtYWlsVXNlciA9ICgpID0+IHtcbiAgICBhdXRoLmNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChuZXdFbWFpbCwgbmV3UGFzc3dvcmQpLnRoZW4oKCkgPT4ge1xuICAgICAgYWxlcnQoXCLjgqLjgqvjgqbjg7Pjg4jjgpLkvZzmiJDjgZfjgb7jgZfjgZ/vvIFcIik7XG4gICAgICBzZXROZXdFbWFpbChcIlwiKTtcbiAgICAgIHNldE5ld1Bhc3N3b3JkKFwiXCIpO1xuICAgIH0pLmNhdGNoKCgpPT57XG4gICAgICAgIGFsZXJ0KFwi5aSx5pWX44GX44G+44GX44Gf44CC44CC44CCXCIpXG4gICAgfSlcbiAgfTtcblxuICBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XG4gICAgYXV0aC5zaWduT3V0KCkudGhlbigoKSA9PiB7XG4gICAgICBhbGVydChcIuODreOCsOOCouOCpuODiOOBl+OBvuOBl+OBn1wiKTtcbiAgICAgIHJvdXRlci5wdXNoKFwiL0xvZ2luXCIpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7XG4gICAgICAgIGdvb2dsZUxvZ2luLFxuICAgICAgICBlbWFpbExvZ2luLFxuICAgICAgICBjcmVhdGVFbWFpbFVzZXIsXG4gICAgICAgIGxvZ291dCxcbiAgICAgICAgdWlkLFxuICAgICAgICBlbWFpbCxcbiAgICAgICAgc2V0RW1haWwsXG4gICAgICAgIHBhc3N3b3JkLFxuICAgICAgICBzZXRQYXNzd29yZCxcbiAgICAgICAgbmV3RW1haWwsXG4gICAgICAgIHNldE5ld0VtYWlsLFxuICAgICAgICBuZXdQYXNzd29yZCxcbiAgICAgICAgc2V0TmV3UGFzc3dvcmQsXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0NvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250ZXh0UHJvdmlkZXI7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJhdXRoIiwiZGIiLCJnb29nbGVQcm92aWRlciIsIkNvbnRleHQiLCJDb250ZXh0UHJvdmlkZXIiLCJjaGlsZHJlbiIsInVpZCIsInNldFVpZCIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwibmV3UGFzc3dvcmQiLCJzZXROZXdQYXNzd29yZCIsIm5ld0VtYWlsIiwic2V0TmV3RW1haWwiLCJyb3V0ZXIiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJ1c2VyIiwicHVzaCIsImdvb2dsZUxvZ2luIiwic2lnbkluV2l0aFBvcHVwIiwidGhlbiIsInJlcyIsImZpcnN0TG9naW4iLCJhZGRpdGlvbmFsVXNlckluZm8iLCJpc05ld1VzZXIiLCJhbGVydCIsImVtYWlsTG9naW4iLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsImNhdGNoIiwiY3JlYXRlRW1haWxVc2VyIiwiY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIiwibG9nb3V0Iiwic2lnbk91dCIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Context.js\n");

/***/ }),

/***/ "./components/firebase.js":
/*!********************************!*\
  !*** ./components/firebase.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"auth\": () => (/* binding */ auth),\n/* harmony export */   \"googleProvider\": () => (/* binding */ googleProvider)\n/* harmony export */ });\n/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/app */ \"@firebase/app\");\n/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_firebase_app__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @firebase/auth */ \"@firebase/auth\");\n/* harmony import */ var _firebase_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_firebase_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @firebase/firestore */ \"@firebase/firestore\");\n/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_firebase_firestore__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nif (!(_firebase_app__WEBPACK_IMPORTED_MODULE_0___default().apps.length)) {\n    _firebase_app__WEBPACK_IMPORTED_MODULE_0___default().initializeApp({\n        apiKey: \"AIzaSyC_SK0QajmwDJKMcce1wJ570V5cyTy-ZMg\",\n        authDomain: \"mypets-743b3.firebaseapp.com\",\n        projectId: \"mypets-743b3\",\n        storageBucket: \"mypets-743b3.appspot.com\",\n        messagingSenderId: \"772499991986\",\n        appId: \"1:772499991986:web:368a75aad4379bc98808ab\"\n    });\n}\nconst auth = _firebase_app__WEBPACK_IMPORTED_MODULE_0___default().auth();\nconst googleProvider = new (_firebase_app__WEBPACK_IMPORTED_MODULE_0___default().auth.GoogleAuthProvider)();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2ZpcmViYXNlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQW9DO0FBQ2I7QUFDSztBQUU1QixFQUFFLEdBQUdBLGtFQUFvQixFQUFFLENBQUM7SUFDMUJBLGtFQUFzQixDQUFDLENBQUM7UUFDdEJJLE1BQU0sRUFBRSxDQUF5QztRQUNqREMsVUFBVSxFQUFFLENBQThCO1FBQzFDQyxTQUFTLEVBQUUsQ0FBYztRQUN6QkMsYUFBYSxFQUFFLENBQTBCO1FBQ3pDQyxpQkFBaUIsRUFBRSxDQUFjO1FBQ2pDQyxLQUFLLEVBQUUsQ0FBMkM7SUFDcEQsQ0FBQztBQUNILENBQUM7QUFFTSxLQUFLLENBQUNDLElBQUksR0FBR1YseURBQWE7QUFDMUIsS0FBSyxDQUFDVyxjQUFjLEdBQUcsR0FBRyxDQUFDWCw4RUFBZ0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teXBldHMvLi9jb21wb25lbnRzL2ZpcmViYXNlLmpzPzZhYzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZpcmViYXNlIGZyb20gXCJAZmlyZWJhc2UvYXBwXCI7XG5pbXBvcnQgXCJAZmlyZWJhc2UvYXV0aFwiO1xuaW1wb3J0IFwiQGZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuXG5pZiAoIWZpcmViYXNlLmFwcHMubGVuZ3RoKSB7XG4gIGZpcmViYXNlLmluaXRpYWxpemVBcHAoe1xuICAgIGFwaUtleTogXCJBSXphU3lDX1NLMFFham13REpLTWNjZTF3SjU3MFY1Y3lUeS1aTWdcIixcbiAgICBhdXRoRG9tYWluOiBcIm15cGV0cy03NDNiMy5maXJlYmFzZWFwcC5jb21cIixcbiAgICBwcm9qZWN0SWQ6IFwibXlwZXRzLTc0M2IzXCIsXG4gICAgc3RvcmFnZUJ1Y2tldDogXCJteXBldHMtNzQzYjMuYXBwc3BvdC5jb21cIixcbiAgICBtZXNzYWdpbmdTZW5kZXJJZDogXCI3NzI0OTk5OTE5ODZcIixcbiAgICBhcHBJZDogXCIxOjc3MjQ5OTk5MTk4Njp3ZWI6MzY4YTc1YWFkNDM3OWJjOTg4MDhhYlwiLFxuICB9KTtcbn1cblxuZXhwb3J0IGNvbnN0IGF1dGggPSBmaXJlYmFzZS5hdXRoKClcbmV4cG9ydCBjb25zdCBnb29nbGVQcm92aWRlciA9IG5ldyBmaXJlYmFzZS5hdXRoLkdvb2dsZUF1dGhQcm92aWRlcigpO1xuIl0sIm5hbWVzIjpbImZpcmViYXNlIiwiYXBwcyIsImxlbmd0aCIsImluaXRpYWxpemVBcHAiLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJhdXRoIiwiZ29vZ2xlUHJvdmlkZXIiLCJHb29nbGVBdXRoUHJvdmlkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/firebase.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Context */ \"./components/Context.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Context__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        __source: {\n            fileName: \"/Users/hideyukiinokuchi/Desktop/mypets/pages/_app.js\",\n            lineNumber: 6,\n            columnNumber: 3\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {\n            ...pageProps,\n            __source: {\n                fileName: \"/Users/hideyukiinokuchi/Desktop/mypets/pages/_app.js\",\n                lineNumber: 7,\n                columnNumber: 5\n            },\n            __self: this\n        })\n    }));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBbUQ7QUFDckI7U0FFckJDLEtBQUssQ0FBQyxDQUFDLENBQUNDLFNBQVMsR0FBRUMsU0FBUyxFQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3hDLE1BQU0sc0VBQ0xILDJEQUFlOzs7Ozs7O3VGQUNiRSxTQUFTO2VBQUtDLFNBQVM7Ozs7Ozs7OztBQUc1QixDQUFDO0FBRUQsaUVBQWVGLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215cGV0cy8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29udGV4dFByb3ZpZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0NvbnRleHRcIjtcbmltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuKFxuICA8Q29udGV4dFByb3ZpZGVyPlxuICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgPC9Db250ZXh0UHJvdmlkZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsiQ29udGV4dFByb3ZpZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@firebase/app":
/*!********************************!*\
  !*** external "@firebase/app" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@firebase/app");

/***/ }),

/***/ "@firebase/auth":
/*!*********************************!*\
  !*** external "@firebase/auth" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@firebase/auth");

/***/ }),

/***/ "@firebase/firestore":
/*!**************************************!*\
  !*** external "@firebase/firestore" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@firebase/firestore");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();