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

/***/ "../public/src/js/custom/pages/general/contact.js":
/*!********************************************************!*\
  !*** ../public/src/js/custom/pages/general/contact.js ***!
  \********************************************************/
/***/ (() => {

eval("\n\n// Class definition\nvar KTContactApply = function () {\n\tvar submitButton;\n\tvar validator;\n\tvar form;\n\tvar selectedlocation;\n\n\t// Private functions\n    var initMap = function(elementId) {\n        // Check if Leaflet is included\n        if (!L) {\n            return;\n        }\n\n        // Define Map Location\n        var leaflet = L.map(elementId, {\n            center: [40.725, -73.985],\n            zoom: 30\n        });\n\n        // Init Leaflet Map. For more info check the plugin's documentation: https://leafletjs.com/\n        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {\n            attribution: '&copy; <a href=\"https://osm.org/copyright\">OpenStreetMap</a> contributors'\n        }).addTo(leaflet);\n\n        // Set Geocoding\n        var geocodeService;\n        if (typeof L.esri.Geocoding === 'undefined') {\n            geocodeService = L.esri.geocodeService();\n        } else {\n            geocodeService = L.esri.Geocoding.geocodeService();\n        }\n\n        // Define Marker Layer\n        var markerLayer = L.layerGroup().addTo(leaflet);\n\n        // Set Custom SVG icon marker\n        var leafletIcon = L.divIcon({\n            html: `<i class=\"ki-solid ki-geolocation text-primary fs-3x\"></span>`,\n            bgPos: [10, 10],\n            iconAnchor: [20, 37],\n            popupAnchor: [0, -37],\n            className: 'leaflet-marker'\n        });\n\n\t\t// Show current address\n\t\tL.marker([40.724716, -73.984789], { icon: leafletIcon }).addTo(markerLayer).bindPopup('430 E 6th St, New York, 10009.', { closeButton: false }).openPopup();\n\n        // Map onClick Action\n        leaflet.on('click', function (e) {\n            geocodeService.reverse().latlng(e.latlng).run(function (error, result) {\n                if (error) {\n                    return;\n                }\n                markerLayer.clearLayers();\n                selectedlocation = result.address.Match_addr;\n                L.marker(result.latlng, { icon: leafletIcon }).addTo(markerLayer).bindPopup(result.address.Match_addr, { closeButton: false }).openPopup();\n\n                // Show popup confirmation. For more info check the plugin's official documentation: https://sweetalert2.github.io/\n                Swal.fire({\n                    html: 'Your selected - <b>\"' + selectedlocation + ' - ' + result.latlng + '\"</b>.',\n                    icon: \"success\",\n                    buttonsStyling: false,\n                    confirmButtonText: \"Ok, got it!\",\n                    customClass: {\n                        confirmButton: \"btn btn-primary\"\n                    }\n                }).then(function (result) {\n                    // Confirmed\n                });\n            });\n        });\n    }\n\n\t// Init form inputs\n\tvar initForm = function() {\n\t\t// Team assign. For more info, plase visit the official plugin site: https://select2.org/\n        $(form.querySelector('[name=\"position\"]')).on('change', function() {\n            // Revalidate the field when an option is chosen\n            validator.revalidateField('position');\n        });\t\t\n\t}\n\n\t// Handle form validation and submittion\n\tvar handleForm = function() {\n\t\t// Stepper custom navigation\n\n\t\t// Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/\n\t\tvalidator = FormValidation.formValidation(\n\t\t\tform,\n\t\t\t{\n\t\t\t\tfields: {\n\t\t\t\t\t'name': {\n\t\t\t\t\t\tvalidators: {\n\t\t\t\t\t\t\tnotEmpty: {\n\t\t\t\t\t\t\t\tmessage: 'Name is required'\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t},\n\t\t\t\t\t'email': {\n                        validators: {\n\t\t\t\t\t\t\tnotEmpty: {\n\t\t\t\t\t\t\t\tmessage: 'Email address is required'\n\t\t\t\t\t\t\t},\n                            emailAddress: {\n\t\t\t\t\t\t\t\tmessage: 'The value is not a valid email address'\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t},\n\t\t\t\t\t'message': {\n                        validators: {\n\t\t\t\t\t\t\tnotEmpty: {\n\t\t\t\t\t\t\t\tmessage: 'Message is required'\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\t\t \n\t\t\t\t},\n\t\t\t\tplugins: {\n\t\t\t\t\ttrigger: new FormValidation.plugins.Trigger(),\n\t\t\t\t\tbootstrap: new FormValidation.plugins.Bootstrap5({\n\t\t\t\t\t\trowSelector: '.fv-row',\n                        eleInvalidClass: '',\n                        eleValidClass: ''\n\t\t\t\t\t})\n\t\t\t\t}\n\t\t\t}\n\t\t);\n\n\t\t// Action buttons\n\t\tsubmitButton.addEventListener('click', function (e) {\n\t\t\te.preventDefault();\n\n\t\t\t// Validate form before submit\n\t\t\tif (validator) {\n\t\t\t\tvalidator.validate().then(function (status) {\n\t\t\t\t\tconsole.log('validated!');\n\n\t\t\t\t\tif (status == 'Valid') {\n\t\t\t\t\t\tsubmitButton.setAttribute('data-kt-indicator', 'on');\n\n\t\t\t\t\t\t// Disable button to avoid multiple click \n\t\t\t\t\t\tsubmitButton.disabled = true;\n\n\t\t\t\t\t\tsetTimeout(function() {\n\t\t\t\t\t\t\tsubmitButton.removeAttribute('data-kt-indicator');\n\n\t\t\t\t\t\t\t// Enable button\n\t\t\t\t\t\t\tsubmitButton.disabled = false;\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\tSwal.fire({\n\t\t\t\t\t\t\t\ttext: \"Form has been successfully submitted!\",\n\t\t\t\t\t\t\t\ticon: \"success\",\n\t\t\t\t\t\t\t\tbuttonsStyling: false,\n\t\t\t\t\t\t\t\tconfirmButtonText: \"Ok, got it!\",\n\t\t\t\t\t\t\t\tcustomClass: {\n\t\t\t\t\t\t\t\t\tconfirmButton: \"btn btn-primary\"\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}).then(function (result) {\n\t\t\t\t\t\t\t\tif (result.isConfirmed) {\n\t\t\t\t\t\t\t\t\t//form.submit();\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t});\n\n\t\t\t\t\t\t\t//form.submit(); // Submit form\n\t\t\t\t\t\t}, 2000);   \t\t\t\t\t\t\n\t\t\t\t\t} else {\n\t\t\t\t\t\t// Scroll top\n\n\t\t\t\t\t\t// Show error popuo. For more info check the plugin's official documentation: https://sweetalert2.github.io/\n\t\t\t\t\t\tSwal.fire({\n\t\t\t\t\t\t\ttext: \"Sorry, looks like there are some errors detected, please try again.\",\n\t\t\t\t\t\t\ticon: \"error\",\n\t\t\t\t\t\t\tbuttonsStyling: false,\n\t\t\t\t\t\t\tconfirmButtonText: \"Ok, got it!\",\n\t\t\t\t\t\t\tcustomClass: {\n\t\t\t\t\t\t\t\tconfirmButton: \"btn btn-primary\"\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}).then(function (result) {\n\t\t\t\t\t\t\tKTUtil.scrollTop();\n\t\t\t\t\t\t});\n\t\t\t\t\t}\n\t\t\t\t});\n\t\t\t}\n\t\t});\n\t}\n\n\treturn {\n\t\t// Public functions\n\t\tinit: function () {\n\t\t\t// Elements\n\t\t\tform = document.querySelector('#kt_contact_form');\n\t\t\tsubmitButton = document.getElementById('kt_contact_submit_button');\n\n\t\t\tinitForm();\n\t\t\thandleForm();\n\t\t\tinitMap('kt_contact_map');\n\t\t}\n\t};\n}();\n\n// On document ready\nKTUtil.onDOMContentLoaded(function () {\n\tKTContactApply.init();\n});\n\n//# sourceURL=webpack://besttripbd/../public/src/js/custom/pages/general/contact.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["../public/src/js/custom/pages/general/contact.js"]();
/******/ 	
/******/ })()
;