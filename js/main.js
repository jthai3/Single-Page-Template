(function ($) {
    // squishing the navbar when scrolling on page
    $(window).scroll(() => {
        var squishedNav = $(window).scrollTop();
        squishedNav > 100 ? $('.navbar').addClass('navbarSquished') : $('.navbar').removeClass('navbarSquished');
    });

    // scrolling to top of page when clicking on logo
    $('#logo').on('click', () => {
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
    });

    // scrolling to section from clicking on nav
    function sectionScrolling(evt) {
        evt.preventDefault();

        var $section = $($(this).attr('href'));
        $('html, body').animate({
            scrollTop: $section.offset().top - 100
        }, 1000);
    }
    $('[data-scroll]').on('click', sectionScrolling);

    // toggling navbar for mobile and desktop
    $('.hamburger').on('click', function (event) {
        $('.menu').toggleClass('toggle-nav');
    });

    $('.menu a').on('click', function (event) {
        $('.menu').toggleClass('toggle-nav');
    });
}(jQuery));