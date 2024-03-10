import { CLIENT_BASE_URL } from '@/constants/endpoints.constants';
import React from 'react';
import { getTodayDate } from '@/utils/date.utils';
import FixturesClient from '@/components/sections/Fixtures/FixturesClient';

const getFixtures = async () => {
  const date = getTodayDate();
  try {
    const res = await fetch(CLIENT_BASE_URL + `/api/get/fixtures/${date}`);
    const resData = await res.json();
    return resData;
  } catch (error: unknown) {
    console.log('Error has occurred !');
  }
};

const Fixtures: React.FC = async () => {
  const data = await getFixtures();

  return <FixturesClient fixtures={data} />;
};

export default Fixtures;
