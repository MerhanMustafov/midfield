import CountriesAndLeagues from '@/components/client/sections/CountriesAndLeagues';
import HomeNavigation from '@/components/client/sections/HomeNavigation/HomeNavigation';
import { FixturesByDatePageProps } from './page.types';
import { Suspense } from 'react';
import CountryLeaguesFixturesServer from '@/components/server/CountryLeaguesFixturesServer/CountryLeaguesFixtures.server';
import CountryLeaguesFixturesLoading from '@/components/loading/CountryLeaguesFixturesLoading/CountryLeaguesFixtures.loading';

export default async function FixturesByDate({ params }: FixturesByDatePageProps) {
  return (
    <div className="flex min-h-full flex-col gap-10">
      <HomeNavigation />
      <div>
        <CountriesAndLeagues />
        <Suspense fallback={<CountryLeaguesFixturesLoading />}>
          <CountryLeaguesFixturesServer params={params} />
        </Suspense>
      </div>
    </div>
  );
}
