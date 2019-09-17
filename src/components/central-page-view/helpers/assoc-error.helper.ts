import * as R from 'ramda';

export const assocError = <T>(field: string, text: string): ((obj: T) => any) =>
  R.assocPath(['errors', field], text);
