import React from 'react';
import { ErrorMessage, useField } from 'formik';

export const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-2">
      <label htmlFor={field.name}>{label}</label>
      <input
        className={`${meta.touched && meta.error && 'is-invalid'}`}
        {...field} {...props}
        autoComplete="off" style={{}} className="shadow-none form-control"
      />
      <ErrorMessage component="div" name={field.name} className="error text-danger" />
    </div>
  )
}
