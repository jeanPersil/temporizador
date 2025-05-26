import {
  preencherSelect,
  abrir_modal,
  fechar_modal,
} from "./helpers/helpers.js";

import {
  iniciar_temporizador,
  redefinir_temporizador,
  pausar_temporizador,
  continuar_temporizador,
  cronometro_em_andamento,
} from "./modules/timer.js";

const btn_editar_temporizador = document.getElementById("editar_temporizador");
const btn_cancelar_modal = document.getElementById("cancelar_modal");
const btn_iniciar_temporizador = document.getElementById(
  "iniciar_temporizador"
);

const btn_pausar = document.getElementById("pausar_temporizador");
const iniciar = document.getElementById("iniciar_padrao");
const btn_redefinir_temporizador = document.getElementById("redefinir");
const tempo_cronometro = document.getElementById("tempo");

let tempo_Padrao = 300;
let h = String(Math.floor(tempo_Padrao / 3600)).padStart(2, "0");
let m = String(Math.floor((tempo_Padrao % 3600) / 60)).padStart(2, "0");
let s = String(tempo_Padrao % 60).padStart(2, "0");
tempo_cronometro.textContent = `${h}:${m}:${s}`;

iniciar.addEventListener("click", () => {
  if (cronometro_em_andamento()) {
    continuar_temporizador();
    iniciar.style.display = "none";
    btn_pausar.style.display = "block";
  } else {
    iniciar_temporizador(tempo_Padrao);
    iniciar.style.display = "none";
    btn_pausar.style.display = "block";
  }
});

btn_pausar.addEventListener("click", () => {
  pausar_temporizador();
  btn_pausar.style.display = "none";
  iniciar.style.display = "block";
});

btn_redefinir_temporizador.addEventListener("click", () => {
  redefinir_temporizador(tempo_Padrao, h, m, s);
  btn_pausar.style.display = "none";
  iniciar.style.display = "block";
});

btn_editar_temporizador.addEventListener("click", () => {
  abrir_modal();
  preencherSelect();
});

btn_cancelar_modal.addEventListener("click", () => {
  fechar_modal();
});

btn_iniciar_temporizador.addEventListener("click", () => {
  const horas = parseInt(document.getElementById("horas").value);
  const minutos = parseInt(document.getElementById("minutos").value);
  const segundos = parseInt(document.getElementById("segundos").value);
  let totalSegundos = horas * 3600 + minutos * 60 + segundos;

  if (totalSegundos === 0) {
    alert("Selecione um horario para o temporizador!");
    return;
  }
  tempo_Padrao = totalSegundos;

  iniciar_temporizador(totalSegundos);
  fechar_modal();

  iniciar.style.display = "none";
  btn_pausar.style.display = "block";
});
