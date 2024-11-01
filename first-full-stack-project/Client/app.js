const cartContainer = document.getElementById("cart-container");
const productsContainer = document.getElementById("products-container");
const dessertCards = document.getElementById("dessert-card-container");
const cartBtn = document.getElementById("cart-btn");
const clearCartBtn = document.getElementById("clear-cart-btn");
const totalNumberOfItems = document.getElementById("total-items");
const cartSubTotal = document.getElementById("subtotal");
const cartTaxes = document.getElementById("taxes");
const cartTotal = document.getElementById("total");
const showHideCartSpan = document.getElementById("show-hide-cart");
const modalContainer = document.getElementById("modal-container");
const homePage = document.querySelector(".home-page");
const aboutPage = document.querySelector(".about-page");
const dessertPage = document.querySelector(".dessert-page");
const contactPage = document.querySelector(".contact-page");
const navLinkBtn = document.querySelectorAll(".nav-link");
const cardPopUp = document.querySelector(".card-popUp");
let isCartShowing = false;

async function getData() {
  // Get Request
  const res = await fetch("http://localhost:3000");
  const products = await res.json();

  return products;
}

const products = await getData();

function showCard(elem, class1) {
  elem.style.display = class1;
}

function navBtns(elem1, elem2, elem3, elem4, class1, class2) {
  elem1.style.display = class1
  elem2.style.display = class2
  elem3.style.display = class2
  elem4.style.display = class2
}

navLinkBtn.forEach((elem, index) => {
  elem.addEventListener("click", function (ev) {
    let btnElem = ev.target.textContent.toLowerCase();
    switch (btnElem) {
      case "home":
        navBtns(homePage, aboutPage, dessertPage, contactPage, "block", "none")
        break;
      case "about":
         navBtns(aboutPage, dessertPage, homePage, contactPage, 'block', 'none')
         break; 
      case "desserts":
          navBtns(dessertPage, homePage, aboutPage, contactPage, 'block', 'none') 
          break;
      default: 
          navBtns(contactPage, homePage, dessertPage, aboutPage, 'block', 'none')      
    }
  });
});

console.log(products);
products.forEach(({ name, id, price, category, image }) => {
  dessertCards.innerHTML += `
  <div class="dessert-card">
  <img class="card-pic" src=${image} alt="">
        <h2>${name}</h2>
        <p class="dessert-price">$${price}</p>
        <p class="product-category">Category: ${category}</p>
        <button type="button"
          id="${id}" 
          class="btn add-to-cart-btn">Add to cart
        </button>
      </div>
    `;
  generateModalClicks();
});

function generateModalClicks() {
  const modalSwitch = document.querySelectorAll(".card-pic");
  modalSwitch.forEach((elem) => {
    elem.addEventListener("click", function (ev) {
      const cardName = ev.target.nextElementSibling.textContent;
      console.log(cardName);

      const cardItem = products.filter((item) => item.name === cardName);
      console.log(cardItem);

      cardItem.forEach((item) => {
        let card = ` <img class="modal-img" src=${item.image} alt=${item.name}>
              <h3 class="name">${item.name}</h3>
              <p class="description">${item.description}</p>
              <h3 class="price">$${item.price}</h3>
               <button type="button" id="close" class="close-btn">Close</button>
              `;
        cardPopUp.innerHTML = card;
        let closeBtn = cardPopUp.querySelector(".close-btn");
        closeBtn.addEventListener("click", () => {
          showCard(modalContainer, "none");
        });
        return card;
      });
      showCard(modalContainer, "block");
    });
  });
}

class ShoppingCart {
  constructor() {
    this.items = [];
    this.total = 0;
    this.taxRate = 8.25;
  }

  addItem(id, products) {
    const product = products.find((item) => item.id === id);
    const { name, price } = product;
    this.items.push(product);

    const totalCountPerProduct = {};
    this.items.forEach((dessert) => {
      totalCountPerProduct[dessert.id] =
        (totalCountPerProduct[dessert.id] || 0) + 1;
    });

    const currentProductCount = totalCountPerProduct[product.id];
    const currentProductCountSpan = document.getElementById(
      `product-count-for-id${id}`
    );

    currentProductCount > 1
      ? (currentProductCountSpan.textContent = `${currentProductCount}x`)
      : (productsContainer.innerHTML += `
      <div id="dessert${id}" class="product">
        <p>
          <span class="product-count" id="product-count-for-id${id}"></span>${name}
        </p>
        <p>$${price}</p>
      </div>
      `);
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
    cartContainer.style.display = "none";
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
}

const cart = new ShoppingCart();
const addToCartBtns = document.getElementsByClassName("add-to-cart-btn");

[...addToCartBtns].forEach((btn) => {
  btn.addEventListener("click", (event) => {
    cart.addItem(Number(event.target.id), products);
    totalNumberOfItems.textContent = cart.getCounts();
    cart.calculateTotal();
  });
});

cartBtn.addEventListener("click", () => {
  isCartShowing = !isCartShowing;
  if (cart.items.length <= 0) {
    alert("Your cart is empty please add something");
  } else {
    cartContainer.style.display = isCartShowing ? "block" : "none";
  }
});

clearCartBtn.addEventListener("click", cart.clearCart.bind(cart));
