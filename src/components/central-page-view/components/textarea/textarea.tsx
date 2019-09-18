import React from "react";
import { FieldProps, FormikTouched, FormikErrors } from "formik";
import './textarea.scss';

export const TextareaComponent = ({
  field,
  form: { touched, errors },
  ...props
}: FieldProps) => {
  const isTouched: boolean | FormikTouched<any> | undefined =
    touched[field.name];
  const errorMessage: string | FormikErrors<any> | undefined =
    errors[field.name];

  return (
    <div className="form-control">
      {isTouched && errorMessage ? (
        <>
          <textarea
            className={`form-control__textarea form-control__textarea--error`}
            rows={8}
            {...field}
            {...props}
          />
          <p className="error-message">{errorMessage}</p>
        </>
      ) : (
        <textarea
          className={`form-control__textarea`}
          rows={8}
          {...field}
          {...props}
        />
      )}
    </div>
  );
};
