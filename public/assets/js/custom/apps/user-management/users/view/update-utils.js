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

/***/ "../public/src/js/custom/apps/user-management/users/view/update-utils.js":
/*!*******************************************************************************!*\
  !*** ../public/src/js/custom/apps/user-management/users/view/update-utils.js ***!
  \*******************************************************************************/
/***/ (() => {

eval("// Class definition\nconst KTUsersUpdateUtils = (function () {\n    // Shared variables\n    const userDisableBtn = document.getElementById('kt_users_disable_account');\n    const userDeleteBtn = document.querySelector('#kt_users_delete_account');\n\n    // Update user status\n    const initUpdateStatus = () => {\n        if (!userDisableBtn) {\n            return;\n        }\n\n        userDisableBtn.addEventListener('click', (e) => {\n            e.preventDefault();\n\n            // Show confirm popup. For more info check the plugin's official documentation: https://sweetalert2.github.io/\n            Swal.fire({\n                text: 'Are you sure you want to disable this user account?',\n                icon: 'warning',\n                buttonsStyling: false,\n                showCancelButton: true,\n                reverseButtons: true,\n                cancelButtonText: 'No, cancel',\n                confirmButtonText: 'Yes, disable!',\n                customClass: {\n                    confirmButton: 'btn btn-primary',\n                    cancelButton: 'btn btn-light',\n                },\n            }).then((result) => {\n                if (result.isConfirmed) {\n                    axios\n                        .get(userDisableBtn.getAttribute('href'))\n                        .then((response) => {\n                            // Show success message. For more info check the plugin's official documentation: https://sweetalert2.github.io/\n                            Swal.fire({\n                                text: 'User account has been disabled. The user will not be able to access the application. Redirecting to the login page...',\n                                icon: 'success',\n                                buttonsStyling: false,\n                                confirmButtonText: 'Ok, got it!',\n                                customClass: {\n                                    confirmButton: 'btn btn-primary',\n                                },\n                                closeOnClickOutside: false,\n                                showCancelButton: false,\n                            }).then((outcome) => {\n                                if (outcome.isConfirmed) {\n                                    location.href = '/dashboard/login';\n                                }\n                            });\n                        })\n                        .catch((error) => {\n                            const errors = error.response.data.message\n                                ? error.response.data.message\n                                : error.response.data.errors;\n\n                            Swal.fire({\n                                html: `${\n                                    errors instanceof Array\n                                        ? `<ul class=\"text-start\">${Object.values(\n                                              error.response.data.errors\n                                          )\n                                              .map((err) => `<li>${err?.message}</li>`)\n                                              .join('')}</ul>`\n                                        : errors\n                                }`,\n                                icon: 'error',\n                                buttonsStyling: false,\n                                confirmButtonText: 'Ok, got it!',\n                                customClass: {\n                                    confirmButton: 'btn btn-primary',\n                                },\n                            });\n                        });\n                }\n            });\n        });\n    };\n\n    return {\n        // Public functions\n        init() {\n            initUpdateStatus();\n        },\n    };\n}());\n\n// On document ready\nKTUtil.onDOMContentLoaded(() => {\n    KTUsersUpdateUtils.init();\n});\n\n\n//# sourceURL=webpack://besttripbd/../public/src/js/custom/apps/user-management/users/view/update-utils.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["../public/src/js/custom/apps/user-management/users/view/update-utils.js"]();
/******/ 	
/******/ })()
;