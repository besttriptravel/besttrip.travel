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

/***/ "../public/src/js/custom/apps/customers/add.js":
/*!*****************************************************!*\
  !*** ../public/src/js/custom/apps/customers/add.js ***!
  \*****************************************************/
/***/ (() => {

eval("\n\n// Class definition\nvar KTModalCustomersAdd = (function () {\n  var submitButton;\n  var cancelButton;\n  var closeButton;\n  var validator;\n  var form;\n  var modal;\n\n  // Init form inputs\n  var handleForm = function () {\n    // Init Datepicker --- For more info, please check Flatpickr's official documentation: https://flatpickr.js.org/\n    $(\"#kt_customer_birth_datepicker\").flatpickr();\n\n    // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/\n    validator = FormValidation.formValidation(form, {\n      fields: {\n        name: {\n          validators: {\n            notEmpty: {\n              message: \"Customer name is required\",\n            },\n          },\n        },\n        email: {\n          validators: {\n            notEmpty: {\n              message: \"Customer email is required\",\n            },\n          },\n        },\n        phone: {\n          validators: {\n            notEmpty: {\n              message: \"Customer phone is required\",\n            },\n          },\n        },\n        \"first-name\": {\n          validators: {\n            notEmpty: {\n              message: \"First name is required\",\n            },\n          },\n        },\n        \"last-name\": {\n          validators: {\n            notEmpty: {\n              message: \"Last name is required\",\n            },\n          },\n        },\n        // country: {\n        //   validators: {\n        //     notEmpty: {\n        //       message: \"Country is required\",\n        //     },\n        //   },\n        // },\n        // address1: {\n        //   validators: {\n        //     notEmpty: {\n        //       message: \"Address 1 is required\",\n        //     },\n        //   },\n        // },\n        // city: {\n        //   validators: {\n        //     notEmpty: {\n        //       message: \"City is required\",\n        //     },\n        //   },\n        // },\n        // state: {\n        //   validators: {\n        //     notEmpty: {\n        //       message: \"State is required\",\n        //     },\n        //   },\n        // },\n        // postcode: {\n        //   validators: {\n        //     notEmpty: {\n        //       message: \"Postcode is required\",\n        //     },\n        //   },\n        // },\n      },\n      plugins: {\n        trigger: new FormValidation.plugins.Trigger(),\n        bootstrap: new FormValidation.plugins.Bootstrap5({\n          rowSelector: \".fv-row\",\n          eleInvalidClass: \"\",\n          eleValidClass: \"\",\n        }),\n      },\n    });\n\n    // Revalidate country field. For more info, plase visit the official plugin site: https://select2.org/\n    $(form.querySelector('[name=\"country\"]')).on(\"change\", function () {\n      // Revalidate the field when an option is chosen\n      validator.revalidateField(\"country\");\n    });\n\n    // Action buttons\n    submitButton.addEventListener(\"click\", function (e) {\n      e.preventDefault();\n\n      // Validate form before submit\n      if (validator) {\n        validator.validate().then(function (status) {\n          console.log(\"validated!\");\n\n          if (status == \"Valid\") {\n            submitButton.setAttribute(\"data-kt-indicator\", \"on\");\n\n            // Disable submit button whilst loading\n            submitButton.disabled = true;\n\n            setTimeout(function () {\n              submitButton.removeAttribute(\"data-kt-indicator\");\n\n              Swal.fire({\n                text: \"Form has been successfully submitted!\",\n                icon: \"success\",\n                buttonsStyling: false,\n                confirmButtonText: \"Ok, got it!\",\n                customClass: {\n                  confirmButton: \"btn btn-primary\",\n                },\n              }).then(function (result) {\n                if (result.isConfirmed) {\n                  // Hide modal\n                  modal.hide();\n\n                  // Enable submit button after loading\n                  submitButton.disabled = false;\n\n                  // Redirect to customers list page\n                  window.location = form.getAttribute(\"data-kt-redirect\");\n                }\n              });\n            }, 2000);\n          } else {\n            Swal.fire({\n              text: \"Sorry, looks like there are some errors detected, please try again.\",\n              icon: \"error\",\n              buttonsStyling: false,\n              confirmButtonText: \"Ok, got it!\",\n              customClass: {\n                confirmButton: \"btn btn-primary\",\n              },\n            });\n          }\n        });\n      }\n    });\n\n    cancelButton.addEventListener(\"click\", function (e) {\n      e.preventDefault();\n\n      Swal.fire({\n        text: \"Are you sure you would like to cancel?\",\n        icon: \"warning\",\n        showCancelButton: true,\n        buttonsStyling: false,\n        confirmButtonText: \"Yes, cancel it!\",\n        cancelButtonText: \"No, return\",\n        customClass: {\n          confirmButton: \"btn btn-primary\",\n          cancelButton: \"btn btn-active-light\",\n        },\n      }).then(function (result) {\n        if (result.value) {\n          form.reset(); // Reset form\n          modal.hide(); // Hide modal\n        } else if (result.dismiss === \"cancel\") {\n          Swal.fire({\n            text: \"Your form has not been cancelled!.\",\n            icon: \"error\",\n            buttonsStyling: false,\n            confirmButtonText: \"Ok, got it!\",\n            customClass: {\n              confirmButton: \"btn btn-primary\",\n            },\n          });\n        }\n      });\n    });\n\n    closeButton.addEventListener(\"click\", function (e) {\n      e.preventDefault();\n\n      Swal.fire({\n        text: \"Are you sure you would like to cancel?\",\n        icon: \"warning\",\n        showCancelButton: true,\n        buttonsStyling: false,\n        confirmButtonText: \"Yes, cancel it!\",\n        cancelButtonText: \"No, return\",\n        customClass: {\n          confirmButton: \"btn btn-primary\",\n          cancelButton: \"btn btn-active-light\",\n        },\n      }).then(function (result) {\n        if (result.value) {\n          form.reset(); // Reset form\n          modal.hide(); // Hide modal\n        } else if (result.dismiss === \"cancel\") {\n          Swal.fire({\n            text: \"Your form has not been cancelled!.\",\n            icon: \"error\",\n            buttonsStyling: false,\n            confirmButtonText: \"Ok, got it!\",\n            customClass: {\n              confirmButton: \"btn btn-primary\",\n            },\n          });\n        }\n      });\n    });\n  };\n\n  return {\n    // Public functions\n    init: function () {\n      // Elements\n      modal = new bootstrap.Modal(\n        document.querySelector(\"#kt_modal_add_customer\")\n      );\n\n      form = document.querySelector(\"#kt_modal_add_customer_form\");\n      submitButton = form.querySelector(\"#kt_modal_add_customer_submit\");\n      cancelButton = form.querySelector(\"#kt_modal_add_customer_cancel\");\n      closeButton = form.querySelector(\"#kt_modal_add_customer_close\");\n\n      handleForm();\n    },\n  };\n})();\n\n// On document ready\nKTUtil.onDOMContentLoaded(function () {\n  KTModalCustomersAdd.init();\n});\n\n\n//# sourceURL=webpack://besttripbd/../public/src/js/custom/apps/customers/add.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["../public/src/js/custom/apps/customers/add.js"]();
/******/ 	
/******/ })()
;