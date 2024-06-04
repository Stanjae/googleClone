/* eslint-disable react/prop-types */
import { EnergySavingsLeaf } from '@mui/icons-material'
import { Paper, Typography, Stack, Divider, styled } from '@mui/material'
import { green } from '@mui/material/colors'
import { Link } from 'react-router-dom'

const nav1 =[{title:'About', url:'/'}, {title:'Advertising', url:'/'}, {title:'Business', url:''}, {title:'How Business Works', url:''}]
const nav2 =[{title:'Privacy', url:'/'}, {title:'Terms', url:'/'}, {title:'Settings', url:''}]

const CusTypography = styled(Link)(({theme})=>({
  fontSize:'14px',
  color:theme.palette.text.primary,
  '&.hover':{
  }
})
)

const HFooter = () => {
  return (
    <Paper sx={{py:1, bgcolor:'background.extra', borderRadius:0}}>
        <Typography gutterBottom px={4} variant={'body1'}  component={'div'}>Nigeria</Typography>
        <Divider/>
        <Stack px={3} direction={{sm:'row', xs:'column'}} alignItems={'center'} justifyContent={{sm:'space-between', xs:'flex-start'}}>
            <FootLinks arry={nav1}/>
            <Typography variant='body1' sx={{display:'flex', alignItems:'center', gap:0.5}}><EnergySavingsLeaf sx={{color:green[600]}} fontSize='10px'/>Our third decade of Climate action: join Us</Typography>
            <FootLinks arry={nav2}/>
        </Stack>
    </Paper>
  )
}

export default HFooter


export const FootLinks=({arry})=>{
    return(
        <Stack gap={2} p={1} direction={'row'} >
        {arry.map((item, index)=>(
          <CusTypography key={index} to={item.url} >{item.title}</CusTypography>
        ))}
          
        </Stack>
    )
}