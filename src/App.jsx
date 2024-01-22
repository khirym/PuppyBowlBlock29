import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./Nav";
import NewPlayer from "./features/players/NewPlayer";
import PlayerPage from "./features/players/PlayerPage";
import Players from "./features/players/Players";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";

function App () {
  const [players, setPlayers ] = useState([])
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleDelete = (id) => {
    const playersList = players.filter(player => player.id !== id);
    setPlayers(playersList);
  }

  return (
    <>
      <div id="container">
        <Header title="Welcome to the Puppy Bowl Event!"/>
        <Nav search={search} setSearch={setSearch}/>
      </div>
        <Routes>
          <Route path="/" element={<Players />} /> 
          <Route path="/players/:id" element={<PlayerPage players={players} handleDelete={handleDelete}/>} />
          <Route path="/newplayer" element={<NewPlayer />} />
        </Routes>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
