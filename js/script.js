$(document).ready(function() {
$('.main-content .owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: [
        "<img src='./images/left.svg'>",
        "<img src='./images/right.svg'>"
    ],
    navContainer: ' .custom-nav',
    responsive:{
        0:{
            items: 1
        },
        600:{
            items: 2
        },
        1000:{
            items: 3
        }
    }
});
$('.arrivals .owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: [
        "<img src='./images/left.svg'>",
        "<img src='./images/right.svg'>"
    ],
    navContainer: ' .arrivals-nav',
    responsive:{
        0:{
            items: 1
        },
        600:{
            items: 2
        },
        1000:{
            items: 3
        }
    }
});
$('.stories .owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: [
        "<img src='./images/left.svg'>",
        "<img src='./images/right.svg'>"
    ],
    navContainer: ' .stories-nav',
    responsive:{
        0:{
            items: 1
        },
        600:{
            items: 2
        },
        1000:{
            items: 3
        }
    }
});
});