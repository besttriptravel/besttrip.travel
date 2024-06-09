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

/***/ "../public/src/js/custom/apps/user-management/users/view/update-details.js":
/*!*********************************************************************************!*\
  !*** ../public/src/js/custom/apps/user-management/users/view/update-details.js ***!
  \*********************************************************************************/
/***/ (() => {

eval("// Class definition\nconst KTUsersUpdateDetails = (function () {\n    // Shared variables\n    const element = document.getElementById('kt_modal_update_details');\n    const form = element.querySelector('#kt_modal_update_user_form');\n    const modal = new bootstrap.Modal(element);\n    let validator;\n\n    // Init add schedule modal\n    const initUpdateDetails = () => {\n        // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/\n        validator = FormValidation.formValidation(form, {\n            fields: {\n                name: {\n                    validators: {\n                        notEmpty: {\n                            message: 'Name is required',\n                        },\n                    },\n                },\n                email: {\n                    validators: {\n                        regexp: {\n                            regexp: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/,\n                            message: 'The value is not a valid email address',\n                        },\n                        notEmpty: {\n                            message: 'Email address is required',\n                        },\n                    },\n                },\n            },\n            plugins: {\n                bootstrap: new FormValidation.plugins.Bootstrap5({\n                    rowSelector: '.fv-row',\n                    eleInvalidClass: '', // comment to enable invalid state icons\n                    eleValidClass: '', // comment to enable valid state icons\n                }),\n            },\n        });\n\n        // Close button handler\n        const closeButton = element.querySelector('[data-kt-users-modal-action=\"close\"]');\n        closeButton.addEventListener('click', (e) => {\n            e.preventDefault();\n\n            Swal.fire({\n                text: 'Are you sure you would like to cancel?',\n                icon: 'warning',\n                showCancelButton: true,\n                buttonsStyling: false,\n                confirmButtonText: 'Yes, cancel it!',\n                cancelButtonText: 'No, return',\n                customClass: {\n                    confirmButton: 'btn btn-primary',\n                    cancelButton: 'btn btn-active-light',\n                },\n            }).then((result) => {\n                if (result.value) {\n                    form.reset(); // Reset form\n                    modal.hide(); // Hide modal\n                } else if (result.dismiss === 'cancel') {\n                    Swal.fire({\n                        text: 'Your form has not been cancelled!.',\n                        icon: 'error',\n                        buttonsStyling: false,\n                        confirmButtonText: 'Ok, got it!',\n                        customClass: {\n                            confirmButton: 'btn btn-primary',\n                        },\n                    });\n                }\n            });\n        });\n\n        // Cancel button handler\n        const cancelButton = element.querySelector('[data-kt-users-modal-action=\"cancel\"]');\n        cancelButton.addEventListener('click', (e) => {\n            e.preventDefault();\n\n            Swal.fire({\n                text: 'Are you sure you would like to cancel?',\n                icon: 'warning',\n                showCancelButton: true,\n                buttonsStyling: false,\n                confirmButtonText: 'Yes, cancel it!',\n                cancelButtonText: 'No, return',\n                customClass: {\n                    confirmButton: 'btn btn-primary',\n                    cancelButton: 'btn btn-active-light',\n                },\n            }).then((result) => {\n                if (result.value) {\n                    form.reset(); // Reset form\n                    modal.hide(); // Hide modal\n                } else if (result.dismiss === 'cancel') {\n                    Swal.fire({\n                        text: 'Your form has not been cancelled!.',\n                        icon: 'error',\n                        buttonsStyling: false,\n                        confirmButtonText: 'Ok, got it!',\n                        customClass: {\n                            confirmButton: 'btn btn-primary',\n                        },\n                    });\n                }\n            });\n        });\n\n        // Submit button handler\n        const submitButton = element.querySelector('[data-kt-users-modal-action=\"submit\"]');\n        // Handle form submit\n        submitButton.addEventListener('click', (e) => {\n            e.preventDefault();\n\n            validator.revalidateField('password');\n\n            validator.validate().then((status) => {\n                if (status == 'Valid') {\n                    // Show loading indication\n                    submitButton.setAttribute('data-kt-indicator', 'on');\n\n                    // Disable button to avoid multiple click\n                    submitButton.disabled = true;\n                    // User form data\n                    const userFormData = new FormData();\n\n                    // Form fields\n                    const formFields = [\n                        'name',\n                        'email',\n                        'phone',\n                        'dob',\n                        'address',\n                        'city',\n                        'state',\n                        'country',\n                        'postalCode',\n                    ];\n\n                    // Append form data dynamically\n                    formFields.forEach(\n                        (field) =>\n                            form[field].value.trim() &&\n                            userFormData.append(field, form[field].value.trim())\n                    );\n\n                    // Append avatar\n                    if (form.avatar.files.length > 0) {\n                        userFormData.append('avatar', form.avatar.files[0]);\n                    }\n\n                    console.log(userFormData.get('avatar'));\n\n                    // Check axios library docs: https://axios-http.com/docs/intro\n                    axios\n                        .patch(submitButton.closest('form').getAttribute('action'), userFormData)\n                        .then((response) => {\n                            Swal.fire({\n                                text:\n                                    response.data.message ||\n                                    'Form has been successfully submitted!',\n                                icon: 'success',\n                                buttonsStyling: false,\n                                confirmButtonText: 'Ok, got it!',\n                                customClass: {\n                                    confirmButton: 'btn btn-primary',\n                                },\n                                allowOutsideClick: false,\n                            }).then((result) => {\n                                // Get the redirect URL from the form\n                                const redirectUrl = form.getAttribute('data-kt-redirect-url');\n\n                                if (result.isConfirmed && redirectUrl) {\n                                    modal.hide();\n                                    location.href = redirectUrl;\n                                }\n                            });\n                        })\n                        .catch((error) => {\n                            const errors = error.response.data.message\n                                ? error.response.data.message\n                                : error.response.data.errors;\n\n                            Swal.fire({\n                                html: `${\n                                    errors instanceof Array\n                                        ? `<ul class=\"text-start\">${Object.values(\n                                              error.response.data.errors\n                                          ).map((err) => `<li>${err?.message}</li>`)}</ul>`\n                                        : errors\n                                }`,\n                                icon: 'error',\n                                buttonsStyling: false,\n                                confirmButtonText: 'Ok, got it!',\n                                customClass: {\n                                    confirmButton: 'btn btn-primary',\n                                },\n                            });\n                        })\n                        .then(() => {\n                            // Hide loading indication\n                            submitButton.removeAttribute('data-kt-indicator');\n\n                            // Enable button\n                            submitButton.disabled = false;\n                        });\n                }\n                // Show error popup. For more info check the plugin's official documentation: https://sweetalert2.github.io/\n                Swal.fire({\n                    text: 'Sorry, looks like there are some errors detected, please try again.',\n                    icon: 'error',\n                    buttonsStyling: false,\n                    confirmButtonText: 'Ok, got it!',\n                    customClass: {\n                        confirmButton: 'btn btn-primary',\n                    },\n                });\n            });\n        });\n    };\n\n    // Date of birth picker\n    const dobPicker = () => {\n        $('#kt_datepicker_user_dob').flatpickr({\n            enableTime: false,\n            dateFormat: 'Y-m-d',\n        });\n    };\n\n    return {\n        // Public functions\n        init() {\n            initUpdateDetails();\n            dobPicker();\n        },\n    };\n}());\n\n// On document ready\nKTUtil.onDOMContentLoaded(() => {\n    KTUsersUpdateDetails.init();\n});\n\n\n//# sourceURL=webpack://besttripbd/../public/src/js/custom/apps/user-management/users/view/update-details.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["../public/src/js/custom/apps/user-management/users/view/update-details.js"]();
/******/ 	
/******/ })()
;