'use client';
import React from 'react';
import Input from '@/components/common/Input';
import { useFormik } from 'formik';
import {
  SIGN_UP_FORM_NAME,
  FIRST_NAME_LABEL,
  LAST_NAME_LABEL,
  EMAIL_LABEL,
  FIRST_NAME_INPUT_ID,
  LAST_NAME_INPUT_ID,
  EMAIL_INPUT_ID,
} from './signUp.constants';
import { signUpValidateSchema } from './signUp.validate.schema';

const SignUp: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      [FIRST_NAME_INPUT_ID]: '',
      [LAST_NAME_INPUT_ID]: '',
      [EMAIL_INPUT_ID]: '',
    },
    validationSchema: signUpValidateSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="flex flex-col gap-10 px-4">
      <h2 className="text-4xl"> {SIGN_UP_FORM_NAME}</h2>
      <form onSubmit={formik.handleSubmit} className="mx-auto w-[90%]">
        <div className="box-border flex flex-col gap-10 ">
          <div className="flex flex-col  gap-10">
            <Input
              inputFieldId={FIRST_NAME_INPUT_ID}
              labelTxt={FIRST_NAME_LABEL}
              value={formik.values[FIRST_NAME_INPUT_ID]}
              error={formik.errors[FIRST_NAME_INPUT_ID]}
              formikHandleChange={formik.handleChange}
            />
            <Input
              inputFieldId={LAST_NAME_INPUT_ID}
              labelTxt={LAST_NAME_LABEL}
              value={formik.values[LAST_NAME_INPUT_ID]}
              error={formik.errors[LAST_NAME_INPUT_ID]}
              formikHandleChange={formik.handleChange}
            />
          </div>
          <Input
            inputFieldId={EMAIL_INPUT_ID}
            labelTxt={EMAIL_LABEL}
            value={formik.values[EMAIL_INPUT_ID]}
            error={formik.errors[EMAIL_INPUT_ID]}
            formikHandleChange={formik.handleChange}
          />
        </div>

        <button type="submit"> Submit </button>
      </form>
    </div>
  );
};

export default SignUp;
