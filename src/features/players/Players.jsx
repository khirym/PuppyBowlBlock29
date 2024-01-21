import React from "react";
import { useFetchPlayersQuery } from "../../api/puppyBowlApi";
import "../../../src/index.css";

const Players = () => {
  console.log(useFetchPlayersQuery())
  const { data, isError, isLoading } = useFetchPlayersQuery();
  console.log("Error:", isError);
  console.log("Loading:", isLoading);

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
      {players.map((player) => (
          <div key={player.id} className="player-card">

            <div className="player-details">
            <img className="player-image" src={player.imageUrl} />
              <h2> {player.name} </h2>
              <p> {player.breed} </p>

              <p> {player.status} </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Players;