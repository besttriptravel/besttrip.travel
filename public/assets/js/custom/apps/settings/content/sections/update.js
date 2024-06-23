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

eval("\n\n// Class definition\nvar KTAppSettings = (function () {\n  // Shared variables\n  var fileInputs;\n  var ktFileUploaderContent;\n\n  // Private functions\n  const initForms = () => {\n    const forms = [\n      \"kt_settings_content_hotels_form\",\n      \"kt_settings_content_destinations_form\",\n      \"kt_settings_content_umrah_&_ziyarah_form\",\n      \"kt_settings_content_beautiful_places_form\",\n    ];\n\n    // Init all forms\n    forms.forEach((formId) => {\n      // Select form\n      const form = document.getElementById(formId);\n\n      if (!form) {\n        return;\n      }\n\n      // Dynamically create validation non-empty rule\n      const requiredFields = form.querySelectorAll(\".required\");\n      var detectedField;\n      var validationFields = {\n        fields: {},\n\n        plugins: {\n          trigger: new FormValidation.plugins.Trigger(),\n          bootstrap: new FormValidation.plugins.Bootstrap5({\n            rowSelector: \".fv-row\",\n            eleInvalidClass: \"\",\n            eleValidClass: \"\",\n          }),\n        },\n      };\n\n      // Detect required fields\n      requiredFields.forEach((el) => {\n        const input = el.closest(\".row\").querySelector(\"input\");\n        if (input) {\n          detectedField = input;\n        }\n\n        const textarea = el.closest(\".row\").querySelector(\"textarea\");\n        if (textarea) {\n          detectedField = textarea;\n        }\n\n        const select = el.closest(\".row\").querySelector(\"select\");\n        if (select) {\n          detectedField = select;\n        }\n\n        // Add validation rule\n        const name = detectedField?.getAttribute(\"name\");\n        validationFields.fields[name] = {\n          validators: {\n            notEmpty: {\n              message: el.innerText + \" is required\",\n            },\n          },\n        };\n      });\n\n      // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/\n      var validator = FormValidation.formValidation(form, validationFields);\n\n      // Submit button handler\n      const submitButton = form.querySelector(\n        '[data-kt-settings-type=\"submit\"]'\n      );\n      submitButton.addEventListener(\"click\", function (e) {\n        // Prevent default button action\n        e.preventDefault();\n\n        // Validate form before submit\n        if (validator) {\n          validator.validate().then(function (status) {\n            if (status == \"Valid\") {\n              // Show loading indication\n              submitButton.setAttribute(\"data-kt-indicator\", \"on\");\n\n              // Disable button to avoid multiple click\n              submitButton.disabled = true;\n\n              // Simulate form submission. For more info check the plugin's official documentation: https://sweetalert2.github.io/\n              setTimeout(function () {\n                // Remove loading indication\n                submitButton.removeAttribute(\"data-kt-indicator\");\n\n                // Enable button\n                submitButton.disabled = false;\n\n                // Show popup confirmation\n                Swal.fire({\n                  text: \"Form has been successfully submitted!\",\n                  icon: \"success\",\n                  buttonsStyling: false,\n                  confirmButtonText: \"Ok, got it!\",\n                  customClass: {\n                    confirmButton: \"btn btn-primary\",\n                  },\n                });\n\n                // Reset file inputs after submit\n                fileInputs.forEach((input) => {\n                  const previewContainer = input.closest(\".kt-file-uploader\");\n                  const label = previewContainer.querySelector(\n                    \".kt-file-uploader-label\"\n                  );\n\n                  input.value = \"\";\n                  label.innerHTML = ktFileUploaderContent;\n                });\n\n                form.reset(); // Reset form to default state\n\n                // form.submit(); // Submit form\n              }, 2000);\n            } else {\n              // Show popup error\n              Swal.fire({\n                text: \"Oops! There are some error(s) detected.\",\n                icon: \"error\",\n                buttonsStyling: false,\n                confirmButtonText: \"Ok, got it!\",\n                customClass: {\n                  confirmButton: \"btn btn-primary\",\n                },\n              });\n            }\n          });\n        }\n      });\n    });\n  };\n\n  // Public methods\n  return {\n    init: function () {\n      initForms();\n    },\n  };\n})();\n\n// On document ready\nKTUtil.onDOMContentLoaded(function () {\n  KTAppSettings.init();\n});\n\n\n//# sourceURL=webpack://besttripbd/../public/src/js/custom/apps/settings/content/sections/update.js?");

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