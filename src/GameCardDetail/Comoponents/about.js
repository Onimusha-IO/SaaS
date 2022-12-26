import { Grid, Link, Typography } from "@mui/material";

const About = ({ data }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          About
        </Typography>
        <Typography variant="body1">{data.description_raw}</Typography>
      </Grid>
      <Grid item xs={8}>
        <Typography variant="body1">Platforms</Typography>
        <Typography variant="body2">
          {data.platforms
            .map((e) => {
              return e.platform.name;
            })
            .toString()
            .replaceAll(",", ", ")}
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="body1">Metascore</Typography>
        <Typography variant="body2">{data.metacritic}</Typography>
      </Grid>
      <Grid item xs={8}>
        <Typography variant="body1" sx={{ mt: 2 }}>
          Genres
        </Typography>
        <Typography variant="body2">
          {data.genres
            .map((e) => {
              return e.name;
            })
            .toString()
            .replaceAll(",", ", ")}
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="body1" sx={{ mt: 2 }}>
          Release date
        </Typography>
        <Typography variant="body2">{data.released}</Typography>
      </Grid>
      <Grid item xs={8}>
        <Typography variant="body1" sx={{ mt: 2 }}>
          Developers
        </Typography>
        <Typography variant="body2">
          {data.developers
            .map((e) => {
              return e.name;
            })
            .toString()
            .replaceAll(",", ", ")}
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="body1" sx={{ mt: 2 }}>
          Publishers
        </Typography>
        <Typography variant="body2">
          {data.publishers
            .map((e) => {
              return e.name;
            })
            .toString()
            .replaceAll(",", ", ")}
        </Typography>
      </Grid>
      <Grid item xs={8}>
        <Typography variant="body1" sx={{ mt: 2 }}>
          ESRB Rated
        </Typography>
        <Typography variant="body2">{data.esrb_rating.name}</Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="body1" sx={{ mt: 2 }}>
          Website
        </Typography>
        <Link href={data.website} variant="body2">
          {data.website}
        </Link>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1" sx={{ mt: 2 }}>
          Tags
        </Typography>
        <Typography variant="body2">
          {data.tags
            .map((e) => {
              return e.name;
            })
            .toString()
            .replaceAll(",", ", ")}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default About;
