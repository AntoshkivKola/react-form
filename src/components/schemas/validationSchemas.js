import * as Yup from 'yup';

export const NAME_SCHEMA = Yup.string()
  .matches(/^[A-Z][a-z]{1,64}/, 'Name must be a valid name')
  .required();

export const EMAIL_SCHEMA = Yup.string()
  .email('Test check for email')
  .required();

export const SIGN_UP_SCHEMA = Yup.object({
  firstName: NAME_SCHEMA,
  lastName: NAME_SCHEMA,
  email: EMAIL_SCHEMA,
  password: Yup.string(
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/
  )
    .matches()
    .required(),
});

