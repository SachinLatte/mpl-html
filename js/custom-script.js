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
        991: {
            items: 3
        }
    }
});

//home team logo slider
$('#home-team-carousel').owlCarousel( {
    loop: true,
    // center: true,
    items: 4,
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
            items: 3
        },
        991: {
            items: 4
        }
    }
});


//home player slider
$('#home-player-carousel').owlCarousel( {
    loop: true,
    // center: true,
    items: 4,
    margin: 40,
    autoplay: true,
    dots:true,
    nav:true,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        991: {
            items: 3
        },
        1170: {
            items: 4
        }
    }
});

//scroll to top button
let topBtn = $('#top-button');
$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    topBtn.addClass('show');
  } else {
    topBtn.removeClass('show');
  }
});
topBtn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

//Photo Lightgallery
    $(document).ready(function() {
        $('.photo-lightgallery').each(function(i, v) {
          $(v).lightGallery({
            thumbnail: false
          });
        });
      });


 //Active navigation class
//   (function () {
//     var current = location.pathname.split('/')[1];
//     if (current === "") return;
//     var menuItems = document.querySelectorAll('.main-menubar ul li');
//     for (var i = 0, len = menuItems.length; i < len; i++) {
//         if (menuItems[i].getAttribute("href").indexOf(current) !== -1) {
//             menuItems[i].className += "active";
//         }
//     }
// })();

const currentLocation = location.href;
const menuItem = document.querySelectorAll('.main-menubar ul li');
const menuLength = menuItem.length
for (let i = 0; i<menuLength; i++){
if(menuitem[i].href === currentLocation){
menuItem[i].className = "active"
}
}



