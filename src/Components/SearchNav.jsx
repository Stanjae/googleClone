/* eslint-disable react/prop-types */
import { Box, Grid, Stack, Typography, styled, Paper, IconButton, InputBase, Divider, Avatar, Button, Menu, MenuItem, Badge} from "@mui/material"
import { MicRounded, Search, CameraEnhance, Apps, Science, Notifications} from "@mui/icons-material"
import { Form, NavLink, useLocation, useNavigate } from "react-router-dom"
import { useState } from "react"
import { alpha } from '@mui/material/styles';
import EditIcon from '@mui/icons-material/Edit';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const CusPaper = styled(Paper)(({theme})=>({
    display:'flex',
    alignItems: "center",
    width:'690px',
    borderRadius:"20px",
    borderWidth:'1px',
    borderColor:theme.palette.primary,
  
    '& .hover':{
        'backgroundColor':theme.palette.success,
    }
  })
);

const CusLink =styled(NavLink)(({theme})=>({
    color:theme.palette.text.error,
    textDecoration:'none',
    fontSize:'14px',
    padding:'0px 7px 10px 7px',
    marginRight:'3px'

}))


//su9-eji-wzn

const SearchNav = ({fixedquery}) => {
    const {pathname} = useLocation();
    
    const navigate = useNavigate();
    //console.log(pathname)

    const handleSubmit=(e)=>{
        e.preventDefault();
        const value  = e.target[1].value
        navigate(`/search/q=${value}/s`)
    
      }

    const navlinks = [{title:'All', url:'s', alias:'/s'}, {title:'Images', url:`images`, alias:'images'}, {
        title:'Videos', url:'videos', alias:'videos'}, {title:'News', url:'news', alias:'news'}] 
    
  return (
    <Box sx={{pt:'26px', px:'24px', borderBottom:0.5, borderBottomColor:'primary.main'}}>
        <Grid columns={12} container>
            <Grid item md={2} xs={12}>
                {/* <Typography component={'a'} sx={{textDecoration:'none', color:'#fff'}} href={'/'} fontWeight={600} fontSize={"30px"} 
                variant="h3">Gogle</Typography> */}
                <Stack sx={{mb:{md:'auto', xs:'5px'}}} direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                  <IconButton sx={{display:{md:'none', xs:'inline-block'}}}><Science/></IconButton>
                  <Typography component={'a'} sx={{textDecoration:'none', color:'text.primary'}} href={'/'} fontWeight={600} fontSize={"30px"}
                   variant="h3">Gogle</Typography>

                    <Box sx={{display:{md:'none', xs:'flex'}, alignItems:'center', gap:'10px'}}>
                        <Badge variant="dot" color="error">
                            <Notifications sx={{fontSize:'20px'}}/>
                        </Badge>
                        <Avatar/>
                    </Box>

                </Stack>
            </Grid>
            <Grid item md={10} xs={12}>
                <Stack sx={{pb:'10px'}} justifyContent={'space-between'} alignItems={'center'} direction={'row'}>
                    <CusPaper onSubmit={handleSubmit} component={Form} sx={{  p: "2px 4px" }} >
                        <IconButton sx={{ p: "10px" }} aria-label="menu">
                        <Search />
                        </IconButton>
                        <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search Gogle"
                        type="search"
                        defaultValue={fixedquery}
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
                    <Box sx={{display:{md:'flex', xs:'none'}, alignItems:'center', gap:'10px'}}>
                        <IconButton aria-label="Apps" color="primary.main">
                            <Apps/>
                        </IconButton>
                        <Avatar/>
                    </Box>
                </Stack>
                <Stack direction={'row'} justifyContent={'space-between'} sx={{pt:'10px'}}>
                    <nav style={{display:'flex'}}>
                        {navlinks.map((item, index)=>(
                            <CusLink  sx={{borderBottom:3, 
                            borderBottomColor:`${pathname.endsWith(item.alias) ? "text.success":"transparent"}`, 
                            color:`${pathname.endsWith(item.alias) ? "text.success":""}`}} 
                            key={index} to={item.url}>{item.title}</CusLink>
                        ))}
                    </nav>
                    <CustomizedMenus/>
                </Stack>
            </Grid>
        </Grid>
    </Box>
  )
}

export default SearchNav





/* custom menuoption */

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

export const CustomizedMenus=()=> {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        size="small"
        disableRipple
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        sx={{ color:'text.error', textTransform:'capitalize', borderRadius:'5px', fontSize:'14px', bgcolor:'transparent', '&:hover':{bgcolor:'primary.main'}}}
      >
        SafeSearch
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple>
          <EditIcon />
          Filter explicit results
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <FileCopyIcon />
          Blur explicit images
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <ArchiveIcon />
          Off
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={handleClose} disableRipple>
          <MoreHorizIcon />
          More about SafeSearch
        </MenuItem>
      </StyledMenu>
    </div>
  );
}
