"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/person/email/[external]/page",{

/***/ "(app-pages-browser)/./src/app/person/email/[external]/page.jsx":
/*!**************************************************!*\
  !*** ./src/app/person/email/[external]/page.jsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ modifyPersonEmail; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mdb-react-ui-kit */ \"(app-pages-browser)/./node_modules/mdb-react-ui-kit/dist/mdb-react-ui-kit.esm.js\");\n/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! yup */ \"(app-pages-browser)/./node_modules/yup/index.esm.js\");\n/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @hookform/resolvers/yup */ \"(app-pages-browser)/./node_modules/@hookform/resolvers/yup/dist/yup.mjs\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-hook-form */ \"(app-pages-browser)/./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var _signStyle_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signStyle.css */ \"(app-pages-browser)/./src/app/person/email/[external]/signStyle.css\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert */ \"(app-pages-browser)/./node_modules/sweetalert/dist/sweetalert.min.js\");\n/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _hooks_service_person__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/hooks/service_person */ \"(app-pages-browser)/./src/hooks/service_person.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n//para llenar datos dentro de los let [estado, setEstado]\n\nfunction modifyPersonEmail(param) {\n    let { params } = param;\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    //datos del usuario\n    let [estado, setEstado] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false);\n    let [person, setPerson] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(null);\n    if (!estado) {\n        (0,_hooks_service_person__WEBPACK_IMPORTED_MODULE_7__.search_person)(params.external /*, token*/ ).then((info)=>{\n            if (info.code == 200) {\n                setPerson(info.datos);\n                console.log(info.datos);\n            }\n        });\n        setEstado(true);\n    }\n    //validación de campos \n    const validationSchema = yup__WEBPACK_IMPORTED_MODULE_2__.object().shape({\n        email: yup__WEBPACK_IMPORTED_MODULE_2__.string().required(\"Campo obligatorio\"),\n        password: yup__WEBPACK_IMPORTED_MODULE_2__.string().required(\"Campo obligatorio\")\n    });\n    //validar formulario\n    const formOption = {\n        resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_3__.yupResolver)(validationSchema)\n    };\n    //envío de formulario\n    const { register, handleSubmit, formState } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_9__.useForm)(formOption);\n    let { errors } = formState;\n    const enviar_data = (data)=>{\n        let datos = {\n            \"email\": data.email,\n            \"password\": data.password,\n            \"external\": params.external\n        };\n        (0,_hooks_service_person__WEBPACK_IMPORTED_MODULE_7__.modify_person_email)(data /*, token*/ ).then((info)=>{\n            if (info.code == \"200\") {\n                console.log(\"Datos registrados\");\n                console.log(info);\n                sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({\n                    title: \"INFO\",\n                    text: \"Cuenta Modificada\",\n                    icon: \"success\",\n                    button: \"Aceptar\",\n                    timer: 8000,\n                    closeOnEsc: true\n                });\n                //redireccionar a la pagina de menu\n                /*router.push('/person');\n                */ router.refresh();\n            } else {\n                sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({\n                    title: \"Error\",\n                    text: info.datos.error,\n                    icon: \"error\",\n                    button: \"Aceptar\",\n                    timer: 8000,\n                    closeOnEsc: true\n                });\n                console.log(\"No se pudo registrar\");\n                console.log(info);\n            }\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_1__.MDBContainer, {\n        fluid: true,\n        className: \"d-flex align-items-center justify-content-center bg-image vh-100\",\n        style: {\n            backgroundImage: \"url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mask gradient-custom-3\"\n            }, void 0, false, {\n                fileName: \"/home/alejandro/Escritorio/pis5to/pis-5to/FrontEnd/src/app/person/email/[external]/page.jsx\",\n                lineNumber: 92,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_1__.MDBCard, {\n                className: \"m-5\",\n                style: {\n                    maxWidth: \"600px\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_1__.MDBCardBody, {\n                    className: \"px-5\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-uppercase text-center mb-5\",\n                            children: \"Modificar cuenta\"\n                        }, void 0, false, {\n                            fileName: \"/home/alejandro/Escritorio/pis5to/pis-5to/FrontEnd/src/app/person/email/[external]/page.jsx\",\n                            lineNumber: 95,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            onSubmit: handleSubmit(enviar_data),\n                            children: [\n                                errors.name && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-danger\",\n                                    children: errors.name.message\n                                }, void 0, false, {\n                                    fileName: \"/home/alejandro/Escritorio/pis5to/pis-5to/FrontEnd/src/app/person/email/[external]/page.jsx\",\n                                    lineNumber: 97,\n                                    columnNumber: 41\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_1__.MDBInput, {\n                                    wrapperClass: \"mb-4\",\n                                    label: \"Correo\",\n                                    size: \"lg\",\n                                    id: \"form1\",\n                                    type: \"text\",\n                                    ...register(\"email\"),\n                                    defaultValue: person && person.email\n                                }, void 0, false, {\n                                    fileName: \"/home/alejandro/Escritorio/pis5to/pis-5to/FrontEnd/src/app/person/email/[external]/page.jsx\",\n                                    lineNumber: 98,\n                                    columnNumber: 25\n                                }, this),\n                                errors.last_name && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-danger\",\n                                    children: errors.last_name.message\n                                }, void 0, false, {\n                                    fileName: \"/home/alejandro/Escritorio/pis5to/pis-5to/FrontEnd/src/app/person/email/[external]/page.jsx\",\n                                    lineNumber: 100,\n                                    columnNumber: 46\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_1__.MDBInput, {\n                                    wrapperClass: \"mb-4\",\n                                    label: \"Contrase\\xf1a\",\n                                    size: \"lg\",\n                                    id: \"form2\",\n                                    type: \"text\",\n                                    ...register(\"password\")\n                                }, void 0, false, {\n                                    fileName: \"/home/alejandro/Escritorio/pis5to/pis-5to/FrontEnd/src/app/person/email/[external]/page.jsx\",\n                                    lineNumber: 101,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_1__.MDBBtn, {\n                                    className: \"mb-4 w-100 gradient-custom-4\",\n                                    size: \"lg\",\n                                    children: \"Confimar\"\n                                }, void 0, false, {\n                                    fileName: \"/home/alejandro/Escritorio/pis5to/pis-5to/FrontEnd/src/app/person/email/[external]/page.jsx\",\n                                    lineNumber: 103,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/alejandro/Escritorio/pis5to/pis-5to/FrontEnd/src/app/person/email/[external]/page.jsx\",\n                            lineNumber: 96,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/alejandro/Escritorio/pis5to/pis-5to/FrontEnd/src/app/person/email/[external]/page.jsx\",\n                    lineNumber: 94,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/alejandro/Escritorio/pis5to/pis-5to/FrontEnd/src/app/person/email/[external]/page.jsx\",\n                lineNumber: 93,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/alejandro/Escritorio/pis5to/pis-5to/FrontEnd/src/app/person/email/[external]/page.jsx\",\n        lineNumber: 91,\n        columnNumber: 9\n    }, this);\n}\n_s(modifyPersonEmail, \"Jqzma5mTVOLfqSCXtd5fVDjYsmM=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_5__.useRouter,\n        react_hook_form__WEBPACK_IMPORTED_MODULE_9__.useForm\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGVyc29uL2VtYWlsL1tleHRlcm5hbF0vcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUzRCO0FBQ0Q7QUFDMkI7QUFDWjtBQUNqQjtBQUNtQjtBQUNkO0FBQzhDO0FBQzVFLHlEQUF5RDtBQUN4QjtBQUVsQixTQUFTYyxrQkFBa0IsS0FBUTtRQUFSLEVBQUNDLE1BQU0sRUFBQyxHQUFSOztJQUN0QyxNQUFNQyxTQUFTUCwwREFBU0E7SUFFeEIsbUJBQW1CO0lBQ25CLElBQUksQ0FBQ1EsUUFBUUMsVUFBVSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUNuQyxJQUFJLENBQUNNLFFBQVFDLFVBQVUsR0FBR1AsK0NBQVFBLENBQUM7SUFFbkMsSUFBSSxDQUFDSSxRQUFPO1FBQ1JMLG9FQUFhQSxDQUFDRyxPQUFPTSxRQUFRLFVBQVMsS0FBSUMsSUFBSSxDQUFDLENBQUNDO1lBQzVDLElBQUdBLEtBQUtDLElBQUksSUFBSSxLQUFJO2dCQUNoQkosVUFBVUcsS0FBS0UsS0FBSztnQkFDcEJDLFFBQVFDLEdBQUcsQ0FBQ0osS0FBS0UsS0FBSztZQUMxQjtRQUNKO1FBQ0FQLFVBQVU7SUFDZDtJQUVBLHVCQUF1QjtJQUN2QixNQUFNVSxtQkFBbUJ0Qix1Q0FBVSxHQUFHd0IsS0FBSyxDQUFDO1FBQ3hDQyxPQUFPekIsdUNBQVUsR0FBRzJCLFFBQVEsQ0FBQztRQUM3QkMsVUFBVTVCLHVDQUFVLEdBQUcyQixRQUFRLENBQUM7SUFDcEM7SUFHQSxvQkFBb0I7SUFDcEIsTUFBTUUsYUFBYTtRQUFFQyxVQUFVN0Isb0VBQVdBLENBQUNxQjtJQUFrQjtJQUM3RCxxQkFBcUI7SUFDckIsTUFBTSxFQUFFUyxRQUFRLEVBQUVDLFlBQVksRUFBRUMsU0FBUyxFQUFFLEdBQUcvQix3REFBT0EsQ0FBQzJCO0lBRXRELElBQUksRUFBRUssTUFBTSxFQUFFLEdBQUdEO0lBRWpCLE1BQU1FLGNBQWMsQ0FBQ0M7UUFDakIsSUFBSWpCLFFBQVE7WUFDUixTQUFTaUIsS0FBS1gsS0FBSztZQUNuQixZQUFZVyxLQUFLUixRQUFRO1lBQ3pCLFlBQVluQixPQUFPTSxRQUFRO1FBQy9CO1FBQ0FWLDBFQUFtQkEsQ0FBQytCLEtBQUksU0FBUyxLQUFJcEIsSUFBSSxDQUFDLENBQUNDO1lBQ3ZDLElBQUlBLEtBQUtDLElBQUksSUFBSSxPQUFPO2dCQUNwQkUsUUFBUUMsR0FBRyxDQUFDO2dCQUNaRCxRQUFRQyxHQUFHLENBQUNKO2dCQUNaYixpREFBSUEsQ0FBQztvQkFDRGlDLE9BQU87b0JBQ1BDLE1BQU07b0JBQ05DLE1BQU07b0JBQ05DLFFBQVE7b0JBQ1JDLE9BQU87b0JBQ1BDLFlBQVk7Z0JBQ2hCO2dCQUNBLG1DQUFtQztnQkFDbkM7Z0JBQ0EsR0FDQWhDLE9BQU9pQyxPQUFPO1lBQ2xCLE9BQU87Z0JBQ0h2QyxpREFBSUEsQ0FBQztvQkFDRGlDLE9BQU87b0JBQ1BDLE1BQU1yQixLQUFLRSxLQUFLLENBQUN5QixLQUFLO29CQUN0QkwsTUFBTTtvQkFDTkMsUUFBUTtvQkFDUkMsT0FBTztvQkFDUEMsWUFBWTtnQkFDaEI7Z0JBQ0F0QixRQUFRQyxHQUFHLENBQUM7Z0JBQ1pELFFBQVFDLEdBQUcsQ0FBQ0o7WUFDaEI7UUFDSjtJQUNKO0lBR0EscUJBQ0ksOERBQUN0QiwwREFBWUE7UUFBQ2tELEtBQUs7UUFBQ0MsV0FBVTtRQUFtRUMsT0FBTztZQUFFQyxpQkFBaUI7UUFBOEU7OzBCQUNyTSw4REFBQ0M7Z0JBQUlILFdBQVU7Ozs7OzswQkFDZiw4REFBQ2xELHFEQUFPQTtnQkFBQ2tELFdBQVU7Z0JBQU1DLE9BQU87b0JBQUVHLFVBQVU7Z0JBQVE7MEJBQ2hELDRFQUFDckQseURBQVdBO29CQUFDaUQsV0FBVTs7c0NBQ25CLDhEQUFDSzs0QkFBR0wsV0FBVTtzQ0FBa0M7Ozs7OztzQ0FDaEQsOERBQUNNOzRCQUFLQyxVQUFVckIsYUFBYUc7O2dDQUN4QkQsT0FBT29CLElBQUksa0JBQUksOERBQUNDO29DQUFFVCxXQUFVOzhDQUFlWixPQUFPb0IsSUFBSSxDQUFDRSxPQUFPOzs7Ozs7OENBQy9ELDhEQUFDMUQsc0RBQVFBO29DQUFDMkQsY0FBYTtvQ0FBT0MsT0FBTTtvQ0FBU0MsTUFBSztvQ0FBS0MsSUFBRztvQ0FBUUMsTUFBSztvQ0FDdEUsR0FBRzlCLFNBQVMsUUFBUTtvQ0FBRStCLGNBQWdCakQsVUFBVUEsT0FBT1ksS0FBSzs7Ozs7O2dDQUM1RFMsT0FBTzZCLFNBQVMsa0JBQUksOERBQUNSO29DQUFFVCxXQUFVOzhDQUFlWixPQUFPNkIsU0FBUyxDQUFDUCxPQUFPOzs7Ozs7OENBQ3pFLDhEQUFDMUQsc0RBQVFBO29DQUFDMkQsY0FBYTtvQ0FBT0MsT0FBTTtvQ0FBYUMsTUFBSztvQ0FBS0MsSUFBRztvQ0FBUUMsTUFBSztvQ0FDMUUsR0FBRzlCLFNBQVMsV0FBVzs7Ozs7OzhDQUN4Qiw4REFBQ3JDLG9EQUFNQTtvQ0FBQ29ELFdBQVU7b0NBQStCYSxNQUFLOzhDQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1uRjtHQXhGd0JuRDs7UUFDTEwsc0RBQVNBO1FBMEJzQkQsb0RBQU9BIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGVyc29uL2VtYWlsL1tleHRlcm5hbF0vcGFnZS5qc3g/OWQ0YyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5pbXBvcnQge1xuICAgIE1EQkJ0bixcbiAgICBNREJDb250YWluZXIsXG4gICAgTURCQ2FyZCxcbiAgICBNREJDYXJkQm9keSxcbiAgICBNREJJbnB1dCxcbiAgICBNREJDaGVja2JveFxufVxuICAgIGZyb20gJ21kYi1yZWFjdC11aS1raXQnO1xuaW1wb3J0ICogYXMgeXVwIGZyb20gJ3l1cCc7XG5pbXBvcnQgeyB5dXBSZXNvbHZlciB9IGZyb20gJ0Bob29rZm9ybS9yZXNvbHZlcnMveXVwJztcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xuaW1wb3J0ICcuL3NpZ25TdHlsZS5jc3MnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcbmltcG9ydCBzd2FsIGZyb20gJ3N3ZWV0YWxlcnQnO1xuaW1wb3J0IHsgbW9kaWZ5X3BlcnNvbl9lbWFpbCwgc2VhcmNoX3BlcnNvbiB9IGZyb20gJ0AvaG9va3Mvc2VydmljZV9wZXJzb24nO1xuLy9wYXJhIGxsZW5hciBkYXRvcyBkZW50cm8gZGUgbG9zIGxldCBbZXN0YWRvLCBzZXRFc3RhZG9dXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbW9kaWZ5UGVyc29uRW1haWwoe3BhcmFtc30pIHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICAgIC8vZGF0b3MgZGVsIHVzdWFyaW9cbiAgICBsZXQgW2VzdGFkbywgc2V0RXN0YWRvXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBsZXQgW3BlcnNvbiwgc2V0UGVyc29uXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gICAgaWYgKCFlc3RhZG8pe1xuICAgICAgICBzZWFyY2hfcGVyc29uKHBhcmFtcy5leHRlcm5hbC8qLCB0b2tlbiovKS50aGVuKChpbmZvKSA9PiB7XG4gICAgICAgICAgICBpZihpbmZvLmNvZGUgPT0gMjAwKXtcbiAgICAgICAgICAgICAgICBzZXRQZXJzb24oaW5mby5kYXRvcyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coaW5mby5kYXRvcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBzZXRFc3RhZG8odHJ1ZSk7XG4gICAgfVxuXG4gICAgLy92YWxpZGFjacOzbiBkZSBjYW1wb3MgXG4gICAgY29uc3QgdmFsaWRhdGlvblNjaGVtYSA9IHl1cC5vYmplY3QoKS5zaGFwZSh7XG4gICAgICAgIGVtYWlsOiB5dXAuc3RyaW5nKCkucmVxdWlyZWQoJ0NhbXBvIG9ibGlnYXRvcmlvJyksXG4gICAgICAgIHBhc3N3b3JkOiB5dXAuc3RyaW5nKCkucmVxdWlyZWQoJ0NhbXBvIG9ibGlnYXRvcmlvJylcbiAgICB9KTtcbiAgICBcblxuICAgIC8vdmFsaWRhciBmb3JtdWxhcmlvXG4gICAgY29uc3QgZm9ybU9wdGlvbiA9IHsgcmVzb2x2ZXI6IHl1cFJlc29sdmVyKHZhbGlkYXRpb25TY2hlbWEpIH07XG4gICAgLy9lbnbDrW8gZGUgZm9ybXVsYXJpb1xuICAgIGNvbnN0IHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCwgZm9ybVN0YXRlIH0gPSB1c2VGb3JtKGZvcm1PcHRpb24pO1xuXG4gICAgbGV0IHsgZXJyb3JzIH0gPSBmb3JtU3RhdGU7XG5cbiAgICBjb25zdCBlbnZpYXJfZGF0YSA9IChkYXRhKSA9PiB7XG4gICAgICAgIGxldCBkYXRvcyA9IHtcbiAgICAgICAgICAgIFwiZW1haWxcIjogZGF0YS5lbWFpbCxcbiAgICAgICAgICAgIFwicGFzc3dvcmRcIjogZGF0YS5wYXNzd29yZCxcbiAgICAgICAgICAgIFwiZXh0ZXJuYWxcIjogcGFyYW1zLmV4dGVybmFsLFxuICAgICAgICB9XG4gICAgICAgIG1vZGlmeV9wZXJzb25fZW1haWwoZGF0YS8qLCB0b2tlbiovKS50aGVuKChpbmZvKSA9PiB7XG4gICAgICAgICAgICBpZiAoaW5mby5jb2RlID09ICcyMDAnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJEYXRvcyByZWdpc3RyYWRvc1wiKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpbmZvKTtcbiAgICAgICAgICAgICAgICBzd2FsKHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiSU5GT1wiLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIkN1ZW50YSBNb2RpZmljYWRhXCIsXG4gICAgICAgICAgICAgICAgICAgIGljb246IFwic3VjY2Vzc1wiLFxuICAgICAgICAgICAgICAgICAgICBidXR0b246IFwiQWNlcHRhclwiLFxuICAgICAgICAgICAgICAgICAgICB0aW1lcjogODAwMCxcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VPbkVzYzogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIC8vcmVkaXJlY2Npb25hciBhIGxhIHBhZ2luYSBkZSBtZW51XG4gICAgICAgICAgICAgICAgLypyb3V0ZXIucHVzaCgnL3BlcnNvbicpO1xuICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgcm91dGVyLnJlZnJlc2goKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3dhbCh7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkVycm9yXCIsXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IGluZm8uZGF0b3MuZXJyb3IsXG4gICAgICAgICAgICAgICAgICAgIGljb246IFwiZXJyb3JcIixcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uOiBcIkFjZXB0YXJcIixcbiAgICAgICAgICAgICAgICAgICAgdGltZXI6IDgwMDAsXG4gICAgICAgICAgICAgICAgICAgIGNsb3NlT25Fc2M6IHRydWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5vIHNlIHB1ZG8gcmVnaXN0cmFyXCIpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGluZm8pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH07XG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxNREJDb250YWluZXIgZmx1aWQgY2xhc3NOYW1lPSdkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXIgYmctaW1hZ2UgdmgtMTAwJyBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoaHR0cHM6Ly9tZGJjZG4uYi1jZG4ubmV0L2ltZy9QaG90b3MvbmV3LXRlbXBsYXRlcy9zZWFyY2gtYm94L2ltZzQud2VicCknIH19PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21hc2sgZ3JhZGllbnQtY3VzdG9tLTMnPjwvZGl2PlxuICAgICAgICAgICAgPE1EQkNhcmQgY2xhc3NOYW1lPSdtLTUnIHN0eWxlPXt7IG1heFdpZHRoOiAnNjAwcHgnIH19PlxuICAgICAgICAgICAgICAgIDxNREJDYXJkQm9keSBjbGFzc05hbWU9J3B4LTUnPlxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC11cHBlcmNhc2UgdGV4dC1jZW50ZXIgbWItNVwiPk1vZGlmaWNhciBjdWVudGE8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KGVudmlhcl9kYXRhKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3JzLm5hbWUgJiYgPHAgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj57ZXJyb3JzLm5hbWUubWVzc2FnZX08L3A+fSAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPE1EQklucHV0IHdyYXBwZXJDbGFzcz0nbWItNCcgbGFiZWw9J0NvcnJlbycgc2l6ZT0nbGcnIGlkPSdmb3JtMScgdHlwZT0ndGV4dCcgXG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoJ2VtYWlsJyl9IGRlZmF1bHRWYWx1ZSA9IHtwZXJzb24gJiYgcGVyc29uLmVtYWlsfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3JzLmxhc3RfbmFtZSAmJiA8cCBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPntlcnJvcnMubGFzdF9uYW1lLm1lc3NhZ2V9PC9wPn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNREJJbnB1dCB3cmFwcGVyQ2xhc3M9J21iLTQnIGxhYmVsPSdDb250cmFzZcOxYScgc2l6ZT0nbGcnIGlkPSdmb3JtMicgdHlwZT0ndGV4dCcgXG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoJ3Bhc3N3b3JkJyl9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNREJCdG4gY2xhc3NOYW1lPSdtYi00IHctMTAwIGdyYWRpZW50LWN1c3RvbS00JyBzaXplPSdsZyc+Q29uZmltYXI8L01EQkJ0bj5cbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgIDwvTURCQ2FyZEJvZHk+XG4gICAgICAgICAgICA8L01EQkNhcmQ+XG4gICAgICAgIDwvTURCQ29udGFpbmVyPlxuICAgICk7XG59XG4iXSwibmFtZXMiOlsiTURCQnRuIiwiTURCQ29udGFpbmVyIiwiTURCQ2FyZCIsIk1EQkNhcmRCb2R5IiwiTURCSW5wdXQiLCJNREJDaGVja2JveCIsInl1cCIsInl1cFJlc29sdmVyIiwidXNlRm9ybSIsInVzZVJvdXRlciIsInN3YWwiLCJtb2RpZnlfcGVyc29uX2VtYWlsIiwic2VhcmNoX3BlcnNvbiIsInVzZVN0YXRlIiwibW9kaWZ5UGVyc29uRW1haWwiLCJwYXJhbXMiLCJyb3V0ZXIiLCJlc3RhZG8iLCJzZXRFc3RhZG8iLCJwZXJzb24iLCJzZXRQZXJzb24iLCJleHRlcm5hbCIsInRoZW4iLCJpbmZvIiwiY29kZSIsImRhdG9zIiwiY29uc29sZSIsImxvZyIsInZhbGlkYXRpb25TY2hlbWEiLCJvYmplY3QiLCJzaGFwZSIsImVtYWlsIiwic3RyaW5nIiwicmVxdWlyZWQiLCJwYXNzd29yZCIsImZvcm1PcHRpb24iLCJyZXNvbHZlciIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwiZm9ybVN0YXRlIiwiZXJyb3JzIiwiZW52aWFyX2RhdGEiLCJkYXRhIiwidGl0bGUiLCJ0ZXh0IiwiaWNvbiIsImJ1dHRvbiIsInRpbWVyIiwiY2xvc2VPbkVzYyIsInJlZnJlc2giLCJlcnJvciIsImZsdWlkIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJkaXYiLCJtYXhXaWR0aCIsImgyIiwiZm9ybSIsIm9uU3VibWl0IiwibmFtZSIsInAiLCJtZXNzYWdlIiwid3JhcHBlckNsYXNzIiwibGFiZWwiLCJzaXplIiwiaWQiLCJ0eXBlIiwiZGVmYXVsdFZhbHVlIiwibGFzdF9uYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/person/email/[external]/page.jsx\n"));

/***/ })

});