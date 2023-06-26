import React from 'react'
import './Home.css';
import '../Seminars/Seminar.css';
import { FaArrowRight } from "react-icons/fa";
import {FaPills} from "react-icons/fa";
import {FaStethoscope} from "react-icons/fa";
import {FaRegCommentDots} from "react-icons/fa";
import {FaUtensils} from "react-icons/fa";
import {FaCalendarAlt} from "react-icons/fa";
import {FaAppleAlt} from "react-icons/fa";
// import { useNavigate } from 'react-router-dom';
import hero3 from "./قمح333.jpg";
import hero2 from "./قمح4.jpg";
import hero from "./قممح.webp";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from 'react-bootstrap';


export default function Home() {


  const [selectedType, setSelectedype] = useState("");
  const navigate = useNavigate();

  function handleTypeSelection(SignUpType) {
    setSelectedype(SignUpType);
    navigate(`/Sigin/${SignUpType}`);
  }




  return (
<div className='body1'>
 {/* Hero Start */}
 <div
    id="carouselExampleCaptions"
    className="carousel slide"
    data-bs-ride="carousel"
  >
    <div className="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to={0}
        className="active"
        aria-current="true"
        aria-label="Slide 1"
      />
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to={1}
        aria-label="Slide 2"
      />
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to={2}
        aria-label="Slide 3"
      />
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img   src={hero} className="d-block w-100" alt="..." style={{ height:"50rem" }}/>
        <div className="carousel-caption d-none d-md-block"style={{fontSize:"2rem" ,background:" rgba(148, 146, 146, 0.5)"}}>
          <h3>     أصدقاء مرضى حساسية القمح</h3>
          <p>
             نحن فريق متطوع من كل التخصصات قمنا بتأسيس اول جمعية في الاردن والوطن العربي لمرضى حساسية القمح مسجلة لدى وزارة التنمية الاجتماعية
            نسعى الى توفير بيئه داعمه و مكاثفه لمرضى حساسيه القمح  (السيلياك)
         
         </p>
         <div className="pt-2 btn-home">
         {
              localStorage.auth == null ? (
                <>
         <Button
         style={{color:"red",border:"2px solid #e6cc9f" }}
           
            onClick={() => handleTypeSelection("user")}
         
            className="btn btn-outline-danger rounded-pill py-md-3 px-md-5 mx-2"
          >
           إنضم معنا
          </Button>
          <Button
          style={{ backgroundColor:"#e6cc9f" }}
            // to="Sigin"
            onClick={() => handleTypeSelection("beneficiary")}
            className="btn rounded-pill py-md-3 px-md-5 mx-2"
          >
            هل انت شيف ؟
          </Button>
          </>
              ) : null}
        </div>







        </div>
      </div>
      <div className="carousel-item">
        <img src={hero2} className="d-block w-100" alt="..." style={{ height:"50rem" }} />
        <div className="carousel-caption d-none d-md-block"style={{fontSize:"2rem" ,background:" rgba(148, 146, 146, 0.5)"}}>
          <h3>  120000</h3>
          <p>
          المرضى المستفيدين من خدمات ودورات وبرامج الجمعية 500 مريض بشكل دائم
         </p>
         <div className="pt-2 btn-home">
         {
              localStorage.auth == null ? (
                <>
         <Button
         style={{color:"red",border:"2px solid #e6cc9f" }}
           
            onClick={() => handleTypeSelection("user")}
         
            className="btn btn-outline-danger rounded-pill py-md-3 px-md-5 mx-2"
          >
           إنضم معنا
          </Button>
          <Button
          style={{ backgroundColor:"#e6cc9f" }}
            // to="Sigin"
            onClick={() => handleTypeSelection("beneficiary")}
            className="btn rounded-pill py-md-3 px-md-5 mx-2"
          >
            هل انت شيف ؟
          </Button>
          </>
              ) : null}
        </div>
        </div>
      </div>
      <div className="carousel-item">
        <img src={hero3} className="d-block w-100" alt="..." style={{ height:"50rem" }}/>
        <div className="carousel-caption d-none d-md-block"style={{fontSize:"2rem" ,background:" rgba(148, 146, 146, 0.5)"}}>
          <h3>     أصدقاء مرضى حساسية القمح</h3>
          <p>
             نحن فريق متطوع من كل التخصصات قمنا بتأسيس اول جمعية في الاردن والوطن العربي لمرضى حساسية القمح مسجلة لدى وزارة التنمية الاجتماعية
            نسعى الى توفير بيئه داعمه و مكاثفه لمرضى حساسيه القمح  (السيلياك)
         
         </p>
         <div className="pt-2 btn-home">
         {
              localStorage.auth == null ? (
                <>
         <Button
         style={{color:"red",border:"2px solid #e6cc9f" }}
           
            onClick={() => handleTypeSelection("user")}
         
            className="btn btn-outline-danger rounded-pill py-md-3 px-md-5 mx-2"
          >
           إنضم معنا
          </Button>
          <Button
          style={{ backgroundColor:"#e6cc9f" }}
            // to="Sigin"
            onClick={() => handleTypeSelection("beneficiary")}
            className="btn rounded-pill py-md-3 px-md-5 mx-2"
          >
            هل انت شيف ؟
          </Button>
          </>
              ) : null}
        </div>
        </div>
      </div>
    </div>
    <button
      className="carousel-control-prev"
      
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon"  aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  {/* Hero End */}
  
{/* Services Start */}
<div className="container-fluid py-5">
    <div className="container">
      <div className="text-center mx-auto mb-5" style={{ maxWidth: 500 }}>
        <h3 className="d-inline-block text-primary text-uppercase border-bottom border-5">
          خدماتنا
        </h3>
        <h1 className="display-6">محتوى طبي شامل </h1>
      </div>
      <div className="row g-5">
        <div className="col-lg-4 col-md-6">
          <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
            <div className="service-icon mb-4">
            <FaRegCommentDots className="fa fa-2x fa-pills text-white"     style={{ transform: "rotate(22deg)" , fontSize:"50px"}} />
              {/* <i class="fa fa-2x fa-user-md text-white"></i> */}
            </div>
            <h3 className="service-title mb-3">سؤال و جواب</h3>
            <p className="m-0">مختصين للإجابه ع إستفساراتك</p>
            <a
              className="btn btn-lg rounded-pill Icon"
              href="استفسار.html"
            >
              <i className="bi" >
              <FaArrowRight className=" ourValueIcon" />
              </i>
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
            <div className="service-icon mb-4">
            <FaUtensils className="fa fa-2x fa-pills text-white"     style={{ transform: "rotate(22deg)" , fontSize:"50px"}} />
              {/* <i class="fa fa-2x fa-procedures text-white"></i> */}
            </div>
            <h3 className="service-title mb-3">أفضل الوصفات </h3>
            <p className="m-0">أهم الوصفات الغذائيه لمرضا حساسيه القمح</p>
            <a
              className="btn btn-lg btn-primary rounded-pill Icon"
              to="Login"
            >
               <i className="bi" >
              <FaArrowRight className=" ourValueIcon" />
              </i>
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
            <div className="service-icon mb-4">
            <FaStethoscope className="fa fa-2x fa-pills text-white"     style={{ transform: "rotate(22deg)" , fontSize:"50px"}} />
            </div>
            <h3 className="service-title mb-3">الدليل الطبي</h3>
            <p className="m-0">
           نخبه من ألاف الاطباء المعتمدين في تشخيص مرض حساسه القمح
            </p>
            <a
              className="btn btn-lg btn-primary rounded-pill Icon"
              href="الاطباء.html"
            >
               <i className="bi" >
              <FaArrowRight className=" ourValueIcon" />
              </i>
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
            <div className="service-icon mb-4">
            <FaAppleAlt className="fa fa-2x fa-pills text-white"     style={{ transform: "rotate(22deg)" , fontSize:"50px"}} />
              {/* <i class="fa fa-2x fa-ambulance text-white"></i> */}
            </div>
            <h3 className="service-title mb-3">موسوعه أطعمة</h3>
            <p className="m-0">
              في هذا المقال سوف نقوم بجمع قائمة بأطعمة المسموح تنولها
            </p>
            <a
              className="btn btn-lg btn-primary rounded-pill Icon"
              href="الاطعمه.html"
            >
             <i className="bi" >
              <FaArrowRight className=" ourValueIcon" />
              </i>
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
            <div className="service-icon mb-4">
              <FaPills className="fa fa-2x fa-pills text-white"     style={{ transform: "rotate(22deg)" , fontSize:"50px"}} />
            </div>
            <h3 className="service-title mb-3">موسوعه أدويه </h3>
            <p className="m-0">
          
            في هذا المقال سوف نقوم بجمع قائمة الأدوية الخالية من الجلوتين             </p>
            <a
              className="btn btn-lg btn-primary rounded-pill Icon"
             to="drag"
            >
            
              <i className="bi" >
              <FaArrowRight className=" ourValueIcon" />
              </i>
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
            <div className="service-icon mb-4">
            <FaCalendarAlt className="fa fa-2x fa-pills text-white"     style={{ transform: "rotate(22deg)" , fontSize:"50px"}} />
          
            </div>
            <h3 className=" service-title mb-3"> الورشات و الندوات</h3>
            <p className="m-0">  دورات لبث الوعي والتثقيف المجتمعي حول مرض حساسية القمح             </p>
            <a
              className="btn btn-lg btn-primary rounded-pill Icon"
              href="appointment.html"
            >
               <i className="bi" >
              <FaArrowRight className=" ourValueIcon" />
              </i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Services End */}
 {/* Appointment Start */}
 <div className="container-fluid my-5 Doctor"  dir="rtl" lang="ar">
    <div className="container py-5">
      <div className="row gx-5 p-0">
        <div className="col-lg-6 mb-5 mb-lg-0 p-0 btn-home">
          <div className="mb-4">
            <h3 className="d-inline-block text-uppercase border-bottom border-5 " style={{color:"#e6cc9f" }}>
              مواعيد :
            </h3>
            <h1 className="display-6 pt-2"   style={{color:"#e6cc9f" }} >اطلب استشارة طبيب الآن</h1>
          </div>
          <p className="text-white mb-5 pt-2 pragr1agh">
            يتم الإجابة على الاستفسارات خلال 48 ساعة، لذلك في الحالات الطبية
            الطارئة ننصحك بالتوجه إلى أقرب مركز طوارئ في منطقتك
          </p>
          <a
            className="btn btn-outline-dark rounded-pill py-3 px-5"
            href="بطاقه الدفع .html"
          >
            أبدء الان
          </a>
          <a
            className="btn rounded-pill py-3 px-5 me-3"
            style={{ backgroundColor:"#e6cc9f" }}
          
          >
            أبحث عن طبيبك
          </a>
        </div>
        <div className="col-lg-6">
          <div className="bg-white text-center rounded p-5">
            <h3 className="d-inline-block  text-uppercase pb-5"    style={{color:"#b58867" }}>
              أحصل على استشاره طبية بخصوصيه تامه{" "}
            </h3>
            <form>
              <div className="row g-3">
                <div className="col-12 col-sm-6">
                  <input
                    type="text"
                    className="form-control bg-light border-0"
                    placeholder="أدخل إسمك"
                    style={{ height: 55 }}
                  />
                </div>
                <div className="col-12 col-sm-6">
                  <input
                    type="email"
                    className="form-control bg-light border-0"
                    placeholder="إدخل بريدك الالكتروني"
                    style={{ height: 55 }}
                  />
                </div>
                <div className="col-12">
                  <input
                    type="text"
                    className="form-control bg-light border-0"
                    placeholder="حالتك المرضيه"
                    style={{ height: 55 }}
                  />
                </div>
                <div className="col-12">
                  <textarea
                    className="form-control bg-light border-0"
                    rows={5}
                    placeholder="أدخل  رسالتك النصيه"
                    defaultValue={""}
                  />
                </div>
                <div className="col-12">
                  <button className="btn w-100 py-3" type="submit"  style={{ background:" #e6cc9f" }}>
                    إرسال إستفسارك
                  </button>
                </div>
              </div>
            </form>
            {/* Comment Form End */}
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Appointment End */}
  {/* الورشات و الندوات */}
  <div className='body'>
  <div className="text-center mx-auto mb-5" style={{ maxWidth: 500 }}>
        <h3 className="d-inline-block text-primary text-uppercase border-bottom border-5">
        الورشات و الندوات

        </h3>
        <h3 className="display-6 mb-5"> معا من أجل مرضى حساسية جلوتين القمح ومساندتهم</h3>
      </div>
        <>
        <div className="container"  dir="rtl" lang="ar">
  <div className="row">
    <div className="col-lg-4">
      <div className="card card-margin">
        <div className="card-header no-border">
          {/* <h5 className="card-title">MOM</h5> */}
        </div>
        <div className="card-body pt-0">
          <div className="widget-49">
            <div className="widget-49-title-wrapper">
              <div className="widget-49-date-success">
                <span className="widget-49-date-day">09</span>
                <span className="widget-49-date-month">apr</span>
              </div>
              <div className="widget-49-meeting-info">
                <span className="widget-49-pro-title">
                إذا حابين تحضرو أسئلتكم كونوا معنا
                </span>
                <span className="widget-49-meeting-time">
                   من 1:00 الى  2:30 ظهرا
                </span>
              </div>
            </div>
       
              <div className="widget-49-meeting-item">
                <span>
                تابعونا غدا من عيادة الدكتورة يارا كتانة استشارية أمراض الجهاز الهضمي والكبد .في بث مباشر 
