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
        `;
        categoryContainar.appendChild(categoryDiv);
    }
}

// {
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
            
                <div class="card bg-base-100">
                    <figure class="relative">
                        <img class="h-[250px] w-full object-cover" src="${video.thumbnail}" alt="" />
                        <span class="absolute bottom-2 right-2 bg-black text-white rounded py-1 px-2 text-sm">3hrs 56
                            min ago</span>
                    </figure>
                    <div class="flex gap-3 px-0 py-5">
                        <div>
                            <div class="avatar">
                                <div class="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
                                    <img
                                        src="${video.authors[0].profile_picture}" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 class="text-base font-bold">${video.title}</h2>
                            <p class="text-gray-400 text-sm flex gap-1 items-center">${video.authors[0].profile_name}
                                <img class="h-5 w-5" src="https://img.icons8.com/?size=48&id=98A4yZTt9abw&format=png" alt="">
                            </p>
                            <p class="text-gray-400 text-sm">${video.others.views} Views</p>
                        </div>
                    </div>
                </div>

        `;
        videoContainar.appendChild(videoCard);
    });
};

// Function call
loaCategories();

