'use client';
import React, { useEffect } from 'react';
import { CountryDataType } from '@/types/countriesAndLeagues';
import SearchInput from '@/components/common/SearchInput';
import BackButton from '@/components/common/BackButton';
import Country from '@/components/sections/CountriesAndLeagues/Country';
import League from '@/components/sections/CountriesAndLeagues/League';
import { useVisibilityState } from '@/contexts/visibility';
import { CgCloseR } from 'react-icons/cg';

type CountriesAndLeaguesClientProps = {
  countriesAndLeaguesData: CountryDataType;
};
const CountriesAndLeaguesClient: React.FC<CountriesAndLeaguesClientProps> = (props) => {
  const { show, toggle } = useVisibilityState();
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

  const handleClose = () => {
    toggle(false);
  };

  if (!show) {
    return null;
  }

  return (
    <div ref={wrapperElement} className="absolute left-0 right-0 top-0 z-30 min-h-svh w-full gap-1 bg-white ">
      <div className="sticky top-0 flex justify-end bg-white py-3 pr-4">
        <CgCloseR onClick={handleClose} className="cursor-pointer text-2xl" />
      </div>
      <div className="mx-auto w-[90%]">
        <div className="flex-col items-center justify-center ">
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
    </div>
  );
};

export default CountriesAndLeaguesClient;
