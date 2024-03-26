import CountryLeaguesFixtures from '@/components/client/sections/CountryLeaguesFixtures/CountryLeaguesFixtures';
import { CLIENT_BASE_URL } from '@/constants/endpoints.constants';
import { FixturesByDateServerProps } from './CountryLeaguesFixtures.server.types';

const getFixtures = async (date: string) => {
  try {
    const res = await fetch(CLIENT_BASE_URL + `/api/get/fixtures/${date}`, {
      cache: 'force-cache',
      next: {
        revalidate: 60,
      },
    });
    const resData = await res.json();
    return resData;
  } catch (error: unknown) {
    console.log('Error has occurred !');
  }
};

export default async function FixturesByDateServer({ params }: FixturesByDateServerProps) {
  const fixtures = await getFixtures(params.selectedDate);

  return <CountryLeaguesFixtures selectedDate={params.selectedDate} fixtures={fixtures} />;
}
