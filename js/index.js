const cart = document.getElementById("cart");
document.getElementById("exit-cart-button").addEventListener("click", () => {
    cart.style.display = "none";
});
document.getElementById("cart-button").addEventListener("click", () => {
    if (cart.style.display === "none" || cart.style.display === "") {
        cart.style.display = "flex";
    } else {
        cart.style.display = "none";
    }
});
const cartItemImgs = JSON.parse(localStorage.getItem("cartItemImgs"));
const cartItemNames = JSON.parse(localStorage.getItem("cartItemNames"));
const cartItemPrices = JSON.parse(localStorage.getItem("cartItemPrices"));
const cartItemQuantities = JSON.parse(localStorage.getItem("cartItemQuantities"));
console.log(cartItemQuantities, "AHHHH");
for (let i = 0; i < cartItemImgs.length; i++) {

    document.getElementById("cart-items").innerHTML += `
        <div class="cart-item row">
            <img class="col-4" src=${cartItemImgs[i]}>
            <div class="col-5">
                <p>${cartItemNames[i]}</p>
                <label for="quantity">Quantity: </label>
                <input class="quantity" type="number" value="${cartItemQuantities[i]}" min="1" max="9">
                <span> at ${cartItemPrices[i]}</span>
            </div>
            <p class="col-2 cart-price">${(cartItemPrices[i] * cartItemQuantities[i]).toFixed(2)}</p>
            <span class="close">X</span>
        </div>`;
}
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
        console.log(cartItemQuantities, "AHHHH");
      });
      // UPDATE QUANTITY SO IT DOESN'T RESET TO 1 WHEN ADDING NEW ITEM TO CART
      //quantities[j].value = cartPrice[j].innerText / cartItemPrices[j];
    }