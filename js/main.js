const nav = document.querySelector(".nav");
const navBtn = document.querySelector(".burger-btn");
const allNavItems = document.querySelectorAll(".nav__item");
const navBtnBars = document.querySelector(".burger-btn__bars");
const allSections = document.querySelectorAll("section");
const footerYear = document.querySelector(".footer__year");
console.log(allSections);
const handleNav = () => {
	nav.classList.toggle("nav--active");
	navBtnBars.classList.remove("black-bars-color");
	allNavItems.forEach((item) => {
		item.addEventListener("click", () => {
			nav.classList.remove("nav--active");
		});
	});
	handleNavItemAnimation();
};
const handleNavItemAnimation = () => {
	let delayTime = 0;

	allNavItems.forEach((item) => {
		item.classList.toggle("nav-items-animation");
		item.style.animationDelay = `.${delayTime}s`;
		delayTime++;
	});
};

const handleObserver = () => {
	const currentSection = window.scrollY;
	allSections.forEach((section) => {
		if (
			section.classList.contains("white-section") &&
			section.offsetTop <= currentSection + 60
		) {
			navBtnBars.classList.add("black-bars-color");
		} else if (
			!section.classList.contains("white-section") &&
			section.offsetTop <= currentSection + 60
		) {
			navBtnBars.classList.remove("black-bars-color");
		}
	});
};

const handleObserverNav = () => {
	const currentSection = window.scrollY;
	allSections.forEach((section) => {
		if (
			section.classList.contains("white-section") &&
			section.offsetTop <= currentSection + 60 &&
			!nav.classList.contains("nav--active")
		) {
			navBtnBars.classList.add("black-bars-color");
		} else if (
			!section.classList.contains("white-section") &&
			section.offsetTop <= currentSection + 60
			// nav.classList.contains("nav--active")
		) {
			navBtnBars.classList.remove("black-bars-color");
		}
	});
};

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};
handleCurrentYear();
navBtn.addEventListener("click", handleNav);
navBtn.addEventListener("click", handleObserverNav);
window.addEventListener("scroll", handleObserver);
