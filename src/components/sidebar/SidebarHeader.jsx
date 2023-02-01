import { useState } from "react";
import { Typography, Divider } from "@mui/material";
import ax from "../../assets/avatar.png";
import { RandomReveal } from "react-random-reveal";
import { alphabetPersian } from "../../constants/alphabetPersian";
import ThemeActionButton from "../ThemeActionButton";
import { CustomAvatar } from "../common/index";
import SocialMediaIcons from "../SocialMediaIcons";

const SidebarHeader = () => {
  const [start, setStart] = useState(false);
  return (
    <>
      <ThemeActionButton />
      <CustomAvatar size={200} avatar={ax}>
        RB
      </CustomAvatar>
      <Typography color="text.primary" variant="h6">
        <Typography variant="caption" color="primary">
          {"{{ "}
        </Typography>
        <RandomReveal
          isPlaying
          duration={3}
          characterSet={alphabetPersian}
          characters=" رضا بختیاری"
          onComplete={() => setStart(true)}
        />
        <Typography variant="caption" color="primary">
          {" }}"}
        </Typography>
      </Typography>
      {start && (
        <Typography
          color="text.primary"
          sx={{ textAlign: "center" }}
          variant="subtitle1"
        >
          <RandomReveal
            isPlaying
            duration={3}
            characterSet={alphabetPersian}
            characters="  برنامه نویس فرانت اند"
          />
        </Typography>
      )}
      {/* social media icons */}
      <SocialMediaIcons />

      <Divider variant="fullWidth" sx={{ mt: 2 }} />
    </>
  );
};

export default SidebarHeader;
