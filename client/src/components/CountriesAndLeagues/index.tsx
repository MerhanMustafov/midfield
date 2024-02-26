import React from 'react';
import CountriesAndLeaguesClient from './CountriesAndLeagues';
import { CountryDataType } from '@/types/countriesAndLeagues';

async function getCountriesAndLeagues(): Promise<CountryDataType> {
  const response = await fetch('https://midfield.onrender.com/api/countriesWithLeagues', { cache: 'force-cache' });

  if (response.status !== 200) {
    throw new Error();
  }

  return await response.json();
}

const CountriesAndLeaguesServer: React.FC = async () => {
  const countriesAndLeaguesData = await getCountriesAndLeagues();

  return <CountriesAndLeaguesClient countriesAndLeaguesData={countriesAndLeaguesData} />;
};

export default CountriesAndLeaguesServer;
