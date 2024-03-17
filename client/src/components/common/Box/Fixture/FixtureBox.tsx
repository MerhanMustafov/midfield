import React from 'react';
import { FixtureBoxProps } from './FixtureBox.types';
import Team from './Team';

const FixtureBox: React.FC<FixtureBoxProps> = (props) => {
  return (
    <div className="rounded-md border-1px border-black p-4">
      <div className="flex flex-row items-center gap-6">
        {/* status || result */}
        <div>
          <span title={props.status.long}>{props.status.short}</span>
        </div>
        <div className="flex flex-col gap-6">
          {/* teams name and logo (optional for the logo) */}
          <Team name={props.homeTeam.name} goals={props.homeTeam.goals} logo={props.homeTeam.logo} />
          <Team name={props.awayTeam.name} goals={props.awayTeam.goals} logo={props.awayTeam.logo} />
        </div>
      </div>
    </div>
  );
};

export default FixtureBox;
