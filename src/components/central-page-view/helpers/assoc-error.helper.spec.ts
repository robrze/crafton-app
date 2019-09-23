import { assocError } from './assoc-error.helper';

describe('assocError', () => {
  describe('when called', () => {
    it('should return object with prop errors', () => {
      const result = assocError('password', 'is required')({});
      expect(result).toEqual({
        errors: {
          password: 'is required'
        }
      });
    });
  });
});
