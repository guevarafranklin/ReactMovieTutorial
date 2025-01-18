import "../css/Favorites.css";

function Favorites(){
    return <div className="favorite-page">
        <h2>Favorite Movies</h2>
        <div className="favorites-empty">
           <h2>No favorite movies yet</h2>
           <p>Start adding favorite movies</p>
        </div>
    </div>
}
export default Favorites;