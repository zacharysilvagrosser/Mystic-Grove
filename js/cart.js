// IMPROVED CART MANAGEMENT SYSTEM
// Uses localStorage but with proper structure and real-time saving

class ShoppingCart {
    constructor() {
        this.cartElement = document.getElementById("cart");
        this.cartItemsElement = document.getElementById("cart-items");
        console.log("Cart element:", this.cartElement);
        console.log("Cart items element:", this.cartItemsElement);
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
        console.log("Found cart buttons:", cartButtons.length);
        cartButtons.forEach(btn => {
            btn.addEventListener("click", (e) => {
                e.preventDefault();
                console.log("Cart button clicked!");
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
            this.cartItemsElement.innerHTML = '<p style="padding: 20px; text-align: center;">Your cart is empty</p>';
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
                <h3>Total: $${total.toFixed(2)}</h3>
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
    console.log("Initializing shopping cart...");
    shoppingCart = new ShoppingCart();
    console.log("Shopping cart initialized:", shoppingCart);
});
