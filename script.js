    const track = document.getElementById('carouselTrack');
    let index = 0;

    setInterval(() => {
      index = (index + 1) % 4;
      track.style.transform = `translateX(-${index * 100}%)`;
    }, 5000); // cada 5 segundos


    /* hormiga */

 function mostrarFAQ() {
  document.getElementById("faq").style.display = "block";
}

function cerrarFAQ() {
  document.getElementById("faq").style.display = "none";
}

function responderPregunta() {
  const input = document.getElementById("pregunta");
  const chat = document.getElementById("chat");
  const texto = input.value.toLowerCase();
  let respuesta = "Lo siento, aún no sé responder eso 😢. ¡Pero pronto aprenderé más!";

   // SALUDO Y PRESENTACIÓN
  if (/(^hola\b|^buenas\b|^qué tal\b|háblame de ti|quién eres|presentate|quien eres)/.test(texto)) {

    respuesta = "Hola 👋, soy Patricia, tu asistente en Enertech, experta en energías renovables. Puedes preguntarme sobre energía solar, eólica, hidráulica, geotérmica, nuestro mapa interactivo y el juego de memoria. ¡Estoy aquí para ayudarte!";

  }
  // ENERGÍAS RENOVABLES
  if (texto.includes("solar")) {
    respuesta = "La energía solar convierte la luz del sol en electricidad 🌞";
  } else if (texto.includes("eólica") || texto.includes("eolica")) {
    respuesta = "La energía eólica usa el viento para generar electricidad 💨";
  } else if (texto.includes("hidráulica") || texto.includes("hidraulica")) {
    respuesta = "La energía hidráulica usa el agua en movimiento, como ríos, para producir electricidad 💧";
  } else if (texto.includes("geotérmica") || texto.includes("geotermica")) {
    respuesta = "La energía geotérmica viene del calor que hay debajo de la Tierra 🌋";


  // MAPA INTERACTIVO (UPME)
  } else if (texto.includes("mapa") || texto.includes("visor")) {
    respuesta = "¡El mapa muestra dónde hay potencial para usar energías como solar, eólica, geotérmica y más en Colombia! 🗺️";
  } else if (texto.includes("fncer") || texto.includes("potenciales")) {
    respuesta = "FNCER significa Fuentes No Convencionales de Energía Renovable. Son tecnologías limpias como la solar, eólica o biomasa que ayudan al planeta 🌍";
  } else if (texto.includes("manizales")) {
    respuesta = "En Manizales hay buen potencial para energía solar y geotérmica, ¡por eso es tan especial para nuestro proyecto! ☀️🌋";

  // JUEGO DE MEMORIA
  } else if (texto.includes("juego") || texto.includes("memoria") || texto.includes("parejas")) {
    respuesta = "¡En el juego de memoria debes unir imágenes y textos de energías renovables! Así aprendes jugando 🎮✨";
  } else if (texto.includes("cómo se juega") || texto.includes("como se juega")) {
    respuesta = "Haz clic en dos cartas: si coinciden (una imagen y su texto), ¡es un par! Si no, intenta de nuevo. ¡Buena suerte! 💡🧠";

  // PREGUNTAS COMPLEMENTARIAS
  } else if (texto.includes("por qué usar energía renovable") || texto.includes("por qué son importantes")) {
    respuesta = "Porque no contaminan, se renuevan solitas y ayudan a cuidar el planeta 🌎💚";
  } else if (texto.includes("cuál es la mejor energía") || texto.includes("mejor energía")) {
    respuesta = "¡Depende del lugar! En zonas soleadas la solar es genial, en zonas con viento la eólica es mejor. ¡Todas tienen ventajas! ⚡";
  } else if (texto.includes("niños") || texto.includes("aprender")) {
    respuesta = "¡Sí! Los niños pueden aprender jugando con Patricia, explorando mapas y usando su imaginación. 💭🐜";
  }

  // Mostrar mensajes
  chat.innerHTML += `<p><strong>Tú:</strong> ${input.value}</p>`;
  chat.innerHTML += `<p><strong>Patricia:</strong> ${respuesta}</p>`;
  input.value = "";
  chat.scrollTop = chat.scrollHeight;
}

//Mostrar Formulario
function enviarFormulario(e) {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value;
  // Aquí puedes añadir validación o enviar los datos a tu servidor
  alert('Gracias ' + nombre + ', tu mensaje ha sido enviado.');
  document.getElementById('formContact').reset();
}




//MODAL DE BIENVENIDA
  // Mostrar modal al cargar la página



/* Volver arriba */

// Mostrar el modal SOLO si no ha sido mostrado en esta sesión
window.onload = function () {
  if (!sessionStorage.getItem("modalMostrado")) {
    abrirModal();
    sessionStorage.setItem("modalMostrado", "true");
  }
};

function abrirModal() {
  document.getElementById("modalBienvenida").style.display = "block";
}

function cerrarModal() {
  document.getElementById("modalBienvenida").style.display = "none";
}

// Mostrar botón de volver arriba al hacer scroll

window.onscroll = function () {
  const boton = document.querySelector('.volver-arriba');
  boton.style.display = window.scrollY > 300 ? 'block' : 'none';
};


  // Esperar a la primera interacción del usuario para reproducir
  document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("musicaFondo");

    const reproducir = () => {
      audio.play().catch((e) => {
        console.log("No se pudo reproducir automáticamente:", e);
      });
      document.removeEventListener("click", reproducir); // Evita múltiples llamadas
    };

    document.addEventListener("click", reproducir);
  });

