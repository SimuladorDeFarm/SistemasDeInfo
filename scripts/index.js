import { realizarConsulta } from './firebase.js';

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario si la validación no se cumple

    const nombre = document.getElementById('nombreInput').value;
    const rut = document.getElementById('rutInput').value;

    if (nombre.trim() === '' || rut.trim() === '') {
        alert('Por favor, ingrese el nombre y el RUT.');
        return;
    }
    
    realizarConsulta(nombre,rut);
});