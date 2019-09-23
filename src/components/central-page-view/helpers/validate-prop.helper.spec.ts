import * as R from 'ramda';
import { validateProp } from './validate-prop.helper';
import { isNotEmail } from '../validators/is-not-email';

enum ValidationMessages {
  REQUIRED = 'Pole wymagane',
  INVALID_EMAIL_FORMAT = 'Nieprawidłowy adres email'
}

describe('validateProp', () => {
  describe('validating form values', () => {
    it("not passing password shows 'required' error", () => {
      const formValues = {
        email: 'user@mail.com',
        password: ''
      };

      const result = validateProp(
        R.isEmpty,
        'password',
        ValidationMessages.REQUIRED
      )(formValues);

      expect(result).toEqual({
        email: 'user@mail.com',
        password: '',
        errors: {
          password: 'Pole wymagane'
        }
      });
    });

    it('passing valid email and password shows no errors', () => {
      const formValues = {
        email: 'user@mail.com',
        password: '12345'
      };

      const result = validateProp(
        R.isEmpty,
        'password',
        ValidationMessages.REQUIRED
      )(formValues);

      expect(result).toEqual({
        email: 'user@mail.com',
        password: '12345'
      });
    });

    it("not passing email shows 'required' error", () => {
      const formValues = {
        email: '',
        password: '12345'
      };

      const result = validateProp(
        R.isEmpty,
        'email',
        ValidationMessages.REQUIRED
      )(formValues);

      expect(result).toEqual({
        email: '',
        password: '12345',
        errors: {
          email: 'Pole wymagane'
        }
      });
    });

    it("passing invalid email shows 'Invalid email address' error", () => {
      const formValues = {
        email: 'user@mail',
        password: '12345'
      };

      const result = validateProp(
        isNotEmail,
        'email',
        ValidationMessages.INVALID_EMAIL_FORMAT
      )(formValues);

      expect(result).toEqual({
        email: 'user@mail',
        password: '12345',
        errors: {
          email: 'Nieprawidłowy adres email'
        }
      });
    });
  });
});
