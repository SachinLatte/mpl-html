//homepage main slider
let owlHero = $("#owlHero"); 
owlHero.owlCarousel({
    items:1,
    lazyLoad:true,
    loop:true,
    margin: 0,
    nav: true,
    dots:true,
    autoplay:true,
    responsiveRefreshRate: 10,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        768:{
            items:1,
        },
        1280:{
            items:1,
            
        },
        1445:{
            items:1,
        }
    }
});

//governing council slider
$('#governing-council-carousel').owlCarousel( {
    loop: true,
    center: true,
    items: 3,
    margin: 40,
    autoplay: true,
    dots:true,
    nav:false,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1170: {
            items: 3
        }
    }
});

//home team logo slider
$('#home-team-carousel').owlCarousel( {
    loop: true,
    center: true,
    items: 5,
    margin: 40,
    autoplay: true,
    dots:true,
    nav:false,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1170: {
            items: 5
        }
    }
});


