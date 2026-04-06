const ojoImg = document.querySelector('#ojO');
const passwordInput = document.querySelector('#new'); 

ojoImg.addEventListener('click', function() {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        this.style.opacity = '0.5'; 
    } else {
        passwordInput.type = 'password';
        this.style.opacity = '1';
    }
});