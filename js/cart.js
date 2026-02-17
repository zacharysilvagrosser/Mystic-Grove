// IMPROVED CART MANAGEMENT SYSTEM
// Uses localStorage but with proper structure and real-time saving

class ShoppingCart {
    constructor() {
        this.cartElement = document.getElementById("cart");
        this.cartItemsElement = document.getElementById("cart-items");
        this.checkoutMessage = null;
        if (!this.cartElement || !this.cartItemsElement) {
            console.error("Cart elements not found!");
            return;
        }
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.loadCart();
        this.renderCart();
    }

    setupEventListeners() {
        // Exit cart button
        const exitBtn = document.getElementById("exit-cart-button");
        if (exitBtn) {
            exitBtn.addEventListener("click", () => {
                this.cartElement.style.display = "none";
            });
        }

        // Cart toggle buttons
        const cartButtons = document.querySelectorAll(".cart-button");
        cartButtons.forEach(btn => {
            btn.addEventListener("click", (e) => {
                e.preventDefault();
                if (this.cartElement.style.display === "none" || this.cartElement.style.display === "") {
                    this.cartElement.style.display = "flex";
                } else {
                    this.cartElement.style.display = "none";
                }
            });
        });

        // Clear cart button
        const clearBtn = document.getElementById("clear-button");
        if (clearBtn) {
            clearBtn.addEventListener("click", () => {
                this.clearCart();
            });
        }

        // Checkout buttons (all cart-buttons except clear)
        const checkoutButtons = document.querySelectorAll(".cart-buttons");
        checkoutButtons.forEach(btn => {
            if (btn.id === "clear-button") {
                return;
            }
            btn.addEventListener("click", () => {
                this.checkout();
            });
        });
    }

    // Load cart from localStorage
    loadCart() {
        const savedCart = localStorage.getItem('shoppingCart');
        this.cart = savedCart ? JSON.parse(savedCart) : [];
    }

    // Save cart to localStorage
    saveCart() {
        localStorage.setItem('shoppingCart', JSON.stringify(this.cart));
    }

    // Add item to cart
    addItem(item) {
        // Check if item already exists in cart
        const existingItemIndex = this.cart.findIndex(cartItem => 
            cartItem.name === item.name && cartItem.type === item.type
        );

        if (existingItemIndex !== -1) {
            // Item exists, increase quantity
            this.cart[existingItemIndex].quantity += 1;
        } else {
            // New item
            this.cart.push({
                type: item.type, // 'product' or 'ticket'
                name: item.name,
                price: parseFloat(item.price),
                quantity: 1,
                image: item.image || null
            });
        }

        this.saveCart();
        this.renderCart();
        this.showCart();
    }

    // Remove item from cart
    removeItem(index) {
        this.cart.splice(index, 1);
        this.saveCart();
        this.renderCart();
    }

    // Update item quantity
    updateQuantity(index, newQuantity) {
        const qty = parseInt(newQuantity);
        if (qty > 0 && qty <= 99) {
            this.cart[index].quantity = qty;
            this.saveCart();
            this.renderCart();
        }
    }

    // Clear entire cart
    clearCart() {
        this.cart = [];
        this.saveCart();
        this.renderCart();
    }

    // Checkout cart
    checkout() {
        if (this.cart.length === 0) {
            this.showCheckoutMessage("Your cart is empty.", false);
            return;
        }
        this.cart = [];
        this.saveCart();
        this.showCheckoutMessage("You're checked out! Enjoy your goods.", true);
        this.renderCart();
    }

    // Show checkout message in cart
    showCheckoutMessage(message, isSuccess) {
        this.checkoutMessage = {
            message,
            isSuccess
        };
        this.renderCart();
        window.setTimeout(() => {
            this.checkoutMessage = null;
            this.renderCart();
        }, 3000);
    }

    // Calculate totals
    getTotal() {
        return this.cart.reduce((total, item) => {
            return total + (item.price * item.quantity);
        }, 0);
    }

