import {useFormik} from "formik";
import * as yup from 'yup';
const formValidationSchema = yup.object({
  email:yup.string().min(5,"enter atleast 5").required().email(),
  password:yup.string().min(8,"enter atleast 8 characters").max(12).required(),
})
export function BasicForm() {
  const {handleSubmit,handleChange,touched,errors,handleBlur,values} = useFormik({
    initialValues:{email:"google" , password:"123"},
    validationSchema: formValidationSchema,
    onSubmit:(values) => {
      console.log("onSubmit ",values);
    } 
  });

  return (
<form onSubmit={handleSubmit}> 
  <input type="email" name="email" value={values.email} placeholder="Enter email" onChange={handleChange} onBlur={handleBlur}/>
  {touched.email && errors.email ? errors.email : ""}
  <input type="password" name="password"value={values.password} placeholder="Enter password" onChange={handleChange} onBlur={handleBlur}/>
  <button type="submit">submit</button>
  {touched.password && errors.password ? errors.password : ""}

</form>
  );
}
