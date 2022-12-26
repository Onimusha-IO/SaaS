import { Box } from "@mui/system";
import {
  FaAndroid,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/fa";
import { SiNintendoswitch } from "react-icons/si";
import { MdPendingActions } from "react-icons/md";

import { nanoid } from "nanoid";

const Platforms = ({ platforms }) => {
  return (
    <Box
      variant="caption"
      sx={{ fontSize: 25, display: "flex", flexWrap: " wrap" }}
    >
      {[
        ...new Set(
          platforms.map((e) => {
            if (e.platform.name.includes("PlayStation")) {
              return "Play";
            }
            if (e.platform.name.includes("Xbox")) {
              return "Xbox";
            }

            return e.platform.name;
          })
        ),
      ].map((e, i) => {
        const key = nanoid();

        switch (e) {
          case "PC":
            return (
              <Box sx={{ mr: 2 }} key={key}>
                <FaWindows />
              </Box>
            );

          case "Xbox":
            return (
              <Box sx={{ mr: 2 }} key={key}>
                <FaXbox />
              </Box>
            );

          case "Play":
            return (
              <Box sx={{ mr: 2 }} key={key}>
                <FaPlaystation />
              </Box>
            );

          case "Linux":
            return (
              <Box sx={{ mr: 2 }} key={key}>
                <FaLinux />
              </Box>
            );
          case "macOS":
            return (
              <Box sx={{ mr: 2 }} key={key}>
                <FaApple />
              </Box>
            );

          case "Nintendo Switch":
            return (
              <Box sx={{ mr: 2 }} key={key}>
                <SiNintendoswitch />
              </Box>
            );

          case "Android":
            return (
              <Box sx={{ mr: 2 }} key={key}>
                <FaAndroid />
              </Box>
            );

          default:
            break;
        }
        return (
          <Box sx={{ mr: 2 }} key={key}>
            <MdPendingActions />
          </Box>
        );
      })}
    </Box>
  );
};

export default Platforms;
