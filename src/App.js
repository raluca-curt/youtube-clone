import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/system';

import { Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed } from './components';

const App = () => (
  
    <BrowserRouter>
        <Box sx={{backgroundColor: '#000'}}>
            <Navbar />
            <Routes>
                {/* Feed */}
                <Route path="/" exact element={<Feed />} />
                {/* Video page */}
                <Route path="/video/:id" exact element={<VideoDetail />} />
                {/* Channel page */}
                <Route path="/channel/:id" exact element={<ChannelDetail />} />
                {/* Search feed page */}
                <Route path="/search/:searchTerm" exact element={<SearchFeed />} />
            </Routes>
        </Box>
    </BrowserRouter>
  
)

export default App