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

/***/ "../public/src/js/custom/apps/user-management/users/view/enable-2fa.js":
/*!*****************************************************************************!*\
  !*** ../public/src/js/custom/apps/user-management/users/view/enable-2fa.js ***!
  \*****************************************************************************/
/***/ (() => {

eval("// Class definition\nconst KTUsersEnableTwo2FA = (function () {\n    // Shared variables\n    const element = document.getElementById('kt_modal_enable_2fa');\n    const form = element.querySelector('#kt_modal_enable_2fa_form');\n    const modal = new bootstrap.Modal(element);\n\n    // Init two 2FA modal\n    const initEnableTwo2FA = () => {\n        // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/\n        const validator = FormValidation.formValidation(form, {\n            fields: {\n                password: {\n                    validators: {\n                        notEmpty: {\n                            message: 'Password confirmation is required',\n                        },\n                    },\n                },\n            },\n\n            plugins: {\n                trigger: new FormValidation.plugins.Trigger(),\n                bootstrap: new FormValidation.plugins.Bootstrap5({\n                    rowSelector: '.fv-row',\n                    eleInvalidClass: '',\n                    eleValidClass: '',\n                }),\n            },\n        });\n\n        // Close button handler\n        const closeButton = element.querySelector(\n            '[data-kt-users-modal-action=\"close\"]'\n        );\n        closeButton.addEventListener('click', (e) => {\n            e.preventDefault();\n\n            Swal.fire({\n                text: 'Are you sure you would like to close?',\n                icon: 'warning',\n                showCancelButton: true,\n                buttonsStyling: false,\n                confirmButtonText: 'Yes, close it!',\n                cancelButtonText: 'No, return',\n                customClass: {\n                    confirmButton: 'btn btn-primary',\n                    cancelButton: 'btn btn-active-light',\n                },\n            }).then((result) => {\n                if (result.value) {\n                    modal.hide(); // Hide modal\n                }\n            });\n        });\n\n        // Cancel button handler\n        const cancelButton = element.querySelector(\n            '[data-kt-users-modal-action=\"cancel\"]'\n        );\n        cancelButton.addEventListener('click', (e) => {\n            e.preventDefault();\n\n            Swal.fire({\n                text: 'Are you sure you would like to cancel?',\n                icon: 'warning',\n                showCancelButton: true,\n                buttonsStyling: false,\n                confirmButtonText: 'Yes, cancel it!',\n                cancelButtonText: 'No, return',\n                customClass: {\n                    confirmButton: 'btn btn-primary',\n                    cancelButton: 'btn btn-active-light',\n                },\n            }).then((result) => {\n                if (result.value) {\n                    form.reset(); // Reset form\n                    modal.hide(); // Hide modal\n                } else if (result.dismiss === 'cancel') {\n                    Swal.fire({\n                        text: 'Your form has not been cancelled!.',\n                        icon: 'error',\n                        buttonsStyling: false,\n                        confirmButtonText: 'Ok, got it!',\n                        customClass: {\n                            confirmButton: 'btn btn-primary',\n                        },\n                    });\n                }\n            });\n        });\n\n        // Submit button handler\n        const submitButton = element.querySelector(\n            '[data-kt-users-modal-action=\"submit\"]'\n        );\n        submitButton.addEventListener('click', (e) => {\n            // Prevent default button action\n            e.preventDefault();\n\n            // Validate form before submit\n            if (validator) {\n                validator.validate().then((status) => {\n                    console.log('validated!');\n\n                    if (status == 'Valid') {\n                        // Show loading indication\n                        submitButton.setAttribute('data-kt-indicator', 'on');\n\n                        // Disable button to avoid multiple click\n                        submitButton.disabled = true;\n\n                        // Check axios library docs: https://axios-http.com/docs/intro\n                        axios\n                            .patch(\n                                submitButton\n                                    .closest('form')\n                                    .getAttribute('action'),\n                                new FormData(form)\n                            )\n                            .then((response) => {\n                                // Reset form\n                                form.reset();\n\n                                // hide modal\n                                modal.hide();\n\n                                Swal.fire({\n                                    text:\n                                        response?.data?.message ||\n                                        `Your 2FA has been ${response.data.user.twoStepAuth ? 'enabled' : 'disabled'} successfully.`,\n                                    icon: 'success',\n                                    buttonsStyling: false,\n                                    confirmButtonText: 'Ok, got it!',\n                                    customClass: {\n                                        confirmButton: 'btn btn-primary',\n                                    },\n                                    allowOutsideClick: false,\n                                }).then((result) => {\n                                    // Get the redirect URL from the form\n                                    const redirectUrl = form.getAttribute(\n                                        'data-kt-redirect-url'\n                                    );\n\n                                    if (result.isConfirmed && redirectUrl) {\n                                        location.href = redirectUrl;\n                                    }\n                                });\n                            })\n                            .catch((error) => {\n                                const errors = error.response?.data?.message\n                                    ? error.response?.data?.message\n                                    : error?.response?.data?.errors;\n\n                                Swal.fire({\n                                    html: `${\n                                        errors instanceof Array\n                                            ? `<ul class=\"text-start\">${Object.values(\n                                                  error.response.data.errors\n                                              )\n                                                  .map(\n                                                      (err) =>\n                                                          `<li>${err?.message}</li>`\n                                                  )\n                                                  .join('')}</ul>`\n                                            : errors\n                                    }`,\n                                    icon: 'error',\n                                    buttonsStyling: false,\n                                    confirmButtonText: 'Ok, got it!',\n                                    customClass: {\n                                        confirmButton: 'btn btn-primary',\n                                    },\n                                });\n                            })\n                            .then(() => {\n                                // Hide loading indication\n                                submitButton.removeAttribute(\n                                    'data-kt-indicator'\n                                );\n\n                                // Enable button\n                                submitButton.disabled = false;\n                            });\n                    } else {\n                        // Show popup warning. For more info check the plugin's official documentation: https://sweetalert2.github.io/\n                        Swal.fire({\n                            text: 'Sorry, looks like there are some errors detected, please try again.',\n                            icon: 'error',\n                            buttonsStyling: false,\n                            confirmButtonText: 'Ok, got it!',\n                            customClass: {\n                                confirmButton: 'btn btn-primary',\n                            },\n                        });\n                    }\n                });\n            }\n        });\n    };\n\n    return {\n        // Public functions\n        init() {\n            initEnableTwo2FA();\n        },\n    };\n})();\n\n// On document ready\nKTUtil.onDOMContentLoaded(() => {\n    KTUsersEnableTwo2FA.init();\n});\n\n\n//# sourceURL=webpack://besttripbd/../public/src/js/custom/apps/user-management/users/view/enable-2fa.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["../public/src/js/custom/apps/user-management/users/view/enable-2fa.js"]();
/******/ 	
/******/ })()
;