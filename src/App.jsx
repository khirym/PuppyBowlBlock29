import Layout from "./components/Layout";
import Players from "./features/players/Players";
import NewPlayer from "./features/players/NewPlayer";
import PlayerPage from "./features/players/PlayerPage";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {

  const [players, setPlayers] = useState([]);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [playerName, setPlayerName] = useState("");
  const [playerBreed, setPlayerBreed] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const filteredResults = players.filter(
      (player) =>
        player.name.toLowerCase().includes(search.toLowerCase()) ||
        player.breed.toLowerCase().includes(search.toLowerCase())
    );

    setSearchResults(filteredResults.reverse());
  }, [players, search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = players.length ? players[players.length - 1].id + 1 : 1;
    const newPlayer = { id, name: playerName, breed: playerBreed };
    const allPlayers = [...players, newPlayer];
    setPlayers(allPlayers);
    setPlayerName("");
    setPlayerBreed("");
    navigate("/");
  };

  const handleDelete = (id) => {
    const playersList = players.filter((player) => player.id !== id);
    setPlayers(playersList);
    navigate("/");
  };

  return (
    <Routes>
      <Route
        path="/"
        element={<Layout search={search} setSearch={setSearch} />}
      >
        <Route index element={<Players posts={searchResults} />} />
        <Route path="players">
          <Route
            index
            element={
              <NewPlayer
                handleSubmit={handleSubmit}
                playerName={playerName}
                setPlayerName={setPlayerName}
                playerBreed={playerBreed}
                setPlayerBreed={setPlayerBreed}
              />
            }
          />
          <Route
            path=":id"
            element={
              <PlayerPage players={players} handleDelete={handleDelete} />
            }
          />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
