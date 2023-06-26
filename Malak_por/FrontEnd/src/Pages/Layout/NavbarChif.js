import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo3 from "./Logo.png";
import {
 
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiFillTwitterCircle,
} from "react-icons/ai";
const NavbarChif = () => {
  return (
    <>
        {/* Topbar Start */}
    <div className="container-fluid py-2 border-bottom d-none d-lg-block" dir="rtl" lang="ar">
      <div className="container">
        <div className="row">
        
          <div className="col-md-6 text-center text-lg-end pt-3">
            <div className="d-inline-flex align-items-center">
              <Link className="text-body px-2" to="https://www.instagram.com/fcdcharity/"  target="_blank">
              <AiOutlineInstagram className='social' />
              </Link>
              <Link className="text-body px-2" to="https://www.facebook.com/fcdcharity/?locale=ar_AR"  target="_blank">
              <AiOutlineFacebook className='social' />
              </Link>
              <Link className="text-body px-2" to=""  target="_blank">
              <AiFillTwitterCircle className='social' />
              </Link>
             
            </div>
          </div>
          <div className="col-md-6 text-center text-lg-start mb-2 mb-lg-0">
            <div className="d-inline-flex align-items-center">
              <a
                className="text-decoration-none text-primary px-2"
                href="حسابي.html"
              >
                <h6 className="m-0 text-uppercase text-primary"></h6>
                <i className="bi fa-2x bi-person-fill me-2" />
                حسابي
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Topbar End */}

     {/* Navbar Start */}
  <div className="container-fluid sticky-top bg-white shadow-sm" dir="rtl" lang="ar">
    <div className="container">
      <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0">
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0">
            <a > 
            <Link className="nav-item nav-link active"  to="/">الرئيسية</Link> 
            </a>
            <a > 
            <Link className="nav-item nav-link "to="About">  من نحن</Link> 
            </a>
            

        
            <a > 
            <Link className="nav-item nav-link " to="HomChef">HomChef</Link> 
            </a>
           
            {/* <div className="nav-item dropdown">
              <a
                data-bs-toggle="dropdown"
              >
                    <Link  className="nav-link dropdown-toggle " to="Home">صفحات</Link> 
                
              </a>
              <div className="dropdown-menu m-0">
                <a>
                <Link  className="dropdown-item" to="Name"> سؤال و جواب</Link> 
                </a>

                <a>
                <Link  className="dropdown-item" to="Drug">  أدوية </Link> 
                </a>

                <a>
                <Link  className="dropdown-item" to="Recipes">   أفضل الوصفات </Link> 
                </a>

                <a>
                <Link  className="dropdown-item" to="Name"> توصيات</Link> 
                </a>

                <a>
                <Link  className="dropdown-item" to="Seminar"> الورشات و الندوات  </Link> 
                </a>
                <a>
                <Link  className="dropdown-item" to="Sigin"> أطباؤنا</Link> 
                </a>
              
              </div>
            </div> */}
            <a > 
            <Link className="nav-item nav-link " to="Contact" >  تواصل معنا</Link> 
            </a>
           
          </div>
        </div>
        <a href="index.html" className="navbar-brand">
         
          <img
             className="img-Logo3 m-0 text-uppercase"
        
            src={Logo3}
            alt=""
          />
        
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon" />
        </button>
      </nav>
    </div>
  </div>
  {/* Navbar End */}
    </>
  )
}

export default NavbarChif
