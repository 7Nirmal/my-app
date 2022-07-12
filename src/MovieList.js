
import {MovieCard} from './MovieCard';
import{useState,useEffect} from 'react';
import {API} from './Global.js';
export function MovieList(){
    const[movieList,setMovieList]= useState([]);
const getMovie  = () => {fetch(`${API}/movies`)
.then((data)=> data.json())
.then(result=> setMovieList(result));}
useEffect(() =>{getMovie()},[])


    const removeMovie = (id) =>{
        fetch(`${API}/movies/${id}`, {method:"DELETE",})
        .then((data) => data.json()).then(()=>{getMovie()})
    }

    return(
        <div className="movie">
{movieList.map((element,index)=> <MovieCard movies={element} id={element.id} key ={index} remove={removeMovie} />)}
        </div>


     
    )
}
