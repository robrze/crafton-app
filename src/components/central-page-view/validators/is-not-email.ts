import * as R from 'ramda';

export const isNotEmail = (email: string): boolean =>
  !R.isEmpty(email) && !/^.+@.+\..+/i.test(email);
