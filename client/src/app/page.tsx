import CountriesAndLeagues from '@/components/sections/CountriesAndLeagues';
import HomeNavigation from '@/components/sections/HomeNavigation';
import CountryLeaguesFixtures from '@/components/sections/CountryLeaguesFixtures/CountryLeaguesFixtures';
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

export default async function HomePage() {
  const fixtures = await getFixtures();

  return (
    <div className="flex min-h-full flex-col gap-4">
      <HomeNavigation />
      <div>
        <CountriesAndLeagues />
        <CountryLeaguesFixtures fixtures={fixtures} />
      </div>
    </div>
  );
}
