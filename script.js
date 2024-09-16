
document.getElementById('contact-form').addEventListener('submit', function(event){
    event.preventDefault() // prevent form submission
    console.log('estoy');
    
    // get element from input
    const firstName = document.getElementById('first-name')
    const lastName = document.getElementById('last-name')
    const email = document.getElementById('email-address')
    const generalEnquiry = document.getElementById('query-general')
    const supportRequest = document.getElementById('query-support')
    const message = document.getElementById('message')
    const terms = document.getElementById('terms')

    // call the validation function for each field.
    validateField(firstName, 'first-name-error')
    validateField(lastName, 'last-name-error')
    validateField(email, 'email-error')
    validateField(terms, 'terms-error')

    validateFieldTextArea(message, 'message-error')
    
    validateFieldCheckBox(generalEnquiry, supportRequest, 'query-type-error')

})

function validateField(field, errorId){
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

function validateFieldCheckBox(fieldOne, fieldTwo, errorId){
    const errorElement = document.getElementById(errorId)

    if(fieldOne.checkValidity() || fieldTwo.checkValidity()){
        errorElement.style.display = 'none'
    } else {
        errorElement.style.display = 'block'   
    }
}

function validateFieldTextArea(field, errorId){
    const errorElement = document.getElementById(errorId)
    
    if(field.value == ''){
        console.log('' == field.value);
        errorElement.style.display = 'block'   
        field.classList.add('error') // aniadir clase de error al campo
    } else {
        field.classList.remove('error') // remover clase de error
        errorElement.style.display = 'none'
    }
    
}