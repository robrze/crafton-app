export interface Errors extends FormValues {
  errors: FormErrors;
}
export interface FormErrors {
  [key: string]: string;
}
export interface FormValues {
  name: string;
  surname: string;
  email: string;
  message: string;
}
