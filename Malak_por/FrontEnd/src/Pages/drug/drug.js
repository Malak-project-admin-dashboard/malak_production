import React, { useEffect, useState } from "react";
import axios from "axios";

import "./Drug.css";
import drage from "./قمح777.jpg";
import drage2 from "./قمحح39.jpg";
import drage3 from "./دواء.jpeg";
// import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
// import AllDrugs from "../../fetchers/drugFetcher";

export default function Drug() {
  const [drugData, setdrugData] = useState([]);

  //get all drugs data
  useEffect(() => {
    async function fetch() {
      axios
        .get("http://localhost:8000/getAllDrugs")
        .then((response) => {
          setdrugData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    fetch();
  }, []);

  return (
    <>
      {/* Blog Start */}
      <div className="container py-5" dir="rtl" lang="ar">
        <div className="row g-5">
          <div className="col-lg-8">
            {/* Blog Detail Start */}
            <div className="mb-5">
              <h3 className="mb-4">
                الحمدلله كنا السباقين بنشر الوعي حول الأدوية الخالية من الجلوتين
                والبحث ومخاطبة الجهات المعنية لوضع إشارة جلوتين فري على الأدوية
                المصنعة بالأردن وتم اصدار اول دليل أدوية خالية من الجلوتين
                واستفاد الكثير من الصيادلة وتم توزيعه على العيادات مرة تانية
                إعادة نشر المعلومات وبناء على طلب المرضى حديثي الإصابة
              </h3>
              <img
                className="img-fluid w-100 rounded mb-5"
                src={drage}
                alt=""
              />
            </div>
            {/* Blog Detail End */}
            <div className="cards">
              <div className="row">
                {drugData.map((item) => {
                  return (
                    <div className="col-lg-6">
                      <div className="card">
                        <h2 className="card-title">{item.drugName}</h2>
                        <img className="img-drage" src={item.drugUrl} alt="" />
                        <p className="card-desc pragragh">{item.drugDesc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="col-12 mt-lg-5 ">
              <a
                href=""
                className="btn btn-primary py-2  w-100 text-center bttnn"
                style={{ height: "72px" }}
              >
                مرض فقر الدم
              </a>
            </div>

            {/* Comment List Start */}
            {/* <div className="mb-5 mt-lg-5">
                            <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 mb-4">
                                أبحث في موسوعه أنيميا للأدوية
                            </h4>
                           
                          
                        </div> */}
            {/* Comment List End */}
            {/* Comment Form Start */}
            {/* <div className="bg-light rounded p-5">
                            <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 border-white mb-4">
                                هل لديك سؤال او استفسار ؟
                            </h4>
                            <br />
                            <h6 className="d-inline-block  text-uppercase ">
                                أحصل على استشاره طبية بخصوصيه تامه
                            </h6>
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
                                        <button className="btn btn-primary w-100 py-3" type="submit">
                                            إرسال إستفسارك
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div> */}
            {/* Comment Form End */}
          </div>
          {/* Sidebar Start */}
          <div className="col-lg-4" style={{ width: "28rem" }}>
            {/* Search Form Start */}
            <div className="mb-5" dir="ltr">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control p-3"
                  style={{ textAlign: "right", fontSize: "20px" }}
                  placeholder=" ...أدخل اسم الدواء"
                />
                <button
                  className="btn btn-primary px-3 bttnn"
                  style={{ height: "72px" }}
                >
                  {/* <i className="fa fa-search" /> */}
                </button>
              </div>
            </div>
            {/* Search Form End */}
            {/* Category Start */}
            {/* <div className="mb-5">
                            <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 mb-4">
                                أنواع فقر الدم
                            </h4>
                            <div
                                className="d-flex flex-column justify-content-end"
                                style={{ textAlign: "right" }}
                            >
                                <a className="h5 bg-light rounded py-2 px-3 mb-2" href="#">
                                    <i className="fa fa-angle-right me-2" />
                                    الثلاسيميا
                                </a>
                                <a className="h5 bg-light rounded py-2 px-3 mb-2" href="#">
                                    <i className="fa fa-angle-right me-2" />
                                    فقر الدم اللاتنسجي
                                </a>
                                <a className="h5 bg-light rounded py-2 px-3 mb-2" href="#">
                                    <i className="fa fa-angle-right me-2" /> فقر الدم المنجلي
                                </a>
                                <a className="h5 bg-light rounded py-2 px-3 mb-2" href="#">
                                    <i className="fa fa-angle-right me-2" />
                                    فقر الدم الناجم عن نقص الفيتامينات{" "}
                                </a>
                                <a className="h5 bg-light rounded py-2 px-3 mb-2" href="#">
                                    <i className="fa fa-angle-right me-2" />
                                    فقر الدم بسبب نقص الحديد
                                </a>
                            </div>
                        </div> */}
            {/* Tags Start */}
            <div className="mb-5 ">
              <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 mb-4">
                فرز الادويه :
              </h4>
              <div className="d-flex flex-wrap m-n1">
                <a href="" className="btn btn-primary m-1 bttnn">
                  المكملات الغذائيه
                </a>
                <a href="" className="btn btn-primary m-1 bttnn">
                  المسكنات
                </a>
                <a href="" className="btn btn-primary m-1 bttnn">
                  المضادات الحيوية
                </a>
                <a href="" className="btn btn-primary m-1 bttnn">
                  أدويه للاطفال
                </a>
                <a href="" className="btn btn-primary m-1 bttnn">
                  أدويه لكبار السن
                </a>
                <a href="" className="btn btn-primary m-1 bttnn">
                  مستحضرات تجميلية
                </a>
              </div>
            </div>
            {/* Tags End */}
            {/* Image Start */}
            <div className="mb-5">
              <img className="img-fluid rounded" src={drage2} alt="" />
            </div>
            {/* Image End */}

            <br />
            <br />
            {/* Plain Text Start */}
            <div>
              <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 ">
                طهاه متخصصن في إعداد الوصفات الخالي من الجلوتين !
              </h4>
              <div
                className="rounded text-center "
                style={{
                  padding: " 10px",
                  width: "29rem",
                  backgroundColor: " #f1e1c32e",
                }}
              >
                <p className="pragragh">
                  إذا كنت تعاني من حساسية القمح وتريد الحصول على المعلومات
                  الصحية الدقيقة والموثوقة لمساعدتك على العيش بشكل صحي وسعيد،
                  فلا داعي للبحث بعد الآن! منصة صحيه متخصصة في التثقيف بحساسية
                  القمح تضم أفضل المتخصصين في هذا المجال. <br /> <br />
                  بالإضافة إلى ذلك، نحن نقدم للطهاة المعلومات اللازمة لمساعدتهم
                  على تحضير وجبات صحية ولذيذة للمرضى الذين يعانون من حساسية
                  القمح، وذلك بواسطة مجموعة من الوصفات الصحية والمتخصصة التي تم
                  إعدادها بواسطة خبراء التغذية والأطباء المتخصصين. لا تتردد في
                  الاتصال بنا الآن للحصول على المساعدة والدعم اللازمين، وتمتع
                  بحياة صحية وسعيدة!
                  <br /> <br />
                </p>
                <h6 className="d-inline-block  text-uppercase ">أبدا من</h6>
                <br />
                <h4 className="d-inline-block text-primary text-uppercase ">
                  {" "}
                  3.5 د . أ فقط
                </h4>
                <br />
                <p />
                <Link className="btn btn-primary py-2 px-4 bttnn" to="/Recipes">
                  {" "}
                  أبدا الان
                </Link>
                {/* <button    onClick={()=>navigate("/")}  className="btn btn-primary py-2 px-4 bttnn">
                                أبدا الان
                                </button> */}
              </div>
            </div>
            {/* Plain Text End */}
          </div>
          {/* Sidebar End */}
        </div>
      </div>
      {/* Blog End */}
    </>
  );
}
