import React from 'react';
import { LeagueNameBoxProps } from './LeagueNameBox.types';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';
import { useLeagueNameBox } from './useLeagueNameBox';
const LeagueNameBox: React.FC<LeagueNameBoxProps> = ({ leagueName }) => {
  const { handleToggleFixtures, expand } = useLeagueNameBox(leagueName);
  return (
    <div className="flex flex-row justify-between">
      <h2>{leagueName}</h2>
      {expand ? (
        <MdExpandLess onClick={handleToggleFixtures} className="text-2xl font-bold" />
      ) : (
        <MdExpandMore onClick={handleToggleFixtures} className="text-2xl font-bold" />
      )}
    </div>
  );
};

export default LeagueNameBox;
