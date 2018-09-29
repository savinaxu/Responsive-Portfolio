(function ($) {
    "use strict";


    //======= PRELOADER ========//
    $(window).on('load', function () {
        $('body').delay(550).css({
            'overflow': 'visible'
        });
    });

    //======= SITE NAVBAR ========//
    var navMenu = $('.nav-menu')
    navMenu.onePageNav();
    $(window).on('scroll resize', function () {
        var homeH = $('.home-section').height() - 90;
        if ($(this).scrollTop() > homeH) {
            $('nav').fadeIn(400);
            navMenu.onePageNav();
        } else {
            $('nav').fadeOut(200);
        }
        preventDefault();
    });


    //======= RESPONSIVE MENU ========//
    $('.mobile-bar').on('click', function () {
        $(this).toggleClass('active');
        $('.nav-menu').toggleClass('active');
        preventDefault();
    });


})(jQuery);