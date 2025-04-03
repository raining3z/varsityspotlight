import { Player } from '../data';
import config from '../config';
import styled from 'styled-components';

interface PlayerCardProps {
  player: Player;
}

const ProductItem = styled.div`
  text-align: center;

  img {
    width: 100%;
  }
`;

const { sports } = config;

export default function PlayerCard({ player }: PlayerCardProps) {
  const { sportId, profile } = player;
  const { firstName, lastName, position, gender, weight } = profile;

  const sport = sports.find((sport) => sport.id === sportId);
  const sportName = sport?.label;

  return (
    <ProductItem>
      <img
        src="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3917376.png&w=350&h=254"
        alt={`${firstName} ${lastName}`}
      />
      <h2>
        {firstName} {lastName}
      </h2>
      <p>Sport: {sportName}</p>
      <p>Position: {position}</p>
      <p>Gender: {gender}</p>
      <p>Weight: {weight} lbs</p>
    </ProductItem>
  );
}
