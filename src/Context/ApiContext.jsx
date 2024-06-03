/* eslint-disable react/prop-types */
import { createContext, useState } from "react"
import {useQuery} from '@tanstack/react-query'
import axios from 'axios'


export const HapiCreateContext =  createContext(null)

export const ApiContext = ({children}) => {
    const [apiParam, setApiParam] =useState('');


    const [data, setData] = useState([]);

    const {data:searchResults, isFetching} = useQuery({
      queryKey:['googleResults', apiParam],
      queryFn:async()=>{
        if(apiParam ===''){
          console.log('Please enter something');
          return
        }
        try{
          const response = await axios.get(`http://localhost:3000/api/search?q=${apiParam}`);
          setData(response.data);
          return response.data;
        }catch(error){
          console.log(error);
        }
      },
      enabled: apiParam !== '' ? true : false
    });
    
    console.log('search results', searchResults)

    //const isData = data || searchResults;

  return (
    <HapiCreateContext.Provider value={{setApiParam, data, searchResults , setData, isFetching}}>
      {children}
    </HapiCreateContext.Provider>
  )
}

