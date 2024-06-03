/* eslint-disable react/prop-types */
import { Avatar, Box, Divider, Stack, Typography, Paper } from '@mui/material'
import { Link } from 'react-router-dom'


const AboutSection = ({info}) => {
  return (
    <Box sx={{}} >
        <Box py={'1rem'}>
            <Typography fontSize={'18px'} lineHeight={'24px'} mb={'19px'}>About</Typography>
            <Typography gutterBottom sx={{fontSize:'14px', lineHeight:'22.12px', color:'text.caption'}}>{info?.description}</Typography>

            <Typography gutterBottom sx={{fontSize:'14px', lineHeight:'22.12px', color:'text.caption', fontWeight:600}}>Born:  
                <Typography variant='body2' sx={{ ml:0.5}}  component={'span'}> {info?.born}</Typography>
            </Typography>

            <Typography gutterBottom sx={{fontSize:'14px', lineHeight:'22.12px', color:'text.caption', fontWeight:600}}>Current teams:  
                <Typography variant='body2' sx={{ ml:0.5}}  component={'span'}> {info?.current_teams}</Typography>
            </Typography>
        

            <Typography gutterBottom sx={{fontSize:'14px', lineHeight:'22.12px', color:'text.caption', fontWeight:600}}>Spouse:  
                <Typography variant='body2' sx={{color:'text.success', ml:0.5, textDecoration:'none'}} href={info?.spouse_links?.at(0)?.link} component={'a'}> {info?.spouse_links?.at(0)?.text}</Typography>
            </Typography>

            <Typography gutterBottom sx={{fontSize:'14px', lineHeight:'22.12px', color:'text.caption', fontWeight:600}}>Height:  
                <Typography variant='body2' sx={{ ml:0.5}}  component={'span'}> {info?.height} m</Typography>
            </Typography>

            <Typography gutterBottom sx={{fontSize:'14px', lineHeight:'22.12px', color:'text.caption', fontWeight:600}}>Dates Joined:  
            <Typography variant='body2' sx={{color:'text.success', ml:0.5, textDecoration:'none'}} href={info?.dates_joined_links?.at(0)?.link} component={'a'}> {info?.dates_joined}</Typography>
            , 
            <Typography variant='body2' sx={{color:'text.success', ml:0.5, textDecoration:'none'}} href={info?.dates_joined_links?.at(1)?.link} component={'a'}> {info?.dates_joined_links?.at(1)?.text}</Typography>
            </Typography>

            <Typography gutterBottom sx={{fontSize:'14px', lineHeight:'22.12px', color:'text.caption', fontWeight:600}}>Full name:  
                <Typography variant='body2' sx={{ ml:0.5}}  component={'span'}> {info?.title}</Typography>
            </Typography>
        </Box>
        <Divider/>
        <Box py={'1rem'}>
         <Typography fontSize={'18px'} lineHeight={'24px'} mb={'19px'}>Profiles</Typography>
         <Stack spacing={3} direction="row">
         {info?.profiles?.map((item, index) => (
            <Paper elevation={0} sx={{textDecoration:'none', textAlign:'center', bgcolor:'transparent'}} key={index} to={item?.link} component={Link}>
                <Avatar variant='rounded' src={item?.image} sx={{ width: 36, height: 36, bgcolor: 'background.default', mx:'auto',}}/>
                <Typography variant='caption'>{item?.name}</Typography>
            </Paper>
         ))}
            
         </Stack>
        </Box>
        <Divider/>
        <Box py={'1rem'}>
         <Typography fontSize={'18px'} lineHeight={'24px'} mb={'19px'}>People also search for</Typography>
         <Stack spacing={2} direction="row">
         {info?.people_also_search_for?.map((item, index) => (
            <Paper elevation={0} sx={{textDecoration:'none', bgcolor:'transparent'}} key={index} to={item?.link} component={Link}>
                <Avatar variant='rounded' src={item?.image} sx={{ width: 75, height: 75, bgcolor: 'background.default', mx:'auto',}}/>
                <Typography variant='caption'>{item?.name}</Typography>
            </Paper>
         ))}
            
         </Stack>
        </Box>
    </Box>
   
  )
}

export default AboutSection