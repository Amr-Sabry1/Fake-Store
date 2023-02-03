import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
 <footer className="bg-dark" >
        <div className="container">
            <div className="row">

                <div className="col-md-4 pt-4">
                    <h2 className="h2  border-bottom pb-3 border-light color">FAKE$TORE</h2>
                    <ul className="list-unstyled text-light footer-link-list">
                        <li>
                            <i className="fas fa-map-marker-alt fa-fw me-1"></i>
                            Damanhour ,Egypt
                        </li>
                        <li>
                            <i className="fa fa-phone fa-fw me-1"></i>
                            <a className="text-decoration-none" href="tel:010-9142-1650">010-9142-1650</a>
                        </li>
                        <li>
                            <i className="fa fa-envelope fa-fw me-1"></i>
                            <a className="text-decoration-none">amrsabry1511@gmail.com</a>
                        </li>
                    </ul>
                </div>

                       
                

                <div className="col-md-4 pt-4">
                    <h2 className="h2 text-light border-bottom pb-3 border-light">Products</h2>
                    <ul className="list-unstyled text-light footer-link-list">
                       <Link to='/category' className='text-decoration-none text-black'>
                        <li > SmartPhones</li>
                        <li > Laptops</li>
                        <li > Men's Clothing</li>
                        <li> Women's Clothing</li>
                        </Link>
                    </ul>
                </div>

                <div className="col-md-4 pt-4">
                    <h2 className="h2 text-light border-bottom pb-3 border-light">Further Info</h2>
                    <ul className="list-unstyled text-light  footer-link-list">
                      <li><Link className="text-decoration-none" to="/home">Home</Link></li>
                      <li><Link className="text-decoration-none" to="/all">All Product</Link></li>
                      <li><Link className="text-decoration-none" to="/">Shop Locations</Link></li>
                      <li><Link className="text-decoration-none" to="/">Contact</Link></li>
                    </ul>
                </div>

            </div>

            <div className="row text-light mb-4">
                <div className="col-12 mb-3">
                    <div className="w-100 my-3 border-top border-light"></div>
                </div>
                <div className="col-auto me-auto mb-md-0 mb-3">
                     <div className="d-flex">
                        <div className="icon fs-5  me-1 social-icon d-flex align-items-center justify-content-center">
                            <a href="https://www.facebook.com/profile.php?id=100009055652891" target="_blank"> <i className="fa-brands fa-facebook-f"></i></a>
                        </div>
                        <div className="icon fs-5  me-1 social-icon d-flex align-items-center justify-content-center">
                            <a href="https://twitter.com/3mr_Sabry1" target="_blank"><i className="fa-brands fa-twitter"></i></a>
                        </div>
                        <div className="icon fs-5  me-1 social-icon d-flex align-items-center justify-content-center">
                            <a href="https://eg.linkedin.com/in/amrsabry5122/ar?trk=people-guest_people_search-card" target="_blank"> <i className="fa-brands fa-linkedin"></i></a>
                        </div>
                        <div className="icon fs-5  me-1 social-icon d-flex align-items-center justify-content-center">
                            <a href="https://github.com/Amr-Sabry1" target="_blank"> <i className="fa-brands fa-github"></i></a>
                        </div>
                        <div className="icon fs-5  me-1 social-icon d-flex align-items-center justify-content-center">
                            <a href="https://instagram.com/amrsabry.1" target="_blank"> <i className="fa-brands fa-instagram"></i></a>
                        </div>

                          <div className="fs-5 rounded-circle me-1 social-icon d-flex align-items-center justify-content-center ">
                            <a href="https://amr-sabry1.github.io/my_portfolio/" target="_blank"> <button>My Portfolio</button></a>
                        </div>
                    </div>
                </div>
                <div className="col-auto">
                    <label className="sr-only" >Email address</label>
                    <div className="input-group mb-2">
                        <input type="text" className="form-control bg-dark border-light" id="subscribeEmail" placeholder="Email address"/>
                        <div className="input-group-text btn  text-light">Subscribe</div>
                    </div>
                </div>
            </div>
        </div>

        <div className="w-100 bg-black py-3">
            <div className="container">
                <div className="row pt-2">
                    <div className="col-12">
                        <p className="text-left text-light">
                            Copyright &copy; 2023 Company Name  | Designed by <b className='color'> Amr Sabry</b></p>
                    </div>
                </div>
            </div>
        </div>

    </footer>
    )
}
