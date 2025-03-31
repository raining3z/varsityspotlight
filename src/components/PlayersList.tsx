import {
  type FormEvent,
  type ChangeEvent,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';
import { Player } from '../data';
import PlayerCard from './PlayerCard';
import config from '../config';

import styled from 'styled-components';

const { sports } = config;

const SortRow = styled.div`
  display: flex;
  justify-content: end;
  margin-bottom: 1rem;
`;

const SortByField = styled.div``;

const PlayerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 2rem;
`;

interface PlayersListProps {
  players: Player[];
  setPlayers: Dispatch<SetStateAction<Player[]>>;
  sortOption: string;
  sortBy: (event: ChangeEvent<HTMLSelectElement>) => void;
}

type PlayerData = Omit<Player, 'id'>;

const defaultFormData: PlayerData = {
  sportId: 0,
  profile: {
    firstName: '',
    lastName: '',
    position: '',
    gender: '',
    weight: 0,
  },
};

export default function PlayersList({
  players,
  setPlayers,
  sortOption,
  sortBy,
}: PlayersListProps) {
  const [formData, setFormData] = useState<PlayerData>(defaultFormData);
  const [showAddPlayer, setShowAddPlayer] = useState<boolean>(false);

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = event.target;

    if (name === 'sportId') {
      setFormData((prev) => ({
        ...prev,
        sportId: +value,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        profile: {
          ...prev.profile,
          [name]: name === 'weight' ? +value : value,
        },
      }));
    }
  }

  function addPlayer(event: FormEvent) {
    event.preventDefault();

    setPlayers((prev) => {
      const newPlayer = {
        id: Date.now(),
        sportId: formData.sportId,
        profile: {
          // firstName: formData.profile.firstName,
          // lastName: formData.profile.lastName,
          // position: formData.profile.position,
          // gender: formData.profile.gender,
          // weight: formData.profile.weight,
          // below is the same as above
          ...formData.profile,
        },
      };
      return [newPlayer, ...prev];
    });

    setFormData(defaultFormData);

    // above is same as above
    // setFormData({
    //   sportId: 0,
    //   profile: {
    //     firstName: '',
    //     lastName: '',
    //     position: '',
    //     gender: '',
    //     weight: 0,
    //   },
    // });
  }

  return (
    <>
      <SortRow>
        <SortByField>
          <select value={sortOption} onChange={sortBy}>
            <option value="">Sort By</option>
            <option value="asc">Ascending</option>
            <option value="desc">Desceding</option>
          </select>
        </SortByField>

        {showAddPlayer && (
          <form onSubmit={addPlayer}>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.profile.firstName}
              onChange={handleChange}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.profile.lastName}
              onChange={handleChange}
            />
            <select
              name="position"
              value={formData.profile.position}
              onChange={handleChange}
            >
              <option value="PG">PG</option>
              <option value="SG">SG</option>
              <option value="SF">SF</option>
              <option value="PF">PF</option>
              <option value="C">C</option>
            </select>
            <select
              name="gender"
              value={formData.profile.gender}
              onChange={handleChange}
            >
              <option value="M">Male</option>
              <option value="F">Female</option>
            </select>
            <input
              type="number"
              name="weight"
              placeholder="Weight"
              value={formData.profile.weight}
              onChange={handleChange}
            />
            <select
              name="sportId"
              defaultValue={formData.sportId}
              onChange={handleChange}
            >
              {sports.map((sport) => (
                <option key={sport.id} defaultValue={sport.id}>
                  {sport.label}
                </option>
              ))}
            </select>
            <button>Submit</button>
          </form>
        )}
      </SortRow>
      <PlayerGrid>
        {players.map((player: Player) => {
          return <PlayerCard key={player.id} player={player} />;
        })}
        <div onClick={() => setShowAddPlayer(true)}>Add Player</div>
      </PlayerGrid>
    </>
  );
}
