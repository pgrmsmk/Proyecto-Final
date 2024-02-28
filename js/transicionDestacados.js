document.addEventListener('DOMContentLoaded', function() {
    let imagenes = document.querySelectorAll('#librosDestacados img');
    let actual = 0;

    imagenes[actual].style.display = 'block';

    setInterval(function() {
        imagenes[actual].style.display = 'none';
        actual = (actual + 1) % imagenes.length;
        imagenes[actual].style.display = 'block';
    }, 3000); 
});
