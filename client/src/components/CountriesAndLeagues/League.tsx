import React from 'react';

interface LeagueProps {
  leagueId: number;
  leagueName: string;
  leagueLogo?: string;
  // TODO: Add later click handler
  // clickHandler: (country: string | number) => void;
}

const League: React.FC<LeagueProps> = (props) => {
  return (
    <div className="cursor-pointer px-2 py-1">
      <div title={props.leagueName} className="overflow-hidden text-ellipsis text-nowrap">
        {props.leagueName}
      </div>
    </div>
  );
};

export default League;
