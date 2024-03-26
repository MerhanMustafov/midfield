import React from 'react';
import { MdExpandMore } from 'react-icons/md';

const CountryLoadingBox: React.FC = () => {
  return (
    <div className="relative -z-10 flex animate-pulse flex-row justify-between rounded-md border-1px border-black px-3 py-4">
      <div className=" h-5 w-2/4  bg-slate-200"></div>
      <MdExpandMore className="text-2xl font-bold text-slate-600" />
    </div>
  );
};

const CountryLeaguesFixturesLoading: React.FC = () => {
  return (
    <div className="mx-4 flex flex-col gap-5">
      <CountryLoadingBox />
      <CountryLoadingBox />
      <CountryLoadingBox />
      <CountryLoadingBox />
      <CountryLoadingBox />
      <CountryLoadingBox />
      <CountryLoadingBox />
      <CountryLoadingBox />
      <CountryLoadingBox />
      <CountryLoadingBox />
      <CountryLoadingBox />
      <CountryLoadingBox />
      <CountryLoadingBox />
      <CountryLoadingBox />
      <CountryLoadingBox />
      <CountryLoadingBox />
      <CountryLoadingBox />
      <CountryLoadingBox />
      <CountryLoadingBox />
      <CountryLoadingBox />
      <CountryLoadingBox />
      <CountryLoadingBox />
    </div>
  );
};

export default CountryLeaguesFixturesLoading;
