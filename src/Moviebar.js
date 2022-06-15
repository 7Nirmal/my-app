import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export function Moviebar({movieDetails,setMovieList}){
    const [name,setName] = useState("")
    const [poster,setPoster] = useState("")
    const [rating,setRating] = useState("")
    const [summary,setSummary] = useState("")
    const [trailer,setTrailer] = useState("")

    const addMovie = () =>{
    const newMovie = {name:name,poster:poster,rating:rating,summary:summary,trailer:trailer};
    setMovieList([...movieDetails,newMovie]); console.log(newMovie);}

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