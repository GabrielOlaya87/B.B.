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

    const boton = document.getElementById('G-menu-btn');
    boton.classList.toggle('active-icon'); 
}

//JS que cambia color del icono de menu

//JS para contador
function cambiar(cantidad) {
    var display = document.getElementById('G-valor');
    if (!display) return;

    var actual = parseInt(display.innerText) || 0;
    var nuevoValor = actual + cantidad;

    if (nuevoValor >= 0) {
        display.innerText = nuevoValor;
    }
}

