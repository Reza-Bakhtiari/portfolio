import { useState, useEffect } from "react";

import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

import "../App.css";

import MainLayout from "../layouts/MainLayout";
import { Sidebar } from "../components/sidebar";
import { DrawerActionButton } from "../components/drawer/index";
import PagesContainer from "./PagesContainer";
import { Page } from "../components/pages/index";
import SidebarContainer from "./SidebarContainer";
import MainContext from "../context";
import SwipeableViews from "react-swipeable-views";

import { Home, About, Resume, Courses, Comments, Contact } from "../pages";

function App() {
  const [pageNumber, setPageNumber] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mode, setMode] = useState();

  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme:dark)");

  useEffect(() => {
    setMode(prefersDarkMode ? "dark" : "light");
  }, []);

  useEffect(() => {
    if (isMdUp) {
      setDrawerOpen(false);
    }
  }, [isMdUp]);

  const handlePageNumber = (event, newpageNumber) => {
    setPageNumber(newpageNumber);
  };

  const handlePageChange = (index) => {
    setPageNumber(index);
  };

  const handleThemeChange = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <MainContext.Provider
      value={{
        pageNumber,
        handlePageNumber,
        drawerOpen,
        setDrawerOpen,
        handleThemeChange,
      }}
    >
      <MainLayout mode={mode}>
        <SidebarContainer>
          <Sidebar />
          <DrawerActionButton />
        </SidebarContainer>
        <PagesContainer>
          <SwipeableViews
            axis="x"
            index={pageNumber}
            onChangeIndex={handlePageChange}
          >
            <Page pageNumber={pageNumber} index={0}>
              <Home />
            </Page>
            <Page pageNumber={pageNumber} index={1}>
              <About />
            </Page>
            <Page pageNumber={pageNumber} index={2}>
              <Resume helmetTitle="رزومه من" />
            </Page>
            <Page pageNumber={pageNumber} index={3}>
              <Courses helmetTitle="دوره های من" />
            </Page>
            <Page pageNumber={pageNumber} index={4}>
              <Comments helmetTitle="نظرات دانشجویان" />
            </Page>
            <Page pageNumber={pageNumber} index={5}>
              <Contact helmetTitle="ارتباط با من" />
            </Page>
          </SwipeableViews>
        </PagesContainer>
      </MainLayout>
    </MainContext.Provider>
  );
}

export default App;
