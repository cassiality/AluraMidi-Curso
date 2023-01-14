//função que chama o som
function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento != null && elemento.localName === 'audio') {
        elemento.play();
    }
    else{
        console.log('Elemento não encontrado ou seletor inválido');
    }

}

//lista de teclas recebe a selação de teclas (o que possui id tecla html)
const listaDeTeclas = document.querySelectorAll('.tecla');

//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    //tecla recebe lista de teclas, contador conta indice
    const tecla = listaDeTeclas[contador];
    //instrumento recebe valor de tecla mais o segundo valor de posição id html tecla "tecla_algumacoisa"
    const instrumento = tecla.classList[1];
    //template string
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function() {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function(evento) {

        if (evento.code ==='Space' || evento.code ==='Enter') {
            tecla.classList.add('ativa');
        }

    }

    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    }

}
