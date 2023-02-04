import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function CartItem({data}) {
let navigate =useNavigate()


let[qnt,setqnt]=useState(1)
    if (localStorage.getItem("cart") != null) {
  var cartList= localStorage.getItem("cart").split(",")
} else {
    cartList = []
}
function deleteproduct(x) {

cartList = cartList.filter(cartList => cartList != x);
  localStorage.setItem("cart",cartList)
//  window.location.reload(true)
window.alert('Product Deleted')

}

function plusqnt(){
setqnt(qnt++)
    
}
function minusqnt(){
setqnt(qnt--)
    
}

  return (
  

<div className="col-md-6 my-3  border-bottom border-2">
     <div className="row">
         <div className="col-md-6 mb-3">
              <div className="image-border">
                    <img src={`https://i.dummyjson.com/data/products/${data.id}/1.jpg`} alt="" />
        </div>
        </div>
        <div className="col-md-6 mb-3">
            <h3 className='color fw-bold'>{data.title}</h3>
            <p><b className='me-1 my-3'>Quantity : </b>
            <span>
            <i className='fa fa-minus btn btn-outline-danger p-1 fs-6 px-2 mx-2' onClick={()=>minusqnt()}></i>
            </span>
             {qnt}
              <span>
            <i className='fa fa-plus btn btn-outline-success p-1 px-2 mx-2' onClick={()=>plusqnt()}></i>    
               </span></p>



            <p><b>Price : </b><span className='bg-info px-2 py-1 text-white rounded-3 fw-bold' id='price'>{data.price*qnt} $</span></p>
          
<button className='btn btn-outline-danger p-1 px-2 fw-bold' onClick={()=>deleteproduct(`${data.id}`)}>Delete <i className="fa fa-trash"></i></button>

            

        </div>
     </div>
     </div>

  )
}
