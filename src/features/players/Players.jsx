import React from "react";
import PlayerCard from "./PlayerCard";
import { useFetchPlayersQuery } from "../../api/puppyBowlApi";
import "../../../src/index.css";

const Players = () => {
  const { data, isError, isLoading } = useFetchPlayersQuery();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>An error occured.</p>;
  }

  console.log("Data:", data.data);
  const {data: {players}} = data

  return (
    <div className="players">
      {players.map(player => (
          <PlayerCard key={player.id} player={player} />
        ))}
    </div>
  );
};

export default Players;