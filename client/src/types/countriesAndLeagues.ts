export type ByLeagueKey = {
  [LeagueName: string]: {
    leagueId: number;
    leagueName: string;
    leagueLogo: string;
  };
};

export type CountryDataType = {
  [CountryName: string]: {
    countryName: string;
    countryFlag: string;
    countryCode: string;
    leagues: ByLeagueKey;
  };
};
