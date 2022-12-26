import { Box, Grid } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Content from "./content";
import GameCardDetail from "./GameCardDetail/gameCardDetail";
import Nav from "./nav";
import Portals from "./portals";

function App() {
  return (
    <Router>
      <Box sx={{ mt: 2, ml: 5, mr: 5, mb: 5 }}>
        <Nav />
        <Grid container spacing={2} sx={{ mt: 5 }}>
          <Grid item xs={2}>
            <Portals />
          </Grid>
          <Grid item xs={10}>
            <Routes>
              <Route path="/" element={<Content />} />
              <Route path="/game_detail" element={<GameCardDetail />} />
            </Routes>
          </Grid>
        </Grid>
      </Box>
    </Router>
  );
}

export default App;
