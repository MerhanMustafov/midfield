'use client';
import React, { useEffect } from 'react';
import { CountryDataType } from '@/types/countriesAndLeagues';
import SearchInput from '@/components/common/SearchInput';
import Country from '@/components/sections/CountriesAndLeagues/Country';

import { useVisibilityState } from '@/contexts/visibility';
import { CgCloseR } from 'react-icons/cg';

type CountriesAndLeaguesClientProps = {
  countriesAndLeaguesData: CountryDataType;
};
const CountriesAndLeaguesClient: React.FC<CountriesAndLeaguesClientProps> = (props) => {
  const { show, toggle } = useVisibilityState();
  const [filteredData, setFilteredData] = React.useState<CountryDataType>(props.countriesAndLeaguesData);
  const [selectedCountry, setSelectedCountry] = React.useState<string | null>(null);
  const [searchInput, setSearchInput] = React.useState<string>('');

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

  const handleCountryClick = (country: string | null) => {
    const isClickedCurrentCountry = selectedCountry === country;
    setSelectedCountry(isClickedCurrentCountry ? null : country);
    setSearchInput('');
  };

  const handleClose = () => {
    toggle(false);
  };

  if (!show) {
    return null;
  }

  return (
    <div className="absolute left-0 right-0 top-0 z-30 min-h-svh w-full gap-1 bg-white ">
      <div>
        <div className="sticky top-0  flex flex-col bg-white">
          <div className=" flex justify-end py-2 pr-2 ">
            <CgCloseR onClick={handleClose} className="cursor-pointer text-2xl" />
          </div>
          <div className="sticky top-auto flex-col items-center justify-center px-2 py-2 ">
            <SearchInput searchInput={searchInput} setSearchInput={setSearchInput} />
          </div>
        </div>
        <div className="mx-auto w-[90%] ">
          {Object.values(filteredData).map((data) => {
            const key = JSON.stringify(data);
            return (
              <Country
                key={key}
                countryName={data.countryName}
                countryCode={data.countryCode}
                countryFlag={data.countryFlag}
                selectedCountry={selectedCountry}
                filteredData={filteredData}
                clickHandler={handleCountryClick}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CountriesAndLeaguesClient;
