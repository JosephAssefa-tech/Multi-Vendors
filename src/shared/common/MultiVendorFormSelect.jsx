import React from "react";
import { Form } from "react-bootstrap";
import { useField } from "formik";


const MultiVendorFormSelect = ({
  name,
  label,
  options=[],
  disabled=false,
  required=false,
  className=""
})=>{


const [field,meta]=useField(name);


return (

<Form.Group className={className}>

<Form.Label>
 {label}
 {required &&
   <span className="text-danger">
    *
   </span>
 }
</Form.Label>


<Form.Select
 {...field}
 disabled={disabled}
 isInvalid={
  meta.touched &&
  Boolean(meta.error)
 }
>


<option value="">
 Select {label}
</option>


{
options.map(option=>(
<option
 key={option.value}
 value={option.value}
>
 {option.label}
</option>
))
}


</Form.Select>


{
meta.touched &&
meta.error &&
(
<Form.Control.Feedback type="invalid">
{meta.error}
</Form.Control.Feedback>
)
}


</Form.Group>

)

}


export default MultiVendorFormSelect;