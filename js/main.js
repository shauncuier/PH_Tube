const loaCategories = () => {
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
        .then((response) => response.json())
        .then((data) => displayCategories(data.categories));
};

function displayCategories(data) {
    const categoryContainar = document.getElementById("category-containar");
    for (const cat of data) {
        console.log(cat);

        const categoryDiv = document.createElement("div");
        categoryDiv.innerHTML = `

            <button class="btn btn-sm">${cat.category}</button>

        `

        categoryContainar.appendChild(categoryDiv);


    }
}

loaCategories();
