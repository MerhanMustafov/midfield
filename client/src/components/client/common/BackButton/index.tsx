import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';

type BackButtonProps = {
  clickHandler: () => void;
};
const BackButton: React.FC<BackButtonProps> = (props) => {
  const handleClick = () => {
    props.clickHandler();
  };
  return (
    <div className="h-full w-full  ">
      <IoIosArrowBack onClick={handleClick} className="cursor-pointer text-left text-2xl" />
    </div>
  );
};

export default BackButton;
