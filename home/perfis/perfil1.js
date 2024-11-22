window.onload = function () {
  var perfilStorage = JSON.parse(localStorage.getItem('perfis')) || [];

  if (perfilStorage.length > 0) {
      var nameInput = document.getElementById('show');
      var imagemPerfil = document.getElementById('imagem');

      // Preencher os dados do perfil atual
      nameInput.value = perfilStorage[0].name;
      imagemPerfil.src = perfilStorage[0].photo;
      imagemPerfil.className = "images";
  }
};

function changeImage() {
  var imagemPerfil = document.getElementById('imagem');
  var imagemPerfilTeste = prompt('Selecione a nova imagem:\n1 - kid-one\n2 - kid-two\n3 - monster-one\n4 - monster-two\n5 - robot');

  switch (Number(imagemPerfilTeste)) {
      case 1:
          imagemPerfilTeste = "../profile-images/kid-one.png";
          break;
      case 2:
          imagemPerfilTeste = "../profile-images/kid-two.png";
          break;
      case 3:
          imagemPerfilTeste = "../profile-images/monster-one.png";
          break;
      case 4:
          imagemPerfilTeste = "../profile-images/monster-two.png";
          break;
      case 5:
          imagemPerfilTeste = "../profile-images/robot.png";
          break;
  }

  if (imagemPerfilTeste) {
      imagemPerfil.src = imagemPerfilTeste;
  }
}

function save() {
  var nameInput = document.getElementById('show');
  var imagemPerfil = document.getElementById('imagem');
  var perfilStorage = JSON.parse(localStorage.getItem('perfis')) || [];

  if (perfilStorage.length > 0) {
      perfilStorage[0] = {
          name: nameInput.value,
          photo: imagemPerfil.src
      };
  } else {
      perfilStorage.push({
          name: nameInput.value,
          photo: imagemPerfil.src
      });
  }

  localStorage.setItem('perfis', JSON.stringify(perfilStorage));
}

function cancel() {
  window.location.href = "../index.html";
}

function deleted() {
  var perfilStorage = JSON.parse(localStorage.getItem('perfis')) || [];
  if (perfilStorage.length > 0) {
      perfilStorage[0] = {
          name: 'Novo Perfil',
          photo: '../profile-images/new-perfil-image.png'
      };
  }

  localStorage.setItem('perfis', JSON.stringify(perfilStorage));
}
