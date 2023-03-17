$(document).on('ready', function () {
    $(".banner").slick({
        dots: true,
        infinite: true,
        // arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    $(".sld").slick({
        dots: false,
        infinite: true,

        slidesToShow: 3,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            }]

    });
    $(".store-slick").slick({
        dots: false,
        infinite: true,

        slidesToShow: 4,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            }]

    });
    $(".prodwelove").slick({
        infinite: true,
        slidesToShow: 5,
        dots: false,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 6
                }
            },
            {
                breakpoint: 1080,
                settings: {
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 240,
                settings: {
                    slidesToShow: 2
                }
            }
        ]

    });
});