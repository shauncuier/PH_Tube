const loaCategories = () => {
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
        .then((response) => response.json())
        .then((data) => displayCategories(data.categories));
};


function loadVideos() {
    // https://openapi.programming-hero.com/api/phero-tube/videos

    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
        .then((response) => response.json())
        .then((data) => displayVideos(data.videos));


}



function displayCategories(data) {
    const categoryContainar = document.getElementById("category-containar");
    for (const cat of data) {
        const categoryDiv = document.createElement("div");
        categoryDiv.innerHTML = `
            <button class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
        `
        categoryContainar.appendChild(categoryDiv);
    }
}






// const video = {
//     "category_id": "1001",
//     "video_id": "aaaa",
//     "thumbnail": "https://i.ibb.co/L1b6xSq/shape.jpg",
//     "title": "Shape of You",
//     "authors": [
//         {
//             "profile_picture": "https://i.ibb.co/D9wWRM6/olivia.jpg",
//             "profile_name": "Olivia Mitchell",
//             "verified": ""
//         }
//     ],
//     "others": {
//         "views": "100K",
//         "posted_date": "16278"
//     },
//     "description": "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey."
// }


const displayVideos = (videos) => {
    const videoContainar = document.getElementById("video-containar");
    videos.forEach((video) => {

        // console.log(video);

        const videoCard = document.createElement("div");
        videoCard.innerHTML = `
            <div class="card">
                <img class="" src="${video.thumbnail}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${video.title}</h5>
                    <p class="card-text">${video.description}</p>   
                </div>
            </div>
        `;
        videoContainar.appendChild(videoCard);


    });
}

// Function call
loaCategories();
loadVideos();
