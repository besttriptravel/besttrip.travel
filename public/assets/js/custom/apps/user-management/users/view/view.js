/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../public/src/js/custom/apps/user-management/users/view/view.js":
/*!***********************************************************************!*\
  !*** ../public/src/js/custom/apps/user-management/users/view/view.js ***!
  \***********************************************************************/
/***/ (() => {

eval("// Class definition\nconst KTUsersViewMain = (function () {\n    // Init login session button\n    const initLoginSession = () => {\n        const button = document.getElementById('kt_modal_users_login_session');\n        const url = button.getAttribute('data-kt-sign-out-all-sessions-url');\n\n        button.addEventListener('click', (e) => {\n            e.preventDefault();\n\n            Swal.fire({\n                text: 'Are you sure you would like sign out all sessions?',\n                icon: 'warning',\n                showCancelButton: true,\n                buttonsStyling: false,\n                confirmButtonText: 'Yes, sign out!',\n                cancelButtonText: 'No, return',\n                customClass: {\n                    confirmButton: 'btn btn-primary',\n                    cancelButton: 'btn btn-active-light',\n                },\n            }).then((result) => {\n                if (result.value) {\n                    // Check axios library docs: https://axios-http.com/docs/intro\n                    axios\n                        .delete(url)\n                        .then((response) => {\n                            if (response) {\n                                // Get user data\n                                const { user } = response.data || {};\n\n                                // Show success popup. For more info check the plugin's official documentation: https://sweetalert2.github.io/\n                                Swal.fire({\n                                    text:\n                                        response.data.message ||\n                                        'All sessions have been signed out!',\n                                    icon: 'success',\n                                    buttonsStyling: false,\n                                    confirmButtonText: 'Ok, got it!',\n                                    customClass: {\n                                        confirmButton: 'btn btn-primary',\n                                    },\n                                    allowOutsideClick: false,\n                                }).then(() => {\n                                    // Redirect to the login page\n                                    location.href = user\n                                        ? `/dashboard/users/${user._id}`\n                                        : '/dashboard/login';\n                                });\n                            } else {\n                                // Show error popup. For more info check the plugin's official documentation: https://sweetalert2.github.io/\n                                Swal.fire({\n                                    text: 'Something went wrong, please try again.',\n                                    icon: 'error',\n                                    buttonsStyling: false,\n                                    confirmButtonText: 'Ok, got it!',\n                                    customClass: {\n                                        confirmButton: 'btn btn-primary',\n                                    },\n                                });\n                            }\n                        })\n                        .catch((error) => {\n                            const errors = error.response.data.message\n                                ? error.response.data.message\n                                : error.response.data.errors;\n\n                            Swal.fire({\n                                html: `${\n                                    errors instanceof Array\n                                        ? `<ul class=\"text-start\">${Object.values(\n                                              error.response.data.errors\n                                          )\n                                              .map((err) => `<li>${err?.message}</li>`)\n                                              .join('')}</ul>`\n                                        : errors\n                                }`,\n                                icon: 'error',\n                                buttonsStyling: false,\n                                confirmButtonText: 'Ok, got it!',\n                                customClass: {\n                                    confirmButton: 'btn btn-primary',\n                                },\n                            });\n                        });\n                } else if (result.dismiss === 'cancel') {\n                    Swal.fire({\n                        text: 'Sessions are still preserved!',\n                        icon: 'error',\n                        buttonsStyling: false,\n                        confirmButtonText: 'Ok, got it!',\n                        customClass: {\n                            confirmButton: 'btn btn-primary',\n                        },\n                    });\n                }\n            });\n        });\n    };\n\n    // Delete two step authentication handler\n    const initDeleteTwoStep = () => {\n        const deleteButton = document.getElementById('kt_users_delete_two_step');\n\n        if (!deleteButton) {\n            return;\n        }\n\n        deleteButton.addEventListener('click', (e) => {\n            e.preventDefault();\n\n            Swal.fire({\n                text: 'Are you sure you would like remove this two-step authentication?',\n                icon: 'warning',\n                showCancelButton: true,\n                buttonsStyling: false,\n                confirmButtonText: 'Yes, remove it!',\n                cancelButtonText: 'No, return',\n                customClass: {\n                    confirmButton: 'btn btn-primary',\n                    cancelButton: 'btn btn-active-light',\n                },\n            }).then((result) => {\n                if (result.value) {\n                    Swal.fire({\n                        text: 'You have removed this two-step authentication!',\n                        icon: 'success',\n                        buttonsStyling: false,\n                        confirmButtonText: 'Ok, got it!',\n                        customClass: {\n                            confirmButton: 'btn btn-primary',\n                        },\n                    });\n                } else if (result.dismiss === 'cancel') {\n                    Swal.fire({\n                        text: 'Your two-step authentication is still valid!',\n                        icon: 'error',\n                        buttonsStyling: false,\n                        confirmButtonText: 'Ok, got it!',\n                        customClass: {\n                            confirmButton: 'btn btn-primary',\n                        },\n                    });\n                }\n            });\n        });\n    };\n\n    return {\n        // Public functions\n        init() {\n            initLoginSession();\n            initDeleteTwoStep();\n        },\n    };\n}());\n\n// On document ready\nKTUtil.onDOMContentLoaded(() => {\n    KTUsersViewMain.init();\n});\n\n\n//# sourceURL=webpack://besttripbd/../public/src/js/custom/apps/user-management/users/view/view.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["../public/src/js/custom/apps/user-management/users/view/view.js"]();
/******/ 	
/******/ })()
;