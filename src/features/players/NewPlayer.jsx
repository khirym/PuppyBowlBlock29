const NewPlayer = ({handleSubmit, playerName, setPlayerName, playerBreed, setPlayerBreed}) => {
  
  return (
    <main>
      <h2>New Player</h2>
      <form className="newPlayerForm" onSubmit={handleSubmit}>
        <label htmlFor="playerName">Player Name:</label>
        <input
          id="playerName"
          type="text"
          required
          name="name"
          placeholder="Player Name"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
        />
        <br />
        <label htmlFor="playerBreed">Player Breed:</label>
        <input
          id="playerBreed"
          required
          type="text"
          name="playerBreed"
          placeholder="Player Breed"
          value={playerBreed}
          onChange={(e) => setPlayerBreed(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default NewPlayer;
