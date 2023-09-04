"use strict";

// Menu toggle


const menudocumentClick = (e) => {
	const targetItem = e.target;
	if (targetItem.closest(".menu")) {
		document.documentElement.classList.toggle("menu-opened");
	}
}

document.addEventListener("click", menudocumentClick);

// Slider - code

const slider = document.querySelector(".slider");

let pressed = false,
	startX;

slider.addEventListener("mousedown", (e) => {
	pressed = true;
	startX = e.clientX;
	e.target.style.cursor = "grabbing";
	e.preventDefault();
});

window.addEventListener("mouseup", () => {
	pressed = false;
});

slider.addEventListener("mouseleave", () => {
	pressed = false;
});

slider.addEventListener("mousemove", function (e) {
	if (!pressed) return;
	this.scrollLeft += 5 * (startX - e.clientX);
});

// IntersectionObserver

const sections = document.querySelectorAll("section");
sections.forEach(section => {
	section.style.transform = 'translateX(-100%)'
});
const options = {
	rootMargin: "0px 300px",
};

const observer = new IntersectionObserver(function (entires, observer) {
	entires.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.style.transition = "transform 1s ease";
			entry.target.style.transform = "translateX(0%)";
		}
	});
}, options);

sections.forEach((section) => {
	observer.observe(section);
});
