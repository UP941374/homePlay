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
    document.body.innerHTML = '';
     // Create a video element
     let videoElement = document.createElement('video');
     videoElement.setAttribute('controls', 'controls');
     videoElement.setAttribute('autoplay', 'autoplay');
     videoElement.style.width = '100vw';
     videoElement.style.height = '100vh';
 
     // Create a source element
     let sourceElement = document.createElement('source');
     sourceElement.setAttribute('src', path);
     sourceElement.setAttribute('type', 'video/mp4');
 
     // Append the source to the video element
     videoElement.appendChild(sourceElement);
 
     // Append the video element to the body
     document.body.appendChild(videoElement);

    
}