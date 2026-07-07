// components/form/FormField.jsx

import MultiVendorFormInput from "./MultiVendorFormInput "
import MultivendorFormSelect from "./MultiVendorFormSelect"

//This allows your forms to be configuration driven.
const FormField = (props)=>{


switch(props.type){

case "select":
 return <MultivendorFormSelect {...props}/>


default:
 return <MultiVendorFormInput {...props}/>

}


}


export default MultiVendorFormField;