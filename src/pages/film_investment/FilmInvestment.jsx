
import movies from "../../assets/movies.json"
import MovieTile from "../../components/movie_tile/MovieTile"

export default function AllMovies() {
  return (
    <div className="column w-100" style={{gap : "26px"}}>
      <div className="movies-container">
        {movies.map((movie, index)=>{
            return(
                <MovieTile key={index} movie={movie} width={100}/>
            )
        })}
      </div>
    </div>
  );
}