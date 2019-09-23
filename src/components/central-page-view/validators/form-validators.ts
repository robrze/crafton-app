import * as R from 'ramda';
import { validateProp } from '../helpers/validate-prop.helper';
import { isNotEmail } from './is-not-email';
import { FormValues, FormErrors, Errors } from './form-interfaces';

enum ValidationMessages {
  REQUIRED = 'Pole wymagane',
  INVALID_EMAIL_FORMAT = 'Nieprawidłowy adres email'
}

export const validateForm: (obj: FormValues) => FormErrors = R.pipe<
  FormValues,
  Errors,
  Errors,
  Errors,
  Errors,
  Errors,
  FormErrors
>(
  validateProp(R.isEmpty, 'name', ValidationMessages.REQUIRED),
  validateProp(R.isEmpty, 'surname', ValidationMessages.REQUIRED),
  validateProp(R.isEmpty, 'email', ValidationMessages.REQUIRED),
  validateProp(isNotEmail, 'email', ValidationMessages.INVALID_EMAIL_FORMAT),
  validateProp(R.isEmpty, 'message', ValidationMessages.REQUIRED),
  R.prop('errors')
);
