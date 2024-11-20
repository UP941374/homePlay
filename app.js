const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '/home/pi/SSD/')));

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
    let filePath = '';

    fs.readdirSync(moviesDir, { withFileTypes: true }).forEach(dirent => {
        if (dirent.isDirectory()) {
            fs.readdirSync(path.join(moviesDir, dirent.name)).forEach(file => {
                if (file.endsWith('.mp4')) {
                    filePath = path.join(moviesDir, dirent.name, file);
                }          
            });
            movies.push({ title: dirent.name, filePath: filePath});
        }
    });

    return movies;
}