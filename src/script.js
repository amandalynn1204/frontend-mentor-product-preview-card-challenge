function alertMessage() {
  alert("Item has been added to your cart! 🛒");
}

let addToCartBtn = document.querySelector("button");
addToCartBtn.addEventListener("click", alertMessage);
