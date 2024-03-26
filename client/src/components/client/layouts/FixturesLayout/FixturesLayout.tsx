import React from 'react';
import { Layout } from '@/types/layouts';

const FixturesLayout: React.FC<Layout> = (props) => {
  return <div className="flex flex-col gap-4 pl-2">{props.children}</div>;
};

export default FixturesLayout;
