import React from "react";
import { Box, IconButton } from "@mui/material";
import { GitHub, Telegram, Instagram, LinkedIn } from "@mui/icons-material";

const SocialMediaIcons = () => {
  return (
    <Box
      component="div"
      sx={{
        m: "0 auto",
        textAlign: "center",
        w: 1,
      }}
    >
      <IconButton aria-label="Github">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferer"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <GitHub sx={{ color: "grey" }} />
        </a>
      </IconButton>
      <IconButton aria-label="Github">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferer"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Telegram sx={{ color: "#1e8eff" }} />
        </a>
      </IconButton>
      <IconButton aria-label="Github">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferer"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Instagram sx={{ color: "#d53f8c" }} />
        </a>
      </IconButton>
      <IconButton aria-label="Github">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferer"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <LinkedIn sx={{ color: "#0063c3" }} />
        </a>
      </IconButton>
    </Box>
  );
};

export default SocialMediaIcons;
