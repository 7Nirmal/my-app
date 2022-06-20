
import {MovieCard} from './MovieCard';
import{useState,useEffect} from 'react';
export function MovieList(){
    const[movieList,setMovieList]= useState([]);
const getMovie  = () => {fetch("https://628f1cf00e69410599d56201.mockapi.io/movies")
.then((data)=> data.json())
.then(result=> setMovieList(result));}
useEffect(() =>{getMovie()},[])


    const removeMovie = (id) =>{
        fetch(`https://628f1cf00e69410599d56201.mockapi.io/movies/${id}`, {method:"DELETE",})
        .then((data) => data.json()).then(()=>{getMovie()})
    }

    return(
        <div className="movie">
{movieList.map((element,index)=> <MovieCard movies={element} id={element.id} key ={index} remove={removeMovie} />)}
        </div>


     
    )
}
