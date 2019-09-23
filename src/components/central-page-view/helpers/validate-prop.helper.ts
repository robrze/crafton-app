import * as R from 'ramda';
import { assocError } from './assoc-error.helper';

export const validateProp = <T, U>(
  fn: (...args: any) => boolean,
  propName: string,
  text: string
) => R.when(R.propSatisfies(fn, propName), assocError(propName, text));
