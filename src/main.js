
import products from "./data/products.json";

const productGrid = document.getElementById("product-grid");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const pageInfo = document.getElementById("page-info");

const productsPerPage = 5;
let currentPage = 1;

const totalPages = Math.ceil(products.length / productsPerPage);

function displayProducts() {
  const start = (currentPage - 1) * productsPerPage;
  const end = start + productsPerPage;

  const currentProducts = products.slice(start, end);

  productGrid.innerHTML = "";

  currentProducts.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const imagePath = product.imageUrl.replace(/^\./, "");

    productCard.innerHTML = `
       <img src="${imagePath}" alt="${product.name}">

  <span class="category-badge">${product.category}</span>

  <h3>${product.name}</h3>

  <p class="product-description">${product.description}</p>

  <p class="product-price">
    <strong>$${product.price.toFixed(2)}</strong>
  </p>
    `;

    productGrid.appendChild(productCard);
  });

  pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;

  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage === totalPages;
}

if (productGrid) {
  displayProducts();

  nextBtn.addEventListener("click", () => {
    if (currentPage < totalPages) {
      currentPage++;
      displayProducts();
    }
  });

  prevBtn.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      displayProducts();
    }
  });
}

