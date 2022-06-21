import {useFormik} from "formik";

export function BasicForm() {
  const formik = useFormik({
    initialValues:{email:"google" , password:""},
    onSubmit:(values) => {
      console.log("onSubmit ",values);
    } 
  });

  return (
<form onSubmit={formik.handleSubmit}>
  <input type="email" name="email" value={formik.values.email} placeholder="Enter email" onChange={formik.handleChange}/>
  <input type="password" name="password"value={formik.values.password} placeholder="Enter password" onChange={formik.handleChange}/>
  <button type="submit">submit</button>
</form>
  );
}
