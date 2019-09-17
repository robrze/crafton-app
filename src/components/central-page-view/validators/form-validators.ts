import * as R from 'ramda';
import { validateProp } from '../helpers/validate-prop.helper';
import { isNotEmail } from './is-not-email';
import { FormValues, FormErrors, Errors } from './form-interfaces';

enum ValidatonMessages {
  REQUIRED = 'Pole wymagane',
  INVALID_EMAIL_FORMAT = 'Nieprawidłowy adres email',
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
  validateProp(R.isEmpty, 'name', ValidatonMessages.REQUIRED),
  validateProp(R.isEmpty, 'surname', ValidatonMessages.REQUIRED),
  validateProp(R.isEmpty, 'email', ValidatonMessages.REQUIRED),
  validateProp(isNotEmail, 'email', ValidatonMessages.INVALID_EMAIL_FORMAT),
  validateProp(R.isEmpty, 'message', ValidatonMessages.REQUIRED),
  R.prop('errors'),
);
