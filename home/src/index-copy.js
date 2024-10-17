

class Perfis {
    constructor (name, photo) {
        this.name = name,
        this.photo = photo
    }
}

let perfil = []
let years = []
var one = 0


    window.onload = function () {
        if (localStorage){
            var olderPerfils = JSON.parse(localStorage.getItem(('perfis')))
            console.log (olderPerfils.length)
            for (let i = 0; i < olderPerfils.length; i++){
               if (i%2==0){
                console.log (olderPerfils[i+1])
                    let newe = document.createElement ("div")
                    newe.id = 'foto1'
                    newe.className = 'perfis'
                    newe.href = '/src/browse.html' 
                    
                    let show = document.createElement('img')
                    show.src = olderPerfils[i+1]
                    show.className = 'images'
                    
                    let text1 = document.createElement('span')
                    text1.innerHTML = olderPerfils[i]

                    let a = document.createElement('a')
                    a.id = `id${i+1}`
                    a.href = '/src/browse.html'

                    newe.appendChild(a)
                    a.appendChild(show)  
                    a.appendChild(text1)                   
                    

                    const botaoo = document.getElementById('agua')
                    let nomes = document.getElementById('botdiv')
                    
                    botaoo.insertBefore(newe,nomes)
                    
                    
                }

            
            }
        }
        let newPerfilButton = document.getElementById('bot1')
        let perfilManage = document.getElementById('botdiv2')
        if (olderPerfils.length > 9){
            newPerfilButton.style.display = 'none'
            perfilManage.style.marginLeft = '-45px'
        }

}   




function namee (){
    
    var data
    let nome = prompt("Qual o nome do usuário?")
    let yearOld = prompt ("Qual a faixa etária do perfil?\n1 - Crianças pequenas\n2 - Crianças mais velhas (10+)\n3 - Adolescentes (12+)\n4 - Adulto (livre)")
        switch (Number(yearOld)) {
            case 1:
                var chooseImage = prompt("Escolha a foto de perfil:\n1 - kid-one\n2 - kid-two\n3 - monster-one\n4 - monster-two\n5 - robot")
                    switch (Number(chooseImage)){
                        case 1:
                            data = "../profile-images/kid-one.png"
                            break;
                        case 2:
                            data = "../profile-images/kid-two.png"
                            break;
                        case 3:
                            data = "../profile-images/monster-one.png"
                            break;
                        case 4:
                            data = "../profile-images/monster-two.png"
                            break;
                        case 5:
                            data = "../profile-images/robot.png"
                            break;
                    }
                break;
            case 2:
                chooseImage = prompt("Escolha a foto de perfil:\n1 - boy-one\n2 - boy-two\n3 - girl-one\n4 - girl-two\n5- robot")
                   switch (Number(chooseImage)){
                        case 1:
                            data = "../profile-images/boy-one.png"
                            break;
                        case 2:
                            data = "../profile-images/boy-two.png"
                            break;
                        case 3:
                            data = "../profile-images/girl-one.png"
                            break;
                        case 4:
                            data = "../profile-images/girl-two.png"
                            break;
                        case 5:
                            data = "../profile-images/robot.png"
                            break;
                }
                break;
            case 3:
                chooseImage = prompt("Escolha a foto de perfil:\n1 - boy-one\n2 - boy-two\n3 - girl-one\n4 - girl-two")
                switch (Number(chooseImage)){
                    case 1:
                        data = "../profile-images/boy-one.png"
                        break;
                    case 2:
                        data = "../profile-images/boy-two.png"
                        break;
                    case 3:
                        data = "../profile-images/girl-one.png"
                        break;
                    case 4:
                        data = "../profile-images/girl-two.png"
                        break;
            }
            break;
            case 4:
                chooseImage = prompt("Escolha a foto de perfil:\n1 - man-one\n2 - woman-one\n3 - robot")
                switch (Number(chooseImage)){
                    case 1:
                        data = "../profile-images/man-one.png"
                        break;
                    case 2:
                        data = "../profile-images/woman-one.png"
                        break;
                    case 3:
                        data = "../profile-images/robot.png"
                        break;
            }
            break;
            default:
                alert = ("opção invalida")
        }

    
console.log (perfil)
    if (nome && data) {
        perfil.push (nome, data)
        years.push (yearOld)
    let newe = document.createElement ("div")
    newe.id = 'foto1'
    newe.className = 'perfis'
    
    let show = document.createElement('img')
    show.src = data
    show.className = 'images'
   
    let text1 = document.createElement('span')
    text1.innerHTML = nome
    const botaoo = document.getElementById('agua')
    let nomes = document.getElementById('botdiv')
    let newPerfilButton = document.getElementById('bot1')
    let perfilManage = document.getElementById('botdiv2')

    botaoo.insertBefore(newe,nomes)
    newe.appendChild(show)   
    newe.appendChild(text1)
        console.log(perfil)
    console.log (perfil.length)
    if (perfil.length > 9){
        newPerfilButton.style.display = 'none'
        perfilManage.style.marginLeft = '55px'
    }

        
    localStorage.setItem('perfis', JSON.stringify(perfil));
    localStorage.setItem('idades', JSON.stringify(years))
}
    
}


