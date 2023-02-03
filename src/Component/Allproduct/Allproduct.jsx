import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Item from '../Item/Item'
import Loading from '../Loading/loading'

export default function Allproduct() {
let[products,setproducts]=useState([])

let[isLoading,setisLoading]=useState(true)









 async function getproduct(){
  let{data} = await axios.get(`https://dummyjson.com/products`)
setproducts(data.products)

setisLoading(false)

}


  useEffect(()=>{
getproduct()
},[])


  return (
         <>
  {isLoading && <Loading />}
          {!isLoading && <>
<div className="container mt-5">
    <div className="row pt-5">
    <h2 className='mb-2 color fw-bold after text-center text-muted'>All Product</h2>

      {products?.map(product=> <Item key={product.id} data={product} />)}

    </div>
</div>
      </>}</>
    )
}
