import { Card, CardContent } from "@mui/material";
import { ForumRounded } from "@mui/icons-material";
import { Helmet } from "react-helmet-async";
import { CustomDivider } from "../components/common";
import { CommentsSlider } from "../components/pages";

const Comments = ({ helmetTitle }) => {
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
          bColor="secondary.main"
          cColor="secondary"
          icon={<ForumRounded />}
          align="center"
          text="نظرات دانشجویان"
        />
        {/* comments slider */}
        <CommentsSlider />
      </CardContent>
    </Card>
  );
};

export default Comments;
