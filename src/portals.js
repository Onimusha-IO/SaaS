import { Box, Typography } from "@mui/material";
import CakeIcon from "@mui/icons-material/Cake";
import FolderIcon from "@mui/icons-material/Folder";
import StarIcon from "@mui/icons-material/Star";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import FastForwardIcon from "@mui/icons-material/FastForward";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import InsightsIcon from "@mui/icons-material/Insights";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import SportsMartialArtsIcon from "@mui/icons-material/SportsMartialArts";
import PsychologyIcon from "@mui/icons-material/Psychology";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import CrisisAlertIcon from "@mui/icons-material/CrisisAlert";
import AltRouteIcon from "@mui/icons-material/AltRoute";
import ExtensionIcon from "@mui/icons-material/Extension";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import SportsIcon from "@mui/icons-material/Sports";

const Portals = () => {
  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
        Home
      </Typography>

      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
        Username (temp)
      </Typography>
      <Box sx={{ p: 1 }}>
        <Box sx={{ display: "flex" }}>
          <CakeIcon />
          <Typography variant="h6" sx={{ ml: 1 }}>
            Wishlist
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <FolderIcon />
          <Typography variant="h6" sx={{ ml: 1 }}>
            My Library
          </Typography>
        </Box>
      </Box>
      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
        New Releases
      </Typography>
      <Box sx={{ p: 1 }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <StarIcon />
          <Typography variant="h6" sx={{ ml: 1 }}>
            Last 30 Days
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <LocalFireDepartmentIcon />
          <Typography variant="h6" sx={{ ml: 1 }}>
            This Week
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <FastForwardIcon />
          <Typography variant="h6" sx={{ ml: 1 }}>
            Next Week
          </Typography>
        </Box>
      </Box>
      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
        Top
      </Typography>
      <Box sx={{ p: 1 }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <EmojiEventsIcon />
          <Typography variant="h6" sx={{ ml: 1 }}>
            Best of the year
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <InsightsIcon />
          <Typography variant="h6" sx={{ ml: 1 }}>
            Popular in 2022
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <MilitaryTechIcon />
          <Typography variant="h6" sx={{ ml: 1 }}>
            All time top 10
          </Typography>
        </Box>
      </Box>
      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
        All Games
      </Typography>
      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
        Browse
      </Typography>
      <Box sx={{ p: 1 }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <SportsEsportsIcon />
          <Typography variant="h6" sx={{ ml: 1 }}>
            Platforms
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <LocalMallIcon />
          <Typography variant="h6" sx={{ ml: 1 }}>
            Stores
          </Typography>
        </Box>
      </Box>
      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
        Genres
      </Typography>
      <Box sx={{ p: 1 }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <SportsMartialArtsIcon />
          <Typography variant="h6" sx={{ ml: 1 }}>
            Action
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <PsychologyIcon />
          <Typography variant="h6" sx={{ ml: 1 }}>
            Strategy
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <AutoFixHighIcon />
          <Typography variant="h6" sx={{ ml: 1 }}>
            RPG
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <CrisisAlertIcon />
          <Typography variant="h6" sx={{ ml: 1 }}>
            Shooter
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <AltRouteIcon />
          <Typography variant="h6" sx={{ ml: 1 }}>
            Adventure
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <ExtensionIcon />
          <Typography variant="h6" sx={{ ml: 1 }}>
            Puzzle
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <DirectionsCarIcon />
          <Typography variant="h6" sx={{ ml: 1 }}>
            Racing
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <SportsIcon />
          <Typography variant="h6" sx={{ ml: 1 }}>
            Sports
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Portals;
