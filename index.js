// Initialize the carousel
$('.carousel').carousel()

// Add a click event to pause the carousel when the mouse is over it
$('.carousel').hover(
  function () {
    $(this).carousel('pause')
  },
  function () {
    $(this).carousel('cycle')
  }
)

// add a click event to forward/backward the carousel with keyboard arrows
$(document).keydown(function (e) {
  if (e.keyCode == 37) {
    $('.carousel').carousel('prev')
  } else if (e.keyCode == 39) {
    $('.carousel').carousel('next')
  }
})
// zoom in and out of carousel images
function aumentarImagem(img) {
  img.style.transform = 'scale(1.2)'
}

function reduzirImagem(img) {
  img.style.transform = 'scale(1)'
}
