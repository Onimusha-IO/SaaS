import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const Creators = ({ slug, RAWKey }) => {
  const [creators, setCreators] = useState();

  useEffect(() => {
    const getCreators = async () => {
      const res = await fetch(
        `https://api.rawg.io/api/games/${slug}/development-team?key=${RAWKey}`
      ).then((res) => res.json());
      setCreators(res.results);
    };

    getCreators();
  }, [slug, RAWKey]);

  return (
    <>
      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
        Creators
      </Typography>
      {creators && (
        <Grid container spacing={2} sx={{pt: 2}}>
          {creators.map((e) => {
            return (
              <Grid item key={e.id}>
                <Card
                  sx={{
                    width: 300,
                    height: 450,
                    backgroundImage: `linear-gradient(
                        rgba(21, 21, 21, 0.65), 
                        rgba(21, 21, 21, 0.65)
                      ), url(${e.image_background})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPositionX: "center",
                    backgroundPositionY: "center",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <CardContent
                    sx={{
                      width: "100%",
                      height: "100%",
                      backdropFilter: "blur(2px)",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box>
                      {e.image && (
                        <Box
                          sx={{
                            width: 128,
                            height: 128,
                            borderRadius: "50%",
                            overflow: "hidden",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            marginLeft: "auto",
                            marginRight: "auto",
                          }}
                        >
                          <img
                            src={`${e.image}`}
                            alt={e.name}
                            style={{
                              maxHeight: "100%",
                            }}
                          />
                        </Box>
                      )}
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: "bold",
                          color: "white",
                          mt: 2,
                        }}
                      >
                        {e.name}
                      </Typography>

                      {e.positions.map((e) => {
                        return (
                          <Box key={e.id}>
                            <Typography variant="body2" color="white">
                              {e.name}
                            </Typography>
                          </Box>
                        );
                      })}

                      <Typography
                        variant="body1"
                        sx={{ fontWeight: "bold", mt: 2 }}
                        color="white"
                      >
                        Known for
                      </Typography>
                      {e.games.map((e) => {
                        return (
                          <Box key={e.id}>
                            <Typography variant="body2" color="white">
                              {e.name}
                            </Typography>
                          </Box>
                        );
                      })}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      )}
    </>
  );
};

export default Creators;
