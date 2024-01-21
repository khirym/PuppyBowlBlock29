import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Nav from "./Nav";
import NewPlayer from "./NewPlayer";
import PlayerPage from "./PlayerPage";
import Players from "./features/players/Players";
import Footer from "./Footer";
import { useState, useEffect } from "react";

function App() {
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  
  return (
    <>
      <div id="container">
        <Header title={"Welcome to the Puppy Bowl Event!"}/>
        <Nav search={search} setSearch={setSearch}/>
      </div>
        <Routes>
          <Route path="/" element={<Players />} />
          <Route path="/playerspage" element={<PlayerPage />} />
          <Route path="/newplayer" element={<NewPlayer />} />
        </Routes>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
