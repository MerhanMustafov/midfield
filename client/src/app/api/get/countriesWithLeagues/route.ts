import { NextResponse } from 'next/server';
import { URL_COUNTRIES_WITH_LEAGUES } from '@/constants/endpoints.constants';
import { CountryDataType } from '@/types/countriesAndLeagues';

export const GET = async () => {
  try {
    const res = await fetch(URL_COUNTRIES_WITH_LEAGUES, { cache: 'force-cache' });

    if (res.status !== 200) {
      throw new Error('Error has occurred');
    }

    const resData: CountryDataType = await res.json();
    return NextResponse.json(resData, { status: 200 });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ error: 'Error has occurred !' }, { status: 500 });
  }
};
