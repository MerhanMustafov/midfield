'use client';
import React, { useState } from 'react';
import { SIGN_IN_FORM_NAME, EMAIL_INPUT_ID, EMAIL_LABEL, PASSWORD_ID, PASSWORD_LABEL } from './signIn.constants';
import CustomInput from '@/components/client/common/Inputs/CustomInput';
import { CLIENT_BASE_URL } from '@/constants/endpoints.constants';
import { useRouter } from 'next/navigation';
import { useAppStore } from '@/store/store';

const SignIn: React.FC = () => {
  const router = useRouter();
  const appStore = useAppStore();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [serverError, setServerError] = useState<string | null>(null);

  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const values = {
      email,
      password,
    };

    const res = await fetch(CLIENT_BASE_URL + '/api/post/signIn', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });
    if (res.status !== 200) {
      const data = await res.json();
      setServerError(data.error);
      return;
    }
    const resData = await res.json();
    appStore.user.dispatch({ type: 'LOGIN', payload: resData });
    setServerError(null);
    router.push('/');
  };
  return (
    <div className="flex flex-col items-center gap-8 px-4">
      <h2 className="text-3xl font-bold tracking-wider text-black-perl underline"> {SIGN_IN_FORM_NAME}</h2>
      <form onSubmit={onSubmit} className="mx-auto flex w-[90%] flex-col gap-8">
        <div className="box-border flex flex-col gap-5">
          <div className="flex flex-col  gap-5">
            <CustomInput changeHandler={setEmail} inputFieldId={EMAIL_INPUT_ID} labelTxt={EMAIL_LABEL} value={email} />
            <CustomInput
              inputType="password"
              changeHandler={setPassword}
              inputFieldId={PASSWORD_ID}
              labelTxt={PASSWORD_LABEL}
              value={password}
            />
          </div>
        </div>
        <div className="flex w-full flex-col items-center gap-2">
          {serverError && <div className="text-lg text-red-500">{serverError}</div>}
          <button type="submit" className="w-full cursor-pointer bg-black-perl py-2 text-xl text-white ">
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
