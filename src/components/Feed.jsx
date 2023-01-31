import { useState, useEffect } from 'react';
import { Stack, Box, Typography } from "@mui/material";

import { SideBar, Videos } from "./";

import { fetchFromAPI } from "../utils/fetchFromAPI";

const Feed = () => {
  
  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
  }, [selectedCategory]);

  return (
    <Stack direction={{ xs: 'column', md: 'row' }}>
      <Box
        sx={{
          height: { xs: 'auto', md: '89vh' },
          borderRight: '1px solid #3d3d3d',
          px: { xs: 0, md: 2},
          position: 'sticky',
          top: '78px'
        }}
      >

        {/* Sidebar */}
        <SideBar 
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        {/* Copyright */}
        <Typography className="copyright" variant="body2" sx={{ color: '#fff', mt: 1.5, mr: 5, display: { xs: 'none', md: 'block' } }}>
          Copyright @raluca-curt
        </Typography>
      </Box>

      <Box p={2} sx={{ height: 'auto', flex: 2 }}>
        {/* Feed title */}
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: '#fff' }}>
          {selectedCategory} <span style={{ color: '#FC1503' }}>videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  )
}

export default Feed