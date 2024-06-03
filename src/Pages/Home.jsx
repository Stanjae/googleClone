import { Box, Button, Container, Divider, IconButton, InputBase, Paper, Stack, Typography, styled } from "@mui/material"
import Logo from '../assets/ward.png'
import { Brightness4, Brightness7, CameraEnhance, MicRounded, Search } from "@mui/icons-material"
import { useTheme } from "@emotion/react"
import { useContext } from "react"
import { ColorModeContext } from "../App"
import { Link, Form, useNavigate } from "react-router-dom"
import HFooter from "../Components/HFooter"
import axios from "axios";
import { HapiCreateContext } from "../Context/ApiContext"


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

  const handleSubmit=async(e)=>{
    e.preventDefault();
    const query  = e.target[1].value
    if(query ===''){
      console.log('Please enter something');
      return
    }
    try{
      const response = await axios.get(`http://localhost:3000/api/search?q=${query}`);
      if(response.status!==200){
        console.log('An error may occur');
        return
      }
      setData(response.data)
      navigate(`/search/q=${query}/s`)
    }catch(error){
      console.log(error);
    }
  }
  return (
    <Box
      sx={{
        height: "100dvh",
        position: "relative"
      }}
    >
     <IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
      </IconButton>
      <Container sx={{height:'80%'}} maxWidth="sm">
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
              sx={{ fontWeight: "bold", fontSize: "6rem" }}
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
            <Button size='small' variant="contained">Gogle Search</Button>
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
      <HFooter/>
    </Box>
  );
}

export default Home