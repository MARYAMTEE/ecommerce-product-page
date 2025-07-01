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
const addToCartBtn = document.querySelector(".add-to-cart");
const emptyMessage = document.querySelector(".empty-message");
const deleteBtn = document.querySelector(".delete-icon");

const cartDropdown = document.querySelector(".cart-dropdown");
const cartContent = document.querySelector(".cart-content");
const itemPrice = document.getElementById("item-price");
const itemCount = document.getElementById("item-count");


const cartIcon = document.querySelector(".cart-icon");


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
  if (quantity === 0) {
    return;
  }

  const total = (price * quantity).toFixed(2);

  itemPrice.innerHTML = `
    $${price.toFixed(2)} × ${quantity} 
    <strong class="total-price">$${total}</strong>
  `;

  itemCount.textContent = quantity;
  itemCount.classList.remove("hidden");

  cartDropdown.classList.remove("hidden");
});


// Delete from cart
deleteBtn.addEventListener("click", () => {
  itemPrice.innerHTML = "";
  itemCount.classList.add("hidden");
  itemCount.textContent = "0";
  quantity = 0;
  displayQuantity.textContent = "0";
  // emptyMessage.textContent = "Your cart is empty.";
});


cartIcon.addEventListener("click", () => {
  cartDropdown.classList.toggle("hidden");

  const cartItem = document.querySelector(".cart-item");

  if(quantity === 0) {
    emptyMessage.textContent = "Your cart is empty.";
    cartItem.classList.add("hidden");
  }else{
    emptyMessage.textContent = "";
    cartItem.classList.remove("hidden");
  }
});