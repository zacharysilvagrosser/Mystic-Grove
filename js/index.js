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
console.log(cartItemImgs);
for (let i = 0; i < cartItemImgs.length; i++) {
    document.getElementById("cart-items").innerHTML += `
        <div class="cart-item row">
            <img class="col-4" src=${cartItemImgs[i]}>
            <div class="col-5">
                <p>${cartItemNames[i]}</p>
                <label for="quantity">Quantity: </label>
                <input class="quantity" type="number" value="1" min="1" max="9">
                <span> at ${cartItemPrices[i]}</span>
            </div>
            <p class="col-2 cart-price">${cartItemPrices[i]}</p>
            <span class="close">X</span>
        </div>`;
}