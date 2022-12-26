import {
    Box,
    Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import plains from "./isThereAnyDeals/steamPlains.json";

import Platforms from "./GameCardDetail/Comoponents/platforms";

const RAWKey = "5b006bc1923645c6a0d3c7665b7ed768";
const DEALKey = "92d983d4a5dab5f49970d06fa07e9b5c43afeafe";

const GameCard = ({ id }) => {
  const [data, setData] = useState();
  const [price, setPrice] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    const getDesc = async () => {
      if (!data) {
        const res = await fetch(
          `https://api.rawg.io/api/games/${id}?key=${RAWKey}`
        );
        const game_info = await res.json();
        setData(game_info);
      }

      // gets price form isThereAnyDeal api
      if (!price && data) {
        console.log(
          "<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<object>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"
        );
        const name = data.slug.replaceAll("-", "");
        console.log("name formatted: ", name);
        const romans = ["", "i", "ii", "iii", "iv"];

        let plainFormatted = null;
        // replace numbers with i's on the string
        for (let i = 0; i < name.length; i++) {
          for (let j = 1; j < 5; j++) {
            if (parseInt(name.charAt(i)) === j) {
              if (plainFormatted) {
                plainFormatted = plainFormatted.replace(`${j}`, romans[j]);
              } else {
                plainFormatted = name.replace(`${j}`, romans[j]);
              }
              console.log("Yup! ", plainFormatted);
            }
          }
        }

        // if no number replaced assigns the slug replaced
        if (!plainFormatted) {
          plainFormatted = name;
        }

        switch (plainFormatted) {
          case "thewitcheriiiwildhunt":
            plainFormatted = "witcheriiiwildhunt";
            break;
          case "theelderscrollsvskyrim":
            plainFormatted = "elderscrollsvskyrimspecialedition";
            break;
          case "godofwarii":
            plainFormatted = "godofwar";
            break;
          default:
            break;
        }

        console.log("plain formatted: ", plainFormatted);
        // obtains all keys as an array
        const plainsKey = Object.keys(plains.data.steam);

        // obtains the key that matches the value of plainFormatted
        const match = plainsKey.find((e) => {
          return plains.data.steam[e] === plainFormatted;
        });
        console.log("match: ", match);

        const dealRes = await fetch(
          `https://api.isthereanydeal.com/v01/game/overview/?key=${DEALKey}&region=us&country=US&plains=&shop=steam&ids=${match}&allowed=steam`
        ).then((res) => res.json());
        console.log("deal res:>> ", dealRes);
        let _price = "";
        if (dealRes.data[match].price) {
          _price = dealRes.data[match].price.price_formatted;
        } else {
          _price = dealRes.data[match].lowest.price_formatted;
        }

        if (_price === "$0.00") {
          _price = "Free";
        }
        setPrice(_price);
      }
    };

    getDesc();
  }, [data, id, price]);
  return (
    <>
      {data && (
        <Card>
          <CardActionArea
            onClick={() => {
              localStorage.setItem("gameId", JSON.stringify(id));
              navigate("/game_detail");
            }}
          >
            <CardMedia
              component="img"
              alt="game image cover"
              height="150"
              image={data.background_image}
            />
            <CardContent>
              <Platforms platforms={data.platforms} />

              <Typography gutterBottom variant="h5" component="div">
                {data.name}
              </Typography>

              <Typography
                component="span"
                variant="body2"
                color="text.secondary"
                sx={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: "4",
                  WebkitBoxOrient: "vertical",
                }}
              ></Typography>
              <Typography variant="body2">
                Release Date: {data.released}
              </Typography>
              <Typography variant="body2">
                Genres:{" "}
                {data.genres
                  .map((e) => {
                    return e.name;
                  })
                  .toString()
                  .replaceAll(",", ", ")}
              </Typography>
              <Typography variant="body2">
                Publishers:{" "}
                {data.publishers
                  .map((e) => {
                    return e.name;
                  })
                  .toString()
                  .replaceAll(",", ", ")}
              </Typography>
              <Typography variant="body2">
                ESRB: {data.esrb_rating.name}
              </Typography>
              <Box sx={{display: "flex", justifyContent: "space-between"}}>
                  <Typography variant="h4">{price}</Typography>
                  <Button variant="contained" sx={{borderRadius: "25px", width: "150px"}}>{price === "Free" ? "Get" : "Buy"}</Button>
              </Box>
            </CardContent>
          </CardActionArea>
        </Card>
      )}
    </>
  );
};

export default GameCard;
