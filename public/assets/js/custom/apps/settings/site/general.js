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

/***/ "../public/src/js/custom/apps/settings/site/general.js":
/*!*************************************************************!*\
  !*** ../public/src/js/custom/apps/settings/site/general.js ***!
  \*************************************************************/
/***/ (() => {

eval("\n\n// Class definition\nvar KTSettingsGeneral = (function () {\n    // Shared variables\n    const form = document.querySelector('#kt_settings_general_form');\n    var fileInputs;\n    var ktFileUploaderContent;\n\n    if (!form) {\n        return;\n    }\n\n    // Init add schedule modal\n    var initSettingsPaymentAdd = () => {\n        // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/\n        var validator = FormValidation.formValidation(form, {\n            fields: {\n                title: {\n                    validators: {\n                        notEmpty: {\n                            message: 'Website name is required',\n                        },\n                    },\n                },\n            },\n\n            plugins: {\n                trigger: new FormValidation.plugins.Trigger(),\n                bootstrap: new FormValidation.plugins.Bootstrap5({\n                    rowSelector: '.fv-row',\n                    eleInvalidClass: '',\n                    eleValidClass: '',\n                }),\n            },\n        });\n\n        // Submit button handler\n        const submitButton = form.querySelector(\n            '[kt-settings-general-form-action=\"submit\"]'\n        );\n        submitButton.addEventListener('click', (e) => {\n            e.preventDefault();\n\n            // Validate form before submit\n            if (validator) {\n                validator.validate().then(function (status) {\n                    if (status == 'Valid') {\n                        // Show loading indication\n                        submitButton.setAttribute('data-kt-indicator', 'on');\n\n                        // Disable button to avoid multiple click\n                        submitButton.disabled = true;\n\n                        // Prepare form data\n                        const formData = new FormData(form);\n\n                        formData\n                            .getAll('domains[]')\n                            .forEach((domain, index) => {\n                                formData.set(\n                                    `domains[${index}]`,\n                                    domain.trim()\n                                );\n                            });\n\n                        // Check axios library docs: https://axios-http.com/docs/intro\n                        axios\n                            .post(\n                                submitButton\n                                    .closest('form')\n                                    .getAttribute('action'),\n                                formData\n                            )\n                            .then((response) => {\n                                if (response) {\n                                    // Reset form\n                                    form.reset();\n\n                                    // Show error popup. For more info check the plugin's official documentation: https://sweetalert2.github.io/\n                                    Swal.fire({\n                                        text:\n                                            response?.data?.message ||\n                                            'General settings updated successfully.',\n                                        icon: 'success',\n                                        buttonsStyling: false,\n                                        confirmButtonText: 'Ok, got it!',\n                                        customClass: {\n                                            confirmButton: 'btn btn-primary',\n                                        },\n                                        allowOutsideClick: false,\n                                    }).then((result) => {\n                                        if (result.isConfirmed) {\n                                            // Reload page to see changes\n                                            window.location.reload();\n                                        }\n                                    });\n                                } else {\n                                    // Show error popup. For more info check the plugin's official documentation: https://sweetalert2.github.io/\n                                    Swal.fire({\n                                        text:\n                                            response?.data?.message ||\n                                            'Sorry, something went wrong. Please try again.',\n                                        icon: 'error',\n                                        buttonsStyling: false,\n                                        confirmButtonText: 'Ok, got it!',\n                                        customClass: {\n                                            confirmButton: 'btn btn-primary',\n                                        },\n                                    });\n                                }\n                            })\n                            .catch((error) => {\n                                const errors = error.response?.data?.message\n                                    ? error.response?.data?.message\n                                    : error.response.data.errors;\n\n                                Swal.fire({\n                                    html: `${\n                                        errors instanceof Array\n                                            ? `<ul class=\"text-start\">${Object.values(\n                                                  error.response.data.errors\n                                              )\n                                                  .map(\n                                                      (err) =>\n                                                          `<li>${err?.message}</li>`\n                                                  )\n                                                  .join('')}</ul>`\n                                            : errors\n                                    }`,\n                                    icon: 'error',\n                                    buttonsStyling: false,\n                                    confirmButtonText: 'Ok, got it!',\n                                    customClass: {\n                                        confirmButton: 'btn btn-primary',\n                                    },\n                                });\n                            })\n                            .then(() => {\n                                // Hide loading indication\n                                submitButton.removeAttribute(\n                                    'data-kt-indicator'\n                                );\n\n                                // Enable button\n                                submitButton.disabled = false;\n                            });\n                    } else {\n                        // Show popup warning. For more info check the plugin's official documentation: https://sweetalert2.github.io/\n                        Swal.fire({\n                            text: 'Sorry, looks like there are some errors detected, please try again.',\n                            icon: 'error',\n                            buttonsStyling: false,\n                            confirmButtonText: 'Ok, got it!',\n                            customClass: {\n                                confirmButton: 'btn btn-primary',\n                            },\n                        });\n                    }\n                });\n            }\n        });\n    };\n\n    // Init File Uploader\n    const initFileUploader = () => {\n        fileInputs = Array.from(\n            document.querySelectorAll('input[type=\"file\"]')\n        );\n\n        fileInputs.forEach((input) => {\n            let error;\n            const previewContainer = input.closest('.kt-file-uploader');\n            const label = previewContainer.querySelector(\n                '.kt-file-uploader-label'\n            );\n            ktFileUploaderContent = label.innerHTML;\n            const maxFileSize = parseInt(\n                input.getAttribute('data-kt-file-uploader-max-size')\n            );\n\n            // preview image using URL.createObjectURL\n            input.addEventListener('change', function () {\n                const file = input.files[0];\n\n                if (!file) {\n                    return;\n                }\n\n                // create preview element and append to the container\n                const preview = document.createElement('img');\n\n                if (error) {\n                    error.remove();\n                }\n\n                if (file?.size > 1024 * 1024 * maxFileSize) {\n                    // create error message\n                    error = document.createElement('div');\n                    error.classList.add('text-danger', 'mt-2');\n                    error.innerText = `File size should not exceed ${maxFileSize}MB`;\n\n                    // restore label content\n                    label.innerHTML = ktFileUploaderContent;\n\n                    // empty input value\n                    input.value = '';\n\n                    // append error message\n                    previewContainer.appendChild(error);\n                    return;\n                }\n\n                // remove content and append preview\n                label.innerHTML = '';\n                preview.classList.add('kt-file-uploader-preview', 'mx-auto');\n                preview.src = URL.createObjectURL(file);\n                preview.alt = file.name;\n                label.appendChild(preview);\n            });\n        });\n    };\n\n    return {\n        // Public functions\n        init: function () {\n            initSettingsPaymentAdd();\n            initFileUploader();\n        },\n    };\n})();\n\n// On document ready\nKTUtil.onDOMContentLoaded(function () {\n    KTSettingsGeneral.init();\n});\n\n\n//# sourceURL=webpack://besttripbd/../public/src/js/custom/apps/settings/site/general.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["../public/src/js/custom/apps/settings/site/general.js"]();
/******/ 	
/******/ })()
;