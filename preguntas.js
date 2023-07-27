function eliminarRespuestas() {
  var respuesta = document.getElementById("respuestaIncorrecta1");
  respuesta.remove();
}
function verificarRespuestas() {
  var preguntas = [
    {
      pregunta: "¿Cuál es la capital de Brasil?",
      respuestaCorrecta: "respuestaC" // ID de la opción correcta para la primera pregunta (Brasilia)
    },
    {
      pregunta: "¿A cuántos kilómetros equivale una milla?",
      respuestaCorrecta: "respuestaA" // ID de la opción correcta para la segunda pregunta (1.8 km)
    },
    {
      pregunta: "¿En qué año comenzó la Segunda Guerra Mundial?",
      respuestaCorrecta: "respuestaB" // ID de la opción correcta para la tercera pregunta (1939)
    },
    {
      pregunta: "¿Quién escribió la novela 'Don Quijote de la Mancha'?",
      respuestaCorrecta: "respuestaA" // ID de la opción correcta para la cuarta pregunta (Miguel de Cervantes Saavedra)
    }
  ];

  var totalPreguntas = preguntas.length;
  var respuestasCorrectas = 0;

  for (var i = 0; i < totalPreguntas; i++) {
    var preguntaActual = preguntas[i].pregunta;
    var respuestaCorrecta = preguntas[i].respuestaCorrecta;
    var seleccion = document.querySelector('input[name="pregunta' + (i + 1) + '"]:checked');

    if (seleccion && seleccion.id === respuestaCorrecta) {
      respuestasCorrectas++;
    }
  }

  // Mostrar los resultados
  var resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerHTML = "Has acertado " + respuestasCorrectas + " de " + totalPreguntas + " preguntas.";
}

