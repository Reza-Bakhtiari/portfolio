import { Box, Typography } from "@mui/material";
import React from "react";

const Page = (props) => {
  const { children, pageNumber, index, ...others } = props;

  return (
    <div
      role="tabpanel"
      hidden={pageNumber != index}
      id={`rabpanel-${index}`}
      aria-labelledby={`sidebar-tab-${index}`}
      {...others}
    >
      {pageNumber === index && (
        <Box sx={{ height: "100vh", overflow: "hidden" }}>{children}</Box>
      )}
    </div>
  );
};

export default Page;
