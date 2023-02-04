import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function FavItem({data}) {
let navigate =useNavigate()


    if (localStorage.getItem("fav") != null) {
  var favList= localStorage.getItem("fav").split(",")
} else {
    favList = []
}
function deleteproduct(x) {
favList = favList.filter(favList => favList != x);

  localStorage.setItem("fav",favList)
navigate(`/product/${data.id}`)


}
  return (
  
  <div className="col-md-3 col-lg-3 text-center   col-12">
   <Link to={"/product/"+data.id} className='text-black text-decoration-none'>
      <div className="item-text shadow position-relative mx-md-3 mx-1 overflow-hidden  mt-5 pb-3">
               <div className="imag">
         <img src={`https://i.dummyjson.com/data/products/${data.id}/1.jpg`} className='w-100 rounded-1' alt="" />
</div>
         
                      <h5 className='text-start fw-semibold fs-6 my-3 mb-0 px-2'>{data.title.split(" ").splice(0,5).join(" ")}</h5>
                    <div className="buy d-flex justify-content-between align-items-center ms-2 m-3 mb-0">
 
      <div>
                      <h5 className='color mb-0 pb-0'>{data.price} $</h5>
</div>
   <div>
<button className='btn btn-outline-danger p-1 px-2 fw-bold' onClick={()=>deleteproduct(`${data.id}`)}> Delete<i className="fa fa-trash"></i></button>


    </div>
</div>
      

     </div>
     </Link>
    </div>

  )
}
