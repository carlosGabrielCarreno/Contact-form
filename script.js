document.getElementById('contact-form').addEventListener('submit', function(event){
    event.preventDefault() // prevent form submission

    // get element from input
    const firstName = document.getElementById('first-name')
    const lastName = document.getElementById('last-name')
    const email = document.getElementById('email-address')

    // call the validation function for each field.


})

function validateField(field, errorId){
    const errorElement = document.getElementById(errorId)

    // 
}