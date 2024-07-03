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

/***/ "../public/src/js/custom/apps/settings/content/exclusive-offers/edit.js":
/*!******************************************************************************!*\
  !*** ../public/src/js/custom/apps/settings/content/exclusive-offers/edit.js ***!
  \******************************************************************************/
/***/ (() => {

eval("\n\n// Class definition\nvar KTContentExclusiveOfferEdit = (function () {\n    // Shared variables\n    const element = document.getElementById(\n        'kt_content_exclusive_offers_edit_modal'\n    );\n    const form = element.querySelector(\n        '#kt_content_exclusive_offers_edit_form'\n    );\n    const modal = new bootstrap.Modal(element);\n    var ktFileUploaderContent;\n\n    // Init edit modal\n    var initEditContentExclusiveOffer = () => {\n        // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/\n        var validator = FormValidation.formValidation(form, {\n            fields: {\n                link: {\n                    validators: {\n                        notEmpty: {\n                            message: 'Link is required',\n                        },\n                    },\n                },\n                status: {\n                    validators: {\n                        notEmpty: {\n                            message: 'Status is required',\n                        },\n                    },\n                },\n            },\n\n            plugins: {\n                trigger: new FormValidation.plugins.Trigger(),\n                bootstrap: new FormValidation.plugins.Bootstrap5({\n                    rowSelector: '.fv-row',\n                    eleInvalidClass: '',\n                    eleValidClass: '',\n                }),\n            },\n        });\n\n        // Submit button handler\n        const submitButton = element.querySelector(\n            '#kt_content_exclusive_offers_edit_submit'\n        );\n        submitButton.addEventListener('click', (e) => {\n            e.preventDefault();\n\n            // Validate form before submit\n            if (validator) {\n                validator.validate().then(function (status) {\n                    if (status == 'Valid') {\n                        // Show loading indication\n                        submitButton.setAttribute('data-kt-indicator', 'on');\n\n                        // Disable button to avoid multiple click\n                        submitButton.disabled = true;\n\n                        // Check axios library docs: https://axios-http.com/docs/intro\n                        axios\n                            .patch(\n                                submitButton\n                                    .closest('form')\n                                    .getAttribute('action'),\n                                new FormData(form)\n                            )\n                            .then((response) => {\n                                if (response) {\n                                    // Hide modal\n                                    modal.hide();\n\n                                    // Show error popup. For more info check the plugin's official documentation: https://sweetalert2.github.io/\n                                    Swal.fire({\n                                        text:\n                                            response?.data?.message ||\n                                            'Form has been successfully submitted!',\n                                        icon: 'success',\n                                        buttonsStyling: false,\n                                        confirmButtonText: 'Ok, got it!',\n                                        customClass: {\n                                            confirmButton: 'btn btn-primary',\n                                        },\n                                        allowOutsideClick: false,\n                                    }).then(() => {\n                                        // Reset form\n                                        form.reset();\n\n                                        // Get redirect URL from the form\n                                        const redirectUrl = form.getAttribute(\n                                            'data-kt-redirect-url'\n                                        );\n\n                                        if (redirectUrl) {\n                                            location.href = redirectUrl;\n                                        } else {\n                                            location.reload();\n                                        }\n                                    });\n                                } else {\n                                    // Show error popup. For more info check the plugin's official documentation: https://sweetalert2.github.io/\n                                    Swal.fire({\n                                        text: 'Sorry, looks like there are some errors detected, please try again.',\n                                        icon: 'error',\n                                        buttonsStyling: false,\n                                        confirmButtonText: 'Ok, got it!',\n                                        customClass: {\n                                            confirmButton: 'btn btn-primary',\n                                        },\n                                    });\n                                }\n                            })\n                            .catch((error) => {\n                                console.log(error);\n                                const errors = error.response?.data?.message\n                                    ? error.response?.data?.message\n                                    : error.response.data.errors;\n\n                                Swal.fire({\n                                    html: `${\n                                        errors instanceof Array\n                                            ? `<ul class=\"text-start\">${Object.values(\n                                                  error.response.data.errors\n                                              )\n                                                  .map(\n                                                      (err) =>\n                                                          `<li>${err?.message}</li>`\n                                                  )\n                                                  .join('')}</ul>`\n                                            : errors\n                                    }`,\n                                    icon: 'error',\n                                    buttonsStyling: false,\n                                    confirmButtonText: 'Ok, got it!',\n                                    customClass: {\n                                        confirmButton: 'btn btn-primary',\n                                    },\n                                });\n                            })\n                            .then(() => {\n                                // Hide loading indication\n                                submitButton.removeAttribute(\n                                    'data-kt-indicator'\n                                );\n\n                                // Enable button\n                                submitButton.disabled = false;\n                            });\n                    } else {\n                        // Show popup warning. For more info check the plugin's official documentation: https://sweetalert2.github.io/\n                        Swal.fire({\n                            text: 'Sorry, looks like there are some errors detected, please try again.',\n                            icon: 'error',\n                            buttonsStyling: false,\n                            confirmButtonText: 'Ok, got it!',\n                            customClass: {\n                                confirmButton: 'btn btn-primary',\n                            },\n                        });\n                    }\n                });\n            }\n        });\n\n        // Cancel button handler\n        const cancelButton = element.querySelector(\n            '#kt_content_exclusive_offers_edit_cancel'\n        );\n        cancelButton.addEventListener('click', (e) => {\n            e.preventDefault();\n\n            Swal.fire({\n                text: 'Are you sure you would like to cancel?',\n                icon: 'warning',\n                showCancelButton: true,\n                buttonsStyling: false,\n                confirmButtonText: 'Yes, cancel it!',\n                cancelButtonText: 'No, return',\n                customClass: {\n                    confirmButton: 'btn btn-primary',\n                    cancelButton: 'btn btn-active-light',\n                },\n            }).then(function (result) {\n                if (result.value) {\n                    form.reset(); // Reset form\n                    modal.hide();\n                } else if (result.dismiss === 'cancel') {\n                    Swal.fire({\n                        text: 'Your form has not been cancelled!.',\n                        icon: 'error',\n                        buttonsStyling: false,\n                        confirmButtonText: 'Ok, got it!',\n                        customClass: {\n                            confirmButton: 'btn btn-primary',\n                        },\n                    });\n                }\n            });\n        });\n\n        // Close button handler\n        const closeButton = element.querySelector(\n            '#kt_content_exclusive_offers_edit_close'\n        );\n        closeButton.addEventListener('click', (e) => {\n            e.preventDefault();\n\n            Swal.fire({\n                text: 'Are you sure you would like to cancel?',\n                icon: 'warning',\n                showCancelButton: true,\n                buttonsStyling: false,\n                confirmButtonText: 'Yes, cancel it!',\n                cancelButtonText: 'No, return',\n                customClass: {\n                    confirmButton: 'btn btn-primary',\n                    cancelButton: 'btn btn-active-light',\n                },\n            }).then(function (result) {\n                if (result.value) {\n                    form.reset(); // Reset form\n                    modal.hide();\n                } else if (result.dismiss === 'cancel') {\n                    Swal.fire({\n                        text: 'Your form has not been cancelled!.',\n                        icon: 'error',\n                        buttonsStyling: false,\n                        confirmButtonText: 'Ok, got it!',\n                        customClass: {\n                            confirmButton: 'btn btn-primary',\n                        },\n                    });\n                }\n            });\n        });\n    };\n\n    // Init File Uploader\n    const initFileUploader = () => {\n        const handleFileInputChange = (input) => {\n            const previewContainer = input.closest('.kt-file-uploader');\n            const label = previewContainer.querySelector(\n                '.kt-file-uploader-label'\n            );\n            const maxFileSize = parseInt(\n                input.getAttribute('data-kt-file-uploader-max-size')\n            );\n            const invalidMessage =\n                previewContainer.querySelector('.invalid-feedback');\n            const file = input.files[0];\n\n            if (!file) {\n                return;\n            }\n\n            // remove error message\n            invalidMessage.classList.add('d-none');\n\n            // create preview element and append to the container\n            const preview = document.createElement('img');\n\n            if (file?.size > 1024 * 1024 * maxFileSize) {\n                const message = `File size should not exceed ${maxFileSize}MB`;\n\n                if (ktFileUploaderContent) {\n                    // restore label content\n                    label.innerHTML = ktFileUploaderContent;\n                }\n\n                // empty input value\n                input.value = '';\n\n                // append error message\n                invalidMessage.innerHTML = message;\n                invalidMessage.classList.remove('d-none');\n                return;\n            }\n\n            // add was-invalid class to the container\n            if (!previewContainer.classList.contains('was-invalided')) {\n                ktFileUploaderContent = label.innerHTML;\n                previewContainer.classList.add('was-invalided');\n            }\n\n            // remove content and append preview\n            label.innerHTML = '';\n            preview.classList.add('kt-file-uploader-preview');\n            preview.src = URL.createObjectURL(file);\n            preview.alt = file.name;\n            label.appendChild(preview);\n        };\n\n        form.addEventListener('change', function (event) {\n            const target = event.target;\n\n            // Check if the changed element is an input with type file\n            if (target.tagName === 'INPUT' && target.type === 'file') {\n                handleFileInputChange(target);\n            }\n        });\n    };\n\n    // Populate form data\n    const populateData = async () => {\n        const editButtons = document.querySelectorAll(\n            '[data-kt-content-exclusive-offers-table-filter=\"edit_row\"]'\n        );\n\n        if (!editButtons.length) {\n            return;\n        }\n\n        editButtons.forEach((button) => {\n            button.addEventListener('click', async () => {\n                const href = button.getAttribute('href');\n\n                try {\n                    const response = await axios.get(href);\n\n                    if (response) {\n                        const data = response.data.exclusiveOffer;\n                        const previewContainer =\n                            form.querySelector('.kt-file-uploader');\n\n                        // create preview element and append to the container\n                        const preview = document.createElement('img');\n                        preview.classList.add('kt-file-uploader-preview');\n                        preview.src = data.thumbnail;\n                        preview.alt = data.link;\n                        previewContainer.querySelector('label').innerHTML = '';\n                        previewContainer\n                            .querySelector('label')\n                            .appendChild(preview);\n\n                        form.setAttribute('action', href);\n                        form.querySelector('[name=\"link\"]').value = data.link;\n                        $(form)\n                            .find('select[name=\"status\"]')\n                            .val(data.status)\n                            .trigger('change');\n                    }\n                } catch (error) {\n                    // hide modal\n                    modal.hide();\n\n                    Swal.fire({\n                        text: 'Sorry, looks like there are some errors detected, please try again.',\n                        icon: 'error',\n                        buttonsStyling: false,\n                        confirmButtonText: 'Ok, got it!',\n                        customClass: {\n                            confirmButton: 'btn btn-primary',\n                        },\n                    });\n                }\n            });\n        });\n    };\n\n    return {\n        // Public functions\n        init: function () {\n            initEditContentExclusiveOffer();\n            initFileUploader();\n            populateData();\n        },\n    };\n})();\n\n// On document ready\nKTUtil.onDOMContentLoaded(function () {\n    KTContentExclusiveOfferEdit.init();\n});\n\n\n//# sourceURL=webpack://besttripbd/../public/src/js/custom/apps/settings/content/exclusive-offers/edit.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["../public/src/js/custom/apps/settings/content/exclusive-offers/edit.js"]();
/******/ 	
/******/ })()
;