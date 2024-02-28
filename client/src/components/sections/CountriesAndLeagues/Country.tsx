import React from 'react';
import NameWithLogo from '@/components/common/NameWithLogo';

interface CountryProps {
  countryName: string;
  countryCode: string;
  countryFlag?: string;
  clickHandler: (country: string | number) => void;
}

const Country: React.FC<CountryProps> = (props) => {
  const handleCountryClick = () => {
    props.clickHandler(props.countryName);
  };
  return (
    <div onClick={handleCountryClick}>
      <NameWithLogo name={props.countryName} logo={props.countryFlag} />
    </div>
  );
};

export default Country;
