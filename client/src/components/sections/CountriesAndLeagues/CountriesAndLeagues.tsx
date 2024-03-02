'use client';
import React, { useEffect } from 'react';
import { CountryDataType } from '@/types/countriesAndLeagues';
import SearchInput from '@/components/common/SearchInput';
import BackButton from '@/components/common/BackButton';
import Country from '@/components/sections/CountriesAndLeagues/Country';
import League from '@/components/sections/CountriesAndLeagues/League';
import { useVisibilityState } from '@/contexts/visibility';

type CountriesAndLeaguesClientProps = {
  countriesAndLeaguesData: CountryDataType;
};
const CountriesAndLeaguesClient: React.FC<CountriesAndLeaguesClientProps> = (props) => {
  const { show } = useVisibilityState();
  const wrapperElement = React.useRef<HTMLDivElement>(null);
  const [filteredData, setFilteredData] = React.useState<CountryDataType>(props.countriesAndLeaguesData);
  const [selectedCountry, setSelectedCountry] = React.useState<keyof typeof props.countriesAndLeaguesData | null>(null);
  const [searchInput, setSearchInput] = React.useState<string>('');

  useEffect(() => {
    if (wrapperElement.current && selectedCountry) {
      wrapperElement.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedCountry]);

  useEffect(() => {
    const timeOutID = setTimeout(() => {
      const filtered = Object.entries(props.countriesAndLeaguesData).reduce((acc, [key, value]) => {
        if (key.toLowerCase().startsWith(searchInput.toLowerCase())) {
          acc[key] = value;
        }
        return acc;
      }, {} as CountryDataType);
      setFilteredData(Object.keys(filtered).length > 0 ? filtered : props.countriesAndLeaguesData);
    }, 700);

    return () => clearTimeout(timeOutID);
  }, [searchInput, props.countriesAndLeaguesData]);

  const handleCountryClick = (country: keyof typeof props.countriesAndLeaguesData) => {
    setSelectedCountry(country);
    setSearchInput('');
  };

  const handleBackClick = () => {
    setSelectedCountry(null);
  };

  if (!show) {
    return null;
  }

  return (
    <div ref={wrapperElement} className=" absolute left-0 right-0 top-0 z-30 min-h-[600px] w-full gap-1 bg-white">
      <div className=" flex min-h-[50px] items-center border-b-[1px] border-black">
        {selectedCountry ? (
          <BackButton clickHandler={handleBackClick} />
        ) : (
          <SearchInput searchInput={searchInput} setSearchInput={setSearchInput} />
        )}
      </div>
      {!selectedCountry &&
        Object.values(filteredData).map((data) => {
          const key = JSON.stringify(data);
          return (
            <Country
              key={key}
              countryName={data.countryName}
              countryCode={data.countryCode}
              clickHandler={handleCountryClick}
              countryFlag={data.countryFlag}
            />
          );
        })}
      {selectedCountry &&
        Object.values(filteredData[selectedCountry].leagues).map((data) => {
          const key = data.leagueId;
          return (
            <League key={key} leagueName={data.leagueName} leagueId={data.leagueId} leagueLogo={data.leagueLogo} />
          );
        })}
    </div>
  );
};

export default CountriesAndLeaguesClient;
