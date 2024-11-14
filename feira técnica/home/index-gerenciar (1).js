
window.onload = function (){
if (localStorage) {

    var saveStorage = JSON.parse(localStorage.getItem (('perfis')))
    var bloc = document.getElementById('bloco')    
    for (let i = 0; i < saveStorage.length; i++){

        if(i%2==0){
        var perfil1 = document.createElement('div')
        perfil1.className = 'perfis'
        

        var perfilImg = document.createElement('img')
        perfilImg.src = saveStorage[i+1]
        perfilImg.id = 'images'
            
        var textOne = document.createElement('span')
        textOne.innerText = saveStorage[i]
        

            

        var linkPerfil = `../Perfis/perfil${i+1}.html`
        
        var a = document.createElement('a')
        a.id = `id${i+1}`
        a.href = linkPerfil
         
            
        bloc.appendChild (perfil1)
        
        perfil1.appendChild(a)
        a.appendChild(perfilImg)
        
        a.appendChild(textOne)


}
}

    }
    }


     /*  bb.setAttribute(bbScript)
        
        var bbBody = document.createElement('body')
        var bbScript= document.createElement('script')
        bbScript.setAttribute('type', 'text/javascript');
        bbScript.text = 'alert("hello")'
        bbScript.src = `index-copy.js`;
        
        bbBody.appendChild (bbScript)*/


    
        /*
        var loucos = document.getElementById('show')
    var louco = JSON.parse(localStorage.getItem (('perfis')))
    var perfil1 = document.createElement('div')
    perfil1.className = 'perfis'
    loucos.value = louco[0] 
    let imagemPerfil = document.getElementById('imagem')
    imagemPerfil.src = louco[1]
    imagemPerfil.className = "images"
    */