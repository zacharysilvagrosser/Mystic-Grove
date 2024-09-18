$('.slick-backpacks').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: '<i class="fa-solid fa-arrow-left fa-3x"></i>',
    nextArrow: '<i class="fa-solid fa-arrow-right fa-3x"></i>'
});
$('img').each(function(ix, image){
    $(image).wrap('<a href="shop.html"></a>');
});