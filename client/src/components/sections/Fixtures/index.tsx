'use client';

import { CLIENT_BASE_URL } from '@/constants/endpoints.constants';
import React, { useState } from 'react';
import { getTodayDate } from '@/utils/date.utils';

const Fixtures: React.FC = () => {
  const [date] = useState<string>(getTodayDate());
  const getFixtures = async () => {
    try {
      const res = await fetch(CLIENT_BASE_URL + `/api/get/fixtures/${date}`);
      const resData = await res.json();
      console.log(resData);
    } catch (error: unknown) {
      console.log('Error has occurred !');
    }
  };
  return (
    <div>
      <h1>Fixtures</h1>
      <div onClick={getFixtures}>get data</div>
    </div>
  );
};

export default Fixtures;
