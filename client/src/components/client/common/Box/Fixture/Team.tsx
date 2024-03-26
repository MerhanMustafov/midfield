/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Team } from './FixtureBox.types';

const Team: React.FC<Team> = (props) => {
  return (
    <div className="flex flex-row gap-4">
      {props.goals && <span>{props.goals}</span>}
      <div className="flex flex-row items-center gap-2">
        <div className="h-6 w-6">
          {/* TODO: consider changing the img tag to next Image */}
          <img className="h-full w-full" src={props.logo} alt="Team logo" />
        </div>
        <h3 className="overflow-hidden text-ellipsis text-nowrap">{props.name}</h3>
      </div>
    </div>
  );
};

export default Team;
