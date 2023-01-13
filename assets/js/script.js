$(document).ready(function(){
   //ANIMATION ON SCROLL INITIALIZATION
    AOS.init();

    //NAVBAR TOGGLING
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

    //STICKY TOP NAVBAR 
    var navHeight = $("nav.navbar").height();
    var stickyNavTop = $("nav.navbar").offset().top;
    var stickyNav = function(){
        var scrollTop = $(window).scrollTop();
        if(scrollTop > stickyNavTop){
            $("nav.navbar").addClass("sticky");
            $(".header .top").addClass('m-gn');
        }else{
            $("nav.navbar").removeClass("sticky");
            $(".header .top").removeClass('m-gn');
        }
    };
    $(window).scroll(function(){
        stickyNav();
    });


// TESTIMONIAL SECTION OF HOME PAGE

    $("#testimonial .owl-carousel").owlCarousel({
        items: 1,
        center: true,
        dots: true,
        dotsData: true,
        nav: true,
        autoplay: true,
        loop: true
        
       
    });


// PARTNERS SECTION OF HOME PAGE

    $("#partners .owl-carousel").owlCarousel({
        items: 4,
        center: true,
        dots: true,
        center: true,
        margin: 20,
        loop: true,
        autoplay: true,
        smartSpeed: 5000,
        autoplayHoverPause: true, 
        rewind: false,
    });

    $("#testimonials-carousel .owl-nav .owl-next").html('<span aria-label="Next"><i class="fa-regular fa-circle-right"></i></span>');
    $("#testimonials-carousel .owl-nav .owl-prev").html('<span aria-label="Previous"><i class="fa-regular fa-circle-left"></i></span>');
   
   $("owl-dots button.owl-dot").html("<i>1</i>")



    //############################# SIGNUP AND LOGIN PAGE #############################

 $(document).on("click", ".form-intro #signin-btn", function(){
    $(".form-intro").animate({right: '0'}, 200).removeAttr("style").removeClass("to-left");
    $(".form-field").animate({left: '0'}, 200).removeAttr("style").removeClass("to-right");
    

    $(".form-intro").html(
         '    <h2>Hello Friend!</h2> ' +

         '  <h6>Create an account <br> and start your journey with us</h6> '+

         '   <div id="submit-container"> '+
         '       <button id="signup-btn"> SIGN UP</button> '+
          '  </div>');
   
    $(".form-field").html('<div class="container py-5 px-3">' +
            ' <h5>sign in to whatnextmentors</h5>' +
            // ' <h6>Continue with your social account</h6>' +
            // ' <div id="social-links">' +
            // '     <div class="row">' +
            // '         <div class="col-2"></div>' +
            // '         <div class="col-8">' +
            // '         <ul>' +
            // '             <li><a href="#"><i class="fa-brands fa-google-plus-g"></i></a></li>' +
            // '             <li><a href="#"><i class="fa-brands fa-facebook"></i></a></li>' +
            // '             <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>' +
            // '             <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>' +
            // '         </ul>' +
            // '         </div>' +
            // '         <div class="col-2"></div>' +
            // '     </div>' +
            // ' </div>' +
            ' <h6>Sign in with your email</h6>' +
            ' <form id="signup-form" action="" class="mt-4">' +
            '   <div class="form-input">' +
            '     <span class="inner-icon"><i class="fa-regular fa-envelope"></i></span>' +
            '     <input type="text" class="" placeholder="Email">' +
            '   </div>' +
            '   <div class="form-input">' +
            '     <span class="inner-icon"><i class="fa-solid fa-lock"></i></span>' +
            '     <input type="text" class="" placeholder="Password">' +
            '   </div>' +
            '   <div class="form-input" id="hide-me">' +
            '     <span class="inner-icon" style="background-color:transparent; color: transparent; border: transparent;"><i class="fa-solid fa-lock"></i></span>' +
            '     <input type="text" class=""  style="background-color:transparent; color: transparent; border: transparent;">' +
            '   </div>' +
            '   <div id="submit-container" class="text-center">' +
            '      <a href="./user-dashboard.html" type="submit" id="signin-submit"> SIGN IN</a>' +
            '   </div>' +
            ' <div class="text-end mt-3"><a href="./forgot-password.html" class="text-success">Forgot Password</a></div>'+
            ' </form>' +
        ' </div>' 
    );
  });


    $(document).on('click', '.form-intro #signup-btn', function(){
        $(".form-intro").animate({left: '0'}, 200).removeAttr("style").removeClass("to-right");
        $(".form-field").animate({right: '0'}, 200).removeAttr("style").removeClass("to-left");

    $(".form-intro").html(
            '<h2>Welcome back!</h2>' +

            '<h6>To keep connected with us <br> login with your personal info</h6>' +

           '  <div id="submit-container">' +
               '  <button  id="signin-btn"> SIGN IN</button>' +
           '  </div>'
    );

    $(".form-field").html('<h2>Join our community of Mentors and Mentees to receive world class mentorship and share your expertise with others.</h2>'+
    '<div><a href="./mentee-signup.html" class="mentee-link">Find a mentor</a></div> ' +
    '<div><a href="./mentor-signup.html" class="mentor-link">Become a mentor</a></div> ' 
         
    );
    })


    var chatsHeaderHeight = $("#chats .chat-header").outerHeight();
    var chatsInboxBodyHeight = $("#chats .chat-inbox-body").outerHeight();
    var chatAreaFooterHeight = $("#chat-area .chat-area-footer").outerHeight();

    // alert(chatsInboxBodyHeight)
    // alert(chatsHeaderHeight)
   
    

    
var screenSize = $(window).innerWidth();
var screenHeight = $(window).innerHeight();
var chatInboxBodyHeight = $("#chats .chat-inbox-body").innerHeight();

var chatHeaderHeight = $("#chats .chat-header").innerHeight();
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




if(screenSize >= 992){
    $(".chat-container").addClass("grid-2");
    $("#profile-view").addClass("d-none");

    $("#profile-view .close-view").click(function(){
       $(".chat-container").removeClass("grid-3").addClass("grid-2");
       $("#profile-view").addClass("d-none");
    });

    $(".chat-area-header-img").click(function(){
        $(".chat-container").removeClass("grid-2").addClass("grid-3");
        $("#profile-view").removeClass("d-none");
    })
}


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


    $(".chat-area-header-img").click(function(){
        $("#profile-view").css({
            zIndex: 2,
            width: "300px",
            height: "67.5vh",
            opacity: "1",
            background: "var(--blog-bgcolor)",
            transition: "all 0.6s ease-in-ease-out"
          }).animate({right: "0"});
    })


    $("#profile-view .close-view").click(function(){
        $("#profile-view").animate({right: "-1000px"});
    })
    
    
}

if(screenSize >= 577 && screenSize  <= 991){
    $(".chat-container").addClass("grid-2");

    $(".chat-area-header-img").click(function(){
        
        $("#profile-view").css({
            zIndex: 2,
            width: "300px",
            height: "85vh",
            opacity: "1",
            background: "var(--blog-bgcolor)",
            transition: "all 0.6s ease-in-ease-out"
          }).animate({right: "0"});
    });

    $("#profile-view .close-view").click(function(){
        $("#profile-view").animate({right: "-1000px"});
    })
}





$(".chat-inbox").click(function(){
    $(".chat-inbox").removeClass("active");
    $(this).addClass("active");
})








$(".right-inner-icon .svg-inline--fa.fa-paperclip").click(function(){
    $(".send-doc-photo").fadeToggle("slow");
})



$("#survey-form ul.options li").click(function(){
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
})







$("#setup-questions  ul.options li").click(function(){
    $(this).addClass("active").addClass("clicked");
    $(this).siblings().removeClass("active");
    
    let setupResultParent = $(".result");
    // let setupResultParent = $(this).parent(".options").parent('.question').parent(".col-12").parent(".questions").parent("#self-assess-questions").siblings(".col-12").siblings(".col-md-7").children(".self-assess-result").children('.item').children(".result");
    let setupResultParentWidth = setupResultParent.width();

    // let setupResult = $(this).parent(".options").parent('.question').parent(".col-12").parent(".questions").parent("#self-assess-questions").siblings(".col-12").siblings(".col-md-7").children(".self-assess-result").children('.item').children(".result").children(".setup-result");
    let setupResult = $(".setup-result");
    let setupResultWidth = setupResult.width();

    let questions = $("#setup-questions").children(".col-12").children(".question"); 
    let options = $(this).parent('.options').children("li");


    let markForEachQuestion = setupResultParentWidth / questions.length;

    let markForEachOption = (markForEachQuestion / options.length) * $(this).val();
    
 
    if($(this).siblings("li").hasClass('clicked') == true){
       var clickedValue = $(this).siblings("li.clicked").val() * (markForEachQuestion / options.length);
        setupResultWidth -= clickedValue;
        setupResult.width(setupResultWidth);
        $(this).siblings("li").removeClass("clicked");
        $(this).attr("disabled")
    }if($(this).siblings("li").hasClass('clicked') == false){
        setupResultWidth += markForEachOption;
        setupResult.width(setupResultWidth);
    }
})


$("#market-research-questions  ul.options li").click(function(){
    $(this).addClass("active").addClass("clicked");
    $(this).siblings().removeClass("active");
    
    let marketResultParent = $(".result");
    // let setupResultParent = $(this).parent(".options").parent('.question').parent(".col-12").parent(".questions").parent("#self-assess-questions").siblings(".col-12").siblings(".col-md-7").children(".self-assess-result").children('.item').children(".result");
    let marketResultParentWidth = marketResultParent.width();

    // let setupResult = $(this).parent(".options").parent('.question').parent(".col-12").parent(".questions").parent("#self-assess-questions").siblings(".col-12").siblings(".col-md-7").children(".self-assess-result").children('.item').children(".result").children(".setup-result");
    let marketResult = $(".market-research-result");
    let marketResultWidth = marketResult.width();

    let questions = $("#setup-questions").children(".col-12").children(".question"); 
    let options = $(this).parent('.options').children("li");


    let markForEachQuestion = marketResultParentWidth / questions.length;

    let markForEachOption = (markForEachQuestion / options.length) * $(this).val();
    
 
    if($(this).siblings("li").hasClass('clicked') == true){
       var clickedValue = $(this).siblings("li.clicked").val() * (markForEachQuestion / options.length);
        marketResultWidth -= clickedValue;
        marketResult.width(marketResultWidth);
        $(this).siblings("li").removeClass("clicked");
        $(this).attr("disabled")
    }if($(this).siblings("li").hasClass('clicked') == false){
        marketResultWidth += markForEachOption;
        marketResult.width(marketResultWidth);
    }
})

$("#finance-questions  ul.options li").click(function(){
    $(this).addClass("active").addClass("clicked");
    $(this).siblings().removeClass("active");
    
    let financeResultParent = $(".result");
    // let setupResultParent = $(this).parent(".options").parent('.question').parent(".col-12").parent(".questions").parent("#self-assess-questions").siblings(".col-12").siblings(".col-md-7").children(".self-assess-result").children('.item').children(".result");
    let financeResultParentWidth = financeResultParent.width();

    // let setupResult = $(this).parent(".options").parent('.question').parent(".col-12").parent(".questions").parent("#self-assess-questions").siblings(".col-12").siblings(".col-md-7").children(".self-assess-result").children('.item').children(".result").children(".setup-result");
    let financeResult = $(".finance-result");
    let financeResultWidth = financeResult.width();

    let questions = $("#finance-questions").children(".col-12").children(".question"); 
    let options = $(this).parent('.options').children("li");


    let markForEachQuestion = financeResultParentWidth / questions.length;

    let markForEachOption = (markForEachQuestion / options.length) * $(this).val();
    
 
    if($(this).siblings("li").hasClass('clicked') == true){
       var clickedValue = $(this).siblings("li.clicked").val() * (markForEachQuestion / options.length);
        financeResultWidth -= clickedValue;
        financeResult.width(financeResultWidth);
        $(this).siblings("li").removeClass("clicked");
        $(this).attr("disabled")
    }if($(this).siblings("li").hasClass('clicked') == false){
        financeResultWidth += markForEachOption;
        financeResult.width(financeResultWidth);
    }
})

$("#sales-questions  ul.options li").click(function(){
    $(this).addClass("active").addClass("clicked");
    $(this).siblings().removeClass("active");
    
    let salesResultParent = $(".result");
    // let setupResultParent = $(this).parent(".options").parent('.question').parent(".col-12").parent(".questions").parent("#self-assess-questions").siblings(".col-12").siblings(".col-md-7").children(".self-assess-result").children('.item').children(".result");
    let salesResultParentWidth = salesResultParent.width();

    // let setupResult = $(this).parent(".options").parent('.question').parent(".col-12").parent(".questions").parent("#self-assess-questions").siblings(".col-12").siblings(".col-md-7").children(".self-assess-result").children('.item').children(".result").children(".setup-result");
    let salesResult = $(".sales-result");
    let salesResultWidth = salesResult.width();

    let questions = $("#sales-questions").children(".col-12").children(".question"); 
    let options = $(this).parent('.options').children("li");


    let markForEachQuestion = salesResultParentWidth / questions.length;

    let markForEachOption = (markForEachQuestion / options.length) * $(this).val();
    
 
    if($(this).siblings("li").hasClass('clicked') == true){
       var clickedValue = $(this).siblings("li.clicked").val() * (markForEachQuestion / options.length);
        salesResultWidth -= clickedValue;
        salesResult.width(salesResultWidth);
        $(this).siblings("li").removeClass("clicked");
        $(this).attr("disabled")
    }if($(this).siblings("li").hasClass('clicked') == false){
        salesResultWidth += markForEachOption;
        salesResult.width(salesResultWidth);
    }
})
$("#operations-questions  ul.options li").click(function(){
    $(this).addClass("active").addClass("clicked");
    $(this).siblings().removeClass("active");
    
    let operationsResultParent = $(".result");
    // let setupResultParent = $(this).parent(".options").parent('.question').parent(".col-12").parent(".questions").parent("#self-assess-questions").siblings(".col-12").siblings(".col-md-7").children(".self-assess-result").children('.item').children(".result");
    let operationsResultParentWidth = operationsResultParent.width();

    // let setupResult = $(this).parent(".options").parent('.question').parent(".col-12").parent(".questions").parent("#self-assess-questions").siblings(".col-12").siblings(".col-md-7").children(".self-assess-result").children('.item').children(".result").children(".setup-result");
    let operationsResult = $(".operations-result");
    let operationsResultWidth = operationsResult.width();

    let questions = $("#operations-questions").children(".col-12").children(".question"); 
    let options = $(this).parent('.options').children("li");


    let markForEachQuestion = operationsResultParentWidth / questions.length;

    let markForEachOption = (markForEachQuestion / options.length) * $(this).val();
    
 
    if($(this).siblings("li").hasClass('clicked') == true){
       var clickedValue = $(this).siblings("li.clicked").val() * (markForEachQuestion / options.length);
        operationsResultWidth -= clickedValue;
        operationsResult.width(operationsResultWidth);
        $(this).siblings("li").removeClass("clicked");
        $(this).attr("disabled")
    }if($(this).siblings("li").hasClass('clicked') == false){
        operationsResultWidth += markForEachOption;
        operationsResult.width(operationsResultWidth);
    }
})







$("input.area:checkbox").on("change", function(){
    var rate =  $(this).parent(".accordion-body").parent(".accordion-collapse").siblings(".accordion-header").children(".accordion-button").children(".mentor-expertise-share").children(".rate");
    var level =  $(this).parent(".accordion-body").parent(".accordion-collapse").siblings(".accordion-header").children(".accordion-button").children(".mentor-expertise-share");
    var rateWidth = rate.width();
    var levelWidth = level.width();
    var totalOptions = $(this).siblings("input:checkbox").length + 1;
    
    var increment = levelWidth / totalOptions;
   if($(this).prop("checked")){
        rateWidth  += increment;
        rate.width(rateWidth);
    }else{
        rateWidth  -= increment;
        rate.width(rateWidth);
   }

})







$(".mentee-signp-form-intro-btn").click(function(){
    let menteeRole = $(this).val();
    $(".mentee-role-card-container").addClass("d-none");
    $("#mentee-signup-form").removeClass("d-none");
    $(".mentee-role-display").text(menteeRole);
    $("#mentee-signup-form #menteeRole").attr("value", menteeRole);


    if(menteeRole == "Global Impact" || menteeRole == "global impact"){
        $(".associate-school-info").addClass('d-none');
        $(".ambassador-school-info").addClass("d-none");
        $("#menteeSignup").addClass("global-impact-create-account");
        $("#menteeSignup").removeClass("associate-create-account");
        $("#menteeSignup").removeClass("ambassador-create-account");
    } else if(menteeRole == "Ambassador" || menteeRole == "ambassador"){
        $(".associate-school-info").addClass("d-none");
        $("#menteeSignup").removeClass("global-impact-create-account");
        $("#menteeSignup").removeClass("associate-create-account");
        $("#menteeSignup").addClass("ambassador-create-account");
    } else if(menteeRole == "Associate" || menteeRole == "associate"){
        $(".ambassador-school-info").addClass("d-none");
        $("#menteeSignup").removeClass("global-impact-create-account");
        $("#menteeSignup").addClass("associate-create-account");
        $("#menteeSignup").removeClass("ambassador-create-account");
    }
})



$("#change-role").click(function(){
    $(".mentee-role-card-container").removeClass("d-none");
    $("#mentee-signup-form").addClass("d-none");
    $(".associate-school-info").removeClass('d-none');
    $(".ambassador-school-info").removeClass("d-none");

  })
  $(".nav-item").children(".card").fadeOut();

  $(".nav-item").hover(function(){
    $(this).children(".card").fadeIn();
  }, function(){
    $(this).children(".card").fadeOut();
  })



  var triggerTabList = [].slice.call(document.querySelectorAll('#myTab a'))
triggerTabList.forEach(function (triggerEl) {
  var tabTrigger = new bootstrap.Tab(triggerEl)

  triggerEl.addEventListener('click', function (event) {
    event.preventDefault()
    tabTrigger.show()
  })
})



var userTestimony = $(".user-testimony");
var userTestimonyBtn = $(".user-testimony-btn");
var testimonyTextarea = $(".testimonial-textarea");
if(userTestimony.text() == "You have not submitted any testimony"){
    userTestimonyBtn.text("Submit a testimonial");
} else{
    userTestimonyBtn.text("Update testimonial");
}

userTestimonyBtn.click(function(){
    if(userTestimony.text() == "You have not submitted any testimony"){
        testimonyTextarea.text("");
    }else{
        // var testimony = userTestimony.text();
        testimonyTextarea.text(userTestimony.text());
    }
    $("#testimonial-form").toggleClass("d-none");
})




});
