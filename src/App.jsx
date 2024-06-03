import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./Pages/Home"
import ErrorPage from "./Components/ErrorPage"
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material"
import DefaultLayout, {getSearchParams} from "./Layout/DefaultLayout"
import SearchPage from "./Pages/SearchPage"
import ImagePage from "./Pages/ImagePage"
import VideoPage from "./Pages/VideoPage"
import News from "./Pages/News"
import { createContext, useMemo, useState } from "react"
import { grey } from '@mui/material/colors';
import { ApiContext } from "./Context/ApiContext"



const router = createBrowserRouter([
  {path:"/", element:<Home/>, errorElement:<ErrorPage/>},
  {path:'/search/:q/', element:<DefaultLayout/>, loader:getSearchParams, children:[
    { path:'s', element:<SearchPage/>},
    {path:'images',element:<ImagePage/>},
    {path:'videos', element:<VideoPage/>},
    {path:'news', element:<News/>}
  ]}
])

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

const getDesignTokens = (mode) => ({
  typography: {
    fontFamily: ['Arial']
  },
  palette: {
    mode,
    primary: {
      ...(mode === 'dark' ? {
        main: "#303134",
      }:
    {
      main:"#F8F9FA"
    }),
    },
    ...(mode === 'dark' ? {
      background: {
        default:"#202124",
        paper: "#171717",
        extra:'#111',
        light:'#ccc',
        //for knowledge cards
        paperino:'#2D3135'
      },
    }:
    {
      background: {
        
        extra:'#f2f2f2',
        
      },
    }
  ),
    text: {
      ...(mode === 'light'
        ? {
            primary: grey[900],
            secondary: '#1a0dab',
            error:'#9aa0a6',
            info:'#99c3ff'
          }
        : {
            primary: '#fff',
            secondary: "#99c3ff",
            error:'#9aa0a6',
            info:'#99c3ff',
            success:'#4285F4', //blue color for links,
            //for cards,
            caption:'#bdc1c6',
            caption2:'#e8eaed',
          }),
    },
  },
});
function App() {
  //&api_key=b442dad55237a34907cf109aa0402206d10428a8f1e23fd5f4920d47f5854901


  

  const [mod, setMod] = useState('dark');

  const colorMode = useMemo(() => ({
      toggleColorMode: () => {
        setMod((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = useMemo(() =>createTheme(getDesignTokens(mod)),
    [mod],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <ApiContext>
           <RouterProvider router={router}/>
        </ApiContext>  
      </ThemeProvider>
    </ColorModeContext.Provider>
    
  )
}

export default App
