import { useVisibilityState } from '@/contexts/visibility/visibility.context';
import { UseLeagueNameBox } from './LeagueNameBox.types';

export const useLeagueNameBox = (leagueName: string): UseLeagueNameBox => {
  const {
    league: { showFixturesTo, toggleLeagueFixtures },
  } = useVisibilityState();

  const handleToggleFixtures = () => {
    toggleLeagueFixtures(leagueName);
  };

  return {
    expand: showFixturesTo[leagueName],
    handleToggleFixtures,
  };
};
