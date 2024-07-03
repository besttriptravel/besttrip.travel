/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../public/src/js/custom/apps/settings/site/contact.js":
/*!*************************************************************!*\
  !*** ../public/src/js/custom/apps/settings/site/contact.js ***!
  \*************************************************************/
/***/ (() => {

eval("\n\n// Class definition\nvar KTSettingsContact = (function () {\n    // Shared variables\n    const form = document.querySelector('#kt_settings_contact_form');\n\n    if (!form) {\n        return;\n    }\n\n    // Init add schedule modal\n    var initSettingsPaymentAdd = () => {\n        // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/\n        var validator = FormValidation.formValidation(form, {\n            fields: {\n                email: {\n                    validators: {\n                        notEmpty: {\n                            message: 'Email is required',\n                        },\n                    },\n                },\n                phone: {\n                    validators: {\n                        notEmpty: {\n                            message: 'Phone is required',\n                        },\n                    },\n                },\n                address: {\n                    validators: {\n                        notEmpty: {\n                            message: 'Address is required',\n                        },\n                    },\n                },\n            },\n\n            plugins: {\n                trigger: new FormValidation.plugins.Trigger(),\n                bootstrap: new FormValidation.plugins.Bootstrap5({\n                    rowSelector: '.fv-row',\n                    eleInvalidClass: '',\n                    eleValidClass: '',\n                }),\n            },\n        });\n\n        // Submit button handler\n        const submitButton = form.querySelector(\n            '[kt-settings-contact-form-action=\"submit\"]'\n        );\n        submitButton.addEventListener('click', (e) => {\n            e.preventDefault();\n\n            // Validate form before submit\n            if (validator) {\n                validator.validate().then(function (status) {\n                    if (status == 'Valid') {\n                        // Show loading indication\n                        submitButton.setAttribute('data-kt-indicator', 'on');\n\n                        // Disable button to avoid multiple click\n                        submitButton.disabled = true;\n\n                        // Get form data\n                        const formData = new FormData(form);\n\n                        // Prepare data by filtering out empty fields\n                        const data = Array.from(formData.entries()).reduce(\n                            (acc, item) => {\n                                if (item[1]) {\n                                    acc[item[0]] = item[1];\n                                }\n                                return acc;\n                            },\n                            {}\n                        );\n\n                        // Check axios library docs: https://axios-http.com/docs/intro\n                        axios\n                            .post(\n                                submitButton\n                                    .closest('form')\n                                    .getAttribute('action'),\n                                data\n                            )\n                            .then((response) => {\n                                if (response) {\n                                    // Reset form\n                                    // form.reset();\n\n                                    // Show error popup. For more info check the plugin's official documentation: https://sweetalert2.github.io/\n                                    Swal.fire({\n                                        text:\n                                            response?.data?.message ||\n                                            'General settings updated successfully.',\n                                        icon: 'success',\n                                        buttonsStyling: false,\n                                        confirmButtonText: 'Ok, got it!',\n                                        customClass: {\n                                            confirmButton: 'btn btn-primary',\n                                        },\n                                        allowOutsideClick: false,\n                                    }).then((result) => {\n                                        if (result.isConfirmed) {\n                                            // Reload page to see changes\n                                            // window.location.reload();\n                                        }\n                                    });\n                                } else {\n                                    // Show error popup. For more info check the plugin's official documentation: https://sweetalert2.github.io/\n                                    Swal.fire({\n                                        text:\n                                            response?.data?.message ||\n                                            'Sorry, something went wrong. Please try again.',\n                                        icon: 'error',\n                                        buttonsStyling: false,\n                                        confirmButtonText: 'Ok, got it!',\n                                        customClass: {\n                                            confirmButton: 'btn btn-primary',\n                                        },\n                                    });\n                                }\n                            })\n                            .catch((error) => {\n                                const errors = error.response?.data?.message\n                                    ? error.response?.data?.message\n                                    : error.response.data.errors;\n\n                                Swal.fire({\n                                    html: `${\n                                        errors instanceof Array\n                                            ? `<ul class=\"text-start\">${Object.values(\n                                                  error.response.data.errors\n                                              )\n                                                  .map(\n                                                      (err) =>\n                                                          `<li>${err?.message}</li>`\n                                                  )\n                                                  .join('')}</ul>`\n                                            : errors\n                                    }`,\n                                    icon: 'error',\n                                    buttonsStyling: false,\n                                    confirmButtonText: 'Ok, got it!',\n                                    customClass: {\n                                        confirmButton: 'btn btn-primary',\n                                    },\n                                });\n                            })\n                            .then(() => {\n                                // Hide loading indication\n                                submitButton.removeAttribute(\n                                    'data-kt-indicator'\n                                );\n\n                                // Enable button\n                                submitButton.disabled = false;\n                            });\n                    } else {\n                        // Show popup warning. For more info check the plugin's official documentation: https://sweetalert2.github.io/\n                        Swal.fire({\n                            text: 'Sorry, looks like there are some errors detected, please try again.',\n                            icon: 'error',\n                            buttonsStyling: false,\n                            confirmButtonText: 'Ok, got it!',\n                            customClass: {\n                                confirmButton: 'btn btn-primary',\n                            },\n                        });\n                    }\n                });\n            }\n        });\n    };\n\n    return {\n        // Public functions\n        init: function () {\n            initSettingsPaymentAdd();\n        },\n    };\n})();\n\n// On document ready\nKTUtil.onDOMContentLoaded(function () {\n    KTSettingsContact.init();\n});\n\n\n//# sourceURL=webpack://besttripbd/../public/src/js/custom/apps/settings/site/contact.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["../public/src/js/custom/apps/settings/site/contact.js"]();
/******/ 	
/******/ })()
;