function iniciar_temporizador({ total_segundos }) {
  if (total_segundos === 0) {
    alert("Por favor, preencha um tempo antes de iniciar");
  }

  const temporizador = setInterval(() => {
    if (total_segundos <= 0) {
      clearInterval(temporizador);
      alert("Tempo esgotado!");
      return;
    }
    total_segundos--;

    const h = String(Math.floor(total_segundos / 3600)).padStart(2, "0");
    const m = String(Math.floor((total_segundos % 3600) / 60)).padStart(2, "0");
    const s = String(total_segundos % 60).padStart(2, "0");

    console.log(`${h}:${m}:${s}`);
  }, 1000);
}

function tempo_default(valor) {
  const texto = valor.textContent.toLowerCase();
  const valorNumerico = parseInt(texto);
  let segundos = 0;

  if (texto.includes("segundo")) {
    segundos = valorNumerico;
  } else if (texto.includes("minuto")) {
    segundos = valorNumerico * 60;
  } else if (texto.includes("hora")) {
    segundos = valorNumerico * 3600;
  }

  iniciar_temporizador({ total_segundos: segundos });
}

export { iniciar_temporizador, tempo_default };
