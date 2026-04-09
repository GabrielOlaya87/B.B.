// JS para esconder contraseña
const ojoImg = document.querySelector('#G-ojO');
const passwordInput = document.querySelector('#G-new'); 

ojoImg.addEventListener('click', function() {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        this.style.opacity = '0.5'; 
    } else {
        passwordInput.type = 'password';
        this.style.opacity = '1';
    }
});

//JS para menu.
function toggleMenu() {
    const menu = document.getElementById("G-menu-list");
    // Esto intercambia la visibilidad
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

// Opcional: Cerrar el menú si haces clic fuera de él
window.onclick = function(event) {
    if (!event.target.closest('#G-menu-btn')) {
        const menu = document.getElementById("G-menu-list");
        if (menu) menu.style.display = "none";
    }
}