import React from 'react';
import { LeagueNameBoxProps } from './LeagueNameBox.types';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';
import { useAppStore } from '@/store/store';

const LeagueNameBox: React.FC<LeagueNameBoxProps> = (props) => {
  const appStore = useAppStore();

  const handleToggleFixtures = () => {
    props.handleToggleFixtures(props.leagueName);
  };
  return (
    <div className="flex flex-row justify-between">
      <h2>{props.leagueName}</h2>
      {appStore.countryLeaguesFixtures.state.showFixturesTo[props.leagueName] ? (
        <MdExpandLess onClick={handleToggleFixtures} className="cursor-pointer text-2xl font-bold" />
      ) : (
        <MdExpandMore onClick={handleToggleFixtures} className="cursor-pointer text-2xl font-bold" />
      )}
    </div>
  );
};

export default LeagueNameBox;
