
import {MovieCard} from './MovieCard';

export function MovieList({movieDetails,setMovieList}){
    const removeMovie = (movie,index) =>{
        const dup = [...movieDetails];
        dup.splice(index, 1);
        setMovieList([...dup]);

        
    }

    return(
        <div className="movie">
{movieDetails.map((element,index)=> <MovieCard movies={element} id={index} key ={index} remove={removeMovie} />)}
        </div>


     
    )
}
