import { useContext } from "react";

import { Tabs, Tab } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useTheme } from "@mui/material/styles";
import MainContext from "../../context";
import { tabs } from "../../constants/tabsData";

const SidebarTabs = () => {
  const theme = useTheme();

  const { pageNumber, handlePageNumber, setDrawerOpen } =
    useContext(MainContext);

  // const data = tabsData();

  return (
    <Tabs
      orientation="vertical"
      variant="scrollable"
      scrollbutton="auto"
      allowScrollButtonsMobile
      value={pageNumber}
      onChange={handlePageNumber}
      textColor="primary"
      indicatorColor="primary"
    >
      {tabs.map((tab, index) => (
        <Tab
          key={index}
          label={tab.label}
          icon={tab.icon}
          iconPosition="start"
          sx={{
            backgroundColor:
              theme.palette.mode === "dark" ? grey[800] : grey[500],
            borderRadius: 2,
            color: "text.primary",
            my: 0.5,
            mx: 1,
            "&.MuiTab-root": {
              minHeight: 50,
            },
          }}
          onClick={() => setDrawerOpen(false)}
          {...tab}
        />
      ))}
    </Tabs>
  );
};

export default SidebarTabs;
