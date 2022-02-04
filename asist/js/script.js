$('.owl-carousel').owlCarousel({
    loop:true,
    nav:true,
    navText: [
        '<i class="fa fa-angle-left fa-2x"></i>',
        '<i class="fa fa-angle-right fa-2x"></i>'
    ],
    dots: false,
    mouseDrag: false,
    touchDrag: false,
    items:1,
    responsive : {
        0: {
            touchDrag: true,
        },
        1024: {
            touchDrag: false,
        }
    }
})