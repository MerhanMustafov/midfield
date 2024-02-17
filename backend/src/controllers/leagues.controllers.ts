import { customAxios } from '@configs/axios.configs';
import { Request, Response } from 'express';

type LeaguesResponseTypes = {
  league: {
    id: 39; //ex: 39
    name: string; // ex: 'Premier League'
    type: string; // ex: 'League'
    logo: string; // ex: 'https://media.api-sports.io/football/leagues/2.png'
  };
  country: {
    name: string; // ex: 'England'
    code: string; //  ex: 'GB'
    flag: string; // ex: 'https://media.api-sports.io/flags/gb.svg'
  };

  // TODO: Add more properties for season... IF needed
};

export async function getLeagues(req: Request, res: Response) {
  try {
    const response = await customAxios.get('/leagues');
    const status = response.status;
    const responseData = response.data as LeaguesResponseTypes[];

    // console.log(response.status, ' :response.status');
    // console.log(responseData, ' :response.data');

    if (status !== 200) {
      throw new Error('Error has occurred while fetching leagues data from the API !');
    }

    return res.json(responseData);
  } catch {
    return res.json({ error: 'Something went wrong' });
  }
}
