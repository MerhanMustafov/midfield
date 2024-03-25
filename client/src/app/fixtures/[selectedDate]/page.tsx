import CountriesAndLeagues from '@/components/sections/CountriesAndLeagues';
import HomeNavigation from '@/components/sections/HomeNavigation/HomeNavigation';
import CountryLeaguesFixtures from '@/components/sections/CountryLeaguesFixtures/CountryLeaguesFixtures';
import { FixturesByDatePageProps } from './page.types';
import { CLIENT_BASE_URL } from '@/constants/endpoints.constants';

const getFixtures = async (date: string) => {
  try {
    const res = await fetch(CLIENT_BASE_URL + `/api/get/fixtures/${date}`, { cache: 'no-cache' });
    const resData = await res.json();
    return resData;
  } catch (error: unknown) {
    console.log('Error has occurred !');
  }
};

export default async function FixturesByDate({ params }: FixturesByDatePageProps) {
  const fixtures = await getFixtures(params.selectedDate);

  return (
    <div className="flex min-h-full flex-col gap-10">
      <HomeNavigation />
      <div>
        <CountriesAndLeagues />
        <CountryLeaguesFixtures selectedDate={params.selectedDate} fixtures={fixtures} />
      </div>
    </div>
  );
}
