let personagem = document.querySelector('#personagem')
let cano = document.querySelector('#cano')

document.addEventListener("keydown", function(e) {
    console.log(e)
    if(e.key === " " || e.key == "ArrowUp") {
        pular()
    }
});

function pular(){
    if(personagem.classList != 'animar'){
        personagem.classList.add('animar')
    }
    setTimeout(function(){
        personagem.classList.remove('animar')
    },500)
}
 var testarColisao = setInterval(function(){
    var topoPersonagem = parseInt(
        window.getComputedStyle(personagem).getPropertyValue('top')
    )
    var EsquerdaCano = parseInt(
        window.getComputedStyle(cano).getPropertyValue('left')
    )
    console.log(cano)
    if (EsquerdaCano < 250 && EsquerdaCano > 150 && topoPersonagem >= 480) {
        cano.style.animation = "none"
        cano.style.display = 'none'
        alert('Você Perdeu')
    }
 },10)