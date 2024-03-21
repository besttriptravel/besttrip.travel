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

/***/ "../public/src/js/custom/apps/markup-management/visa/edit.js":
/*!*******************************************************************!*\
  !*** ../public/src/js/custom/apps/markup-management/visa/edit.js ***!
  \*******************************************************************/
/***/ (() => {

eval("\n\n// Class definition\nvar KTMarkupVisaEdit = (function () {\n  // Shared variables\n  const element = document.getElementById(\"kt_modal_edit_markup_visa\");\n  const form = element.querySelector(\"#kt_modal_edit_markup_visa_form\");\n  const modal = new bootstrap.Modal(element);\n\n  // Init add schedule modal\n  var initEditMarkup = () => {\n    // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/\n    var validator = FormValidation.formValidation(form, {\n      fields: {\n        supplier: {\n          validators: {\n            notEmpty: {\n              message: \"Supplier is required\",\n            },\n          },\n        },\n        package_type: {\n          validators: {\n            notEmpty: {\n              message: \"Package type is required\",\n            },\n          },\n        },\n        price_type: {\n          validators: {\n            notEmpty: {\n              message: \"Price type is required\",\n            },\n          },\n        },\n        markup: {\n          validators: {\n            notEmpty: {\n              message: \"Markup is required\",\n            },\n          },\n        },\n        status: {\n          validators: {\n            notEmpty: {\n              message: \"Status is required\",\n            },\n          },\n        },\n      },\n\n      plugins: {\n        trigger: new FormValidation.plugins.Trigger(),\n        bootstrap: new FormValidation.plugins.Bootstrap5({\n          rowSelector: \".fv-row\",\n          eleInvalidClass: \"\",\n          eleValidClass: \"\",\n        }),\n      },\n    });\n\n    // Submit button handler\n    const submitButton = element.querySelector(\n      '[data-kt-markup-visa-modal-action=\"submit\"]'\n    );\n    submitButton.addEventListener(\"click\", (e) => {\n      e.preventDefault();\n\n      // Validate form before submit\n      if (validator) {\n        validator.validate().then(function (status) {\n          console.log(\"validated!\");\n\n          if (status == \"Valid\") {\n            // Show loading indication\n            submitButton.setAttribute(\"data-kt-indicator\", \"on\");\n\n            // Disable button to avoid multiple click\n            submitButton.disabled = true;\n\n            // Simulate form submission. For more info check the plugin's official documentation: https://sweetalert2.github.io/\n            setTimeout(function () {\n              // Remove loading indication\n              submitButton.removeAttribute(\"data-kt-indicator\");\n\n              // Enable button\n              submitButton.disabled = false;\n\n              // Show popup confirmation\n              Swal.fire({\n                text: \"Form has been successfully submitted!\",\n                icon: \"success\",\n                buttonsStyling: false,\n                confirmButtonText: \"Ok, got it!\",\n                customClass: {\n                  confirmButton: \"btn btn-primary\",\n                },\n              }).then(function (result) {\n                if (result.isConfirmed) {\n                  modal.hide();\n                }\n              });\n\n              //form.submit(); // Submit form\n            }, 2000);\n          } else {\n            // Show popup warning. For more info check the plugin's official documentation: https://sweetalert2.github.io/\n            Swal.fire({\n              text: \"Sorry, looks like there are some errors detected, please try again.\",\n              icon: \"error\",\n              buttonsStyling: false,\n              confirmButtonText: \"Ok, got it!\",\n              customClass: {\n                confirmButton: \"btn btn-primary\",\n              },\n            });\n          }\n        });\n      }\n    });\n\n    // Cancel button handler\n    const cancelButton = element.querySelector(\n      '[data-kt-markup-visa-modal-action=\"cancel\"]'\n    );\n    cancelButton.addEventListener(\"click\", (e) => {\n      e.preventDefault();\n\n      Swal.fire({\n        text: \"Are you sure you would like to cancel?\",\n        icon: \"warning\",\n        showCancelButton: true,\n        buttonsStyling: false,\n        confirmButtonText: \"Yes, cancel it!\",\n        cancelButtonText: \"No, return\",\n        customClass: {\n          confirmButton: \"btn btn-primary\",\n          cancelButton: \"btn btn-active-light\",\n        },\n      }).then(function (result) {\n        if (result.value) {\n          form.reset(); // Reset form\n          modal.hide();\n        } else if (result.dismiss === \"cancel\") {\n          Swal.fire({\n            text: \"Your form has not been cancelled!.\",\n            icon: \"error\",\n            buttonsStyling: false,\n            confirmButtonText: \"Ok, got it!\",\n            customClass: {\n              confirmButton: \"btn btn-primary\",\n            },\n          });\n        }\n      });\n    });\n\n    // Close button handler\n    const closeButton = element.querySelector(\n      '[data-kt-markup-visa-modal-action=\"close\"]'\n    );\n    closeButton.addEventListener(\"click\", (e) => {\n      e.preventDefault();\n\n      Swal.fire({\n        text: \"Are you sure you would like to cancel?\",\n        icon: \"warning\",\n        showCancelButton: true,\n        buttonsStyling: false,\n        confirmButtonText: \"Yes, cancel it!\",\n        cancelButtonText: \"No, return\",\n        customClass: {\n          confirmButton: \"btn btn-primary\",\n          cancelButton: \"btn btn-active-light\",\n        },\n      }).then(function (result) {\n        if (result.value) {\n          form.reset(); // Reset form\n          modal.hide();\n        } else if (result.dismiss === \"cancel\") {\n          Swal.fire({\n            text: \"Your form has not been cancelled!.\",\n            icon: \"error\",\n            buttonsStyling: false,\n            confirmButtonText: \"Ok, got it!\",\n            customClass: {\n              confirmButton: \"btn btn-primary\",\n            },\n          });\n        }\n      });\n    });\n  };\n\n  return {\n    // Public functions\n    init: function () {\n      initEditMarkup();\n    },\n  };\n})();\n\n// On document ready\nKTUtil.onDOMContentLoaded(function () {\n  KTMarkupVisaEdit.init();\n});\n\n\n//# sourceURL=webpack://besttripbd/../public/src/js/custom/apps/markup-management/visa/edit.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["../public/src/js/custom/apps/markup-management/visa/edit.js"]();
/******/ 	
/******/ })()
;