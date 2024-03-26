import CountryLeaguesFixtures from '@/components/client/sections/CountryLeaguesFixtures/CountryLeaguesFixtures';
import { CLIENT_BASE_URL } from '@/constants/endpoints.constants';
import { getTodayDate } from '@/utils/date.utils';

const getFixtures = async () => {
  const date = getTodayDate();
  try {
    const res = await fetch(CLIENT_BASE_URL + `/api/get/fixtures/${date.dateQuery}`, { cache: 'no-cache' });
    const resData = await res.json();
    return resData;
  } catch (error: unknown) {
    console.log('Error has occurred !');
  }
};

export default async function HomeCountryLeaguesFixturesServer() {
  const fixtures = await getFixtures();

  return <CountryLeaguesFixtures fixtures={fixtures} />;
}
