const pregunta = {
    titulo: '¿A quién ha doblado más veces Constantino Romero?',
    respuestas: [
        {
            label: "Clint Eastwood",
            id: "clint-eastwood",
            name: "actor",
            value: "clint-eastwood"
        },
        {
            label: "James Earl",
            id: "james-earl",
            name: "actor",
            value: "james-earl"
        },
        {
            label: "Roger Moore",
            id: "roger-moore",
            name: "actor",
            value: "roger-moore"
        },
        {
            label: "William Shatner",
            id: "william-shatner",
            name: "actor",
            value: "william-shatner"
        },
        {
            label: "Arnold Schwarzenegger",
            id: "arnold-schwarzenegger",
            name: "actor",
            value: "arnold-schwarzenegger"
        }
    ]
}

function imprimePregunta(pregunta) {
  const newHTML = "";

  newHTML += imprimeTitulo(pregunta);
  newHTML += imprimeTodasLasRespuestas(pregunta);

  return newHTML;
}

function imprimeTitulo(pregunta) {
  function imprimeTitulo(pregunta) {
  return "<p>" + pregunta.titulo + "</p>";
}
}

function imprimeTodasLasRespuestas(pregunta) {
  function imprimeTodasLasRespuestas(pregunta) {
  let respuestaImprimir = "";
  for (let i = 0; i < pregunta.respuestas.length; i++){
    respuestasImprimir =+ imprimeUnaRespuesta(i);
  }
  return respuestaImprimir;
}
}

function imprimeUnaRespuesta(respuesta) {
  function imprimeUnaRespuesta(respuesta) {
  return imprimeLabel(respuesta) + imprimeInput (respuesta);
}
}

function imprimeLabel(respuesta) {
  function imprimeLabel(respuesta) {
  return `<label for=${pregunta.respuestas[respuesta].id}>${pregunta.respuestas[respuesta].label}</label>`;
}
}

function imprimeInput(respuesta) {
  function imprimeInput(respuesta) {
  return `<input id=${pregunta.respuestas[respuesta].id} name=${pregunta.respuestas[respuesta].name} type="radio" value=${pregunta.respuestas[respuesta].value}>`;
}
}

document.getElementById("contenedorPreguntas").innerHTML = imprimePregunta(pregunta);