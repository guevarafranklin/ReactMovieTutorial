import MovieCard from "../components/MovieCard";
import { useState } from "react";

function Home (){
const [searchQuery, setSearchQuery] = useState('');

    const movies  = [
        {id: 1, title: 'The Dark Knight', release_date: '2008', url: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg'},
        {id: 2, title: 'Inception', release_date: '2010', url: 'https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg'},
        {id: 3, title: 'Interstellar', release_date: '2014', url: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg'},
        {id: 4, title: 'Dunkirk', release_date: '2017', url: 'https://image.tmdb.org/t/p/w500/ebSnODDg9lbsMIaWg2uAbjn7TO5.jpg'},
        {id: 5, title: 'Tenet', release_date: '2020', url: 'https://image.tmdb.org/t/p/w500/k68nPLbIST6NP96JmTxmZijEvCA.jpg'},
        {id: 6, title: 'The pick of destiny', release_date: '2006', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzj3fTX2ScB0c9hLeWncByY3Q4mcHnFBWOakXhb10KUQZ9miSRXwys4SlCuvG8plOp91bVAA'}
        ];
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