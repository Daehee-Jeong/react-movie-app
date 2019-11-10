import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

class App extends Component {
    state = {
        isLoading: true,
        movies: []
    };

    getMovies = async () => {
        const movies = await fetch(
            "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
        )
        .then(response => response.json())
        .then(json => json.data.movies)
        .catch(err => console.log(err))
        ;
        this.setState({ movies, isLoading: false });
    };

    componentDidMount() {
        this.getMovies();
    }

    render() {
        const { isLoading, movies } = this.state;

        return (
            <section className="container">
            {isLoading ? (
                <div className="loader">
                    <span className="loader__text">Loading...</span>
                </div>
            ) : (
                <div className="movies">
                    {movies.map(movie => (
                        <Movie
                            key={movie.id}
                            id={movie.id}
                            year={movie.year}
                            title={movie.title}
                            summary={movie.summary}
                            poster={movie.medium_cover_image}
                            genres={movie.genres}
                        />
                    ))}
                </div>
            )}
            </section>
        );
    }
}

export default App;
