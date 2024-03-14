import React from 'react';
import { Layout } from '@/types/layouts';

const CountryLeaguesFixturesLayout: React.FC<Layout> = ({ children }) => {
  return <div className="border-1px flex flex-col gap-4 rounded-md border-black px-3 py-4">{children}</div>;
};

export default CountryLeaguesFixturesLayout;
