import { Field } from "formik";
import { Form as BootstrapForm } from "react-bootstrap";

function FormikSelect({
  label,
  name,
  options = [],
  isLoading,
  error,
  touched,
}) {
  return (
    <BootstrapForm.Group>
      <BootstrapForm.Label>{label}</BootstrapForm.Label>

      <Field
        as={BootstrapForm.Select}
        name={name}
        isInvalid={touched?.[name] && error?.[name]}
        disabled={isLoading || !!error}
      >
        {isLoading ? (
          <option>Loading...</option>
        ) : error ? (
          <option>Error loading</option>
        ) : (
          <>
            <option value="">Select</option>
            {options.map((opt) => (
              <option key={opt.id} value={opt.id}>
                {opt.name}
              </option>
            ))}
          </>
        )}
      </Field>

      <BootstrapForm.Control.Feedback type="invalid">
        {error?.[name]}
      </BootstrapForm.Control.Feedback>
    </BootstrapForm.Group>
  );
}

export default FormikSelect;