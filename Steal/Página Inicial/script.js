document.addEventListener('DOMContentLoaded', function () {
    // Obtenha os elementos img da classe ImgSec
    var imgElements = document.querySelectorAll('.ImgSec');

    // Obtenha o elemento com a classe btnII
    var btnII = document.querySelector('.btnII');
    var btnI = document.querySelector('.btnI');

    // Adicione um evento de clique a cada elemento img
    imgElements.forEach(function (imgElement) {
        imgElement.addEventListener('click', function () {
            // Altere a imagem do elemento com a classe btnII para a imagem 
            btnII.style.display = "flex";
            btnII.src = imgElement.src;
            btnI.style.display = "none";
        });
    });
});

function VoltarVid(){
    var btnII = document.querySelector('.btnII');
    var btnI = document.querySelector('.btnI');

    btnII.style.display = "none";
    btnI.style.display = "flex";
}