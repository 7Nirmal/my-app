import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export function Moviebar(){

    const [name,setName] = useState("")
    const [poster,setPoster] = useState("")
    const [rating,setRating] = useState("")
    const [summary,setSummary] = useState("")
    const [trailer,setTrailer] = useState("")
    const navigate = useNavigate();

    const addMovie = () =>{
    const newMovie = {name:name,poster:poster,rating:rating,summary:summary,trailer:trailer};
    fetch(`https://628f1cf00e69410599d56201.mockapi.io/movies`,
    {method:"POST",body:JSON.stringify(newMovie),
    headers:{"Content-Type": "application/json"},}).then(data => data.json()).then(()=>navigate("/movie-list"))
    // setMovieList([...movieList,newMovie]); 
    }

    return(
        <div>
        <div className="movie">
        <TextField    label="Name" variant="outlined" onChange={(event)=>{setName(event.target.value)}}/>
     <TextField  label= "poster" variant="outlined"  onChange={(event)=>{setPoster(event.target.value)}} />
    <TextField onChange={(event)=>{setRating(event.target.value)}} label="rating" variant="outlined"   />
    <TextField    onChange={(event)=>{setSummary(event.target.value)}} label="summary" variant="outlined"  />
    <TextField    onChange={(event)=>{setTrailer(event.target.value)}} label="trailer" variant="outlined"  />
    <Button variant="outlined" onClick={addMovie} >ADD Movie</Button>
{name} {rating}
</div>
</div>
    )
}