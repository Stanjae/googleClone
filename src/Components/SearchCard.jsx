/* eslint-disable react/prop-types */
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { styled } from '@mui/material';

const CusCardHeader = styled(CardHeader)(({theme})=>({
    '.MuiCardHeader-title':{fontSize:'14px', lineHeight:'20px'},
    '.MuiCardHeader-subheader':{fontSize:'12px', lineHeight:'18px', textOverflow:'ellipsis', overflow:'hidden', whiteSpace: 'nowrap'
       ,color:theme.palette.text.caption},
    '.MuiCardHeader-content':{
        flex:'0 1 auto'
    },
    'MuiCardHeader-avatar':{
         width:'10px', height:'10px'
    }
  })
  )


export default function SearchCard({item}) {

  return (
    <Card elevation={0} sx={{width: "100%", bgcolor:'transparent' }}>
      <CusCardHeader
        avatar={
          <Avatar src={item?.favicon || item?.thumbnail}
          sx={{ width:'26px', height:'26px', fontSize:'18px', lineHeight:'16px',}} alt="NB" aria-label="recipe"/>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={item?.source}
        subheader={item?.displayed_link}
      />
      <CardContent sx={{paddingTop:0}}>
        <Typography gutterBottom href={item?.link} component={'a'} sx={{fontSize:'22px', textDecoration:'none',
         display:'block', lineHeight:'20px', '&:hover':{textDecoration:'underline'} }} variant="h2" color="text.info">
          {item?.title}
        </Typography>
        <Typography sx={{fontSize:'14px', lineHeight:'22.12px', }} variant="caption1" color="text.caption">
        {item?.snippet}
        </Typography>
      </CardContent>
    </Card>
  );
}
