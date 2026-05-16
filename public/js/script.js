const btnAlterar = document.getElementById('btnAlterar');
const btnSalvar = document.getElementById('btnSalvar');

const inputs = document.querySelectorAll(
    '#formPerfil input'
);

if (btnAlterar) {
    btnAlterar.addEventListener('click', () => {
        inputs.forEach(input => {
            input.disabled = false;
        });

        /* ALTERAR DADOS FICA APAGADO */
        btnAlterar.disabled = true;

        /* SALVAR ALTERAÇÕES FICA LARANJA */
        btnSalvar.disabled = false;
    });
}

// Sidebar navigation active state
const menuLinks = document.querySelectorAll('.menu-link');

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Remove active from all
        menuLinks.forEach(l => l.classList.remove('active'));
        // Add active to clicked
        link.classList.add('active');
    });
});

// Set active based on current URL on load
const currentPath = window.location.pathname;
menuLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
        link.classList.add('active');
    }
});

document.getElementById('inputFoto').addEventListener('change', function () {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById('previewFoto').src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});
