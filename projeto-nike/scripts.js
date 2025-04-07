let body = document.querySelector("body")
let tenis = document.querySelector(".imagem-tenis")

function mudarVisual(cor, imagens){
    tenis.classList.add("troca-efeito")

    body.style.background = cor
    tenis.src = imagens

    setTimeout(() => {
        tenis.src = imagens
        tenis.classList.remove("troca-efeito")
    }, 500);

    
}

