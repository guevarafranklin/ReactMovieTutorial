import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Favorites(){
    const {favorites} = useMovieContext();

    if (favorites) { 
        return (
        <div className="favorites">
            <h2>Your Favorite Movies</h2>
            <div className="movies-grid">
                {favorites.map(movie => <MovieCard key={movie.id} movie={movie} />)}
            </div>
        </div>
        );
    }
    return <div className="favorite-page">
        <h2>Favorite Movies</h2>
        <div className="favorites-empty">
           <h2>No favorite movies yet</h2>
           <p>Start adding favorite movies</p>
        </div>
    </div>
}
export default Favorites;