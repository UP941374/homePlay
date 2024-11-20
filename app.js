const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

const PORT = 3075;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


//get all movies
app.get('/getMovies', (req, res) => {
    const movies = findMovies();
    res.json(movies);
});

function findMovies() {
    const moviesDir = '/home/pi/SSD';
    const movies = [];

    fs.readdirSync(moviesDir, { withFileTypes: true }).forEach(dirent => {
        if (dirent.isDirectory()) {
            const moviePath = path.join('movies', dirent.name);
            movies.push({ title: dirent.name, path: moviePath });
        }
    });

    return movies;
}