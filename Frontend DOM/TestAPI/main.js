const apikey = '90ffadb010fb4a668e0917f4e525d682';
const NewsBox = document.getElementById("result");
const SearchData = document.getElementById("searchBox");
const SearchBtn = document.getElementById("searchBtn");

// Function to render items
const renderItems = (items) => {
    NewsBox.innerHTML = ''; // Clear previous results
    items.forEach(item => {
        NewsBox.innerHTML += `
            <div class="col mb-5">
                <div class="card h-100">
                    <img class="card-img-top" src="${item.image}" alt="..." />
                    <div class="card-body p-4">
                        <div class="text-center">
                            <h5>${item.name}</h5>
                            <p>${item.mealType}</p>
                            <h5 class="text-success">Rating: ${item.rating}</h5>
                            <div>
                                <button class="btn btn-danger">Order Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
    });
}

// Function to get all news
const getAllNews = async () => {
    try {
        const apiurl = `https://dummyjson.com/recipes`;
        let apiresponse = await fetch(apiurl);
        const apiresponse2 = await apiresponse.json();
        const FoodItems = apiresponse2.recipes;
        console.log(FoodItems);
        renderItems(FoodItems);
    } catch (er) {
        console.log("Fetch API error", er);
    }
}
getAllNews();

// Event listener for the search button
SearchBtn.addEventListener("click", async () => {
    const data = SearchData.value.trim();
    console.log(data);
    if (data !== "") {
        try {
            const apiurl = `https://dummyjson.com/recipes`;
            let apiresponse = await fetch(apiurl);
            const apiresponse2 = await apiresponse.json();
            const FoodItems = apiresponse2.recipes;
            console.log(FoodItems);

            // Filter FoodItems based on the search input
            const filteredItems = FoodItems.filter(item =>
                item.name.toLowerCase().includes(data.toLowerCase())
            );

            // Display filtered results
            renderItems(filteredItems);

        } catch (error) {
            console.log("Unable to fetch Data", error);
        }
    }
});

