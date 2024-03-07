import React from 'react';
import CountriesAndLeaguesClient from './CountriesAndLeagues';
import { CountryDataType } from '@/types/countriesAndLeagues';

async function getCountriesAndLeagues() {
  // TODO: use local url root for dev and prod url for prod
  return await fetch('http://localhost:3050/api/countriesWithLeagues', { cache: 'force-cache' });
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
