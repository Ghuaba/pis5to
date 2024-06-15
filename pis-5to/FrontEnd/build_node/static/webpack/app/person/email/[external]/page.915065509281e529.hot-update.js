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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ modifyPersonEmail; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mdb-react-ui-kit */ \"(app-pages-browser)/./node_modules/mdb-react-ui-kit/dist/mdb-react-ui-kit.esm.js\");\n/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! yup */ \"(app-pages-browser)/./node_modules/yup/index.esm.js\");\n/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @hookform/resolvers/yup */ \"(app-pages-browser)/./node_modules/@hookform/resolvers/yup/dist/yup.mjs\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-hook-form */ \"(app-pages-browser)/./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var _signStyle_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signStyle.css */ \"(app-pages-browser)/./src/app/person/email/[external]/signStyle.css\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert */ \"(app-pages-browser)/./node_modules/sweetalert/dist/sweetalert.min.js\");\n/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _hooks_service_person__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/hooks/service_person */ \"(app-pages-browser)/./src/hooks/service_person.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n//para llenar datos dentro de los let [estado, setEstado]\n\nfunction modifyPersonEmail(param) {\n    let { params } = param;\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    //datos del usuario\n    let [estado, setEstado] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false);\n    let [person, setPerson] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(null);\n    if (!estado) {\n        (0,_hooks_service_person__WEBPACK_IMPORTED_MODULE_7__.search_person)(params.external /*, token*/ ).then((info)=>{\n            if (info.code == 200) {\n                setPerson(info.datos);\n            }\n        });\n        setEstado(true);\n    }\n    //validación de campos \n    const validationSchema = yup__WEBPACK_IMPORTED_MODULE_2__.object().shape({\n        email: yup__WEBPACK_IMPORTED_MODULE_2__.string().required(\"Campo obligatorio\"),\n        password: yup__WEBPACK_IMPORTED_MODULE_2__.string().required(\"Campo obligatorio\")\n    });\n    //validar formulario\n    const formOption = {\n        resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_3__.yupResolver)(validationSchema)\n    };\n    //envío de formulario\n    const { register, handleSubmit, formState } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_9__.useForm)(formOption);\n    let { errors } = formState;\n    const enviar_data = (data)=>{\n        let datos = {\n            \"email\": data.email,\n            \"password\": data.password,\n            \"external\": params,\n            external\n        };\n        (0,_hooks_service_person__WEBPACK_IMPORTED_MODULE_7__.modify_person_email)(data /*, token*/ ).then((info)=>{\n            if (info.code == \"200\") {\n                console.log(\"Datos registrados\");\n                console.log(info);\n                sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({\n                    title: \"INFO\",\n                    text: \"Cuenta Modificada\",\n                    icon: \"success\",\n                    button: \"Aceptar\",\n                    timer: 8000,\n                    closeOnEsc: true\n                });\n                //redireccionar a la pagina de menu\n                /*router.push('/person');\n                */ router.refresh();\n            } else {\n                sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({\n                    title: \"Error\",\n                    text: info.datos.error,\n                    icon: \"error\",\n                    button: \"Aceptar\",\n                    timer: 8000,\n                    closeOnEsc: true\n                });\n                console.log(\"No se pudo registrar\");\n                console.log(info);\n            }\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_1__.MDBContainer, {\n        fluid: true,\n        className: \"d-flex align-items-center justify-content-center bg-image vh-100\",\n        style: {\n            backgroundImage: \"url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mask gradient-custom-3\"\n            }, void 0, false, {\n                fileName: \"/home/alejandro/Escritorio/pis5to/pis-5to/FrontEnd/src/app/person/email/[external]/page.jsx\",\n                lineNumber: 91,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_1__.MDBCard, {\n                className: \"m-5\",\n                style: {\n                    maxWidth: \"600px\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_1__.MDBCardBody, {\n                    className: \"px-5\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-uppercase text-center mb-5\",\n                            children: \"Formulario de registro\"\n                        }, void 0, false, {\n                            fileName: \"/home/alejandro/Escritorio/pis5to/pis-5to/FrontEnd/src/app/person/email/[external]/page.jsx\",\n                            lineNumber: 94,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            onSubmit: handleSubmit(enviar_data),\n                            children: [\n                                errors.name && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-danger\",\n                                    children: errors.name.message\n                                }, void 0, false, {\n                                    fileName: \"/home/alejandro/Escritorio/pis5to/pis-5to/FrontEnd/src/app/person/email/[external]/page.jsx\",\n                                    lineNumber: 96,\n                                    columnNumber: 41\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_1__.MDBInput, {\n                                    wrapperClass: \"mb-4\",\n                                    label: \"Correo\",\n                                    size: \"lg\",\n                                    id: \"form1\",\n                                    type: \"text\",\n                                    ...register(\"email\"),\n                                    defaultValue: person && person.email\n                                }, void 0, false, {\n                                    fileName: \"/home/alejandro/Escritorio/pis5to/pis-5to/FrontEnd/src/app/person/email/[external]/page.jsx\",\n                                    lineNumber: 97,\n                                    columnNumber: 25\n                                }, this),\n                                errors.last_name && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-danger\",\n                                    children: errors.last_name.message\n                                }, void 0, false, {\n                                    fileName: \"/home/alejandro/Escritorio/pis5to/pis-5to/FrontEnd/src/app/person/email/[external]/page.jsx\",\n                                    lineNumber: 99,\n                                    columnNumber: 46\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_1__.MDBInput, {\n                                    wrapperClass: \"mb-4\",\n                                    label: \"Contrase\\xf1a\",\n                                    size: \"lg\",\n                                    id: \"form2\",\n                                    type: \"text\",\n                                    ...register(\"password\")\n                                }, void 0, false, {\n                                    fileName: \"/home/alejandro/Escritorio/pis5to/pis-5to/FrontEnd/src/app/person/email/[external]/page.jsx\",\n                                    lineNumber: 100,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(mdb_react_ui_kit__WEBPACK_IMPORTED_MODULE_1__.MDBBtn, {\n                                    className: \"mb-4 w-100 gradient-custom-4\",\n                                    size: \"lg\",\n                                    children: \"Confimar\"\n                                }, void 0, false, {\n                                    fileName: \"/home/alejandro/Escritorio/pis5to/pis-5to/FrontEnd/src/app/person/email/[external]/page.jsx\",\n                                    lineNumber: 102,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/alejandro/Escritorio/pis5to/pis-5to/FrontEnd/src/app/person/email/[external]/page.jsx\",\n                            lineNumber: 95,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/alejandro/Escritorio/pis5to/pis-5to/FrontEnd/src/app/person/email/[external]/page.jsx\",\n                    lineNumber: 93,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/alejandro/Escritorio/pis5to/pis-5to/FrontEnd/src/app/person/email/[external]/page.jsx\",\n                lineNumber: 92,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/alejandro/Escritorio/pis5to/pis-5to/FrontEnd/src/app/person/email/[external]/page.jsx\",\n        lineNumber: 90,\n        columnNumber: 9\n    }, this);\n}\n_s(modifyPersonEmail, \"Jqzma5mTVOLfqSCXtd5fVDjYsmM=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_5__.useRouter,\n        react_hook_form__WEBPACK_IMPORTED_MODULE_9__.useForm\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGVyc29uL2VtYWlsL1tleHRlcm5hbF0vcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUzRCO0FBQ0Q7QUFDMkI7QUFDWjtBQUNqQjtBQUNtQjtBQUNkO0FBQzhDO0FBQzVFLHlEQUF5RDtBQUN4QjtBQUVsQixTQUFTYyxrQkFBa0IsS0FBUTtRQUFSLEVBQUNDLE1BQU0sRUFBQyxHQUFSOztJQUN0QyxNQUFNQyxTQUFTUCwwREFBU0E7SUFFeEIsbUJBQW1CO0lBQ25CLElBQUksQ0FBQ1EsUUFBUUMsVUFBVSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUNuQyxJQUFJLENBQUNNLFFBQVFDLFVBQVUsR0FBR1AsK0NBQVFBLENBQUM7SUFFbkMsSUFBSSxDQUFDSSxRQUFPO1FBQ1JMLG9FQUFhQSxDQUFDRyxPQUFPTSxRQUFRLFVBQVMsS0FBSUMsSUFBSSxDQUFDLENBQUNDO1lBQzVDLElBQUdBLEtBQUtDLElBQUksSUFBSSxLQUFJO2dCQUNoQkosVUFBVUcsS0FBS0UsS0FBSztZQUN4QjtRQUNKO1FBQ0FQLFVBQVU7SUFDZDtJQUVBLHVCQUF1QjtJQUN2QixNQUFNUSxtQkFBbUJwQix1Q0FBVSxHQUFHc0IsS0FBSyxDQUFDO1FBQ3hDQyxPQUFPdkIsdUNBQVUsR0FBR3lCLFFBQVEsQ0FBQztRQUM3QkMsVUFBVTFCLHVDQUFVLEdBQUd5QixRQUFRLENBQUM7SUFDcEM7SUFHQSxvQkFBb0I7SUFDcEIsTUFBTUUsYUFBYTtRQUFFQyxVQUFVM0Isb0VBQVdBLENBQUNtQjtJQUFrQjtJQUM3RCxxQkFBcUI7SUFDckIsTUFBTSxFQUFFUyxRQUFRLEVBQUVDLFlBQVksRUFBRUMsU0FBUyxFQUFFLEdBQUc3Qix3REFBT0EsQ0FBQ3lCO0lBRXRELElBQUksRUFBRUssTUFBTSxFQUFFLEdBQUdEO0lBRWpCLE1BQU1FLGNBQWMsQ0FBQ0M7UUFDakIsSUFBSWYsUUFBUTtZQUNSLFNBQVNlLEtBQUtYLEtBQUs7WUFDbkIsWUFBWVcsS0FBS1IsUUFBUTtZQUN6QixZQUFZakI7WUFBT007UUFDdkI7UUFDQVYsMEVBQW1CQSxDQUFDNkIsS0FBSSxTQUFTLEtBQUlsQixJQUFJLENBQUMsQ0FBQ0M7WUFDdkMsSUFBSUEsS0FBS0MsSUFBSSxJQUFJLE9BQU87Z0JBQ3BCaUIsUUFBUUMsR0FBRyxDQUFDO2dCQUNaRCxRQUFRQyxHQUFHLENBQUNuQjtnQkFDWmIsaURBQUlBLENBQUM7b0JBQ0RpQyxPQUFPO29CQUNQQyxNQUFNO29CQUNOQyxNQUFNO29CQUNOQyxRQUFRO29CQUNSQyxPQUFPO29CQUNQQyxZQUFZO2dCQUNoQjtnQkFDQSxtQ0FBbUM7Z0JBQ25DO2dCQUNBLEdBQ0FoQyxPQUFPaUMsT0FBTztZQUNsQixPQUFPO2dCQUNIdkMsaURBQUlBLENBQUM7b0JBQ0RpQyxPQUFPO29CQUNQQyxNQUFNckIsS0FBS0UsS0FBSyxDQUFDeUIsS0FBSztvQkFDdEJMLE1BQU07b0JBQ05DLFFBQVE7b0JBQ1JDLE9BQU87b0JBQ1BDLFlBQVk7Z0JBQ2hCO2dCQUNBUCxRQUFRQyxHQUFHLENBQUM7Z0JBQ1pELFFBQVFDLEdBQUcsQ0FBQ25CO1lBQ2hCO1FBQ0o7SUFDSjtJQUdBLHFCQUNJLDhEQUFDdEIsMERBQVlBO1FBQUNrRCxLQUFLO1FBQUNDLFdBQVU7UUFBbUVDLE9BQU87WUFBRUMsaUJBQWlCO1FBQThFOzswQkFDck0sOERBQUNDO2dCQUFJSCxXQUFVOzs7Ozs7MEJBQ2YsOERBQUNsRCxxREFBT0E7Z0JBQUNrRCxXQUFVO2dCQUFNQyxPQUFPO29CQUFFRyxVQUFVO2dCQUFROzBCQUNoRCw0RUFBQ3JELHlEQUFXQTtvQkFBQ2lELFdBQVU7O3NDQUNuQiw4REFBQ0s7NEJBQUdMLFdBQVU7c0NBQWtDOzs7Ozs7c0NBQ2hELDhEQUFDTTs0QkFBS0MsVUFBVXZCLGFBQWFHOztnQ0FDeEJELE9BQU9zQixJQUFJLGtCQUFJLDhEQUFDQztvQ0FBRVQsV0FBVTs4Q0FBZWQsT0FBT3NCLElBQUksQ0FBQ0UsT0FBTzs7Ozs7OzhDQUMvRCw4REFBQzFELHNEQUFRQTtvQ0FBQzJELGNBQWE7b0NBQU9DLE9BQU07b0NBQVNDLE1BQUs7b0NBQUtDLElBQUc7b0NBQVFDLE1BQUs7b0NBQ3RFLEdBQUdoQyxTQUFTLFFBQVE7b0NBQUVpQyxjQUFnQmpELFVBQVVBLE9BQU9VLEtBQUs7Ozs7OztnQ0FDNURTLE9BQU8rQixTQUFTLGtCQUFJLDhEQUFDUjtvQ0FBRVQsV0FBVTs4Q0FBZWQsT0FBTytCLFNBQVMsQ0FBQ1AsT0FBTzs7Ozs7OzhDQUN6RSw4REFBQzFELHNEQUFRQTtvQ0FBQzJELGNBQWE7b0NBQU9DLE9BQU07b0NBQWFDLE1BQUs7b0NBQUtDLElBQUc7b0NBQVFDLE1BQUs7b0NBQzFFLEdBQUdoQyxTQUFTLFdBQVc7Ozs7Ozs4Q0FDeEIsOERBQUNuQyxvREFBTUE7b0NBQUNvRCxXQUFVO29DQUErQmEsTUFBSzs4Q0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNbkY7R0F2RndCbkQ7O1FBQ0xMLHNEQUFTQTtRQXlCc0JELG9EQUFPQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BlcnNvbi9lbWFpbC9bZXh0ZXJuYWxdL3BhZ2UuanN4PzlkNGMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuaW1wb3J0IHtcbiAgICBNREJCdG4sXG4gICAgTURCQ29udGFpbmVyLFxuICAgIE1EQkNhcmQsXG4gICAgTURCQ2FyZEJvZHksXG4gICAgTURCSW5wdXQsXG4gICAgTURCQ2hlY2tib3hcbn1cbiAgICBmcm9tICdtZGItcmVhY3QtdWkta2l0JztcbmltcG9ydCAqIGFzIHl1cCBmcm9tICd5dXAnO1xuaW1wb3J0IHsgeXVwUmVzb2x2ZXIgfSBmcm9tICdAaG9va2Zvcm0vcmVzb2x2ZXJzL3l1cCc7XG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcbmltcG9ydCAnLi9zaWduU3R5bGUuY3NzJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XG5pbXBvcnQgc3dhbCBmcm9tICdzd2VldGFsZXJ0JztcbmltcG9ydCB7IG1vZGlmeV9wZXJzb25fZW1haWwsIHNlYXJjaF9wZXJzb24gfSBmcm9tICdAL2hvb2tzL3NlcnZpY2VfcGVyc29uJztcbi8vcGFyYSBsbGVuYXIgZGF0b3MgZGVudHJvIGRlIGxvcyBsZXQgW2VzdGFkbywgc2V0RXN0YWRvXVxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1vZGlmeVBlcnNvbkVtYWlsKHtwYXJhbXN9KSB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgICAvL2RhdG9zIGRlbCB1c3VhcmlvXG4gICAgbGV0IFtlc3RhZG8sIHNldEVzdGFkb10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgbGV0IFtwZXJzb24sIHNldFBlcnNvbl0gPSB1c2VTdGF0ZShudWxsKTtcblxuICAgIGlmICghZXN0YWRvKXtcbiAgICAgICAgc2VhcmNoX3BlcnNvbihwYXJhbXMuZXh0ZXJuYWwvKiwgdG9rZW4qLykudGhlbigoaW5mbykgPT4ge1xuICAgICAgICAgICAgaWYoaW5mby5jb2RlID09IDIwMCl7XG4gICAgICAgICAgICAgICAgc2V0UGVyc29uKGluZm8uZGF0b3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgc2V0RXN0YWRvKHRydWUpO1xuICAgIH1cblxuICAgIC8vdmFsaWRhY2nDs24gZGUgY2FtcG9zIFxuICAgIGNvbnN0IHZhbGlkYXRpb25TY2hlbWEgPSB5dXAub2JqZWN0KCkuc2hhcGUoe1xuICAgICAgICBlbWFpbDogeXVwLnN0cmluZygpLnJlcXVpcmVkKCdDYW1wbyBvYmxpZ2F0b3JpbycpLFxuICAgICAgICBwYXNzd29yZDogeXVwLnN0cmluZygpLnJlcXVpcmVkKCdDYW1wbyBvYmxpZ2F0b3JpbycpXG4gICAgfSk7XG4gICAgXG5cbiAgICAvL3ZhbGlkYXIgZm9ybXVsYXJpb1xuICAgIGNvbnN0IGZvcm1PcHRpb24gPSB7IHJlc29sdmVyOiB5dXBSZXNvbHZlcih2YWxpZGF0aW9uU2NoZW1hKSB9O1xuICAgIC8vZW52w61vIGRlIGZvcm11bGFyaW9cbiAgICBjb25zdCB7IHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQsIGZvcm1TdGF0ZSB9ID0gdXNlRm9ybShmb3JtT3B0aW9uKTtcblxuICAgIGxldCB7IGVycm9ycyB9ID0gZm9ybVN0YXRlO1xuXG4gICAgY29uc3QgZW52aWFyX2RhdGEgPSAoZGF0YSkgPT4ge1xuICAgICAgICBsZXQgZGF0b3MgPSB7XG4gICAgICAgICAgICBcImVtYWlsXCI6IGRhdGEuZW1haWwsXG4gICAgICAgICAgICBcInBhc3N3b3JkXCI6IGRhdGEucGFzc3dvcmQsXG4gICAgICAgICAgICBcImV4dGVybmFsXCI6IHBhcmFtcyxleHRlcm5hbCxcbiAgICAgICAgfVxuICAgICAgICBtb2RpZnlfcGVyc29uX2VtYWlsKGRhdGEvKiwgdG9rZW4qLykudGhlbigoaW5mbykgPT4ge1xuICAgICAgICAgICAgaWYgKGluZm8uY29kZSA9PSAnMjAwJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGF0b3MgcmVnaXN0cmFkb3NcIik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coaW5mbyk7XG4gICAgICAgICAgICAgICAgc3dhbCh7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIklORk9cIixcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJDdWVudGEgTW9kaWZpY2FkYVwiLFxuICAgICAgICAgICAgICAgICAgICBpY29uOiBcInN1Y2Nlc3NcIixcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uOiBcIkFjZXB0YXJcIixcbiAgICAgICAgICAgICAgICAgICAgdGltZXI6IDgwMDAsXG4gICAgICAgICAgICAgICAgICAgIGNsb3NlT25Fc2M6IHRydWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAvL3JlZGlyZWNjaW9uYXIgYSBsYSBwYWdpbmEgZGUgbWVudVxuICAgICAgICAgICAgICAgIC8qcm91dGVyLnB1c2goJy9wZXJzb24nKTtcbiAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIHJvdXRlci5yZWZyZXNoKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN3YWwoe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJFcnJvclwiLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBpbmZvLmRhdG9zLmVycm9yLFxuICAgICAgICAgICAgICAgICAgICBpY29uOiBcImVycm9yXCIsXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbjogXCJBY2VwdGFyXCIsXG4gICAgICAgICAgICAgICAgICAgIHRpbWVyOiA4MDAwLFxuICAgICAgICAgICAgICAgICAgICBjbG9zZU9uRXNjOiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJObyBzZSBwdWRvIHJlZ2lzdHJhclwiKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpbmZvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9O1xuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8TURCQ29udGFpbmVyIGZsdWlkIGNsYXNzTmFtZT0nZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGJnLWltYWdlIHZoLTEwMCcgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiAndXJsKGh0dHBzOi8vbWRiY2RuLmItY2RuLm5ldC9pbWcvUGhvdG9zL25ldy10ZW1wbGF0ZXMvc2VhcmNoLWJveC9pbWc0LndlYnApJyB9fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYXNrIGdyYWRpZW50LWN1c3RvbS0zJz48L2Rpdj5cbiAgICAgICAgICAgIDxNREJDYXJkIGNsYXNzTmFtZT0nbS01JyBzdHlsZT17eyBtYXhXaWR0aDogJzYwMHB4JyB9fT5cbiAgICAgICAgICAgICAgICA8TURCQ2FyZEJvZHkgY2xhc3NOYW1lPSdweC01Jz5cbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtdXBwZXJjYXNlIHRleHQtY2VudGVyIG1iLTVcIj5Gb3JtdWxhcmlvIGRlIHJlZ2lzdHJvPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChlbnZpYXJfZGF0YSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAge2Vycm9ycy5uYW1lICYmIDxwIGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+e2Vycm9ycy5uYW1lLm1lc3NhZ2V9PC9wPn0gICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNREJJbnB1dCB3cmFwcGVyQ2xhc3M9J21iLTQnIGxhYmVsPSdDb3JyZW8nIHNpemU9J2xnJyBpZD0nZm9ybTEnIHR5cGU9J3RleHQnIFxuICAgICAgICAgICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKCdlbWFpbCcpfSBkZWZhdWx0VmFsdWUgPSB7cGVyc29uICYmIHBlcnNvbi5lbWFpbH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAge2Vycm9ycy5sYXN0X25hbWUgJiYgPHAgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj57ZXJyb3JzLmxhc3RfbmFtZS5tZXNzYWdlfTwvcD59XG4gICAgICAgICAgICAgICAgICAgICAgICA8TURCSW5wdXQgd3JhcHBlckNsYXNzPSdtYi00JyBsYWJlbD0nQ29udHJhc2XDsWEnIHNpemU9J2xnJyBpZD0nZm9ybTInIHR5cGU9J3RleHQnIFxuICAgICAgICAgICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKCdwYXNzd29yZCcpfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TURCQnRuIGNsYXNzTmFtZT0nbWItNCB3LTEwMCBncmFkaWVudC1jdXN0b20tNCcgc2l6ZT0nbGcnPkNvbmZpbWFyPC9NREJCdG4+XG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICA8L01EQkNhcmRCb2R5PlxuICAgICAgICAgICAgPC9NREJDYXJkPlxuICAgICAgICA8L01EQkNvbnRhaW5lcj5cbiAgICApO1xufVxuIl0sIm5hbWVzIjpbIk1EQkJ0biIsIk1EQkNvbnRhaW5lciIsIk1EQkNhcmQiLCJNREJDYXJkQm9keSIsIk1EQklucHV0IiwiTURCQ2hlY2tib3giLCJ5dXAiLCJ5dXBSZXNvbHZlciIsInVzZUZvcm0iLCJ1c2VSb3V0ZXIiLCJzd2FsIiwibW9kaWZ5X3BlcnNvbl9lbWFpbCIsInNlYXJjaF9wZXJzb24iLCJ1c2VTdGF0ZSIsIm1vZGlmeVBlcnNvbkVtYWlsIiwicGFyYW1zIiwicm91dGVyIiwiZXN0YWRvIiwic2V0RXN0YWRvIiwicGVyc29uIiwic2V0UGVyc29uIiwiZXh0ZXJuYWwiLCJ0aGVuIiwiaW5mbyIsImNvZGUiLCJkYXRvcyIsInZhbGlkYXRpb25TY2hlbWEiLCJvYmplY3QiLCJzaGFwZSIsImVtYWlsIiwic3RyaW5nIiwicmVxdWlyZWQiLCJwYXNzd29yZCIsImZvcm1PcHRpb24iLCJyZXNvbHZlciIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwiZm9ybVN0YXRlIiwiZXJyb3JzIiwiZW52aWFyX2RhdGEiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInRpdGxlIiwidGV4dCIsImljb24iLCJidXR0b24iLCJ0aW1lciIsImNsb3NlT25Fc2MiLCJyZWZyZXNoIiwiZXJyb3IiLCJmbHVpZCIsImNsYXNzTmFtZSIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwiZGl2IiwibWF4V2lkdGgiLCJoMiIsImZvcm0iLCJvblN1Ym1pdCIsIm5hbWUiLCJwIiwibWVzc2FnZSIsIndyYXBwZXJDbGFzcyIsImxhYmVsIiwic2l6ZSIsImlkIiwidHlwZSIsImRlZmF1bHRWYWx1ZSIsImxhc3RfbmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/person/email/[external]/page.jsx\n"));

/***/ })

});