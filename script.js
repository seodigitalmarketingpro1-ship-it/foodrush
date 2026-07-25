/* =========================
   PRODUCT DATA
========================= */

const products = [

    {
        name: "Baby Activity Toy",
        category: "baby",
        description: "Fun and engaging toy for babies and toddlers.",
        image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=800&q=80",
        link: "YOUR_AFFILIATE_LINK_HERE"
    },

    {
        name: "Modern Home Organizer",
        category: "home",
        description: "Useful product to keep your home clean and organized.",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
        link: "YOUR_AFFILIATE_LINK_HERE"
    },

    {
        name: "Premium Casual Outfit",
        category: "fashion",
        description: "Stylish and comfortable fashion product for daily use.",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
        link: "YOUR_AFFILIATE_LINK_HERE"
    },

    {
        name: "Wireless Earbuds",
        category: "electronics",
        description: "Enjoy music and calls with this trending gadget.",
        image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=800&q=80",
        link: "YOUR_AFFILIATE_LINK_HERE"
    },

    {
        name: "Baby Feeding Product",
        category: "baby",
        description: "A useful everyday product for parents and babies.",
        image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=800&q=80",
        link: "YOUR_AFFILIATE_LINK_HERE"
    },

    {
        name: "Smart Home Product",
        category: "home",
        description: "Make your everyday life easier with this useful product.",
        image: "https://images.unsplash.com/photo-1558008258-3256797b43f3?auto=format&fit=crop&w=800&q=80",
        link: "YOUR_AFFILIATE_LINK_HERE"
    },

    {
        name: "Trendy Fashion Item",
        category: "fashion",
        description: "A stylish product that is trending right now.",
        image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80",
        link: "YOUR_AFFILIATE_LINK_HERE"
    },

    {
        name: "Smart Tech Gadget",
        category: "electronics",
        description: "A useful and popular gadget for everyday life.",
        image: "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?auto=format&fit=crop&w=800&q=80",
        link: "YOUR_AFFILIATE_LINK_HERE"
    }

];


/* =========================
   DISPLAY PRODUCTS
========================= */

const productsContainer =
    document.getElementById("productsContainer");


function displayProducts(category = "all") {

    productsContainer.innerHTML = "";

    const filteredProducts = category === "all"
        ? products
        : products.filter(product => product.category === category);


    filteredProducts.forEach(product => {

        const productCard = document.createElement("div");

        productCard.className = "product-card";

        productCard.innerHTML = `

            <img
                src="${product.image}"
                alt="${product.name}"
                class="product-image"
                loading="lazy"
            >

            <div class="product-info">

                <span class="product-category">
                    ${product.category}
                </span>

                <h3>
                    ${product.name}
                </h3>

                <p>
                    ${product.description}
                </p>

                <a
                    href="${product.link}"
                    target="_blank"
                    rel="nofollow sponsored noopener"
                    class="product-btn"
                >
                    Check Best Price →
                </a>

            </div>

        `;

        productsContainer.appendChild(productCard);

    });

}


/* =========================
   CATEGORY FILTER
========================= */

const categoryButtons =
    document.querySelectorAll(".category");


categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        categoryButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const category =
            button.getAttribute("data-category");

        displayProducts(category);

    });

});


/* =========================
   INITIAL LOAD
========================= */

displayProducts("all");
