import { createContext, useEffect, useState } from "react";
import products from "../../data/Data";
import axios from "axios";


export const GlobalContext=createContext();

export const ContextProvider= ({children}) => {
    const[data,setData]=useState(products)
    const[cards,setCards]=useState([])
    useEffect(()=>{
        axios.get('https://example-data.draftbit.com/cars?_limit=10')
        .then(res=>{
            // console.log(res.data)
            setCards(res.data)
        }
            )
    },[])

    return (
        <GlobalContext.Provider value={{data,setData,cards,setCards}} >
            {children}
        </GlobalContext.Provider>
        
    )
}