import {useFormik} from "formik";

export function BasicForm() {
  const formik = useFormik({
    intialValues : {email:"google", password:"abc"},
    onSubmit:(values) =>{
      console.log("onSubmit",values );
    },
  })
  return (
    <form onSubmit={formik.handleSubmit}>
            <input type="email" 
            placeholder="Enter email" 
             name="email" 
             value={formik.values.email} 
             onChange={formik.handleChange}/>

      <input  type="password" 
      placeholder="Enter password"  
      name="password" 
      value={formik.values.password} 
      onChange={formik.handleChange}/>
      <button type="submit">Submit</button>
    </form>
  );
}
