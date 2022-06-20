import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useState,useEffect } from "react";

export function Trailer({movielist}) {

  const { id } = useParams();
  // const film = movielist[id];
  const[film,setFilm] =useState({});
  const getFilm  = () => {fetch(`https://628f1cf00e69410599d56201.mockapi.io/movies/${id}`)
.then((data)=> data.json())
.then(result=> setFilm(result));}
useEffect(() =>getFilm(), [])
  const navigate = useNavigate();
  return (
    <div>
      <iframe width="100%" height="506" src={film.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div className="movie-container">
        <div className="movie-specs">
          <h3 className="movie-title">{film.name}</h3>
          <p>⭐{film.rating}</p>
          <Button variant="outlined"  onClick={() => { navigate(-1); }} startIcon={<ArrowBackIosNewIcon  />}>
  Back
</Button>
        </div>
        <p className="movie-summary">{film.summary}</p>
      </div>

    </div>);
}
