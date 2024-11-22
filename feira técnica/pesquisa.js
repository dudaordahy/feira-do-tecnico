// Lista de sugestões com URLs associadas
const suggestionsData = [
    { title: "O sonho perfeito", url: "sinópse1.html" },
    { title: "Super-Ação", url: "sinópse2.html" },
    { title: "O intruso", url: "sinópse3.html" },
    { title: "O segredo do Night Pub", url: "sinópse4.html" },
    { title: "O sumiço de Madá", url: "sinópse5.html" },
    { title: "O quarto", url: "sinópse6.html" },
    { title: "O mascarado", url: "sinópse7.html" },
    { title: "Advogado Ostr4", url: "sinópse8.html" },
    { title: "Parasomnomia", url: "sinópse9.html" },
    { title: "Sussuros do além", url: "sinópse10.html" },
    { title: "Chinelagem", url: "sinópse11.html" },
    { title: "Além da esperança", url: "sinópse12.html" },
    { title: "Onde está você Doob-Scoby?", url: "sinópse13.html" },
    { title: "O espantalho", url: "sinópse14.html" },
    { title: "Parque Gêrmania", url: "sinópse15.html" }
  ];
  
  // Referências aos elementos do DOM
  const searchInput = document.querySelector(".search-txt");
  const suggestionsBox = document.getElementById("suggestions");
  
  // Função para exibir sugestões
  searchInput.addEventListener("input", function () {
    const query = this.value.toLowerCase(); // Obtém o texto digitado e converte para minúsculas
    suggestionsBox.innerHTML = ""; // Limpa sugestões anteriores
  
    if (query.length > 0) {
      // Filtra sugestões que correspondem ao texto digitado
      const filteredSuggestions = suggestionsData.filter(item =>
        item.title.toLowerCase().includes(query)
      );
  
      // Exibe as sugestões na caixa
      filteredSuggestions.forEach(suggestion => {
        const suggestionElement = document.createElement("div");
        suggestionElement.textContent = suggestion.title;
        suggestionElement.classList.add("suggestion-item");
  
        // Adiciona evento de clique para redirecionar para a página do filme
        suggestionElement.addEventListener("click", () => {
          window.location.href = suggestion.url; // Redireciona para a URL do filme
        });
  
        suggestionsBox.appendChild(suggestionElement);
      });
    }
  });
  
  // Fecha as sugestões ao clicar fora
  document.addEventListener("click", function (event) {
    if (!searchInput.contains(event.target) && !suggestionsBox.contains(event.target)) {
      suggestionsBox.innerHTML = "";
    }
  });
  
  