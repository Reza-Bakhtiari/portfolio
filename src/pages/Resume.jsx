import { useState, useEffect } from "react";
import { Card, CardContent } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

import {
  SettingsEthernetRounded,
  HomeRepairServiceRounded,
  SchoolRounded,
} from "@mui/icons-material";
import { Helmet } from "react-helmet-async";
import { CustomDivider } from "../components/common";
import { DevExpTimeline, DevEduTimeline } from "../components/pages";

import { devEdu } from "../constants/details";

const Resume = ({ helmetTitle }) => {
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
      }}
    >
      <Helmet>
        <title>{helmetTitle}</title>
      </Helmet>
      <CardContent>
        <CustomDivider
          bColor="primary.main"
          cColor="primary"
          icon={<SettingsEthernetRounded />}
          align="center"
          text="توسعه فرانت اند و مدرس برنامه نویسی "
        />
        <Grid container sx={{ mt: 4 }}>
          <Grid xs={6}>
            <CustomDivider
              bColor="warning.main"
              cColor="warning"
              icon={<HomeRepairServiceRounded />}
              align="center"
              text="تجربیات "
            />
            {/* exp */}
            <DevExpTimeline />
          </Grid>
          <Grid xs={6}>
            <CustomDivider
              bColor="info.main"
              cColor="info"
              icon={<SchoolRounded />}
              align="center"
              text="تحصیلات "
            />
            {/*dev edu */}
            <DevEduTimeline />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Resume;
