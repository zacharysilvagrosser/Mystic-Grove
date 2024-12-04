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
const cartButton = document.querySelectorAll(".cart-button")
cartButton.forEach(i => {
    i.addEventListener("click", () => {
        if (cart.style.display === "none" || cart.style.display === "") {
            cart.style.display = "flex";
        } else {
            cart.style.display = "none";
        }
    });
});
let [cartItemImgs, cartItemNames, cartItemPrices, cartItemQuantities] = [[], [], [], []];
if (JSON.parse(localStorage.getItem("cartItemImgs")) != null) {
    cartItemImgs = JSON.parse(localStorage.getItem("cartItemImgs"));
    cartItemNames = JSON.parse(localStorage.getItem("cartItemNames"));
    cartItemPrices = JSON.parse(localStorage.getItem("cartItemPrices"));
    cartItemQuantities = JSON.parse(localStorage.getItem("cartItemQuantities"));
    console.log(cartItemImgs.length);
}
let [cartTicketNames, cartTicketPrices, cartTicketQuantities] = [[], [], []];
if (JSON.parse(localStorage.getItem("cartTicketNames")) != null) {
    cartTicketNames = JSON.parse(localStorage.getItem("cartTicketNames"));
    cartTicketPrices = JSON.parse(localStorage.getItem("cartTicketPrices"));
    cartTicketQuantities = JSON.parse(localStorage.getItem("cartTicketQuantities"));
}
for (let i = 0; i < cartItemImgs.length; i++) {
    document.getElementById("cart-items").innerHTML += 
    `<div class="cart-item row">
        <img class="col-sm-4 col-12 cart-img" src=${cartItemImgs[i]}>
        <div class="col-sm-5 col-12">
            <p class="cart-name">${cartItemNames[i]}</p>
            <label for="quantity">Quantity: </label>
            <input class="quantity" type="number" value="${cartItemQuantities[i]}" min="1" max="9">
            <span> at $${(cartItemPrices[i] / cartItemQuantities[i]).toFixed(2)}</span>
        </div>
        <p class="col-sm-2 col-10 cart-price">${(cartItemPrices[i] * cartItemQuantities[i]).toFixed(2)}</p>
    </div>`
}
for (let i = 0; i < cartTicketNames.length; i++) {
    document.getElementById("cart-items").innerHTML += `
        <div class="cart-ticket row">
            <div class="col-md-9 col-12">
                <p>${cartTicketNames[i]}</p>
                <label for="quantity">Quantity: </label>
                <input class="ticket-quantity" type="number" value="${cartTicketQuantities[i]}" min="1" max="6">
                <span> at $${cartTicketPrices[i]}</span>
            </div>
            <p class="col-md-2 col-10 cart-ticket-price">${cartTicketPrices[i]}</p>
        </div>`;
}
let cartItems = document.querySelectorAll(".cart-item");
let cartTicket = document.querySelectorAll(".cart-ticket");
let cartTicketPrice = document.querySelectorAll(".cart-ticket-price");
let ticketQuantities = document.querySelectorAll(".ticket-quantity");
const quantities = document.querySelectorAll(".quantity");
const cartPrice = document.querySelectorAll(".cart-price");
for (let j = 0; j < cartItems.length; j++) {
    // UPDATE PRICE OF ITEMS WHEN INCREASING QUANTITY
    cartItemQuantities[j] = quantities[j].value;
    quantities[j].addEventListener("input", () => {
        cartPrice[j].innerText = `${(cartItemPrices[j] * quantities[j].value).toFixed(2)}`;
        cartItemQuantities[j] = quantities[j].value;
        console.log(cartItemPrices[j], quantities[j].value)
    });
}
for (let j = 0; j < cartTicket.length; j++) {
    ticketQuantities[j].value = cartTicketQuantities[j];
    ticketQuantities[j].addEventListener("input", () => {
        //cartTicketPrice[j].innerText = `${(ticketPrices[i].innerText * ticketQuantities[j].value).toFixed(2)}`;
        cartTicketQuantities[j] = ticketQuantities[j].value;
    });
}
let storedData = cartItemImgs.length;
let clearCart = false;
document.getElementById('clear-button').addEventListener('click', () => {
    clearCart = true;
    for (let j = 0; j < cartItems.length; j++) {
        cartItems[j].remove();
    }
    for (let j = 0; j < cartTicket.length; j++) {
        cartTicket[j].remove();
    }
});
document.getElementById('exit-cart-button').addEventListener('click', () => {
    document.getElementById("shop-container").classList.remove("dim");
});
document.querySelectorAll('.cart-button').forEach(button => {
    button.addEventListener('click', () => {
        document.getElementById("shop-container").classList.remove("dim");
    });
});
// STORE ALL CART ITEMS
$("a").click(function() {
    if (clearCart) {
        localStorage.clear();
        return;
    }
    const storeCartImg = document.querySelectorAll(".cart-img");
    const storeCartName = document.querySelectorAll(".cart-name");
    const storeCartPrice = document.querySelectorAll(".cart-price");
    const storeCartQuantities = document.querySelectorAll(".quantity");
    for (let i = 0 + storedData; i < storeCartImg.length; i++) {
        // STORE VALUES IN ARRAY SO CART ITMES CAN PERSIST THROUGH PAGE CHANGES
        cartItemImgs.push(storeCartImg[i].getAttribute("src"));
        cartItemNames.push(storeCartName[i].innerHTML);
        cartItemPrices.push(storeCartPrice[i].innerText / storeCartQuantities[i].value);
        cartItemQuantities.push(storeCartQuantities[i].value);
    }
    localStorage.setItem('cartItemImgs', JSON.stringify(cartItemImgs));
    localStorage.setItem('cartItemNames', JSON.stringify(cartItemNames));
    localStorage.setItem('cartItemPrices', JSON.stringify(cartItemPrices));
    localStorage.setItem('cartItemQuantities', JSON.stringify(cartItemQuantities));
    cartTicket = document.querySelectorAll(".cart-ticket");
    for (let i = 0/* + storedTickets*/; i < cartTicket.length; i++) {
        const storeTicketName = document.querySelectorAll(".cart-ticket-name");
        const storeTicketPrice = document.querySelectorAll(".cart-ticket-price");
        // STORE VALUES IN ARRAY SO CART ITMES CAN PERSIST THROUGH PAGE CHANGES
        cartTicketNames.push(storeTicketName[i].innerHTML);
        cartTicketPrices.push(storeTicketPrice[i].innerText);
    }
    localStorage.setItem('cartTicketNames', JSON.stringify(cartTicketNames));
    localStorage.setItem('cartTicketPrices', JSON.stringify(cartTicketPrices));
    localStorage.setItem('cartTicketQuantities', JSON.stringify(cartTicketQuantities));
});
//localStorage.clear();