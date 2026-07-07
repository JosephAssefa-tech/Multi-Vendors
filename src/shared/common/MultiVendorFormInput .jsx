import React from "react";
import { Form, InputGroup } from "react-bootstrap";
import { useField } from "formik";

const MultiVendorFormInput = ({
  name,
  label,
  type = "text",
  placeholder,
  disabled = false,
  readOnly = false,
  required = false,
  size = "md",
  className = "",
  onChange,
  onBlur,
  maxLength,
  minLength,
  autoComplete,
  helperText,
  startIcon,
  endIcon,
}) => {

  const [field, meta, helpers] = useField(name);


  const handleChange = (event) => {

    // custom change handler if provided
    if (onChange) {
      onChange(event);
    }

    // update Formik state
    helpers.setValue(event.target.value);
  };


  const handleBlur = (event) => {

    if (onBlur) {
      onBlur(event);
    }

    field.onBlur(event);
  };


  return (
    <Form.Group className={className}>

      {label && (
        <Form.Label>
          {label}
          {required && (
            <span className="text-danger">
              {" "}*
            </span>
          )}
        </Form.Label>
      )}


      <InputGroup>

        {startIcon && (
          <InputGroup.Text>
            {startIcon}
          </InputGroup.Text>
        )}


        <Form.Control
          {...field}

          type={type}
          placeholder={placeholder}

          disabled={disabled}
          readOnly={readOnly}

          size={size}

          autoComplete={autoComplete}

          maxLength={maxLength}
          minLength={minLength}

          value={field.value || ""}

          onChange={handleChange}
          onBlur={handleBlur}

          isInvalid={
            meta.touched &&
            Boolean(meta.error)
          }
        />


        {endIcon && (
          <InputGroup.Text>
            {endIcon}
          </InputGroup.Text>
        )}

      </InputGroup>


      {helperText && (
        <Form.Text>
          {helperText}
        </Form.Text>
      )}


      {meta.touched && meta.error && (
        <Form.Control.Feedback type="invalid">
          {meta.error}
        </Form.Control.Feedback>
      )}

    </Form.Group>
  );
};


export default MultiVendorFormInput;