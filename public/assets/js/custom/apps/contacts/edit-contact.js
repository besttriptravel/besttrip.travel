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

/***/ "../public/src/js/custom/apps/contacts/edit-contact.js":
/*!*************************************************************!*\
  !*** ../public/src/js/custom/apps/contacts/edit-contact.js ***!
  \*************************************************************/
/***/ (() => {

eval("\n\n// Class definition\nvar KTAppContactEdit = function () {\n    // Shared variables\n\n\n    // Private functions\n    const initForm = () => {\n        // Select form\n        const form = document.getElementById('kt_ecommerce_settings_general_form');\n\n        if (!form) {\n            return;\n        }\n\n        // Dynamically create validation non-empty rule\n        const requiredFields = form.querySelectorAll('.required');\n        var detectedField;\n        var validationFields = {\n            fields: {},\n\n            plugins: {\n                trigger: new FormValidation.plugins.Trigger(),\n                bootstrap: new FormValidation.plugins.Bootstrap5({\n                    rowSelector: '.fv-row',\n                    eleInvalidClass: '',\n                    eleValidClass: ''\n                })\n            }\n        }\n\n        // Detect required fields\n        requiredFields.forEach(el => {\n            const input = el.closest('.fv-row').querySelector('input');\n            if (input) {\n                detectedField = input;\n            }\n\n            const select = el.closest('.fv-row').querySelector('select');\n            if (select) {\n                detectedField = select;\n            }\n\n            // Add validation rule                \n            const name = detectedField.getAttribute('name');\n            validationFields.fields[name] = {\n                validators: {\n                    notEmpty: {\n                        message: el.innerText + ' is required'\n                    }\n                }\n            }\n        });\n\n        // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/\n        var validator = FormValidation.formValidation(\n            form,\n            validationFields\n        );\n\n        // Submit button handler\n        const submitButton = form.querySelector('[data-kt-contacts-type=\"submit\"]');\n        submitButton.addEventListener('click', function (e) {\n            // Prevent default button action\n            e.preventDefault();\n\n            // Validate form before submit\n            if (validator) {\n                validator.validate().then(function (status) {\n                    console.log('validated!');\n\n                    if (status == 'Valid') {\n                        // Show loading indication\n                        submitButton.setAttribute('data-kt-indicator', 'on');\n\n                        // Disable button to avoid multiple click \n                        submitButton.disabled = true;\n\n                        // Simulate form submission. For more info check the plugin's official documentation: https://sweetalert2.github.io/\n                        setTimeout(function () {\n                            // Remove loading indication\n                            submitButton.removeAttribute('data-kt-indicator');\n\n                            // Enable button\n                            submitButton.disabled = false;\n\n                            // Show popup confirmation \n                            Swal.fire({\n                                text: \"Form has been successfully submitted!\",\n                                icon: \"success\",\n                                buttonsStyling: false,\n                                confirmButtonText: \"Ok, got it!\",\n                                customClass: {\n                                    confirmButton: \"btn btn-primary\"\n                                }\n                            });\n\n                            //form.submit(); // Submit form\n                        }, 2000);\n                    } else {\n                        // Show popup error \n                        Swal.fire({\n                            text: \"Oops! There are some error(s) detected.\",\n                            icon: \"error\",\n                            buttonsStyling: false,\n                            confirmButtonText: \"Ok, got it!\",\n                            customClass: {\n                                confirmButton: \"btn btn-primary\"\n                            }\n                        });\n                    }\n                });\n            }\n        });\n    }\n\n    // Init Select2 with flags\n    const initSelect2Flags = () => {\n        // Format options\n        var optionFormat = function(item) {\n            if ( !item.id ) {\n                return item.text;\n            }\n\n            var span = document.createElement('span');\n            var template = '';\n\n            template += '<img src=\"' + item.element.getAttribute('data-kt-select2-country') + '\" class=\"rounded-circle me-2\" style=\"height:19px;\" alt=\"image\"/>';\n            template += item.text;\n\n            span.innerHTML = template;\n\n            return $(span);\n        }\n\n        // Init Select2 --- more info: https://select2.org/\n        $('[data-kt-ecommerce-settings-type=\"select2_flags\"]').select2({\n            placeholder: \"Select a country\",\n            minimumResultsForSearch: Infinity,\n            templateSelection: optionFormat,\n            templateResult: optionFormat\n        });\n    }\n\n    // Public methods\n    return {\n        init: function () {\n\n            initForm();\n            initSelect2Flags();\n\n        }\n    };\n}();\n\n// On document ready\nKTUtil.onDOMContentLoaded(function () {\n    KTAppContactEdit.init();\n});\n\n\n//# sourceURL=webpack://besttripbd/../public/src/js/custom/apps/contacts/edit-contact.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["../public/src/js/custom/apps/contacts/edit-contact.js"]();
/******/ 	
/******/ })()
;