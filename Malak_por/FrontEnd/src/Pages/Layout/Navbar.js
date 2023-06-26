import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo3 from "./Logo.png";
import { Button } from 'react-bootstrap';
import {
 
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineUser,
  AiOutlineSplitCells,
} from "react-icons/ai";

import Swal from 'sweetalert2';


export default function Navbar() {
  
  // const navLinkStyles = ({ isActive }) => {
  //   return {
  //     fontWeight: isActive ? "bold" : "normal",
  //  color: isActive ? "red" : "black",
  //   };
  // };
  
  function handleSign() {
    if (localStorage.auth == null) {
      window.location.href = "http://localhost:3001/SignUp/user";
    } else {
      Swal.fire({
        title: ` logout?  `,
        showConfirmButton: true,
        showCancelButton: true,
        confirmButtonText: "OK",
        confirmButtonColor: "#ea4d24",
        cancelButtonText: "Cancel",
        cancelButtonColor: "#ea4d24",
        icon: "warning",
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire(`  done `, "", "success");

          // updateSignStatus("signUp");
          localStorage.setItem("SignStatus", "signUp");

          localStorage.removeItem("auth");
          localStorage.removeItem("roles");
          localStorage.removeItem("userid");
          localStorage.removeItem("curruntUser");
          window.location.href = "http://localhost:3000/";
        } else Swal.fire(" Cancelled", "", "error");
      });
    }
  }

  
  return (
    <>
    {/* Topbar Start */}
    <div className="container-fluid  py-2 border-bottom d-none d-lg-block" dir="rtl" lang="ar">
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
              {/* <Link className="text-body px-2" to=""  target="_blank">
              <AiFillTwitterCircle className='social' />
              </Link>
              */}
            </div>
          </div>
          <div className="col-md-6 text-center text-lg-start pt-3 mb-2 mb-lg-0">
            <div className="d-inline-flex align-items-center">
            
              <Button
          style={{height:"50px",border:"2px solid #e6cc9f" }}
            // to="Sigin"
            onClick={() => handleSign()}
            className="btn btn-outline-danger rounded-pill py-md-3 px-md-5 mx-2"
          >
          انضم معنا    
            {/* <AiOutlineUser className='social' /> */}
          </Button>
              <Link className="text-body px-2" to="https://www.facebook.com/fcdcharity/?locale=ar_AR"  target="_blank">
              <AiOutlineSplitCells className='social' />
              </Link>
              {/* <a
                className="text-decoration-none text-primary px-2"
               
              >
                <h6 className="m-0 text-uppercase text-primary"></h6>
                <i className="bi fa-2x bi-person-fill me-2" />
                حسابي
              </a> */}
            </div>
          </div>
          
        </div>
      </div>
    </div>
    {/* Topbar End */}

     {/* Navbar Start */}
  <div className="container-fluid sticky-top py-0 Navbar bg-white shadow-sm" dir="rtl" lang="ar">
    <div className="container">
    
      <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0">
     
     
       
        <div className="collapse navbar-collapse"   id="navbarCollapse">
       
          <div className="navbar-nav ms-auto py-0">
            <a > 
            <Link className="nav-item nav-link active"  to="/">الرئيسية</Link> 
            </a>
            <a > 
            <Link className="nav-item nav-link "to="About">  من نحن</Link> 
            </a>
            
{/* 
            <a > 
            <Link className="nav-item nav-link " to="MyDrug">الاطعمه المسموحة</Link> 
            </a>
            */}

           
           
            <div className="nav-item dropdown">
              <a
                data-bs-toggle="dropdown"
              >
                    <Link  className="nav-link dropdown-toggle " to="Home">صفحات</Link> 
                
              </a>
              <div className="dropdown-menu m-0">
                {/* <a>
                <Link  className="dropdown-item" to="Name"> سؤال و جواب</Link> 
                </a> */}

                <a>
                <Link  className="dropdown-item" to="Drug">  أدوية </Link> 
                </a>

                <a>
                <Link  className="dropdown-item" to="Recipes">   أفضل الوصفات </Link> 
                </a>

                <a>
                <Link  className="dropdown-item" to="Food"> ألاطعمه المسموحه</Link> 
                </a>

                <a>
                <Link  className="dropdown-item" to="Seminar"> الورشات و الندوات  </Link> 
                </a>
                <a>
                <Link  className="dropdown-item" to="Sigin"> أطباؤنا</Link> 
                </a>
              
              </div>
            </div>
            <a > 
            <Link className="nav-item nav-link " to="Contact" >  تواصل معنا</Link> 
            </a>
           
          </div>
        </div>
        <Link to="/" className="navbar-brand">
         
         <img
            className="img-Logo3 m-0 text-uppercase"
       
           src={Logo3}
           alt=""
         />
       
       </Link>
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
  
  );
}

 