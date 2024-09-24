import React,{createContext,useContext,useState} from "react";
const StateContext = createContext()


export const ContextProvider = ({children})=>{
    const [filters,setFilters] = useState([])

    return(
        <StateContext.Provider value={{filters,setFilters}}>
            {children}
        </StateContext.Provider>
    )
}


export const useStateContext = () => useContext(StateContext)