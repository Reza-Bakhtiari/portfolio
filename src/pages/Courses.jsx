import { Card, CardContent } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { CustomDivider } from "../components/common";
import { SchoolRounded } from "@mui/icons-material";

import { Helmet } from "react-helmet-async";
import { ShowCourses } from "../components/pages/index";

const Courses = ({ helmetTitle }) => {
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
          icon={<SchoolRounded />}
          align="center"
          text="ارتباط با من"
        />

        <Grid container sx={{ mx: 3 }}>
          <ShowCourses />
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Courses;
