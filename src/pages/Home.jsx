import { useEffect, useRef, useCallback, useState } from "react";

import { Helmet } from "react-helmet-async";

// import { blue } from "@mui/material/colors";
import { Box, Typography } from "@mui/material";

import { csparticles, csparticles2 } from "../constants/particles";

import TextTransition, { presets } from "react-text-transition";

import Typed from "typed.js";

import BG from "../assets/bg-min.png";

import Particles from "react-particles";
import { loadFull } from "tsparticles";

const Home = () => {
  const [index, setIndex] = useState(0);

  const nameEl = useRef(null);

  const strings = [
    "   برنامه نویس فرانت اند ",
    " فریلنسر ",
    "  تولید کننده محتوا در زمینه برنامه نویسی ",
    // " [ [  برنامه نویس فرانت اند  ] ]",
    // "[ [ فریلنسر ] ] ",
    // " [ [ تولید کننده محتوا در زمینه برنامه نویسی  ] ]",
  ];

  useEffect(() => {
    const typedName = new Typed(nameEl.current, {
      strings: ["رضا بختیاری"],
      typeSpeed: "7",
      backSpeed: "20",
      backDelay: "10",
      showCursor: false,
    });

    const stringsTransition = setInterval(() => {
      setIndex((index) => index + 1);
    }, 3000);

    return () => {
      typedName.destroy();
      clearInterval(stringsTransition);
    };
  }, []);

  const particlesInint = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <>
      <Helmet>
        <title>رضا بختیاری | صفحه اصلی</title>
      </Helmet>
      <Box
        sx={{
          // backgroundColor: "primary",
          backgroundImage: `url(${BG})`,
          backgroundPosition: "center",
          height: "100vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Particles
          init={particlesInint}
          id="tsparticles"
          loaded={particlesLoaded}
          options={csparticles2}
        />
        <Typography
          color="primary.main"
          ref={nameEl}
          variant="h3"
          sx={{ mb: 2 }}
        ></Typography>
        <TextTransition springConfig={presets.wobbly}>
          <Typography color="primary" variant="h4">
            {strings[index % strings.length]}
          </Typography>
        </TextTransition>
      </Box>
    </>
  );
};

export default Home;
