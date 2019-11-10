import React, { Component } from 'react';
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

class App extends Component {

    componentWillMount() {
        console.log('will mount');
    }

    componentDidMount() {
        console.log('did mount');
        setTimeout(() => {
            this.state.greeting = 'something' // 직접적으로 state를 변경하면 render는 동작되지 않는다.
            this.setState({
                greeting: 'Hello again!'
            })
        }, 5000);
    }

    state = {
        greeting: 'Hello!'
    }
    
    render() {
        console.log('rendering now');

        return (
            <div className="App">
                {this.state.greeting}
                {movies.map( (movie, index) => {
                    return <Movie title={movie.title} poster={movie.poster} key={index} />
                })}
            </div>
          );
    }
}

export default App;
