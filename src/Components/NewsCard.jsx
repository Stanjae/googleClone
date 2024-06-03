/* eslint-disable react/prop-types */

import { CardActionArea, Typography, Card, CardContent, CardMedia, CardHeader, styled, Avatar, Stack } from '@mui/material';
import { Link } from 'react-router-dom';


const CusCardHeader = styled(CardHeader)(()=>({
    '.MuiCardHeader-title':{fontSize:'14px', lineHeight:'18.2px'},
    '.MuiCardHeader-content':{
        flex:'0 1 auto'
    },
    '.MuiCardHeader-subheader':{fontSize:'20px', lineHeight:'26px',paddingTop:'5px'},
    '.MuiCardHeader-subheader:hover':{textDecoration:'underline'},
  })
  )
//AIzaSyBUrDLCuwLJyFeRckhtiKsZILLpRh-M4gA
export default function NewsCard({item}) {
  return (
    <Card elevation={0} sx={{bgcolor:'transparent'}}>
      <CardActionArea>
      <Stack direction={'row'}>
        <div>
          <Link to={item?.link} style={{color:'inherit', textDecoration:'none'}}>
            <CusCardHeader sx={{alignItems:'start'}}
             avatar={
              <Avatar sx={{ bgcolor: 'red', width:'20px', height:'20px', fontSize:'16px', lineHeight:'16px',}} aria-label="recipe">
                R
              </Avatar>}
                title={item?.source}
                subheader={item?.title}/>
          </Link>
            

            <CardContent sx={{paddingTop:0, pl:'49.5px'}}>
                <Typography gutterBottom variant="body2" fontSize={'14px'} lineHeight={'22px'} color="text.caption">
                   {item?.title}...
                </Typography>
                <Typography variant="body2" fontSize={'14px'} lineHeight={'22px'} color="text.caption">{item?.date}</Typography>
            </CardContent>
        </div>
       
        <CardMedia
        sx={{ height: '92px', width: '100%', maxWidth:'92px', borderRadius:"8px" }}
        image={item?.thumbnail}
        title="green iguana"
        alt="green iguana"
      />
      </Stack>
      </CardActionArea>
    </Card>
  );
}
