import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import GameCard from "./gameCard";

import { nanoid } from "nanoid";

const key = "5b006bc1923645c6a0d3c7665b7ed768";

const Content = () => {
  const [games, setGames] = useState([]);

  const gameData = async () => {
    const res = await fetch(`https://api.rawg.io/api/games?key=${key}`).then(
      (res) => res.json()
    );
    console.log("res :>> ", res.results);
    setGames(res.results);
  };

  useEffect(() => {
    gameData();
  }, []);
  return (
    <Grid container spacing={2}>
      {games.map((e, i) => {
        const key = nanoid();
        return (
          <Grid item xs={3} key={key}>
            <GameCard id={e.id} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Content;
