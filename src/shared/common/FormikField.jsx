import { Field } from "formik";
import { Form as BootstrapForm } from "react-bootstrap";

function FormikField({
  label,
  name,
  as = BootstrapForm.Control,
  type = "text",
  placeholder,
  rows,
  children,
  isInvalid,
  errors,
  touched,
}) {
  return (
    <BootstrapForm.Group>
      {label && <BootstrapForm.Label>{label}</BootstrapForm.Label>}

      <Field
        as={as}
        name={name}
        type={type}
        rows={rows}
        placeholder={placeholder}
        isInvalid={touched?.[name] && errors?.[name]}
      >
        {children}
      </Field>

      <BootstrapForm.Control.Feedback type="invalid">
        {errors?.[name]}
      </BootstrapForm.Control.Feedback>
    </BootstrapForm.Group>
  );
}

export default FormikField;