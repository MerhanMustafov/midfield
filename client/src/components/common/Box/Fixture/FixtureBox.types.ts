export type Team = {
  name: string;
  logo?: string;
  goals: number | null;
};
export type FixtureBoxProps = {
  homeTeam: Team;
  awayTeam: Team;
  fixtureData: Date;
  status: string;
};
