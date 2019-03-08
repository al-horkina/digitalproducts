(function ($) {
    $(document).ready(function () {
        $('.hero-slider').slick({
            arrows: false,
            dots: true
        });

        $('.portfolio-slider').slick({
            arrows: true,
            dots: false
        });

    })
})(jQuery);