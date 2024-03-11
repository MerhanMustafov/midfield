'use client';
import React, { useCallback } from 'react';
import { CountryDataType } from '@/types/countriesAndLeagues';
import SearchInput from '@/components/common/Inputs/SearchInput';
import Country from '@/components/sections/CountriesAndLeagues/Country';
import { filterObjectByKey } from '@/utils/filter/filterObjectByKey.utils';
import { useDebounceEffect } from '@/hooks/useDebounceEffect';

import { useVisibilityState } from '@/contexts/visibility';
import { CgCloseR } from 'react-icons/cg';

type CountriesAndLeaguesClientProps = {
  countriesAndLeaguesData: CountryDataType;
};
const CountriesAndLeaguesClient: React.FC<CountriesAndLeaguesClientProps> = (props) => {
  const {
    countriesAndLeagues: { showCountriesAndLeagues, toggleCountriesAndLeagues },
  } = useVisibilityState();
  const [filteredData, setFilteredData] = React.useState<CountryDataType>(props.countriesAndLeaguesData);
  const [selectedCountry, setSelectedCountry] = React.useState<string | null>(null);
  const [searchInput, setSearchInput] = React.useState<string>('');

  const filterCountriesCb = useCallback(() => {
    const filtered = filterObjectByKey(props.countriesAndLeaguesData, searchInput);
    const isFiltered = Object.keys(filtered).length > 0;
    setFilteredData(isFiltered ? filtered : props.countriesAndLeaguesData);
  }, [searchInput, props.countriesAndLeaguesData]);

  useDebounceEffect(filterCountriesCb, 700, [searchInput]);

  const handleCountryClick = (country: string | null) => {
    const isClickedCurrentCountry = selectedCountry === country;
    setSelectedCountry(isClickedCurrentCountry ? null : country);
  };

  const handleClose = () => {
    toggleCountriesAndLeagues(false);
    setSelectedCountry(null);
    setSearchInput('');
  };

  if (!showCountriesAndLeagues) {
    return null;
  }

  return (
    <div
      id="countriesAndLeaguesElementId"
      className="fixed left-0 right-0 top-0 z-30 h-full min-h-svh w-full gap-1 overflow-y-auto bg-white "
    >
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
