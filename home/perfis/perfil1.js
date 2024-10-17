
window.onload = function (){
  var loucos = document.getElementById('show')    
  var louco = JSON.parse(localStorage.getItem (('perfis')))
    loucos.value = louco[0]
  
  var yearStorage = JSON.parse(localStorage.getItem(('idades')))
  console.log (yearStorage[0])
    
    
  var classYear = document.getElementById('paragrafo')
  var classYearTitle = document.getElementById('block')

  console.log(classYearTitle)
  console.log(classYear)
    
     
  let imagemPerfil = document.getElementById('imagem')
    imagemPerfil.src = louco[1]
    imagemPerfil.className = "images"
    
    switch (Number(yearStorage[0])) {
      case 1:
        classYearTitle.innerText = 'Crianças Pequenas'
        classYear.innerText = 'Mostrar títulos de classificações livres para este perfil.'
        break;
        case 2:
          classYearTitle.innerText = 'Crianças mais velhas'
          classYear.innerText = 'Mostrar títulos de classificações 10+ para este perfil.';
        break;
        case 3:
          classYearTitle.innerText = 'Adolescentes'
          classYear.innerText = 'Mostrar títulos de classificações 12+ para este perfil.';
        break;
        case 4:
          classYearTitle.innerText = 'Todas as classificações etárias'
          classYear.innerText = 'Mostrar títulos de todas as classificações etárias para este perfil.';
        break;
      }
    }



function editYearOld() {
  var yearBlock = document.getElementById('block')
  var year = document.getElementById('paragrafo')
  var yearStorage = JSON.parse(localStorage.getItem(('idades')))
  var controlYear = prompt('Qual a faixa etária do perfil: \n1 - Crianças Pequenas (classificação livre)\n2 - Crianças mais velhas (10+)\n3 - Adolescentes (12+) \n4 - Adultos (18+)')
    
    switch (Number(controlYear)) {
      case 1:
        yearBlock.innerHTML = 'Crianças Pequenas'
        year.innerHTML = 'Mostrar títulos de classificações livres para este perfil.';
        yearStorage[0] = '1'
        localStorage.setItem('idades', JSON.stringify(yearStorage));
        console.log(yearStorage)
      break;
      case 2:
        yearBlock.innerHTML = 'Crianças mais velhas'
        year.innerHTML = 'Mostrar títulos de classificações 10+ para este perfil.';
        yearStorage[0] = '2'
        localStorage.setItem('idades', JSON.stringify(yearStorage));
        console.log(yearStorage)
      break;
      case 3:
        yearBlock.innerHTML = 'Adolescentes'
        year.innerHTML = 'Mostrar títulos de classificações 12+ para este perfil.';
        yearStorage[0] = '3'
        localStorage.setItem('idades', JSON.stringify(yearStorage));
        console.log(yearStorage)
      break;
      case 4:
        yearBlock.innerHTML = 'Todas as classificações etárias'
        year.innerHTML = 'Mostrar títulos de todas as classificações etárias para este perfil.';
        yearStorage[0] = '4'
        localStorage.setItem('idades', JSON.stringify(yearStorage));
        console.log(yearStorage)
        break;
    }
  }


