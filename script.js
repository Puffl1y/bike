document.getElementById('newsletter-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const emailField = document.getElementById('email');
    const email = emailField.value;
    const errorMessage = document.getElementById('error-message');

    if (!validateEmail(email)) {
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none';
        
        console.log('E-mail válido:', email);
        alert('Inscrição realizada com sucesso!');
        emailField.value = '';
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
