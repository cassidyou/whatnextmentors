$(document).ready(function(){
   //Animation on Scroll Instance
    AOS.init();

    //Navbar toggling 
    const menuBtn = $('.menu-btn');
    let menuOpen = false;
    menuBtn.click(function() {
    if(!menuOpen){
        menuBtn.addClass('open');
        $('.nav-sm').animate({left: '0px'});
        menuOpen = true;
    }else{
        menuBtn.removeClass('open');
        $('.nav-sm').animate({left: '-300px'});
        menuOpen = false;
    }
    })

    let sideClose = $('.close');
    sideClose.click(function(){
     menuBtn.removeClass('open');
        $('.nav-sm').animate({left: '-300px'});
        menuOpen = false;
})

    //sticky top navbar
    var stickyNavTop = $("nav.navbar").offset().top;
    var stickyNav = function(){
        var scrollTop = $(window).scrollTop();
        if(scrollTop > stickyNavTop){
            $("nav.navbar").addClass("sticky");
        }else{
            $("nav.navbar").removeClass("sticky");
        }
    };
    stickyNav();
    $(window).scroll(function(){
        stickyNav();
    });


    $("#testimonial .owl-carousel").owlCarousel({
        items: 1,
        center: true,
        dots: true,
        dotsData: true,
        nav: true
        
       
    });

    $("#testimonials-carousel .owl-nav .owl-next").html('<span aria-label="Next"><i class="fa-regular fa-circle-right"></i></span>');
    $("#testimonials-carousel .owl-nav .owl-prev").html('<span aria-label="Previous"><i class="fa-regular fa-circle-left"></i></span>');
   
   $("owl-dots button.owl-dot").html("<i>1</i>")


    

 
     

      


})