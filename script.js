// Navigation bar control
const openNav = document.querySelector(".open-btn");
const closeNav = document.querySelector(".close-btn");
const navBar = document.querySelector("nav");
const navLink = document.querySelectorAll(".nav-link");
const overlay = document.querySelector(".overlay");

openNav.addEventListener("click", () => {
  navBar.classList.toggle("toggle");
  overlay.classList.remove("hidden");
});

closeNav.addEventListener("click", ()=> {
  navBar.classList.remove("toggle");
  overlay.classList.add("hidden");
});

overlay.addEventListener("click", () => {
  if(window.innerWidth <= 700) {
    navBar.classList.remove("toggle");
    overlay.classList.add("hidden");
  }
});

navLink.forEach(link => {
  link.addEventListener("click", () => {
    navLink.forEach(nav => nav.classList.remove("active"));
    link.classList.add("active");
    if(window.innerWidth <= 700) {
      navBar.classList.remove("toggle");
      overlay.classList.add("hidden");
    }
  });
});

const imageSources = [
    "./images/image-product-1.jpg",
    "./images/image-product-2.jpg",
    "./images/image-product-3.jpg",
    "./images/image-product-4.jpg"
];

const mainImage = document.querySelector(".main-image");
const prevBtn = document.querySelector(".main-img .prev");
const nextBtn = document.querySelector(".main-img .next");
const plusBtn = document.querySelector(".plus-btn");
const minusBtn = document.querySelector(".minus-btn");
const displayQuantity = document.querySelector(".display-quantity");
const addToCartBtn = document.querySelector(".add-to-cart");
const emptyMessage = document.querySelector(".empty-message");
const deleteBtn = document.querySelector(".delete-icon");

const cartDropdown = document.querySelector(".cart-dropdown");
const itemPrice = document.getElementById("item-price");
const itemCount = document.getElementById("item-count");


const cartIcon = document.querySelector(".cart-icon");
const checkoutBtn = document.querySelector(".checkout-btn");

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

// Reusable function
function updateCartUI() {

  const total = (price * quantity).toFixed(2);

  itemPrice.innerHTML = `
    $${price.toFixed(2)} × ${quantity} 
    <strong class="total-price">$${total}</strong>
  `;

  itemCount.textContent = quantity;
  itemCount.classList.remove("hidden");

  const cartItem = document.querySelector(".cart-item");

  if(quantity === 0) {
    emptyMessage.textContent = "Your cart is empty.";
    cartItem.classList.add("hidden");
  }else{
    emptyMessage.textContent = "";
    cartItem.classList.remove("hidden");
    checkoutBtn.classList.remove("hidden");
  }
};

// Add to cart button
addToCartBtn.addEventListener("click", () => {
  if(quantity === 0) return;

  updateCartUI();
  displayQuantity.textContent = 0;
})

// Cart Icon in the header
cartIcon.addEventListener("click", () => {
  cartDropdown.classList.remove("hidden");

  updateCartUI();
});

// close cart when anywhere outside the cart is clicked
document.addEventListener("click", (e) => {
  const clickInsideCart = cartDropdown.contains(e.target);
  const clickOutsideCart = cartIcon.contains(e.target);

  if(!clickInsideCart && !clickOutsideCart) {
    cartDropdown.classList.add("hidden");

    if (quantity === 0) {
      itemCount.classList.add("hidden");
    }
  }
})

// Delete from cart
deleteBtn.addEventListener("click", () => {
  itemPrice.innerHTML = "";
  itemCount.classList.add("hidden");
  quantity = 0;
  displayQuantity.textContent = "0";
  checkoutBtn.classList.add("hidden");
  updateCartUI();
});

// Desktop view images control
const mainThumb = document.querySelector(".main-thumb");
const productThumbs = document.querySelectorAll(".thumbnail-images .thumb");

const lightboxImage = document.querySelector(".lightbox-main-image");
const lightboxThumbs = document.querySelectorAll(".lightbox-thumbnails .thumb")

productThumbs.forEach((thumb, i) => {
  thumb.dataset.index = i;
  thumb.addEventListener("click", () => {
    currentIndex = i;
    mainThumb.src = imageSources[currentIndex];
    updateActiveThumbs(productThumbs, i);
  });
});

// Lightbox thumbnails
lightboxThumbs.forEach((thumb, i) => {
  thumb.dataset.index = i;
  thumb.addEventListener("click", () => {
    currentIndex = i;
    lightboxImage.src = imageSources[currentIndex];
    updateActiveThumbs(lightboxThumbs, i);
  });
});

function updateActiveThumbs(thumbnails, activeIndex){
  thumbnails.forEach((thumb, i) => {
    thumb.classList.toggle("active", i === activeIndex);
  });
};

mainThumb.addEventListener("click", () => {
  lightbox.classList.remove("hidden");
  overlay.classList.remove("hidden");
})

// close lightbox
const lightbox = document.querySelector(".lightbox")
const closeLightbox = document.querySelector(".close-lightbox");

closeLightbox.addEventListener("click", () => {
  lightbox.classList.add("hidden");
  overlay.classList.add("hidden");
});

// Next and Prev lightbox control
const lightboxPrev = document.querySelector(".lightbox-prev");
const lightboxNext = document.querySelector(".lightbox-next");

lightboxPrev.addEventListener("click", () =>{
  currentIndex = (currentIndex - 1 + imageSources.length) % imageSources.length;
  lightboxImage.src = imageSources[currentIndex];
});

lightboxNext.addEventListener("click", () => {
  currentIndex = (currentIndex + 1 + imageSources.length) % imageSources.length;
  lightboxImage.src = imageSources[currentIndex];
});