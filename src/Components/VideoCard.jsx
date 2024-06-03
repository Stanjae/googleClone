/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { CardActionArea, Typography, Card, CardContent, CardMedia, CardHeader, styled, Avatar, Box, Stack } from '@mui/material';
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom';


const CusCardHeader = styled(CardHeader)(({theme})=>({
    '.MuiCardHeader-title':{fontSize:'14px', lineHeight:'18.2px'},
    '.MuiCardHeader-content':{
        flex:'0 1 auto'
    },
    '.MuiCardHeader-subheader':{fontSize:'20px', lineHeight:'26px',paddingTop:'5px'},
    '.MuiCardHeader-subheader:hover':{textDecoration:'underline'},
  })
  )

export default function VideoCard({video}) {
  return (
    <Card elevation={0} sx={{width: "100%", bgcolor:'transparent' }}>
    <Link to={video?.link} style={{color:'inherit', textDecoration:'none'}}>
      <CusCardHeader
        title={video?.link}
        subheader={video?.title}
      />
    </Link>
    
      <CardActionArea>
      <Stack direction={'row'}>
        <ReactPlayer width={'160px'} style={{borderRadius:3}} height={'87px'} light controls url={video?.link} />
        <CardContent sx={{paddingTop:0}}>
          <Typography gutterBottom variant="body2" fontSize={'14px'} lineHeight={'22px'} color="text.caption">
           {video?.title}
          </Typography>
          <Typography variant="body2" fontSize={'14px'} lineHeight={'22px'} color="text.caption">
            {video?.platform} . {video?.channel} . {video?.date}
          </Typography>
        </CardContent>
      </Stack>
      </CardActionArea>
    </Card>
  );
}
