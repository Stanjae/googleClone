import { Box, Grid } from "@mui/material"
import VideoCard from "../Components/VideoCard"
import { useContext } from "react"
import { HapiCreateContext } from "../Context/ApiContext"


const VideoPage = () => {
  const {data} = useContext(HapiCreateContext)
  return (
    <Box>
      <Grid columns={12} container>
        <Grid xs={0} md={2} item></Grid>
        <Grid xs={12} md={7} item>
        {data && data?.inline_videos?.map((video, index)=>(
           <VideoCard key={index} video={video}/>
        ))}
         
          
        </Grid>
        <Grid xs={0} md={3} item></Grid>
      </Grid>
    </Box>
  )
}

export default VideoPage