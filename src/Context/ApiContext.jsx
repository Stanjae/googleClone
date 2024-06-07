/* eslint-disable react/prop-types */
import { createContext, useState } from "react"
import {useQuery} from '@tanstack/react-query'
import axios from 'axios'


export const HapiCreateContext =  createContext(null)

export const ApiContext = ({children}) => {
    const [apiParam, setApiParam] =useState('');


    const [data, setData] = useState([]);

    const {data:searchResults, isFetching, isLoading, isError} = useQuery({
      queryKey:['googleResults', apiParam],
      queryFn:async()=>{
        if(apiParam ===''){
          return
        }
        try{
          //const response = await axios.get(`http://localhost:3000/api/search?q=${apiParam}`);
          const response = await axios.get(`https://miniature-erinn-stanity-tech-cd901ded.koyeb.app/api/search?q=${apiParam}`)
          setData(response.data);
          return response.data;
        }catch(error){
          console.log(error);
        }
      },
      enabled: apiParam !== '' ? true : false
    });

  return (
    <HapiCreateContext.Provider value={{setApiParam, data, searchResults , setData, isFetching, isLoading, isError}}>
      {children}
    </HapiCreateContext.Provider>
  )
}

