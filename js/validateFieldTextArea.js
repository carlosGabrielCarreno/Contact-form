export function validateFieldTextArea(field, errorId) {
  const errorElement = document.getElementById(errorId);

  if (field.value == "") {
    errorElement.style.display = "block";
    field.classList.add("error"); // aniadir clase de error al campo
  } else {
    field.classList.remove("error"); // remover clase de error
    errorElement.style.display = "none";
  }
}
