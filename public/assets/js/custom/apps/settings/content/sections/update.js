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

/***/ "../public/src/js/custom/apps/settings/content/sections/update.js":
/*!************************************************************************!*\
  !*** ../public/src/js/custom/apps/settings/content/sections/update.js ***!
  \************************************************************************/
/***/ (() => {

eval("\n\n// Class definition\nvar KTAppSettings = (function () {\n    // Shared variables\n    var fileInputs;\n    var ktFileUploaderContent;\n\n    // Private functions\n    const initForms = () => {\n        const forms = [\n            'kt_settings_content_hotels_form',\n            'kt_settings_content_destinations_form',\n            'kt_settings_content_umrah_&_ziyarah_form',\n            'kt_settings_content_beautiful_places_form',\n        ];\n\n        // Init all forms\n        forms.forEach((formId) => {\n            // Select form\n            const form = document.getElementById(formId);\n\n            if (!form) {\n                return;\n            }\n\n            // Dynamically create validation non-empty rule\n            const requiredFields = form.querySelectorAll('.required');\n            var detectedField;\n            var validationFields = {\n                fields: {},\n\n                plugins: {\n                    trigger: new FormValidation.plugins.Trigger(),\n                    bootstrap: new FormValidation.plugins.Bootstrap5({\n                        rowSelector: '.fv-row',\n                        eleInvalidClass: '',\n                        eleValidClass: '',\n                    }),\n                },\n            };\n\n            // Detect required fields\n            requiredFields.forEach((el) => {\n                const input = el.closest('.row').querySelector('input');\n                if (input) {\n                    detectedField = input;\n                }\n\n                const textarea = el.closest('.row').querySelector('textarea');\n                if (textarea) {\n                    detectedField = textarea;\n                }\n\n                const select = el.closest('.row').querySelector('select');\n                if (select) {\n                    detectedField = select;\n                }\n\n                // Add validation rule\n                const name = detectedField?.getAttribute('name');\n                validationFields.fields[name] = {\n                    validators: {\n                        notEmpty: {\n                            message: el.innerText + ' is required',\n                        },\n                    },\n                };\n            });\n\n            // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/\n            var validator = FormValidation.formValidation(\n                form,\n                validationFields\n            );\n\n            // Submit button handler\n            const submitButton = form.querySelector(\n                '[data-kt-settings-type=\"submit\"]'\n            );\n            submitButton.addEventListener('click', function (e) {\n                // Prevent default button action\n                e.preventDefault();\n\n                // Validate form before submit\n                if (validator) {\n                    validator.validate().then(function (status) {\n                        if (status == 'Valid') {\n                            // Show loading indication\n                            submitButton.setAttribute(\n                                'data-kt-indicator',\n                                'on'\n                            );\n\n                            // Disable button to avoid multiple click\n                            submitButton.disabled = true;\n\n                            // Check axios library docs: https://axios-http.com/docs/intro\n                            axios\n                                .post(\n                                    submitButton\n                                        .closest('form')\n                                        .getAttribute('action'),\n                                    new FormData(form)\n                                )\n                                .then((response) => {\n                                    if (response) {\n                                        // Show error popup. For more info check the plugin's official documentation: https://sweetalert2.github.io/\n                                        Swal.fire({\n                                            text:\n                                                response?.data?.message ||\n                                                'Form has been successfully submitted!',\n                                            icon: 'success',\n                                            buttonsStyling: false,\n                                            confirmButtonText: 'Ok, got it!',\n                                            customClass: {\n                                                confirmButton:\n                                                    'btn btn-primary',\n                                            },\n                                            allowOutsideClick: false,\n                                        }).then(() => {\n                                            // Reset form\n                                            form.reset();\n\n                                            // Get redirect URL from the form\n                                            const redirectUrl =\n                                                form.getAttribute(\n                                                    'data-kt-redirect-url'\n                                                );\n\n                                            if (redirectUrl) {\n                                                location.href = redirectUrl;\n                                            } else {\n                                                // location.reload();\n                                            }\n                                        });\n                                    } else {\n                                        // Show error popup. For more info check the plugin's official documentation: https://sweetalert2.github.io/\n                                        Swal.fire({\n                                            text: 'Sorry, looks like there are some errors detected, please try again.',\n                                            icon: 'error',\n                                            buttonsStyling: false,\n                                            confirmButtonText: 'Ok, got it!',\n                                            customClass: {\n                                                confirmButton:\n                                                    'btn btn-primary',\n                                            },\n                                        });\n                                    }\n                                })\n                                .catch((error) => {\n                                    console.log(error);\n                                    const errors = error.response?.data?.message\n                                        ? error.response?.data?.message\n                                        : error.response.data.errors;\n\n                                    Swal.fire({\n                                        html: `${\n                                            errors instanceof Array\n                                                ? `<ul class=\"text-start\">${Object.values(\n                                                      error.response.data.errors\n                                                  )\n                                                      .map(\n                                                          (err) =>\n                                                              `<li>${err?.message}</li>`\n                                                      )\n                                                      .join('')}</ul>`\n                                                : errors\n                                        }`,\n                                        icon: 'error',\n                                        buttonsStyling: false,\n                                        confirmButtonText: 'Ok, got it!',\n                                        customClass: {\n                                            confirmButton: 'btn btn-primary',\n                                        },\n                                    });\n                                })\n                                .then(() => {\n                                    // Hide loading indication\n                                    submitButton.removeAttribute(\n                                        'data-kt-indicator'\n                                    );\n\n                                    // Enable button\n                                    submitButton.disabled = false;\n                                });\n                        } else {\n                            // Show popup error\n                            Swal.fire({\n                                text: 'Oops! There are some error(s) detected.',\n                                icon: 'error',\n                                buttonsStyling: false,\n                                confirmButtonText: 'Ok, got it!',\n                                customClass: {\n                                    confirmButton: 'btn btn-primary',\n                                },\n                            });\n                        }\n                    });\n                }\n            });\n        });\n    };\n\n    // Public methods\n    return {\n        init: function () {\n            initForms();\n        },\n    };\n})();\n\n// On document ready\nKTUtil.onDOMContentLoaded(function () {\n    KTAppSettings.init();\n});\n\n\n//# sourceURL=webpack://besttripbd/../public/src/js/custom/apps/settings/content/sections/update.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["../public/src/js/custom/apps/settings/content/sections/update.js"]();
/******/ 	
/******/ })()
;