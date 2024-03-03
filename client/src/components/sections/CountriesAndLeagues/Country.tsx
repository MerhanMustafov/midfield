'use client';
import React, { useEffect, useRef } from 'react';
import NameWithLogo from '@/components/common/NameWithLogo';
import League from '@/components/sections/CountriesAndLeagues/League';
import { CountryDataType } from '@/types/countriesAndLeagues';

interface CountryProps {
  countryName: string;
  countryCode: string;
  countryFlag?: string;
  selectedCountry: string | null;
  clickHandler: (country: string) => void;
  filteredData: CountryDataType;
}

const Country: React.FC<CountryProps> = (props) => {
  const countryWrapperEl = useRef<HTMLDivElement>(null);
  const isSelectedCountry = props.selectedCountry === props.countryName;

  useEffect(() => {
    if (countryWrapperEl.current && props.selectedCountry && isSelectedCountry) {
      window.scrollTo({
        top: countryWrapperEl.current.offsetTop - 32, // 32 is the py of the sticky headers
        behavior: 'smooth',
      });
      // countryWrapperEl.current.clientHeight + countryWrapperEl.current.scrollHeight;
    }
  }, [props.selectedCountry, isSelectedCountry]);
  const handleCountryClick = () => {
    props.clickHandler(props.countryName);
  };
  return (
    <div ref={countryWrapperEl} className="flex flex-col">
      <div onClick={handleCountryClick}>
        <NameWithLogo name={props.countryName} logo={props.countryFlag} />
      </div>
      {props.selectedCountry && isSelectedCountry && (
        <div className="my-4 box-border pl-6 pr-1">
          <div className="flex flex-col gap-2 p-4 shadow-sm shadow-black">
            {Object.values(props.filteredData[props.selectedCountry].leagues).map((data) => {
              const key = data.leagueId;
              return (
                <League key={key} leagueName={data.leagueName} leagueId={data.leagueId} leagueLogo={data.leagueLogo} />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Country;

{
  /*   Object.values(props.filteredData[props.selectedCountry].leagues).map((data) => {
              const key = data.leagueId;
              return (
                <League key={key} leagueName={data.leagueName} leagueId={data.leagueId} leagueLogo={data.leagueLogo} />
              );
            })} */
}
