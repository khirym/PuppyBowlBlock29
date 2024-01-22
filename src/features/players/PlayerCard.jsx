import { Link } from "react-router-dom";

const PlayerCard = ({ player }) => {
  return (
    <div className="player-card">
      <Link to={`/players/${player.id}`}>
        <img className="player-image" src={player.imageUrl} />
        <div className="player-details">
          <h2> {player.name} </h2>
          <p> {player.breed} </p>
          <p> {player.status} </p>
        </div>
      </Link>

    </div>
  );
};

export default PlayerCard;