للحديث عن حساسية القمح والسيلياك وماهو جديد 



                </span>
              </div>
            {/* <div className="widget-49-meeting-action">
              <a href="#" className="btn btn-sm btn-flash-border-primary">
                View All
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
    <div className="col-lg-4">
      <div className="card card-margin">
        <div className="card-header no-border">
          {/* <h5 className="card-title">MOM</h5> */}
        </div>
        <div className="card-body pt-0">
          <div className="widget-49">
            <div className="widget-49-title-wrapper">
              <div className="widget-49-date-success">
                <span className="widget-49-date-day">13</span>
                <span className="widget-49-date-month">apr</span>
              </div>
              <div className="widget-49-meeting-info">
                <span className="widget-49-pro-title">
                إذا حابين تحضرو أسئلتكم كونوا معنا
                </span>
                <span className="widget-49-meeting-time">
                   من 1:00 الى  2:30 ظهرا
                </span>
              </div>
            </div>
       
              <div className="widget-49-meeting-item">
                <span>
                تابعونا غدا من عيادة الدكتورة يارا كتانة استشارية أمراض الجهاز الهضمي والكبد .في بث مباشر 
للحديث عن حساسية القمح والسيلياك وماهو جديد 



                </span>
              </div>
            {/* <div className="widget-49-meeting-action">
              <a href="#" className="btn btn-sm btn-flash-border-warning">
                View All
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
    <div className="col-lg-4">
      <div className="card card-margin">
        <div className="card-header no-border">
          {/* <h5 className="card-title">MOM</h5> */}
        </div>
        <div className="card-body pt-0">
          <div className="widget-49">
            <div className="widget-49-title-wrapper">
              <div className="widget-49-date-success">
                <span className="widget-49-date-day">22</span>
                <span className="widget-49-date-month">apr</span>
              </div>
              <div className="widget-49-meeting-info">
                <span className="widget-49-pro-title">
                إذا حابين تحضرو أسئلتكم كونوا معنا
                </span>
                <span className="widget-49-meeting-time">
                   من 1:00 الى  2:30 ظهرا
                </span>
              </div>
            </div>
       
              <div className="widget-49-meeting-item">
                <span>
                تابعونا غدا من عيادة الدكتورة يارا كتانة استشارية أمراض الجهاز الهضمي والكبد .في بث مباشر 
للحديث عن حساسية القمح والسيلياك وماهو جديد 



                </span>
              </div>
            {/* <div className="widget-49-meeting-action">
              <a href="#" className="btn btn-sm btn-flash-border-success">
                View All
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  </>
  </div>
</div>

  )
  
}
