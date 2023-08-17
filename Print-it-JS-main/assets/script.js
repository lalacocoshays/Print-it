const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let currentSlide= 0;
let lastSlide = slides.length -1;

const prevSlide = document.querySelector(".arrow_left");
prevSlide.addEventListener("click", ChangeSlide(-1));

const nextSlide = document.querySelector(".arrow_right");
nextSlide.addEventListener("click", ChangeSlide(1));


function ChangeSlide (sens) {
				currentSlide = currentSlide + sens;
				if (currentSlide < 0)
						currentSlide = slides.legnth -1;
				if (currentSlide > slides.length -1)
				currentSlide = 0;
			document.getElementById("slides").src =slides[currentSlide];
}