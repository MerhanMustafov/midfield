'use client';
import React from 'react';
import { CountryNameBoxProps } from './CountryNameBox.types';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';
import { useAppStore } from '@/store/store';

const CountryNameBox: React.FC<CountryNameBoxProps> = (props) => {
  const appStore = useAppStore();

  const handleToggleLeagues = () => {
    props.handleToggleLeagues(props.countryName);
  };

  return (
    <div className=" flex flex-nowrap items-center justify-between rounded-md">
      <h2 className="text-xl font-bold tracking-wider">{props.countryName}</h2>
      {appStore.countryLeaguesFixtures.state.showLeaguesTo[props.countryName] ? (
        <MdExpandLess onClick={handleToggleLeagues} className="cursor-pointer text-2xl font-bold" />
      ) : (
        <MdExpandMore onClick={handleToggleLeagues} className="cursor-pointer text-2xl font-bold" />
      )}
    </div>
  );
};

export default CountryNameBox;
