import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {useFormik} from 'formik';
import * as yup from 'yup';
import {API} from './Global.js';

const formValidationSchema = yup.object({
    name: yup.string().required(),
    poster: yup.string().required(),
    rating: yup.number().required("enter within ten").max(10),
    summary: yup.string().required(),
    trailer: yup.string().required()

})
export function Moviebar(){

    // const [name,setName] = useState("")
    // const [poster,setPoster] = useState("")
    // const [rating,setRating] = useState("")
    // const [summary,setSummary] = useState("")
    // const [trailer,setTrailer] = useState("")
    const navigate = useNavigate();

    const addMovie = (newMovie) =>{
    fetch(`${API}/movies`,
    {method:"POST",body:JSON.stringify(newMovie),
    headers:{"Content-Type": "application/json"},}).then(data => data.json()).then(()=>navigate("/movie-list"))
    // setMovieList([...movieList,newMovie]); 
    }

    const {handleSubmit,handleChange,touched,errors,handleBlur,values} = useFormik({
        initialValues:{
            name:"",
            poster:"",
            rating:"",
            summary:"",
            trailer:"",
        },
        validationSchema: formValidationSchema,
        onSubmit:(values) => {
          console.log("onSubmit ",values);
          addMovie(values)
        } 
      });

    return(
        <form onSubmit={handleSubmit} className="movie">
        
        <TextField    label="Name" variant="outlined" name="name" value={values.name} onChange={handleChange} onBlur= {handleBlur}/>
       
     <TextField  label= "poster" variant="outlined"  name="poster" value={values.poster} onChange={handleChange} onBlur= {handleBlur}/>
    <TextField  label="rating" variant="outlined" name="rating" value={values.rating}  onChange={handleChange} onBlur={handleBlur} />
    {touched.rating && errors.rating ? errors.rating : ""}
    <TextField   label="summary" variant="outlined"  name="summary" value={values.summary} onChange={handleChange} onBlur={handleBlur}  />
    <TextField   label="trailer" variant="outlined"   name="trailer" value={values.trailer} onChange={handleChange} onBlur={handleBlur}/>
    <Button variant="outlined" type="submit" >ADD Movie</Button>


</form>
    )
}