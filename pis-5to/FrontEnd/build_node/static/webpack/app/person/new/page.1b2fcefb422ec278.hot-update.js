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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   modify_censado: function() { return /* binding */ modify_censado; },\n/* harmony export */   save_person: function() { return /* binding */ save_person; },\n/* harmony export */   search: function() { return /* binding */ search; }\n/* harmony export */ });\n/* harmony import */ var _Connection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Connection */ \"(app-pages-browser)/./src/hooks/Connection.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ \"(app-pages-browser)/./node_modules/js-cookie/dist/js.cookie.mjs\");\n\n\nasync function save_person(data /*, token*/ ) {\n    let datos = null;\n    try {\n        datos = await (0,_Connection__WEBPACK_IMPORTED_MODULE_0__.POST)(\"person/save\", data /*, token*/ );\n    } catch (error) {\n        return error.data;\n    }\n    return datos.data;\n}\nasync function search(external /*, token*/ ) {\n    let datos = null;\n    try {\n        datos = await (0,_Connection__WEBPACK_IMPORTED_MODULE_0__.GET)(\"persona/\" + external /*, token*/ );\n    } catch (error) {\n        return error.response.data;\n    }\n    return datos.data;\n}\nasync function modify_censado(data, token) {\n    let datos = null;\n    try {\n        datos = await (0,_Connection__WEBPACK_IMPORTED_MODULE_0__.POST)(\"/persona/editar\", data, token);\n    } catch (error) {\n        return error.data;\n    }\n    return datos.data;\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9ob29rcy9zZXJ2aWNlX3BlcnNvbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF1QztBQUNQO0FBRXpCLGVBQWVHLFlBQVlDLEtBQUksU0FBUyxHQUFUO0lBQ2xDLElBQUlDLFFBQVE7SUFDWixJQUFJO1FBQ0FBLFFBQVEsTUFBTUosaURBQUlBLENBQUMsZUFBZUcsS0FBSSxTQUFTO0lBRW5ELEVBQUUsT0FBT0UsT0FBTztRQUNaLE9BQU9BLE1BQU1GLElBQUk7SUFFckI7SUFDQSxPQUFPQyxNQUFNRCxJQUFJO0FBQ3JCO0FBRU8sZUFBZUcsT0FBT0MsU0FBUSxTQUFTLEdBQVQ7SUFDakMsSUFBSUgsUUFBUTtJQUNaLElBQUc7UUFDQ0EsUUFBUSxNQUFNTCxnREFBR0EsQ0FBQyxhQUFXUSxTQUFRLFNBQVM7SUFDbEQsRUFDQSxPQUFNRixPQUFNO1FBQ1IsT0FBT0EsTUFBTUcsUUFBUSxDQUFDTCxJQUFJO0lBQzlCO0lBQ0EsT0FBT0MsTUFBTUQsSUFBSTtBQUNyQjtBQUVPLGVBQWVNLGVBQWVOLElBQUksRUFBRU8sS0FBSztJQUM1QyxJQUFJTixRQUFRO0lBQ1osSUFBRztRQUNDQSxRQUFRLE1BQU1KLGlEQUFJQSxDQUFDLG1CQUFtQkcsTUFBTU87SUFDaEQsRUFDQSxPQUFNTCxPQUFNO1FBQ1IsT0FBT0EsTUFBTUYsSUFBSTtJQUNyQjtJQUNBLE9BQU9DLE1BQU1ELElBQUk7QUFDckIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3NlcnZpY2VfcGVyc29uLmpzPzIyYjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtHRVQsIFBPU1R9IGZyb20gXCIuL0Nvbm5lY3Rpb25cIjtcbmltcG9ydCBDb29raWVzIGZyb20gXCJqcy1jb29raWVcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNhdmVfcGVyc29uKGRhdGEvKiwgdG9rZW4qLykge1xuICAgIGxldCBkYXRvcyA9IG51bGw7XG4gICAgdHJ5IHtcbiAgICAgICAgZGF0b3MgPSBhd2FpdCBQT1NUKFwicGVyc29uL3NhdmVcIiwgZGF0YS8qLCB0b2tlbiovKTtcbiAgICAgICAgXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIGVycm9yLmRhdGE7XG5cbiAgICB9XG4gICAgcmV0dXJuIGRhdG9zLmRhdGE7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZWFyY2goZXh0ZXJuYWwvKiwgdG9rZW4qLyl7XG4gICAgbGV0IGRhdG9zID0gbnVsbDtcbiAgICB0cnl7XG4gICAgICAgIGRhdG9zID0gYXdhaXQgR0VUKCdwZXJzb25hLycrZXh0ZXJuYWwvKiwgdG9rZW4qLyk7XG4gICAgfVxuICAgIGNhdGNoKGVycm9yKXtcbiAgICAgICAgcmV0dXJuIGVycm9yLnJlc3BvbnNlLmRhdGE7XG4gICAgfVxuICAgIHJldHVybiBkYXRvcy5kYXRhXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBtb2RpZnlfY2Vuc2FkbyhkYXRhLCB0b2tlbil7XG4gICAgbGV0IGRhdG9zID0gbnVsbDtcbiAgICB0cnl7XG4gICAgICAgIGRhdG9zID0gYXdhaXQgUE9TVCgnL3BlcnNvbmEvZWRpdGFyJywgZGF0YSwgdG9rZW4pO1xuICAgIH1cbiAgICBjYXRjaChlcnJvcil7XG4gICAgICAgIHJldHVybiBlcnJvci5kYXRhO1xuICAgIH1cbiAgICByZXR1cm4gZGF0b3MuZGF0YVxufSJdLCJuYW1lcyI6WyJHRVQiLCJQT1NUIiwiQ29va2llcyIsInNhdmVfcGVyc29uIiwiZGF0YSIsImRhdG9zIiwiZXJyb3IiLCJzZWFyY2giLCJleHRlcm5hbCIsInJlc3BvbnNlIiwibW9kaWZ5X2NlbnNhZG8iLCJ0b2tlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/hooks/service_person.js\n"));

/***/ })

});