$('.owl-carousel').owlCarousel({
    loop: true,
    nav: true,
    navText: [
        '<i class="fa fa-angle-left fa-2x"></i>',
        '<i class="fa fa-angle-right fa-2x"></i>'
    ],
    dots: false,
    mouseDrag: false,
    touchDrag: true,
    items: 1
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
    toggleEvent.addEventListener('click', () => {
        toggleEvent.classList.toggle('active');
    })
})

//APPEAR EFFECT

const postContent = document.querySelectorAll('.post-content');
const windowHeight = window.innerHeight;
const postLeftContentImage = document.querySelectorAll('.post-left .post-image');
const postRightContentImage = document.querySelectorAll('.post-right .post-image');

window.addEventListener('scroll',showAppearEffect);

function showAppearEffect() {
    for (var i = 0; i < postContent.length; i++){
        const postContentTop = postContent[i].getBoundingClientRect().top;
        if (postContentTop < windowHeight/1.2) {
            postContent[i].classList.add('post-content-appear');
        }
    }
    for(var i = 0; i < postLeftContentImage.length; i++){
        const postLeftContentImageLeft = postLeftContentImage[i].getBoundingClientRect().top;
        if (postLeftContentImageLeft < windowHeight/1) {
            postLeftContentImage[i].classList.add('post-image-left-appear');
        }
    }
    for(var i = 0; i < postRightContentImage.length; i++){
        const postRightContentImageRight = postRightContentImage[i].getBoundingClientRect().top;
        if (postRightContentImageRight < windowHeight/1) {
            postRightContentImage[i].classList.add('post-image-right-appear');
        }
    }
};

//PORTFOLIO NAV

const portfolioNavList = document.querySelectorAll('.portfolio-nav ul li a');
portfolioNavList.forEach(navList_element =>{
    navList_element.addEventListener("click", () =>{
        portfolioNavList.forEach(list_element => list_element.classList.remove('active'));
        navList_element.classList.add('active');
    })
})

const portfolioBox = document.querySelectorAll('.portfolio-box');
portfolioNavList.forEach(navList_element =>{
    navList_element.addEventListener("click", () =>{
        for(let i = 0; i < portfolioBox.length; i++){
            portfolioBox[i].classList.remove('active');
        }
        document.querySelector(navList_element.getAttribute('data-target')).classList.add('active');
    })
})

//NAVBAR MENU ACTIVE

const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('.nav-menu ul.nav a.nav-link');

navLinks.forEach(link => {
    if(link.href.includes(`${activePage}`)){
        link.classList.add('active');
    }
})
