(function ($) {
    "use strict";
    
    // Initiate the wowjs
    new WOW().init();
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    
    
    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.navbar').addClass('nav-sticky');
        } else {
            $('.navbar').removeClass('nav-sticky');
        }
    });
    
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });


    // Testimonials carousel
    $(".testimonials-carousel").owlCarousel({
        center: true,
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
    
    // Blogs carousel
    $(".blog-carousel").owlCarousel({
        autoplay: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
    
    // Class filter
    var classIsotope = $('.class-container').isotope({
        itemSelector: '.class-item',
        layoutMode: 'fitRows'
    });

    $('#class-filter li').on('click', function () {
        $("#class-filter li").removeClass('filter-active');
        $(this).addClass('filter-active');
        classIsotope.isotope({filter: $(this).data('filter')});
    });
    
    
    // Portfolio filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-filter li').on('click', function () {
        $("#portfolio-filter li").removeClass('filter-active');
        $(this).addClass('filter-active');
        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
})(jQuery);

/*js for work counter*/
$(document).ready(function () {
        $.fn.jQuerySimpleCounter = function (options) {
            var settings = $.extend({
                start: 0,
                end: 100,
                easing: 'swing',
                duration: 400,
                complete: ''
            }, options);

            var thisElement = $(this);

            $({ count: settings.start }).animate({ count: settings.end }, {
                duration: settings.duration,
                easing: settings.easing,
                step: function () {
                    var mathCount = Math.ceil(this.count);
                    thisElement.text(mathCount);
                },
                complete: settings.complete
            });
        };
        $('#number1').jQuerySimpleCounter({ end: 6, duration: 5000 });
        $('#number2').jQuerySimpleCounter({ end: 11, duration: 5000 });
        $('#number3').jQuerySimpleCounter({ end: 200, duration: 5000 });
		
    });
/*end of js for work counter*/

/*js for course select*/
$(document).ready(function () {
    $("#C1").click(function () {
        $("#Table1").show();
        $("#Table2").hide();
        $("#Table3").hide();
        $("#Table4").hide();
    });
	$("#C2").click(function () {
        $("#Table2").show();
        $("#Table1").hide();
        $("#Table3").hide();
        $("#Table4").hide();
    });
	$("#C3").click(function () {
        $("#Table3").show();
        $("#Table2").hide();
        $("#Table1").hide();
        $("#Table4").hide();
    });
			 $("#C4").click(function ()  {
        $("#Table4").show();
        $("#Table2").hide();
        $("#Table3").hide();
        $("#Table1").hide();
    });
});
		$(document).ready(function () {
        $("#Table1").show();
        $("#Table2").hide();
        $("#Table3").hide();
        $("#Table4").hide();
    });
/*end of js for course select*/
