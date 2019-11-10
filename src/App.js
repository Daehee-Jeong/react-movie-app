import React from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

const movies = [
    {
        title: "Matrix",
        poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg"
    },
    {
        title: "Full Metal Jacket",
        poster: "https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Full_Metal_Jacket_poster.jpg/220px-Full_Metal_Jacket_poster.jpg"
    },
    {
        title: "Oldboy",
        poster: "https://cdn.shopify.com/s/files/1/1416/8662/products/oldboy_2003_italian_1p_original_film_art_2000x.jpg?v=1551892951"
    },
    {
        title: "Star Wars",
        poster: "https://images-na.ssl-images-amazon.com/images/I/51poKKV63GL.jpg"
    }
]

function App() {
  return (
    <div className="App">
        <Movie title={movies[0].title} poster={movies[0].poster} />
        <Movie title={movies[1].title} poster={movies[1].poster} />
        <Movie title={movies[2].title} poster={movies[2].poster} />
        <Movie title={movies[3].title} poster={movies[3].poster} />
    </div>
  );
}

export default App;
