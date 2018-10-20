var numberOfSlides = 3;
var slideTranslate = 954;

var carousel = document.querySelector(".carousel__wrapper");
var paginator = document.querySelector(".slider-paginator");
var prev = paginator.querySelector(".slider-paginator__button-prev");
var next = paginator.querySelector(".slider-paginator__button-next");
var sliderButtons = paginator.querySelector(".slider-paginator__buttons");

var firstButton = sliderButtons.querySelector(".first-slide");
var secondButton = sliderButtons.querySelector(".second-slide");
var thirdButton = sliderButtons.querySelector(".third-slide");
var fourthButton = sliderButtons.querySelector(".fourth-slide");


// Карусель


next.addEventListener("click", function(evt) {
  evt.preventDefault();

  var prevPosition = parseInt(carousel.style.transform.slice(11)) || 0;
  var oldButton = paginator.querySelector(".active-slide-button");
  var newButton = paginator.querySelector(".active-slide-button + .slider-paginator__button-slide-number");
  if (prevPosition != (-(slideTranslate * numberOfSlides))) {
    carousel.style.transform = "TranslateX("+ (prevPosition - slideTranslate) +"px)";
    oldButton.classList.remove("active-slide-button");
    newButton.classList.add("active-slide-button");
  } else {}
})

prev.addEventListener("click", function(evt) {
  evt.preventDefault();

  var prevPosition = parseInt(carousel.style.transform.slice(11)) || 0;
  var childList = sliderButtons.children;
  if (prevPosition != 0) {
    carousel.style.transform = "TranslateX("+ (prevPosition + slideTranslate) +"px)";
    oldButton.classList.remove("active-slide-button");
    newButton.classList.add("active-slide-button");
  } else {}
})


// Слайдер


firstButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  console.log("123");

  var oldButton = sliderButtons.querySelector(".active-slide-button");
  oldButton.classList.remove("active-slide-button");
  firstButton.classList.add("active-slide-button");
  carousel.style.transform = "TranslateX("+ (slideTranslate * 0) +"px)";
})

secondButton.addEventListener("click", function(evt) {
  evt.preventDefault();

  var oldButton = sliderButtons.querySelector(".active-slide-button");
  oldButton.classList.remove("active-slide-button");
  secondButton.classList.add("active-slide-button");
  carousel.style.transform = "TranslateX(-"+ (slideTranslate * 1) +"px)";
})

thirdButton.addEventListener("click", function(evt) {
  evt.preventDefault();

  var oldButton = sliderButtons.querySelector(".active-slide-button");
  oldButton.classList.remove("active-slide-button");
  thirdButton.classList.add("active-slide-button");
  carousel.style.transform = "TranslateX(-"+ (slideTranslate * 2) +"px)";
})

fourthButton.addEventListener("click", function(evt) {
  evt.preventDefault();

  var oldButton = sliderButtons.querySelector(".active-slide-button");
  oldButton.classList.remove("active-slide-button");
  fourthButton.classList.add("active-slide-button");
  carousel.style.transform = "TranslateX(-"+ (slideTranslate * 3) +"px)";
})

