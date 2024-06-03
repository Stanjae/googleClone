import { Box, Grid } from "@mui/material"
import NewsCard from "../Components/NewsCard"
import { useContext } from "react"
import { HapiCreateContext } from "../Context/ApiContext"


const News = () => {
  const {data} = useContext(HapiCreateContext)
  return (
    <Box>
    <Grid columns={12} container>
      <Grid xs={0} md={2} item></Grid>
      <Grid xs={12} md={7} item>
      {data && data?.top_stories?.map((item,index)=>(
            <NewsCard item={item} key={index}/>
      ))}
        
        
      </Grid>
      <Grid xs={0} md={3} item></Grid>
    </Grid>
  </Box>
  )
}

export default News