import React, { useRef, useMemo, useState } from 'react';

type FormikValidateInputProps = {
  inputType?: string;
  labelTxt: string;
  inputFieldId: string;
  value: string;
  error: string | undefined;
  touched: boolean | undefined;
  formikHandleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  formikHandleFocus: (fieldId: string, touched: boolean) => void;
};

const FormikValidateInput: React.FC<FormikValidateInputProps> = ({
  touched,
  inputType,
  value,
  error,
  formikHandleChange,
  formikHandleFocus,
  labelTxt,
  inputFieldId,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  const applyLabelStyle = useMemo(() => value.length > 0 || isFocused, [value, isFocused]);

  const handleClick = () => {
    setIsFocused(true);
    if (inputRef.current) inputRef.current.focus();
    formikHandleFocus(inputFieldId, true);
  };

  const handleBlur = () => {
    setIsFocused(false);
    formikHandleFocus(inputFieldId, true);
  };

  return (
    <div onClick={handleClick}>
      <div className="relative flex w-full flex-col focus-within:shadow-searchInput">
        <label
          className={`${applyLabelStyle ? 'bottom-[80%] left-[0px] ml-2 translate-y-[unset]  bg-white text-lg  transition-all duration-1000 ease-out' : 'bottom-[50%] left-2  translate-y-[50%]'} ${'absolute  text-base'}`}
        >
          {labelTxt}
        </label>
        <input
          type={inputType || 'text'}
          ref={inputRef}
          id={inputFieldId}
          name={inputFieldId}
          value={value}
          onChange={formikHandleChange}
          onBlur={handleBlur}
          className="border-2 border-emerald-950 px-4 py-2 text-lg outline-none focus:border-2 focus:border-transparent"
        />
      </div>
      {touched && error ? (
        <p className="text-sm  text-red-600">{error}</p>
      ) : (
        <div className="text-sm text-transparent">Text</div>
      )}
    </div>
  );
};

export default FormikValidateInput;
