// Inicialize o carrossel
$('.carousel').carousel()

// Adicione um evento de clique para pausar o carrossel quando o mouse estiver sobre ele
$('.carousel').hover(
  function () {
    $(this).carousel('pause')
  },
  function () {
    $(this).carousel('cycle')
  }
)

// Adicione um evento de clique para avançar/retroceder o carrossel com as setas do teclado
$(document).keydown(function (e) {
  if (e.keyCode == 37) {
    $('.carousel').carousel('prev')
  } else if (e.keyCode == 39) {
    $('.carousel').carousel('next')
  }
})
// ampliar e reduzir as imagens do carrossel
function aumentarImagem(img) {
  img.style.transform = 'scale(1.2)'
}

function reduzirImagem(img) {
  img.style.transform = 'scale(1)'
}
