import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

export default function Navbar(props) {
let uname ="";
if (localStorage.getItem('userName') == null) {
    uname=""
} else {
    uname = localStorage.getItem('userName')

}
let navigate = useNavigate()

function deleteuname(){
  localStorage.removeItem("userName")
 navigate("/login")
  
}
  return (
    <>
 <nav className="navbar navbar-expand-lg   fixed-top">
  <div className="container">
    <Link className="navbar-brand fw-bold text-white"  to="home">FAKE$TORE</Link>
    <button className="navbar-toggler text-black" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <i className="fa-solid fa-bars fs-4 "></i>
    </button>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent1">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" to='home'>Home</Link>
        </li>
         <li className="nav-item">
          <Link className="nav-link" to='all'>All Product</Link>
        </li>
          <li className="nav-item">
          <Link className="nav-link" to='category'>Category</Link>
        </li>
  
       
      
          <li className="nav-item">

          <Link className="nav-link" to='brands'>Brands</Link>
        </li>
      
      </ul>
   
     <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <Link className="nav-link" to='/cart'><span><i className="fa fa-cart-shopping"></i></span></Link>
        </li>  <li className="nav-item">
          <Link className="nav-link" to='/favorite'><span><i className="fa fa-heart"></i></span></Link>
        </li>
       {uname? <>     <li className="nav-item">
          <p className="nav-link m-0 text-uppercase text-white" >{uname}</p>
        </li>
        
        <li className="nav-item">
          <p className="m-0 nav-link text-bg-danger text-center bg-opacity-75 rounded-3" onClick={()=>deleteuname()} >LogOut</p>
        </li>
       
        </>:<><li className="nav-item">
          <Link className="nav-link" to='login'><span><i className='fa fa-user'></i></span> LogIn</Link>
        </li></> 
             }
       
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}
