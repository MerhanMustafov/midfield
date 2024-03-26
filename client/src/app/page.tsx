import CountriesAndLeagues from '@/components/client/sections/CountriesAndLeagues';
import HomeNavigation from '@/components/client/sections/HomeNavigation/HomeNavigation';
import { Suspense } from 'react';
import HomeCountryLeaguesFixturesServer from '@/components/server/HomeCountryLeaguesFixturesServer/HomeCountryLeaguesFixturesServer.server';
import CountryLeaguesFixturesLoading from '@/components/loading/CountryLeaguesFixturesLoading/CountryLeaguesFixtures.loading';

export default async function HomePage() {
  return (
    <div className="flex min-h-full flex-col gap-10">
      <HomeNavigation />
      <div>
        <CountriesAndLeagues />
        <Suspense fallback={<CountryLeaguesFixturesLoading />}>
          <HomeCountryLeaguesFixturesServer />
        </Suspense>
      </div>
    </div>
  );
}
