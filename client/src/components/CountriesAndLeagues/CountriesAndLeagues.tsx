'use client';
import React, { useEffect } from 'react';
import { CountryDataType } from '@/types/countriesAndLeagues';
import SearchInput from '@/components/common/SearchInput';
import BackButton from '@/components/common/BackButton';
import Country from '@/components/CountriesAndLeagues/Country';
import League from '@/components/CountriesAndLeagues/League';

type CountriesAndLeaguesClientProps = {
  countriesAndLeaguesData: CountryDataType;
};
const CountriesAndLeaguesClient: React.FC<CountriesAndLeaguesClientProps> = (props) => {
  const wrapperElement = React.useRef<HTMLDivElement>(null);
  const [selectedCountry, setSelectedCountry] = React.useState<keyof typeof props.countriesAndLeaguesData | null>(null);

  useEffect(() => {
    if (wrapperElement.current) {
      wrapperElement.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedCountry]);

  const handleCountryClick = (country: keyof typeof props.countriesAndLeaguesData) => {
    setSelectedCountry(country);
  };

  const handleBackClick = () => {
    setSelectedCountry(null);
  };
  return (
    <div ref={wrapperElement} className="min-h-[600px] w-[160px] gap-1">
      <div className=" flex min-h-[50px] items-center border-b-[1px] border-black">
        {selectedCountry ? <BackButton clickHandler={handleBackClick} /> : <SearchInput />}
      </div>
      {!selectedCountry &&
        Object.values(props.countriesAndLeaguesData).map((data) => {
          const key = JSON.stringify(data);
          return (
            <Country
              key={key}
              countryName={data.countryName}
              countryCode={data.countryCode}
              clickHandler={handleCountryClick}
            />
          );
        })}
      {selectedCountry &&
        Object.values(props.countriesAndLeaguesData[selectedCountry].leagues).map((data) => {
          const key = data.leagueId;
          return <League key={key} leagueName={data.leagueName} leagueId={data.leagueId} />;
        })}
    </div>
  );
};

export default CountriesAndLeaguesClient;
