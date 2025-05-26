let temporizador = null;
let tempo_restante = 0;
let pausado = false;

const btn_pausar = document.getElementById("pausar_temporizador");
const iniciar = document.getElementById("iniciar_padrao");

function iniciar_temporizador(total_segundos) {
  if (temporizador) clearInterval(temporizador);

  tempo_restante = total_segundos;
  pausado = false;

  temporizador = setInterval(() => {
    if (!pausado && tempo_restante > 0) {
      tempo_restante--;

      const h = String(Math.floor(tempo_restante / 3600)).padStart(2, "0");
      const m = String(Math.floor((tempo_restante % 3600) / 60)).padStart(
        2,
        "0"
      );
      const s = String(tempo_restante % 60).padStart(2, "0");

      document.getElementById("tempo").textContent = `${h}:${m}:${s}`;
    }

    if (tempo_restante <= 0) {
      clearInterval(temporizador);
      temporizador = null;
      btn_pausar.style.display = "none";
      iniciar.style.display = "block";
      alert("Tempo esgotado!");
    }
  }, 1000);
}

function pausar_temporizador() {
  pausado = true;
}

function continuar_temporizador() {
  pausado = false;
}

function cronometro_em_andamento() {
  return temporizador !== null;
}

function redefinir_temporizador(tempo_Padrao) {
  const tempo_cronometro = document.getElementById("tempo");

  if (temporizador) {
    clearInterval(temporizador);
    temporizador = null;
  }

  tempo_restante = tempo_Padrao;
  pausado = false;

  const h = String(Math.floor(tempo_restante / 3600)).padStart(2, "0");
  const m = String(Math.floor((tempo_restante % 3600) / 60)).padStart(2, "0");
  const s = String(tempo_restante % 60).padStart(2, "0");
  tempo_cronometro.textContent = `${h}:${m}:${s}`;
}

export {
  iniciar_temporizador,
  redefinir_temporizador,
  pausar_temporizador,
  continuar_temporizador,
  cronometro_em_andamento,
};
