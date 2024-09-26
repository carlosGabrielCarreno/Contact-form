export function validateFieldCheckBox(fieldOne, fieldTwo, errorId) {
  const errorElement = document.getElementById(errorId);

  if (fieldOne.checkValidity() || fieldTwo.checkValidity()) {
    errorElement.style.display = "none";
  } else {
    errorElement.style.display = "block";
  }
}
