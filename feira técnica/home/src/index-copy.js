class Perfis {
    constructor(name, photo) {
        this.name = name;
        this.photo = photo;
    }
}

let perfil = [];
let years = [];
var one = 0;


window.onload = function() {
    localStorage.clear();
    if (localStorage) {
        let olderPerfils = JSON.parse(localStorage.getItem('perfis')) || [];

        if (olderPerfils.length > 0) {
            olderPerfils.forEach((perfilData, index) => {
                let newe = document.createElement("div");
                newe.id = `foto${index}`;
                newe.className = 'perfis';

                let show = document.createElement('img');
                show.src = perfilData.photo;
                show.className = 'images';

                let text1 = document.createElement('span');
                text1.innerHTML = perfilData.name;

                newe.appendChild(show);
                newe.appendChild(text1);

                const botaoo = document.getElementById('agua');
                let nomes = document.getElementById('botdiv');
                botaoo.insertBefore(newe, nomes);
            });
        }

        let newPerfilButton = document.getElementById('bot1');
        let perfilManage = document.getElementById('botdiv2');
        if (olderPerfils.length > 9) {
            newPerfilButton.style.display = 'none';
            perfilManage.style.marginLeft = '-45px';
        }
    }
};

function namee() {
    let nome = prompt("Qual o nome do usuário?");
    let imagemPerfilTeste = prompt('Selecione a nova imagem:\n1 - kid-one\n2 - kid-two\n3 - monster-one\n4 - monster-two\n5 - robot');

    switch (Number(imagemPerfilTeste)) {
        case 1:
            imagemPerfilTeste = "profile-images/kid-one.png";
            break;
        case 2:
            imagemPerfilTeste = "profile-images/kid-two.png";
            break;
        case 3:
            imagemPerfilTeste = "profile-images/monster-one.png";
            break;
        case 4:
            imagemPerfilTeste = "profile-images/monster-two.png";
            break;
        case 5:
            imagemPerfilTeste = "profile-images/robot.png";
            break;
        default:
            alert("Opção inválida");
            return;
    }

    if (nome && imagemPerfilTeste) {
        let novoPerfil = new Perfis(nome, imagemPerfilTeste);
        perfil.push(novoPerfil);

        let newe = document.createElement("div");
        newe.id = `foto${perfil.length}`;
        newe.className = 'perfis';

        let link = document.createElement("a");
        link.href = 'pagina1.html'; // Substitua pela URL desejada
        newe.className = 'link1'

        let show = document.createElement('img');
        show.src = imagemPerfilTeste;
        show.className = 'images';

        let text1 = document.createElement('span');
        text1.innerHTML = nome;

        const botaoo = document.getElementById('agua');
        let nomes = document.getElementById('botdiv');
        botaoo.insertBefore(newe, nomes);

        newe.appendChild(show);
        newe.appendChild(link);
        newe.appendChild(text1);

        let newPerfilButton = document.getElementById('bot1');
        let perfilManage = document.getElementById('botdiv2');

        if (perfil.length > 9) {
            newPerfilButton.style.display = 'none';
            perfilManage.style.marginLeft = '55px';
        }

        // Atualiza o localStorage com o novo perfil
        localStorage.setItem('perfis', JSON.stringify(perfil));
    }
}
