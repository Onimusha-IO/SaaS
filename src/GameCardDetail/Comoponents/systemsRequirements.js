import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { nanoid } from "nanoid";

import parse from "html-react-parser";

const SystemRequirements = ({ platforms }) => {
  return (
    <Box>
      {platforms.map((e) => {
        const key = nanoid();
        if (
          e.platform.name === "PC" &&
          Object.keys(e.requirements).length !== 0
        ) {
          return (
            <Box key={key}>
              <Typography variant="h6" sx={{ mt: 2 }}>
                System requirements for {e.platform.name}
              </Typography>
              {e.requirements.minimum ? (
                <Typography variant="body2" sx={{ mt: 1 }}>
                  {parse(e.requirements.minimum.replaceAll("\n", "<br>"))}
                </Typography>
              ) : null}
              {e.requirements.recommended ? (
                <Typography variant="body2" sx={{ mt: 1 }}>
                  {parse(e.requirements.recommended.replaceAll("\n", "<br>"))}
                </Typography>
              ) : null}
            </Box>
          );
        } else if (
          e.platform.name === "Linux" &&
          Object.keys(e.requirements).length !== 0
        ) {
          return (
            <Box key={key}>
              <Typography variant="h6" sx={{ mt: 2 }}>
                System requirements for {e.platform.name}
              </Typography>
              {e.requirements.minimum ? (
                <Typography variant="body2" sx={{ mt: 1 }}>
                  {parse(e.requirements.minimum.replaceAll("\n", "<br>"))}
                </Typography>
              ) : null}
              {e.requirements.recommended ? (
                <Typography variant="body2" sx={{ mt: 1 }}>
                  {parse(e.requirements.recommended.replaceAll("\n", "<br>"))}
                </Typography>
              ) : null}
            </Box>
          );
        } else if (
          e.platform.name === "macOS" &&
          Object.keys(e.requirements).length !== 0
        ) {
          return (
            <Box key={key}>
              <Typography variant="h6" sx={{ mt: 2 }}>
                System requirements for {e.platform.name}
              </Typography>
              {e.requirements.minimum ? (
                <Typography variant="body2" sx={{ mt: 1 }}>
                  {parse(e.requirements.minimum.replaceAll("\n", "<br>"))}
                </Typography>
              ) : null}
              {e.requirements.recommended ? (
                <Typography variant="body2" sx={{ mt: 1 }}>
                  {parse(e.requirements.recommended.replaceAll("\n", "<br>"))}
                </Typography>
              ) : null}
            </Box>
          );
        }
        return null;
      })}
    </Box>
  );
};

export default SystemRequirements;
