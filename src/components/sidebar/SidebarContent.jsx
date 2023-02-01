import { Box, Divider } from "@mui/material";

import { SidebarHeader, SidebarFooter, SidebarTabs } from "./index";

const SidebarContent = () => {
  // const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <Box sx={{ textAlign: "center", justifyContent: "center" }}>
      {/* Sidebar Header */}
      <SidebarHeader />

      {/* Sidebar Tabs */}
      <SidebarTabs />

      <Divider sx={{ mt: 2 }} />

      {/* Sidebar Footer */}
      <SidebarFooter />
    </Box>
  );
};

export default SidebarContent;
