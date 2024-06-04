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

/***/ "../public/src/js/custom/authentication/reset-password/forgot-password.js":
/*!********************************************************************************!*\
  !*** ../public/src/js/custom/authentication/reset-password/forgot-password.js ***!
  \********************************************************************************/
/***/ (() => {

eval("// Class Definition\nconst KTAuthResetPassword = (function () {\n    // Elements\n    let form;\n    let submitButton;\n    let validator;\n\n    const handleForm = function (e) {\n        // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/\n        validator = FormValidation.formValidation(form, {\n            fields: {\n                email: {\n                    validators: {\n                        regexp: {\n                            regexp: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/,\n                            message: 'The value is not a valid email address',\n                        },\n                        notEmpty: {\n                            message: 'Email address is required',\n                        },\n                    },\n                },\n            },\n            plugins: {\n                trigger: new FormValidation.plugins.Trigger(),\n                bootstrap: new FormValidation.plugins.Bootstrap5({\n                    rowSelector: '.fv-row',\n                    eleInvalidClass: '', // comment to enable invalid state icons\n                    eleValidClass: '', // comment to enable valid state icons\n                }),\n            },\n        });\n    };\n\n    const handleSubmitDemo = function (e) {\n        submitButton.addEventListener('click', (e) => {\n            e.preventDefault();\n\n            // Validate form\n            validator.validate().then((status) => {\n                if (status == 'Valid') {\n                    // Show loading indication\n                    submitButton.setAttribute('data-kt-indicator', 'on');\n\n                    // Disable button to avoid multiple click\n                    submitButton.disabled = true;\n\n                    // Simulate ajax request\n                    setTimeout(() => {\n                        // Hide loading indication\n                        submitButton.removeAttribute('data-kt-indicator');\n\n                        // Enable button\n                        submitButton.disabled = false;\n\n                        // Show message popup. For more info check the plugin's official documentation: https://sweetalert2.github.io/\n                        Swal.fire({\n                            text: 'We have send a password reset link to your email.',\n                            icon: 'success',\n                            buttonsStyling: false,\n                            confirmButtonText: 'Ok, got it!',\n                            customClass: {\n                                confirmButton: 'btn btn-primary',\n                            },\n                        }).then((result) => {\n                            if (result.isConfirmed) {\n                                form.querySelector('[name=\"email\"]').value = '';\n                                // form.submit();\n\n                                const redirectUrl = form.getAttribute('data-kt-redirect-url');\n                                if (redirectUrl) {\n                                    location.href = redirectUrl;\n                                }\n                            }\n                        });\n                    }, 1500);\n                } else {\n                    // Show error popup. For more info check the plugin's official documentation: https://sweetalert2.github.io/\n                    Swal.fire({\n                        text: 'Sorry, looks like there are some errors detected, please try again.',\n                        icon: 'error',\n                        buttonsStyling: false,\n                        confirmButtonText: 'Ok, got it!',\n                        customClass: {\n                            confirmButton: 'btn btn-primary',\n                        },\n                    });\n                }\n            });\n        });\n    };\n\n    const handleSubmitAjax = function (e) {\n        // Handle form submit\n        submitButton.addEventListener('click', (e) => {\n            // Prevent button default action\n            e.preventDefault();\n\n            // Validate form\n            validator.validate().then((status) => {\n                if (status == 'Valid') {\n                    // Show loading indication\n                    submitButton.setAttribute('data-kt-indicator', 'on');\n\n                    // Disable button to avoid multiple click\n                    submitButton.disabled = true;\n\n                    // Check axios library docs: https://axios-http.com/docs/intro\n                    axios\n                        .post(\n                            submitButton.closest('form').getAttribute('action'),\n                            new FormData(form)\n                        )\n                        .then((response) => {\n                            if (response) {\n                                form.reset();\n\n                                // Show message popup. For more info check the plugin's official documentation: https://sweetalert2.github.io/\n                                Swal.fire({\n                                    text: 'We have send a password reset link to your email.',\n                                    icon: 'success',\n                                    buttonsStyling: false,\n                                    confirmButtonText: 'Ok, got it!',\n                                    customClass: {\n                                        confirmButton: 'btn btn-primary',\n                                    },\n                                }).then((result) => {\n                                    const redirectUrl = form.getAttribute('data-kt-redirect-url');\n\n                                    // if (result.isConfirmed && redirectUrl) {\n                                    //     location.href = redirectUrl;\n                                    // }\n                                });\n                            } else {\n                                // Show error popup. For more info check the plugin's official documentation: https://sweetalert2.github.io/\n                                Swal.fire({\n                                    text: 'Sorry, the email is incorrect, please try again.',\n                                    icon: 'error',\n                                    buttonsStyling: false,\n                                    confirmButtonText: 'Ok, got it!',\n                                    customClass: {\n                                        confirmButton: 'btn btn-primary',\n                                    },\n                                });\n                            }\n                        })\n                        .catch((error) => {\n                            const errors = error.response.data.message\n                                ? error.response.data.message\n                                : error.response.data.errors;\n\n                            Swal.fire({\n                                html: `${\n                                    errors instanceof Array\n                                        ? `<ul class=\"text-start\">${Object.values(\n                                              error.response.data.errors\n                                          ).map((err) => `<li>${err?.message}</li>`)}</ul>`\n                                        : errors\n                                }`,\n                                icon: 'error',\n                                buttonsStyling: false,\n                                confirmButtonText: 'Ok, got it!',\n                                customClass: {\n                                    confirmButton: 'btn btn-primary',\n                                },\n                            });\n                        })\n                        .then(() => {\n                            // Hide loading indication\n                            submitButton.removeAttribute('data-kt-indicator');\n\n                            // Enable button\n                            submitButton.disabled = false;\n                        });\n                } else {\n                    // Show error popup. For more info check the plugin's official documentation: https://sweetalert2.github.io/\n                    Swal.fire({\n                        text: 'Sorry, looks like there are some errors detected, please try again.',\n                        icon: 'error',\n                        buttonsStyling: false,\n                        confirmButtonText: 'Ok, got it!',\n                        customClass: {\n                            confirmButton: 'btn btn-primary',\n                        },\n                    });\n                }\n            });\n        });\n    };\n\n    const isValidUrl = function (url) {\n        try {\n            new URL(url);\n            return true;\n        } catch (e) {\n            return false;\n        }\n    };\n\n    // Public Functions\n    return {\n        // public functions\n        init() {\n            form = document.querySelector('#kt_password_reset_form');\n            submitButton = document.querySelector('#kt_password_reset_submit');\n\n            handleForm();\n\n            // if (isValidUrl(form.getAttribute('action'))) {\n            handleSubmitAjax(); // use for ajax submit\n            // } else {\n            //     handleSubmitDemo(); // used for demo purposes only\n            // }\n        },\n    };\n}());\n\n// On document ready\nKTUtil.onDOMContentLoaded(() => {\n    KTAuthResetPassword.init();\n});\n\n\n//# sourceURL=webpack://besttripbd/../public/src/js/custom/authentication/reset-password/forgot-password.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["../public/src/js/custom/authentication/reset-password/forgot-password.js"]();
/******/ 	
/******/ })()
;