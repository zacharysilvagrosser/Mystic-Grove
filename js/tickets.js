const ticketButtons = document.querySelectorAll(".ticket-button");
const ticketTitles = document.querySelectorAll(".ticket-title");
const ticketPrices = document.querySelectorAll(".ticket-prices");
let ticketQuantities = document.querySelectorAll(".ticket-quantity");
let [cartTicketNames, cartTicketPrices, cartTicketQuantities] = [[], [], []];
for (let i = 0; i < ticketButtons.length; i++) {
    ticketButtons[i].addEventListener("click", () => {
        cartTicketNames.push(ticketTitles[i].innerHTML);
        cartTicketPrices.push(ticketPrices[i].innerText);
        cart.style.display = "flex";
        // CREATE CART ITEM
        document.getElementById("cart-items").innerHTML += `
        <div class="cart-ticket row">
            <div class="col-md-9 col-12">
                <p>${cartTicketNames[cartTicketNames.length - 1]}</p>
                <label for="quantity">Quantity: </label>
                <input class="ticket-quantity" type="number" value="1" min="1" max="6">
                <span> at $${cartTicketPrices[cartTicketPrices.length - 1]}</span>
            </div>
            <p class="col-md-2 col-10 cart-ticket-price">${cartTicketPrices[cartTicketPrices.length - 1]}</p>
            <span class="col-md-1 col-2 close-ticket">X</span>
        </div>`;
        const closeTicket = document.querySelectorAll(".close-ticket");
        ticketQuantities = document.querySelectorAll(".ticket-quantity");
        const cartTicketPrice = document.querySelectorAll(".cart-ticket-price");
        for (let j = 0; j < cartTicket.length; j++) {
            closeTicket[j].addEventListener("click", () => {
                cartTicket[j].remove();
            });
            ticketQuantities[j].value = 1;
            // UPDATE PRICE OF ITEMS WHEN INCREASING QUANTITY
            cartTicketQuantities.push(ticketQuantities[j].value);
            ticketQuantities[j].addEventListener("input", () => {
                cartTicketPrice[j].innerText = `${(cartTicketPrices[j] * ticketQuantities[j].value).toFixed(2)}`;
                cartTicketQuantities[j] = ticketQuantities[j].value;
            });
            // UPDATE QUANTITY SO IT DOESN'T RESET TO 1 WHEN ADDING NEW ITEM TO CART
            ticketQuantities[j].value = cartTicketPrice[j].innerText / cartTicketPrices[j];
        }
    });
}
$("a").click(function() {
    localStorage.setItem('cartTicketNames', JSON.stringify(cartTicketNames));
    localStorage.setItem('cartTicketPrices', JSON.stringify(cartTicketPrices));
    localStorage.setItem('cartTicketQuantities', JSON.stringify(cartTicketQuantities));
});