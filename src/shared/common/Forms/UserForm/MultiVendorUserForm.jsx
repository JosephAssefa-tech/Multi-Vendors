import { Formik, Form } from "formik";
import { userFields } from "./userFields";
import MultiVendorFormField from "../../MultiVendorFormField";
import Button from "react-bootstrap/Button"


const MultiVendorUserForm = ()=>{


const initialValues={

firstName:"",
lastName:"",
email:"",
password:"",
role:""

}


const handleSubmit=(values)=>{

console.log(values);

}



return (

<Formik

initialValues={initialValues}

onSubmit={handleSubmit}

>


<Form>


{
userFields.map(field=>(

<MultiVendorFormField

key={field.name}

{...field}

/>

))

}



<Button variant="primary"type="submit" className="text-color-white">
Save
</Button>


</Form>


</Formik>

)


}


export default MultiVendorUserForm;