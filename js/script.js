$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop:true,  
        nav:true, 
        navContainer: '.slider',
        navText: ["<img src='./images/left.svg'>","<img src='./images/right.svg'>"],
        responsive:{ 
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
});