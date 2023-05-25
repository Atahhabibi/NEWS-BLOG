
import { createContext ,useContext,useReducer,useState} from "react";

const AppContext=createContext();


export const AppProvider=({children})=>{

    const [query, setQuery] = useState('World news');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [news, setNews] = useState([])

    const contextValue={
        query,
        setQuery,
        setNews,
        news,
        setIsSidebarOpen,
        isSidebarOpen,

    }

    return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
}



export const useAppContext=()=>{
    return useContext(AppContext)
}