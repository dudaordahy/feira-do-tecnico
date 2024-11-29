window.onload = function () {
    if (localStorage) {
        // Carregar perfis do localStorage
        var saveStorage = JSON.parse(localStorage.getItem('perfis')) || [];

        console.log(saveStorage);

        // Iterar pelos perfis armazenados
        saveStorage.forEach((perfilData, index) => {

            // Criar a imagem do perfil
            var perfilImg = document.getElementById('perfilUsuario');
            perfilImg.src = './home/'+perfilData.photo;
            perfilImg.className = 'images';
          
        });
    }
};
