import { Typography, Grid, Button } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import plains from "../isThereAnyDeals/steamPlains.json";
import Platforms from "./Comoponents/platforms";

import { nanoid } from "nanoid";
import About from "./Comoponents/about";
import SystemRequirements from "./Comoponents/systemsRequirements";
import Captures from "./Comoponents/captures";

import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import Creators from "./Comoponents/creators";

const RAWKey = "5b006bc1923645c6a0d3c7665b7ed768";
const DEALKey = "92d983d4a5dab5f49970d06fa07e9b5c43afeafe";

const GameCardDetail = () => {
  const [data, setData] = useState();
  const [price, setPrice] = useState();

  useEffect(() => {
    const getDesc = async () => {
      if (!data) {
        const res = await fetch(
          `https://api.rawg.io/api/games/${JSON.parse(
            localStorage.getItem("gameId")
          )}?key=${RAWKey}`
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
  }, [data, price]);
  return (
    <>
      {data && (
        <Grid container spacing={3}>
          <Grid item xs={7}>
            <Box sx={{ display: "flex" }}>
              <Typography sx={{ mr: 2, display: "flex", alignItems: "end" }}>
                {data.released}
              </Typography>
              <Platforms platforms={data.platforms} />
            </Box>
            <Typography variant="h2" sx={{ fontWeight: "bold" }}>
              {data.name}
            </Typography>

            <Box sx={{ display: "flex", mb: 1 }}>
              {data.ratings.map((e) => {
                const key = nanoid();
                return (
                  <Typography sx={{ pr: 2 }} key={key}>
                    {e.title} ({e.count})
                  </Typography>
                );
              })}
            </Box>

            <About data={data} />
            <SystemRequirements platforms={data.platforms} />
          </Grid>
          <Grid item xs={5}>
            <Captures slug={data.slug} />
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography variant="h3">{price}</Typography>
              </Grid>
              <Grid item xs={6} sx={{ display: "flex", justifyContent: "end" }}>
                <Button
                  variant="contained"
                  sx={{ borderRadius: 200, width: 250 }}
                >
                  {price === "Free" ? "Get now" : "Buy now"}
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h3" sx={{ color: "white" }}>
                  0
                </Typography>
              </Grid>
              <Grid item xs={6} sx={{ display: "flex", justifyContent: "end" }}>
                <Button
                  variant="contained"
                  sx={{ borderRadius: 200, width: 250 }}
                >
                  Add to cart
                  <ShoppingCartCheckoutIcon
                    sx={{ ml: 2 }}
                  ></ShoppingCartCheckoutIcon>
                </Button>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Creators slug={data.slug} RAWKey={RAWKey} />
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default GameCardDetail;
