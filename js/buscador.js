document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#buscador button').addEventListener('click', buscarLibros);
});

function buscarLibros() {
    let input = document.getElementById('inputBuscador');
    let filtro = input.value.toUpperCase();
    let contenedorLibros = document.querySelector('.contenedor-libros');
    let secciones = contenedorLibros.querySelectorAll('section');

    secciones.forEach(seccion => {
        let titulo = seccion.querySelector('h3');
        if (titulo.innerText.toUpperCase().indexOf(filtro) > -1) {
            seccion.style.display = "";
        } else {
            seccion.style.display = "none";
        }
    });
}
