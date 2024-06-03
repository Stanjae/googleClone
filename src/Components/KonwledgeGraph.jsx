/* eslint-disable react/prop-types */

import { MoreVert } from '@mui/icons-material';
import { Box, Stack, Tab, Tabs, Typography, Paper, Grid, Avatar} from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useState } from 'react';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

//for evrything tabs
function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

export default function KnowledgeGraph({content, sportResult}) {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const club = sportResult?.tables?.at(0)?.games?.at(0)?.league_league?.name
    const clubInitial = club.match(/.{1,3}/g);

    const currentSeason = sportResult?.tables?.at(0)?.games?.at(0)?.league_league?.year
    const currentSeasonYr = currentSeason.match(/.{1,4}/g)?.at(0);

    const goals =  sportResult?.tables?.at(0)?.games?.at(0)?.goals_goals
    const goalsScored = goals?.length == 4 ? goals.match(/.{1,2}/g)?.at(0) : goals.match(/.{1,1}/g)?.at(0)

    const matches = sportResult?.tables?.at(0)?.games?.at(0)?.matches_games_played
    const matchesPlayed = matches?.length == 4 ? matches.match(/.{1,2}/g)?.at(0) : matches.match(/.{1,1}/g)?.at(0)

    const assists = sportResult?.tables?.at(0)?.games?.at(0)?.assists_assists
    const assistsS = assists?.length == 2 ? assists?.match(/.{1,1}/g)?.at(0) : assists?.match(/.{1,2}/g)?.at(0);

    //for age
    const dob = content?.web_results?.find(x => x.title === "Age" )
    //current teams
    const currentTeam = content?.web_results?.find(x => x.title === "Current teams" )
    //blogpost
    const blogpost = content?.web_results?.at(0)


  return (
    <Box>
        <Stack direction={'row'} gap={5} alignItems={'center'}>
            <div>
                <Typography sx={{fontSize:'28px', lineHeight:'36px', color:'text.caption2'}}>{content?.title}</Typography>
                <Typography variant='caption' sx={{fontSize:'14px', lineHeight:'20px', alignItems:'center', display:'inline-flex'}}>{content?.type} <MoreVert fontSize='14px'/></Typography>
            </div>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Overview" {...a11yProps(0)} />
                <Tab label="Stats" {...a11yProps(1)} />
                <Tab label="Videos" {...a11yProps(2)} />
            </Tabs>
        </Stack>
        <CustomTabPanel value={value} index={0}>
            <Stack direction={'row'} gap={2} alignItems={'center'}>
                <ImageList sx={{ width:'540px', height: 320, borderRadius:'1rem', overflowY:'hidden' }} cols={4} rowHeight={159}>
                    {content?.header_images?.map((item, index) => (
                        <ImageListItem key={index} cols={itemData[index].cols || 1} rows={itemData[index].rows || 1}>
                        <img
                            {...srcset(item.image, 121, itemData[index].rows, itemData[index].cols)}
                            alt={item.title}
                            loading="lazy"
                        />
                        </ImageListItem>
                    ))}
                </ImageList>
                <Paper sx={{p:'16px', width:'256px', borderRadius:'1rem', position:'relative', bgcolor:'background.paperino'}}>
                    <Typography gutterBottom variant='caption' sx={{fontWeight:'600', fontSize:'14px', lineHeight:'20px'}}>Stats</Typography>
                    <Typography textAlign={'center'} sx={{fontWeight:'500', fontSize:'20px', lineHeight:'24px', py:'28px', justifyContent:'center'}}>
                        {clubInitial?.at(0)} . {sportResult?.tables?.at(0)?.title} .  {currentSeasonYr}
                    </Typography>

                    <Stack sx={{mt:'100px'}}>
                        <Typography gutterBottom component={'div'} sx={{fontSize:'14px', display:'inline-flex', justifyContent:'space-between'}}>Matches
                        <span>{ matchesPlayed}</span>
                        </Typography>
                        <Typography gutterBottom component={'div'} sx={{fontSize:'14px', display:'inline-flex', justifyContent:'space-between'}}>Goals
                        <span>{goalsScored}</span>
                        </Typography>
                        <Typography gutterBottom component={'div'} sx={{fontSize:'14px', display:'inline-flex', justifyContent:'space-between'}}>Assists
                        <span>{assistsS}</span>
                        </Typography>
                    </Stack>
                </Paper>

                <Grid columns={12} rowSpacing={2} columnSpacing={1} width={'260px'} container>
                    <Grid item xs={6}>
                        <Paper sx={{p:'16px', display:'flex', flexDirection:'column', justifyContent:'space-between', width:'100%', overflow:'hidden',
                        borderRadius:'1rem', position:'relative', bgcolor:'background.paperino'}}>
                            <Typography gutterBottom variant='caption' sx={{fontWeight:'500', fontSize:'14px', lineHeight:'20px'}}>Age</Typography>
                            <div>
                                <Typography sx={{fontSize:'18px', overflowWrap:'break-word', lineHeight:'26px', textWrap:'wrap'}}>{dob?.snippet}</Typography>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper sx={{p:'14px', width:'100%', display:'flex', flexDirection:'column', justifyContent:'space-between', overflow:'hidden',
                        borderRadius:'1rem', bgcolor:'background.paperino'}}>
                            <Typography gutterBottom variant='caption' sx={{fontWeight:'500', fontSize:'13px', lineHeight:'20px'}}>Current teams</Typography>
                            <div>
                                <Typography sx={{fontSize:'14px', overflowWrap:'break-word', letterSpacing:'normal', lineHeight:'20px', textWrap:'wrap'}}>{currentTeam?.snippet?.slice(0,45)}...</Typography>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                    <Paper sx={{px:'8px', gap:'5px', py:'5px', width:'100%', display:'flex', borderRadius:'1rem', position:'relative', bgcolor:'background.paperino'}}>
                        <div>
                            <Typography gutterBottom component={'div'} variant='caption' sx={{fontWeight:'500', gap:1, display:'inline-flex', alignItems:'center', fontSize:'12px', lineHeight:'18px'}}>
                            <Avatar sx={{width:'10px', height:'10px'}} src={blogpost?.link}/>
                            {blogpost?.source}</Typography>
                            <Typography gutterBottom variant='body2'>{blogpost?.title}</Typography>
                            <Typography gutterBottom variant='caption'>{blogpost?.date}</Typography>
                        </div>
                          <img style={{objectFit:'cover', borderRadius:'1rem'}} width={'100px'} src={blogpost?.thumbnail}/>  
                        </Paper>
                    </Grid>
                </Grid>
            </Stack>
        </CustomTabPanel>

    </Box>
    
  );
}


function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{p:0.5}}>
            {children}
          </Box>
        )}
      </div>
    );
  }
  

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    cols:2
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    cols:2
  }
];
