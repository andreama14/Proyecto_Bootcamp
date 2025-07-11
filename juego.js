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