function changeImage() {
  let imagemPerfil = document.getElementById('imagem')
  var yearsKey = JSON.parse(localStorage.getItem(('idades')))
  console.log(yearsKey[0])
    switch(Number(yearsKey[0])){
      case 1: 
      var imagemPerfilTeste = prompt('Selecione a nova imagem: \n1 - kid-one\n2 - kid-two\n3 - monster-one\n4 - monster-two\n5 - robot')
        switch (Number(imagemPerfilTeste)) {
          case 1:
            imagemPerfilTeste = "../profile-images/kid-one.png"
            break;
          case 2:
            imagemPerfilTeste = "../profile-images/kid-two.png"
            break;
          case 3:
            imagemPerfilTeste = "../profile-images/monster-one.png"
           break;
         case 4:
           imagemPerfilTeste = "../profile-images/monster-two.png"
           break;
         case 5:
           imagemPerfilTeste = "../profile-images/robot.png"
           break;
        }
        if (imagemPerfilTeste) {
          imagemPerfil.src = imagemPerfilTeste
        }
      break;
      case 2:
        imagemPerfilTeste = prompt('Selecione a nova imagem:\n1 - boy-one\n2 - boy-two\n3 - girl-one\n4 - girl-two\n5- robot')
          switch (Number(imagemPerfilTeste)) {
            case 1:
              imagemPerfilTeste = "../profile-images/boy-one.png"
              break;
            case 2:
              imagemPerfilTeste = "../profile-images/boy-two.png"
              break;
            case 3:
              imagemPerfilTeste = "../profile-images/girl-one.png"
              break;
            case 4:
              imagemPerfilTeste = "../profile-images/girl-two.png"
              break;
            case 5:
              imagemPerfilTeste = "../profile-images/robot.png"
            break;
        }
        if (imagemPerfilTeste) {
          imagemPerfil.src = imagemPerfilTeste
        }
     break;
      case 3:
          imagemPerfilTeste = prompt('Selecione a nova imagem:\n1 - boy-one\n2 - boy-two\n3 - girl-one\n4 - girl-two')
            switch (Number(imagemPerfilTeste)) {
              case 1:
                imagemPerfilTeste = "../profile-images/boy-one.png"
                break;
              case 2:
                imagemPerfilTeste = "../profile-images/boy-two.png"
                break;
              case 3:
                imagemPerfilTeste = "../profile-images/girl-one.png"
                break;
              case 4:
                imagemPerfilTeste = "../profile-images/girl-two.png"
                break;
          }
          if (imagemPerfilTeste) {
            imagemPerfil.src = imagemPerfilTeste
          }
     break;
      case 4:
          imagemPerfilTeste = prompt('Selecione a nova imagem:\n1 - man-one\n2 - woman-one\n3 - robot')
            switch (Number(imagemPerfilTeste)) {
              case 1:
                imagemPerfilTeste = "../profile-images/man-one.png"
                break;
              case 2:
                imagemPerfilTeste = "../profile-images/woman-one.png"
                break;
             case 3:
               imagemPerfilTeste = "../profile-images/robot.png"
               break;
            }
      if (imagemPerfilTeste) {
        imagemPerfil.src = imagemPerfilTeste
      }
    console.log (imagemPerfil)
    break;
    }
      

/*  imagemPerfilTeste = prompt('Selecione a nova imagem:')
    if (imagemPerfilTeste) {
      imagemPerfil.src = imagemPerfilTeste
    }
  console.log (imagemPerfil)*/
}

function save() {
  var nameInput = document.getElementById('show')
  var imagemPerfil = document.getElementById('imagem')
  var perfilStorages = JSON.parse(localStorage.getItem(('perfis')))
  
  let cancelButton = document.getElementById('Cancelar') 
    cancelButton.className = 'posTouch'
    cancelButton.value = 'Retornar'
  
  let saveButton = document.getElementById('Salvar')
    saveButton.className = 'editarrr'
    perfilStorages[0] = nameInput.value
    perfilStorages[1] = imagemPerfil.src
    localStorage.setItem('perfis', JSON.stringify(perfilStorages));
    console.log (perfilStorages)

  let classYear = document.getElementById('paragrafo')
  let classYearTitle = document.getElementById('block')

  let yearStorage = JSON.parse(localStorage.getItem(('idades')))
  console.log (yearStorage)

    console.log(classYearTitle)
    console.log(classYear)


  
}


function cancel() {
  window.location.href = "../index.html";
}

function deleted() {
  var perfilStoragesDel = JSON.parse(localStorage.getItem(('perfis')))
  perfilStoragesDel[0] = 'New Perfil'
  perfilStoragesDel[1] = '../profile-images/new-perfil-image.png'
  console.log(perfilStoragesDel)
  localStorage.setItem('perfis', JSON.stringify(perfilStoragesDel));
  console.log(perfilStoragesDel)
  location.href='../src/gerenciar-copy.html'
}

/*


/*
/*
<h1>Editar Perfil</h1>
    
        <hr>
      <form action="submit">
        <label>Alterar Nome:</label>
        <p id="chama"></p>
        <input type="text" id="show" placeholder="ok">
      </form>
      */