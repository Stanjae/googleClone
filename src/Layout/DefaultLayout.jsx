/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
import { Box, LinearProgress } from "@mui/material"
import SearchNav from "../Components/SearchNav"
import { Outlet, useLoaderData } from "react-router-dom"
import { useContext, useEffect, useState } from "react";
import { HapiCreateContext } from "../Context/ApiContext";
import CustomAlerts from "../Components/CustomAlerts";

export async function getSearchParams({ request }) {
  const url = new URL(request.url);
  const q = url.href;
  const query = q?.split("=");
  const newquery = query[1] //.replace(/%20/g, ' ');
  const fixedquer = query[1].replace(/%20/g, ' ');
  const fixedquery = fixedquer.includes('/') ? fixedquer.split("/")[0] : fixedquer;
  return {newquery, fixedquery};
}

const DefaultLayout = () => {
  const {newquery, fixedquery} = useLoaderData();

  const {setApiParam, isLoading, isError} = useContext(HapiCreateContext);

  

  useEffect(()=>{
    setApiParam(fixedquery)
  },[fixedquery]);

  useEffect(()=>{
    if(isError){
      setOpen(isError)
   }
  }, [isError])

  const [open, setOpen] = useState(isError);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

 
  return (
    <Box>
      <SearchNav fixedquery={fixedquery} newquery={newquery}/>
      {isLoading && <LinearProgress color="info" />}
      <Box sx={{p:'24px' }}>
        <Outlet/>
      </Box>
       <CustomAlerts open={open} handleClose={handleClose} message={{text:'Data could not be fetched!', type:'error'}}/>
    </Box>
  )
}

export default DefaultLayout