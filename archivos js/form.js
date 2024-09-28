   document.addEventListener('submit', function(event) {
        // Obtener los valores de los campos
        const nombre = document.getElementById('nombre').value.trim();
        const apellido = document.getElementById('apellido').value.trim();
        const edad = document.getElementById('edad').value;
        const carrera = document.getElementById('carrera').value;
        const anio = document.getElementById('anio').value.trim();

        // Validar nombre
        if (nombre === '') {
            alert('El nombre es obligatorio.');
            event.preventDefault(); // Evita el envío del formulario
            return;
        }

        // Validar apellido
        if (apellido === '') {
            alert('El apellido es obligatorio.');
            event.preventDefault(); // Evita el envío del formulario
            return;
        }

        // Validar edad
        if (isNaN(edad) || edad <= 16) {
            alert('Ingrese una edad válida.');
            event.preventDefault(); // Evita el envío del formulario
            return;
        }

        // Validar carrera
        if (carrera === '') {
            alert('Seleccione una carrera.');
            event.preventDefault(); // Evita el envío del formulario
            return;
        }

        // Validar año
        if (anio === '' || isNaN(anio) || anio <= 1) {
            alert('Ingrese un año válido.');
            event.preventDefault(); // Evita el envío del formulario
            return;
        }
    });

