import "./Food.css";
import drage from "./قمح8.jpg";
import drage2 from "../drug/قمحح39.jpg";
// import React, { useEffect, useState } from "react";
// import axios from "axios";
import FoodCard from "./FoodCard";
const Food = () => {
  // const [foodData, setFoodData] = useState([]);

  //get all accepted food
  // useEffect(() => {
  //   async function fetch() {
  //     axios
  //       .get("http://localhost:8000/getAllFoods")
  //       .then((response) => {
          
  //         setFoodData(response.data);
  //         console.log(foodData);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }
  //   fetch();
  // }, []);

  return (
    <>
    
      {/* {foodData.map((item) => {
        return (
          <div>
            <div>
              <h2>{item.foodName}</h2>
              <img src={item.foodUrl} alt="" />
              <p>{item.foodDesc}</p>
            </div>
          </div>
        );
      })} */}

      {/* Blog Start */}
      <div className="container py-5" dir="rtl" lang="ar">
        <div className="row g-5">
          <div className="col-lg-8">
            {/* Blog Detail Start */}
            <div className="mb-5">
              <h3 className="mb-4">
                تعد حساسية الغلوتين من الاضطرابات الهضمية المزعجة التي تجعل
                المصاب يشعر بعدم الارتياح ويصاب بجملة من الأعراض الأخرى بعد
                تناول الأطعمة المحتوية على الغلوتين. ينصح المصابون بحساسية
                الغلوتين بتناول أطعمة معينة وتجنب أطعمة أخرى.
              </h3>
              <img
                className="img-fluid w-100 rounded mb-5"
                src={drage}
                alt=""
              />
            </div>
            {/* Blog Detail End */}
            <div className="cards">
              <FoodCard />
            </div>
          </div>
          {/* Sidebar Start */}
          <div className="col-lg-4" style={{ width: "28rem" }}>
            {/* Tags Start */}
            <div className="mb-5 ">
              <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 mb-4">
                فرز الاطعمه :
              </h4>
              <div className="d-flex flex-wrap m-n1">
                <a href="" className="btn btn-primary m-1 bttnn">
                  الخضار والفواكة
                </a>

                <a href="" className="btn btn-primary m-1 bttnn">
                  التسالي و الحلويات
                </a>
                <a href="" className="btn btn-primary m-1 bttnn">
                  الحبوب و البقوليات و البذور
                </a>
                <a href="" className="btn btn-primary m-1 bttnn">
                  اللحوم و الالبان بانواعها
                </a>
              </div>
            </div>
            {/* Tags End */}

            <br />
            <br />
            {/* Image Start */}
            <div className="mb-5">
              <img className="img-fluid rounded" src={drage2} alt="" />
            </div>
            {/* Image End */}

            {/* Category Start */}
            <div className="mb-5">
              <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 mb-4">
                الاغذيه المسموحه:
              </h4>
              <div
                className="d-flex flex-column justify-content-end"
                style={{ textAlign: "right", color: "#b58867" }}
              >
                <h5 className="h5 bg-light rounded py-2 px-3 mb-2" href="#">
                  <i className="fa fa-angle-right me-2" />
                  الخبز المصنوع من دقيق الأرز أو الذرة.
                </h5>
                <h5 className="h5 bg-light rounded py-2 px-3 mb-2" href="#">
                  <i className="fa fa-angle-right me-2" />
                  البقوليات والأرز.
                </h5>
                <h5 className="h5 bg-light rounded py-2 px-3 mb-2" href="#">
                  <i className="fa fa-angle-right me-2" />
                  الحليب ومشتقاته.
                </h5>
                <h5 className="h5 bg-light rounded py-2 px-3 mb-2" href="#">
                  <i className="fa fa-angle-right me-2" />
                  السمك، والدجاج، واللحوم ما عدا تلك المقلية بالطحين أو القرشلة.
                </h5>
                <h5 className="h5 bg-light rounded py-2 px-3 mb-2" href="#">
                  <i className="fa fa-angle-right me-2" />
                  البيض
                </h5>
                <h5 className="h5 bg-light rounded py-2 px-3 mb-2" href="#">
                  <i className="fa fa-angle-right me-2" />
                  جميع أنواع الدهون والزيوت.
                </h5>

                <h5 className="h5 bg-light rounded py-2 px-3 mb-2" href="#">
                  <i className="fa fa-angle-right me-2" />
                  العصير، والسكر، والمربى، والعسل، والدبس.
                </h5>

                <h5 className="h5 bg-light rounded py-2 px-3 mb-2" href="#">
                  <i className="fa fa-angle-right me-2" />
                  الملح، والفلفل، والتوابل بأنواعها.
                </h5>
                <h5 className="h5 bg-light rounded py-2 px-3 mb-2" href="#">
                  <i className="fa fa-angle-right me-2" />
                  المكسرات والبزر.
                </h5>
                <h5 className="h5 bg-light rounded py-2 px-3 mb-2" href="#">
                  <i className="fa fa-angle-right me-2" />
                  جميع المنتجات المحضرة من دقيق الذرة، أو الأرز، أو البطاطا ،أو
                  الفول، أو اللوبيا، أو الفاصوليا.
                </h5>
              </div>
            </div>
          </div>
          {/* Sidebar End */}
        </div>
      </div>
      {/* Blog End */}
    </>
  );
};

export default Food;
