const sonidoExito = new Audio("audio/sonido-ok.mp3");

const energias = [
  { tipo: "Solar", img: "img/solar.jpg", texto: "Aprovecha la energía del Sol para generar electricidad." },
  { tipo: "Eólica", img: "img/eolica.png", texto: "Utiliza el viento como fuente de energía limpia." },
  { tipo: "Geotérmica", img: "img/geotermia.avif", texto: "Usa el calor del interior de la Tierra." },
  { tipo: "Biomasa", img: "img/biomasa.jpg", texto: "Proviene de residuos orgánicos." },
  { tipo: "Hidráulica", img: "img/hidraulica.jpg", texto: "Aprovecha la fuerza del agua." },
  { tipo: "Hidrógeno", img: "img/hidrogeno.jpg", texto: "Gas versátil producido de manera renovable." }
];

// Crear pares: una carta con imagen y una con texto
let cartas = [];

energias.forEach(energia => {
  cartas.push({
    tipo: energia.tipo,
    contenido: `<img src="${energia.img}" alt="${energia.tipo}" width="100">`
  });
  cartas.push({
    tipo: energia.tipo,
    contenido: energia.texto
  });
});

// Mezclar las cartas
cartas = cartas.sort(() => Math.random() - 0.5);

// Crear el tablero
const tablero = document.getElementById("tablero-juego");
let primeraCarta = null;
let bloquear = false;

cartas.forEach((carta, index) => {
  const div = document.createElement("div");
  div.classList.add("carta");
  div.dataset.tipo = carta.tipo;
  div.dataset.index = index;
  div.innerHTML = ""; // vacía al inicio

  div.addEventListener("click", () => {
    if (bloquear || div.classList.contains("volteada")) return;

    div.classList.add("volteada");
    div.innerHTML = carta.contenido;

    if (!primeraCarta) {
      primeraCarta = div;
    } else {
      bloquear = true;
      const segundaCarta = div;

      if (primeraCarta.dataset.tipo === segundaCarta.dataset.tipo) {
        // ¡Es un par!
        primeraCarta.classList.add("pareja-encontrada");
        segundaCarta.classList.add("pareja-encontrada");
        sonidoExito.play(); // 🔊 Reproducir sonido
        primeraCarta = null;
        bloquear = false;
      } else {
        // No coinciden
        setTimeout(() => {
          primeraCarta.classList.remove("volteada");
          segundaCarta.classList.remove("volteada");
          primeraCarta.innerHTML = "";
          segundaCarta.innerHTML = "";
          primeraCarta = null;
          bloquear = false;
        }, 1000);
      }
    }
  });

  tablero.appendChild(div);
});

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
    respuesta = "Hola 👋, soy *Patricia*, tu asistente en **Enertech**, experta en energías renovables. Puedes preguntarme sobre energía solar, eólica, hidráulica, geotérmica, biomasa, nuestro mapa interactivo y el juego de memoria. ¡Estoy aquí para ayudarte!";
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
  } else if (texto.includes("biomasa")) {
    respuesta = "La biomasa transforma residuos orgánicos en energía útil 🌱";

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
