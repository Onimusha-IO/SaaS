import {
  Box,
  Button,
  InputAdornment,
  InputBase,
  Link,
  Typography,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: "flex", height: 45, justifyContent: "space-between" }}>
      <Typography variant="h5" sx={{ fontWeight: "bold", alignSelf: "center" }}>
        <Link href="/" underline="none">
          {" "}
          E-Games{" "}
        </Link>
      </Typography>
      <Paper
        sx={{
          ml: 2,
          borderRadius: 6,
          display: "flex",
          alignContent: "center",
          width: "35%",
        }}
      >
        <InputBase
          sx={{
            ml: 1,
            pl: 2,
            pr: 4,
          }}
          placeholder="Search games"
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
          fullWidth={true}
        />
      </Paper>
      <Box>
        <Button
          variant="text"
          startIcon={<ShoppingCartIcon />}
          size="large"
          sx={{ color: "black" }}
          onClick={() => {
            navigate("/Cart");
          }}
        ></Button>
      </Box>
    </Box>
  );
};

export default Nav;