    // Render cart to DOM
    renderCart() {
        this.cartItemsElement.innerHTML = '';

        if (this.cart.length === 0) {
            if (this.checkoutMessage) {
                const iconClass = this.checkoutMessage.isSuccess ? "fa-check-circle" : "fa-info-circle";
                this.cartItemsElement.innerHTML = `
                    <div style="padding: 3rem 1rem; text-align: center; color: white;">
                        <i class="fas ${iconClass}" style="font-size: 4rem; opacity: 0.35; margin-bottom: 1rem;"></i>
                        <p style="font-size: 1.1rem; font-weight: 600;">${this.checkoutMessage.message}</p>
                        <p style="font-size: 0.9rem; opacity: 0.8;">Thanks for visiting Mystic Grove!</p>
                    </div>`;
            } else {
                this.cartItemsElement.innerHTML = `
                    <div style="padding: 3rem 1rem; text-align: center; color: white;">
                        <i class="fas fa-shopping-cart" style="font-size: 4rem; opacity: 0.3; margin-bottom: 1rem;"></i>
                        <p style="font-size: 1.1rem; font-weight: 500;">Your cart is empty</p>
                        <p style="font-size: 0.9rem; opacity: 0.8;">Add some items to get started!</p>
                    </div>`;
            }
            return;
        }

        this.cart.forEach((item, index) => {
            const itemTotal = (item.price * item.quantity).toFixed(2);
            
            if (item.type === 'product') {
                this.cartItemsElement.innerHTML += `
                    <div class="cart-item row" data-index="${index}">
                        <img class="col-sm-4 col-12 cart-img" src="${item.image}" alt="${item.name}">
                        <div class="col-sm-5 col-12">
                            <p class="cart-name">${item.name}</p>
                            <label for="quantity-${index}">Quantity: </label>
                            <input class="quantity" id="quantity-${index}" type="number" value="${item.quantity}" min="1" max="99">
                            <span> at $${item.price.toFixed(2)}</span>
                        </div>
                        <p class="col-sm-2 col-10 cart-price">$${itemTotal}</p>
                        <div class="close" data-index="${index}">X</div>
                    </div>`;
            } else if (item.type === 'ticket') {
                this.cartItemsElement.innerHTML += `
                    <div class="cart-ticket row" data-index="${index}">
                        <div class="col-md-9 col-12">
                            <p class="cart-ticket-name">${item.name}</p>
                            <label for="ticket-quantity-${index}">Quantity: </label>
                            <input class="ticket-quantity" id="ticket-quantity-${index}" type="number" value="${item.quantity}" min="1" max="20">
                            <span> at $${item.price.toFixed(2)}</span>
                        </div>
                        <p class="col-md-2 col-10 cart-ticket-price">$${itemTotal}</p>
                        <div class="close" data-index="${index}">X</div>
                    </div>`;
            }
        });

        // Add total
        const total = this.getTotal();
        this.cartItemsElement.innerHTML += `
            <div class="cart-total">
                <h3>Total: <span>$${total.toFixed(2)}</span></h3>
            </div>`;

        // Attach event listeners to newly created elements
        this.attachItemEventListeners();
    }

    // Attach event listeners to cart items
    attachItemEventListeners() {
        // Remove buttons
        document.querySelectorAll('.close').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const index = parseInt(e.target.dataset.index);
                this.removeItem(index);
            });
        });

        // Quantity inputs for products
        document.querySelectorAll('.quantity').forEach(input => {
            input.addEventListener('change', (e) => {
                const index = parseInt(e.target.closest('[data-index]').dataset.index);
                this.updateQuantity(index, e.target.value);
            });
        });

        // Quantity inputs for tickets
        document.querySelectorAll('.ticket-quantity').forEach(input => {
            input.addEventListener('change', (e) => {
                const index = parseInt(e.target.closest('[data-index]').dataset.index);
                this.updateQuantity(index, e.target.value);
            });
        });
    }

    // Show cart
    showCart() {
        this.cartElement.style.display = "flex";
    }

    // Get cart count
    getItemCount() {
        return this.cart.reduce((count, item) => count + item.quantity, 0);
    }
}

// Initialize cart globally after DOM is ready
let shoppingCart;
document.addEventListener('DOMContentLoaded', () => {
    shoppingCart = new ShoppingCart();
});
