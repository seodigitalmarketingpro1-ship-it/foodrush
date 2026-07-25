/* =========================
   FOOD DATA
========================= */


const foods = [

    {

        name: "Cheesy Margherita Pizza",

        category: "pizza",

        tag: "Pizza",

        rating: "⭐ 4.8",

        time: "25-30 min",

        price: "$12.99",

        image:
            "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=85",

        link:
            "YOUR_AFFILIATE_LINK_HERE"

    },


    {

        name: "Classic Double Burger",

        category: "burger",

        tag: "Burgers",

        rating: "⭐ 4.7",

        time: "20-25 min",

        price: "$9.99",

        image:
            "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85",

        link:
            "YOUR_AFFILIATE_LINK_HERE"

    },


    {

        name: "Special Chicken Biryani",

        category: "biryani",

        tag: "Biryani",

        rating: "⭐ 4.9",

        time: "30-35 min",

        price: "$11.99",

        image:
            "https://images.unsplash.com/photo-1563379091339-03246963d96c?auto=format&fit=crop&w=900&q=85",

        link:
            "YOUR_AFFILIATE_LINK_HERE"

    },


    {

        name: "Spicy Asian Noodles",

        category: "chinese",

        tag: "Chinese",

        rating: "⭐ 4.6",

        time: "20-25 min",

        price: "$8.99",

        image:
            "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=900&q=85",

        link:
            "YOUR_AFFILIATE_LINK_HERE"

    },


    {

        name: "Crispy Fried Chicken",

        category: "chicken",

        tag: "Chicken",

        rating: "⭐ 4.8",

        time: "25-30 min",

        price: "$10.99",

        image:
            "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=900&q=85",

        link:
            "YOUR_AFFILIATE_LINK_HERE"

    },


    {

        name: "Chocolate Dessert",

        category: "dessert",

        tag: "Dessert",

        rating: "⭐ 4.7",

        time: "15-20 min",

        price: "$6.99",

        image:
            "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=85",

        link:
            "YOUR_AFFILIATE_LINK_HERE"

    },


    {

        name: "Pepperoni Pizza",

        category: "pizza",

        tag: "Pizza",

        rating: "⭐ 4.8",

        time: "25-30 min",

        price: "$13.99",

        image:
            "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=900&q=85",

        link:
            "YOUR_AFFILIATE_LINK_HERE"

    },


    {

        name: "Loaded Cheese Burger",

        category: "burger",

        tag: "Burgers",

        rating: "⭐ 4.9",

        time: "20-25 min",

        price: "$11.99",

        image:
            "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=85",

        link:
            "YOUR_AFFILIATE_LINK_HERE"

    }

];



/* =========================
   DISPLAY FOOD
========================= */


const foodContainer =
    document.getElementById(
        "foodContainer"
    );


function displayFood(
    category = "all",
    searchTerm = ""
) {


    foodContainer.innerHTML = "";


    let filteredFoods = foods;


    if (
        category !== "all"
    ) {

        filteredFoods =
            filteredFoods.filter(
                food =>
                    food.category ===
                    category
            );

    }


    if (
        searchTerm !== ""
    ) {

        filteredFoods =
            filteredFoods.filter(
                food =>
                    food.name
                        .toLowerCase()
                        .includes(
                            searchTerm
                                .toLowerCase()
                        )
            );

    }


    if (
        filteredFoods.length === 0
    ) {

        foodContainer.innerHTML = `

            <div class="no-results">

                😔

                <h3>
                    No food found
                </h3>

                <p>
                    Try searching for Pizza,
                    Burger or Biryani.
                </p>

            </div>

        `;

        return;

    }


    filteredFoods.forEach(
        food => {


            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "food-card";


            card.innerHTML = `

                <img

                    src="${food.image}"

                    alt="${food.name}"

                    class="food-image"

                    loading="lazy"

                >


                <div class="food-info">


                    <span class="food-tag">

                        ${food.tag}

                    </span>


                    <h3>

                        ${food.name}

                    </h3>


                    <div class="food-details">

                        <span class="rating">

                            ${food.rating}

                        </span>


                        <span>

                            🕒 ${food.time}

                        </span>


                        <strong>

                            ${food.price}

                        </strong>

                    </div>


                    <a

                        href="${food.link}"

                        target="_blank"

                        rel="nofollow sponsored noopener"

                        class="order-btn"

                    >

                        View Deal →

                    </a>


                </div>

            `;


            foodContainer.appendChild(
                card
            );


        }
    );

}



/* =========================
   CATEGORY FILTER
========================= */


function filterFood(
    category,
    button = null
) {


    document
        .querySelectorAll(
            ".category"
        )
        .forEach(
            btn =>
                btn.classList.remove(
                    "active"
                )
        );


    if (
        button
    ) {

        button.classList.add(
            "active"
        );

    }


    displayFood(
        category
    );


    document
        .getElementById(
            "foodSection"
        )
        .scrollIntoView({
            behavior:
                "smooth"
        });

}



/* =========================
   SEARCH
========================= */


function searchFood() {


    const searchInput =
        document.getElementById(
            "searchInput"
        );


    const searchTerm =
        searchInput.value.trim();


    displayFood(
        "all",
        searchTerm
    );


    document
        .getElementById(
            "foodSection"
        )
        .scrollIntoView({
            behavior:
                "smooth"
        });

}



/* =========================
   QUICK SEARCH
========================= */


function quickSearch(
    term
) {


    document
        .getElementById(
            "searchInput"
        )
        .value =
        term;


    displayFood(
        "all",
        term
    );


    document
        .getElementById(
            "foodSection"
        )
        .scrollIntoView({
            behavior:
                "smooth"
        );

}



/* =========================
   ENTER KEY SEARCH
========================= */


document
    .getElementById(
        "searchInput"
    )
    .addEventListener(
        "keypress",
        function (
            event
        ) {


            if (
                event.key ===
                "Enter"
            ) {

                searchFood();

            }

        }
    );



/* =========================
   LOAD FOOD
========================= */


displayFood(
    "all"
);
