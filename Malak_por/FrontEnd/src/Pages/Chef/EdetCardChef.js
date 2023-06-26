import React from 'react'
import { Link } from 'react-router-dom';
import {
 
    AiOutlineInstagram,
    AiOutlineFacebook,
    
  } from "react-icons/ai";

const EdetCardChef = () => {
  return (
    <>
           
     <div className="container py-5"  dir="rtl" lang="ar">
        <div className="row g-5">
          <div className="col-lg-8">
            {/* Comment Form Start */}
            <div className="bg-light rounded p-5">
              <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 border-white mb-4">معلومات الوصفه</h4>
              <br />
              <form>
              <div className="row g-3">
                <div className="col-12 col-sm-6">
                  <input
                    type="text"
                    className="form-control bg-light border-0"
                    placeholder="أدخل اسم الوصفه "
                    style={{ height: 55 }}
                  />
                </div>
                <div className="col-12 col-sm-6">
                  <input
                    type="email"
                    className="form-control bg-light border-0"
                    placeholder="إدخل سعر الوصفه"
                    style={{ height: 55 }}
                  />
                </div>
                <div className="col-12 col-sm-6">
                    <select className="form-select bg-light border-0" style={{height: '55px'}}>
                      <option selected>الكميه</option>
                      <option value={1}>1 كيلو</option>
                      <option value={2}> 2 كيلو</option>
                      <option value={3}>3 كيلو </option>
                    </select>
                  </div>
                  <div className="col-12 col-sm-6">
                    <select className="form-select bg-light border-0" style={{height: '55px'}}>
                      <option selected>السعر </option>
                      <option value={1}>111</option>
                      <option value={2}> 333</option>
                      <option value={3}>334 </option>
                    </select>
                  </div>
                <div className="col-12">
                  <textarea
                    className="form-control bg-light border-0"
                    rows={5}
                    placeholder="أدخل  مكونات الوصفه"
                    defaultValue={""}
                  />
                </div>
                <div className="col-12">
                  <button className="btn w-100 py-3" type="submit"  style={{ background:" #e6cc9f" }}>
                   نشر وصفتك
                  </button>
                </div>
              </div>
            </form>
            </div>
          </div>
          {/* Sidebar Start */}
          <div className="col-lg-4 text-center">
            {/*Upload imagey Start */}
            <div className="mb-5">
              <div className="ml-2 col-sm-12">
                <img src="https://placehold.it/30x60" id="preview" style={{width: '80%', height: '300px'}} className="img-thumbnail rounded-circle" />
              </div>
              <div className="ml-2 col-sm-12 py-0">
                <div id="msg" />
                <form method="post" id="image-form">
                  <input type="file" name="img[]" className="file" accept="image/*" />
                  <div className="input-group my-3">
                    <input type="text" className="form-control" disabled placeholder="أختر صوره للوصفتك" id="file" />
                    <div className="input-group-append">
                      <button type="button" className="browse btn btn-primary">تحميل...</button>
                    </div>
                  </div>
                </form>
              </div>
             
              <br />
             
              <div className="d-inline-flex align-items-center">
              <Link className="text-body px-2" to="https://www.instagram.com/fcdcharity/"  target="_blank">
              <AiOutlineInstagram className='social' />
              </Link>
              <Link className="text-body px-2" to="https://www.facebook.com/fcdcharity/?locale=ar_AR"  target="_blank">
              <AiOutlineFacebook className='social' />
              </Link>
            
            </div>
            </div>
            {/* Upload image End */}
            <hr />
           
          
          </div>
          {/* Sidebar End */}
        </div>
      </div> 
    </>
  )
}

export default EdetCardChef;
