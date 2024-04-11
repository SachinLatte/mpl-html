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


