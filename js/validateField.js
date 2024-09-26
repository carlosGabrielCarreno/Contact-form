export function validateField(field, errorId){
    const errorElement = document.getElementById(errorId)

    // validar si el campo esta vacio o no cumple con la validacion nativa de HTML
    if(!field.checkValidity()){
        field.classList.add('error') // aniadir clase de error al campo
        errorElement.style.display = 'block' // mostrar mensaje de error
    } else {
        field.classList.remove('error') // remover clase de error
        errorElement.style.display = 'none' // ocultar mensaje de error
    }
}