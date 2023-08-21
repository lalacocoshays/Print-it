const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span> en boutique et en ligne </span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span> pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span> de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span> avec découpe laser sur mesure </span>"
	}
]

let curSlide = 0;
let maxSlide = slides.length - 1;

const nextSlide = document.querySelector(".arrowright");
nextSlide.addEventListener("click", function () {
	let curImage = document.querySelector(".banner-img");
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }

	curImage.setAttribute("src","./assets/images/slideshow/"+slides[curSlide].image);

	let curText = document.getElementById("titre");
	curText.innerHTML= slides[curSlide].tagLine

});

const prevSlide = document.querySelector(".arrowleft");
prevSlide.addEventListener("click", function () {
	let curImage = document.querySelector(".banner-img");
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }

	curImage.setAttribute("src","./assets/images/slideshow/"+slides[curSlide].image);
	let curText = document.getElementById("titre");
	curText.innerHTML= slides[curSlide].tagLine
});


const slider = slides[i];
const dots = slider.querySelector(".dots");
const sliderImgs = slider.querySelectorAll(".img");
const allDots = dots.querySelectorAll(".dot")
	for (let i = 0; i < slides.length; ++i) {
		const dot = document.createElement("div");
		dot.classList.add("dot");
		dots.appendChild(dot);
	}

	;
	allDots[0].classList.add("active-dot");


