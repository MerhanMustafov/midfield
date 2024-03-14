import CountriesAndLeagues from '@/components/sections/CountriesAndLeagues';
import HomeNavigation from '@/components/sections/HomeNavigation';
import CountryLeaguesFixtures from '@/components/sections/CountryLeaguesFixtures';

export default function Home() {
  return (
    <div className="flex min-h-full flex-col gap-4">
      <HomeNavigation />
      <div>
        <CountriesAndLeagues />
        <CountryLeaguesFixtures />
      </div>
    </div>
  );
}
