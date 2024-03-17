'use client';
import React, { useEffect } from 'react';
import { CountryDataType } from '@/types/countriesAndLeagues';
import SearchInput from '@/components/common/Inputs/SearchInput';
import Country from '@/components/sections/CountriesAndLeagues/Country';

import { CgCloseR } from 'react-icons/cg';
import { useAppStore } from '@/store/store';

type CountriesAndLeaguesClientProps = {
  countriesAndLeaguesData: CountryDataType;
};
const CountriesAndLeaguesClient: React.FC<CountriesAndLeaguesClientProps> = (props) => {
  const appStore = useAppStore();

  useEffect(() => {
    appStore.cl.dispatch({ type: 'INIT', payload: { clData: props.countriesAndLeaguesData } });
  }, []);

  const handleCountryClick = (country: string | null) => {
    if (appStore.cl.state.selectedCountry === country) {
      appStore.cl.dispatch({ type: 'SET_SELECTED_COUNTRY', payload: { selectedCountry: null } });
      return;
    }
    appStore.cl.dispatch({ type: 'SET_SELECTED_COUNTRY', payload: { selectedCountry: country } });
  };

  const handleClose = () => {
    appStore.cl.dispatch({ type: 'RESET' });
  };

  const handleSearchInputChange = (inputValue: string) => {
    appStore.cl.dispatch({ type: 'SET_SEARCH_INPUT', payload: { searchInput: inputValue } });
  };

  if (!appStore.cl.state.showClMobile) {
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
            <SearchInput searchInput={appStore.cl.state.searchInput} setSearchInput={handleSearchInputChange} />
          </div>
        </div>
        <div className="mx-auto w-[90%] ">
          {Object.values(
            appStore.cl.state.clFilteredData ?? appStore.cl.state.clData ?? props.countriesAndLeaguesData,
          ).map((data) => {
            const key = JSON.stringify(data);
            return (
              <Country
                key={key}
                countryName={data.countryName}
                countryCode={data.countryCode}
                countryFlag={data.countryFlag}
                selectedCountry={appStore.cl.state.selectedCountry}
                filteredData={
                  appStore.cl.state.clFilteredData ?? appStore.cl.state.clData ?? props.countriesAndLeaguesData
                }
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
