import React, { useEffect, useState } from "react";
import axios from "axios";
import './Seminar.css';
const Seminar = () => {
  const [eventData, setEventData] = useState([]);

    //get all accepted food 
    useEffect(() => {
      async function fetch() {
        axios
          .get("http://localhost:8000/getAllEvents")
          .then((response) => {
            setEventData(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }
      fetch();
    }, []);
  return (



    <div className='body'>
        
        {eventData.map((item) => {
                  return (
                    <div >
                      <div >
                        <h2 >{item.eventTitle}</h2>
                        <p>{item.eventDesc}</p>
                        <p>{item.eventDate}</p>
                      </div>
                    </div>
                  );
                })}

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
  );
}

export default Seminar;