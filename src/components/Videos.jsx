import { Stack, Box } from "@mui/material";
import { ChannelCard, VideoCard } from "./";

const Videos = ({ videos, justifyContent }) => {
  
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent={justifyContent} gap={2}>

      {videos.map((item, index) => (
        <Box key={index}>
          {/* Check type of item (ex: video or profile) */}
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos