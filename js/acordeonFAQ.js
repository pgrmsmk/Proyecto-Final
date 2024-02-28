document.addEventListener('DOMContentLoaded', function() {
    const preguntas = document.querySelectorAll('.pregunta');

    preguntas.forEach(pregunta => {
        pregunta.addEventListener('click', function() {
            const respuesta = this.nextElementSibling;
            respuesta.classList.toggle('activa');

            const icono = this.querySelector('i');
            if(icono.className === 'fas fa-chevron-down') {
                icono.className = 'fas fa-chevron-up';
            } else {
                icono.className = 'fas fa-chevron-down';
            }
        });
    });
});
