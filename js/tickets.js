document.addEventListener('DOMContentLoaded', () => {
    const ticketButtons = document.querySelectorAll(".ticket-button");
    const ticketTitles = document.querySelectorAll(".ticket-title");
    const ticketPrices = document.querySelectorAll(".ticket-prices");

    // Use new cart system
    for (let i = 0; i < ticketButtons.length; i++) {
        ticketButtons[i].addEventListener("click", () => {
            // Add ticket to cart
            shoppingCart.addItem({
                type: 'ticket',
                name: ticketTitles[i].innerText,
                price: ticketPrices[i].innerText
            });
        });
    }
});