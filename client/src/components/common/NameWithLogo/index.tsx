import React from 'react';
import Image from 'next/image';

interface NameWithLogoProps {
  name: string;
  logo?: string;
}

const Logo: React.FC<Required<NameWithLogoProps>> = ({ logo, name }) => {
  return <Image src={logo} alt={`${name} flag `} width={20} height={20} className="h-[20px] w-[20px]" />;
};

const EmptyLogoBox: React.FC = () => {
  return <div className="h-[20px] w-[20px] border-2 border-gray-500 text-center align-middle" />;
};

const NameWithLogo: React.FC<NameWithLogoProps> = ({ name, logo }) => {
  return (
    <div className="flex cursor-pointer flex-row items-center gap-3 overflow-hidden p-1 ">
      {logo ? <Logo logo={logo} name={name} /> : <EmptyLogoBox />}
      <div title={name} className="overflow-hidden text-ellipsis text-nowrap">
        {name}
      </div>
    </div>
  );
};

export default NameWithLogo;
