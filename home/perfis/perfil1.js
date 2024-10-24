window.onload = function () {
  var loucos = document.getElementById('show');
  var louco = JSON.parse(localStorage.getItem(('perfis')));
  loucos.value = louco[0];
    
  let imagemPerfil = document.getElementById('imagem');
  imagemPerfil.src = louco[1];
  imagemPerfil.className = "images";
}

function editYearOld() {
  // Função removida, pois não há mais necessidade de editar a faixa etária
}

function changeImage() {
  let imagemPerfil = document.getElementById('imagem');
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
  var perfilStorages = JSON.parse(localStorage.getItem(('perfis')));
  
  let cancelButton = document.getElementById('Cancelar');
  cancelButton.className = 'posTouch';
  cancelButton.value = 'Retornar';
  
  let saveButton = document.getElementById('Salvar');
  saveButton.className = 'editarrr';
  
  perfilStorages[0] = nameInput.value;
  perfilStorages[1] = imagemPerfil.src;
  
  localStorage.setItem('perfis', JSON.stringify(perfilStorages));
}

function cancel() {
  window.location.href = "../index.html";
}

function deleted() {
  var perfilStoragesDel = JSON.parse(localStorage.getItem(('perfis')));
  perfilStoragesDel[0] = 'New Perfil';
  perfilStoragesDel[1] = '../profile-images/new-perfil-image.png';
  localStorage.setItem('perfis', JSON.stringify(perfilStoragesDel));
  location.href = '../src/gerenciar-copy.html';
