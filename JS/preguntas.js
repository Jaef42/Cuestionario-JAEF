var cuestionario = [
    { pregunta: "pregunta0", respuesta: "verdadero" },
    { pregunta: "pregunta1", respuesta: "verdadero" },
    { pregunta: "pregunta2", respuesta: "falso" },
    { pregunta: "pregunta3", respuesta: "verdadero" },
    { pregunta: "pregunta4", respuesta: "falso" },
    { pregunta: "pregunta5", respuesta: "falso" },
    { pregunta: "pregunta6", respuesta: "verdadero" },
    { pregunta: "pregunta7", respuesta: "falso" },
    { pregunta: "pregunta8", respuesta: "verdadero" },
    { pregunta: "pregunta9", respuesta: "falso" },
    // Aquí van las preguntas y respuestas
];
var mensaje

function Calificar() {
    var puntos = 0;
    for (var i = 0; i < cuestionario.length; i++) {
        var inputSeleccionado = document.querySelector(`input[name="${cuestionario[i].pregunta}"]:checked`);
        var respuesta = inputSeleccionado ? inputSeleccionado.value : null;
        var resultado = document.getElementById(cuestionario[i].pregunta);
        if (respuesta && respuesta === cuestionario[i].respuesta) {
            puntos += 10;
            
        } 
    }
    document.getElementById('resultado').textContent = `Puntuación total: ${puntos}`;
}
var tiempoRestante = 180; // Tiempo en segundos (3 minutos)
var intervalo;

function iniciarCronometro() {
    intervalo = setInterval(function() {
        tiempoRestante--;
        var minutos = Math.floor(tiempoRestante / 60);
        var segundos = tiempoRestante % 60;
        document.getElementById('cronometro').textContent = `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
        if (tiempoRestante <= 0) {
            clearInterval(intervalo);
            Calificar(); // Califica automáticamente cuando se acaba el tiempo
        }
    }, 1000);
}

function reiniciar() {
   
    // Reinicia el cronómetro
    clearInterval(intervalo);
    tiempoRestante = 180;
    document.getElementById('cronometro').textContent = '03:00';
    iniciarCronometro();

    const resetear = document.querySelectorAll('input[type="radio"]') ;
    resetear.forEach(input => {
        input.checked = false;
        document.getElementById('pregunta0').scrollIntoView();
    });
    document.getElementById('resultado').textContent = `Puntuación total: 0`;
}
 document.getElementById('resultado').textContent = `Puntuación total: 0`;
// Inicia el cronómetro cuando se carga la página
window.onload = iniciarCronometro;



