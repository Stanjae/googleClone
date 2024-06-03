import {Container, Grid } from "@mui/material"
import ImageCard from "../Components/ImageCard"
import { useContext } from "react"
import { HapiCreateContext } from "../Context/ApiContext"


const ImagePage = () => {
  const {data} = useContext(HapiCreateContext)
  return (
    <Container maxWidth={'xl'}>
      <Grid columns={6} spacing={3} container>
      {data && data?.inline_images?.map((image,index) => (
        <Grid key={index} item xs={3} md={2}><ImageCard image={image}/></Grid>
      ))}
        
      </Grid>
    </Container>
  )
}

export default ImagePage