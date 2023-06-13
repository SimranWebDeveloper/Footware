import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import ExampleCard from './ExampleCard'
import Aos from 'aos'

const Cards = () => {
    const{cards,setCards}=useContext(GlobalContext)
    // console.log(cards);
    Aos.init({
        duration:1000,
    })
  return (
    <>
      <div className='container'>
        <div className='row g-3'>
            {
                cards.map((element,index)=>{
                    return <ExampleCard product={element} key={element.id}/>
                })
            }
        </div>
      </div>
    </>
  )
}

export default Cards

