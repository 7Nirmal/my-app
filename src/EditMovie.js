
import { useParams } from "react-router-dom";
import {useState,useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


export function EditMovie() {
  const { id } = useParams();
  // const film = movielist[id];
  const[film,setFilm] =useState(null);
  const getFilm  = () => {fetch(`https://628f1cf00e69410599d56201.mockapi.io/movies/${id}`)
.then((data)=> data.json())
.then(result=> setFilm(result));}
useEffect(() =>getFilm(), [])
   return  film ?  <EditMovieForm film = {film}/> : "Loading...";
}

function EditMovieForm({film}) {
  const [name,setName] = useState(film.name)
    const [poster,setPoster] = useState(film.poster)
    const [rating,setRating] = useState(film.rating)
    const [summary,setSummary] = useState(film.summary)
    const [trailer,setTrailer] = useState(film.trailer)
    const navigate = useNavigate();

    const EditedMovie = () =>{
    const newMovie = {name:name,poster:poster,rating:rating,summary:summary,trailer:trailer};
    fetch(`https://628f1cf00e69410599d56201.mockapi.io/movies/${film.id}`,
    {method:"PUT",body:JSON.stringify(newMovie),
    headers:{"Content-Type": "application/json"},}).then(data => data.json()).then(()=>navigate("/movie-list"))}
    // setMovieList([...movieList,newMovie]); 

  return(
    <div>
    <div className="movie">
    <TextField  value={name}   label="Name" variant="outlined"  onChange={(event)=>{setName(event.target.value)}}/>
 <TextField value={poster}  label= "poster" variant="outlined" onChange={(event)=>{setPoster(event.target.value)}} />
<TextField value={rating} onChange={(event)=>{setRating(event.target.value)}} label="rating" variant="outlined"   />
<TextField value={summary}   onChange={(event)=>{setSummary(event.target.value)}} label="summary" variant="outlined"  />
<TextField  value={trailer}  onChange={(event)=>{setTrailer(event.target.value)}} label="trailer" variant="outlined"  />
<Button variant="outlined" onClick={EditedMovie} color="success">SAVE</Button>
{name} {rating}
</div>
</div>
  )
  }
