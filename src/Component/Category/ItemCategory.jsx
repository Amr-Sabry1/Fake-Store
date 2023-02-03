import { Link } from 'react-router-dom'
import React from 'react'


export default function Item({data}) {
  return (
   
    <div className="col-md-3 mb-4  col-lg-3 text-center  col-12">
    <Link to={"/product/"+data.id} className='text-decoration-none text-black'>
     <div className="item-text shadow position-relative  overflow-hidden  pb-3">
<div id="imag">
                 <img src={data.images[0]} className='w-100' alt="" />
  </div>     
                      <h5 className='text-start fw-semibold fs-6 my-3 mb-0 px-2'>{data.title.split(" ").splice(0,3).join(" ")}</h5>
<div className="buy d-flex justify-content-between align-items-center ms-2 m-3 mt-3 mb-0">
 
      <div>
                      <div ><b>Rate : </b>{data.rating} <span><i className='fa fa-star text-warning'></i></span></div>
</div>
   <div>
                      <h5 className='color mb-0 pb-0'>{data.price} $</h5>

    </div>
</div>

         {/* <div className="vote">
           {data.rating.rate}
         </div> */}
           <div className="off">
             50%
         </div>
     </div>
     </Link>
    </div>
     
  )
}
