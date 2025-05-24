function preencherSelect() {
  const select_horas = document.getElementById("horas");
  const select_minutos = document.getElementById("minutos");
  const select_segundos = document.getElementById("segundos");

  for (let i = 1; i < 24; i++) {
    const opcao = document.createElement("option");
    opcao.value = i;
    opcao.textContent = i.toString().padStart(2, "0");
    select_horas.appendChild(opcao);
  }

  for (let i = 1; i < 60; i++) {
    const opcao = document.createElement("option");
    opcao.value = i;
    opcao.textContent = i.toString().padStart(2, "0");
    select_minutos.appendChild(opcao);
  }

  for (let i = 1; i < 60; i++) {
    const opcao = document.createElement("option");
    opcao.value = i;
    opcao.textContent = i.toString().padStart(2, "0");
    select_segundos.appendChild(opcao);
  }
}

export { preencherSelect };
