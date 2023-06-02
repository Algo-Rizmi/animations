let products = [
  { id: 1, name: "Product 1", description: "This is product 1", price: 100 },
  { id: 2, name: "Product 2", description: "This is product 2", price: 200 },
  // Add more products as needed
];

let productListElement = document.getElementById("product-list");

for (let product of products) {
  let productElement = document.createElement("div");
  productElement.innerHTML = `
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <p>$${product.price}</p>
        <button>Add to Cart</button>
    `;
  productListElement.appendChild(productElement);
}

let cart = [];

function addToCart(productId) {
  let product = products.find((p) => p.id === productId);
  cart.push(product);
  updateCart();
}

function updateCart() {
  let cartElement = document.getElementById("cart");
  cartElement.innerHTML = ""; // Clear the cart display
  for (let item of cart) {
    let itemElement = document.createElement("p");
    itemElement.textContent = item.name;
    cartElement.appendChild(itemElement);
  }
}

for (let product of products) {
  let productElement = document.createElement("div");
  productElement.innerHTML = `
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <p>$${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
  productListElement.appendChild(productElement);
}
