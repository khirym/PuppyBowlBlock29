import React, { useState } from "react";
import "../../../src/index.css";

const NewPlayer = () => {
  const [playerData, setPlayerData] = useState({
    name: "",
    breed: "",
    imageUrl: "",
    status: "Bench",
  });

  const [createPlayer, { isLoading }] = useCreatePlayerMutation();

  const handleCreatePlayer = async () => {
    try {
      await createPlayer(playerData).unwrap();
      setPlayerData({
        name: "",
        breed: "",
        imageUrl: "",
        status: "Bench",
      });
    } catch (error) {
      console.error("Error creating player:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPlayerData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <h1>Create a New Player</h1>
      <form className="createPlayer" onSubmit={handleCreatePlayer}>
        <label htmlFor="name">Player Name:</label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Player Name"
          value={playerData.name}
          onChange={handleInputChange}
        />{" "}
        <br />
        <label htmlFor="breed">Player Breed:</label>
        <input
          id="breed"
          type="text"
          name="breed"
          placeholder="Player Breed"
          value={playerData.breed}
          onChange={handleInputChange}
        />{" "}
        <br />
        <label htmlFor="status">Status:</label>
        <select
          id="status"
          name="status"
          value={playerData.status}
          onChange={handleInputChange}
        >
          <option value="Bench">Bench</option>
          <option value="Field">Field</option>
        </select>{" "}
        <br />
        <label htmlFor="imageURL">Image URL:</label>
        <input
          id="imageURL"
          type="text"
          name="imageURL"
          placeholder="Image URL"
          value={playerData.imageURL}
          onChange={handleInputChange}
        />{" "}
        <br />
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Creating..." : "Create Player"}
        </button>
      </form>
    </div>
  );
};

export default NewPlayer;
