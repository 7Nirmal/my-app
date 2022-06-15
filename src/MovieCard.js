import { useState } from "react";
import { Counter } from "./Counter";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InfoIcon from "@mui/icons-material/Info";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import DeleteIcon from '@mui/icons-material/Delete';
// import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";

export function MovieCard({ movies, id,remove}) {
  const styles = { color: movies.rating > 8 ? "green" : "red" };
  const [toggle, Settoggle] = useState(true);
  const navigate = useNavigate();
  return (
    <Card className="movie-container" sx={{height:"min-content"}}>
          <img
            src={movies.poster}
            className="movie-poster"
            alt={movies.name}
          ></img>
          <CardContent>
            <div className="movie-specs">
              <h3 className="movie-title">{movies.name}</h3>
              <IconButton
                onClick={() => {
                  Settoggle(!toggle);
                }}
                color="primary"
                aria-label="delete"
              >
                {toggle ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </IconButton>
              <IconButton
                color="primary"
                onClick={() => navigate(`/movies/${id}`)}
                aria-label="delete"
              >
                <InfoIcon />
              </IconButton>
              <p style={styles}>⭐{movies.rating}</p>
            </div>
            {toggle ? <p className="movie-summary">{movies.summary}</p> : null}
     
          </CardContent>
          <CardActions>
            <Counter />
            <IconButton aria-label="delete" onClick= {()=>{remove(movies,id)}}>
        <DeleteIcon  />
      </IconButton>
          </CardActions>
    </Card>
  );
}
