import React from 'react';
import { useLeague } from '../hooks/useLeague';
import { Leagues } from './Leagues';
import { useParams } from 'react-router-dom';

interface Props {
  id?: number;
}

export const League = ({ id }: Props) => {
  const { leagueId } = useParams();
  const { league, isLoading, error } = useLeague();

  return (
    <div>
      <h2>{league?.response[0].league.name}</h2>
    </div>
  );
};
