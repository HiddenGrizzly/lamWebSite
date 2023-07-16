const productsPerPage = 9;
let currentPage = 1;
let currentProduct = null;

function displayProducts() {
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const productsToDisplay = products.slice(startIndex, endIndex);

    let productsHTML = '';
    for (const product of productsToDisplay) {
        productsHTML += `
            <div class="product">
                <img src="${product.image}" alt="${product.name}" class="product-img" onclick="displayProductDetails('${product.name}')">
                <p class="product-name">${product.name}</p>
                <p class="product-price">$${product.price.toFixed(2)}</p>
            </div>
        `;
    }
    document.querySelector('.products-list').innerHTML = productsHTML;
}

function displayProductDetails(productName) {
    currentProduct = products.find(product => product.name === productName);
    document.querySelector('.product-details-img').src = currentProduct.image;
    document.querySelector('.product-details-name').textContent = currentProduct.name;
    document.querySelector('.product-details-description').textContent = currentProduct.description;
    document.querySelector('.product-details-price').textContent = `$${currentProduct.price.toFixed(2)}`;
    document.querySelector('.products-list').style.display = 'none';
    document.querySelector('.product-details').style.display = 'block';
}

function hideProductDetails() {
    document.querySelector('.products-list').style.display = 'block';
    document.querySelector('.product-details').style.display = 'none';
}

let cart = [];

function addToCart() {
    cart.push(currentProduct);
    alert(`${currentProduct.name} has been added to your cart!`);
}

function viewCart() {
    let cartHTML = '<h2>Your Cart</h2>';
    for (const product of cart) {
        cartHTML += `
            <div class="cart-item">
                <img src="${product.image}" alt="${product.name}" class="cart-item-img">
                <p class="cart-item-name">${product.name}</p>
                <p class="cart-item-price">$${product.price.toFixed(2)}</p>
            </div>
        `;
    }
    document.querySelector('.cart').innerHTML = cartHTML;
    document.querySelector('.products-list').style.display = 'none';
    document.querySelector('.product-details').style.display = 'none';
    document.querySelector('.cart').style.display = 'block';
}

function hideCart() {
    document.querySelector('.products-list').style.display = 'block';
    document.querySelector('.cart').style.display = 'none';
}

displayProducts();