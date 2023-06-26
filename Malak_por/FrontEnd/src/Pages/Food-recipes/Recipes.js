import React from 'react';
import './Recipes.css';

export default function Recipes() {
  return (
<>



       {/* Search Start */}
       <div className="container-fluid bg-primary Search py-5" dir="ltr">
        <div className="container py-5">
          <div className="text-center mx-auto mb-5" style={{textAlign:"center"}}>
            <h4 className="d-inline-block text-uppercase border-bottom border-5" style={{textAlign: 'right',color:"#b58867"}}>تمتع بحياة صحية وسعيدة  </h4>
            <h3 className="display-6 mb-4 ">       ! ذا كنت تبحثين عن وصفات خاليه من الجلوتين لذيذ و شهيه , فلا داعي للبحث بعد الآن! </h3>
       
            <h4 className="text-uppercase d-inline-block" style={{color:"#b58867"}}>  مجموعة من الوصفات الصحية والمتخصصة التي تم إعدادها بواسطة خبراء التغذية و خبراء الطهي  </h4>
          </div>
          <div className="mx-auto" style={{width: '100%', maxWidth: '600px'}}>
            <div className="input-group">
              
              <div className="mb-5" >
                            <div className="input-group"   style={{ width:"550px",textAlign:"center" }} >
                           
                                <input
                                    type="text"
                                    className="form-control p-3"
                                    style={{ textAlign: "right",fontSize:"20px",color:"#b58867" }}
                                    placeholder=" ...أدخل اسم شيفك "
                                />
                                     <button className="btn btn-dark border-0 w-25" style={{fontSize:"20px", height: "72px", color:"#e6cc9f",background:"#b58867" }}>ابحث</button>
                                {/* <button className="btn btn-primary px-3 bttnn" style={{ height: "72px" }}>
                                    <i className="fa fa-search" />
                                </button> */}
                                
                            </div>
                        </div>
            </div>
          </div>
        </div>
      </div>
      {/* Search End */}

    < div className='body-Recipes'>
    <div className="row">
    <div className="col-12 h-100">
      <div className="wrap animate pop">
        <div className="overlay">
          <div className="overlay-content animate slide-left delay-2">
            <h1 className="animate slide-left pop delay-4">Trees</h1>
            <p
              className="animate slide-left pop delay-5"
              style={{ color: "rgb(253, 252, 253)", marginBottom: "2.5rem" }}
            >
              Kingdom: <em>Plantae</em>
            </p>
          </div>
          <div className="image-content animate slide delay-5" />
          <div className="dots animate">
            <div className="dot animate slide-up delay-6" />
            <div className="dot animate slide-up delay-7" />
            <div className="dot animate slide-up delay-8" />
          </div>
        </div>
        <div className="text">
          <p>
            Trees are woody perennial plants that are a member of the kingdom{" "}
            <em>Plantae</em>. All species of trees are grouped by their genus, family,
            and order. This helps make identifying and studying trees easier.
          </p>
          <p>
            Apart from providing oxygen for the planet and beauty when they bloom or
            turn color, trees are very useful. Certain species of hardwood and
            softwood trees are excellent for timber, making furniture, and paper.
          </p>
          <p>
            Apart from providing oxygen for the planet and beauty when they bloom or
            turn color, trees are very useful. Certain species of hardwood and
            softwood trees are excellent for timber, making furniture, and paper.
          </p>
          <p>
            Apart from providing oxygen for the planet and beauty when they bloom or
            turn color, trees are very useful. Certain species of hardwood and
            softwood trees are excellent for timber, making furniture, and paper.
          </p>
          <p>
            When managed properly, trees are a good source of renewable energy and
            construction material.
          </p>
        </div>
      </div>
      </div>
      </div>
      <div className="row">
      <div className="col-12 h-100">
      <div className="wrap animate pop">
        <div className="overlay">
          <div className="overlay-content animate slide-left delay-2">
            <h1 className="animate slide-left pop delay-4">Trees</h1>
            <p
              className="animate slide-left pop delay-5"
              style={{ color: "rgb(253, 252, 253)", marginBottom: "2.5rem" }}
            >
              Kingdom: <em>Plantae</em>
            </p>
          </div>
          <div className="image-content animate slide delay-5" />
          <div className="dots animate">
            <div className="dot animate slide-up delay-6" />
            <div className="dot animate slide-up delay-7" />
            <div className="dot animate slide-up delay-8" />
          </div>
        </div>
        <div className="text">
          <p>
            Trees are woody perennial plants that are a member of the kingdom{" "}
            <em>Plantae</em>. All species of trees are grouped by their genus, family,
            and order. This helps make identifying and studying trees easier.
          </p>
          <p>
            Apart from providing oxygen for the planet and beauty when they bloom or
            turn color, trees are very useful. Certain species of hardwood and
            softwood trees are excellent for timber, making furniture, and paper.
          </p>
          <p>
            Apart from providing oxygen for the planet and beauty when they bloom or
            turn color, trees are very useful. Certain species of hardwood and
            softwood trees are excellent for timber, making furniture, and paper.
          </p>
          <p>
            Apart from providing oxygen for the planet and beauty when they bloom or
            turn color, trees are very useful. Certain species of hardwood and
            softwood trees are excellent for timber, making furniture, and paper.
          </p>
          <p>
            When managed properly, trees are a good source of renewable energy and
            construction material.
          </p>
        </div>
      </div>
</div>
</div>
    
    </div>
    </>
  );
}

