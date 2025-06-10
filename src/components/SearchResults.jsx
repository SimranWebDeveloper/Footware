import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom';
import { GlobalContext } from './context/GlobalState';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function SearchResults() {
    const{data,productCount,increaseProductCount}=useContext(GlobalContext)
      const query = useQuery().get("q");

      
    console.log(query);
    
    //   const filteredData=data.filter((item)=>item.name==query)
const filteredData = data.filter((item) => {

  return item.name.toLowerCase().includes(query.toLowerCase());
});

      console.log(filteredData);
      
        
      
    
  return (
    <div>SearchResults</div>
  )
}

export default SearchResults