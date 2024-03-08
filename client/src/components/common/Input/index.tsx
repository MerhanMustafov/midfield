import React, { useRef, useMemo, useState } from 'react';

interface InputProps {
  value: string;
  setInput: (value: string) => void;
  labelTxt: string;
}

const Input: React.FC<InputProps> = ({ value, setInput, labelTxt }) => {
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
    <div onClick={handleClick} className="group relative flex w-full flex-col border-2 border-red-600">
      <label
        className={`${applyLabelStyle ? ' bottom-full left-[0px]  translate-y-[unset] text-lg  transition-all duration-1000 ease-out' : 'bottom-[-20%]  translate-y-[-50%]'} ${'absolute left-[10px] text-2xl'}`}
      >
        {labelTxt}
      </label>
      <input
        ref={inputRef}
        onBlur={handleBlur}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        value={value}
        className="border-2 border-green-600 px-2 py-1 text-2xl outline-none"
      />
    </div>
  );
};

export default Input;
