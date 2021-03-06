import * as Yup from 'yup';

export const NAME_SCHEMA = Yup.string()
  .matches(/^[A-Z][a-z]{1,64}/, 'Name must be a valid name')
  .required();
export const DISPLAY_NAME_SHEMA = Yup.string()
  .matches(/^(?=.*?[a-z])(?=.*?[0-9]).{4,}$/, 'Display name should be more than 4 characters and contain min one number')
  .required();

export const EMAIL_SCHEMA = Yup.string()
  .email('Test check for email')
  .required();

export const PASSWORD_SCHEMA = Yup.string()
  .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/)
  .required();

export const SIGN_UP_SCHEMA = Yup.object({
  firstName: NAME_SCHEMA,
  lastName: NAME_SCHEMA,
  dispalyName: DISPLAY_NAME_SHEMA,
  email: EMAIL_SCHEMA,
  password: PASSWORD_SCHEMA,
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Passwords must match'
  ),
});
