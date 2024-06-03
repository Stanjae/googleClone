/* eslint-disable react/prop-types */

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { IconButton, Typography, Card, styled, CardHeader, Avatar, CardContent} from '@mui/material';
import { MoreVert } from '@mui/icons-material';

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

export default function MaySearchCard({items}) {
  return (
    <div>
    <Typography variant='h3' gutterBottom color={'text.caption2'} sx={{fontSize:'22px', lineHeight:'28px'}}>People also ask</Typography>
    {items?.map((item, index) => (
        <Accordion key={index}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{fontSize:'16px', lineHeight:'22px', color:'text.caption'}}
        >
          {item?.question}
        </AccordionSummary>
        <AccordionDetails>
            {item?.snippet}
          <Card elevation={0} sx={{width: "100%", bgcolor:'transparent' }}>
                <CusCardHeader
                    avatar={
                    <Avatar src={item?.source_logo || item?.thumbnail}
                    sx={{ width:'26px', height:'26px', fontSize:'18px', lineHeight:'16px',}} alt="NB" aria-label="recipe"/>
                    }
                    action={
                    <IconButton aria-label="settings">
                        <MoreVert />
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
                </CardContent>
            </Card>
        </AccordionDetails>
      </Accordion>
    ))}
      
    </div>
  );
}
