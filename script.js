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
const addToCartBtn = document.querySelector(".addToCartBtn")

let currentIndex = 0;

// Previous Button
prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + imageSources.length);
    mainImage.src = imageSources[currentIndex];
});

// Next Button
nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % imageSources.length;
    mainImage.src = imageSources[currentIndex];
})

//Add to Cart Calculation
let quantity = 0;
let price = 125.00;

plusBtn.addEventListener("click", () => {
    quantity++;
    displayQuantity.textContent = quantity;
});

// Subtract from cart calculation
minusBtn.addEventListener("click", () => {
    if(quantity > 0) {
        quantity--;
        displayQuantity.textContent = quantity;
    }
})