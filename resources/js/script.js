$(document).ready(function () {
    
//Reload the page when window resized    
$(window).resize(function(){location.reload();});

    $('.js--section-features').waypoint(function (direction) {

        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }

    }, {
        offset: '60px'
    });



    $('.js--scroll-to-plans').click(function () {
        $('html, body').animate({
            scrollTop: $('.js--section-plans').offset().top
        }, 1000);
    });

    $('.js--scroll-to-features').click(function () {
        $('html, body').animate({
            scrollTop: $('.js--section-features').offset().top
        }, 1000);
    });


    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });

    /*--ANIMATION ON SCROLLING--*/
    /*--FEATURES ANIMATION--*/

    $('.js--wp-1').waypoint(function (direction) {


        $('.js--wp-1').addClass('animate__animated animate__fadeInUp');


    }, {
        offset: '75%'
    });
    
    /*--iPhone ANIMATION--*/

    $('.js--wp-iPhone').waypoint(function (direction) {


        $('.js--wp-iPhone').addClass('animate__animated animate__fadeInUp');


    }, {
        offset: '75%'
    });

  
           /*--Cities ANIMATION--*/
    $('.js--wp-cities').waypoint(function (direction) {


        $('.js--wp-cities').addClass('animate__animated animate__fadeIn');


    }, {
        offset: '75%'
    });

    
           /*--PREMIUM PACKAGE ANIMATION--*/
    $('.js--wp-premium').waypoint(function (direction) {


        $('.js--wp-premium').addClass('animate__animated animate__pulse animate__repeat-2');


    }, {
        offset: '50%'
    });

   
  $(".js--main-nav-icon").click(function(){
    
      var nav= $(".js--main-nav");
      var icon=$(".js--main-nav-icon i");
       
   
    
      
      nav.slideToggle(250);
      
      if(icon.hasClass("ion-navicon-round")){
          
          icon.addClass("ion-close-round");
      icon.removeClass('ion-navicon-round');
      }
      else{
        icon.addClass('ion-navicon-round');
        icon.removeClass("ion-close-round");
      }
          
      });
      

    /*----SLIDE-SHOW----*/
    


});
