$('.slick-shop').slick({
    slidesToShow: 5,
    slidesToScroll: 5,
    prevArrow: '<i class="fa-solid fa-arrow-left fa-2x"></i>',
    nextArrow: '<i class="fa-solid fa-arrow-right fa-2x"></i>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
});