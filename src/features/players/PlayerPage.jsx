import { useParams, Link } from "react-router-dom";
import "../../../src/index.css";

const PlayerPage = ({ players, handleDelete }) => {
  const { id } = useParams();
  const player = players.find(player => player.id === id);

  return (
    <main>
      <article className="player-details">
        {player && 
          <>
            <h2>{player.name}</h2>
            <p>Breed: {player.breed}</p>
            <p>Status: {player.status}</p>
            <p>Image URL: {player.imageUrl}</p>
            <button onClick={() => handleDelete(player.id)}>Delete Post</button>
          </>
        }
        {!player && (
          <>
            <h2>Post Not Found</h2>
            <p>Well, that's disappointing.</p>
            <p>
              <Link to="/">Visit Our Homepage</Link>
            </p>
          </>
        )}
      </article>
    </main>
  );
};

export default PlayerPage;
