import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Loading from '../Loading/loading'
import Footer from '../Footer/Footer'
import { number } from 'joi'


export default function Product() {

let {id}=useParams()




let[product,setproduct]=useState([])

let[isLoading,setisLoading]=useState(true)
let navigat=useNavigate()


 async function getproduct(id){
  let{data} = await axios.get(`https://dummyjson.com/products/${id}`)
setproduct(data)
setisLoading(false)

}


  useEffect(()=>{
getproduct(id)
},[])
// 
var cartList;

if (localStorage.getItem("cart") != null) {
   cartList= localStorage.getItem("cart").split(',')
} else {
    cartList = []
}

function addproduct(x){
   cartList.push(x)
  localStorage.setItem("cart",cartList)
  navigat('../Cart')
}
// 
var favList;
if (localStorage.getItem("fav") != null) {
   favList= localStorage.getItem("fav").split(',')

} else {
    favList = []
}

function addFav(x){


  favList.push(x)
  localStorage.setItem("fav",favList)
  navigat('../favorite')
}

  return (

<>
  {isLoading && <Loading />}
          {!isLoading && <>
<section className='my-5 pb-5' >

    <div className="container">
        <div className="row mt-5 pt-5">
            <div className="col-md-4 mt-md-5">
                <img src={product.images[0]} className='big-imag' alt="" />
           
            </div>
            <div className="col-md-8 p-md-5 p-4">
                <h1 className='color fw-bold my-3'>{product.title}</h1>
                <p>{product.description}</p>

                <h6 className='my-3'><b className='color'>Category : </b>{product.category}</h6>
                <h6 className='my-3'><b className='color'>Brands : </b>{product.brand}</h6>

                <h6 className='my-3'><b className='color'>Rate : </b>{product.rating} <span><i className='fa fa-star text-warning'></i></span></h6>
                <h6 className='my-3'><b className='color'>count : </b> {product.stock}</h6>
 <div className="g-1 row small-imag mb-3">
                  
    {product.images[1]?<>   <div className="col-3 ">
                   <img src={product.images[1]}  alt="" />
       </div>  </>:""}
        {product.images[2]?<>   <div className="col-3 ">
                   <img src={product.images[2]}  alt="" />
       </div>  </>:""}
        {product.images[3]?<>   <div className="col-3 ">
                   <img src={product.images[3]}  alt="" />
       </div>  </>:""}
           {product.images[4]?<>   <div className="col-3 ">
                   <img src={product.images[4]}  alt="" />
       </div>  </>:""}            
            </div>
<div className="d-flex align-items-center">
                <button className='btn btn-info text-white me-2' onClick={()=>addproduct(product.id)}>Add To Cart <span><i className='fa fa-cart-arrow-down'></i></span></button>
<button className='btn btn-danger' onClick={()=>addFav(product.id)}>Add To Favorite <span><i className='fa fa-heart'></i></span></button>
</div>
            </div>
        </div>
    </div>
</section>
</>}

</>
    )
}
