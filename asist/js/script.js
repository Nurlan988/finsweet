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
const windowHeight = window.innerHeight*1.5;

const postLeftContentImage = document.querySelectorAll('.post-left .post-image');
const postRightContentImage = document.querySelectorAll('.post-right .post-image');

window.addEventListener('scroll',showAppearEffect);

function showAppearEffect() {
    for (var i = 0; i < postContent.length; i++){
        const postContentTop = postContent[i].getBoundingClientRect().top;
        if (postContentTop < windowHeight/1.3) {
            postContent[i].classList.add('post-content-appear');
        } else{
            postContent[i].classList.remove('post-content-appear');
        }
    }
    // for(var i = 0; i < postLeftContentImage.length; i++){
    //     const postLeftContentImageLeft = postLeftContentImage[i].getBoundingClientRect().left - windowHeight*1.1;
    //     console.log(postLeftContentImageLeft);
    //     if (postLeftContentImageLeft < 0) {
    //         postLeftContentImage[i].classList.add('post-image-left-appear');
    //     }else{
    //         postLeftContentImage[i].classList.remove('post-image-left-appear');
    //     }
    // }
    // for(var i = 0; i < postRightContentImage.length; i++){
    //     const postRightContentImageRight = postRightContentImage[i].getBoundingClientRect().left - windowHeight*2;
    //     console.log(postRightContentImageRight);
    //     if (postRightContentImageRight < 0) {
    //         postRightContentImage[i].classList.add('post-image-left-appear');
    //     }else{
    //         postRightContentImage[i].classList.remove('post-image-left-appear');
    //     }
    // }
};
showAppearEffect()



