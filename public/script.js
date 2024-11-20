async function getMovies() {
    try {
        let response = await fetch('/getMovies');
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        let movies = await response.json();
        console.log(movies);

        let moviesHandler = document.getElementById('movies');
        movies.forEach(movie => {
            let movieElement = document.createElement('div');
            movieElement.addEventListener('click', () => {
                playMovie(movie.filePath);
            });
            let movieLink = document.createElement('a');
            movieLink.textContent = movie.title;
            movieElement.appendChild(movieLink);
            moviesHandler.appendChild(movieElement);
        });
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

// Call the function to fetch movies
getMovies();

function playMovie(path){
    console.log(path);
    
}