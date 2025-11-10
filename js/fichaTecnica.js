document.addEventListener("DOMContentLoaded", () => {

  const popup = document.querySelector(".popup");
  const popupBox = document.querySelector(".popup-box");
  const list = document.querySelector(".popup-list");
  let activeSelect = null;

  // ✅ opções exatamente como nas imagens
  const opcoes = {
    tecido: [
      "Malha 100% algodão",
      "Viscose Estampada",
      "Sarja Premium"
    ],

    aviamento: [
      "Botão Plástico 4 furos",
      "Zíper Nylon",
      "Etiqueta de Composição",
      "Linha de Costura",
      "Elástico"
    ],

    modelagem: [
      "Camiseta Básica Masculina",
      "Calça Jeans Skinny Feminina",
      "Vestido Midi",
      "Blazer Feminino",
      "Bermuda Masculina",
      "Camiseta Básica Masculina"
    ],

    beneficiamento: [
      "Digital",
      "Bordado",
      "Sublimação",
      "Serigrafia"
    ],

    tipo: [
      "Estamparia Digital",
      "Estamparia Digital",
      "Estamparia Digital"
    ]
  };

  // ✅ quando clicar em "Selecione"
  document.querySelectorAll(".select").forEach(sel => {
    sel.addEventListener("click", () => {

      activeSelect = sel;
      const type = sel.dataset.type;

      // limpa lista
      list.innerHTML = "";

      // insere opções
      opcoes[type].forEach(item => {
        let li = document.createElement("li");
        li.textContent = item;

        li.addEventListener("click", () => {
          activeSelect.textContent = item;
          popup.classList.add("hidden");
        });

        list.appendChild(li);
      });

      // ✅ POSICIONAR POPUP LOGO ABAIXO DO SELECT
      const rect = sel.getBoundingClientRect();

      // O popup vira uma camada transparente clicável
      popup.style.position = "absolute";
      popup.style.inset = "0";
      popup.style.background = "transparent";

      // A caixa com as opções é posicionada exatamente abaixo do select
      popupBox.style.position = "absolute";
      popupBox.style.top = rect.bottom + window.scrollY + "px";
      popupBox.style.left = rect.left + "px";
      popupBox.style.width = rect.width + "px";

      popup.classList.remove("hidden");
    });
  });

  // ✅ fecha popup ao clicar fora
  popup.addEventListener("click", (e) => {
    if (e.target === popup) popup.classList.add("hidden");
  });

});

  // ✅ Função do botão Salvar
  const btnSalvar = document.querySelector(".btn-save");

  btnSalvar.addEventListener("click", () => {

    // pegar valores digitados
    const cliente = document.querySelector('input[placeholder="Ex: Loja"]').value;
    const produto = document.querySelector('input[placeholder="Ex: Camiseta Básica Preta"]').value;
    const quantidade = document.querySelector('input[placeholder="Ex: 500"]').value;
    const dataEntrega = document.querySelector('input[type="date"]').value;
    const descricao = document.querySelector('input[placeholder*="Camiseta básica"]').value;

    // pegar valores selecionados
    const tecido = document.querySelector('.select[data-type="tecido"]').textContent;
    const aviamento = document.querySelector('.select[data-type="aviamento"]').textContent;
    const modelagem = document.querySelector('.select[data-type="modelagem"]').textContent;
    const beneficiamento = document.querySelector('.select[data-type="beneficiamento"]').textContent;
    const tipo = document.querySelector('.select[data-type="tipo"]').textContent;

    // ✅ Exibir confirmação
    alert("Ficha técnica salva com sucesso ");
    
    // ✅ aqui você pode enviar os dados para backend ou armazenar
    console.log({
      cliente,
      produto,
      quantidade,
      dataEntrega,
      descricao,
      tecido,
      aviamento,
      modelagem,
      beneficiamento,
      tipo
    });
  });