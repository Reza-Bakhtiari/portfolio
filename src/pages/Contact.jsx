import { useState, useEffect } from "react";

import { Typography, Card, CardContent, Slide } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

import { CustomDivider } from "../components/common";
import { ContactForm } from "../components/pages/index";

import worldMap from "../assets/map.svg";

import { AccountCircleRounded, Subject } from "@mui/icons-material";
import { Helmet } from "react-helmet-async";
import { courses } from "../constants/courses";

const Contact = ({ helmetTitle }) => {
  const [loading, setLoadings] = useState(false);

  useEffect(() => {
    setLoadings(true);

    return () => {
      setLoadings(false);
    };
  }, []);

  return (
    <Card
      sx={{
        backgroundColor: "whitesmoke",
        height: "100vh",
        overflowY: "scroll",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Helmet>
        <title>{helmetTitle}</title>
      </Helmet>
      <CardContent>
        <CustomDivider
          bColor="primary.main"
          cColor="primary"
          icon={<AccountCircleRounded />}
          align="center"
          text="ارتباط با من"
        />

        <Grid container sx={{ mt: 5 }}>
          <Slide
            direction="down"
            in={loading}
            style={{ transitionDelay: loading ? "200ms" : "0ms" }}
          >
            <Grid xs={12} sm={12} md={8}>
              <Card sx={{ justifyContent: "center", alignItems: "center" }}>
                {/* contact form */}
                <ContactForm />
              </Card>
            </Grid>
          </Slide>
          <Slide
            direction="down"
            in={loading}
            style={{ transitionDelay: loading ? "200ms" : "0ms" }}
          >
            <Grid
              xs={0}
              sm={0}
              md={4}
              sx={{
                textAlign: "center",
                backgroundImage: `url(${worldMap})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <Typography
                variant="h6"
                color="black"
                sx={{
                  fontFamily: "vazir",
                  mt: 4,
                  display: {
                    xs: "none",
                    sm: "none",
                    md: "block",
                  },
                }}
              >
                بیاید درمورد همه چیز باهم صحبت کنیم
              </Typography>
              <Typography
                variant="body1"
                color="black"
                sx={{
                  mt: 2,
                  display: {
                    xs: "none",
                    sm: "none",
                    md: "block",
                  },
                }}
              >
                <a href="#" alt="email" style={{ color: "primary" }}>
                  {" "}
                  ایمیل{" "}
                </a>
                بزن به من
              </Typography>
            </Grid>
          </Slide>
        </Grid>
      </CardContent>
    </Card>
  );
};
export default Contact;
