document.addEventListener("DOMContentLoaded", () => {
  
  const categoriaSelect = document.getElementById("categoriaSelect");
  const popup = document.getElementById("popup");
  const popupList = document.getElementById("popupList");
  const btnSalvar = document.getElementById("btnSalvar");

  const categorias = ["Digital", "Bordado", "Sublimação", "Serigrafia"];

  // Abrir popup do select
  categoriaSelect.addEventListener("click", () => {
    popupList.innerHTML = "";

    categorias.forEach(cat => {
      const li = document.createElement("li");
      li.textContent = cat;
      li.addEventListener("click", () => {
        categoriaSelect.textContent = cat;
        popup.classList.add("hidden");
      });
      popupList.appendChild(li);
    });

    // ✅ POSICIONAMENTO DINÂMICO
    const rect = categoriaSelect.getBoundingClientRect();
    const popupBox = document.querySelector(".popup-box");

    popupBox.style.width = rect.width + "px";
    popupBox.style.left = rect.left + "px";
    popupBox.style.top = rect.bottom + window.scrollY + "px";

    popup.classList.remove("hidden");
  });

  // Fechar popup ao clicar fora
  popup.addEventListener("click", (e) => {
    if (e.target === popup) popup.classList.add("hidden");
  });

  // Ação do botão Salvar
  btnSalvar.addEventListener("click", () => {
    alert("Beneficiamento salvo com sucesso!");

    window.location.href = "beneficiamentos.html";
  });

});
