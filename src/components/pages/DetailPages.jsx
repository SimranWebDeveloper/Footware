import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { useParams } from 'react-router-dom'
import DetailProductDesign from './DetailProductDesign'




const DetailPages = () => {
  const {data}=useContext(GlobalContext)
  const {id}=useParams()

  const detailProductPage=data.find((item)=>item.id===parseInt(id))
  console.log(detailProductPage);


  return (
    <div className='bg-secondary text-white border '>
      {
      !detailProductPage ? <div className='text-center text-uppercase py-3'>product not founded</div> : <DetailProductDesign product={detailProductPage}/>
      }
    </div>
  )
}

export default DetailPages
