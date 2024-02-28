import React from 'react';

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
    <div onClick={handleCountryClick} className="cursor-pointer px-2 py-1">
      <div title={props.countryName} className="overflow-hidden text-ellipsis text-nowrap">
        {props.countryName}
      </div>
    </div>
  );
};

export default Country;
