'use client';
import { getTodayDate } from '@/utils/date.utils';
import React, { useState } from 'react';

interface Fixture {
  fixture: {
    id: number;
    referee: string | null;
    timezone: string;
    date: Date;
    timestamp: number;
    periods: {
      first: number | null;
      second: number | null;
    };
    venue: {
      id: number | null;
      name: string | null;
      city: string | null;
    };
    status: {
      long: string;
      short: string;
      elapsed: number | null;
    };
  };
  league: League;
  teams: {
    home: {
      id: number;
      name: string;
      logo: string;
      winner: true;
    };
    away: {
      id: number;
      name: string;
      logo: string;
      winner: false;
    };
  };
  goals: {
    home: number | null;
    away: number | null;
  };
  score: {
    halftime: {
      home: number | null;
      away: number | null;
    };
    fulltime: {
      home: number | null;
      away: number | null;
    };
    extratime: {
      home: number | null;
      away: number | null;
    };
    penalty: {
      home: number | null;
      away: number | null;
    };
  };
}

interface League {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: string;
  season: number;
  round: string;
}
interface DataReturnType {
  [countryName: string]: {
    [leagueName: string]: {
      leagueInfo: League;
      leagueData: Fixture[];
    };
  };
}

interface FixturesProps {
  fixtures: DataReturnType;
}

const FixturesClient: React.FC<FixturesProps> = ({ fixtures }) => {
  const [date] = useState<string>(getTodayDate());

  console.log(fixtures, ' asdas');

  return (
    <div>
      {Object.entries(fixtures).map(([countryName, values]) => {
        return (
          <div key={JSON.stringify(values)}>
            <h2>{countryName}</h2>
            {Object.entries(values).map(([leagueName, leagueData]) => (
              <div key={leagueData.leagueInfo.id}>
                <h3>{leagueName}</h3>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default FixturesClient;
