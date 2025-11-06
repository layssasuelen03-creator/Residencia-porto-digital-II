document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".config-card form");
  const btnEditar = document.querySelector(".btn-editar");
  if (!form || !btnEditar) return;

  const inputs = form.querySelectorAll("input");

  // === 1️⃣ HABILITA OS CAMPOS PARA DIGITAÇÃO AO ABRIR ===
  inputs.forEach(i => { i.disabled = false; });

  const byPH = (frag) =>
    Array.from(inputs).find(i => (i.placeholder || "").toLowerCase().includes(frag));

  const nome     = byPH("nome") || inputs[0];
  const cpf      = byPH("000.000.000-00") || byPH("cpf") || inputs[1];
  const email    = byPH("gmail") || byPH("email") || inputs[2];
  const telefone = byPH("(00) 0 0000-0000") || byPH("telefone") || inputs[3];

  // === 2️⃣ MÁSCARA DE CPF ===
  if (cpf) {
    cpf.addEventListener("input", (e) => {
      let v = e.target.value.replace(/\D/g, "").slice(0, 11);
      v = v
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
      e.target.value = v;
    });
  }

  // === 3️⃣ MÁSCARA DE TELEFONE ===
  if (telefone) {
    telefone.addEventListener("input", (e) => {
      let v = e.target.value.replace(/\D/g, "").slice(0, 11);
      v = v
        .replace(/^(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{1})(\d{4})(\d{4})$/, "$1 $2-$3");
      e.target.value = v;
    });
  }

  // === 4️⃣ BOTÃO EDITAR/SALVAR (campos continuam editáveis) ===
  btnEditar.addEventListener("click", () => {
    if (btnEditar.textContent.trim() === "Editar") {
      btnEditar.textContent = "Salvar";
      btnEditar.style.background = "#198754"; 
    } else {
      btnEditar.textContent = "Editar";
      btnEditar.style.background = "#111"; 
      alert("Informações salvas com sucesso ✅");
    }
  });
});




