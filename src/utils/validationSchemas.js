import * as Yup from 'yup';

export const NAME_SCHEMA = Yup.string()
  .matches(/^[A-Z][a-z]{1,64}$/, 'Name must be a valid name and start`s of uppercase letter')
  .required();

export const DISPLAY_NAME_SHEMA = Yup.string()
  .matches(
    /^(?=.*?[a-z])(?=.*?[0-9]).{4,}$/,
    'Display name should be more than 4 characters and contain min one number'
  )
  .required();

export const EMAIL_SCHEMA = Yup.string()
  .email('Please enter a valid email address')
  .required();

export const PASSWORD_SCHEMA = Yup.string()
  .matches(
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
    'A minimum 8 characters password contains a combination of uppercase and lowercase letter and number'
  )
  .required();

export const PASSWORD_LOGIN_SCHEMA = Yup.string().required();

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

export const LOGIN_SCHEMA = Yup.object({
  email: EMAIL_SCHEMA,
  password: PASSWORD_LOGIN_SCHEMA,
});
