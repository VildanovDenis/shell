var numberOfSlides = 3;
var slideWidth = 954;

var carousel = document.querySelector(".carousel__wrapper");
var paginator = document.querySelector(".slider-paginator");
var prev = paginator.querySelector(".slider-paginator__button-prev");
var next = paginator.querySelector(".slider-paginator__button-next");

next.addEventListener("click", function(evt) {
  evt.preventDefault();
  
  var prevPosition = parseInt(carousel.style.transform.slice(11)) || 0;
  if (prevPosition != (-(slideWidth * numberOfSlides))) {
    carousel.style.transform = "TranslateX("+ (prevPosition - slideWidth) +"px)"
  } else {}
})

prev.addEventListener("click", function(evt) {
  evt.preventDefault();

  var prevPosition = parseInt(carousel.style.transform.slice(11)) || 0;
  if (prevPosition != 0) {
    carousel.style.transform = "TranslateX("+ (prevPosition + slideWidth) +"px)";
  } else {}
})