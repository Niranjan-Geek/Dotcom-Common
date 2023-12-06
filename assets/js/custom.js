jQuery(document).ready(function ($) {
    new WOW().init();

    var window_size = jQuery(window).width();

    /* FAQ Page accordion */
    jQuery('.accordion .faq-content').hide();
    jQuery('.accordion > div:eq(0) h3').addClass('active-faq');
    jQuery('.accordion > div:eq(0) .faq-content').slideDown();
    jQuery('.accordion h3').click(function (j) {
        var dropDown = jQuery(this).closest('div').find('.faq-content');
        jQuery(this).closest('.accordion').find('.faq-content').not(dropDown).slideUp();
        if (jQuery(this).hasClass('active-faq')) {
            jQuery(this).removeClass('active-faq');
        } else {
            jQuery(this).closest('.accordion').find('h3.active-faq').removeClass('active-faq');
            jQuery(this).addClass('active-faq');
        }
        dropDown.stop(false, true).slideToggle();
        j.preventDefault();
    });

    jQuery('.testimonial-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 6000,
        swipeToSlide: true,
        rows: 0,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
            }
        }]
    });
    jQuery('.team-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        swipeToSlide: true,
        rows: 0,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
        ]
    });
    jQuery('.gallery-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: true,
        prevArrow: '<button class="slide-arrow prev-arrow"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button class="slide-arrow next-arrow"><i class="fas fa-chevron-right"></i></button>',
        autoplay: true,
        autoplaySpeed: 2000,
        swipeToSlide: true,
        rows: 0,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: false,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: false,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
            }
        }
        ]
    });

    /*Quote Modal open JS */
    jQuery("#request_quote_modal").on('show.bs.modal', function () {
        jQuery(window).scroll(function () { // this will work when your window scrolled.
            jQuery(".site-header").addClass("sticky_head");
        });
        var scrolly = window.scrollY;
        jQuery("body").css("top", "-" + scrolly + "px");
        jQuery(this).attr("data-top", scrolly);
        jQuery('.slick-initialized').slick('slickPause');
    });
    jQuery('#request_quote_modal').on('hidden.bs.modal', function () {
        jQuery(window).scroll(function () { // this will work when your window scrolled.
            var height = jQuery(window).scrollTop(); //getting the scrolling height of window
            if (height < 100) {
                jQuery(".site-header").removeClass("sticky_head");
            }
        });
        var scrolly = jQuery(this).attr("data-top");
        jQuery("body").css("top", "0px");
        window.scrollTo(0, scrolly);
        jQuery('.slick-initialized').slick('slickPlay');
    });

    /*SEO Menu JS */
    jQuery('#view_all_services').click(function () {
        jQuery('.all-services').slideToggle(500);
        jQuery('.all-services').css('display', 'block');
    });
    /* SEO Page Read More JS */
    jQuery('#read-more').click(function () {
        jQuery('.excerpt-content').css({ 'max-height': 'unset' });
        jQuery(this).hide();
    });

    /*Menu JS */
    jQuery('.menu-item a').not('#primary-menu .menu-item-has-children a:first').click(function () {
        jQuery(".main-navigation").removeClass('toggled	');
    });
    var window_size = jQuery(window).width();
    if (window_size <= 991) {
        jQuery(document).on('click', '#primary-menu .menu-item-has-children', function (e) {
            e.stopPropagation(); // Prevent the click event from propagating to the parent element
            jQuery(this).siblings('.menu-item-has-children').removeClass('active-sub-menu');
            jQuery(this).toggleClass('active-sub-menu');
            jQuery(this).siblings('.menu-item-has-children').find('.sub-menu').hide();
            jQuery(this).find('.sub-menu').eq(0).toggle();
        });

        jQuery(document).on('click', '#primary-menu .sub-menu li', function (e) {
            e.stopPropagation(); // Prevent further propagation of the click event
        });
    }


    /* Sticky Header JS */
    jQuery(window).scroll(function () { // this will work when your window scrolled.
        var height = jQuery(window).scrollTop(); //getting the scrolling height of window
        if (height > 100) {
            jQuery(".site-header").addClass("sticky_head");
        } else {
            jQuery(".site-header").removeClass("sticky_head");
        }
    });
    
    if (window_size <= 991) {
        jQuery(window).scroll(function () {
            if (jQuery(this).scrollTop() > 100) {
                jQuery('.cta-btn').fadeIn();
            } else {
                jQuery('.cta-btn').fadeOut();
            }
        });
    }
    /*Smooth Scroll JS*/
    jQuery("ul.menu li.menu-item").each(function () {
        var href = jQuery(this).find("a").attr("href");
        if (href.includes("#")) {
            if (href.substr(0, 1) == '#') {
                if (jQuery(href).length > 0) {
                    jQuery(this).find("a").first().attr("href", window.location.href.replace('#', '') + href);
                } else {
                    jQuery(this).find("a").first().attr("href", custom_call.homeurl + href);
                }
            }
        }
    });
    
    // fancy box stop slider JS
    jQuery().fancybox({
        selector: '[data-fancybox]',
        "afterShow": function () {
            jQuery('.slick-initialized').slick('slickPause');
        },
    
        "afterClose": function () {
            setTimeout(() => {
                jQuery('.slick-initialized').slick('slickPlay');
                jQuery("body").trigger("click");
            }, 1000);
    
        }
    });
    
    /** Page Scroll JS */
    if(window.location.hash){
        // smooth scroll to the anchor id
        var scrollOffset = 100;
        jQuery('html,body').animate({
            scrollTop:jQuery(window.location.hash).offset().top - scrollOffset
            });
        } else {
            setTimeout( function() { scroll(0,0); }, 1);
        }
    
        jQuery('a[href*=\\#]:not([href$=\\#])').on('click', function(evt) {
            
            evt.preventDefault();
            var url = jQuery(this).attr('href');
            var id = url.substring(url.lastIndexOf('#'));
            if (jQuery(id).length > 0) {
                jQuery('html, body').animate({ 
                    scrollTop: jQuery(id).offset().top - scrollOffset
                },500);
            }
            else{
                window.location.href = url;
            }
        });
    // Smooth Scrolling JS End
    
    // Scroll To Top JS Start
    jQuery('#scroll-to-top').on('click', function() {
        jQuery("html, body").animate({ scrollTop: 0 }, 800);
        return false;
    });
});
