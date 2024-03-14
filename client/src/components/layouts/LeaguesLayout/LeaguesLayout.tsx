import React from 'react';
import { Layout } from '@/types/layouts';
const LeaguesLayout: React.FC<Layout> = ({ children }) => {
  return <div className="flex flex-col gap-6 pl-4">{children}</div>;
};

export default LeaguesLayout;
