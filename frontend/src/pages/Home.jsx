import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import {getPopularMovies, searchPopularMovies} from "../services/api.js";
import "../css/Home.css";

function Home (){
const [searchQuery, setSearchQuery] = useState('');
const [movies, setMovies] = useState([]);
useEffect(() => {
    getPopularMovies().then((movies) => setMovies(movies));
}


        const handleSearch = (e) => {
            e.preventDefault();
            alert(searchQuery);
            setSearchQuery('');

        }  

        return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text" className="search-input" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search..." />
                <button type="submit" className="search-button">Search</button>
            </form>

            <div className="movies-grid">
                {movies.map( 
                    (movie) => 
                    movie.title.toLowerCase().startsWith(searchQuery) && (
                        <MovieCard movie={movie} key={movie.id} /> )) }
            </div>
        </div>
        );

}

export default Home;