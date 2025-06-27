let cart = [];

function addToCart(name, price) {
    const existing = cart.find(item => item.name === name);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    updateCartDisplay();
    alert("Added to cart")
}

function updateCartDisplay() {
    const cartSection = document.getElementById("cart");
    let cartHTML = "<h2>Your Cart</h2>";
    let total = 0;

    cart.forEach((item) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        cartHTML += `
            <div class="cart-item">
                <span>${item.name}</span>
                <div>
                    <button onclick="changeQuantity('${item.name}', -1)">−</button>
                    <span>${item.quantity}</span>
                    <button onclick="changeQuantity('${item.name}', 1)">+</button>
                </div>
                <span>₵${itemTotal.toFixed(2)}</span>
            </div>
        `;
    });

    cartHTML += `<p><b>Total:</b> ₵${total.toFixed(2)}</p>`;
    cartSection.innerHTML = cartHTML;
}

function changeQuantity(name, delta) {
    const item = cart.find(item => item.name === name);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
        cart = cart.filter(i => i.name !== name);
    }
    updateCartDisplay();
}

