import React, { useEffect, useState } from "react";
import axios from "axios";

import "./Drug.css";
import drage from "./قمح777.jpg";
import drage2 from "./قمحح39.jpg";
import drage3 from "./دواء.jpeg";
import { Link } from "react-router-dom";

export default function Drug() {
  const [drugData, setdrugData] = useState([]);
  const [filteredDrugs, setFilteredDrugs] = useState([]);

  const handleDietarySupplementsClick = () =>
    filterDrugs("Dietary_supplements");
  const handlePainkillersClick = () => filterDrugs("Painkillers");
  const handleAntibioticsClick = () => filterDrugs("Antibiotics");
  const handleChildrenMedicinesClick = () => filterDrugs("Children_medicines");
  const handleMedicinesForTheElderlyClick = () =>
    filterDrugs("Medicines_for_the_elderly");
  const handleCosmeticsClick = () => filterDrugs("Cosmetics");
  const handleAllClick = () => {
    setFilteredDrugs(drugData);
  };
  useEffect(() => {
    async function fetch() {
      axios
        .get("http://localhost:8000/getAllDrugs")
        .then((response) => {
          console.log(response.data);
          setdrugData(response.data);
          setFilteredDrugs(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    fetch();
  }, []);

  const filterDrugs = (type) => {
    const filtered = drugData.filter((drug) => drug.drugType === type);
    setFilteredDrugs(filtered);
  };

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
                {/* Render the drugs here */}
                {filteredDrugs.length > 0 ? (
                  filteredDrugs.map((drug) => (
                    <div className="col-lg-6">
                      <div className="card">
                        <h2 className="card-title">{drug.drugName}</h2>
                        <img className="img-drage" src={drug.drugUrl} alt="" />
                        <p className="card-desc pragragh">{drug.drugDesc}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-lg-12">
                    <h2>لا يوجد ادوية مطابقة</h2>
                  </div>
                )}
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
                ></button>
              </div>
            </div>

            <div className="mb-5 ">
              <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 mb-4">
                فرز الادويه :
              </h4>
              <div className="d-flex flex-wrap m-n1">
                <button
                  type="submit"
                  className="btn btn-primary m-1 bttnn"
                  onClick={handleDietarySupplementsClick}
                >
                  المكملات الغذائيه
                </button>
                <button
                  type="submit"
                  className="btn btn-primary m-1 bttnn"
                  onClick={handlePainkillersClick}
                >
                  المسكنات
                </button>
                <button
                  type="submit"
                  className="btn btn-primary m-1 bttnn"
                  onClick={handleAntibioticsClick}
                >
                  المضادات الحيوية
                </button>
                <button
                  type="submit"
                  className="btn btn-primary m-1 bttnn"
                  onClick={handleChildrenMedicinesClick}
                >
                  أدويه للاطفال
                </button>
                <button
                  type="submit"
                  className="btn btn-primary m-1 bttnn"
                  onClick={handleMedicinesForTheElderlyClick}
                >
                  أدويه لكبار السن
                </button>
                <button
                  type="submit"
                  className="btn btn-primary m-1 bttnn"
                  onClick={handleCosmeticsClick}
                >
                  مستحضرات تجميلية
                </button>
                <button
                  type="submit"
                  className="btn btn-primary m-2 bttnn"
                  onClick={handleAllClick}
                >
                  عرض الكل
                </button>
              </div>
            </div>

            <div className="mb-5">
              <img className="img-fluid rounded" src={drage2} alt="" />
            </div>

            <br />
            <br />

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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
