'use client';
import React, { useState } from 'react';
import FormikValidateInput from '@/components/client/common/Inputs/FormikValidateInput';
import { useFormik } from 'formik';
import {
  SIGN_UP_FORM_NAME,
  FIRST_NAME_LABEL,
  LAST_NAME_LABEL,
  EMAIL_LABEL,
  FIRST_NAME_INPUT_ID,
  LAST_NAME_INPUT_ID,
  EMAIL_INPUT_ID,
  USER_NAME_ID,
  PASSWORD_ID,
  REPEAT_PASSWORD_ID,
  USER_NAME_LABEL,
  PASSWORD_LABEL,
  REPEAT_PASSWORD_LABEL,
} from './signUp.constants';
import { signUpValidateSchema } from './signUp.validate.schema';
import { CLIENT_BASE_URL } from '@/constants/endpoints.constants';
import { useRouter } from 'next/navigation';
import { useAppStore } from '@/store/store';

const SignUp: React.FC = () => {
  const router = useRouter();
  const appStore = useAppStore();
  const [serverError, setServerError] = useState<string | null>(null);

  const formik = useFormik({
    initialValues: {
      [FIRST_NAME_INPUT_ID]: '',
      [LAST_NAME_INPUT_ID]: '',
      [EMAIL_INPUT_ID]: '',
      [USER_NAME_ID]: '',
      [PASSWORD_ID]: '',
      [REPEAT_PASSWORD_ID]: '',
    },
    validationSchema: signUpValidateSchema,
    validateOnChange: true,
    onSubmit: async (values) => {
      const res = await fetch(CLIENT_BASE_URL + '/api/post/signUp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      if (res.status !== 201) {
        const data = await res.json();
        setServerError(data.error);
        return;
      }

      const resData = await res.json();
      appStore.user.dispatch({ type: 'REGISTER', payload: resData });
      setServerError(null);
      router.push('/');
    },
  });

  return (
    <div className="flex flex-col items-center gap-8 px-4">
      <h2 className="text-3xl font-bold tracking-wider text-black-perl underline"> {SIGN_UP_FORM_NAME}</h2>
      <form onSubmit={formik.handleSubmit} className="mx-auto flex w-[90%] flex-col gap-8">
        <div className="box-border flex flex-col gap-5">
          <div className="flex flex-col  gap-5">
            <FormikValidateInput
              labelTxt={FIRST_NAME_LABEL}
              inputFieldId={FIRST_NAME_INPUT_ID}
              value={formik.values[FIRST_NAME_INPUT_ID]}
              error={formik.errors[FIRST_NAME_INPUT_ID]}
              touched={formik.touched[FIRST_NAME_INPUT_ID]}
              formikHandleChange={formik.handleChange}
              formikHandleFocus={formik.setFieldTouched}
            />
            <FormikValidateInput
              labelTxt={LAST_NAME_LABEL}
              inputFieldId={LAST_NAME_INPUT_ID}
              value={formik.values[LAST_NAME_INPUT_ID]}
              error={formik.errors[LAST_NAME_INPUT_ID]}
              touched={formik.touched[LAST_NAME_INPUT_ID]}
              formikHandleChange={formik.handleChange}
              formikHandleFocus={formik.setFieldTouched}
            />
          </div>
          <FormikValidateInput
            labelTxt={EMAIL_LABEL}
            inputFieldId={EMAIL_INPUT_ID}
            value={formik.values[EMAIL_INPUT_ID]}
            error={formik.errors[EMAIL_INPUT_ID]}
            touched={formik.touched[EMAIL_INPUT_ID]}
            formikHandleChange={formik.handleChange}
            formikHandleFocus={formik.setFieldTouched}
          />
          <FormikValidateInput
            labelTxt={USER_NAME_LABEL}
            inputFieldId={USER_NAME_ID}
            value={formik.values[USER_NAME_ID]}
            error={formik.errors[USER_NAME_ID]}
            touched={formik.touched[USER_NAME_ID]}
            formikHandleChange={formik.handleChange}
            formikHandleFocus={formik.setFieldTouched}
          />
          <FormikValidateInput
            labelTxt={PASSWORD_LABEL}
            inputType="password"
            inputFieldId={PASSWORD_ID}
            value={formik.values[PASSWORD_ID]}
            error={formik.errors[PASSWORD_ID]}
            touched={formik.touched[PASSWORD_ID]}
            formikHandleChange={formik.handleChange}
            formikHandleFocus={formik.setFieldTouched}
          />
          <FormikValidateInput
            labelTxt={REPEAT_PASSWORD_LABEL}
            inputType="password"
            inputFieldId={REPEAT_PASSWORD_ID}
            value={formik.values[REPEAT_PASSWORD_ID]}
            error={formik.errors[REPEAT_PASSWORD_ID]}
            touched={formik.touched[REPEAT_PASSWORD_ID]}
            formikHandleChange={formik.handleChange}
            formikHandleFocus={formik.setFieldTouched}
          />
        </div>
        <div className="flex w-full flex-col items-center gap-2">
          {serverError && <div className="text-lg text-red-500">{serverError}</div>}
          <button type="submit" className="w-full cursor-pointer bg-black-perl py-2 text-xl text-white ">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
