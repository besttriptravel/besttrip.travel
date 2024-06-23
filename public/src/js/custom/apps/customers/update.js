"use strict";

// Class definition
var KTModalUpdateCustomer = (function () {
  var element;
  var submitButton;
  var cancelButton;
  var closeButton;
  var validator;
  var form;
  var modal;

  // Init form inputs
  var initForm = function () {
    // Init Datepicker --- For more info, please check Flatpickr's official documentation: https://flatpickr.js.org/
    $("#kt_customer_birth_datepicker").flatpickr();

    // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/
    validator = FormValidation.formValidation(form, {
      fields: {
        name: {
          validators: {
            notEmpty: {
              message: "Customer name is required",
            },
          },
        },
        email: {
          validators: {
            notEmpty: {
              message: "Customer email is required",
            },
            regexp: {
              regexp: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "The value is not a valid email address",
            },
          },
        },
        phone: {
          validators: {
            notEmpty: {
              message: "Customer phone is required",
            },
          },
        },
        birth_date: {
          validators: {
            notEmpty: {
              message: "Customer birth date is required",
            },
          },
        },
        // country: {
        //   validators: {
        //     notEmpty: {
        //       message: "Country is required",
        //     },
        //   },
        // },
        // address1: {
        //   validators: {
        //     notEmpty: {
        //       message: "Address 1 is required",
        //     },
        //   },
        // },
        // city: {
        //   validators: {
        //     notEmpty: {
        //       message: "City is required",
        //     },
        //   },
        // },
        // state: {
        //   validators: {
        //     notEmpty: {
        //       message: "State is required",
        //     },
        //   },
        // },
        // postcode: {
        //   validators: {
        //     notEmpty: {
        //       message: "Postcode is required",
        //     },
        //   },
        // },
      },
      plugins: {
        trigger: new FormValidation.plugins.Trigger(),
        bootstrap: new FormValidation.plugins.Bootstrap5({
          rowSelector: ".fv-row",
          eleInvalidClass: "",
          eleValidClass: "",
        }),
      },
    });

    // Action buttons
    submitButton.addEventListener("click", function (e) {
      // Prevent default button action
      e.preventDefault();

      // Validate form before submit
      if (validator) {
        validator.validate().then(function (status) {
          if (status == "Valid") {
            submitButton.setAttribute("data-kt-indicator", "on");

            // Disable submit button whilst loading
            submitButton.disabled = true;

            setTimeout(function () {
              submitButton.removeAttribute("data-kt-indicator");

              Swal.fire({
                text: "Form has been successfully submitted!",
                icon: "success",
                buttonsStyling: false,
                confirmButtonText: "Ok, got it!",
                customClass: {
                  confirmButton: "btn btn-primary",
                },
              }).then(function (result) {
                if (result.isConfirmed) {
                  // Hide modal
                  modal.hide();

                  // Enable submit button after loading
                  submitButton.disabled = false;

                  // Redirect to customers list page
                  window.location = form.getAttribute("data-kt-redirect");
                }
              });
            }, 2000);
          } else {
            Swal.fire({
              text: "Sorry, looks like there are some errors detected, please try again.",
              icon: "error",
              buttonsStyling: false,
              confirmButtonText: "Ok, got it!",
              customClass: {
                confirmButton: "btn btn-primary",
              },
            });
          }
        });
      }
    });

    cancelButton.addEventListener("click", function (e) {
      e.preventDefault();

      Swal.fire({
        text: "Are you sure you would like to cancel?",
        icon: "warning",
        showCancelButton: true,
        buttonsStyling: false,
        confirmButtonText: "Yes, cancel it!",
        cancelButtonText: "No, return",
        customClass: {
          confirmButton: "btn btn-primary",
          cancelButton: "btn btn-active-light",
        },
      }).then(function (result) {
        if (result.value) {
          form.reset(); // Reset form
          modal.hide(); // Hide modal
        } else if (result.dismiss === "cancel") {
          Swal.fire({
            text: "Your form has not been cancelled!.",
            icon: "error",
            buttonsStyling: false,
            confirmButtonText: "Ok, got it!",
            customClass: {
              confirmButton: "btn btn-primary",
            },
          });
        }
      });
    });

    closeButton.addEventListener("click", function (e) {
      e.preventDefault();

      Swal.fire({
        text: "Are you sure you would like to cancel?",
        icon: "warning",
        showCancelButton: true,
        buttonsStyling: false,
        confirmButtonText: "Yes, cancel it!",
        cancelButtonText: "No, return",
        customClass: {
          confirmButton: "btn btn-primary",
          cancelButton: "btn btn-active-light",
        },
      }).then(function (result) {
        if (result.value) {
          form.reset(); // Reset form
          modal.hide(); // Hide modal
        } else if (result.dismiss === "cancel") {
          Swal.fire({
            text: "Your form has not been cancelled!.",
            icon: "error",
            buttonsStyling: false,
            confirmButtonText: "Ok, got it!",
            customClass: {
              confirmButton: "btn btn-primary",
            },
          });
        }
      });
    });
  };

  return {
    // Public functions
    init: function () {
      // Elements
      element = document.querySelector("#kt_modal_update_customer");
      modal = new bootstrap.Modal(element);

      form = element.querySelector("#kt_modal_update_customer_form");
      submitButton = form.querySelector("#kt_modal_update_customer_submit");
      cancelButton = form.querySelector("#kt_modal_update_customer_cancel");
      closeButton = element.querySelector("#kt_modal_update_customer_close");

      initForm();
    },
  };
})();

// On document ready
KTUtil.onDOMContentLoaded(function () {
  KTModalUpdateCustomer.init();
});
