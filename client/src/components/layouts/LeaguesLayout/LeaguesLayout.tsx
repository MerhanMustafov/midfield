import React from 'react';
import { Layout } from '@/types/layouts';

const LeaguesLayout: React.FC<Layout> = (props) => {
  return <div className=" flex flex-col gap-4 pl-4">{props.children}</div>;
};

export default LeaguesLayout;
