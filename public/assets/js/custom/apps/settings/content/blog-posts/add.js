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

/***/ "../public/src/js/custom/apps/settings/content/blog-posts/add.js":
/*!***********************************************************************!*\
  !*** ../public/src/js/custom/apps/settings/content/blog-posts/add.js ***!
  \***********************************************************************/
/***/ (() => {

eval("\n\n// Class definition\nvar KTContentBlogPostAdd = (function () {\n  // Shared variables\n  const element = document.getElementById(\"kt_modal_add_content_blog_posts\");\n  const form = element.querySelector(\"#kt_modal_add_content_blog_posts_form\");\n  const modal = new bootstrap.Modal(element);\n  var ktFileUploaderContent;\n\n  // Init add schedule modal\n  var initAddContentExclusiveOffer = () => {\n    // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/\n    var validator = FormValidation.formValidation(form, {\n      fields: {\n        thumbnail: {\n          validators: {\n            notEmpty: {\n              message: \"Thumbnail is required\",\n            },\n          },\n        },\n        title: {\n          validators: {\n            notEmpty: {\n              message: \"Title is required\",\n            },\n          },\n        },\n        subtitle: {\n          validators: {\n            notEmpty: {\n              message: \"Subtitle is required\",\n            },\n          },\n        },\n        location: {\n          validators: {\n            notEmpty: {\n              message: \"Location is required\",\n            },\n          },\n        },\n        rating: {\n          validators: {\n            notEmpty: {\n              message: \"Rating is required\",\n            },\n          },\n        },\n        description: {\n          validators: {\n            notEmpty: {\n              message: \"Description is required\",\n            },\n          },\n        },\n        domestic_airlines: {\n          validators: {\n            notEmpty: {\n              message: \"Domestic Airlines is required\",\n            },\n          },\n        },\n        nearest_airport: {\n          validators: {\n            notEmpty: {\n              message: \"Nearest Airport is required\",\n            },\n          },\n        },\n        status: {\n          validators: {\n            notEmpty: {\n              message: \"Status is required\",\n            },\n          },\n        },\n      },\n\n      plugins: {\n        trigger: new FormValidation.plugins.Trigger(),\n        bootstrap: new FormValidation.plugins.Bootstrap5({\n          rowSelector: \".fv-row\",\n          eleInvalidClass: \"\",\n          eleValidClass: \"\",\n        }),\n      },\n    });\n\n    // Submit button handler\n    const submitButton = element.querySelector(\n      '[data-kt-add-content-blog-post-modal-action=\"submit\"]'\n    );\n    submitButton.addEventListener(\"click\", (e) => {\n      e.preventDefault();\n\n      // Validate form before submit\n      if (validator) {\n        validator.validate().then(function (status) {\n          console.log(\"validated!\");\n\n          if (status == \"Valid\") {\n            // Show loading indication\n            submitButton.setAttribute(\"data-kt-indicator\", \"on\");\n\n            // Disable button to avoid multiple click\n            submitButton.disabled = true;\n\n            // Simulate form submission. For more info check the plugin's official documentation: https://sweetalert2.github.io/\n            setTimeout(function () {\n              // Remove loading indication\n              submitButton.removeAttribute(\"data-kt-indicator\");\n\n              // Enable button\n              submitButton.disabled = false;\n\n              // Show popup confirmation\n              Swal.fire({\n                text: \"Form has been successfully submitted!\",\n                icon: \"success\",\n                buttonsStyling: false,\n                confirmButtonText: \"Ok, got it!\",\n                customClass: {\n                  confirmButton: \"btn btn-primary\",\n                },\n              }).then(function (result) {\n                if (result.isConfirmed) {\n                  modal.hide();\n                }\n              });\n\n              //form.submit(); // Submit form\n            }, 2000);\n          } else {\n            // Show popup warning. For more info check the plugin's official documentation: https://sweetalert2.github.io/\n            Swal.fire({\n              text: \"Sorry, looks like there are some errors detected, please try again.\",\n              icon: \"error\",\n              buttonsStyling: false,\n              confirmButtonText: \"Ok, got it!\",\n              customClass: {\n                confirmButton: \"btn btn-primary\",\n              },\n            });\n          }\n        });\n      }\n    });\n\n    // Cancel button handler\n    const cancelButton = element.querySelector(\n      '[data-kt-add-content-blog-post-modal-action=\"cancel\"]'\n    );\n    cancelButton.addEventListener(\"click\", (e) => {\n      e.preventDefault();\n\n      Swal.fire({\n        text: \"Are you sure you would like to cancel?\",\n        icon: \"warning\",\n        showCancelButton: true,\n        buttonsStyling: false,\n        confirmButtonText: \"Yes, cancel it!\",\n        cancelButtonText: \"No, return\",\n        customClass: {\n          confirmButton: \"btn btn-primary\",\n          cancelButton: \"btn btn-active-light\",\n        },\n      }).then(function (result) {\n        if (result.value) {\n          form.reset(); // Reset form\n          modal.hide();\n        } else if (result.dismiss === \"cancel\") {\n          Swal.fire({\n            text: \"Your form has not been cancelled!.\",\n            icon: \"error\",\n            buttonsStyling: false,\n            confirmButtonText: \"Ok, got it!\",\n            customClass: {\n              confirmButton: \"btn btn-primary\",\n            },\n          });\n        }\n      });\n    });\n\n    // Close button handler\n    const closeButton = element.querySelector(\n      '[data-kt-add-content-blog-post-modal-action=\"close\"]'\n    );\n    closeButton.addEventListener(\"click\", (e) => {\n      e.preventDefault();\n\n      Swal.fire({\n        text: \"Are you sure you would like to cancel?\",\n        icon: \"warning\",\n        showCancelButton: true,\n        buttonsStyling: false,\n        confirmButtonText: \"Yes, cancel it!\",\n        cancelButtonText: \"No, return\",\n        customClass: {\n          confirmButton: \"btn btn-primary\",\n          cancelButton: \"btn btn-active-light\",\n        },\n      }).then(function (result) {\n        if (result.value) {\n          form.reset(); // Reset form\n          modal.hide();\n        } else if (result.dismiss === \"cancel\") {\n          Swal.fire({\n            text: \"Your form has not been cancelled!.\",\n            icon: \"error\",\n            buttonsStyling: false,\n            confirmButtonText: \"Ok, got it!\",\n            customClass: {\n              confirmButton: \"btn btn-primary\",\n            },\n          });\n        }\n      });\n    });\n  };\n\n  // Init File Uploader\n  const initFileUploader = () => {\n    const handleFileInputChange = (input) => {\n      const previewContainer = input.closest(\".kt-file-uploader\");\n      const label = previewContainer.querySelector(\".kt-file-uploader-label\");\n      const maxFileSize = parseInt(\n        input.getAttribute(\"data-kt-file-uploader-max-size\")\n      );\n      const invalidMessage =\n        previewContainer.querySelector(\".invalid-feedback\");\n      const file = input.files[0];\n\n      if (!file) {\n        return;\n      }\n\n      // remove error message\n      invalidMessage.classList.add(\"d-none\");\n\n      // create preview element and append to the container\n      const preview = document.createElement(\"img\");\n\n      if (file?.size > 1024 * 1024 * maxFileSize) {\n        const message = `File size should not exceed ${maxFileSize}MB`;\n\n        if (ktFileUploaderContent) {\n          // restore label content\n          label.innerHTML = ktFileUploaderContent;\n        }\n\n        // empty input value\n        input.value = \"\";\n\n        // append error message\n        invalidMessage.innerHTML = message;\n        invalidMessage.classList.remove(\"d-none\");\n        return;\n      }\n\n      // add was-invalid class to the container\n      if (!previewContainer.classList.contains(\"was-invalided\")) {\n        ktFileUploaderContent = label.innerHTML;\n        previewContainer.classList.add(\"was-invalided\");\n      }\n\n      // remove content and append preview\n      label.innerHTML = \"\";\n      preview.classList.add(\"kt-file-uploader-preview\");\n      preview.src = URL.createObjectURL(file);\n      preview.alt = file.name;\n      label.appendChild(preview);\n    };\n\n    form.addEventListener(\"change\", function (event) {\n      const target = event.target;\n\n      // Check if the changed element is an input with type file\n      if (target.tagName === \"INPUT\" && target.type === \"file\") {\n        handleFileInputChange(target);\n      }\n    });\n  };\n\n  return {\n    // Public functions\n    init: function () {\n      initAddContentExclusiveOffer();\n      initFileUploader();\n    },\n  };\n})();\n\n// On document ready\nKTUtil.onDOMContentLoaded(function () {\n  KTContentBlogPostAdd.init();\n});\n\n\n//# sourceURL=webpack://besttripbd/../public/src/js/custom/apps/settings/content/blog-posts/add.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["../public/src/js/custom/apps/settings/content/blog-posts/add.js"]();
/******/ 	
/******/ })()
;