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

/***/ "../public/src/js/custom/apps/markup-management/visa/export.js":
/*!*********************************************************************!*\
  !*** ../public/src/js/custom/apps/markup-management/visa/export.js ***!
  \*********************************************************************/
/***/ (() => {

eval("\n\n// Class definition\nvar KTModalExportMarkupVisa = (function () {\n  // Shared variables\n  const element = document.getElementById(\"kt_modal_export_markup_visa\");\n  const form = element.querySelector(\"#kt_modal_export_markup_visa_form\");\n  const modal = new bootstrap.Modal(element);\n\n  // Init form inputs\n  var initForm = function () {\n    // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/\n    var validator = FormValidation.formValidation(form, {\n      fields: {\n        format: {\n          validators: {\n            notEmpty: {\n              message: \"File format is required\",\n            },\n          },\n        },\n      },\n      plugins: {\n        trigger: new FormValidation.plugins.Trigger(),\n        bootstrap: new FormValidation.plugins.Bootstrap5({\n          rowSelector: \".fv-row\",\n          eleInvalidClass: \"\",\n          eleValidClass: \"\",\n        }),\n      },\n    });\n\n    // Submit button handler\n    const submitButton = element.querySelector(\n      '[data-kt-markup-visa-modal-action=\"submit\"]'\n    );\n    submitButton.addEventListener(\"click\", function (e) {\n      e.preventDefault();\n\n      // Validate form before submit\n      if (validator) {\n        validator.validate().then(function (status) {\n          if (status == \"Valid\") {\n            submitButton.setAttribute(\"data-kt-indicator\", \"on\");\n\n            // Disable submit button whilst loading\n            submitButton.disabled = true;\n\n            setTimeout(function () {\n              submitButton.removeAttribute(\"data-kt-indicator\");\n\n              Swal.fire({\n                text: \"Markup flight list has been successfully exported!\",\n                icon: \"success\",\n                buttonsStyling: false,\n                confirmButtonText: \"Ok, got it!\",\n                customClass: {\n                  confirmButton: \"btn btn-primary\",\n                },\n              }).then(function (result) {\n                if (result.isConfirmed) {\n                  modal.hide();\n\n                  // Enable submit button after loading\n                  submitButton.disabled = false;\n                }\n              });\n\n              //form.submit(); // Submit form\n            }, 2000);\n          } else {\n            Swal.fire({\n              text: \"Sorry, looks like there are some errors detected, please try again.\",\n              icon: \"error\",\n              buttonsStyling: false,\n              confirmButtonText: \"Ok, got it!\",\n              customClass: {\n                confirmButton: \"btn btn-primary\",\n              },\n            });\n          }\n        });\n      }\n    });\n\n    // Cancel button handler\n    const cancelButton = element.querySelector(\n      '[data-kt-markup-visa-modal-action=\"cancel\"]'\n    );\n    cancelButton.addEventListener(\"click\", function (e) {\n      e.preventDefault();\n\n      Swal.fire({\n        text: \"Are you sure you would like to cancel?\",\n        icon: \"warning\",\n        showCancelButton: true,\n        buttonsStyling: false,\n        confirmButtonText: \"Yes, cancel it!\",\n        cancelButtonText: \"No, return\",\n        customClass: {\n          confirmButton: \"btn btn-primary\",\n          cancelButton: \"btn btn-active-light\",\n        },\n      }).then(function (result) {\n        if (result.value) {\n          form.reset(); // Reset form\n          modal.hide(); // Hide modal\n        } else if (result.dismiss === \"cancel\") {\n          Swal.fire({\n            text: \"Your form has not been cancelled!.\",\n            icon: \"error\",\n            buttonsStyling: false,\n            confirmButtonText: \"Ok, got it!\",\n            customClass: {\n              confirmButton: \"btn btn-primary\",\n            },\n          });\n        }\n      });\n    });\n\n    // Close button handler\n    const closeButton = element.querySelector(\n      '[data-kt-markup-visa-modal-action=\"close\"]'\n    );\n    closeButton.addEventListener(\"click\", function (e) {\n      e.preventDefault();\n\n      Swal.fire({\n        text: \"Are you sure you would like to cancel?\",\n        icon: \"warning\",\n        showCancelButton: true,\n        buttonsStyling: false,\n        confirmButtonText: \"Yes, cancel it!\",\n        cancelButtonText: \"No, return\",\n        customClass: {\n          confirmButton: \"btn btn-primary\",\n          cancelButton: \"btn btn-active-light\",\n        },\n      }).then(function (result) {\n        if (result.value) {\n          form.reset(); // Reset form\n          modal.hide(); // Hide modal\n        } else if (result.dismiss === \"cancel\") {\n          Swal.fire({\n            text: \"Your form has not been cancelled!.\",\n            icon: \"error\",\n            buttonsStyling: false,\n            confirmButtonText: \"Ok, got it!\",\n            customClass: {\n              confirmButton: \"btn btn-primary\",\n            },\n          });\n        }\n      });\n    });\n  };\n\n  return {\n    // Public functions\n    init: function () {\n      initForm();\n    },\n  };\n})();\n\n// On document ready\nKTUtil.onDOMContentLoaded(function () {\n  KTModalExportMarkupVisa.init();\n});\n\n\n//# sourceURL=webpack://besttripbd/../public/src/js/custom/apps/markup-management/visa/export.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["../public/src/js/custom/apps/markup-management/visa/export.js"]();
/******/ 	
/******/ })()
;