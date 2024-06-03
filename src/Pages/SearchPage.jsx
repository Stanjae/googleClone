import { Box, Divider, Grid } from "@mui/material"
import SearchCard from "../Components/SearchCard"
import { useContext } from "react"
import { HapiCreateContext } from "../Context/ApiContext"
import MaySearchCard from "../Components/MaySearchCard"
import KnowledgeGraph from "../Components/KonwledgeGraph"
import AboutSection from "../Components/AboutSection"

const SearchPage = () => {

    const {data, isFetching} = useContext(HapiCreateContext);
    //console.log(organic_results)
  return (
    <Box>
      <Grid columns={12} container>
        <Grid xs={0} md={2} item></Grid>
        <Grid xs={12} md={10} item>
          {data?.knowledge_graph && <KnowledgeGraph sportResult={data?.sports_results} content={data?.knowledge_graph}/>}
          {data?.knowledge_graph && <Divider/>}
          <Grid container columns={12}>
            <Grid xs={12} md={8} item>
               {!isFetching && data?.organic_results && data?.organic_results?.map((item, index)=>(
                  <SearchCard item={item} key={index}/>
                ))}
                {data?.related_questions && <MaySearchCard items={data?.related_questions}/>}
            </Grid>
            
            <Grid  xs={0} md={4} item> 
             {data?.knowledge_graph && <AboutSection info={data?.knowledge_graph}/>}
            </Grid>
          </Grid>  
        </Grid>
       
      </Grid>
    </Box>
  )
}

export default SearchPage