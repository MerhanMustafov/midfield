import React, { useMemo, useRef, useState } from 'react';
type CustomInputProps = {
  inputType?: string;
  labelTxt: string;
  inputFieldId: string;
  value: string;
  error?: string;
  changeHandler: React.Dispatch<React.SetStateAction<string>>;
};
const CustomInput: React.FC<CustomInputProps> = ({ changeHandler, inputFieldId, labelTxt, value, inputType }) => {
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
          className={`${applyLabelStyle ? 'bottom-[80%] left-[0px] ml-2 translate-y-[unset]  bg-white text-lg  transition-all duration-1000 ease-out' : 'bottom-[50%] left-2  translate-y-[50%]'} ${'absolute  text-base'}`}
        >
          {labelTxt}
        </label>
        <input
          type={inputType ?? 'text'}
          ref={inputRef}
          id={inputFieldId}
          name={inputFieldId}
          value={value}
          onChange={(e) => changeHandler(e.target.value)}
          onBlur={handleBlur}
          className="border-2 border-emerald-950 px-4 py-2 text-lg outline-none focus:border-2 focus:border-transparent"
        />
      </div>
    </div>
  );
};

export default CustomInput;
