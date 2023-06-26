import React from 'react'
import { Link } from 'react-router-dom';
import {
 
    AiOutlineInstagram,
    AiOutlineFacebook,
    
  } from "react-icons/ai";

const ProfileChef = () => {
  return (
    <>
     
     <div className="container py-5"  dir="rtl" lang="ar">
        <div className="row g-5">
          <div className="col-lg-12">
            {/* Comment Form Start */}
            <div className="bg-light rounded p-5">
              <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 border-white mb-4">حدث معلوماتك الشخصيه  </h4>
              <br />
              <form>
                <div className="row g-3" style={{textAlign: 'right'}}>
                  <div className="col-12 col-sm-6">
                    <input type="text" className="form-control bg-light border-0" placeholder="أدخل  أسمك" style={{height: '55px'}} />
                  </div>
                 
                  {/* <div className="col-12 col-sm-6">
                    <input type="text" className="form-control bg-light border-0" placeholder="أدخل  أمراض مزمنه اذا وجد" style={{height: '55px'}} />
                  </div> */}
                   <div className="col-12 col-sm-6">
                    <input type="text" className="form-control bg-light border-0" placeholder="أدخل اسم محافظتك" style={{height: '55px'}} />
                  </div>
                  <div className="col-12 col-sm-6">
                    <select className="form-select bg-light border-0" style={{height: '55px'}}>
                      <option selected>الجنس</option>
                      <option value={1}>أنثى</option>
                      <option value={2}> ذكر</option>
                    </select>
                  </div>
                  <div className="col-12 col-sm-6">
                    <input type="number phone" className="form-control bg-light border-0" placeholder="أدخل رقم موبايلك " style={{height: '55px'}} />
                  </div>
                  <div className="col-12 col-sm-6">
                    <input type="email" className="form-control bg-light border-0" placeholder="أدخل  بريدك الالكتروني" style={{height: '55px'}} />
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="date" id="date" data-target-input="nearest">
                      <input type="text" className="form-control bg-light border-0 datetimepicker-input" placeholder="التاريخ" data-target="#date" data-toggle="datetimepicker" style={{height: '55px'}} />
                    </div>
                  </div>
                  {/* <div className="col-12 col-sm-6">
                    <select className="form-select bg-light border-0" style={{height: '55px'}}>
                      <option selected>حالتك الاجتماعيه</option>
                      <option value={1}>أعزب</option>
                      <option value={2}> متزوج</option>
                      <option value={1}>مطلق</option>
                      <option value={2}> ارمل</option>
                    </select>
                  </div> */}
                  {/* <div className="col-12 col-sm-6">
                    <input type="text" className="form-control bg-light border-0" placeholder="أدخل اسم دولتك " style={{height: '55px'}} />
                  </div> */}
                  {/* <div className="col-12 col-sm-6">
                    <select className="form-select bg-light border-0" style={{height: '55px'}}>
                      <option selected>حالتك المرضية</option>
                      <option value={1}>الثلاسيميا</option>
                      <option value={2}> فقر الدم اللاتنسجي</option>
                      <option value={1}>فقر الدم المنجلي</option>
                      <option value={2}>فقر الدم الناجم عن نقص الفيتامينات </option>
                      <option value={2}>فقر الدم الناجم عن نقص الحديد </option>
                    </select>
                  </div> */}
                  <div className="col-12">
                    <button className="btn btn-primary w-100 py-3" type="submit">حفظ معلومات  ملفك  الشخصي  </button>
                  </div>
                </div>
              </form>
            </div>
            
          </div>
          {/* Sidebar Start */}
        
          {/* Sidebar End */}
        </div>
      </div> 
    </>
  )
}

export default ProfileChef
