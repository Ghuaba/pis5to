"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/person/new/page",{

/***/ "(app-pages-browser)/./src/hooks/service_person.js":
/*!*************************************!*\
  !*** ./src/hooks/service_person.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   modify_censado: function() { return /* binding */ modify_censado; },\n/* harmony export */   save_person: function() { return /* binding */ save_person; },\n/* harmony export */   search_person: function() { return /* binding */ search_person; }\n/* harmony export */ });\n/* harmony import */ var _Connection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Connection */ \"(app-pages-browser)/./src/hooks/Connection.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ \"(app-pages-browser)/./node_modules/js-cookie/dist/js.cookie.mjs\");\n\n\nasync function save_person(data /*, token*/ ) {\n    let datos = null;\n    try {\n        datos = await (0,_Connection__WEBPACK_IMPORTED_MODULE_0__.POST)(\"person/save\", data /*, token*/ );\n    } catch (error) {\n        return error.data;\n    }\n    return datos.data;\n}\nasync function search_person(external /*, token*/ ) {\n    let datos = null;\n    try {\n        datos = await (0,_Connection__WEBPACK_IMPORTED_MODULE_0__.GET)(\"person/search/uid/\" + external /*, token*/ );\n    } catch (error) {\n        return error.response.data;\n    }\n    return datos.data;\n}\nasync function modify_censado(data, token) {\n    let datos = null;\n    try {\n        datos = await (0,_Connection__WEBPACK_IMPORTED_MODULE_0__.POST)(\"/persona/editar\", data, token);\n    } catch (error) {\n        return error.data;\n    }\n    return datos.data;\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9ob29rcy9zZXJ2aWNlX3BlcnNvbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF1QztBQUNQO0FBRXpCLGVBQWVHLFlBQVlDLEtBQUksU0FBUyxHQUFUO0lBQ2xDLElBQUlDLFFBQVE7SUFDWixJQUFJO1FBQ0FBLFFBQVEsTUFBTUosaURBQUlBLENBQUMsZUFBZUcsS0FBSSxTQUFTO0lBRW5ELEVBQUUsT0FBT0UsT0FBTztRQUNaLE9BQU9BLE1BQU1GLElBQUk7SUFFckI7SUFDQSxPQUFPQyxNQUFNRCxJQUFJO0FBQ3JCO0FBRU8sZUFBZUcsY0FBY0MsU0FBUSxTQUFTLEdBQVQ7SUFDeEMsSUFBSUgsUUFBUTtJQUNaLElBQUc7UUFDQ0EsUUFBUSxNQUFNTCxnREFBR0EsQ0FBQyx1QkFBcUJRLFNBQVEsU0FBUztJQUM1RCxFQUNBLE9BQU1GLE9BQU07UUFDUixPQUFPQSxNQUFNRyxRQUFRLENBQUNMLElBQUk7SUFDOUI7SUFDQSxPQUFPQyxNQUFNRCxJQUFJO0FBQ3JCO0FBRU8sZUFBZU0sZUFBZU4sSUFBSSxFQUFFTyxLQUFLO0lBQzVDLElBQUlOLFFBQVE7SUFDWixJQUFHO1FBQ0NBLFFBQVEsTUFBTUosaURBQUlBLENBQUMsbUJBQW1CRyxNQUFNTztJQUNoRCxFQUNBLE9BQU1MLE9BQU07UUFDUixPQUFPQSxNQUFNRixJQUFJO0lBQ3JCO0lBQ0EsT0FBT0MsTUFBTUQsSUFBSTtBQUNyQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvaG9va3Mvc2VydmljZV9wZXJzb24uanM/MjJiNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0dFVCwgUE9TVH0gZnJvbSBcIi4vQ29ubmVjdGlvblwiO1xuaW1wb3J0IENvb2tpZXMgZnJvbSBcImpzLWNvb2tpZVwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2F2ZV9wZXJzb24oZGF0YS8qLCB0b2tlbiovKSB7XG4gICAgbGV0IGRhdG9zID0gbnVsbDtcbiAgICB0cnkge1xuICAgICAgICBkYXRvcyA9IGF3YWl0IFBPU1QoXCJwZXJzb24vc2F2ZVwiLCBkYXRhLyosIHRva2VuKi8pO1xuICAgICAgICBcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4gZXJyb3IuZGF0YTtcblxuICAgIH1cbiAgICByZXR1cm4gZGF0b3MuZGF0YTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNlYXJjaF9wZXJzb24oZXh0ZXJuYWwvKiwgdG9rZW4qLyl7XG4gICAgbGV0IGRhdG9zID0gbnVsbDtcbiAgICB0cnl7XG4gICAgICAgIGRhdG9zID0gYXdhaXQgR0VUKCdwZXJzb24vc2VhcmNoL3VpZC8nK2V4dGVybmFsLyosIHRva2VuKi8pO1xuICAgIH1cbiAgICBjYXRjaChlcnJvcil7XG4gICAgICAgIHJldHVybiBlcnJvci5yZXNwb25zZS5kYXRhO1xuICAgIH1cbiAgICByZXR1cm4gZGF0b3MuZGF0YVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbW9kaWZ5X2NlbnNhZG8oZGF0YSwgdG9rZW4pe1xuICAgIGxldCBkYXRvcyA9IG51bGw7XG4gICAgdHJ5e1xuICAgICAgICBkYXRvcyA9IGF3YWl0IFBPU1QoJy9wZXJzb25hL2VkaXRhcicsIGRhdGEsIHRva2VuKTtcbiAgICB9XG4gICAgY2F0Y2goZXJyb3Ipe1xuICAgICAgICByZXR1cm4gZXJyb3IuZGF0YTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdG9zLmRhdGFcbn0iXSwibmFtZXMiOlsiR0VUIiwiUE9TVCIsIkNvb2tpZXMiLCJzYXZlX3BlcnNvbiIsImRhdGEiLCJkYXRvcyIsImVycm9yIiwic2VhcmNoX3BlcnNvbiIsImV4dGVybmFsIiwicmVzcG9uc2UiLCJtb2RpZnlfY2Vuc2FkbyIsInRva2VuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/hooks/service_person.js\n"));

/***/ })

});