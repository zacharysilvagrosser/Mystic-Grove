// BUG: Reloading shop page then adding new item to cart cuases quanities to go blank

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
// RELOAD CART ITEMS
const cartItemImgss = JSON.parse(localStorage.getItem("cartItemImgs"));
const cartItemNamess = JSON.parse(localStorage.getItem("cartItemNames"));
const cartItemPricess = JSON.parse(localStorage.getItem("cartItemPrices"));
const cartItemQuantitiess = JSON.parse(localStorage.getItem("cartItemQuantities"));
if (cartItemImgss !== null) {
  for (let i = 0; i < cartItemImgss.length; i++) {
      document.getElementById("cart-items").innerHTML += `
          <div class="cart-item row">
              <img class="col-4" src=${cartItemImgss[i]}>
              <div class="col-5">
                  <p>${cartItemNamess[i]}</p>
                  <label for="quantity">Quantity: </label>
                  <input class="quantity" type="number" value="${cartItemQuantitiess[i]}" min="1" max="9">
                  <span> at ${cartItemPricess[i]}</span>
              </div>
              <p class="col-2 cart-price">${(cartItemPricess[i] * cartItemQuantitiess[i]).toFixed(2)}</p>
              <span class="close">X</span>
          </div>`;
  }
}
// ADD CART CLICK EVENTLISTENERS
const cart = document.getElementById("cart");
document.getElementById("exit-cart-button").addEventListener("click", () => {
  document.getElementById("shop-container").classList.remove("dim");
  cart.style.display = "none";
});
document.getElementById("cart-button").addEventListener("click", () => {
  if (cart.style.display === "none" || cart.style.display === "") {
    document.getElementById("shop-container").classList.add("dim");
    cart.style.display = "flex";
  } else {
    document.getElementById("shop-container").classList.remove("dim");
    cart.style.display = "none";
  }
});
const shopItems = document.querySelectorAll(".shop-item");
const itemImgs = document.querySelectorAll(".item-img");
const itemNames = document.querySelectorAll(".item-name");
const itemPrices = document.querySelectorAll(".item-price");
let [cartItemImgs, cartItemNames, cartItemPrices, cartItemQuantities] = [[], [], [], []];
for (let i = 0; i < shopItems.length; i++) {
  shopItems[i].addEventListener("click", () => {
    // STORE VALUES IN ARRAY SO CART ITMES CAN PERSIST THROUGH PAGE CHANGES
    cartItemImgs.push(itemImgs[i].getAttribute("src"));
    cartItemNames.push(itemNames[i].innerHTML);
    cartItemPrices.push(itemPrices[i].innerText);
    document.getElementById("shop-container").classList.add("dim");
    cart.style.display = "flex";
    // CREATE CART ITEM
    document.getElementById("cart-items").innerHTML += `
      <div class="cart-item row">
        <img class="col-4" src=${cartItemImgs[cartItemImgs.length - 1]}>
        <div class="col-5">
          <p>${cartItemNames[cartItemNames.length - 1]}</p>
          <label for="quantity">Quantity: </label>
          <input class="quantity" type="number" value="1" min="1" max="9">
          <span> at ${cartItemPrices[cartItemPrices.length - 1]}</span>
        </div>
        <p class="col-2 cart-price">${cartItemPrices[cartItemPrices.length - 1]}</p>
        <span class="close">X</span>
      </div>`;
    const closeButtons = document.querySelectorAll(".close");
    const cartItems = document.querySelectorAll(".cart-item");
    const quantities = document.querySelectorAll(".quantity");
    const cartPrice = document.querySelectorAll(".cart-price");
    for (let j = 0; j < cartItems.length; j++) {
      closeButtons[j].addEventListener("click", () => {
        cartItems[j].remove();
      });
      // UPDATE PRICE OF ITEMS WHEN INCREASING QUANTITY
      cartItemQuantities[j] = quantities[j].value;
      quantities[j].addEventListener("input", () => {
        cartPrice[j].innerText = `${(cartItemPrices[j] * quantities[j].value).toFixed(2)}`;
        cartItemQuantities[j] = quantities[j].value;
      });
      // UPDATE QUANTITY SO IT DOESN'T RESET TO 1 WHEN ADDING NEW ITEM TO CART
      quantities[j].value = cartPrice[j].innerText / cartItemPrices[j];
    }
  });
}
// STORE ALL CART ITEMS
$("a").click(function() {
  localStorage.setItem('cartItemImgs', JSON.stringify(cartItemImgs));
  localStorage.setItem('cartItemNames', JSON.stringify(cartItemNames));
  localStorage.setItem('cartItemPrices', JSON.stringify(cartItemPrices));
  localStorage.setItem('cartItemQuantities', JSON.stringify(cartItemQuantities));
});
localStorage.clear();