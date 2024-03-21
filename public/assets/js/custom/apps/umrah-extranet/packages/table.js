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

/***/ "../public/src/js/custom/apps/umrah-extranet/packages/table.js":
/*!*********************************************************************!*\
  !*** ../public/src/js/custom/apps/umrah-extranet/packages/table.js ***!
  \*********************************************************************/
/***/ (() => {

eval("\n\nvar KTUmrahExtranetPackageList = (function () {\n  // Define shared variables\n  var table;\n  var datatable;\n  var toolbarBase;\n  var toolbarSelected;\n  var selectedCount;\n\n  // Private functions\n  var initDatatable = function () {\n    // Set date data order\n    const tableRows = table.querySelectorAll(\"tbody tr\");\n\n    // Init datatable --- more info on datatables: https://datatables.net/manual/\n    datatable = $(table).DataTable({\n      info: false,\n      order: [],\n      pageLength: 10,\n      // lengthChange: false,\n      columnDefs: [\n        { orderable: false, targets: 0 }, // Disable ordering on column 0 (checkbox)\n        { orderable: false, targets: 14 }, // Disable ordering on column 14 (actions)\n      ],\n    });\n\n    // Re-init functions on every table re-draw -- more info: https://datatables.net/reference/event/draw\n    datatable.on(\"draw\", function () {\n      initToggleToolbar();\n      handleRowDeletion();\n      toggleToolbars();\n    });\n  };\n\n  // Search Datatable --- official docs reference: https://datatables.net/reference/api/search()\n  var handleSearch = function () {\n    const filterSearch = document.querySelector(\n      '[data-kt-umrah-extranet-package-list-table-filter=\"search\"]'\n    );\n    filterSearch.addEventListener(\"keyup\", function (e) {\n      datatable.search(e.target.value).draw();\n    });\n  };\n\n  // Filter Datatable\n  var handleFilterDatatable = () => {\n    // Select filter options\n    const filterForm = document.querySelector(\n      '[data-kt-umrah-extranet-package-list-table-filter=\"form\"]'\n    );\n    const filterButton = filterForm.querySelector(\n      '[data-kt-umrah-extranet-package-list-table-filter=\"filter\"]'\n    );\n    const selectOptions = filterForm.querySelectorAll(\"select\");\n\n    // Filter datatable on submit\n    filterButton.addEventListener(\"click\", function () {\n      var filterString = \"\";\n\n      // Get filter values\n      selectOptions.forEach((item, index) => {\n        if (item.value && item.value !== \"\") {\n          if (index !== 0) {\n            filterString += \" \";\n          }\n\n          // Build filter value options\n          filterString += item.value;\n        }\n      });\n\n      // Filter datatable --- official docs reference: https://datatables.net/reference/api/search()\n      datatable.search(filterString).draw();\n    });\n  };\n\n  // Reset Filter\n  var handleFilterResetForm = () => {\n    // Select reset button\n    const resetButton = document.querySelector(\n      '[data-kt-umrah-extranet-package-list-table-filter=\"reset\"]'\n    );\n\n    // Reset datatable\n    resetButton.addEventListener(\"click\", function () {\n      // Select filter options\n      const filterForm = document.querySelector(\n        '[data-kt-umrah-extranet-package-list-table-filter=\"form\"]'\n      );\n      const selectOptions = filterForm.querySelectorAll(\"select\");\n\n      // Reset select2 values -- more info: https://select2.org/programmatic-control/add-select-clear-items\n      selectOptions.forEach((select) => {\n        $(select).val(\"\").trigger(\"change\");\n      });\n\n      // Reset datatable --- official docs reference: https://datatables.net/reference/api/search()\n      datatable.search(\"\").draw();\n    });\n  };\n\n  // Delete package\n  var handleRowDeletion = function () {\n    // Select all delete buttons\n    const deleteButtons = table.querySelectorAll(\n      '[data-kt-umrah-extranet-package-list-table-filter=\"delete_row\"]'\n    );\n\n    deleteButtons.forEach((d) => {\n      // Delete button on click\n      d.addEventListener(\"click\", function (e) {\n        e.preventDefault();\n\n        // Select parent row\n        const parent = e.target.closest(\"tr\");\n\n        // Get package name\n        const packageName = parent.querySelectorAll(\"td\")[1].innerText;\n\n        // SweetAlert2 pop up --- official docs reference: https://sweetalert2.github.io/\n        Swal.fire({\n          text: \"Are you sure you want to delete \" + packageName + \"?\",\n          icon: \"warning\",\n          showCancelButton: true,\n          buttonsStyling: false,\n          confirmButtonText: \"Yes, delete!\",\n          cancelButtonText: \"No, cancel\",\n          customClass: {\n            confirmButton: \"btn fw-bold btn-danger\",\n            cancelButton: \"btn fw-bold btn-active-light-primary\",\n          },\n        }).then(function (result) {\n          if (result.value) {\n            Swal.fire({\n              text: \"You have deleted \" + packageName + \"!.\",\n              icon: \"success\",\n              buttonsStyling: false,\n              confirmButtonText: \"Ok, got it!\",\n              customClass: {\n                confirmButton: \"btn fw-bold btn-primary\",\n              },\n            })\n              .then(function () {\n                // Remove current row\n                datatable.row($(parent)).remove().draw();\n              })\n              .then(function () {\n                // Detect checked checkboxes\n                toggleToolbars();\n              });\n          } else if (result.dismiss === \"cancel\") {\n            Swal.fire({\n              text: packageName + \" was not deleted.\",\n              icon: \"error\",\n              buttonsStyling: false,\n              confirmButtonText: \"Ok, got it!\",\n              customClass: {\n                confirmButton: \"btn fw-bold btn-primary\",\n              },\n            });\n          }\n        });\n      });\n    });\n  };\n\n  // Init toggle toolbar\n  var initToggleToolbar = () => {\n    // Toggle selected action toolbar\n    // Select all checkboxes\n    const checkboxes = table.querySelectorAll('[type=\"checkbox\"]');\n\n    // Select elements\n    toolbarBase = document.querySelector(\n      '[data-kt-umrah-extranet-package-list-table-toolbar=\"base\"]'\n    );\n    toolbarSelected = document.querySelector(\n      '[data-kt-umrah-extranet-package-list-table-toolbar=\"selected\"]'\n    );\n    selectedCount = document.querySelector(\n      '[data-kt-umrah-extranet-package-list-table-select=\"selected_count\"]'\n    );\n    const deleteSelected = document.querySelector(\n      '[data-kt-umrah-extranet-package-list-table-select=\"delete_selected\"]'\n    );\n\n    // Toggle delete selected toolbar\n    checkboxes.forEach((c) => {\n      // Checkbox on click event\n      c.addEventListener(\"click\", function () {\n        setTimeout(function () {\n          toggleToolbars();\n        }, 50);\n      });\n    });\n\n    // Deleted selected rows\n    deleteSelected.addEventListener(\"click\", function () {\n      // SweetAlert2 pop up --- official docs reference: https://sweetalert2.github.io/\n      Swal.fire({\n        text: \"Are you sure you want to delete selected packages?\",\n        icon: \"warning\",\n        showCancelButton: true,\n        buttonsStyling: false,\n        confirmButtonText: \"Yes, delete!\",\n        cancelButtonText: \"No, cancel\",\n        customClass: {\n          confirmButton: \"btn fw-bold btn-danger\",\n          cancelButton: \"btn fw-bold btn-active-light-primary\",\n        },\n      }).then(function (result) {\n        if (result.value) {\n          Swal.fire({\n            text: \"You have deleted all selected packages!.\",\n            icon: \"success\",\n            buttonsStyling: false,\n            confirmButtonText: \"Ok, got it!\",\n            customClass: {\n              confirmButton: \"btn fw-bold btn-primary\",\n            },\n          })\n            .then(function () {\n              // Remove all selected packages\n              checkboxes.forEach((c) => {\n                if (c.checked) {\n                  datatable\n                    .row($(c.closest(\"tbody tr\")))\n                    .remove()\n                    .draw();\n                }\n              });\n\n              // Remove header checked box\n              const headerCheckbox =\n                table.querySelectorAll('[type=\"checkbox\"]')[0];\n              headerCheckbox.checked = false;\n            })\n            .then(function () {\n              toggleToolbars(); // Detect checked checkboxes\n              initToggleToolbar(); // Re-init toolbar to recalculate checkboxes\n            });\n        } else if (result.dismiss === \"cancel\") {\n          Swal.fire({\n            text: \"Selected packages was not deleted.\",\n            icon: \"error\",\n            buttonsStyling: false,\n            confirmButtonText: \"Ok, got it!\",\n            customClass: {\n              confirmButton: \"btn fw-bold btn-primary\",\n            },\n          });\n        }\n      });\n    });\n  };\n\n  // Toggle toolbars\n  const toggleToolbars = () => {\n    // Select refreshed checkbox DOM elements\n    const allCheckboxes = table.querySelectorAll('tbody [type=\"checkbox\"]');\n\n    // Detect checkboxes state & count\n    let checkedState = false;\n    let count = 0;\n\n    // Count checked boxes\n    allCheckboxes.forEach((c) => {\n      if (c.checked) {\n        checkedState = true;\n        count++;\n      }\n    });\n\n    // Toggle toolbars\n    if (checkedState) {\n      selectedCount.innerHTML = count;\n      toolbarBase.classList.add(\"d-none\");\n      toolbarSelected.classList.remove(\"d-none\");\n    } else {\n      toolbarBase.classList.remove(\"d-none\");\n      toolbarSelected.classList.add(\"d-none\");\n    }\n  };\n\n  // Init flatpickr\n  const initFlatPickr = function () {\n    // Handle datepicker range -- For more info on flatpickr plugin, please visit: https://flatpickr.js.org/\n    $(\n      '[data-kt-umrah-extranet-package-list-table-filter][name=\"date\"]'\n    ).flatpickr({\n      altInput: true,\n      altFormat: \"F j, Y\",\n      dateFormat: \"Y-m-d\",\n      mode: \"range\",\n    });\n  };\n\n  return {\n    // Public functions\n    init: function () {\n      table = document.getElementById(\"kt_umrah_extranet_package_list_table\");\n\n      if (!table) {\n        return;\n      }\n\n      initDatatable();\n      initToggleToolbar();\n      handleSearch();\n      handleFilterDatatable();\n      handleRowDeletion();\n      toggleToolbars();\n      initFlatPickr();\n      handleFilterResetForm();\n    },\n  };\n})();\n\n// On document ready\nKTUtil.onDOMContentLoaded(function () {\n  KTUmrahExtranetPackageList.init();\n});\n\n\n//# sourceURL=webpack://besttripbd/../public/src/js/custom/apps/umrah-extranet/packages/table.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["../public/src/js/custom/apps/umrah-extranet/packages/table.js"]();
/******/ 	
/******/ })()
;