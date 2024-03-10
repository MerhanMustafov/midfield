import React from 'react';
import CountriesAndLeaguesClient from './CountriesAndLeagues';
import { CLIENT_BASE_URL } from '@/constants/endpoints.constants';

const getCountriesAndLeagues = async () => {
  return await fetch(CLIENT_BASE_URL + '/api/get/countriesWithLeagues', { cache: 'force-cache' });
};
const CountriesAndLeaguesServer: React.FC = async () => {
  const res = await getCountriesAndLeagues();
  const data = await res.json();

  if (res.status !== 200) {
    return <div>{data.error}</div>;
  }

  return <CountriesAndLeaguesClient countriesAndLeaguesData={data} />;
};

export default CountriesAndLeaguesServer;
