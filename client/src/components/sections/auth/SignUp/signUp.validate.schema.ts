import * as Yup from 'yup';
import {
  FIRST_NAME_INPUT_ID,
  LAST_NAME_INPUT_ID,
  EMAIL_INPUT_ID,
  USER_NAME_ID,
  PASSWORD_ID,
  REPEAT_PASSWORD_ID,
} from './signUp.constants';

export const signUpValidateSchema = Yup.object({
  [FIRST_NAME_INPUT_ID]: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  [LAST_NAME_INPUT_ID]: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  [EMAIL_INPUT_ID]: Yup.string().email('Invalid email').required('Required'),
  [USER_NAME_ID]: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  [PASSWORD_ID]: Yup.string().min(8, 'Too Short!').max(50, 'Too Long!').required('Required'),
  [REPEAT_PASSWORD_ID]: Yup.string()
    .oneOf([Yup.ref(PASSWORD_ID)], 'Passwords must match')
    .required('Required'),
});
