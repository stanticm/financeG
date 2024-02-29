window.onscroll = function () {
	stickyHeader();
};

// sticky header
var header = document.getElementById('header');

var sticky = header.offsetTop;

function stickyHeader() {
	if (window.scrollY > sticky) {
		header.classList.add('sticky');
	} else {
		header.classList.remove('sticky');
	}
}

// mobile menu
document.addEventListener('DOMContentLoaded', function () {
	const mobileMenuButton = document.getElementById('mobile-menu-icon');
	const mobileMenuButtonClose = document.getElementById(
		'cheeseburger-menu-close'
	);
	const mobileMenu = document.getElementById('cheeseburger-menu');
	const overlay = document.getElementById('overlay');

	mobileMenuButton.addEventListener('click', function () {
		mobileMenu.classList.toggle('open');
		overlay.style.display = 'block';
	});

	mobileMenuButtonClose.addEventListener('click', function () {
		mobileMenu.classList.remove('open');
		overlay.style.display = 'none';
	});
});

// Get the modal and buttons
const openModalButton = document.getElementById('open-modal');
const closeModalButton = document.getElementById('close-button');
const modal = document.getElementById('languages');

function openModal() {
	modal.style.display = 'flex';
}

function closeModal() {
	modal.style.display = 'none';
}

openModalButton.addEventListener('click', openModal);

closeModalButton.addEventListener('click', closeModal);

window.addEventListener('click', (event) => {
	if (event.target === modal) {
		closeModal();
	}
});

// Get all elements with the slide-in class
const slideInElements = document.querySelectorAll('.slide-in');

function triggerSlide() {
	slideInElements.forEach((element) => {
		element.classList.add('active');
	});
}

window.addEventListener('load', () => {
	setTimeout(triggerSlide, 700);
});

// // Get all elements with the slide-in class, including the image
// const zoomInElements = document.querySelectorAll('.zoom-in-image');

// // Function to add the active class to trigger the animation
// function triggerAnimation() {
// 	zoomInElements.forEach((element) => {
// 		element.classList.add('active');
// 	});
// }

// Trigger the animation after a 2-second delay when the page loads
window.addEventListener('load', () => {
	setTimeout(triggerAnimation, 800);
});

// Function to handle the animation when an element enters the viewport
function handleIntersection(entries, observer) {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add('animate');
			observer.unobserve(entry.target); // Stop observing once animated
		}
	});
}

// Create an Intersection Observer instance
const observer = new IntersectionObserver(handleIntersection, {
	root: null, // Use the viewport as the root
	rootMargin: '0px', // No margin around the viewport
	threshold: 0.2, // Trigger animation when 50% of the element is visible
});

// // Get all elements with the slide-up class
// const slideUpElements = document.querySelectorAll('.slide-up');

// // Observe each element to trigger the animation
// slideUpElements.forEach((element) => {
// 	observer.observe(element);
// });
// s;
