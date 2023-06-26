import React from 'react'

const HomChef = () => {
  return (
    <>
    
       {/* Search Start */}
       <div className="container-fluid bg-primary py-5" dir="ltr">
        <div className="container py-5">
          <div className="text-center mx-auto mb-5" style={{textAlign:"center"}}>
            <h5 className="d-inline-block text-white text-uppercase border-bottom border-5" style={{textAlign: 'right'}}>أبحث عن طبيبك</h5>
            <h1 className="display-6 mb-4">أطباء متخصصون لعلاج الانيميا</h1>
            <h5 className="text-white fw-normal">المنصة الطبيه المتخصصه لعلاج اللأنيميا التي تعنى بتقديم محتوى طبي موثوق ... بأقلام ألاف الاطباء المعتمدين</h5>
          </div>
          <div className="mx-auto" style={{width: '100%', maxWidth: '600px'}}>
            <div className="input-group">
              
              <div className="mb-5" >
                            <div className="input-group"   style={{ width:"550px",textAlign:"center" }} >
                           
                                <input
                                    type="text"
                                    className="form-control p-3"
                                    style={{ textAlign: "right",fontSize:"20px" }}
                                    placeholder=" ...أدخل اسم الدواء"
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
      
    </>
  )
}

export default HomChef;
