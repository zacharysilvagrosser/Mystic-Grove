$('.slick-shop').slick({
    slidesToShow: 5,
    slidesToScroll: 5,
    prevArrow: '<i class="fa-solid fa-arrow-left shop-arrow-left fa-3x"></i>',
    nextArrow: '<i class="fa-solid fa-arrow-right shop-arrow-right fa-3x"></i>',
    responsive: [
      {
        breakpoint: 1200,
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
document.addEventListener('DOMContentLoaded', () => {
    const shopItems = document.querySelectorAll(".shop-item");
    const itemImgs = document.querySelectorAll(".item-img");
    const itemNames = document.querySelectorAll(".item-name");
    const itemPrices = document.querySelectorAll(".item-price");

    // Add items to cart using the new cart system
    for (let i = 0; i < shopItems.length; i++) {
        shopItems[i].addEventListener("click", () => {
            // Add item to cart
            shoppingCart.addItem({
                type: 'product',
                name: itemNames[i].innerText,
                price: itemPrices[i].innerText,
                image: itemImgs[i].src
            });
        });
    }
});