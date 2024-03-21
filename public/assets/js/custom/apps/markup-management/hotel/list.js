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

/***/ "../public/src/js/custom/apps/markup-management/hotel/list.js":
/*!********************************************************************!*\
  !*** ../public/src/js/custom/apps/markup-management/hotel/list.js ***!
  \********************************************************************/
/***/ (() => {

eval("\n\nvar KTMarkupHotelList = (function () {\n  // Define shared variables\n  var table;\n  var datatable;\n  var toolbarBase;\n  var toolbarSelected;\n  var selectedCount;\n\n  // Private functions\n  var initDatatable = function () {\n    // Set date data order\n    const tableRows = table.querySelectorAll(\"tbody tr\");\n\n    tableRows.forEach((row) => {\n      const dateRow = row.querySelectorAll(\"td\");\n      const realDate = moment(dateRow[5].innerHTML, \"DD MMM YYYY, LT\").format(); // select date from 4th column in table\n      dateRow[5].setAttribute(\"data-order\", realDate);\n    });\n\n    // Init datatable --- more info on datatables: https://datatables.net/manual/\n    datatable = $(table).DataTable({\n      info: false,\n      order: [],\n      pageLength: 10,\n      // lengthChange: false,\n      columnDefs: [\n        { orderable: false, targets: 0 }, // Disable ordering on column 0 (checkbox)\n        { orderable: false, targets: 8 }, // Disable ordering on column 8 (actions)\n      ],\n    });\n\n    // Re-init functions on every table re-draw -- more info: https://datatables.net/reference/event/draw\n    datatable.on(\"draw\", function () {\n      initToggleToolbar();\n      handleRowDeletion();\n      toggleToolbars();\n    });\n  };\n\n  // Search Datatable --- official docs reference: https://datatables.net/reference/api/search()\n  var handleSearch = function () {\n    const filterSearch = document.querySelector(\n      '[data-kt-markup-hotel-table-filter=\"search\"]'\n    );\n    filterSearch.addEventListener(\"keyup\", function (e) {\n      datatable.search(e.target.value).draw();\n    });\n  };\n\n  // Filter Datatable\n  var handleFilter = function () {\n    // Select filter options\n    const filterForm = document.querySelector(\n      '[data-kt-markup-hotel-table-filter=\"form\"]'\n    );\n    const filterButton = filterForm.querySelector(\n      '[data-kt-markup-hotel-table-filter=\"filter\"]'\n    );\n    const resetButton = filterForm.querySelector(\n      '[data-kt-markup-hotel-table-filter=\"reset\"]'\n    );\n    const selectOptions = filterForm.querySelectorAll(\"select\");\n\n    // Filter datatable on submit\n    filterButton.addEventListener(\"click\", function () {\n      var filterString = \"\";\n\n      // Get filter values\n      selectOptions.forEach((item, index) => {\n        if (item.value && item.value !== \"\") {\n          if (index !== 0) {\n            filterString += \" \";\n          }\n\n          // Build filter value options\n          filterString += item.value;\n        }\n      });\n\n      // Filter datatable --- official docs reference: https://datatables.net/reference/api/search()\n      datatable.search(filterString).draw();\n    });\n\n    // Reset datatable\n    resetButton.addEventListener(\"click\", function () {\n      // Reset filter form\n      selectOptions.forEach((item, index) => {\n        // Reset Select2 dropdown --- official docs reference: https://select2.org/programmatic-control/add-select-clear-items\n        $(item).val(null).trigger(\"change\");\n      });\n\n      // Filter datatable --- official docs reference: https://datatables.net/reference/api/search()\n      datatable.search(\"\").draw();\n    });\n  };\n\n  // Delete subscirption\n  var handleRowDeletion = function () {\n    // Select all delete buttons\n    const deleteButtons = table.querySelectorAll(\n      '[data-kt-markup-hotel-table-filter=\"delete_row\"]'\n    );\n\n    deleteButtons.forEach((d) => {\n      // Delete button on click\n      d.addEventListener(\"click\", function (e) {\n        e.preventDefault();\n\n        // Select parent row\n        const parent = e.target.closest(\"tr\");\n\n        // Get customer name\n        const customerName = parent.querySelectorAll(\"td\")[1].innerText;\n\n        // SweetAlert2 pop up --- official docs reference: https://sweetalert2.github.io/\n        Swal.fire({\n          text: \"Are you sure you want to delete \" + customerName + \"?\",\n          icon: \"warning\",\n          showCancelButton: true,\n          buttonsStyling: false,\n          confirmButtonText: \"Yes, delete!\",\n          cancelButtonText: \"No, cancel\",\n          customClass: {\n            confirmButton: \"btn fw-bold btn-danger\",\n            cancelButton: \"btn fw-bold btn-active-light-primary\",\n          },\n        }).then(function (result) {\n          if (result.value) {\n            Swal.fire({\n              text: \"You have deleted \" + customerName + \"!.\",\n              icon: \"success\",\n              buttonsStyling: false,\n              confirmButtonText: \"Ok, got it!\",\n              customClass: {\n                confirmButton: \"btn fw-bold btn-primary\",\n              },\n            })\n              .then(function () {\n                // Remove current row\n                datatable.row($(parent)).remove().draw();\n              })\n              .then(function () {\n                // Detect checked checkboxes\n                toggleToolbars();\n              });\n          } else if (result.dismiss === \"cancel\") {\n            Swal.fire({\n              text: customerName + \" was not deleted.\",\n              icon: \"error\",\n              buttonsStyling: false,\n              confirmButtonText: \"Ok, got it!\",\n              customClass: {\n                confirmButton: \"btn fw-bold btn-primary\",\n              },\n            });\n          }\n        });\n      });\n    });\n  };\n\n  // Init toggle toolbar\n  var initToggleToolbar = () => {\n    // Toggle selected action toolbar\n    // Select all checkboxes\n    const checkboxes = table.querySelectorAll(\n      '.form-check-input-toggle[type=\"checkbox\"]'\n    );\n\n    // Select elements\n    toolbarBase = document.querySelector(\n      '[data-kt-markup-hotel-table-toolbar=\"base\"]'\n    );\n    toolbarSelected = document.querySelector(\n      '[data-kt-markup-hotel-table-toolbar=\"selected\"]'\n    );\n    selectedCount = document.querySelector(\n      '[data-kt-markup-hotel-table-select=\"selected_count\"]'\n    );\n    const deleteSelected = document.querySelector(\n      '[data-kt-markup-hotel-table-select=\"delete_selected\"]'\n    );\n\n    // Toggle delete selected toolbar\n    checkboxes.forEach((c) => {\n      // Checkbox on click event\n      c.addEventListener(\"click\", function () {\n        setTimeout(function () {\n          toggleToolbars();\n        }, 50);\n      });\n    });\n\n    // Deleted selected rows\n    deleteSelected.addEventListener(\"click\", function () {\n      // SweetAlert2 pop up --- official docs reference: https://sweetalert2.github.io/\n      Swal.fire({\n        text: \"Are you sure you want to delete selected customers?\",\n        icon: \"warning\",\n        showCancelButton: true,\n        buttonsStyling: false,\n        confirmButtonText: \"Yes, delete!\",\n        cancelButtonText: \"No, cancel\",\n        customClass: {\n          confirmButton: \"btn fw-bold btn-danger\",\n          cancelButton: \"btn fw-bold btn-active-light-primary\",\n        },\n      }).then(function (result) {\n        if (result.value) {\n          Swal.fire({\n            text: \"You have deleted all selected customers!.\",\n            icon: \"success\",\n            buttonsStyling: false,\n            confirmButtonText: \"Ok, got it!\",\n            customClass: {\n              confirmButton: \"btn fw-bold btn-primary\",\n            },\n          })\n            .then(function () {\n              // Remove all selected customers\n              checkboxes.forEach((c) => {\n                if (c.checked) {\n                  datatable\n                    .row($(c.closest(\"tbody tr\")))\n                    .remove()\n                    .draw();\n                }\n              });\n\n              // Remove header checked box\n              const headerCheckbox = table.querySelectorAll(\n                '.form-check-input-toggle[type=\"checkbox\"]'\n              )[0];\n              headerCheckbox.checked = false;\n            })\n            .then(function () {\n              toggleToolbars(); // Detect checked checkboxes\n              initToggleToolbar(); // Re-init toolbar to recalculate checkboxes\n            });\n        } else if (result.dismiss === \"cancel\") {\n          Swal.fire({\n            text: \"Selected customers was not deleted.\",\n            icon: \"error\",\n            buttonsStyling: false,\n            confirmButtonText: \"Ok, got it!\",\n            customClass: {\n              confirmButton: \"btn fw-bold btn-primary\",\n            },\n          });\n        }\n      });\n    });\n  };\n\n  // Toggle toolbars\n  const toggleToolbars = () => {\n    // Select refreshed checkbox DOM elements\n    const allCheckboxes = table.querySelectorAll(\n      'tbody .form-check-input-toggle[type=\"checkbox\"]'\n    );\n\n    // Detect checkboxes state & count\n    let checkedState = false;\n    let count = 0;\n\n    // Count checked boxes\n    allCheckboxes.forEach((c) => {\n      if (c.checked) {\n        checkedState = true;\n        count++;\n      }\n    });\n\n    // Toggle toolbars\n    if (checkedState) {\n      selectedCount.innerHTML = count;\n      toolbarBase.classList.add(\"d-none\");\n      toolbarSelected.classList.remove(\"d-none\");\n    } else {\n      toolbarBase.classList.remove(\"d-none\");\n      toolbarSelected.classList.add(\"d-none\");\n    }\n  };\n\n  return {\n    // Public functions\n    init: function () {\n      table = document.getElementById(\"kt_markup_hotel_table\");\n\n      if (!table) {\n        return;\n      }\n\n      initDatatable();\n      initToggleToolbar();\n      handleSearch();\n      handleRowDeletion();\n      handleFilter();\n    },\n  };\n})();\n\n// On document ready\nKTUtil.onDOMContentLoaded(function () {\n  KTMarkupHotelList.init();\n});\n\n\n//# sourceURL=webpack://besttripbd/../public/src/js/custom/apps/markup-management/hotel/list.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["../public/src/js/custom/apps/markup-management/hotel/list.js"]();
/******/ 	
/******/ })()
;