$('.owl-carousel').owlCarousel({
    loop:true,
    nav:true,
    navText: [
        '<i class="fa fa-angle-left fa-2x"></i>',
        '<i class="fa fa-angle-right fa-2x"></i>'
    ],
    dots: false,
    mouseDrag: false,
    touchDrag: true,
    items:1
})

//NAVBAR

const burger = document.querySelector('.trigger-menu');
const closeCurcor = document.querySelector('.close-menu');
const subMenu = document.querySelector('.new-sub-menu');

function openMenu() {
	burger.style.display = "none";
	closeCurcor.style.display = "block";
	subMenu.style.display = "block";
}

function closeMenu() {
	burger.style.display = "block";
	closeCurcor.style.display = "none";
	subMenu.style.display = "none";
}

const subMenuLink = document.querySelectorAll('a.new-nav-link');
subMenuLink.forEach(event => {
	event.addEventListener('click', closeMenu)
})

//FAQ TOGGLE

const faqQuestions = document.querySelectorAll('.faq-questions');

faqQuestions.forEach(toggleEvent => {
	toggleEvent.addEventListener('click', () =>{
		faqQuestions.forEach(event => event.classList.remove('active'));
		toggleEvent.classList.add('active');
	})
})