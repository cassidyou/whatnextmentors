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



    //############################# SIGNUP AND LOGIN PAGE #############################

 $(document).on("click", ".form-intro #signin-btn", function(){
    $(".form-intro").animate({right: '0'}, 200).removeAttr("style").removeClass("to-left");
    $(".form-field").animate({left: '0'}, 200).removeAttr("style").removeClass("to-right");
    

    $(".form-intro").html(' <h4>WhatNextMentors</h4> ' + 
         '    <h2>Hello Friend</h2> ' +

         '  <h6>Create an account <br> and start your journey with us</h6> '+

         '   <div id="submit-container"> '+
         '       <button id="signup-btn"> SIGN UP</button> '+
          '  </div>');
   
    $(".form-field").html('<div class="container py-5 px-3">' +
                           ' <h5>sign in to whatnextmentors</h5>' +
                           ' <h6>Continue with your social account</h6>' +
                           ' <div id="social-links">' +
                           '     <div class="row">' +
                           '         <div class="col-2"></div>' +
                           '         <div class="col-8">' +
                           '         <ul>' +
                           '             <li><a href="#"><i class="fa-brands fa-google-plus-g"></i></a></li>' +
                           '             <li><a href="#"><i class="fa-brands fa-facebook"></i></a></li>' +
                           '             <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>' +
                           '             <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>' +
                           '         </ul>' +
                           '         </div>' +
                           '         <div class="col-2"></div>' +
                           '     </div>' +
                           ' </div>' +
                           ' <h6>Sign in with your email</h6>' +
                           ' <form id="signup-form" action="" class="mt-4">' +
                           '   <div class="form-input">' +
                           '     <span class="icon"><i class="fa-regular fa-envelope"></i></span>' +
                           '     <input type="text" class="" placeholder="Email">' +
                           '   </div>' +
                           '   <div class="form-input">' +
                           '     <span class="icon"><i class="fa-solid fa-lock"></i></span>' +
                           '     <input type="text" class="" placeholder="Password">' +
                           '   </div>' +
                           '   <div class="form-input" id="hide-me">' +
                           '     <span class="icon" style="background-color:transparent; color: transparent; border: transparent;"><i class="fa-solid fa-lock"></i></span>' +
                           '     <input type="text" class=""  style="background-color:transparent; color: transparent; border: transparent;">' +
                           '   </div>' +
                           '   <div id="submit-container">' +
                           '       <button type="submit" id="signup-submit"> SIGN IN</button>' +
                           '   </div>' +
                           ' <div class="text-end mt-3"><a href="#" class="text-success">Forgot Password</a></div>'+
                           ' </form>' +
                       ' </div>' 
    );
  });


    $(document).on('click', '.form-intro #signup-btn', function(){
        $(".form-intro").animate({left: '0'}, 200).removeAttr("style").removeClass("to-right");
        $(".form-field").animate({right: '0'}, 200).removeAttr("style").removeClass("to-left");

    $(".form-intro").html('<h4>WhatNextMentors</h4>' +
            '<h2>Welcome back</h2>' +

            '<h6>To keep connected with us <br> login with your personal info</h6>' +

           '  <div id="submit-container">' +
               '  <button id="signin-btn"> SIGN IN</button>' +
           '  </div>'
    );

    $(".form-field").html('<div class="container py-5 px-3">' +
                             ' <h5>Sign up to whatnextmentors</h5>' +
                             ' <h6>Continue with your social account</h6>' +
                             ' <div id="social-links">' +
                             '     <div class="row">' +
                             '         <div class="col-2"></div>' +
                             '         <div class="col-8">' +
                             '         <ul>' +
                             '             <li><a href="#"><i class="fa-brands fa-google-plus-g"></i></a></li>' +
                             '             <li><a href="#"><i class="fa-brands fa-facebook"></i></a></li>' +
                             '             <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>' +
                             '             <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>' +
                             '         </ul>' +
                             '         </div>' +
                             '         <div class="col-2"></div>' +
                             '     </div>' +
                             ' </div>' +
                             ' <h6>Sign up with your email</h6>' +
                             ' <form id="signup-form" action="" class="mt-4">' +
                             '   <div class="form-input">' +
                             '     <span class="icon"><i class="fa-regular fa-envelope"></i></span>' +
                             '     <input type="text" class="" placeholder="Email">' +
                             '   </div>' +
                             '   <div class="form-input">' +
                             '     <span class="icon"><i class="fa-solid fa-lock"></i></span>' +
                             '     <input type="text" class="" placeholder="Password">' +
                             '   </div>' +
                             '   <div class="form-input">' +
                             '     <span class="icon"><i class="fa-solid fa-lock"></i></span>' +
                             '     <input type="text" class="" placeholder="Confirm password">' +
                             '   </div>' +
                             '   <div id="submit-container">' +
                             '       <button type="submit" id="signup-submit"> SIGN UP</button>' +
                             '   </div>' +
                             ' </form>' +
                            ' </div>' 
    );
    })






    $("#change-role").click(function(){
      let user =  $(".user-role").text();
      if(user == "Mentor"){
        $(".user-role").text("Mentee");
      } else if(user == "Mentee"){
        $(".user-role").text("Mentor");
      }
    })

    




    






    
var screenSize = $(window).innerWidth();
var screenHeight = $(window).innerHeight();
var chatInboxBodyHeight = $("#chats .chat-inbox-body").innerHeight();

var chatHeaderHeight = $("#chats .chat-header").innerHeight();
console.log(chatInboxBodyHeight)
$(".chat-container").css("height", screenHeight);




if(screenSize >= 426){
    $(".card-container").hover(function(){
    $(this).children(".team-card").fadeOut("slow");
    $(this).children(".team-sub-card").fadeIn("slow");
    },function(){
        $(this).children(".team-card").fadeIn("slow");
        $(this).children(".team-sub-card").fadeOut("slow");
    })
}




// if(screenSize >= 768 && screenSize <= 991){
//     $(".chat-container").addClass("grid-2");
// }

if(screenSize <= 576){
    $(".chat-inbox").click(function(){
      $("#chat-area").css({
        zIndex: 2,
        width: "cal(100vw - 20px)",
        height: "100vh",
        transition: "all 0.6s ease-in-ease-out"
      }).animate({right: "0"});
      $("#chats").addClass("d-none");
    })

    $(".chat-inbox-body").css("paddingBottom", "0")
    $(".chat-inbox-body .chat-inbox").last().css("marginBottom", "0px");
    $(".chat-inbox").removeClass("active");

    $("#chat-area .chat-area-header .close-view").click(function(){
        $("#chat-area").animate({right: "-1000px"});
        $("#chats").removeClass("d-none");
    })
    
}





$(".chat-inbox").click(function(){
    $(".chat-inbox").removeClass("active");
    $(this).addClass("active");
})







$(".chat-area-header-img").click(function(){
    $(".chat-container").removeClass("grid-2").addClass("grid-3");
    $("#profile-view").removeClass("d-none");
})

$("#profile-view .close-view").click(function(){
    $(".chat-container").removeClass("grid-3").addClass("grid-2");
    $("#profile-view").addClass("d-none");
})





$(".right-inner-icon .svg-inline--fa.fa-paperclip").click(function(){
    $(".send-doc-photo").fadeToggle("slow");
})
});
