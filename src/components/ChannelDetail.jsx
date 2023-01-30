import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChannelCard, SideBar } from './';
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    // Get channel details
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data) => setChannelDetail(data?.items[0]));

    // Get channel videos
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => setVideos(data?.items));
  }, [id])

  // console.log(channelDetail, videos)
  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{ background: 'linear-gradient(90deg, #FC466B 0%, #3F5EFB 100%)', zIndex: 10, height: '300px' }} />

        <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
      </Box>

      <Box sx={{ mx: '20px'}}>
        <Videos videos={videos} justifyContent="center" />
      </Box>
    </Box>
  )
}

export default ChannelDetail