import React, { useEffect, useState } from 'react'
import CartItem from './CartItem';
import Loading from '../Loading/loading';
import { useNavigate } from 'react-router-dom';
export default function Cart() {
let[cartproduct,setcartproduct]=useState([])
let[isLoading,setisLoading]=useState(true)
let navigate =useNavigate()


if (localStorage.getItem("cart") != null) {
  var cartList= localStorage.getItem("cart").split(",")
} else {
    cartList = []
}


   async function addcart(){

  let data = await  fetch('https://dummyjson.com/carts/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    userId: 1,

    products: [
      {
        id: cartList[0],
        quantity: 1,
      },
      {
        id: cartList[1],
        quantity: 1,
      },
         {
        id: cartList[2],
        quantity: 1,
      },{
        id: cartList[3],
        quantity: 1,
      },{
        id: cartList[4],
        quantity: 1,
      },{
        id: cartList[5],
        quantity: 1,
      },{
        id: cartList[6],
        quantity: 1,
      },{
        id: cartList[7],
        quantity: 1,
      },{
        id: cartList[8],
        quantity: 1,
      },{
        id: cartList[9],
        quantity: 1,
      },{
        id: cartList[10],
        quantity: 1,
      },
     
      
    ]

  })
  
})
.then(res => res.json())

setcartproduct(data.products)
setisLoading(false)
  
}
let uname ="";
if (localStorage.getItem('userName') == null) {
    uname=""
} else {
    uname = localStorage.getItem('userName')

}
function beyprod(){
 if(uname){
localStorage.removeItem("cart");
navigate('/cardinfo')

}else{
navigate('/login')
 
}
}

  useEffect(()=>{
addcart()

},[])
  return (

        <>
  {isLoading && <Loading />}
          {!isLoading && <>
<div className="container mt-5">
  <div className="row pt-5">
    <h2 className='mb-3 color fw-bold after text-center text-muted'>Cart List</h2>

      {cartproduct?.map(product=> <CartItem key={product.id} data={product} />)}
<div className="col-12 mb-3 mt-4 py-4 text-center border-top ">
  <div>
    <h2><b>Total Price :</b>999</h2>
    <button className='btn btn-success' onClick={()=>beyprod()}>Buy Now</button>
  </div>
</div>
  </div>
</div>  
</>}</>
)
}























