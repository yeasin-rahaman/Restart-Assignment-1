const loadProducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();

    displayProductsHome(data);
    displayAllProducts(data);
};

const Categories = () => {
    fetch("https://fakestoreapi.com/products/categories")
        .then((res) => res.json())
        .then((json) => displayCategories(json));

};


// const ProductsByCategory = (category) => {
//     console.log(category);
// }

// Display Products Home 3 slice 

const displayProductsHome = (products) => {
    const container = document.getElementById("homeProducts");

    if (!container) {
        console.error("home Products element not found");
        return;
    }

    container.innerHTML = "";

    let html = "";

    for (let product of products.slice(0, 3)) {
        html += `
            <div class="col-md-4">
                <div class="card shadow-sm h-100">
                    <img src="${product.image}" class="card-img-top img-fluid" 
                         style="height:300px; object-fit:contain;">
                    <div class="card-body">
                        <div class="d-flex justify-content-between mb-2">
                            <span class="badge bg-primary">${product.category}</span>
                            <span>
                                <i class="bi bi-star-fill text-warning"></i>
                                ${product.rating.rate} (${product.rating.count})
                            </span>
                        </div>
                        <h6 class="card-title">${product.title}</h6>
                        <p class="fw-bold">$${product.price}</p>
                        <div class="d-flex justify-content-between">
                            <button class="btn btn-outline-secondary btn-sm">Details</button>
                            <button class="btn btn-primary btn-sm">
                                <i class="bi bi-cart"></i> Add
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    container.innerHTML = html;
};


// Display Products Home 3 slice 

const displayAllProducts = (products) => {
    const container = document.getElementById("allProducts");

    if (!container) {
        console.error("home Products element not found");
        return;
    }

    container.innerHTML = "";

    let html = "";

    for (let product of products) {
        html += `
            <div class="col-md-4">
                <div class="card shadow-sm h-100">
                    <img src="${product.image}" class="card-img-top img-fluid" 
                         style="height:300px; object-fit:contain;">
                    <div class="card-body">
                        <div class="d-flex justify-content-between mb-2">
                            <span class="badge bg-primary">${product.category}</span>
                            <span>
                                <i class="bi bi-star-fill text-warning"></i>
                                ${product.rating.rate} (${product.rating.count})
                            </span>
                        </div>
                        <h6 class="card-title">${product.title}</h6>
                        <p class="fw-bold">$${product.price}</p>
                        <div class="d-flex justify-content-between">
                            <button class="btn btn-outline-secondary btn-sm">Details</button>
                            <button class="btn btn-primary btn-sm">
                                <i class="bi bi-cart"></i> Add
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    container.innerHTML = html;
};

// Display Categories



const ProductsByCategory = (category) => {

    fetch(`https://fakestoreapi.com/products/category/${category}`)
        .then((res) => res.json())
        .then((json) => displayAllProducts(json));
}

const displayCategories = (categories) => {
    const categoriesButtons = document.getElementById("CategoriesButtons");
    categoriesButtons.innerHTML = ""; // clear existing buttons

    categories.forEach(category => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "btn btn-outline-primary m-2";
        button.textContent = category;

        // Add click event
        button.addEventListener("click", () => {
            ProductsByCategory(category);
        });

        categoriesButtons.appendChild(button);
    });
};



loadProducts();
Categories()