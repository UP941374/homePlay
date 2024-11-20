async function getMovies() {
    try {
        let response = await fetch('/getMovies');
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        let movies = await response.json();
        console.log(movies);
        // You can add code here to display the movies on the page
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

// Call the function to fetch movies
getMovies();