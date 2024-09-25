const moblieMenu = document.getElementById("mobile-menu");
document.getElementById("hamburger-group").addEventListener("click", () => {
    if (moblieMenu.style.display === "none" || moblieMenu.style.display === "") {
        moblieMenu.style.display = "flex";
    } else {
        moblieMenu.style.display = "none";
    }
});
let cart = document.getElementById("cart");
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
const getCartTicketNames = JSON.parse(localStorage.getItem("cartTicketNames"));
const getCartTicketPrices = JSON.parse(localStorage.getItem("cartTicketPrices"));
const getCartTicketQuantities = JSON.parse(localStorage.getItem("cartTicketQuantities"));
console.log("LOADED CART ITEMS: ", getCartTicketNames);
for (let i = 0; i < cartItemImgs.length; i++) {
    document.getElementById("cart-items").innerHTML += `
        <div class="cart-item row">
            <img class="col-md-4 col-12" src=${cartItemImgs[i]}>
            <div class="col-md-5 col-12">
                <p class="pt-md-0 pt-3">${cartItemNames[i]}</p>
                <label for="quantity">Quantity: </label>
                <input class="quantity" type="number" value="${cartItemQuantities[i]}" min="1" max="9">
                <span> at $${cartItemPrices[i]}</span>
            </div>
            <p class="col-md-2 col-10 cart-price">${(cartItemPrices[i] * cartItemQuantities[i]).toFixed(2)}</p>
            <span class="col-md-1 col-2 close">X</span>
        </div>`;
}
for (let i = 0; i < getCartTicketNames.length; i++) {
    document.getElementById("cart-items").innerHTML += `
        <div class="cart-ticket row">
            <div class="col-md-9 col-12">
                <p>${getCartTicketNames[i]}</p>
                <label for="quantity">Quantity: </label>
                <input class="ticket-quantity" type="number" value="1" min="1" max="6">
                <span> at $${getCartTicketPrices[i]}</span>
            </div>
            <p class="col-md-2 col-10 cart-ticket-price">${getCartTicketPrices[i]}</p>
            <span class="col-md-1 col-2 close-ticket">X</span>
        </div>`;
}
const closeButtons = document.querySelectorAll(".close");
const closeTicketButtons = document.querySelectorAll(".close-ticket");
const cartItems = document.querySelectorAll(".cart-item");
let cartTicket = document.querySelectorAll(".cart-ticket");
const quantities = document.querySelectorAll(".quantity");
const cartPrice = document.querySelectorAll(".cart-price");
for (let j = 0; j < closeButtons.length; j++) {
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
    //quantities[j].value = cartPrice[j].innerText / cartItemPrices[j];
}
console.log(closeTicketButtons, cartTicket);
for (let j = 0; j < closeTicketButtons.length; j++) {
    closeTicketButtons[j].addEventListener("click", () => {
        cartTicket[j].remove();
        console.log(getCartTicketNames)
        getCartTicketNames.splice(j, 1);
        getCartTicketPrices.splice(j, 1);
        getCartTicketQuantities.splice(j, 1);
        localStorage.setItem('cartTicketNames', JSON.stringify(getCartTicketNames));
        localStorage.setItem('cartTicketPrices', JSON.stringify(getCartTicketPrices));
        localStorage.setItem('cartTicketQuantities', JSON.stringify(getCartTicketQuantities));
        console.log(getCartTicketNames)
    });
}