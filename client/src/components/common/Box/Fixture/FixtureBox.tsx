import React from 'react';
import { FixtureBoxProps } from './FixtureBox.types';
import Team from './Team';

const FixtureBox: React.FC<FixtureBoxProps> = (props) => {
  return (
    <div className="rounded-md border-1px border-black p-4">
      <div className="flex flex-row items-center gap-3">
        {/* status || result */}
        <div>
          <span>{props.status}</span>
        </div>
        {/* teams name and logo (optional for the logo) */}
        <div>
          <Team name={props.homeTeam.name} goals={props.homeTeam.goals} logo={props.homeTeam.logo} />
          <Team name={props.awayTeam.name} goals={props.awayTeam.goals} logo={props.awayTeam.logo} />
        </div>
      </div>
    </div>
  );
};

export default FixtureBox;
