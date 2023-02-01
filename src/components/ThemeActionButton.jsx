import { useContext } from "react";

import { Fab, Box } from "@mui/material";
import { NightlightOutlined, WbSunnyOutlined } from "@mui/icons-material";
import MainContext from "../context/index";
import { red } from "@mui/material/colors";
import { useTheme } from "@mui/material/styles";

const ThemeActionButton = () => {
  const theme = useTheme();
  const { handleThemeChange } = useContext(MainContext);

  return (
    <Box
      sx={{
        position: "absolute",
        display: {
          xs: "none",
          md: "block",
        },
        top: 10,
        left: 10,
      }}
    >
      <Fab
        aria-label="ThemeChanger"
        variant="extended"
        size="small"
        color="secondary"
        sx={{ m: 2, backgroundColor: red[500] }}
        onClick={handleThemeChange}
      >
        {theme.palette.mode === "dark" ? (
          <WbSunnyOutlined sx={{ mr: 1 }} />
        ) : (
          <NightlightOutlined sx={{ mr: 1 }} />
        )}
        {theme.palette.mode === "dark" ? "تم روز" : "تم شب"}
      </Fab>
    </Box>
  );
};

export default ThemeActionButton;
