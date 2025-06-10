import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { GlobalContext } from './context/GlobalState';
import SingleCard from './product/SingleCard';
import { useTranslation } from 'react-i18next';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function SearchResults() {
    const { t }=useTranslation()
    const{data,productCount,resetProductCount,increaseProductCount}=useContext(GlobalContext)
      const query = useQuery().get("q");

      useEffect(()=>{
        resetProductCount();
      },[])
      

  const [searchCount,setSearchCount]=useState(4);
  const [filteredData,setFilteredData]=useState([]);

    useEffect(() => {
    const result = data.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    console.log(result);
    
    setFilteredData(result);
  }, [query, data]);
  console.log("productCount",productCount);
  


      
        
      
    
  return (
    <div className='container'>
      <div className='row g-3'>
          {
              filteredData.slice(0,productCount).map((element,index)=>{
              return  <SingleCard product={element} key={index} />
              })
          }
      </div>  
      <div className='text-center my-5'>
        <button onClick={increaseProductCount} className={`btn btn-secondary rounded-pill px-5 py-3 ${productCount>(filteredData.length-4) ? "d-none" :null} `}>{t("home.0")}</button>
      </div>
    </div>
  )
}

export default SearchResults