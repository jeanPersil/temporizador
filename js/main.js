import { preencherSelect } from "./helpers/helpers.js";
import { iniciar_temporizador, tempo_default } from "./modules/timer.js";

preencherSelect();

const botao_iniciar = document.getElementById("iniciar");
const botao_apagar = document.getElementById("limpar");
const valoresPadroes = document.querySelectorAll(".tempos-padroes span");

valoresPadroes.forEach((valorPadrao) => {
  valorPadrao.addEventListener("click", () => {
    tempo_default(valorPadrao);
  });
});

botao_iniciar.addEventListener("click", (e) => {
  const tempoDoUsuario = {
    hora: parseInt(document.getElementById("horas").value),
    minuto: parseInt(document.getElementById("minutos").value),
    segundo: parseInt(document.getElementById("segundos").value),
  };

  let totalSegundos =
    tempoDoUsuario.hora * 3600 +
    tempoDoUsuario.minuto * 60 +
    tempoDoUsuario.segundo;

  iniciar_temporizador({
    total_segundos: totalSegundos,
  });
});

botao_apagar.addEventListener("click", () => {
  document.getElementById("horas").value = "0";
  document.getElementById("minutos").value = "0";
  document.getElementById("segundos").value = "0";
});
