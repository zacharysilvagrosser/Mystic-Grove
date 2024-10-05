const ticketButtons = document.querySelectorAll(".ticket-button");
const ticketTitles = document.querySelectorAll(".ticket-title");
const ticketPrices = document.querySelectorAll(".ticket-prices");
//let [cartTicketNames, cartTicketPrices, cartTicketQuantities] = [[], [], []];
for (let i = 0; i < ticketButtons.length; i++) {
    ticketButtons[i].addEventListener("click", () => {
        cart.style.display = "flex";
        // CREATE CART ITEM
        document.getElementById("cart-items").innerHTML += `
        <div class="cart-ticket row">
            <div class="col-sm-9 col-12">
                <p class="cart-ticket-name">${ticketTitles[i].innerText}</p>
                <label for="quantity">Quantity: </label>
                <input class="ticket-quantity" type="number" value="1" min="1" max="6">
                <span> at $${ticketPrices[i].innerText}</span>
            </div>
            <p class="col-sm-2 col-10 cart-ticket-price">${ticketPrices[i].innerText}</p>
            <div class="close-ticket">X</div>
        </div>`;
        const cartTicket = document.querySelectorAll(".cart-ticket");
        ticketQuantities = document.querySelectorAll(".ticket-quantity");
        const cartTicketPrice = document.querySelectorAll(".cart-ticket-price");
        for (let j = 0; j < cartTicket.length; j++) {
            const closeTicket = document.querySelectorAll(".close-ticket");
            closeTicket[j].addEventListener("click", () => {
                cartTicket[j].remove();
            });
            ticketQuantities[j].addEventListener("input", () => {
                cartTicketPrice[j].innerText = `${(ticketPrices[i].innerText * ticketQuantities[j].value).toFixed(2)}`;
                cartTicketQuantities[j] = ticketQuantities[j].value;
            });
            ticketQuantities[j].value = cartTicketQuantities[j];
            if (ticketQuantities[j].value == '') {
                ticketQuantities[j].value = 1;
                cartTicketQuantities[j] = ticketQuantities[j].value;
            }
        }
    });
}