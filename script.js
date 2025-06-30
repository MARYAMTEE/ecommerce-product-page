const imageSources = [
    "images/image-product-1.jpg",
    "images/image-product-2.jpg",
    "images/image-product-3.jpg",
    "images/image-product-4.jpg"
];

const mainImage = document.querySelector(".main-image");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const plusBtn = document.querySelector(".plus-btn");
const minusBtn = document.querySelector(".minus-btn");
const displayQuantity = document.querySelector(".display-quantity");
const addToCartBtn = document.querySelector(".addToCartBtn");
const emptyMessage = document.querySelector(".empty-message");
const deleteBtn = document.querySelector(".delete-icon");

const cartDropdown = document.querySelector(".cart-dropdown");
const cartContent = document.querySelector(".cart-content");
const itemPrice = document.getElementById("item-price");
const itemCount = document.getElementById("item-count");

let currentIndex = 0;
let quantity = 0;
const price = 125.00;

// Previous Button
prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + imageSources.length) % imageSources.length;
    mainImage.src = imageSources[currentIndex];
});

// Next Button
nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % imageSources.length;
    mainImage.src = imageSources[currentIndex];
})

//Add to Cart Calculation
plusBtn.addEventListener("click", () => {
    quantity++;
    displayQuantity.textContent = quantity;
    emptyMessage.textContent = ""; // Clear empty message when user starts increasing
});

// Subtract from cart calculation
minusBtn.addEventListener("click", () => {
    if(quantity > 0) {
        quantity--;
        displayQuantity.textContent = quantity;
    }
});

// Add to cart button
addToCartBtn.addEventListener("click", () => {
    if(quantity === 0) return;

    const total = (price * quantity).toFixed(2);

      itemPrice.innerHTML = `
    $${price.toFixed(2)} × ${quantity} 
    <strong class="total-price">$${total}</strong>
    `;

    // if(itemPrice){
    //     itemPrice.innerHTML = `$${price.toFixed(2)} x ${quantity} <strong class="total-price">$${total}</strong>`;
    // }

    cartDropdown.classList.remove("hidden");
    itemCount.classList.remove("hidden");
    itemCount.textContent = quantity;
    emptyMessage.textContent = "";
    console.log("Item Price Element:", itemPrice);
    console.log("Item Count Element:", itemCount);
});

// Delete Item from cart
deleteBtn.addEventListener("click", () => {
    if (itemPrice) itemPrice.innerHTML = "";
    itemCount.classList.add("hidden");
    quantity = 0;
    displayQuantity.textContent = "0";
    emptyMessage.textContent = "Your cart is empty.";
});