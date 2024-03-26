import React from 'react';
import NameWithLogo from '@/components/client/common/NameWithLogo';

interface LeagueProps {
  leagueId: number;
  leagueName: string;
  leagueLogo?: string;
  // TODO: Add later click handler
  // clickHandler: (country: string | number) => void;
}

const League: React.FC<LeagueProps> = (props) => {
  return (
    <div>
      <NameWithLogo name={props.leagueName} logo={props.leagueLogo} />
    </div>
  );
};

export default League;
