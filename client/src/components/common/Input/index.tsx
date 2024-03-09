import React, { useRef, useMemo, useState } from 'react';

interface InputProps {
  labelTxt: string;
  inputFieldId: string;
  value: string;
  error: string | undefined;
  formikHandleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ value, error, formikHandleChange, labelTxt, inputFieldId }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  const applyLabelStyle = useMemo(() => value.length > 0 || isFocused, [value, isFocused]);

  const handleClick = () => {
    setIsFocused(true);
    if (inputRef.current) inputRef.current.focus();
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div onClick={handleClick}>
      <div className="relative flex w-full flex-col focus-within:shadow-searchInput">
        <label
          className={`${applyLabelStyle ? ' bottom-[80%] left-[0px] ml-2 translate-y-[unset]  bg-white text-lg  transition-all duration-1000 ease-out' : 'bottom-[50%] left-2  translate-y-[50%]'} ${'absolute  text-2xl'}`}
        >
          {labelTxt}
        </label>
        <input
          type="text"
          ref={inputRef}
          id={inputFieldId}
          name={inputFieldId}
          value={value}
          onChange={formikHandleChange}
          onBlur={handleBlur}
          className="border-2 border-emerald-950 px-4 pb-2 pt-4 text-2xl outline-none focus:border-2 focus:border-transparent"
        />
      </div>
      {error && <p className="text-sm  text-red-600">{error}</p>}
    </div>
  );
};

export default Input;
