
function MovieCard({movie}){

    function toggleFavorite(){
        alert('Favorite button clicked');
    }

    return <div className="movie-card">
        <div className="movie-poster">
            <img src={movie.url} alt={movie.title} />
            <div className="movie-overlay">
                <button className="favorite-btn" onClick={toggleFavorite}> 
                    ♡
                </button>
            </div>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <span>{movie.release_date}</span>
        </div>
    </div>
}

export default MovieCard;