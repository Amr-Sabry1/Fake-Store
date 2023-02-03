import axios from 'axios'
import React, { useEffect, useState } from 'react'
import BrandItem from './BrandItem'

export default function Brans() {

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
<div className="container my-5">

<div className="row">
    <h2 className='mt-5 color fw-bold after text-center text-muted'>Brands</h2>

      {products?.map(product=> <BrandItem key={product.id} data={product} />)}

</div>
</div>

</>
    )
}
