import React, { ReactElement } from 'react';
import './input.scss';
import { FieldProps, FormikTouched, FormikErrors } from 'formik';

interface Props {
  longer: boolean;
}

export const InputComponent = ({
  field,
  form: { touched, errors },
  longer,
  ...props
}: FieldProps & Props): ReactElement => {
  const isTouched: boolean | FormikTouched<any> | undefined =
    touched[field.name];
  const errorMessage: string | FormikErrors<any> | undefined =
    errors[field.name];

  const isLonger = longer ? 'form-control__input--longer' : '';

  return (
    <div className="form-control">
      {isTouched && errorMessage ? (
        <>
          <input
            className={`form-control__input form-control__input--error ${isLonger}`}
            type="text"
            {...field}
            {...props}
          />
          <p className="error-message">{errorMessage}</p>
        </>
      ) : (
        <input
          className={`form-control__input ${isLonger}`}
          type="text"
          {...field}
          {...props}
        />
      )}
    </div>
  );
};
