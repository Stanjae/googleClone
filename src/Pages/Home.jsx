import { Box, Button, Container, Divider, IconButton, InputBase, Paper, Stack, Typography, styled } from "@mui/material"
import Logo from '../assets/ward.png'
import { Brightness4, Brightness7, CameraEnhance, MicRounded, Search } from "@mui/icons-material"
import { useTheme } from "@emotion/react"
import React, { useContext, useState } from "react"
import { ColorModeContext } from "../App"
import { Link, Form, useNavigate } from "react-router-dom"
import HFooter from "../Components/HFooter"
import axios from "axios";
import { HapiCreateContext } from "../Context/ApiContext"
import CircularProgress from '@mui/material/CircularProgress';
import CustomAlerts from "../Components/CustomAlerts"


const CusPaper = styled(Paper)(({theme})=>({
  display:'flex',
  alignItems: "center",
  borderRadius:"20px",
  borderWidth:'1px',
  borderColor:theme.palette.primary,

  '& .hover':{
      'backgroundColor':theme.palette.success,
  }
})
)

const Home = () => {
  const theme = useTheme();
  const {toggleColorMode} = useContext(ColorModeContext);
  const navigate = useNavigate()

  const {setData} = useContext(HapiCreateContext)
  const [loading, setLoading] = useState(false)

  const [message, setMessage] = useState({type:'', text:''})


  const [messageStatus, setMessageStatus] = useState(false);

  const handleClick = () => {
    setMessageStatus(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setMessageStatus(false);
  };

  const handleSubmit=async(e)=>{
    e.preventDefault();
    setLoading(true)
    const query  = e.target[1].value
    if(query ===''){
      setMessage({text:'Please enter something', type:'error'})
      handleClick()
      setLoading(false)
      return
    }
    try{
      //const response = await axios.get(`http://localhost:3000/api/search?q=${query}`);
      const response = await axios.get(`https://miniature-erinn-stanity-tech-cd901ded.koyeb.app/api/search?q=${query}`);
      /* if(response.status!==200){
        console.log(response)
      } */
      setData(response.data)
      setLoading(false)
      navigate(`/search/q=${query}/s`)
    }catch(error){
      setMessage({text:error.response.data.error, type:'error'})
      handleClick()
      setLoading(false)
    }
  }
  return (
    <Box
      sx={{
        height: "100dvh",
        position: "relative",
        overflow:'hidden'
      }}
    >
     <IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
      </IconButton>
      <Container sx={{height:{xs:'80%'}}} maxWidth="sm">
        <Box >
          <Stack
            direction={"row"}
            justifyContent={"center"}
            alignItems={"center"}
            my={1}
            gap={0}
          >
            <img src={Logo} alt="logo" width={"100px"} height={"100px"} />
            <Typography
              variant="h1"
              sx={{ fontWeight: "bold", fontSize: {md:"6rem", xs:'4rem'} }}
            >
              Gogle
            </Typography>
          </Stack>

        <Form onSubmit={handleSubmit} role="search">
          <CusPaper
            sx={{
              p: "2px 4px",
              my:'26px'
            }}
          >
            <IconButton sx={{ p: "10px" }} aria-label="menu">
            <Search />
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search Gogle"
              type="search"
              name="q"
              inputProps={{ "aria-label": "search google" }}
            />
           { loading && <GradientCircularProgress/>}
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <MicRounded/>
            </IconButton>
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton
              color="primary"
              sx={{ p: "10px" }}
              aria-label="directions"
            >
              <CameraEnhance sx={{color:'#4285F4'}}/>
            </IconButton>
          </CusPaper>
          </Form>

          <Stack direction={'row'} my={2} py={2} gap={'12px'} justifyContent={'center'}>
            <Button onClick={handleSubmit} size='small' variant="contained">Gogle Search</Button>
            <Button size='small' variant="contained">I&apos;m Feeling Lucky</Button>
          </Stack>
          <Stack direction={'row'} justifyContent={'center'} gap={1} my={2}>
            <Typography variant="body2">Gogle offered Languages in:</Typography>
            <Typography color={'text.secondary'} variant="body2" component={Link}>Igbo</Typography>
            <Typography color={'text.secondary'} variant="body2" component={Link}>Yoruba</Typography>
            <Typography color={'text.secondary'} variant="body2" component={Link}>Nigerian Pidgin</Typography>
          </Stack>
        </Box>
      </Container>
      <CustomAlerts open={messageStatus} handleClose={handleClose} message={message} />
      <HFooter/>
    </Box>
  );
}

export default Home


function GradientCircularProgress() {
  return (
    <React.Fragment>
      <svg width={0} height={0}>
        <defs>
          <linearGradient id="my_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#e01cd5" />
            <stop offset="100%" stopColor="#1CB5E0" />
          </linearGradient>
        </defs>
      </svg>
      <CircularProgress sx={{ 'svg circle': { stroke: 'url(#my_gradient)' } }} />
    </React.Fragment>
  );
}