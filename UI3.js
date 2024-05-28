const apiKey = "4720aae0";
const searchBar = document.getElementById("name");
const searchButton = document.getElementById("search");

//!const  imagecontainer = document.getElementById("iamgeconatiner");
const title = document.getElementById("title");
const description = document.getElementById("description");
const cast = document.getElementById("cast");
const image = document.getElementById("image");

async function getMovie(name) {
    const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&t=${name}`);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
}

searchButton.addEventListener("click", async () => {
    const value = searchBar.value.trim().toLowerCase();
    if (value) {
        try {
            const result = await getMovie(value);
            if (result.Response === "True") {
                title.innerHTML = result.Title;
                description.innerHTML = result.Plot;
                cast.innerHTML = result.Actors;
                image.src = result.Poster !== "N/A" ? result.Poster : 'placeholder.jpg'; 
                // imagecontainer.style.backgroundImage = result.Poster !== "N/A" ? `url(${result.Poster})` : 'url(placeholder.jpg)';
            } else {
                title.innerHTML = "Movie not found";
                description.innerHTML = "";
                cast.innerHTML = "";
                image.src = 'placeholder.jpg'; 
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    } else {
        console.log("Please enter a movie name");
    }
});
