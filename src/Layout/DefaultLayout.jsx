/* eslint-disable react-refresh/only-export-components */
import { Box } from "@mui/material"
import SearchNav from "../Components/SearchNav"
import { Outlet, useLoaderData } from "react-router-dom"
import { useContext, useEffect } from "react";
import { HapiCreateContext } from "../Context/ApiContext";

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

  const {setApiParam} = useContext(HapiCreateContext);

  useEffect(()=>{
    setApiParam(fixedquery)
  },[fixedquery])
 
  return (
    <Box>
      <SearchNav fixedquery={fixedquery} newquery={newquery}/>
      <Box sx={{p:'24px' }}>
        <Outlet/>
      </Box>
    </Box>
  )
}

export default DefaultLayout