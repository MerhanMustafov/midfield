import React from 'react';
import { Layout } from '@/types/layouts';

const CountryLeaguesFixturesLayout: React.FC<Layout> = (props) => {
  return <div className="flex flex-col gap-4 rounded-md border-1px border-black px-3 py-4">{props.children}</div>;
};

export default CountryLeaguesFixturesLayout;
