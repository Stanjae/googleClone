import { Box, Button, Container, Typography } from "@mui/material"
import { useNavigate, useRouteError } from "react-router-dom"

//#B62D2D
const ErrorPage = () => {
  const navigate = useNavigate()
  const {message, statusText} = useRouteError()
  return (
          <main>
              <Container sx={{ display:'flex', alignItems:'center', px:{xs:'1rem', md:'2rem'}, mx:'auto', height:'100dvh'  }} className="max-w-screen-xl justify-start ">
                  <Box sx={{mx:'auto', textAlign:'center' }} className="max-w-lg space-y-3 ">
                      <Typography variant="h3" sx={{ fontWeight:600, color:'text.info'}}>404 Error</Typography>
                      <Typography gutterBottom variant="h2" sx={{ fontWeight:600, fontSize:{sm:'3rem', xs:'2.25rem' }, color:'text.primary'}}>Page not found</Typography>
                      <Typography gutterBottom variant="body1" color={'background.light'} className="text-gray-600">
                          {message || statusText}
                      </Typography>
                      <Box sx={{display:'flex', my:2, flexWrap:'wrap', alignItems:'center', justifyContent:'center', gap:'0.75rem'}}>
                          <Button color="info" sx={{color:'text.primary'}} onClick={()=> navigate(-1)} variant="contained">
                              Go back
                          </Button>
                          <Button color="info" variant="outlined">
                              Contact support
                          </Button>
                      </Box>
                  </Box>
              </Container>
          </main>
      )
  }

export default ErrorPage