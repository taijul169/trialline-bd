
$(document).ready(function () {
//   mega-menu-slide-down
    $(".page-link-nav").hover(function(){
    $(".mega-menu").slideDown(500);
    });
    
    $(".page-link-nav").mouseleave(function(){
    $(".mega-menu").slideUp(500);
    });
   
     // testimonial-owl-slider-active------
     $('.testimonial-wrapper').owlCarousel({
        loop:true,
        margin:0,
        responsiveClass: true,
        responsive:{
            0:{
                items:1,
                nav: true,
                dots:false
            },
            600:{
                items:1,
                nav: false,
                dots:false,
                autoplay:true
            },
            1000:{
                items:2,
                nav:true,
                loop: true,
                dots:false,
                autoplay:true

            },
            1400:{
                items:3,
                nav:true,
                loop: true,
                dots:false,
                autoplay:true
            }
        }
    });
         // Hero-owl-slider-active------
     $('.brand-logo-wrapper').owlCarousel({
        loop:true,
        margin:0,
        responsiveClass: true,
        responsive:{
            0:{
                items:2,
                nav: true,
                dots:false
            },
            600:{
                items:4,
                nav: false,
                dots:false,
                autoplay:true
            },
            1000:{
                items:6,
                nav:true,
                loop: true,
                dots:false,
                autoplay:true

            },
            1400:{
                items:8,
                nav:true,
                loop: true,
                dots:false,
                autoplay:true
            }
        }
    });
    var heroSlider = $('.hero-content-info-wrapper');

    // owl-carousel-caption-animation------------------
     heroSlider.on('changed.owl.carousel', function (event) {
        var item = event.item.index - 2;
        $('.hero-content-text h5,h1').removeClass('animate__animated animate__fadeInDown');
        $('.owl-item').not('.cloned').eq(item).find('.hero-content-text h5,h1').addClass('animate__animated animate__fadeInDown');
        $('.common-button-two').removeClass('animate__animated animate__fadeInDown');
        $('.owl-item').not('.cloned').eq(item).find('.common-button-two').addClass('animate__animated animate__fadeInDown');
         $('.hero-content-right').removeClass('animate__animated animate__flipInY');
        $('.owl-item').not('.cloned').eq(item).find('.hero-content-right').addClass('animate__animated animate__flipInY');
    });
    // counter-activatioin--------------
    $('.counter').counterUp({
        delay: 10,
        time: 1000,
        triggerOnce:true
    });
    // client testimonial-active------
    $('.hero-content-info-wrapper').owlCarousel({
        loop:true,
        margin:0,
        responsiveClass: true,
        responsive:{
            0:{
                items:1,
                nav: true,
                dots:false
            },
            600:{
                items:1,
                nav: false,
                dots:false,
                autoplay:true
            },
            1000:{
                items:1,
                nav:true,
                loop: true,
                dots:false,
                autoplay:true

            },
            1400:{
                items:1,
                nav:true,
                loop: true,
                dots:false,
                autoplay:true
            }
        }
    });

    // skill-progressbar----------------------
   $('.html').rProgressbar({
       percentage: 95
    });
     $('.css').rProgressbar({
       percentage: 90
     });
     $('.javascript').rProgressbar({
       percentage: 60
    });
     $('.jquery').rProgressbar({
       percentage: 90
    });
     $('.php').rProgressbar({
       percentage: 50
     });
      
    // counter-area------------------
    $('.happy-client').jQuerySimpleCounter({

        // start number
        start:  0,

        // end number
        end:    55,

        // easing effect
        easing: 'swing',

        // duration time in ms
        duration: 800,

        // callback function
        complete: ''

    });
     // counter-area------------------
    $('.project-com').jQuerySimpleCounter({

        // start number
        start:  0,

        // end number
        end:    33,

        // easing effect
        easing: 'swing',

        // duration time in ms
        duration: 800,

        // callback function
        complete: ''

    });
     // counter-area------------------
    $('.award').jQuerySimpleCounter({

        // start number
        start:  0,

        // end number
        end:    15,

        // easing effect
        easing: 'swing',

        // duration time in ms
        duration: 800,

        // callback function
        complete: ''

    });
    // counter-area------------------
    $('.coffee-cup').jQuerySimpleCounter({

        // start number
        start:  0,

        // end number
        end:    25,

        // easing effect
        easing: 'swing',

        // duration time in ms
        duration: 800,

        // callback function
        complete: ''

    });
    // apply-button-scroll------
    $('.down-indicator').click(function () {  
        $("html").animate({
            scrollTop: 640}, 1000);
    });
    // scroll-nav-activation--------
    $('#custom-nav').onePageNav({
	currentClass: 'active',
	changeHash: false,
	scrollSpeed: 750,
	scrollThreshold: 0.5,
	filter: '',
	easing: 'swing',
});
    // Filter Gallery
    $('.itm-list').click(function () {
        const value = $(this).attr('data-filter');
        if (value == 'all') {
            $('.single-item').show('1000');
        }
        else {
            $('.single-item').not('.' + value).hide('1000');
            $('.single-item').filter('.' + value).show('1000');
        }
    });
    $('.itm-list').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });


    // filter-gallery-activation
    // As A jQuery Plugin -->
    // responsive-navbar-toggle----------------------
    // $('.threebarBtn').click(function () {
    //     $('.nav-header').toggleClass('displayNav');
    // });


    // // top-scroll-button-active---------------------
    $(window).scroll(function () {
        if ($(window).scrollTop() > 200) {
            $(".scroll-top-indicator").fadeIn(); 
        }
        else {
            $(".scroll-top-indicator").fadeOut();
        }
    });
     $(".scroll-top-indicator").click(function () {
        $("html").animate({ scrollTop: 0 },2000);
     });
    // sideBar-controler
    $('.sidebar-controler').click(() => {
        $('.sidebar-controler').toggleClass('closeBtn');
        $('.sidebar-home').toggleClass('closeBtn');
        $('.margin-left-300').toggleClass('closeBtn');
    });
    // preloader-activation------------------------
    $('.preloader').css('display', 'none');
    // nivo-slider-activation
    // $('#slider').nivoSlider();
    
});

