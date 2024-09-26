import { validateFieldTextArea } from "./validateFieldTextArea.js";
import { validateField } from "./validateField.js";
import { validateFieldCheckBox } from "./validateFieldCheckBox.js";

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // prevent form submission

    // get element from input
    const firstName = document.getElementById("first-name");
    const lastName = document.getElementById("last-name");
    const email = document.getElementById("email-address");
    const generalEnquiry = document.getElementById("query-general");
    const supportRequest = document.getElementById("query-support");
    const message = document.getElementById("message");
    const terms = document.getElementById("terms");

    // call the validation function for each field.
    validateField(firstName, "first-name-error");
    validateField(lastName, "last-name-error");
    validateField(email, "email-error");
    validateField(terms, "terms-error");

    validateFieldTextArea(message, "message-error");

    validateFieldCheckBox(generalEnquiry, supportRequest, "query-type-error");
  });
