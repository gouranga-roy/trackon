$(document).ready(function () {
    $(window).on("scroll", function(){
        var scrollPosition = $(this).scrollTop();

        if ( scrollPosition > 250 ) {
            $(".main_header").addClass("trk_header_sticky");
        } else {
            $(".main_header").removeClass("trk_header_sticky");
        }
    });
    var show_btn=$('#myModal');
    //$("#testmodal").modal('show');
    
      show_btn.click(function(){
        $("#myInput").modal('show');
      })
    
    // Client Slider
    $('.client-slider02').owlCarousel({
        items:6,
        loop:true,
        margin:60,
        autoplay:true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:6
            }
        }
    })
})
window.addEventListener("scroll", function () {
    let scrollPosition = window.pageYOffset;

    // Hero section parallax
    const heroParallax = document.getElementById("hero_parallax");
    if (heroParallax) {
        let heroOffset = heroParallax.offsetTop;
        heroParallax.style.backgroundPositionY = (scrollPosition - heroOffset) * 0.7 + "px";
    }

    // Review section parallax
    const revParallax = document.getElementById("review_parallax");
    if (revParallax) {
        let reviewOffset = revParallax.offsetTop;
        revParallax.style.backgroundPositionY = (scrollPosition - reviewOffset) * 0.7 + "px";
    }
    // Service section parallax
    const servParallax = document.getElementById("serviceTwo_prallax");
    if (revParallax) {
        let reviewOffset = servParallax.offsetTop;
        servParallax.style.backgroundPositionY = (scrollPosition - reviewOffset) * 0.5 + "px";
    }
    
    // Lookbook section parallax
    const slkbkParallax = document.getElementById("lookbookOne_prallax");
    if (revParallax) {
        let reviewOffset = slkbkParallax.offsetTop;
        slkbkParallax.style.backgroundPositionY = (scrollPosition - reviewOffset) * 0.5 + "px";
    }

    // About section parallax
    const aboutParallax = document.getElementById("about_prallax");
    if (revParallax) {
        let reviewOffset = aboutParallax.offsetTop;
        aboutParallax.style.backgroundPositionY = (scrollPosition - reviewOffset) * 0.5 + "px";
    }
    
});
