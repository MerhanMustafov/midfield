'use client';
import React from 'react';
import NameWithLogo from '@/components/common/NameWithLogo';
import League from '@/components/sections/CountriesAndLeagues/League';
import { CountryDataType } from '@/types/countriesAndLeagues';

interface CountryProps {
  countryName: string;
  countryCode: string;
  countryFlag?: string;
  selectedCountry: string | null;
  filteredData: CountryDataType | null;
  clickHandler: (country: string) => void;
}

const Country: React.FC<CountryProps> = (props) => {
  const isSelectedCountry = props.selectedCountry === props.countryName;

  const handleCountryClick = () => {
    props.clickHandler(props.countryName);
  };
  return (
    <div className="flex flex-col">
      <div onClick={handleCountryClick}>
        <NameWithLogo name={props.countryName} logo={props.countryFlag} />
      </div>
      {props.selectedCountry && isSelectedCountry && (
        <div className=" box-border pl-4">
          <div className="flex flex-col gap-2 p-2">
            {props.filteredData &&
              Object.values(props.filteredData[props.selectedCountry].leagues).map((data) => {
                const key = data.leagueId;
                return (
                  <League
                    key={key}
                    leagueName={data.leagueName}
                    leagueId={data.leagueId}
                    leagueLogo={data.leagueLogo}
                  />
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
