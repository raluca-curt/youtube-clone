import { Stack, Box, Typography } from "@mui/material";

import SideBar from "./SideBar";

const Feed = () => (
  <Stack direction={{ xs: 'column', md: 'row' }}>
    <Box
      sx={{
        height: { xs: 'auto', md: '92vh' },
        borderRight: '1px solid #3d3d3d',
        px: { xs: 0, md: 2}
      }}
    >

      {/* Sidebar */}
      <SideBar />

      {/* Copyright */}
      <Typography className="copyright" variant="body2" sx={{ color: '#fff', mt: 1.5 }}>
        Copyright @raluca-curt
      </Typography>
      </Box>
  </Stack>
)

export default Feed