import React, { useEffect, useState } from 'react'
import FavItem from './FavItem';
import Loading from '../Loading/loading';
import { Link } from 'react-router-dom';

export default function Cart() {
let[cartproduct,setcartproduct]=useState([])
let[isLoading,setisLoading]=useState(true)



if (localStorage.getItem("fav") != null) {
  var favList= localStorage.getItem("fav").split(",")
  
} else {
    favList = []
}

   async function addcart(){

  let data = await  fetch('https://dummyjson.com/carts/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    userId: 1,
    products: [
      {
        id: favList[0],
        quantity: 1,
      },
      {
        id: favList[1],
        quantity: 1,
      },
         {
        id: favList[2],
        quantity: 1,
      },{
        id: favList[3],
        quantity: 1,
      },{
        id: favList[4],
        quantity: 1,
      },{
        id: favList[5],
        quantity: 1,
      },{
        id: favList[6],
        quantity: 1,
      },{
        id: favList[7],
        quantity: 1,
      },{
        id: favList[8],
        quantity: 1,
      },{
        id: favList[9],
        quantity: 1,
      },{
        id: favList[10],
        quantity: 1,
      },
     
      
    ]

  })
  
})
.then(res => res.json())

setcartproduct(data.products)
setisLoading(false)
  
}



  useEffect(()=>{
addcart()

},[])
  return (
        <>
  {isLoading && <Loading />}
          {!isLoading && <>
<div className="container my-5">
  
  <div className="row pt-5">
    <h2 className='mb-3 color fw-bold after text-center text-muted'>Favorite List</h2>

      {cartproduct?.map(product=> <FavItem key={product.id} data={product} />)}
  <div className='text-center my-5 text-dark'>
  <Link className='text-center btn btn-secondary' to='/all'>Add Product</Link></div>
  
  </div>
</div> </>}</> )
}





















