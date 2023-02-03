import React from 'react'
import { Link } from 'react-router-dom'

export default function BrandItem({data}) {
  return (
<div className="col-md-3 col-lg-3 text-center   col-12">
   <Link to={"/product/"+data.id} className='text-black text-decoration-none'>
      <div className="item-text shadow position-relative mx-md-3 mx-1 overflow-hidden  mt-5 pb-3">         
                      <h3 className='text-center fw-semibold fs-4 my-3 mb-0 px-2'>{data.brand.split(" ").splice(0,5).join(" ")}</h3>
                   
      

     </div>
     </Link>
    </div>  )
}
