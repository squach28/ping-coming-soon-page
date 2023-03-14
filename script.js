document.getElementById('email-form').addEventListener('submit', (e) => {
    e.preventDefault()
    const emailInput = document.getElementById('email-input')
    if(emailInput.value === '') {
        document.getElementById('email-error').style.display = 'block'
        emailInput.placeholder = 'example@email/com'
    } else {
        document.getElementById('email-error').style.display = 'none'
    }
})