/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { CardActionArea, Typography, Card, CardContent, CardMedia, CardHeader, styled, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';



const CusCardHeader = styled(CardHeader)(({theme})=>({
    '.MuiCardHeader-title':{fontSize:'14px', lineHeight:'20px'},
    '.MuiCardHeader-content':{
        flex:'0 1 auto'
    },
    'MuiCardHeader-avatar':{
         width:'10px', height:'10px'
    },
    paddingTop: '5px',
    paddingBottom:0,
  })
  )

export default function ImageCard({image}) {
  return (
    <Card >
        <CardMedia
          component="img"
          height="225px"
          image={image?.original || image?.thumbnail}
          alt="green iguana"
        />
        <Link to={image?.link} style={{display:'block', color:'inherit', textDecoration:'none'}}>
        <CardActionArea>
        <CusCardHeader
        avatar={
          <Avatar src={image?.thumbnail} sx={{ bgcolor: 'red', width:'16px', height:'16px', fontSize:'10px', lineHeight:'10px',}} aria-label="recipe"/>
        }
        title={image?.source_name}
      />
      
        <CardContent sx={{paddingTop:0}}>
          <Typography variant="body2" color="text.secondary">{image?.title}</Typography>
        </CardContent>
      </CardActionArea>
      </Link>
    </Card>
  );
}
