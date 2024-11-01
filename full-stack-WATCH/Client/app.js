async function getData() {
    const res = await fetch('http://localhost:3000');
    const data = await res.json()
    console.log(data);
    return data
}
getData()

const products = await getData();

const cartContainer = document.getElementById("cart-container");
const productsContainer = document.getElementById("products-container");
const watchCards = document.getElementById("watch-card-container");
const cartBtn = document.getElementById("cart-btn");
const clearCartBtn = document.getElementById("clear-cart-btn");
const totalNumberOfItems = document.getElementById("total-items");
const cartSubTotal = document.getElementById("subtotal");
const cartTaxes = document.getElementById("taxes");
const cartTotal = document.getElementById("total");
const showHideCartSpan = document.getElementById("show-hide-cart");
const removeItem = document.getElementById("remove");
let isCartShowing = false;

products.forEach(
  ({ name, id, price, img }) => {
    watchCards.innerHTML += `
    <div class="watch-card">
      <h2>${name}</h2>
      <p class="watch-price">$${price}</p>
      <img class="watches" src="${img}" alt="watch"> 
      <div class="push">
      <button 
      id="${id}" 
      class="btn add-to-cart-btn">Add to cart
      </button>
      <button id="remove ${id}" class="btn remove-from-cart-btn">Remove</button>
      </div>
      </div>
      `;
      }
      );
class ShoppingCart {
  constructor() {
    this.items = [];
    this.total = 0;
    this.taxRate = 8.25;
  }
  addItem(id, products) {
    const product = products.find((item) => item.id === id);
    const { name, price, img} = product;
    this.items.push(product);

    const totalCountPerProduct = {};
    this.items.forEach((watch) => {
      totalCountPerProduct[watch.id] = (totalCountPerProduct[watch.id] || 0) + 1;
    })

    const currentProductCount = totalCountPerProduct[product.id];
    const currentProductCountSpan = document.getElementById(`product-count-for-id${id}`);

    currentProductCount > 1 
      ? currentProductCountSpan.textContent = `${currentProductCount}x`
      : productsContainer.innerHTML += `
      <div id="watch${id}" class="product">
        <p>
          <span class="product-count" id="product-count-for-id${id}"></span>${name}
        </p>
        <img class="cart-watch remove-from-cart-btn" id="remove-watch" src="${img}" alt="watch"> 
        <p>$${price}</p>
      </div>
      `;
  }

  getCounts() {
    return this.items.length;
  }

  clearCart() {
    if (!this.items.length) {
      alert("Your shopping cart is already empty");
      return;
    }

    const isCartCleared = confirm(
      "Are you sure you want to clear all items from your shopping cart?"
    );

    if (isCartCleared) {
      this.items = [];
      this.total = 0;
      productsContainer.innerHTML = "";
      totalNumberOfItems.textContent = 0;
      cartSubTotal.textContent = 0;
      cartTaxes.textContent = 0;
      cartTotal.textContent = 0;
    }
  }

  calculateTaxes(amount) {
    return parseFloat(((this.taxRate / 100) * amount).toFixed(2));
  }

  calculateTotal() {
    const subTotal = this.items.reduce((total, item) => total + item.price, 0);
    const tax = this.calculateTaxes(subTotal);
    this.total = subTotal + tax;
    cartSubTotal.textContent = `$${subTotal.toFixed(2)}`;
    cartTaxes.textContent = `$${tax.toFixed(2)}`;
    cartTotal.textContent = `$${this.total.toFixed(2)}`;
    return this.total;
  }
};

const cart = new ShoppingCart();
const addToCartBtns = document.getElementsByClassName("add-to-cart-btn");

[...addToCartBtns].forEach(
  (btn) => {
    btn.addEventListener("click", (event) => {
      console.log(event);
      cart.addItem(Number(event.target.id), products);
      totalNumberOfItems.textContent = cart.getCounts();
      cart.calculateTotal();
    })
  }
);
cartBtn.addEventListener("click", () => {
  isCartShowing = !isCartShowing;
  showHideCartSpan.textContent = isCartShowing ? "Hide" : "Show";
  cartContainer.style.display = isCartShowing ? "block" : "none";
});
clearCartBtn.addEventListener("click", cart.clearCart.bind(cart) );

const reomveFromCartBtns = document.getElementsByClassName("remove-from-cart-btn");
[...reomveFromCartBtns].forEach(
  (btn) => {
    btn.addEventListener("click", (event) => {
      console.log(event);
      cart.removeItem(Number(event.target.id), products);
      totalNumberOfItems.textContent = cart.getCounts();
      cart.calculateTotal();
    })
  }
);

// function handleRemoveItem(e) {
  // grab the title to...
  // let myTitle = e.target.parentElement.firstElementChild.nextSibling.textContent;
  // find the obj in the cart
  // let thisItem = cartContainer.find((item) => item.name === myTitle)
  // find its index to...
  // let ind = cartContainer.indexOf(thisItem);
  // if (ind != -1) {
      // splice it
//       cartContainer.splice(ind, 1);
//   }
//   else {
//       alert('item not in cart');
//   }
//   console.log(e);
//   console.dir(cartContainer);
// };