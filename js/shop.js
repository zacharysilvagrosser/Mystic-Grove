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
const shopItems = document.querySelectorAll(".shop-item");
const itemImgs = document.querySelectorAll(".item-img");
const itemNames = document.querySelectorAll(".item-name");
const itemPrices = document.querySelectorAll(".item-price");
for (let i = 0; i < shopItems.length; i++) {
    shopItems[i].addEventListener("click", () => {
        document.getElementById("shop-container").classList.add("dim");
        cart.style.display = "flex";
        // CREATE CART ITEM
        document.getElementById("cart-items").innerHTML += `
        <div class="cart-item row">
            <img class="col-sm-4 col-12 cart-img" src=${itemImgs[i].src}>
            <div class="col-sm-5 col-12">
                <p class="cart-name">${itemNames[i].innerHTML}</p>
                <label for="quantity">Quantity: </label>
                <input class="quantity" type="number" value="1" min="1" max="9">
                <span> at $${itemPrices[i].innerText}</span>
            </div>
            <p class="col-sm-2 col-10 cart-price">${itemPrices[i].innerText}</p>
            <div class="close">X</div>
        </div>`;
        let closeButtons = document.querySelectorAll(".close");
        cartItems = document.querySelectorAll(".cart-item");
        const quantities = document.querySelectorAll(".quantity");
        const cartPrice = document.querySelectorAll(".cart-price");
        for (let j = 0; j < cartItems.length; j++) {
            closeButtons[j].addEventListener("click", () => {
                cartItems[j].remove();
            });
            quantities[j].addEventListener("input", () => {
                cartPrice[j].innerText = `${(itemPrices[i].innerText * quantities[j].value).toFixed(2)}`;
                cartItemQuantities[j] = quantities[j].value;
            });
            quantities[j].value = cartItemQuantities[j];
            if (quantities[j].value == '') {
                quantities[j].value = 1;
                cartItemQuantities[j] = quantities[j].value;
            }
        }

    });
}