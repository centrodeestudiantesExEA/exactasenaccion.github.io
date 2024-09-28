window.onload = function() {
    let indiceActual = 0;
    const slides = document.querySelectorAll('.slide');
    const botonAnterior = document.getElementById("anterior");
    const botonSiguiente = document.getElementById("siguiente");

    // Mostrar la primera imagen
    slides[indiceActual].style.display = 'block';

    function cambiarImagen(direccion) {
        // Ocultar la imagen actual
        slides[indiceActual].style.display = 'none';

        // Calcular el nuevo índice
        indiceActual += direccion;

        // Asegurar que el índice esté dentro de los límites
        if (indiceActual >= slides.length) {
            indiceActual = slides.length - 1; // Mantener en el último índice
        } else if (indiceActual < 0) {
            indiceActual = 0; // Mantener en el primer índice
        }

        // Mostrar la nueva imagen
        slides[indiceActual].style.display = 'block';

        // Controlar la visibilidad de los botones
        if (indiceActual === 0) {
            botonAnterior.style.display = 'none';
        } else {
            botonAnterior.style.display = 'inline-block';
        }

        if (indiceActual === slides.length - 1) {
            botonSiguiente.style.display = 'none';
        } else {
            botonSiguiente.style.display = 'inline-block';
        }
    }

    // Inicialmente, ocultar el botón "Anterior" si estamos en la primera imagen
    if (indiceActual === 0) {
        botonAnterior.style.display = 'none';
    }

    botonAnterior.onclick = function() {
        cambiarImagen(-1);
    };

    botonSiguiente.onclick = function() {
        cambiarImagen(1);
    };
}
