import React from 'react';
import CountriesAndLeaguesClient from './CountriesAndLeagues';
import { CountryDataType } from '@/types/countriesAndLeagues';
import { URL_COUNTRIES_WITH_LEAGUES } from '@/constants/endpoints.constants';

async function getCountriesAndLeagues() {
  return await fetch(URL_COUNTRIES_WITH_LEAGUES, { cache: 'force-cache' });
}

const CountriesAndLeaguesServer: React.FC = async () => {
  const res = await getCountriesAndLeagues();

  if (res.status !== 200) {
    return <div>Opps, Error has occurred</div>;
  }

  const data: CountryDataType = await res.json();

  return <CountriesAndLeaguesClient countriesAndLeaguesData={data} />;
};

export default CountriesAndLeaguesServer;
