import { customAxios } from '@configs/axios.configs';
import { Request, Response } from 'express';

interface CountriesResponseTypes {
  data: {
    response: {
      name: string;
      code: string;
      flag: string;
    }[];
    results: number;
  };
}

export async function getCountries(req: Request, res: Response) {
  try {
    const response: CountriesResponseTypes = await customAxios.get('/countries');

    // const data = response.data.response.sort((a, b) => sortByCountryName(a.name, b.name));
    // const numberOfCountries = response.data.results;

    // const returnData = { data, numberOfCountries };
    return res.json(response.data);
  } catch {
    return res.json({ error: 'Something went wrong' });
  }
}
