import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import BrandItem from '../Brands/BrandItem'
import Item from '../Item/Item'
import Loading from '../Loading/loading'
export default function Home() {
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

    <section className='carousel'>
        <div className="row d-flex align-items-center mt-5 mt-md-0 mx-md-5">
            {/* <div className="col-md-2">
               <a href="#cat" className='text-decoration-none text-black'>
                 
               </a>
            </div> */}
            <div className="col-lg-12">
<div id="template-mo-zay-hero-carousel" className="carousel slide mt-4 py-4" data-bs-ride="carousel">
        <ol className="carousel-indicators">
<div className="bor">
            <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="0" className="active"></li>
    </div><div className="bor">
            <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="1"></li>
    </div><div className="bor">
            <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="2"></li>

</div>
        </ol>
        <div className="carousel-inner">
            <div className="carousel-item active">
                <div className="container">
                    <div className="row p-md-5 p-2">
                        <div className="mx-auto col-md-8 col-lg-5 order-lg-last">
                            <img className="img-fluid" src="https://templatemo.com/templates/templatemo_559_zay_shop/assets/img/banner_img_02.jpg" alt=""/>

                        </div>
                        <div className="col-lg-6 mb-0 d-flex align-items-center">
                            <div className="text-align-left align-self-center">
                                <h1><b>$TORE</b> eCommerce</h1>
                                <h3>Tiny and Perfect eCommerce Company</h3>
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, nesciunt commodi? Commodi dolor nesciunt quam laborum adipisci facilis voluptatem sit neque voluptatum, ips. 
                                   
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="carousel-item">
                <div className="container">
                    <div className="row p-md-5">
                        <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                            <img className="img-fluid" src="https://images.pexels.com/photos/325153/pexels-photo-325153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=" alt=""/>

                        </div>
                        <div className="col-lg-6 mb-0 d-flex align-items-center">
                            <div className="text-align-left">
                                <h1>Proident occaecat</h1>
                                <h3>Aliquip ex ea commodo consequat</h3>
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, dolorum?
                                    Lorem ipsum dolor sit amet <b>consectetur</b> adipisicing elit. Quibusdam quas quisquam vero corporis iure aperiam aut 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="carousel-item">
                <div className="container">
                    <div className="row p-md-5">
                        <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                            <img className="img-fluid" src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>

                        </div>
                        <div className="col-lg-6 mb-0 d-flex align-items-center">
                            <div className="text-align-left">
                                <h1>Repr in voluptate</h1>
                                <h3>Ullamco laboris nisi ut </h3>
                                <p>
                               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, dolorum?
                                    Lorem ipsum dolor sit amet <b>consectetur</b> adipisicing elit. Quibusdam quas quisquam vero corporis iure aperiam aut 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   
    </div>
            </div>
        </div>
  
    </section>


    <section className='bg-made'>
          <div className="container py-5">

    <h2 className='mb-3 color fw-bold  text-center text-muted'>All Product</h2>
    
      <div className="row">
     
      {products?.slice(0,8).map(product=> <Item key={product.id} data={product} />)}
<div className='text-center mt-5'><Link to="/all"><button>More..</button></Link></div>

      </div>
      </div>
   
    </section>
    <section id='cat' className='bgimage'>
        <div className="bg-black bg-opacity-75 pt-5 pb-1">
    <h2 className='text-center color fw-bold text-white'>Category</h2>

  
             <div className="row m-md-5 p-1 m-1 p-md-4">
           
                <div className="col-md-3 text-center">
   <Link to="/category" className='text-decoration-none'> <div className="item-text bg-black text-white m-2 shadow rounded-3">

        <div className="mb-2">
            <img src='https://images.pexels.com/photos/249324/pexels-photo-249324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='w-100 rounded-3' alt="" />
        </div>
        <div className="CategoryName">
            <p className='text-uppercase fs-5 pb-2 fw-semibold'>SmartPhones</p>
        </div>
    </div></Link>
                </div>    


    <div className="col-md-3 text-center">
   <Link to="/category" className='text-decoration-none'><div className="item-text bg-black text-white m-2 shadow rounded-3">

        <div className=" mb-2">
            <img src='https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='w-100 rounded-3' alt="" />
        </div>
        <div className="CategoryName">
            <p className='text-uppercase fs-5 pb-2 fw-semibold'>Laptops</p>
        </div>
    </div></Link> 
</div>    

    <div className="col-md-3 text-center">
        <Link to="/category" className='text-decoration-none'>
             <div className="item-text bg-black text-white m-2 shadow rounded-3">

        <div className="mb-2">
            <img src='https://images.pexels.com/photos/932587/pexels-photo-932587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='w-100 rounded-3' alt="" />
        </div>
        <div className="CategoryName">
            <p className='text-uppercase fs-5 pb-2 fw-semibold'>Fragrances</p>
        </div>
    </div>
        </Link>
</div>      

  <div className="col-md-3 text-center">
      <Link to="/category" className='text-decoration-none'>  <div className="item-text bg-black text-white m-2 shadow rounded-3">

        <div className=" mb-2">
            <img src='https://images.pexels.com/photos/139764/pexels-photo-139764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className='w-100 rounded-3' alt="" />
        </div>
        <div className="CategoryName">
            <p className='text-uppercase fs-5 pb-2 fw-semibold'>Home Decoration</p>
        </div>
    </div></Link> 
    
</div>
<div className='text-center mt-5'><Link to="/category"><button>More..</button></Link></div>
   </div>
          

</div>
    </section>




      <section>
    <h2 className='mt-4 text-center color fw-bold after text-muted'>Brands</h2>

  
             <div className="row m-md-5 m-1 p-1 mt-md-0 p-md-4 pt-md-0">
      {products?.slice(0,8).map(product=> <BrandItem key={product.id} data={product} />)}
<div className='text-center mt-5'><Link to="/brands"><button>More..</button></Link></div>
         
</div>
          


    <br />
    </section>
     </>}
    </>
  )
}
