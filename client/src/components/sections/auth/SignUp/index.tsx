'use client';
import React, { useState } from 'react';
import Input from '@/components/common/Input';

const SIGN_UP_FORM_NAME = 'Sign Up';
const FIRST_NAME_LABEL = 'First Name';
const LAST_NAME_LABEL = 'Last Name';
const EMAIL_LABEL = 'Email';

const SignUp: React.FC = () => {
  const [fistName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div>
      <h2>{SIGN_UP_FORM_NAME}</h2>
      <form action="">
        <div className="flex flex-col gap-4">
          <div className="flex  gap-4">
            <Input labelTxt={FIRST_NAME_LABEL} value={fistName} setInput={setFirstName} />
            <Input labelTxt={LAST_NAME_LABEL} value={lastName} setInput={setLastName} />
          </div>
          <Input labelTxt={EMAIL_LABEL} value={email} setInput={setEmail} />
        </div>
      </form>
    </div>
  );
};

export default SignUp;
