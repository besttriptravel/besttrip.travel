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

/***/ "../public/src/js/custom/apps/settings/site/policy.js":
/*!************************************************************!*\
  !*** ../public/src/js/custom/apps/settings/site/policy.js ***!
  \************************************************************/
/***/ (() => {

eval("\n\n// Class definition\nvar KTSettingsPolicy = (function () {\n    // Shared variables\n    const form = document.querySelector('#kt_settings_policy_form');\n    const editors = {};\n\n    if (!form) {\n        return;\n    }\n\n    // Init add schedule modal\n    var initSettingsPaymentAdd = () => {\n        // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/\n        var validator = FormValidation.formValidation(form, {\n            fields: {},\n\n            plugins: {\n                trigger: new FormValidation.plugins.Trigger(),\n                bootstrap: new FormValidation.plugins.Bootstrap5({\n                    rowSelector: '.fv-row',\n                    eleInvalidClass: '',\n                    eleValidClass: '',\n                }),\n            },\n        });\n\n        // Submit button handler\n        const submitButton = form.querySelector(\n            '[kt-settings-policy-form-action=\"submit\"]'\n        );\n        submitButton.addEventListener('click', (e) => {\n            e.preventDefault();\n\n            // Validate form before submit\n            if (validator) {\n                validator.validate().then(function (status) {\n                    if (status == 'Valid') {\n                        // Show loading indication\n                        submitButton.setAttribute('data-kt-indicator', 'on');\n\n                        // Disable button to avoid multiple click\n                        submitButton.disabled = true;\n\n                        // Check axios library docs: https://axios-http.com/docs/intro\n                        axios\n                            .post(\n                                submitButton\n                                    .closest('form')\n                                    .getAttribute('action'),\n                                {\n                                    'about-us':\n                                        editors.kt_docs_ckeditor_about_us.getData(),\n                                    'terms-and-conditions':\n                                        editors.kt_docs_ckeditor_toc.getData(),\n                                    'refund-policy':\n                                        editors.kt_docs_ckeditor_refund_policy.getData(),\n                                    'privacy-policy':\n                                        editors.kt_docs_ckeditor_privacy_policy.getData(),\n                                }\n                            )\n                            .then((response) => {\n                                if (response) {\n                                    // Reset form\n                                    form.reset();\n\n                                    // Show error popup. For more info check the plugin's official documentation: https://sweetalert2.github.io/\n                                    Swal.fire({\n                                        text:\n                                            response?.data?.message ||\n                                            'Policy settings updated successfully.',\n                                        icon: 'success',\n                                        buttonsStyling: false,\n                                        confirmButtonText: 'Ok, got it!',\n                                        customClass: {\n                                            confirmButton: 'btn btn-primary',\n                                        },\n                                        allowOutsideClick: false,\n                                    }).then((result) => {\n                                        if (result.isConfirmed) {\n                                            // Reload page to see changes\n                                            window.location.reload();\n                                        }\n                                    });\n                                } else {\n                                    // Show error popup. For more info check the plugin's official documentation: https://sweetalert2.github.io/\n                                    Swal.fire({\n                                        text:\n                                            response?.data?.message ||\n                                            'Sorry, something went wrong. Please try again.',\n                                        icon: 'error',\n                                        buttonsStyling: false,\n                                        confirmButtonText: 'Ok, got it!',\n                                        customClass: {\n                                            confirmButton: 'btn btn-primary',\n                                        },\n                                    });\n                                }\n                            })\n                            .catch((error) => {\n                                const errors = error.response?.data?.message\n                                    ? error.response?.data?.message\n                                    : error.response.data.errors;\n\n                                Swal.fire({\n                                    html: `${\n                                        errors instanceof Array\n                                            ? `<ul class=\"text-start\">${Object.values(\n                                                  error.response.data.errors\n                                              )\n                                                  .map(\n                                                      (err) =>\n                                                          `<li>${err?.message}</li>`\n                                                  )\n                                                  .join('')}</ul>`\n                                            : errors\n                                    }`,\n                                    icon: 'error',\n                                    buttonsStyling: false,\n                                    confirmButtonText: 'Ok, got it!',\n                                    customClass: {\n                                        confirmButton: 'btn btn-primary',\n                                    },\n                                });\n                            })\n                            .then(() => {\n                                // Hide loading indication\n                                submitButton.removeAttribute(\n                                    'data-kt-indicator'\n                                );\n\n                                // Enable button\n                                submitButton.disabled = false;\n                            });\n                    } else {\n                        // Show popup warning. For more info check the plugin's official documentation: https://sweetalert2.github.io/\n                        Swal.fire({\n                            text: 'Sorry, looks like there are some errors detected, please try again.',\n                            icon: 'error',\n                            buttonsStyling: false,\n                            confirmButtonText: 'Ok, got it!',\n                            customClass: {\n                                confirmButton: 'btn btn-primary',\n                            },\n                        });\n                    }\n                });\n            }\n        });\n    };\n\n    class CKEditorUploadAdapter {\n        constructor(loader) {\n            this.loader = loader;\n        }\n\n        // Starts the upload process.\n        upload() {\n            return this.loader.file.then(\n                (file) =>\n                    new Promise((resolve, reject) => {\n                        this._initRequest();\n                        this._initListeners(resolve, reject, file);\n                        this._sendRequest(file);\n                    })\n            );\n        }\n\n        // Aborts the upload process.\n        abort() {\n            if (this.xhr) {\n                this.xhr.abort();\n            }\n        }\n\n        // Initializes XMLHttpRequest.\n        _initRequest() {\n            this.xhr = new XMLHttpRequest();\n            this.xhr.open('POST', '/api/settings/site/policy/media', true);\n            this.xhr.responseType = 'json';\n        }\n\n        // Initializes listeners for XMLHttpRequest.\n        _initListeners(resolve, reject, file) {\n            const xhr = this.xhr;\n            const loader = this.loader;\n            const genericErrorText = `Couldn't upload file: ${file.name}.`;\n\n            xhr.addEventListener('error', () => reject(genericErrorText));\n            xhr.addEventListener('abort', () => reject());\n            xhr.addEventListener('load', () => {\n                const response = xhr.response;\n\n                if (!response || response.error) {\n                    return reject(\n                        response && response.error\n                            ? response.error.message\n                            : genericErrorText\n                    );\n                }\n\n                resolve({\n                    default: response.url,\n                });\n            });\n\n            if (xhr.upload) {\n                xhr.upload.addEventListener('progress', (evt) => {\n                    if (evt.lengthComputable) {\n                        loader.uploadTotal = evt.total;\n                        loader.uploaded = evt.loaded;\n                    }\n                });\n            }\n        }\n\n        // Sends the request.\n        _sendRequest(file) {\n            const data = new FormData();\n            data.append('upload', file);\n            this.xhr.send(data);\n        }\n    }\n\n    function CKEditorUploadAdapterPlugin(editor) {\n        editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {\n            return new CKEditorUploadAdapter(loader);\n        };\n    }\n\n    // CKEditors\n    const initCKEditors = () => {\n        const textareas = [\n            'kt_docs_ckeditor_about_us',\n            'kt_docs_ckeditor_toc',\n            'kt_docs_ckeditor_refund_policy',\n            'kt_docs_ckeditor_privacy_policy',\n        ];\n\n        textareas.forEach((id) => {\n            ClassicEditor.create(document.getElementById(id), {\n                extraPlugins: [CKEditorUploadAdapterPlugin],\n            })\n                .then((editor) => {\n                    editors[id] = editor;\n                })\n                .catch((error) => {\n                    console.error(error);\n                });\n        });\n    };\n\n    return {\n        // Public functions\n        init: function () {\n            initSettingsPaymentAdd();\n            initCKEditors();\n        },\n    };\n})();\n\n// On document ready\nKTUtil.onDOMContentLoaded(function () {\n    KTSettingsPolicy.init();\n});\n\n\n//# sourceURL=webpack://besttripbd/../public/src/js/custom/apps/settings/site/policy.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["../public/src/js/custom/apps/settings/site/policy.js"]();
/******/ 	
/******/ })()
;