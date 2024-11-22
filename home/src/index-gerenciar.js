window.onload = function () {
    if (localStorage) {
        // Carregar perfis do localStorage
        var saveStorage = JSON.parse(localStorage.getItem('perfis')) || [];
        var bloc = document.getElementById('bloco');

        // Iterar pelos perfis armazenados
        saveStorage.forEach((perfilData, index) => {
            // Criar o contêiner para cada perfil
            var perfil1 = document.createElement('div');
            perfil1.className = 'perfis';

            // Criar a imagem do perfil
            var perfilImg = document.createElement('img');
            perfilImg.src = perfilData.photo;
            perfilImg.className = 'images';

            // Criar o nome do perfil
            var textOne = document.createElement('span');
            textOne.innerText = perfilData.name;

            // Criar o link para o perfil (opcional)
            var linkPerfil = `../Perfis/perfil${index + 1}.html`;
            var a = document.createElement('a');
            a.id = `id${index + 1}`;
            a.href = linkPerfil;

            // Adicionar elementos ao DOM
            bloc.appendChild(perfil1);
            perfil1.appendChild(a);
            a.appendChild(perfilImg);
            a.appendChild(textOne);
        });
    }
};
