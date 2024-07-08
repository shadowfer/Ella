// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "My love was as cruel as the cities I lived in", time: 0},
  { text: "Everyone looked worse in the light", time: 6.5 },
  { text: "There are so many lines that I've crossed unforgiven", time: 12.5 },
  { text: "I'll tell you the truth, but never goodbye", time: 19 },
  { text: "I don't wanna look at anything else now that I saw you", time: 26 },
  { text: "I could never look away", time: 27 },
  { text: "I don't wanna think of anything else now that I thought of you", time: 34 },
  { text: "I've been sleepin' so long in a 20-year dark night", time: 40 },
  { text: "And now I see daylight, I only see daylight", time: 45 },
  { text: "Luck of the draw only draws the unlucky", time: 51.5 },
  { text: "And so I became the butt of the joke", time: 58.5 },
  { text: "I wounded the good and I trusted the wicked", time: 64.5 },
  { text: "Clearing the air, I breathed in the smoke", time: 71.5 },
  { text: "Maybe you ran with the wolves and refused to settle down", time: 78 },
  { text: "Maybe I've stormed out of every single room in this town", time: 79.5 },
  { text: "Threw out our cloaks and our daggers because it's morning now", time: 80.5},
  { text: "It's brighter now, now", time: 85.5 },
  { text: "I don't wanna look at anything else now that I saw you", time: 87 },
  { text: "I could never look away", time: 93 },
  { text: "I don't wanna think of anything else now that I thought of you", time: 95 },
  { text: "I've been sleepin' so long in a 20-year dark night", time: 104 },
  { text: "And now I see daylight, I only see daylight", time: 110 },
  { text: "I only see daylight, daylight, daylight, daylight", time: 115 },
  { text: "I only see daylight, daylight, daylight, daylight", time: 120 },
  { text: "And I can still see it all in my mind", time: 128.5 },
  { text: "All of you, all of me intertwined", time: 131.5 },
  { text: "I once believed love would be black and white", time: 134.5 },
  { text: "But it's golden, golden", time: 137.5 },
  { text: "And I can still see it all (In my head)", time: 142.5 },
  { text: "Back and forth from New York (Sneaking in your bed)", time: 143 },
  { text: "I once believed love would be (Burning red)", time: 147 },
  { text: "But it's golden", time: 151 },
  { text: "Daylight, like daylight", time: 154 },
  { text: "Like daylight", time: 159 }
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime); // get the current time in seconds
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 5
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 100);

// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation = "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
