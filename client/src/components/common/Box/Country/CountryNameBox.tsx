'use client';
import React from 'react';
import { CountryNameBoxProps } from './CountryNameBox.types';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';
import { useCountryNameBox } from './useCountryNameBox';

const CountryNameBox: React.FC<CountryNameBoxProps> = ({ countryName }) => {
  const { handleToggleLeagues, expand } = useCountryNameBox(countryName);

  return (
    <div className="flex flex-nowrap items-center justify-between rounded-sm">
      <h2 className="text-xl font-bold tracking-wider">{countryName}</h2>
      {expand ? (
        <MdExpandLess onClick={handleToggleLeagues} className="text-2xl font-bold" />
      ) : (
        <MdExpandMore onClick={handleToggleLeagues} className="text-2xl font-bold" />
      )}
    </div>
  );
};

export default CountryNameBox;
